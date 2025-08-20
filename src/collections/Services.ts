import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
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
      name: 'imageUrl1',
      type: 'text',
    },
    {
      name: 'published',
      type: 'date',
    },
    {
      name: 'wilayah',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'provider',
      type: 'text',
    },
    {
      name: 'type',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'price',
      type: 'text',
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'whatsappUrl',
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
      name: 'body',
      type: 'textarea', // can contain md or html
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
    },
    // Additional fields that Astro expects for services
    {
      name: 'imageUrl2',
      type: 'text',
    },
    {
      name: 'imageUrl3',
      type: 'text',
    },
    {
      name: 'review',
      type: 'textarea',
    },
  ],
}
