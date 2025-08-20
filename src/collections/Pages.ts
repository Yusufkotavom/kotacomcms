import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Halaman',
    plural: 'Halaman',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Judul Halaman', admin: { width: '60%' } },
        { name: 'slug', type: 'text', required: true, unique: true, label: 'Slug URL', admin: { width: '40%' } },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Ringkasan',
    },
    {
      name: 'publishDate',
      type: 'date',
      label: 'Tanggal Terbit',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Penulis',
    },
    {
      name: 'image',
      type: 'text',
      label: 'Gambar (URL)',
    },
    {
      name: 'draft',
      type: 'checkbox',
      defaultValue: false,
      label: 'Draft',
    },
    {
      name: 'body',
      type: 'textarea', // can contain md or html
      label: 'Konten',
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
      label: 'Format Konten',
    },
  ],
}
