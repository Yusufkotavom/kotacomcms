import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Layanan',
    plural: 'Layanan',
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
        { name: 'title', type: 'text', label: 'Nama Layanan', admin: { width: '60%', placeholder: 'Contoh: Instalasi Jaringan Kantor' } },
        { name: 'slug', type: 'text', unique: true, label: 'Slug URL', admin: { width: '40%', placeholder: 'instalasi-jaringan-kantor' } },
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
          admin: { placeholder: 'Contoh: Jaringan' },
        },
      ],
    },
    { name: 'imageUrl1', type: 'text', label: 'Gambar Utama (URL)' },
    {
      name: 'published',
      type: 'date',
      label: 'Tanggal Publikasi',
    },
    {
      name: 'wilayah',
      type: 'array',
      label: 'Wilayah',
      fields: [
        {
          name: 'value',
          type: 'text',
          admin: { placeholder: 'Contoh: Jakarta' },
        },
      ],
    },
    { name: 'provider', type: 'text', label: 'Penyedia' },
    {
      name: 'type',
      type: 'array',
      label: 'Jenis Layanan',
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
      label: 'Harga',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL Website',
    },
    {
      name: 'whatsappUrl',
      type: 'text',
      label: 'URL WhatsApp',
    },
    {
      name: 'mapsUrl',
      type: 'text',
      label: 'URL Google Maps',
    },
    {
      name: 'verify',
      type: 'text',
      label: 'Verifikasi',
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
    // Additional fields that Astro expects for services
    {
      name: 'imageUrl2',
      type: 'text',
      label: 'Gambar 2 (URL)'
    },
    {
      name: 'imageUrl3',
      type: 'text',
      label: 'Gambar 3 (URL)'
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
      name: 'review',
      type: 'textarea',
      label: 'Ulasan',
    },
  ],
}
