'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { WhatsAppConnection } from '@/components/whatsapp-connection'
import { DashboardStats } from '@/components/dashboard-stats'
import { ContactList } from '@/components/contact-list'
import { CampaignList } from '@/components/campaign-list'
import { TemplateList } from '@/components/template-list'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid gap-6">
            <WhatsAppConnection />
            <DashboardStats />
            <CampaignList />
          </div>
        )
      case 'contacts':
        return <ContactList />
      case 'templates':
        return <TemplateList />
      case 'campaigns':
        return <CampaignList />
      case 'messages':
        return (
          <div className="text-center py-8 text-muted-foreground">
            Messages feature coming soon...
          </div>
        )
      case 'settings':
        return (
          <div className="text-center py-8 text-muted-foreground">
            Settings feature coming soon...
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">WhatsApp Blast CRM</h1>
          <p className="text-gray-600 mt-2">
            Professional WhatsApp bulk messaging and customer relationship management
          </p>
        </div>

        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  )
}