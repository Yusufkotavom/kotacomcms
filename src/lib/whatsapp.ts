import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'
import { EventEmitter } from 'events'

class WhatsAppService extends EventEmitter {
  private client: Client | null = null
  private isConnected = false
  private qrCode: string | null = null

  constructor() {
    super()
  }

  async initialize() {
    if (this.client) {
      return this.client
    }

    this.client = new Client({
      authStrategy: new LocalAuth({
        clientId: 'wa-blast-session'
      }),
      puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    })

    this.client.on('qr', (qr) => {
      console.log('QR Code received')
      this.qrCode = qr
      qrcode.generate(qr, { small: true })
      this.emit('qr', qr)
    })

    this.client.on('ready', () => {
      console.log('WhatsApp client is ready!')
      this.isConnected = true
      this.qrCode = null
      this.emit('ready')
    })

    this.client.on('authenticated', () => {
      console.log('WhatsApp client authenticated!')
      this.emit('authenticated')
    })

    this.client.on('auth_failure', (msg) => {
      console.error('Authentication failed:', msg)
      this.emit('auth_failure', msg)
    })

    this.client.on('disconnected', (reason) => {
      console.log('WhatsApp client disconnected:', reason)
      this.isConnected = false
      this.emit('disconnected', reason)
    })

    await this.client.initialize()
    return this.client
  }

  async sendMessage(to: string, message: string) {
    if (!this.client || !this.isConnected) {
      throw new Error('WhatsApp client not connected')
    }

    try {
      const result = await this.client.sendMessage(to, message)
      return result
    } catch (error) {
      console.error('Error sending message:', error)
      throw error
    }
  }

  async sendMedia(to: string, media: MessageMedia, caption?: string) {
    if (!this.client || !this.isConnected) {
      throw new Error('WhatsApp client not connected')
    }

    try {
      const result = await this.client.sendMessage(to, media, { caption })
      return result
    } catch (error) {
      console.error('Error sending media:', error)
      throw error
    }
  }

  async getChats() {
    if (!this.client || !this.isConnected) {
      throw new Error('WhatsApp client not connected')
    }

    try {
      const chats = await this.client.getChats()
      return chats
    } catch (error) {
      console.error('Error getting chats:', error)
      throw error
    }
  }

  async getContacts() {
    if (!this.client || !this.isConnected) {
      throw new Error('WhatsApp client not connected')
    }

    try {
      const contacts = await this.client.getContacts()
      return contacts
    } catch (error) {
      console.error('Error getting contacts:', error)
      throw error
    }
  }

  getConnectionStatus() {
    return {
      isConnected: this.isConnected,
      qrCode: this.qrCode
    }
  }

  async disconnect() {
    if (this.client) {
      await this.client.destroy()
      this.client = null
      this.isConnected = false
    }
  }
}

export const whatsappService = new WhatsAppService()