import Link from 'next/link'

// Product Detail Page Component
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
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
            <h1 className="hero-title">Produk Teknologi {params.slug}</h1>
            <p className="hero-subtitle">
              Produk teknologi berkualitas tinggi yang dapat meningkatkan efisiensi bisnis Anda.
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
                  background: 'var(--color-primary)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: '500'
                }}
              >
                Unggulan
              </span>
              <p style={{ 
                fontSize: 'var(--font-size-xl)', 
                color: 'var(--color-primary)', 
                fontWeight: '600',
                margin: '0'
              }}>
                Rp 1.000.000
              </p>
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
              <h2>Deskripsi Produk</h2>
              <div style={{ 
                lineHeight: '1.8', 
                color: 'var(--color-gray-700)',
                marginBottom: '2rem'
              }}>
                <p>Produk teknologi berkualitas tinggi yang dirancang khusus untuk memenuhi kebutuhan bisnis modern. Kami menyediakan solusi yang inovatif, efisien, dan dapat diandalkan untuk membantu bisnis Anda berkembang pesat di era digital.</p>
                <p>Dengan teknologi terkini dan standar kualitas tertinggi, kami memastikan setiap produk yang kami tawarkan memberikan nilai tambah yang signifikan bagi bisnis Anda.</p>
                <p>Kami berkomitmen untuk memberikan produk yang tidak hanya memenuhi ekspektasi, tetapi juga melampaui harapan pelanggan kami dengan fitur-fitur yang berkelanjutan dan dapat diandalkan.</p>
              </div>

              <div>
                <h3>Fitur Utama</h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  marginBottom: '2rem'
                }}>
                  <li style={{ 
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: 'var(--color-primary)', 
                      marginRight: '0.5rem',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    Fitur teknologi canggih
                  </li>
                  <li style={{ 
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: 'var(--color-primary)', 
                      marginRight: '0.5rem',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    Performa tinggi dan stabil
                  </li>
                  <li style={{ 
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: 'var(--color-primary)', 
                      marginRight: '0.5rem',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    Mudah digunakan dan diintegrasikan
                  </li>
                  <li style={{ 
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--color-gray-200)',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      color: 'var(--color-primary)', 
                      marginRight: '0.5rem',
                      fontSize: '1.2rem'
                    }}>✓</span>
                    Dukungan teknis 24/7
                  </li>
                </ul>
              </div>

              <div>
                <h3>Ulasan Produk</h3>
                <div style={{ 
                  background: 'var(--color-gray-50)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-gray-200)'
                }}>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Produk yang sangat memuaskan dan berkualitas tinggi. Fitur-fiturnya sangat membantu untuk meningkatkan efisiensi bisnis kami. Tim support juga sangat responsif."
                  </p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                    - Pelanggan Puas
                  </p>
                </div>
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
                <h3 style={{ marginBottom: '1.5rem' }}>Informasi Produk</h3>
                
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
                      Hardware
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
                      Premium
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Harga:</strong>
                  <p style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)', fontWeight: '600' }}>
                    Rp 1.000.000
                  </p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Harga Asli:</strong>
                  <p style={{ marginTop: '0.5rem', textDecoration: 'line-through', color: 'var(--color-gray-500)' }}>
                    Rp 1.500.000
                  </p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Status:</strong>
                  <p style={{ marginTop: '0.5rem' }}>Tersedia</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Rating:</strong>
                  <p style={{ marginTop: '0.5rem' }}>⭐⭐⭐⭐⭐ (5.0/5.0)</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <strong>Terjual:</strong>
                  <p style={{ marginTop: '0.5rem' }}>150+ unit</p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
                    Beli Sekarang
                  </Link>
                  <Link href="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                    Konsultasi
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