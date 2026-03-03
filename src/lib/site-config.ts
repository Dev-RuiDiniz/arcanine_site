export const siteConfig = {
  brand: {
    name: 'ARCANINE Tecnologia',
    shortName: 'ARCANINE',
    legalName: 'ARCANINE Tecnologia LTDA',
    subLabel: 'Tecnologia',
    tagline: 'Tecnologia que organiza, automatiza e escala negocios.',
  },
  contact: {
    email: 'contato@arcanine.tech',
    salesEmail: 'comercial@arcanine.tech',
    privacyEmail: 'privacy@arcanine.tech',
    phoneDisplay: '+55 11 99999-9999',
    phoneE164: '5511999999999',
    city: 'Sao Paulo, Brasil',
  },
  links: {
    instagram: 'https://www.instagram.com/arcanine.tecnologia',
    linkedin: 'https://www.linkedin.com/company/arcanine-tecnologia',
    whatsapp: 'https://wa.me/5511999999999?text=Ola!%20Quero%20falar%20com%20a%20ARCANINE%20Tecnologia%20sobre%20uma%20solucao%20para%20minha%20empresa.',
  },
  seo: {
    title: 'ARCANINE Tecnologia | Solucoes Digitais Sob Medida',
    description:
      'Tecnologia que organiza, automatiza e escala negocios. Sistemas exclusivos, automacoes inteligentes e integracao entre software e operacao real.',
    ogImage: '/og-arcanine.svg',
  },
}

export const conversionCtas = {
  budget: {
    label: 'Solicitar Orcamento',
    href: '/contact?intent=orcamento',
  },
  meeting: {
    label: 'Agendar Reuniao Tecnica',
    href: '/contact?intent=reuniao-tecnica',
  },
  whatsapp: {
    label: 'Falar no WhatsApp',
  },
}

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.contact.phoneE164}?text=${encoded}`
}
