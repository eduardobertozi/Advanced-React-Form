import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Form Validation | Composition Pattern',
  description: 'A  project developed for learning purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body lang='pt-br'>
        {children}
      </body>
    </html>
  )
}
