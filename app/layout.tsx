import './globals.css'
import './app.css'
import { useMetadata } from '@/hooks/useMetadata'

export const metadata = useMetadata
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
