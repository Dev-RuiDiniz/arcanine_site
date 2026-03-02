/*
Arquivo: src/app/layout.tsx
Objetivo: Layout compartilhado entre paginas da respectiva area.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import type { Metadata } from "next"
import "./globals.css"
import { cormorant, inter, playfair } from "@/lib/fonts"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SessionProvider } from "@/components/providers/session-provider"

export const metadata: Metadata = {
  title: "ARCANINE Tecnologia | Soluções Digitais Sob Medida",
  description: "Tecnologia que organiza, automatiza e escala negócios. Sistemas exclusivos, automações inteligentes e integração entre software e operação real.",
  keywords: [
    "desenvolvimento de sistemas",
    "automação de processos",
    "integração com hardware",
    "software sob medida",
    "inteligência artificial aplicada",
    "transformação digital",
  ],
  authors: [{ name: "ARCANINE Tecnologia" }],
  openGraph: {
    title: "ARCANINE Tecnologia | Soluções Digitais Sob Medida",
    description: "Entregamos estrutura, controle e crescimento através de tecnologia estratégica.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-arcanine.svg",
        width: 1200,
        height: 630,
        alt: "ARCANINE Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCANINE Tecnologia | Soluções Digitais Sob Medida",
    description: "Sistemas exclusivos, automações e integração para empresas em crescimento.",
    images: ["/og-arcanine.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} ${playfair.variable} font-inter antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
