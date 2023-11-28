import type { Metadata } from 'next'
import { Expletus_Sans } from 'next/font/google'
import './globals.css'


const expletusSans = Expletus_Sans({
  subsets: ["latin"],
  variable: "--font-expletus",
});

export const metadata: Metadata = {
  title: 'Jose Fernandez | Photography',
  description: 'les yeux deviendront dorés',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={expletusSans.className}>{children}</body>
    </html>
  )
}
