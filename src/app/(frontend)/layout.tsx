import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kotacom Agency - Digital Solutions & Technology Services',
  description: 'Kotacom Agency provides cutting-edge digital solutions, technology services, and innovative products for modern businesses.',
  keywords: 'digital agency, technology services, web development, IT solutions, Indonesia',
  authors: [{ name: 'Kotacom Agency' }],
  openGraph: {
    title: 'Kotacom Agency - Digital Solutions & Technology Services',
    description: 'Leading digital agency providing innovative technology solutions and services.',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
