import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Makwarela A.S Attorneys | Legal Guidance When You Need It Most',
  description:
    'Makwarela A.S Attorneys (Pty) Ltd provides professional legal services in family law, labour law, commercial law, civil litigation and more. Contact our experienced legal team today.',
  keywords: ['attorneys', 'law firm', 'Johannesburg', 'legal advice', 'family law', 'business law','Makwarela','Makwarela A.S','Makwarela A.S Attorneys'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
