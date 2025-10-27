import Link from 'next/link'

// About Page Component
export default function AboutPage() {
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
            <h1 className="hero-title">Tentang Kami</h1>
            <p className="hero-subtitle">
              Kotacom Agency adalah mitra terpercaya untuk transformasi digital bisnis Anda. 
              Kami menggabungkan kreativitas, teknologi, dan strategi untuk menciptakan solusi yang berdampak.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="fade-in">
              <h2>Misi Kami</h2>
              <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: '1.5rem' }}>
                Menjadi agensi digital terdepan yang membantu bisnis Indonesia bertransformasi 
                dan berkembang di era digital melalui solusi teknologi yang inovatif dan berkualitas tinggi.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Kami percaya bahwa setiap bisnis memiliki potensi untuk berkembang pesat dengan 
                memanfaatkan teknologi yang tepat. Itulah mengapa kami berkomitmen untuk 
                memberikan solusi yang disesuaikan dengan kebutuhan spesifik setiap klien.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Mulai Konsultasi
              </Link>
            </div>
            <div className="fade-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '300px',
                height: '300px',
                background: 'var(--gradient-primary)',
                borderRadius: '50%',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'bold'
              }}>
                Digital<br />Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Nilai-Nilai Kami</h2>
          <div className="grid grid-3">
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  🚀
                </div>
                <h3>Inovasi</h3>
                <p>
                  Kami selalu mencari cara baru dan kreatif untuk menyelesaikan 
                  tantangan bisnis dengan teknologi terkini.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  ⭐
                </div>
                <h3>Kualitas</h3>
                <p>
                  Setiap proyek kami kerjakan dengan standar kualitas tertinggi, 
                  memastikan hasil yang memuaskan dan tahan lama.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  🤝
                </div>
                <h3>Kolaborasi</h3>
                <p>
                  Kami bekerja sama dengan klien sebagai mitra strategis, 
                  memahami kebutuhan dan memberikan solusi terbaik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tim Kami</h2>
          <p className="section-subtitle">
            Tim profesional yang berpengalaman dalam berbagai bidang teknologi dan digital
          </p>
          <div className="grid grid-4">
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold'
                }}>
                  JD
                </div>
                <h3>John Doe</h3>
                <p style={{ color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
                  CEO & Founder
                </p>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                  Ahli strategi digital dengan pengalaman 10+ tahun di industri teknologi.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold'
                }}>
                  JS
                </div>
                <h3>Jane Smith</h3>
                <p style={{ color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
                  CTO
                </p>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                  Spesialis teknologi dengan keahlian dalam pengembangan software dan AI.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold'
                }}>
                  MJ
                </div>
                <h3>Mike Johnson</h3>
                <p style={{ color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
                  Head of Design
                </p>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                  Desainer UX/UI yang kreatif dengan passion untuk user experience yang luar biasa.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2.5rem',
                  fontWeight: 'bold'
                }}>
                  SW
                </div>
                <h3>Sarah Wilson</h3>
                <p style={{ color: 'var(--color-gray-600)', marginBottom: '0.5rem' }}>
                  Marketing Director
                </p>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                  Ahli strategi marketing digital dengan track record meningkatkan pertumbuhan bisnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-4" style={{ textAlign: 'center' }}>
            <div className="fade-in">
              <h2 style={{ fontSize: 'var(--font-size-5xl)', color: 'white', marginBottom: '0.5rem' }}>
                100+
              </h2>
              <p>Proyek Selesai</p>
            </div>
            <div className="fade-in">
              <h2 style={{ fontSize: 'var(--font-size-5xl)', color: 'white', marginBottom: '0.5rem' }}>
                50+
              </h2>
              <p>Klien Puas</p>
            </div>
            <div className="fade-in">
              <h2 style={{ fontSize: 'var(--font-size-5xl)', color: 'white', marginBottom: '0.5rem' }}>
                5+
              </h2>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="fade-in">
              <h2 style={{ fontSize: 'var(--font-size-5xl)', color: 'white', marginBottom: '0.5rem' }}>
                24/7
              </h2>
              <p>Dukungan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Siap Memulai Proyek Digital Anda?</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: '2rem' }}>
              Mari kita diskusikan bagaimana kami dapat membantu bisnis Anda berkembang
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Hubungi Kami
              </Link>
              <Link href="/services" className="btn btn-outline">
                Lihat Layanan
              </Link>
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