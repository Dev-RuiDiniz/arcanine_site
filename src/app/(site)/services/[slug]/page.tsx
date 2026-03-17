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
      title: 'Serviço não encontrado | ARCANINE Tecnologia',
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
      <section className="section-shell-dark premium-grid relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-[4.5rem]">
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-brand-cyan"
          >
            <ArrowLeft size={12} />
            Voltar para serviços
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="section-kicker text-brand-cyan">{service.category}</span>
              <h1 className="mt-5 font-cormorant text-[2.8rem] leading-[0.98] text-white lg:text-[4.6rem]">
                {service.title}
              </h1>
              <p className="mt-4 font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan">
                {service.decisionLabel}
              </p>
              <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                {service.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {service.proofHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
                >
                  <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                    {highlight.label}
                  </p>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200">
                    {highlight.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 lg:py-[4.5rem]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="panel-shell overflow-hidden rounded-[2rem] p-4 lg:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/55">
                <div className="relative h-[22rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08)_0%,rgba(7,17,31,0.52)_100%)]" />
                </div>
              </div>

              <div className="px-2 pb-2 pt-6">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                  Enquadramento consultivo
                </p>
                <p className="mt-3 font-cormorant text-[2rem] leading-tight text-slate-950">
                  {service.subtitle}
                </p>
                <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700">
                  {service.engagementNote}
                </p>
              </div>
            </article>

            <div className="grid gap-5">
              <article className="panel-shell rounded-[1.85rem] p-6">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                  Quando faz sentido
                </p>
                <div className="mt-4 space-y-4">
                  {service.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 text-brand-cyan-strong" />
                      <span className="font-inter text-sm leading-relaxed text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="panel-shell rounded-[1.85rem] p-6">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                  Problemas que esta oferta resolve
                </p>
                <div className="mt-4 space-y-4">
                  {service.businessProblems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-cyan-strong" />
                      <span className="font-inter text-sm leading-relaxed text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell-alt py-14 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="panel-shell rounded-[1.9rem] p-6">
              <h2 className="font-cormorant text-[2rem] text-slate-950">Aplicações típicas</h2>
              <ul className="mt-5 space-y-3">
                {service.applications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-brand-cyan-strong" />
                    <span className="font-inter text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="panel-shell rounded-[1.9rem] p-6">
              <h2 className="font-cormorant text-[2rem] text-slate-950">Benefícios esperados</h2>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-brand-cyan-strong" />
                    <span className="font-inter text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel-shell rounded-[1.9rem] p-6">
              <h2 className="font-cormorant text-[2rem] text-slate-950">Escopo de entrega</h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-brand-cyan-strong" />
                    <span className="font-inter text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="panel-shell rounded-[1.9rem] p-6">
              <h2 className="font-cormorant text-[2rem] text-slate-950">Foco técnico</h2>
              <div className="mt-5">
                <h3 className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">Pilares</h3>
                <ul className="mt-3 space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="font-inter text-sm text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                  KPIs acompanhados
                </h3>
                <ul className="mt-3 space-y-2">
                  {service.kpis.map((item) => (
                    <li key={item} className="font-inter text-sm text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-shell py-14 lg:py-18">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="font-cormorant text-[2.15rem] leading-tight text-white lg:text-[3.2rem]">
            {service.cta.title}
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-relaxed text-white/92">
            {service.cta.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={service.cta.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-cyan bg-brand-cyan px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-950 shadow-[0_24px_60px_-30px_rgba(37,210,238,0.62)] transition-all hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:text-white"
            >
              {service.cta.primaryLabel}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={service.cta.secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/6 px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white/95 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan"
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
