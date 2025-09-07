import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const campaigns = await prisma.campaign.findMany({
      include: {
        template: true,
        _count: {
          select: {
            blastJobs: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(campaigns)
  } catch (error) {
    console.error('Error fetching campaigns:', error)
    return NextResponse.json(
      { error: 'Failed to fetch campaigns' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, templateId, scheduledAt, contactIds, groupIds } = await request.json()

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    // Get contacts from both direct contactIds and groupIds
    const contacts = await prisma.contact.findMany({
      where: {
        OR: [
          { id: { in: contactIds || [] } },
          { groups: { some: { groupId: { in: groupIds || [] } } } }
        ]
      }
    })

    const campaign = await prisma.campaign.create({
      data: {
        name,
        description,
        templateId,
        scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
        status: 'draft',
        userId: 'temp-user-id', // TODO: Get from session
        blastJobs: {
          create: contacts.map(contact => ({
            message: '', // Will be filled when campaign starts
            phone: contact.phone,
            status: 'pending',
            contactId: contact.id,
            userId: 'temp-user-id'
          }))
        }
      },
      include: {
        template: true,
        _count: {
          select: {
            blastJobs: true
          }
        }
      }
    })

    return NextResponse.json(campaign)
  } catch (error) {
    console.error('Error creating campaign:', error)
    return NextResponse.json(
      { error: 'Failed to create campaign' },
      { status: 500 }
    )
  }
}