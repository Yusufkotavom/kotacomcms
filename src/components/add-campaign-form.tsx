'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Users } from 'lucide-react'

interface AddCampaignFormProps {
  onClose: () => void
  onSuccess: () => void
}

interface Contact {
  id: string
  name: string
  phone: string
}

interface Group {
  id: string
  name: string
}

interface Template {
  id: string
  name: string
  content: string
}

export function AddCampaignForm({ onClose, onSuccess }: AddCampaignFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    templateId: '',
    scheduledAt: '',
    contactIds: [] as string[],
    groupIds: [] as string[]
  })
  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [groups, setGroups] = useState<Group[]>([])
  const [templates, setTemplates] = useState<Template[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsRes, groupsRes, templatesRes] = await Promise.all([
          fetch('/api/contacts?limit=1000'),
          fetch('/api/groups'),
          fetch('/api/templates')
        ])

        const [contactsData, groupsData, templatesData] = await Promise.all([
          contactsRes.json(),
          groupsRes.json(),
          templatesRes.json()
        ])

        setContacts(contactsData.contacts || [])
        setGroups(groupsData || [])
        setTemplates(templatesData || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        onSuccess()
        onClose()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to create campaign')
      }
    } catch (error) {
      console.error('Error creating campaign:', error)
      alert('Failed to create campaign')
    } finally {
      setLoading(false)
    }
  }

  const toggleContact = (contactId: string) => {
    setFormData(prev => ({
      ...prev,
      contactIds: prev.contactIds.includes(contactId)
        ? prev.contactIds.filter(id => id !== contactId)
        : [...prev.contactIds, contactId]
    }))
  }

  const toggleGroup = (groupId: string) => {
    setFormData(prev => ({
      ...prev,
      groupIds: prev.groupIds.includes(groupId)
        ? prev.groupIds.filter(id => id !== groupId)
        : [...prev.groupIds, groupId]
    }))
  }

  const selectedContacts = contacts.filter(contact => 
    formData.contactIds.includes(contact.id) ||
    formData.groupIds.some(groupId => 
      groups.find(group => group.id === groupId)?.name === contact.name // Simplified logic
    )
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Create New Campaign</CardTitle>
              <CardDescription>Set up a new messaging campaign</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Campaign Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter campaign name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Template</label>
                <select
                  value={formData.templateId}
                  onChange={(e) => setFormData({ ...formData, templateId: e.target.value })}
                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a template</option>
                  {templates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <Input
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter campaign description"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Schedule (Optional)</label>
              <Input
                type="datetime-local"
                value={formData.scheduledAt}
                onChange={(e) => setFormData({ ...formData, scheduledAt: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Select Contacts</label>
                <div className="border rounded-lg p-4 max-h-48 overflow-y-auto">
                  {contacts.map((contact) => (
                    <label
                      key={contact.id}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={formData.contactIds.includes(contact.id)}
                        onChange={() => toggleContact(contact.id)}
                        className="rounded"
                      />
                      <span className="text-sm">{contact.name} ({contact.phone})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Select Groups</label>
                <div className="border rounded-lg p-4 max-h-48 overflow-y-auto">
                  {groups.map((group) => (
                    <label
                      key={group.id}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={formData.groupIds.includes(group.id)}
                        onChange={() => toggleGroup(group.id)}
                        className="rounded"
                      />
                      <span className="text-sm">{group.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">
                  Selected Recipients: {selectedContacts.length}
                </span>
              </div>
              <p className="text-xs text-blue-700">
                This campaign will be sent to {selectedContacts.length} contacts
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? 'Creating...' : 'Create Campaign'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}