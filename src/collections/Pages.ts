import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'publishDate',
      type: 'date',
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'image',
      type: 'text',
    },
    {
      name: 'draft',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'body',
      type: 'textarea', // can contain md or html
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
    },
  ],
}
