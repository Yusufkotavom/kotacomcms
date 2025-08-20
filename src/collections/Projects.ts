import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
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
      name: 'country',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'locale',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'organiser',
      type: 'text',
    },
    {
      name: 'imageUrl',
      type: 'text',
    },
    {
      name: 'published',
      type: 'date',
    },
    {
      name: 'description',
      type: 'textarea',
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
    // Additional fields that Astro expects for projects
    {
      name: 'cost',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'gygUrl',
      type: 'text',
    },
    {
      name: 'mapsUrl',
      type: 'text',
    },
    {
      name: 'verify',
      type: 'text',
    },
    {
      name: 'review',
      type: 'textarea',
    },
    {
      name: 'getInvolved',
      type: 'textarea',
    },
  ],
}
