import Link from 'next/link'

// Service Detail Page Component
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
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
            <h1 className="hero-title">Layanan Teknologi {params.slug}</h1>
            <p className="hero-subtitle">
              Layanan profesional dengan kualitas terbaik untuk memenuhi kebutuhan bisnis Anda.
            </p>
            <p style={{ 
              fontSize: 'var(--font-size-xl)', 
              color: 'var(--color-gray-200)', 
              marginBottom: '2rem',
              fontWeight: '600'
            }}>
              Harga: Rp 1.000.000
            </p>
            <Link href="/contact" className="btn btn-primary">
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Main Content */}
            <div className="fade-in">
              <h2>Detail Layanan</h2>
              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem'
              }}>
                <p>Layanan teknologi profesional yang dirancang khusus untuk memenuhi kebutuhan bisnis modern. Kami menyediakan solusi yang inovatif, efisien, dan dapat diandalkan untuk membantu bisnis Anda berkembang pesat di era digital.</p>
                <p>Dengan tim ahli yang berpengalaman dan teknologi terkini, kami memastikan setiap layanan yang kami berikan memenuhi standar kualitas tertinggi dan memberikan nilai tambah yang signifikan bagi bisnis Anda.</p>
                <p>Kami berkomitmen untuk memberikan layanan yang tidak hanya memenuhi ekspektasi, tetapi juga melampaui harapan klien kami dengan solusi yang berkelanjutan dan dapat diandalkan.</p>
              </div>
              
              <div style={{ 
                background: 'var(--color-gray-50)', 
                padding: '2rem', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-gray-200)'
              }}>
                <h3>Ulasan Layanan</h3>
                <p>"Layanan yang sangat memuaskan dan profesional. Tim Kotacom Agency sangat responsif dan memberikan solusi yang tepat untuk kebutuhan bisnis kami. Hasil yang diperoleh melebihi ekspektasi."</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="fade-in">
              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                position: 'sticky',
                top: '120px'
              }}>
                <h3>Informasi Layanan</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Kategori</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span 
                      style={{
                        background: 'var(--color-gray-200)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '500'
                      }}
                    >
                      Teknologi
                    </span>
                    <span 
                      style={{
                        background: 'var(--color-gray-200)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '500'
                      }}
                    >
                      Digital
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Jenis Layanan</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span 
                      style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '500'
                      }}
                    >
                      Konsultasi
                    </span>
                    <span 
                      style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '500'
                      }}
                    >
                      Implementasi
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Wilayah Layanan</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ 
                      padding: '0.25rem 0',
                      color: 'var(--color-gray-600)'
                    }}>
                      📍 Jakarta
                    </li>
                    <li style={{ 
                      padding: '0.25rem 0',
                      color: 'var(--color-gray-600)'
                    }}>
                      📍 Bandung
                    </li>
                    <li style={{ 
                      padding: '0.25rem 0',
                      color: 'var(--color-gray-600)'
                    }}>
                      📍 Surabaya
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Penyedia</h4>
                  <p style={{ color: 'var(--color-gray-600)' }}>Kotacom Agency</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Verifikasi</h4>
                  <p style={{ color: 'var(--color-gray-600)' }}>Terverifikasi & Terpercaya</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Tanggal Publikasi</h4>
                  <p style={{ color: 'var(--color-gray-600)' }}>
                    {new Date().toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                <div style={{ 
                  background: 'var(--gradient-primary)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-lg)',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <h4 style={{ marginBottom: '1rem', color: 'white' }}>Siap Memulai?</h4>
                  <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                    Hubungi kami untuk konsultasi gratis dan proposal yang disesuaikan
                  </p>
                  <Link href="/contact" className="btn btn-secondary">
                    Hubungi Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Layanan Terkait</h2>
          <div className="text-center">
            <Link href="/services" className="btn btn-outline">
              Lihat Semua Layanan
            </Link>
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