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
    phoneDisplay: '+55 11 99999-9999',
    phoneE164: '5511999999999',
    city: 'Sao Paulo, Brasil',
  },
  links: {
    linkedin: 'https://www.linkedin.com/company/arcanine-tecnologia',
    whatsapp: 'https://wa.me/5511999999999?text=Ola!%20Quero%20falar%20com%20a%20ARCANINE%20Tecnologia%20sobre%20uma%20solucao%20para%20minha%20empresa.',
  },
  seo: {
    title: 'ARCANINE Tecnologia | Arquitetura, automação e software sob medida',
    description:
      'Plataformas, automações e integrações para empresas que precisam reduzir atrito operacional, ganhar previsibilidade técnica e escalar com base autoral de engenharia.',
    ogImage: '/og-arcanine.svg',
  },
}

export const conversionCtas = {
  budget: {
    label: 'Solicitar orçamento',
    href: '/solicitar-orcamento',
  },
  meeting: {
    label: 'Agendar reunião técnica',
    href: '/agendar-reuniao',
  },
  whatsapp: {
    label: 'Falar no WhatsApp',
  },
}

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.contact.phoneE164}?text=${encoded}`
}
