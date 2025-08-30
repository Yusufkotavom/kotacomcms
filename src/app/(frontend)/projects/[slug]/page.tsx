import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '../../../payload/payloadClient'

// Project Detail Page Component
export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const payload = await getPayloadClient()
  
  try {
    const project = await payload.find({
      collection: 'projects',
      where: {
        slug: { equals: params.slug },
        status: { equals: 'published' }
      }
    })

    if (!project.docs.length) {
      notFound()
    }

    const projectData = project.docs[0]

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
              <h1 className="hero-title">{projectData.title}</h1>
              <p className="hero-subtitle">
                {projectData.description ? projectData.description.substring(0, 200) + '...' : 'Proyek teknologi yang inovatif dan berkualitas tinggi untuk berbagai industri.'}
              </p>
              {projectData.organiser && (
                <p style={{ 
                  fontSize: 'var(--font-size-xl)', 
                  color: 'var(--color-gray-200)', 
                  marginBottom: '2rem',
                  fontWeight: '600'
                }}>
                  Klien: {projectData.organiser}
                </p>
              )}
              <Link href="/contact" className="btn btn-primary">
                Konsultasi Proyek
              </Link>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
              {/* Main Content */}
              <div className="fade-in">
                <h2>Detail Proyek</h2>
                {projectData.body && (
                  <div style={{ 
                    background: 'white', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '2rem'
                  }}>
                    <div dangerouslySetInnerHTML={{ 
                      __html: projectData.format === 'html' ? projectData.body : 
                        projectData.body.replace(/\n/g, '<br>') 
                    }} />
                  </div>
                )}
                
                {projectData.review && (
                  <div style={{ 
                    background: 'var(--color-gray-50)', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-gray-200)',
                    marginBottom: '2rem'
                  }}>
                    <h3>Ulasan Proyek</h3>
                    <p>{projectData.review}</p>
                  </div>
                )}

                {projectData.getInvolved && (
                  <div style={{ 
                    background: 'var(--gradient-accent)', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-gray-200)'
                  }}>
                    <h3>Cara Terlibat</h3>
                    <p>{projectData.getInvolved}</p>
                  </div>
                )}
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
                  <h3>Informasi Proyek</h3>
                  
                  {projectData.category && projectData.category.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Kategori</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {projectData.category.map((cat: any, index: number) => (
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

                  {projectData.country && projectData.country.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Lokasi</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {projectData.country.map((c: any, index: number) => (
                          <li key={index} style={{ 
                            padding: '0.25rem 0',
                            color: 'var(--color-gray-600)'
                          }}>
                            🌍 {c.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {projectData.locale && projectData.locale.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Locale</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {projectData.locale.map((l: any, index: number) => (
                          <li key={index} style={{ 
                            padding: '0.25rem 0',
                            color: 'var(--color-gray-600)'
                          }}>
                            🌐 {l.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {projectData.cost && projectData.cost.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Biaya</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {projectData.cost.map((c: any, index: number) => (
                          <li key={index} style={{ 
                            padding: '0.25rem 0',
                            color: 'var(--color-gray-600)'
                          }}>
                            💰 {c.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {projectData.verify && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Verifikasi</h4>
                      <p style={{ color: 'var(--color-gray-600)' }}>{projectData.verify}</p>
                    </div>
                  )}

                  {projectData.published && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Tanggal Publikasi</h4>
                      <p style={{ color: 'var(--color-gray-600)' }}>
                        {new Date(projectData.published).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}

                  {projectData.url && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Link Proyek</h4>
                      <a 
                        href={projectData.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ width: '100%', textAlign: 'center' }}
                      >
                        Kunjungi Proyek
                      </a>
                    </div>
                  )}

                  {projectData.gygUrl && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Link Eksternal</h4>
                      <a 
                        href={projectData.gygUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ width: '100%', textAlign: 'center' }}
                      >
                        Lihat Detail
                      </a>
                    </div>
                  )}

                  {projectData.mapsUrl && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Lokasi di Maps</h4>
                      <a 
                        href={projectData.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ width: '100%', textAlign: 'center' }}
                      >
                        Lihat di Google Maps
                      </a>
                    </div>
                  )}

                  <div style={{ 
                    background: 'var(--gradient-primary)', 
                    padding: '1.5rem', 
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'white' }}>Proyek Serupa?</h4>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                      Hubungi kami untuk diskusi proyek yang ingin Anda kembangkan
                    </p>
                    <Link href="/contact" className="btn btn-secondary">
                      Konsultasi Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="section" style={{ background: 'var(--color-gray-50)' }}>
          <div className="container">
            <h2 className="section-title">Proyek Terkait</h2>
            <div className="text-center">
              <Link href="/projects" className="btn btn-outline">
                Lihat Semua Proyek
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