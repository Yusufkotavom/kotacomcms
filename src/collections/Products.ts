import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'price', 'published'],
    pagination: {
      defaultLimit: 50, // Show more items per page
      limits: [25, 50, 100, 200], // Give options for pagination
    },
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:4321'}/products/${doc.slug}`
    },
  },
  access: {
    read: () => true,
    create: () => true,
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
      name: 'imageUrl',
      type: 'text',
    },
    {
      name: 'price',
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
      maxLength: 100000, // Increased to support long content
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
    },
    // Additional fields that Astro expects for products
    {
      name: 'verify',
      type: 'text',
    },
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
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'name',
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
      name: 'url',
      type: 'text',
    },
    {
      name: 'otherUrl',
      type: 'text',
    },
    {
      name: 'tokopediaUrl',
      type: 'text',
    },
    {
      name: 'shopeeUrl',
      type: 'text',
    },
    {
      name: 'blibliUrl',
      type: 'text',
    },
    {
      name: 'bukalapakUrl',
      type: 'text',
    },
    {
      name: 'lazadaUrl',
      type: 'text',
    },
    {
      name: 'mapsUrl',
      type: 'text',
    },
    {
      name: 'affiliateCode',
      type: 'text',
    },
    {
      name: 'commissionRate',
      type: 'text',
    },
    {
      name: 'affiliateProvider',
      type: 'text',
    },
    {
      name: 'discountCode',
      type: 'text',
    },
    {
      name: 'specialOffer',
      type: 'text',
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'priority',
      type: 'select',
      options: ['featured', 'bestseller', 'sale', 'new'],
    },
    {
      name: 'externalRating',
      type: 'text',
    },
    {
      name: 'soldCount',
      type: 'text',
    },
    {
      name: 'originalPrice',
      type: 'text',
    },
    {
      name: 'isSponsored',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'targetAudience',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
  ],
}
