import type React from "react"
import type { Metadata } from "next"
import { VT323, Press_Start_2P } from "next/font/google"
import "./globals.css"

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

export const metadata: Metadata = {
  title: "Kaique L. | Desenvolvedor Full Stack Retrô",
  description: "Portfólio profissional de Kaique L., desenvolvedor Full Stack com estilo retrô dos anos 80/90",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${vt323.variable} ${pressStart2P.variable}`}>{children}</body>
    </html>
  )
}
