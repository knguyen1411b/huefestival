import { Metadata } from '@/hooks/useMetadata'

import './app.css'
import './globals.css'

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
