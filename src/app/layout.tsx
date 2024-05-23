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
  title: 'Daniel Domínguez | Desarrollador Web',
  description: 'Conoce mis trabajos.'
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
