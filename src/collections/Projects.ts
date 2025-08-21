import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Proyek',
    plural: 'Proyek',
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
        { name: 'title', type: 'text', label: 'Judul Proyek', admin: { width: '60%', placeholder: 'Contoh: Implementasi Jaringan Kantor' } },
        { name: 'slug', type: 'text', unique: true, label: 'Slug URL', admin: { width: '40%', placeholder: 'implementasi-jaringan-kantor' } },
      ],
    },
    {
      name: 'category',
      type: 'array',
      label: 'Kategori',
      fields: [
        {
          name: 'value',
          type: 'text',
          admin: { placeholder: 'Contoh: Infrastruktur' },
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
    { name: 'organiser', type: 'text', label: 'Penyelenggara/Klien' },
    { name: 'imageUrl', type: 'text', label: 'Gambar Utama (URL)' },
    {
      name: 'published',
      type: 'date',
      label: 'Tanggal Publikasi',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Ringkasan',
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
    { name: 'url', type: 'text', label: 'URL Proyek' },
    { name: 'gygUrl', type: 'text', label: 'URL Eksternal' },
    { name: 'mapsUrl', type: 'text', label: 'URL Google Maps' },
    {
      name: 'verify',
      type: 'text',
      label: 'Verifikasi',
    },
    {
      name: 'review',
      type: 'textarea',
      label: 'Ulasan',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      label: 'Status',
      admin: {
        position: 'sidebar',
        description: 'Status publikasi konten.'
      },
    },
    {
      name: 'getInvolved',
      type: 'textarea',
      label: 'Cara Terlibat',
    },
  ],
}
