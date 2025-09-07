import { NextResponse } from 'next/server'
import { whatsappService } from '@/lib/whatsapp'

export async function GET() {
  try {
    const status = whatsappService.getConnectionStatus()
    return NextResponse.json(status)
  } catch (error) {
    console.error('Error getting WhatsApp status:', error)
    return NextResponse.json(
      { error: 'Failed to get WhatsApp status' },
      { status: 500 }
    )
  }
}