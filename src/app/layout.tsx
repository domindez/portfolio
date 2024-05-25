/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://danieldominguez.dev'),
  title: 'Daniel Domínguez - Full Stack Developer',
  description: '¡Hola! Soy Dani, desarrollador Full Stack y creador de Trivify.es y Barmanager.app. Disfruto dándole forma a mis propias ideas y convirtiéndolas en servicios útiles para los demás. Ayudo a empresas a desarrollar sus proyectos y superar sus desafíos tecnológicos. La automatización es la clave.',
  keywords: ['Full Stack Developer', 'Desarrollador Web', 'Node.js', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Desarrollo de Software', 'Automatización', 'Tecnología'],
  creator: 'Daniel Domínguez',
  openGraph: {
    title: 'Daniel Domínguez - Full Stack Developer',
    description: 'Desarrollador Full Stack especializado en crear soluciones tecnológicas y automatizar procesos. Conoce mis proyectos y cómo puedo ayudarte a llevar tus ideas a la realidad.',
    type: 'website',
    images: [
      {
        url: '/img/daniel dominguez.jpg',
        width: 600,
        height: 600,
        alt: 'Daniel Domínguez - Full Stack Developer'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
