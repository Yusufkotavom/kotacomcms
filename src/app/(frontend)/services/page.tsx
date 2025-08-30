import Link from 'next/link'
import { Suspense } from 'react'
import { getPayloadClient } from '../../../payload/payloadClient'

// Services List Component
async function ServicesList() {
  const payload = await getPayloadClient()
  
  try {
    const services = await payload.find({
      collection: 'services',
      where: {
        status: { equals: 'published' }
      },
      sort: '-published'
    })

    if (services.docs.length === 0) {
      return (
        <div className="text-center" style={{ padding: '4rem 0' }}>
          <h3>Belum ada layanan tersedia</h3>
          <p>Kami sedang mempersiapkan layanan terbaik untuk Anda.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-3">
        {services.docs.map((service: any) => (
          <div key={service.id} className="card fade-in">
            {service.imageUrl1 && (
              <img 
                src={service.imageUrl1} 
                alt={service.title}
                className="card-image"
              />
            )}
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              {service.category && service.category.length > 0 && (
                <div style={{ marginBottom: '0.5rem' }}>
                  {service.category.map((cat: any, index: number) => (
                    <span 
                      key={index}
                      style={{
                        background: 'var(--color-gray-200)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--font-size-sm)',
                        marginRight: '0.5rem'
                      }}
                    >
                      {cat.value}
                    </span>
                  ))}
                </div>
              )}
              <p className="card-description">
                {service.body ? service.body.substring(0, 150) + '...' : 'Layanan profesional dengan kualitas terbaik untuk memenuhi kebutuhan bisnis Anda.'}
              </p>
              {service.price && (
                <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                  Harga: {service.price}
                </p>
              )}
              {service.wilayah && service.wilayah.length > 0 && (
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
                  <strong>Wilayah:</strong> {service.wilayah.map((w: any) => w.value).join(', ')}
                </p>
              )}
              <Link href={`/services/${service.slug}`} className="btn btn-primary">
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  } catch (error) {
    return (
      <div className="text-center" style={{ padding: '4rem 0' }}>
        <h3>Terjadi kesalahan</h3>
        <p>Gagal memuat data layanan. Silakan coba lagi nanti.</p>
      </div>
    )
  }
}

// Services Page Component
export default function ServicesPage() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              Kotacom Agency
            </Link>
            <ul className="nav-menu">
              <li><Link href="/" className="nav-link">Beranda</Link></li>
              <li><Link href="/services" className="nav-link">Layanan</Link></li>
              <li><Link href="/projects" className="nav-link">Proyek</Link></li>
              <li><Link href="/products" className="nav-link">Produk</Link></li>
              <li><Link href="/posts" className="nav-link">Artikel</Link></li>
              <li><Link href="/about" className="nav-link">Tentang</Link></li>
              <li><Link href="/contact" className="nav-link">Kontak</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Layanan Kami</h1>
            <p className="hero-subtitle">
              Solusi teknologi lengkap untuk transformasi digital bisnis Anda. 
              Dari pengembangan web hingga konsultasi IT, kami siap membantu.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <Suspense fallback={
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <h3>Memuat layanan...</h3>
            </div>
          }>
            <ServicesList />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Kotacom Agency</h3>
              <p>
                Solusi digital terdepan untuk transformasi bisnis Anda. 
                Kami menghadirkan layanan teknologi inovatif yang mengubah cara Anda berbisnis.
              </p>
            </div>
            <div className="footer-section">
              <h3>Layanan</h3>
              <p><Link href="/services">Web Development</Link></p>
              <p><Link href="/services">Mobile Apps</Link></p>
              <p><Link href="/services">IT Consulting</Link></p>
              <p><Link href="/services">Digital Marketing</Link></p>
            </div>
            <div className="footer-section">
              <h3>Perusahaan</h3>
              <p><Link href="/about">Tentang Kami</Link></p>
              <p><Link href="/projects">Portfolio</Link></p>
              <p><Link href="/posts">Blog</Link></p>
              <p><Link href="/contact">Kontak</Link></p>
            </div>
            <div className="footer-section">
              <h3>Kontak</h3>
              <p>Email: info@kotacom.id</p>
              <p>Phone: +62 21 1234 5678</p>
              <p>Address: Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Kotacom Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}