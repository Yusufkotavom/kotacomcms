import React from 'react'

export default function SidebarGuide(): React.ReactElement {
  return (
    <div
      style={{
        padding: '12px',
        margin: '12px',
        marginTop: '8px',
        marginBottom: '12px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#f9fafb',
        fontSize: '12px',
        lineHeight: 1.45,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Panduan Singkat CMS</div>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        <li style={{ marginBottom: 4 }}>Isi kolom penting di atas: Judul, Slug, Ringkasan.</li>
        <li style={{ marginBottom: 4 }}>Gunakan URL lengkap (https://...) untuk gambar & tautan.</li>
        <li style={{ marginBottom: 4 }}>Pilih Format Konten: md (disarankan) atau html.</li>
        <li style={{ marginBottom: 4 }}>Klik Save, lalu ubah Status ke Published untuk tampil.</li>
      </ul>
      <div style={{ marginTop: 8 }}>
        Butuh bantuan?{' '}
        <a
          href="https://wa.me/6285799520350"
          target="_blank"
          rel="noreferrer noopener"
          style={{ fontWeight: 600, color: '#10b981', textDecoration: 'none' }}
        >
          WhatsApp 6285799520350
        </a>
      </div>
    </div>
  )
}

