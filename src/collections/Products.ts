import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Produk',
    plural: 'Produk',
  },
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
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Nama Produk',
          admin: {
            width: '60%',
            placeholder: 'Contoh: Laptop Kotacom Pro 14',
            description: 'Nama utama produk.',
          },
        },
        {
          name: 'slug',
          type: 'text',
          unique: true,
          label: 'Slug URL',
          admin: {
            width: '40%',
            placeholder: 'laptop-kotacom-pro-14',
            description: 'Bagian URL (huruf kecil, tanda hubung).',
          },
        },
      ],
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
        description: 'Status publikasi produk.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'price',
          type: 'text',
          label: 'Harga',
          admin: {
            width: '33%',
            placeholder: 'Contoh: 7.499.000',
            description: 'Harga tampil (angka atau teks).',
          },
        },
        {
          name: 'originalPrice',
          type: 'text',
          label: 'Harga Asli',
          admin: {
            width: '33%',
            placeholder: 'Contoh: 8.299.000',
            description: 'Harga sebelum diskon (opsional).',
          },
        },
        {
          name: 'priority',
          type: 'select',
          options: ['featured', 'bestseller', 'sale', 'new'],
          label: 'Prioritas',
          admin: {
            width: '34%',
            description: 'Penanda promosi untuk prioritas penampilan.',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'published',
          type: 'date',
          label: 'Tanggal Rilis',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'isSponsored',
          type: 'checkbox',
          defaultValue: false,
          label: 'Disponsori',
          admin: {
            width: '50%',
            description: 'Centang jika produk adalah konten sponsor.',
          },
        },
      ],
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Gambar Utama (URL)',
      admin: {
        placeholder: 'https://cdn.kotacom.id/images/produk.jpg',
        description: 'URL gambar utama produk.',
      },
    },
    {
      type: 'row',
      fields: [
        { name: 'imageUrl2', type: 'text', label: 'Gambar 2 (URL)', admin: { width: '50%' } },
        { name: 'imageUrl3', type: 'text', label: 'Gambar 3 (URL)', admin: { width: '50%' } },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Ringkasan',
      admin: {
        placeholder: 'Deskripsi singkat produk...',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Fitur Utama',
      admin: {
        description: 'Tambahkan fitur-fitur penting produk.',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          admin: { placeholder: 'Contoh: Layar 14" Full HD' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'array',
          label: 'Kategori',
          admin: { width: '33%' },
          fields: [{ name: 'value', type: 'text', admin: { placeholder: 'Contoh: Laptop' } }],
        },
        {
          name: 'country',
          type: 'array',
          label: 'Negara',
          admin: { width: '33%' },
          fields: [{ name: 'value', type: 'text', admin: { placeholder: 'Contoh: Indonesia' } }],
        },
        {
          name: 'locale',
          type: 'array',
          label: 'Locale',
          admin: { width: '34%' },
          fields: [{ name: 'value', type: 'text', admin: { placeholder: 'Contoh: id-ID' } }],
        },
      ],
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
      label: 'Format Konten',
      admin: { description: 'Gunakan Markdown (md) atau HTML.' },
    },
    {
      name: 'body',
      type: 'textarea',
      maxLength: 100000,
      label: 'Konten',
      admin: { placeholder: 'Konten lengkap produk...' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'externalRating',
          type: 'text',
          label: 'Rating Eksternal',
          admin: { width: '33%' },
        },
        { name: 'soldCount', type: 'text', label: 'Jumlah Terjual', admin: { width: '33%' } },
        { name: 'verify', type: 'text', label: 'Verifikasi', admin: { width: '34%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nama Internal', admin: { width: '33%' } },
        {
          name: 'type',
          type: 'array',
          label: 'Tipe',
          admin: { width: '67%' },
          fields: [{ name: 'value', type: 'text' }],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'url', type: 'text', label: 'URL Website', admin: { width: '50%' } },
        { name: 'otherUrl', type: 'text', label: 'URL Lain', admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'tokopediaUrl', type: 'text', label: 'Tokopedia', admin: { width: '33%' } },
        { name: 'shopeeUrl', type: 'text', label: 'Shopee', admin: { width: '33%' } },
        { name: 'blibliUrl', type: 'text', label: 'Blibli', admin: { width: '34%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'bukalapakUrl', type: 'text', label: 'Bukalapak', admin: { width: '50%' } },
        { name: 'lazadaUrl', type: 'text', label: 'Lazada', admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'affiliateCode', type: 'text', label: 'Kode Afiliasi', admin: { width: '25%' } },
        { name: 'commissionRate', type: 'text', label: 'Komisi', admin: { width: '25%' } },
        { name: 'affiliateProvider', type: 'text', label: 'Penyedia', admin: { width: '25%' } },
        { name: 'discountCode', type: 'text', label: 'Kode Diskon', admin: { width: '25%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'specialOffer', type: 'text', label: 'Penawaran Khusus', admin: { width: '50%' } },
        { name: 'ctaText', type: 'text', label: 'Teks Tombol', admin: { width: '50%' } },
      ],
    },
    {
      name: 'targetAudience',
      type: 'array',
      label: 'Target Audiens',
      admin: { description: 'Siapa yang menjadi target produk ini.' },
      fields: [
        { name: 'value', type: 'text', admin: { placeholder: 'Contoh: Pelajar, Profesional' } },
      ],
    },

    {
      name: 'review',
      type: 'textarea',
      label: 'Ulasan',
      admin: { placeholder: 'Catatan ulasan produk...' },
    },
    {
      name: 'mapsUrl',
      type: 'text',
      label: 'URL Google Maps',
      admin: { description: 'URL lokasi terkait produk (opsional).' },
    },
  ],
}
