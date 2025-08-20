import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'published'],
    pagination: {
      defaultLimit: 50, // Show more items per page
      limits: [25, 50, 100, 200], // Give options for pagination
    },
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:4321'}/posts/${doc.slug}`
    },
    livePreview: {
      url: ({ data }) => {
        return `${process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:4321'}/posts/${data?.slug}?draft=true`
      },
    },
  },
  // versions: {
  //   drafts: {
  //     autosave: {
  //       interval: 100, // Autosave drafts every 100ms
  //     },
  //     schedulePublish: true, // Enable scheduled publishing
  //   },
  //   maxPerDoc: 50,
  // },
  access: {
    // Allow all access for admin panel to see all posts
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
    readVersions: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft', // Keep existing default to match current data
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'published',
      type: 'date',
    },
    {
      name: 'lastUpdated',
      type: 'date',
    },
    {
      name: 'coverImage',
      type: 'text', // URL for simplicity
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'body',
      type: 'textarea', // can contain md or html
      maxLength: 100000, // Increased to support long posts
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
    },
  ],
}
