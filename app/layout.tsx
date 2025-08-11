import './globals.css'
import './app.css'
import { Metadata } from '@/hooks/useMetadata'

export const metadata = Metadata()
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
