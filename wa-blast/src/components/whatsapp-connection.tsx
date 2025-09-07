'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { QrCode, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface WhatsAppStatus {
  isConnected: boolean
  qrCode: string | null
}

export function WhatsAppConnection() {
  const [status, setStatus] = useState<WhatsAppStatus>({
    isConnected: false,
    qrCode: null
  })
  const [isConnecting, setIsConnecting] = useState(false)

  const checkStatus = async () => {
    try {
      const response = await fetch('/api/whatsapp/status')
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error('Error checking WhatsApp status:', error)
    }
  }

  const connect = async () => {
    setIsConnecting(true)
    try {
      await fetch('/api/whatsapp/connect', { method: 'POST' })
      // Start polling for status updates
      const interval = setInterval(checkStatus, 2000)
      setTimeout(() => clearInterval(interval), 60000) // Stop after 1 minute
    } catch (error) {
      console.error('Error connecting WhatsApp:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  useEffect(() => {
    checkStatus()
    const interval = setInterval(checkStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="h-5 w-5" />
          WhatsApp Connection
        </CardTitle>
        <CardDescription>
          Connect your WhatsApp account to start sending messages
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status.isConnected ? (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span>Connected to WhatsApp</span>
          </div>
        ) : status.qrCode ? (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Scan this QR code with your WhatsApp mobile app
              </p>
              <div className="bg-white p-4 rounded-lg inline-block">
                <pre className="text-xs font-mono">{status.qrCode}</pre>
              </div>
            </div>
            <Button onClick={checkStatus} variant="outline" className="w-full">
              Check Connection Status
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <XCircle className="h-5 w-5" />
              <span>Not connected</span>
            </div>
            <Button 
              onClick={connect} 
              disabled={isConnecting}
              className="w-full"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                'Connect WhatsApp'
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}