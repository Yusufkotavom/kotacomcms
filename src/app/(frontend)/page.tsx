import Link from 'next/link'

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
function FeaturedServices() {
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
        <div className="text-center mt-5">
          <Link href="/services" className="btn btn-outline">
            Lihat Semua Layanan
          </Link>
        </div>
      </div>
    </section>
  )
}

// Featured Projects Component
function FeaturedProjects() {
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
        <div className="text-center mt-5">
          <Link href="/projects" className="btn btn-outline">
            Lihat Semua Proyek
          </Link>
        </div>
      </div>
    </section>
  )
}

// Featured Products Component
function FeaturedProducts() {
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
        <div className="text-center mt-5">
          <Link href="/products" className="btn btn-outline">
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  )
}

// Latest Posts Component
function LatestPosts() {
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
        <div className="text-center mt-5">
          <Link href="/posts" className="btn btn-outline">
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  )
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
      <FeaturedServices />
      <FeaturedProjects />
      <FeaturedProducts />
      <LatestPosts />
      <Footer />
    </main>
  )
}
