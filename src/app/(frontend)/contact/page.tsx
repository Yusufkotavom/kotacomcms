import Link from 'next/link'

// Contact Page Component
export default function ContactPage() {
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
            <h1 className="hero-title">Hubungi Kami</h1>
            <p className="hero-subtitle">
              Siap untuk memulai proyek digital Anda? Mari kita diskusikan 
              bagaimana kami dapat membantu bisnis Anda berkembang.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Contact Form */}
            <div className="fade-in">
              <h2>Kirim Pesan</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--color-gray-600)' }}>
                Isi form di bawah ini dan kami akan menghubungi Anda dalam waktu 24 jam.
              </p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="firstName" style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500' 
                    }}>
                      Nama Depan *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--color-gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-base)',
                        transition: 'var(--transition-fast)'
                      }}
                      placeholder="Masukkan nama depan"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500' 
                    }}>
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--color-gray-300)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-base)',
                        transition: 'var(--transition-fast)'
                      }}
                      placeholder="Masukkan nama belakang"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500' 
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-base)',
                      transition: 'var(--transition-fast)'
                    }}
                    placeholder="contoh@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500' 
                  }}>
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-base)',
                      transition: 'var(--transition-fast)'
                    }}
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="company" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500' 
                  }}>
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-base)',
                      transition: 'var(--transition-fast)'
                    }}
                    placeholder="Nama perusahaan Anda"
                  />
                </div>
                <div>
                  <label htmlFor="service" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500' 
                  }}>
                    Layanan yang Diminati
                  </label>
                  <select
                    id="service"
                    name="service"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-base)',
                      transition: 'var(--transition-fast)',
                      background: 'white'
                    }}
                  >
                    <option value="">Pilih layanan</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '500' 
                  }}>
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-base)',
                      transition: 'var(--transition-fast)',
                      resize: 'vertical'
                    }}
                    placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="fade-in">
              <h2>Informasi Kontak</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--color-gray-600)' }}>
                Kami siap membantu Anda dengan berbagai cara. Pilih metode yang paling nyaman.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Kantor Pusat</h3>
                <div style={{ 
                  background: 'var(--color-gray-50)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-gray-200)'
                }}>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Alamat:</strong><br />
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat, 12345<br />
                    Indonesia
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Jam Kerja:</strong><br />
                    Senin - Jumat: 09:00 - 18:00<br />
                    Sabtu: 09:00 - 15:00
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Kontak Langsung</h3>
                <div style={{ 
                  background: 'var(--color-gray-50)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-gray-200)'
                }}>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Email:</strong><br />
                    <a href="mailto:info@kotacom.id" style={{ color: 'var(--color-primary)' }}>
                      info@kotacom.id
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Telepon:</strong><br />
                    <a href="tel:+622112345678" style={{ color: 'var(--color-primary)' }}>
                      +62 21 1234 5678
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>WhatsApp:</strong><br />
                    <a href="https://wa.me/6281234567890" style={{ color: 'var(--color-primary)' }}>
                      +62 812 3456 7890
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{ marginBottom: '1rem' }}>Media Sosial</h3>
                <div style={{ 
                  background: 'var(--color-gray-50)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-gray-200)'
                }}>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>LinkedIn:</strong><br />
                    <a href="#" style={{ color: 'var(--color-primary)' }}>
                      kotacom-agency
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Instagram:</strong><br />
                    <a href="#" style={{ color: 'var(--color-primary)' }}>
                      @kotacom.agency
                    </a>
                  </p>
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Twitter:</strong><br />
                    <a href="#" style={{ color: 'var(--color-primary)' }}>
                      @kotacom_agency
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ background: 'var(--color-gray-50)' }}>
        <div className="container">
          <h2 className="section-title">Lokasi Kami</h2>
          <div style={{ 
            background: 'var(--color-gray-200)', 
            height: '400px', 
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gray-600)',
            fontSize: 'var(--font-size-lg)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p>🗺️</p>
              <p>Peta Lokasi</p>
              <p style={{ fontSize: 'var(--font-size-sm)' }}>
                Jl. Sudirman No. 123, Jakarta Pusat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Pertanyaan Umum</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            <div className="card fade-in">
              <div className="card-content">
                <h3>Berapa lama waktu pengerjaan proyek?</h3>
                <p>
                  Waktu pengerjaan bervariasi tergantung kompleksitas proyek. 
                  Proyek sederhana membutuhkan 2-4 minggu, sedangkan proyek kompleks 
                  bisa memakan waktu 2-6 bulan.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content">
                <h3>Apakah ada garansi untuk layanan?</h3>
                <p>
                  Ya, kami memberikan garansi 3 bulan untuk semua layanan pengembangan 
                  dan dukungan teknis gratis selama 1 tahun pertama.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content">
                <h3>Bagaimana proses konsultasi awal?</h3>
                <p>
                  Konsultasi awal dilakukan secara gratis melalui video call atau 
                  pertemuan langsung. Kami akan menganalisis kebutuhan dan memberikan 
                  proposal yang disesuaikan.
                </p>
              </div>
            </div>
            <div className="card fade-in">
              <div className="card-content">
                <h3>Apakah tersedia layanan maintenance?</h3>
                <p>
                  Ya, kami menyediakan layanan maintenance berkelanjutan termasuk 
                  update, backup, monitoring, dan dukungan teknis 24/7.
                </p>
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