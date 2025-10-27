import Link from 'next/link'

// Project Detail Page Component
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
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
            <h1 className="hero-title">Proyek Teknologi {params.slug}</h1>
            <p className="hero-subtitle">
              Proyek teknologi yang inovatif dan berkualitas tinggi untuk berbagai industri.
            </p>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-gray-200)', 
              marginTop: '1rem'
            }}>
              Klien: Perusahaan Teknologi {params.slug}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            {/* Main Content */}
            <div>
              <h2>Deskripsi Proyek</h2>
              <div style={{ 
                lineHeight: '1.8', 
                color: 'var(--color-gray-700)',
                marginBottom: '2rem'
              }}>
                <p>Proyek teknologi yang inovatif dan berkualitas tinggi untuk berbagai industri. Kami menyediakan solusi yang inovatif, efisien, dan dapat diandalkan untuk membantu bisnis Anda berkembang pesat di era digital.</p>
                <p>Dengan tim ahli yang berpengalaman dan teknologi terkini, kami memastikan setiap proyek yang kami kerjakan memenuhi standar kualitas tertinggi dan memberikan nilai tambah yang signifikan bagi bisnis Anda.</p>
                <p>Kami berkomitmen untuk memberikan hasil yang tidak hanya memenuhi ekspektasi, tetapi juga melampaui harapan klien kami dengan solusi yang berkelanjutan dan dapat diandalkan.</p>
              </div>

              <div>
                <h3>Ulasan Proyek</h3>
                <div style={{ 
                  background: 'var(--color-gray-50)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-gray-200)'
                }}>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Proyek yang sangat memuaskan dan profesional. Tim Kotacom Agency sangat responsif dan memberikan solusi yang tepat untuk kebutuhan bisnis kami. Hasil yang diperoleh melebihi ekspektasi."
                  </p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                    - Klien Puas
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3>Cara Terlibat</h3>
                <p>Jika Anda tertarik untuk terlibat dalam proyek serupa atau ingin mengembangkan proyek teknologi untuk bisnis Anda, kami siap membantu. Hubungi kami untuk konsultasi dan diskusi lebih lanjut.</p>
                <Link href="/contact" className="btn btn-primary">
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ 
                background: 'var(--color-gray-50)', 
                padding: '2rem', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-gray-200)'
              }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Informasi Proyek</h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Kategori:</strong>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span 
                      style={{
                        background: 'var(--color-gray-200)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--font-size-sm)',
                        marginRight: '0.5rem',
                        display: 'inline-block',
                        marginBottom: '0.5rem'
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
                        marginRight: '0.5rem',
                        display: 'inline-block',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Digital
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Lokasi:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Jakarta, Indonesia</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Locale:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Indonesia</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Organiser:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Perusahaan Teknologi {params.slug}</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Biaya:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Rp 50.000.000</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Verifikasi:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Terverifikasi & Terpercaya</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Status:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Selesai</p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
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