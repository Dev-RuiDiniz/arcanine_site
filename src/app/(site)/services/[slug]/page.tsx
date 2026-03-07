/*
Arquivo: src/app/(site)/services/[slug]/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { services, servicesBySlug } from '@/lib/site-content/services'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicesBySlug[slug]

  if (!service) {
    return {
      title: 'Servico nao encontrado | ARCANINE Tecnologia',
    }
  }

  return {
    title: `${service.title} | ARCANINE Tecnologia`,
    description: service.excerpt,
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = servicesBySlug[slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-700 transition-colors"
          >
            <ArrowLeft size={12} />
            Voltar para servicos
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
            <div>
              <h1 className="font-cormorant text-3xl lg:text-5xl text-stone-900 leading-tight">{service.title}</h1>
              <p className="mt-3 font-cormorant text-xl text-stone-700 italic">{service.subtitle}</p>
              <p className="mt-4 font-inter text-sm lg:text-base text-stone-600 leading-relaxed">{service.description}</p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-stone-300/30">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#F1E7DE]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
            <article className="border border-stone-300/45 bg-white/75 p-6">
              <h2 className="font-cormorant text-3xl text-stone-900">Aplicacoes</h2>
              <ul className="mt-4 space-y-3">
                {service.applications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-[#7A4A2F]" />
                    <span className="font-inter text-sm text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-stone-300/45 bg-white/75 p-6">
              <h2 className="font-cormorant text-3xl text-stone-900">Beneficios</h2>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-[#7A4A2F]" />
                    <span className="font-inter text-sm text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#EFE2D8]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
            <article className="border border-stone-300/45 bg-white/75 p-6">
              <h2 className="font-cormorant text-3xl text-stone-900">Escopo de entrega</h2>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-[#7A4A2F]" />
                    <span className="font-inter text-sm text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-stone-300/45 bg-white/75 p-6">
              <h2 className="font-cormorant text-3xl text-stone-900">Foco tecnico e indicadores</h2>
              <div className="mt-5">
                <h3 className="font-inter text-[10px] tracking-[0.2em] uppercase text-stone-500">Pilares</h3>
                <ul className="mt-3 space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="font-inter text-sm text-stone-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="font-inter text-[10px] tracking-[0.2em] uppercase text-stone-500">KPIs acompanhados</h3>
                <ul className="mt-3 space-y-2">
                  {service.kpis.map((item) => (
                    <li key={item} className="font-inter text-sm text-stone-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[#C7B6AA]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="font-cormorant text-2xl lg:text-3xl text-white mb-2 italic">{service.cta.title}</p>
          <p className="font-inter text-sm text-white/85 max-w-2xl mx-auto">{service.cta.description}</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={service.cta.primaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/55 text-white font-inter text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all"
            >
              {service.cta.primaryLabel}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={service.cta.secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/40 text-white/95 font-inter text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-stone-800 transition-all"
            >
              {service.cta.secondaryLabel}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
