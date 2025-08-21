import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Artikel',
    plural: 'Artikel',
  },
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
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Judul',
          admin: {
            width: '60%',
            placeholder: 'Contoh: Panduan Memilih Laptop untuk Kerja',
            description: 'Judul artikel yang tampil di daftar dan halaman detail.'
          },
        },
        {
          name: 'slug',
          type: 'text',
          unique: true,
          label: 'Slug URL',
          admin: {
            width: '40%',
            placeholder: 'contoh-panduan-memilih-laptop',
            description: 'Bagian URL (huruf kecil, gunakan tanda hubung).'
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
        description: 'Status publikasi konten.'
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'published',
          type: 'date',
          label: 'Tanggal Terbit',
          admin: {
            width: '50%',
            description: 'Tanggal saat artikel diterbitkan.'
          },
        },
        {
          name: 'lastUpdated',
          type: 'date',
          label: 'Terakhir Diperbarui',
          admin: {
            width: '50%',
            description: 'Tanggal update terakhir (opsional).'
          },
        },
      ],
    },
    {
      name: 'coverImage',
      type: 'text',
      label: 'Gambar Sampul (URL)',
      admin: {
        placeholder: 'https://cdn.kotacom.id/images/contoh.jpg',
        description: 'URL gambar sampul. Gunakan URL lengkap (https://...).'
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Ringkasan',
      admin: {
        placeholder: 'Tuliskan deskripsi singkat artikel...',
        description: 'Ringkasan singkat untuk SEO dan pratinjau.'
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'array',
          label: 'Kategori',
          admin: {
            width: '50%',
            description: 'Tambahkan satu atau lebih kategori.'
          },
          fields: [
            {
              name: 'value',
              type: 'text',
              admin: {
                placeholder: 'Contoh: Teknologi'
              },
            },
          ],
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Tag',
          admin: {
            width: '50%',
            description: 'Kata kunci terkait artikel. Tambahkan beberapa tag.'
          },
          fields: [
            {
              name: 'value',
              type: 'text',
              admin: {
                placeholder: 'Contoh: laptop, produktivitas'
              },
            },
          ],
        },
      ],
    },
    {
      name: 'format',
      type: 'select',
      options: ['md', 'html'],
      defaultValue: 'md',
      label: 'Format Konten',
      admin: {
        description: 'Pilih format penulisan konten.'
      },
    },
    {
      name: 'body',
      type: 'textarea',
      maxLength: 100000,
      label: 'Konten',
      admin: {
        placeholder: 'Tulis konten artikel di sini...',
        description: 'Isi konten utama. Gunakan Markdown jika format = md, atau HTML jika format = html.'
      },
    },
  ],
}
