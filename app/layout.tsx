import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

const font = Nunito({ subsets: ['latin'], weight: ['400'], display: 'swap' })

export const metadata = {
  title: 'next13 studying',
  description: '공부중입니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
