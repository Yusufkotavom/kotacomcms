import Link from 'next/link'
import { Suspense } from 'react'
import { getPayloadClient } from '../../../payload/payloadClient'

// Projects List Component
async function ProjectsList() {
  const payload = await getPayloadClient()
  
  try {
    const projects = await payload.find({
      collection: 'projects',
      where: {
        status: { equals: 'published' }
      },
      sort: '-published'
    })

    if (projects.docs.length === 0) {
      return (
        <div className="text-center" style={{ padding: '4rem 0' }}>
          <h3>Belum ada proyek tersedia</h3>
          <p>Kami sedang mempersiapkan portfolio proyek terbaik untuk Anda.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-3">
        {projects.docs.map((project: any) => (
          <div key={project.id} className="card fade-in">
            {project.imageUrl && (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="card-image"
              />
            )}
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              {project.category && project.category.length > 0 && (
                <div style={{ marginBottom: '0.5rem' }}>
                  {project.category.map((cat: any, index: number) => (
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
                {project.description ? project.description.substring(0, 150) + '...' : 'Proyek teknologi yang inovatif dan berkualitas tinggi untuk berbagai industri.'}
              </p>
              {project.organiser && (
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
                  <strong>Klien:</strong> {project.organiser}
                </p>
              )}
              {project.country && project.country.length > 0 && (
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
                  <strong>Lokasi:</strong> {project.country.map((c: any) => c.value).join(', ')}
                </p>
              )}
              <Link href={`/projects/${project.slug}`} className="btn btn-primary">
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
        <p>Gagal memuat data proyek. Silakan coba lagi nanti.</p>
      </div>
    )
  }
}

// Projects Page Component
export default function ProjectsPage() {
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
            <h1 className="hero-title">Portfolio Proyek</h1>
            <p className="hero-subtitle">
              Hasil kerja kami yang telah berhasil diselesaikan untuk berbagai klien. 
              Setiap proyek mencerminkan dedikasi kami terhadap kualitas dan inovasi.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="section">
        <div className="container">
          <Suspense fallback={
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <h3>Memuat proyek...</h3>
            </div>
          }>
            <ProjectsList />
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