import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '../../../payload/payloadClient'

// Product Detail Page Component
export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const payload = await getPayloadClient()
  
  try {
    const product = await payload.find({
      collection: 'products',
      where: {
        slug: { equals: params.slug },
        status: { equals: 'published' }
      }
    })

    if (!product.docs.length) {
      notFound()
    }

    const productData = product.docs[0]

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

        {/* Product Hero Section */}
        <section className="section" style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
              {/* Product Images */}
              <div className="fade-in">
                {productData.imageUrl && (
                  <div style={{ 
                    background: 'white', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '2rem'
                  }}>
                    <img 
                      src={productData.imageUrl} 
                      alt={productData.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 'var(--radius-md)'
                      }}
                    />
                  </div>
                )}
                
                {/* Additional Images */}
                {(productData.imageUrl2 || productData.imageUrl3) && (
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {productData.imageUrl2 && (
                      <img 
                        src={productData.imageUrl2} 
                        alt={`${productData.title} - Gambar 2`}
                        style={{
                          width: '50%',
                          height: 'auto',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer'
                        }}
                      />
                    )}
                    {productData.imageUrl3 && (
                      <img 
                        src={productData.imageUrl3} 
                        alt={`${productData.title} - Gambar 3`}
                        style={{
                          width: '50%',
                          height: 'auto',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer'
                        }}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="fade-in">
                <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: '1rem' }}>
                  {productData.title}
                </h1>
                
                {productData.priority && (
                  <div style={{ marginBottom: '1rem' }}>
                    <span 
                      style={{
                        background: productData.priority === 'featured' ? 'var(--color-primary)' : 
                                  productData.priority === 'bestseller' ? '#f59e0b' : 
                                  productData.priority === 'sale' ? '#ef4444' : '#10b981',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600'
                      }}
                    >
                      {productData.priority === 'featured' ? '⭐ Unggulan' : 
                       productData.priority === 'bestseller' ? '🔥 Terlaris' : 
                       productData.priority === 'sale' ? '🏷️ Diskon' : '🆕 Baru'}
                    </span>
                  </div>
                )}

                {/* Price Section */}
                <div style={{ marginBottom: '2rem' }}>
                  {productData.price && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <span style={{ 
                        fontSize: 'var(--font-size-3xl)', 
                        fontWeight: '700', 
                        color: 'var(--color-primary)' 
                      }}>
                        Rp {productData.price}
                      </span>
                      {productData.originalPrice && productData.originalPrice !== productData.price && (
                        <span style={{ 
                          fontSize: 'var(--font-size-lg)', 
                          textDecoration: 'line-through', 
                          color: 'var(--color-gray-500)' 
                        }}>
                          Rp {productData.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {productData.specialOffer && (
                    <p style={{ 
                      background: '#fef3c7', 
                      color: '#92400e', 
                      padding: '0.75rem', 
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '500'
                    }}>
                      🎉 {productData.specialOffer}
                    </p>
                  )}
                </div>

                {/* Description */}
                {productData.description && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Deskripsi</h3>
                    <p style={{ 
                      color: 'var(--color-gray-700)', 
                      lineHeight: '1.7',
                      fontSize: 'var(--font-size-lg)'
                    }}>
                      {productData.description}
                    </p>
                  </div>
                )}

                {/* Features */}
                {productData.features && productData.features.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Fitur Utama</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {productData.features.map((feature: any, index: number) => (
                        <li key={index} style={{ 
                          padding: '0.5rem 0',
                          color: 'var(--color-gray-700)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: 'var(--color-primary)' }}>✓</span>
                          {feature.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {productData.ctaText ? (
                    <button className="btn btn-primary" style={{ flex: '1', minWidth: '200px' }}>
                      {productData.ctaText}
                    </button>
                  ) : (
                    <button className="btn btn-primary" style={{ flex: '1', minWidth: '200px' }}>
                      Beli Sekarang
                    </button>
                  )}
                  
                  <Link href="/contact" className="btn btn-outline" style={{ flex: '1', minWidth: '200px' }}>
                    Konsultasi
                  </Link>
                </div>

                {/* Quick Info */}
                <div style={{ 
                  background: 'var(--color-gray-50)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-gray-200)'
                }}>
                  <h4 style={{ marginBottom: '1rem' }}>Informasi Cepat</h4>
                  
                  {productData.targetAudience && productData.targetAudience.length > 0 && (
                    <p style={{ marginBottom: '0.5rem' }}>
                      <strong>Target:</strong> {productData.targetAudience.map((t: any) => t.value).join(', ')}
                    </p>
                  )}
                  
                  {productData.soldCount && (
                    <p style={{ marginBottom: '0.5rem' }}>
                      <strong>Terjual:</strong> {productData.soldCount}
                    </p>
                  )}
                  
                  {productData.externalRating && (
                    <p style={{ marginBottom: '0.5rem' }}>
                      <strong>Rating:</strong> {productData.externalRating}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="section" style={{ background: 'var(--color-gray-50)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
              {/* Main Content */}
              <div className="fade-in">
                <h2>Detail Produk</h2>
                {productData.body && (
                  <div style={{ 
                    background: 'white', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '2rem'
                  }}>
                    <div dangerouslySetInnerHTML={{ 
                      __html: productData.format === 'html' ? productData.body : 
                        productData.body.replace(/\n/g, '<br>') 
                    }} />
                  </div>
                )}
                
                {productData.review && (
                  <div style={{ 
                    background: 'white', 
                    padding: '2rem', 
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <h3>Ulasan Produk</h3>
                    <p>{productData.review}</p>
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
                  <h3>Informasi Produk</h3>
                  
                  {productData.category && productData.category.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Kategori</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {productData.category.map((cat: any, index: number) => (
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

                  {productData.country && productData.country.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Negara</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {productData.country.map((c: any, index: number) => (
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

                  {productData.locale && productData.locale.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Locale</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {productData.locale.map((l: any, index: number) => (
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

                  {productData.verify && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Verifikasi</h4>
                      <p style={{ color: 'var(--color-gray-600)' }}>{productData.verify}</p>
                    </div>
                  )}

                  {productData.published && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Tanggal Rilis</h4>
                      <p style={{ color: 'var(--color-gray-600)' }}>
                        {new Date(productData.published).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}

                  {/* E-commerce Links */}
                  {(productData.tokopediaUrl || productData.shopeeUrl || productData.blibliUrl || 
                    productData.bukalapakUrl || productData.lazadaUrl) && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Beli di Marketplace</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {productData.tokopediaUrl && (
                          <a 
                            href={productData.tokopediaUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🛒 Tokopedia
                          </a>
                        )}
                        {productData.shopeeUrl && (
                          <a 
                            href={productData.shopeeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🛒 Shopee
                          </a>
                        )}
                        {productData.blibliUrl && (
                          <a 
                            href={productData.blibliUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🛒 Blibli
                          </a>
                        )}
                        {productData.bukalapakUrl && (
                          <a 
                            href={productData.bukalapakUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🛒 Bukalapak
                          </a>
                        )}
                        {productData.lazadaUrl && (
                          <a 
                            href={productData.lazadaUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🛒 Lazada
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Other Links */}
                  {(productData.url || productData.otherUrl || productData.mapsUrl) && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gray-700)' }}>Link Terkait</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {productData.url && (
                          <a 
                            href={productData.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🌐 Website Resmi
                          </a>
                        )}
                        {productData.otherUrl && (
                          <a 
                            href={productData.otherUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🔗 Link Lain
                          </a>
                        )}
                        {productData.mapsUrl && (
                          <a 
                            href={productData.mapsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            🗺️ Google Maps
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Affiliate Info */}
                  {(productData.affiliateCode || productData.commissionRate || productData.affiliateProvider) && (
                    <div style={{ 
                      background: 'var(--gradient-accent)', 
                      padding: '1.5rem', 
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-gray-200)',
                      marginBottom: '1.5rem'
                    }}>
                      <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Info Afiliasi</h4>
                      {productData.affiliateCode && (
                        <p style={{ marginBottom: '0.5rem' }}>
                          <strong>Kode:</strong> {productData.affiliateCode}
                        </p>
                      )}
                      {productData.commissionRate && (
                        <p style={{ marginBottom: '0.5rem' }}>
                          <strong>Komisi:</strong> {productData.commissionRate}
                        </p>
                      )}
                      {productData.affiliateProvider && (
                        <p style={{ marginBottom: '0.5rem' }}>
                          <strong>Penyedia:</strong> {productData.affiliateProvider}
                        </p>
                      )}
                    </div>
                  )}

                  <div style={{ 
                    background: 'var(--gradient-primary)', 
                    padding: '1.5rem', 
                    borderRadius: 'var(--radius-lg)',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ marginBottom: '1rem', color: 'white' }}>Butuh Bantuan?</h4>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                      Tim kami siap membantu Anda memilih produk yang tepat
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

        {/* Related Products */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Produk Terkait</h2>
            <div className="text-center">
              <Link href="/products" className="btn btn-outline">
                Lihat Semua Produk
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