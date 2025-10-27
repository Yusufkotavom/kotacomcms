import Link from 'next/link'

// Post Detail Page Component
export default function PostDetailPage({ params }: { params: { slug: string } }) {
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
            <h1 className="hero-title">Artikel Teknologi {params.slug}</h1>
            <p className="hero-subtitle">
              Artikel informatif seputar teknologi dan bisnis yang dapat membantu Anda berkembang.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}>
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
                Bisnis
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
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            {/* Main Content */}
            <div>
              <div style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '2rem'
              }}>
                <div style={{ 
                  lineHeight: '1.8', 
                  color: 'var(--color-gray-700)',
                  fontSize: 'var(--font-size-lg)'
                }}>
                  <p>Artikel informatif seputar teknologi dan bisnis yang dapat membantu Anda berkembang. Kami menyediakan wawasan yang inovatif, praktis, dan dapat diandalkan untuk membantu bisnis Anda berkembang pesat di era digital.</p>
                  <p>Dengan tim ahli yang berpengalaman dan pengetahuan terkini, kami memastikan setiap artikel yang kami tulis memberikan nilai tambah yang signifikan bagi pembaca kami.</p>
                  <p>Kami berkomitmen untuk memberikan konten yang tidak hanya informatif, tetapi juga inspiratif dan dapat diterapkan dalam kehidupan sehari-hari untuk kemajuan bisnis dan karir Anda.</p>
                  <p>Artikel ini membahas berbagai aspek teknologi modern yang relevan dengan kebutuhan bisnis saat ini, termasuk tren terbaru, best practices, dan strategi implementasi yang efektif.</p>
                  <p>Kami juga menyertakan studi kasus dan contoh nyata untuk memberikan pemahaman yang lebih mendalam tentang bagaimana teknologi dapat mengubah cara Anda berbisnis.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ 
                background: 'var(--color-gray-50)', 
                padding: '2rem', 
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-gray-200)',
                marginBottom: '2rem'
              }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Artikel Terkait</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <Link href="/posts" style={{ 
                    color: 'var(--color-primary)', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)'
                  }}>
                    → Teknologi AI untuk Bisnis
                  </Link>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <Link href="/posts" style={{ 
                    color: 'var(--color-primary)', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)'
                  }}>
                    → Digital Marketing Trends 2024
                  </Link>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <Link href="/posts" style={{ 
                    color: 'var(--color-primary)', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)'
                  }}>
                    → Cloud Computing Solutions
                  </Link>
                </div>
              </div>

              <div style={{ 
                background: 'var(--gradient-primary)', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-lg)',
                color: 'white',
                textAlign: 'center'
              }}>
                <h4 style={{ marginBottom: '1rem', color: 'white' }}>Newsletter</h4>
                <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                  Dapatkan artikel terbaru langsung di email Anda
                </p>
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    marginBottom: '1rem',
                    fontSize: 'var(--font-size-sm)'
                  }}
                />
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  Berlangganan
                </button>
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