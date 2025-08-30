import Link from 'next/link'
import { Suspense } from 'react'
import { getPayloadClient } from '../../../payload/payloadClient'

// Navigation Component
function Navigation() {
  return (
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
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Kotacom Agency</h1>
          <p className="hero-subtitle">
            Solusi digital terdepan untuk transformasi bisnis Anda. 
            Kami menghadirkan layanan teknologi inovatif yang mengubah cara Anda berbisnis.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn btn-primary">
              Jelajahi Layanan
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Featured Services Component
async function FeaturedServices() {
  const payload = await getPayloadClient()
  
  try {
    const services = await payload.find({
      collection: 'services',
      where: {
        status: { equals: 'published' }
      },
      limit: 3,
      sort: '-published'
    })

    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Layanan Unggulan</h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai layanan teknologi yang dapat membantu bisnis Anda berkembang
          </p>
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
                  <p className="card-description">
                    {service.body ? service.body.substring(0, 120) + '...' : 'Layanan profesional dengan kualitas terbaik.'}
                  </p>
                  <Link href={`/services/${service.slug}`} className="btn btn-secondary">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/services" className="btn btn-outline">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Layanan Unggulan</h2>
          <p className="section-subtitle">
            Kami menyediakan berbagai layanan teknologi yang dapat membantu bisnis Anda berkembang
          </p>
          <div className="grid grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card fade-in">
                <div className="card-content">
                  <h3 className="card-title">Layanan Teknologi {i}</h3>
                  <p className="card-description">
                    Layanan profesional dengan kualitas terbaik untuk memenuhi kebutuhan bisnis Anda.
                  </p>
                  <Link href="/services" className="btn btn-secondary">
                    Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

// Featured Projects Component
async function FeaturedProjects() {
  const payload = await getPayloadClient()
  
  try {
    const projects = await payload.find({
      collection: 'projects',
      where: {
        status: { equals: 'published' }
      },
      limit: 3,
      sort: '-published'
    })

    return (
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Proyek Terbaru</h2>
          <p className="section-subtitle">
            Hasil kerja kami yang telah berhasil diselesaikan untuk berbagai klien
          </p>
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
                  <p className="card-description">
                    {project.description ? project.description.substring(0, 120) + '...' : 'Proyek teknologi yang inovatif dan berkualitas tinggi.'}
                  </p>
                  <Link href={`/projects/${project.slug}`} className="btn btn-secondary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/projects" className="btn btn-outline">
              Lihat Semua Proyek
            </Link>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return (
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Proyek Terbaru</h2>
          <p className="section-subtitle">
            Hasil kerja kami yang telah berhasil diselesaikan untuk berbagai klien
          </p>
          <div className="grid grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card fade-in">
                <div className="card-content">
                  <h3 className="card-title">Proyek Teknologi {i}</h3>
                  <p className="card-description">
                    Proyek teknologi yang inovatif dan berkualitas tinggi untuk berbagai industri.
                  </p>
                  <Link href="/projects" className="btn btn-secondary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

// Featured Products Component
async function FeaturedProducts() {
  const payload = await getPayloadClient()
  
  try {
    const products = await payload.find({
      collection: 'products',
      where: {
        status: { equals: 'published' }
      },
      limit: 4,
      sort: '-published'
    })

    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Unggulan</h2>
          <p className="section-subtitle">
            Produk teknologi terbaik yang kami rekomendasikan untuk bisnis Anda
          </p>
          <div className="grid grid-4">
            {products.docs.map((product: any) => (
              <div key={product.id} className="card fade-in">
                {product.imageUrl && (
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="card-image"
                  />
                )}
                <div className="card-content">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-description">
                    {product.description ? product.description.substring(0, 100) + '...' : 'Produk teknologi berkualitas tinggi.'}
                  </p>
                  {product.price && (
                    <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                      Rp {product.price}
                    </p>
                  )}
                  <Link href={`/products/${product.slug}`} className="btn btn-secondary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/products" className="btn btn-outline">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produk Unggulan</h2>
          <p className="section-subtitle">
            Produk teknologi terbaik yang kami rekomendasikan untuk bisnis Anda
          </p>
          <div className="grid grid-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card fade-in">
                <div className="card-content">
                  <h3 className="card-title">Produk Teknologi {i}</h3>
                  <p className="card-description">
                    Produk teknologi berkualitas tinggi yang dapat meningkatkan efisiensi bisnis Anda.
                  </p>
                  <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                    Rp 1.000.000
                  </p>
                  <Link href="/products" className="btn btn-secondary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

// Latest Posts Component
async function LatestPosts() {
  const payload = await getPayloadClient()
  
  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        status: { equals: 'published' }
      },
      limit: 3,
      sort: '-published'
    })

    return (
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Artikel Terbaru</h2>
          <p className="section-subtitle">
            Wawasan dan tips terbaru seputar teknologi dan bisnis digital
          </p>
          <div className="grid grid-3">
            {posts.docs.map((post: any) => (
              <div key={post.id} className="card fade-in">
                {post.coverImage && (
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="card-image"
                  />
                )}
                <div className="card-content">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-description">
                    {post.description ? post.description.substring(0, 120) + '...' : 'Artikel informatif seputar teknologi dan bisnis.'}
                  </p>
                  <Link href={`/posts/${post.slug}`} className="btn btn-secondary">
                    Baca Artikel
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/posts" className="btn btn-outline">
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    return (
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Artikel Terbaru</h2>
          <p className="section-subtitle">
            Wawasan dan tips terbaru seputar teknologi dan bisnis digital
          </p>
          <div className="grid grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card fade-in">
                <div className="card-content">
                  <h3 className="card-title">Artikel Teknologi {i}</h3>
                  <p className="card-description">
                    Artikel informatif seputar teknologi dan bisnis yang dapat membantu Anda berkembang.
                  </p>
                  <Link href="/posts" className="btn btn-secondary">
                    Baca Artikel
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

// Footer Component
function Footer() {
  return (
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
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedServices />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProjects />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedProducts />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPosts />
      </Suspense>
      
      <Footer />
    </main>
  )
}
