export const siteConfig = {
  brand: {
    name: 'ARCANINE Tecnologia',
    shortName: 'ARCANINE',
    legalName: 'ARCANINE Tecnologia LTDA',
    subLabel: 'Tecnologia',
    tagline: 'Arquitetura, automação e software sob medida para operações críticas.',
  },
  contact: {
    email: 'contato@arcanine.tech',
    salesEmail: 'comercial@arcanine.tech',
    privacyEmail: 'privacy@arcanine.tech',
    phoneDisplay: null,
    phoneE164: null,
    city: 'Sao Paulo, Brasil',
  },
  links: {
    linkedin: 'https://www.linkedin.com/company/arcanine-tecnologia',
    whatsapp: null,
  },
  seo: {
    title: 'ARCANINE Tecnologia | Arquitetura, automação e software sob medida',
    description:
      'Plataformas, automações e integrações para empresas que precisam reduzir atrito operacional, ganhar previsibilidade técnica e escalar com base autoral de engenharia.',
    ogImage: '/og-arcanine.svg',
  },
}

export function buildWhatsAppUrl(message: string) {
  if (!siteConfig.contact.phoneE164) {
    return '/contact'
  }

  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.contact.phoneE164}?text=${encoded}`
}
