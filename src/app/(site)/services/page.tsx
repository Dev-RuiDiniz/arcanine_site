import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { mergePublishedPageContent } from '@/lib/page-content'
import { serviceProcessSteps, services } from '@/lib/site-content/services'

const decisionSignals = [
  'Se a operação já sente o custo do improviso técnico',
  'Se o time comercial precisa de mais previsibilidade',
  'Se integrações críticas estão travando escala ou governança',
]

const servicesDefaults = {
  services_heading: 'Ofertas estruturadas para empresas que precisam trocar atrito operacional por capacidade real de execução.',
  services_description:
    'Organizamos nossos serviços por problema de negócio: operação crítica, produto proprietário, comércio digital, IA aplicada, integração com hardware e posicionamento premium.',
  process_step_1: serviceProcessSteps[0]?.title || 'Diagnóstico do contexto',
  process_step_2: serviceProcessSteps[1]?.title || 'Enquadramento do problema',
  process_step_3: serviceProcessSteps[2]?.title || 'Estruturação da solução',
  process_step_4: serviceProcessSteps[3]?.title || 'Plano executivo de entrega',
}

export default async function ServicesPage() {
  const content = await mergePublishedPageContent('services', servicesDefaults)

  const processSteps = serviceProcessSteps.map((step, index) => ({
    ...step,
    title:
      index === 0
        ? content.process_step_1
        : index === 1
          ? content.process_step_2
          : index === 2
            ? content.process_step_3
            : index === 3
              ? content.process_step_4
              : step.title,
  }))

  return (
    <>
      <section className="section-shell-dark premium-grid relative overflow-hidden pb-14 pt-32 lg:pb-[4.5rem] lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.16),transparent_24%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="section-kicker text-brand-cyan">Serviços ARCANINE</span>
              <h1 className="mt-5 font-cormorant text-[2.6rem] leading-[0.98] text-white lg:text-[4.75rem]">
                {content.services_heading}
              </h1>
              <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-300 lg:text-base">
                {content.services_description}
              </p>
            </div>

            <div className="panel-shell-dark rounded-[1.8rem] p-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
                Sinais de momento
              </p>
              <div className="mt-4 space-y-4">
                {decisionSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-[0_0_24px_rgba(103,227,247,0.64)]" />
                    <p className="font-inter text-sm leading-relaxed text-slate-300">{signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group panel-shell flex h-full flex-col overflow-hidden rounded-[1.95rem] p-4 transition-all hover:-translate-y-1 hover:border-brand-cyan/35 hover:shadow-[0_34px_88px_-48px_rgba(7,17,31,0.24)]"
                >
                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/60">
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-white/65 bg-white/82 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.18em] text-slate-600 backdrop-blur-md">
                      {service.category}
                    </div>
                    <div className="relative h-56">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08)_0%,rgba(7,17,31,0.5)_100%)]" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                    <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                      {service.decisionLabel}
                    </p>
                    <h2 className="mt-3 font-cormorant text-[2rem] leading-tight text-slate-950">
                      {service.title}
                    </h2>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                      {service.excerpt}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {service.proofHighlights.slice(0, 2).map((highlight) => (
                        <div key={highlight.label} className="rounded-[1.2rem] border border-white/60 bg-white/55 px-4 py-3">
                          <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-slate-500">
                            {highlight.label}
                          </p>
                          <p className="mt-1 font-inter text-sm leading-relaxed text-slate-700">
                            {highlight.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                      Ver aplicações e benefícios
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-alt py-16 lg:py-[5.5rem]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-kicker justify-center">Como enquadramos projetos</span>
            <h2 className="mt-5 font-cormorant text-[2.2rem] text-slate-950 lg:text-[3rem]">
              Processo de trabalho para reduzir risco, alinhar decisão e acelerar entrega.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="panel-shell rounded-[1.65rem] p-5">
                <p className="font-inter text-[11px] uppercase tracking-[0.22em] text-brand-cyan-strong">
                  {step.number}
                </p>
                <h3 className="mt-3 font-cormorant text-[1.8rem] leading-tight text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-shell py-16 lg:py-20">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <p className="font-cormorant text-[2.1rem] leading-tight text-white lg:text-[3.35rem]">
            Traga o contexto do seu desafio e enquadramos a melhor linha de execução.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-relaxed text-white/88">
            A conversa inicial existe para entender criticidade, dependências, urgência e o que precisa acontecer
            para a tecnologia realmente destravar negócio.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/agendar-reuniao"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-cyan bg-brand-cyan px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-950 shadow-[0_24px_60px_-30px_rgba(37,210,238,0.62)] transition-all hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:text-white"
            >
              Agendar reunião técnica
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/solicitar-orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/6 px-8 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-white/92 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan"
            >
              Solicitar orçamento
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
