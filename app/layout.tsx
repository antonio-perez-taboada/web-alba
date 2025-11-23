import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mundo de Mario Bros - Bienvenido al Reino Champiñón',
  description: 'Explora el increíble mundo de Super Mario Bros con personajes, niveles y más',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
