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
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  metadataBase: new URL("https://arcanine.tech"),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [
    "desenvolvimento de sistemas",
    "automacao de processos",
    "integracao com hardware",
    "software sob medida",
    "inteligencia artificial aplicada",
    "transformacao digital",
  ],
  authors: [{ name: siteConfig.brand.name }],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
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
        className={`${cormorant.variable} ${inter.variable} ${playfair.variable} overflow-x-hidden font-inter antialiased`}
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
