import { NextResponse } from 'next/server'
import { whatsappService } from '@/lib/whatsapp'

export async function POST() {
  try {
    await whatsappService.initialize()
    return NextResponse.json({ message: 'WhatsApp connection initiated' })
  } catch (error) {
    console.error('Error connecting WhatsApp:', error)
    return NextResponse.json(
      { error: 'Failed to connect WhatsApp' },
      { status: 500 }
    )
  }
}