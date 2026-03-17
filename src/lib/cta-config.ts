export interface ConversionActionConfig {
  label: string
  href: string
}

export interface ConversionCtaConfig {
  budget: ConversionActionConfig
  meeting: ConversionActionConfig
  whatsapp: ConversionActionConfig
}

export const defaultConversionCtas: ConversionCtaConfig = {
  budget: {
    label: 'Solicitar orçamento',
    href: '/solicitar-orcamento',
  },
  meeting: {
    label: 'Agendar reunião técnica',
    href: '/agendar-reuniao',
  },
  whatsapp: {
    label: 'Abrir contato comercial',
    href: '/contact',
  },
}
