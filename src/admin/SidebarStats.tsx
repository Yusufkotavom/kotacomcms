import React from 'react'

type Counts = {
  posts?: { total: number; published: number; draft: number }
  products?: { total: number; published: number; draft: number }
  pages?: { total: number; published: number; draft: number }
  services?: { total: number }
  projects?: { total: number }
  media?: { total: number }
}

export default function SidebarStats(): React.ReactElement {
  const [counts, setCounts] = React.useState<Counts>({})
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let isMounted = true

    const fetchTotal = async (slug: string, query: string = ''): Promise<number> => {
      try {
        const url = new URL(`/api/${slug}`, window.location.origin)
        if (query) url.search = query
        const res = await fetch(url.toString(), { credentials: 'include' })
        if (!res.ok) return 0
        const data = await res.json()
        return typeof data?.totalDocs === 'number' ? data.totalDocs : 0
      } catch {
        return 0
      }
    }

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const [
          postsTotal,
          postsPub,
          postsDraft,
          productsTotal,
          productsPub,
          productsDraft,
          pagesTotal,
          pagesDraft,
          servicesTotal,
          projectsTotal,
          mediaTotal,
        ] = await Promise.all([
          fetchTotal('posts', 'limit=0'),
          fetchTotal('posts', 'limit=0&where[status][equals]=published'),
          fetchTotal('posts', 'limit=0&where[status][equals]=draft'),
          fetchTotal('products', 'limit=0'),
          fetchTotal('products', 'limit=0&where[status][equals]=published'),
          fetchTotal('products', 'limit=0&where[status][equals]=draft'),
          fetchTotal('pages', 'limit=0'),
          fetchTotal('pages', 'limit=0&where[draft][equals]=true'),
          fetchTotal('services', 'limit=0'),
          fetchTotal('projects', 'limit=0'),
          fetchTotal('media', 'limit=0'),
        ])

        if (!isMounted) return

        setCounts({
          posts: { total: postsTotal, published: postsPub, draft: postsDraft },
          products: { total: productsTotal, published: productsPub, draft: productsDraft },
          pages: { total: pagesTotal, draft: pagesDraft, published: Math.max(0, pagesTotal - pagesDraft) },
          services: { total: servicesTotal },
          projects: { total: projectsTotal },
          media: { total: mediaTotal },
        })
      } catch (e) {
        if (!isMounted) return
        setError('Gagal memuat ringkasan')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    void load()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div
      style={{
        padding: '12px',
        margin: '12px',
        marginTop: 0,
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#f9fafb',
        fontSize: '12px',
        lineHeight: 1.45,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Ringkasan Konten</div>
      {loading && <div>Sedang memuat...</div>}
      {error && <div style={{ color: '#b91c1c' }}>{error}</div>}
      {!loading && !error && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div>
              <div style={{ fontWeight: 600 }}>Artikel</div>
              <div>Total: {counts.posts?.total ?? 0}</div>
              <div>Publish: {counts.posts?.published ?? 0}</div>
              <div>Draft: {counts.posts?.draft ?? 0}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Produk</div>
              <div>Total: {counts.products?.total ?? 0}</div>
              <div>Publish: {counts.products?.published ?? 0}</div>
              <div>Draft: {counts.products?.draft ?? 0}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Halaman</div>
              <div>Total: {counts.pages?.total ?? 0}</div>
              <div>Publish: {counts.pages?.published ?? 0}</div>
              <div>Draft: {counts.pages?.draft ?? 0}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Media</div>
              <div>Total: {counts.media?.total ?? 0}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Layanan</div>
              <div>Total: {counts.services?.total ?? 0}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Proyek</div>
              <div>Total: {counts.projects?.total ?? 0}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

