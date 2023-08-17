import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CEP Centro de Estudos Psicanalíticos',
  description: 'A instituição n° 1 de ensino psicanalítico no Brasil.',
  keywords: 'ensino, ead, psicanalise, estudo, curso, curso a distância'
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
