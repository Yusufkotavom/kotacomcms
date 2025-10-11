'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AddTemplateForm } from '@/components/add-template-form'
import { Plus, Edit, Trash2, FileText } from 'lucide-react'

interface Template {
  id: string
  name: string
  content: string
  variables: string
  createdAt: string
}

export function TemplateList() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/templates')
      const data = await response.json()
      setTemplates(data || [])
    } catch (error) {
      console.error('Error fetching templates:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTemplates()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this template?')) return

    try {
      await fetch(`/api/templates/${id}`, { method: 'DELETE' })
      fetchTemplates()
    } catch (error) {
      console.error('Error deleting template:', error)
    }
  }

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(search.toLowerCase()) ||
    template.content.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Templates</CardTitle>
          <CardDescription>Loading templates...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">Loading...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Templates</CardTitle>
            <CardDescription>Manage your message templates</CardDescription>
          </div>
          <Button onClick={() => setShowAddForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No templates found
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTemplates.map((template) => {
              const variables = JSON.parse(template.variables || '[]')
              
              return (
                <div
                  key={template.id}
                  className="flex items-start justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">{template.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {template.content}
                    </p>
                    {variables.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {variables.map((variable: string) => (
                          <span
                            key={variable}
                            className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
                          >
                            {variable}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Created: {new Date(template.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(template.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
      {showAddForm && (
        <AddTemplateForm
          onClose={() => setShowAddForm(false)}
          onSuccess={() => {
            setShowAddForm(false)
            fetchTemplates()
          }}
        />
      )}
    </Card>
  )
}