export const siteConfig = {
  brand: {
    name: 'Arcane Tecnologia',
    shortName: 'Arcane',
    legalName: 'Arcane Tecnologia LTDA',
    subLabel: 'Tecnologia',
    tagline: 'Arquitetura, automação e software sob medida para operações críticas.',
  },
  contact: {
    email: 'contato@arcane.tech',
    salesEmail: 'comercial@arcane.tech',
    privacyEmail: 'privacy@arcane.tech',
    phoneDisplay: null,
    phoneE164: null,
    city: 'Sao Paulo, Brasil',
  },
  links: {
    linkedin: 'https://www.linkedin.com/company/arcane-tecnologia',
    whatsapp: null,
  },
  seo: {
    title: 'Arcane Tecnologia | Arquitetura, automação e software sob medida',
    description:
      'Plataformas, automações e integrações para empresas que precisam reduzir atrito operacional, ganhar previsibilidade técnica e escalar com base autoral de engenharia.',
    ogImage: '/og-arcane.svg',
  },
}

export function buildWhatsAppUrl(message: string) {
  if (!siteConfig.contact.phoneE164) {
    return '/contact'
  }

  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.contact.phoneE164}?text=${encoded}`
}
