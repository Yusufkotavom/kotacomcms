import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { whatsappService } from '@/lib/whatsapp'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const campaign = await prisma.campaign.findUnique({
      where: { id },
      include: {
        template: true,
        blastJobs: {
          where: {
            status: 'pending'
          }
        }
      }
    })

    if (!campaign) {
      return NextResponse.json(
        { error: 'Campaign not found' },
        { status: 404 }
      )
    }

    if (campaign.status !== 'draft') {
      return NextResponse.json(
        { error: 'Campaign is not in draft status' },
        { status: 400 }
      )
    }

    // Update campaign status
    await prisma.campaign.update({
      where: { id },
      data: { status: 'running' }
    })

    // Process blast jobs
    const template = campaign.template
    const message = template?.content || ''

    for (const job of campaign.blastJobs) {
      try {
        // Replace variables in message
        let processedMessage = message
        if (job.contactId) {
          const contact = await prisma.contact.findUnique({
            where: { id: job.contactId }
          })
          
          if (contact) {
            processedMessage = processedMessage
              .replace(/\{\{name\}\}/g, contact.name)
              .replace(/\{\{phone\}\}/g, contact.phone)
              .replace(/\{\{email\}\}/g, contact.email || '')
          }
        }

        // Update job with processed message
        await prisma.blastJob.update({
          where: { id: job.id },
          data: { 
            message: processedMessage,
            status: 'sending'
          }
        })

        // Send message via WhatsApp
        await whatsappService.sendMessage(job.phone, processedMessage)

        // Update job status
        await prisma.blastJob.update({
          where: { id: job.id },
          data: { 
            status: 'sent',
            sentAt: new Date()
          }
        })

        // Add delay between messages to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000))

      } catch (error) {
        console.error(`Error sending message to ${job.phone}:`, error)
        
        await prisma.blastJob.update({
          where: { id: job.id },
          data: { 
            status: 'failed',
            error: error instanceof Error ? error.message : 'Unknown error'
          }
        })
      }
    }

    // Update campaign status to completed
    await prisma.campaign.update({
      where: { id },
      data: { status: 'completed' }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error starting campaign:', error)
    return NextResponse.json(
      { error: 'Failed to start campaign' },
      { status: 500 }
    )
  }
}