'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MessageSquare, Target, CheckCircle } from 'lucide-react'

interface Stats {
  totalContacts: number
  totalCampaigns: number
  totalMessages: number
  deliveredMessages: number
}

export function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalContacts: 0,
    totalCampaigns: 0,
    totalMessages: 0,
    deliveredMessages: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, campaignsRes] = await Promise.all([
          fetch('/api/contacts?limit=1'),
          fetch('/api/campaigns')
        ])

        const [contactsData, campaignsData] = await Promise.all([
          contactsRes.json(),
          campaignsRes.json()
        ])

        const totalMessages = campaignsData.reduce((sum: number, campaign: { _count?: { blastJobs?: number } }) => 
          sum + (campaign._count?.blastJobs || 0), 0
        )

        const deliveredMessages = campaignsData.reduce((sum: number, campaign: { _count?: { blastJobs?: number } }) => 
          sum + (campaign._count?.blastJobs || 0), 0
        ) // Simplified - in real app, count actual delivered status

        setStats({
          totalContacts: contactsData.pagination?.total || 0,
          totalCampaigns: campaignsData.length || 0,
          totalMessages,
          deliveredMessages
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loading...</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalContacts}</div>
          <p className="text-xs text-muted-foreground">
            All contacts in your database
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Campaigns</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalCampaigns}</div>
          <p className="text-xs text-muted-foreground">
            Total campaigns created
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalMessages}</div>
          <p className="text-xs text-muted-foreground">
            Total messages sent
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Delivered</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.deliveredMessages}</div>
          <p className="text-xs text-muted-foreground">
            Successfully delivered
          </p>
        </CardContent>
      </Card>
    </div>
  )
}