import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '../../../../payload/payloadClient'

// Post Detail Page Component
export default async function PostDetailPage({ params }: { params: { slug: string } }) {
  const payload = await getPayloadClient()
  
  try {
    const post = await payload.find({
      collection: 'posts',
      where: {
        slug: { equals: params.slug },
        status: { equals: 'published' }
      }
    })

    if (!post.docs.length) {
      notFound()
    }

    const postData = post.docs[0]

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

        {/* Article Header */}
        <section className="section" style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
              {/* Article Content */}
              <div className="fade-in">
                <div style={{ marginBottom: '2rem' }}>
                  <Link href="/posts" style={{ 
                    color: 'var(--color-gray-600)', 
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    ← Kembali ke Artikel
                  </Link>
                  
                  <h1 style={{ 
                    fontSize: 'var(--font-size-4xl)', 
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                  }}>
                    {postData.title}
                  </h1>
                  
                  {postData.description && (
                    <p style={{ 
                      fontSize: 'var(--font-size-lg)', 
                      color: 'var(--color-gray-600)',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {postData.description}
                    </p>
                  )}

                  {/* Meta Information */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1rem', 
                    alignItems: 'center',
                    marginBottom: '2rem',
                    padding: '1rem',
                    background: 'var(--color-gray-50)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-gray-200)'
                  }}>
                    {postData.published && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📅</span>
                        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                          {new Date(postData.published).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                    
                    {postData.lastUpdated && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>🔄</span>
                        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                          Update: {new Date(postData.lastUpdated).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}

                    {postData.format && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📝</span>
                        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
                          Format: {postData.format.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Categories and Tags */}
                  {(postData.category || postData.tags) && (
                    <div style={{ marginBottom: '2rem' }}>
                      {postData.category && postData.category.length > 0 && (
                        <div style={{ marginBottom: '1rem' }}>
                          <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Kategori:</h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {postData.category.map((cat: any, index: number) => (
                              <span 
                                key={index}
                                style={{
                                  background: 'var(--color-gray-200)',
                                  padding: '0.5rem 1rem',
                                  borderRadius: 'var(--radius-md)',
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: '500'
                                }}
                              >
                                {cat.value}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {postData.tags && postData.tags.length > 0 && (
                        <div>
                          <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Tag:</h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {postData.tags.map((tag: any, index: number) => (
                              <span 
                                key={index}
                                style={{
                                  background: 'var(--color-gray-100)',
                                  padding: '0.5rem 1rem',
                                  borderRadius: 'var(--radius-md)',
                                  fontSize: 'var(--font-size-sm)',
                                  color: 'var(--color-gray-600)'
                                }}
                              >
                                #{tag.value}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Article Content */}
                {postData.body && (
                  <article style={{ 
                    background: 'white', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    lineHeight: '1.8',
                    fontSize: 'var(--font-size-lg)'
                  }}>
                    <div dangerouslySetInnerHTML={{ 
                      __html: postData.format === 'html' ? postData.body : 
                        postData.body.replace(/\n/g, '<br>') 
                    }} />
                  </article>
                )}

                {/* Share Section */}
                <div style={{ 
                  marginTop: '3rem',
                  padding: '2rem',
                  background: 'var(--color-gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-gray-200)',
                  textAlign: 'center'
                }}>
                  <h3 style={{ marginBottom: '1rem' }}>Bagikan Artikel</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--color-gray-600)' }}>
                    Jika artikel ini bermanfaat, bagikan kepada teman dan kolega Anda
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary">
                      📱 WhatsApp
                    </button>
                    <button className="btn btn-outline">
                      📧 Email
                    </button>
                    <button className="btn btn-outline">
                      🔗 Copy Link
                    </button>
                  </div>
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
                  <h3 style={{ marginBottom: '1.5rem' }}>Artikel Terkait</h3>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--font-size-sm)' }}>
                      Artikel lain yang mungkin menarik untuk Anda
                    </p>
                  </div>

                  <div style={{ 
                    background: 'var(--gradient-accent)', 
                    padding: '1.5rem', 
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-gray-200)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Newsletter</h4>
                    <p style={{ 
                      marginBottom: '1rem', 
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-gray-600)'
                    }}>
                      Dapatkan artikel terbaru langsung di email Anda
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <input
                        type="email"
                        placeholder="Masukkan email Anda"
                        style={{
                          padding: '0.75rem',
                          border: '1px solid var(--color-gray-300)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--font-size-sm)'
                        }}
                      />
                      <button className="btn btn-primary" style={{ fontSize: 'var(--font-size-sm)' }}>
                        Berlangganan
                      </button>
                    </div>
                  </div>

                  <div style={{ 
                    background: 'var(--gradient-primary)', 
                    padding: '1.5rem', 
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'white' }}>Butuh Konsultasi?</h4>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.9, fontSize: 'var(--font-size-sm)' }}>
                      Tim kami siap membantu Anda dengan solusi teknologi terbaik
                    </p>
                    <Link href="/contact" className="btn btn-secondary">
                      Hubungi Kami
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section" style={{ background: 'var(--color-gray-50)' }}>
          <div className="container">
            <h2 className="section-title">Artikel Terkait</h2>
            <div className="text-center">
              <Link href="/posts" className="btn btn-outline">
                Lihat Semua Artikel
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
  } catch (error) {
    notFound()
  }
}