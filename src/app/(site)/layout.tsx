/*
Arquivo: src/app/(site)/layout.tsx
Objetivo: Layout compartilhado entre paginas da respectiva area.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GDPRBanner } from "@/components/ui/gdpr-banner"
import { FloatingChat } from "@/components/ui/floating-chat"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
      <FloatingChat />
      <GDPRBanner />
    </>
  )
}
