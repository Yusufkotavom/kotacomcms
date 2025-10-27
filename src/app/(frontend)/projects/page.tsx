import Link from 'next/link'

// Projects List Component
function ProjectsList() {
  return (
    <div className="grid grid-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="card fade-in">
          <div className="card-content">
            <h3 className="card-title">Proyek Teknologi {i}</h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <span 
                style={{
                  background: 'var(--color-gray-200)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-sm)',
                  marginRight: '0.5rem'
                }}
              >
                Infrastruktur
              </span>
              <span 
                style={{
                  background: 'var(--color-gray-200)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-sm)',
                  marginRight: '0.5rem'
                }}
              >
                Digital
              </span>
            </div>
            <p className="card-description">
              Proyek teknologi yang inovatif dan berkualitas tinggi untuk berbagai industri.
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
              <strong>Klien:</strong> Perusahaan Teknologi {i}
            </p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: '1rem' }}>
              <strong>Lokasi:</strong> Jakarta, Indonesia
            </p>
            <Link href="/projects" className="btn btn-primary">
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
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
          <ProjectsList />
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