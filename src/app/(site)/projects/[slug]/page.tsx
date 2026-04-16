/*
Arquivo: src/app/(site)/projects/[slug]/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cases, casesBySlug } from '@/lib/site-content/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = casesBySlug[slug]

  if (!project) {
    notFound()
  }

  const index = cases.findIndex((item) => item.slug === project.slug)
  const prevProject = index > 0 ? cases[index - 1] : null
  const nextProject = index < cases.length - 1 ? cases[index + 1] : null

  return (
    <>
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: project.coverPosition ?? 'center center' }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.28)_0%,rgba(2,6,23,0.72)_44%,rgba(2,6,23,0.96)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,227,247,0.22),transparent_24%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-14 lg:px-12 lg:pb-[4.5rem]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-brand-cyan"
          >
            <ArrowLeft size={12} />
            Voltar para cases
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan backdrop-blur-sm">
                {project.category}
              </span>
              <p className="mt-5 font-inter text-[11px] uppercase tracking-[0.18em] text-white/70">
                Case Arcane / {project.segment}
              </p>
              <h1 className="mt-3 font-cormorant text-[2.9rem] leading-[0.98] text-white sm:text-[3.6rem] lg:text-[5.2rem]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl font-inter text-sm leading-relaxed text-slate-200 lg:text-base">
                {project.excerpt}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Categoria</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200">{project.category}</p>
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Segmento</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200">{project.segment}</p>
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan">Stack</p>
                <p className="mt-2 font-inter text-sm leading-relaxed text-slate-200">{project.stack.length} capacidades principais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 lg:py-[4.5rem]">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
          <article className="space-y-6">
            <div className="panel-shell rounded-[2rem] p-6 lg:p-8">
              <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong">Onde estava a tensão</p>
              <h2 className="mt-3 font-cormorant text-[2.1rem] text-slate-950">O contexto pedia decisão técnica, não improviso.</h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700 lg:text-[15px]">{project.context}</p>

              <div className="mt-6 grid gap-3">
                {project.challengePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-[1.2rem] border border-white/60 bg-white/55 px-4 py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-cyan-strong" />
                    <p className="font-inter text-sm leading-relaxed text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-shell rounded-[2rem] p-6 lg:p-8">
              <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong">Solução implementada</p>
              <h2 className="mt-3 font-cormorant text-[2.1rem] text-slate-950">Produto e fluxo desenhados para a realidade da operação.</h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700 lg:text-[15px]">{project.solution}</p>
            </div>

            <div className="panel-shell rounded-[2rem] p-6 lg:p-8">
              <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-brand-cyan-strong">Arquitetura aplicada</p>
              <h2 className="mt-3 font-cormorant text-[2.1rem] text-slate-950">Camadas, integrações e estrutura para sustentar evolução.</h2>
              <p className="mt-4 font-inter text-sm leading-relaxed text-slate-700 lg:text-[15px]">{project.architecture}</p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="panel-shell rounded-[2rem] p-6">
              <h3 className="font-inter text-[11px] uppercase tracking-[0.2em] text-brand-cyan-strong">Stack e capacidades</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-950 px-3 py-1.5 font-inter text-[11px] uppercase tracking-[0.08em] text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-shell rounded-[2rem] p-6">
              <h3 className="font-inter text-[11px] uppercase tracking-[0.2em] text-brand-cyan-strong">Impacto operacional</h3>
              <ul className="mt-5 space-y-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="font-inter text-sm leading-relaxed text-slate-700">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {project.confidentialityNote ? (
              <div className="rounded-[2rem] border border-brand-cyan/20 bg-brand-cyan/8 p-6">
                <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">Nota editorial</p>
                <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">{project.confidentialityNote}</p>
              </div>
            ) : null}

            <div className="panel-shell-muted rounded-[2rem] p-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.18em] text-brand-cyan-strong">
                Próximo passo natural
              </p>
              <p className="mt-3 font-inter text-sm leading-relaxed text-slate-700">
                Se o seu contexto tem tensões parecidas, a conversa inicial serve para enquadrar arquitetura, risco,
                prioridade e o melhor formato de entrega.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/agendar-reuniao"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-cyan bg-brand-cyan px-6 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:text-white"
                >
                  Agendar reunião técnica
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/solicitar-orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/85 bg-white/74 px-6 py-3 font-inter text-[11px] uppercase tracking-[0.18em] text-slate-900 transition-all hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan-strong"
                >
                  Solicitar orçamento
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="cta-shell border-t border-brand-cyan/10 py-10 lg:py-14">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="group text-left">
                <span className="block font-inter text-[10px] uppercase tracking-[0.18em] text-slate-500">Anterior</span>
                <span className="font-cormorant text-lg text-slate-200 transition-colors group-hover:text-brand-cyan">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="group inline-flex items-center gap-2 text-left">
                <div>
                  <span className="block font-inter text-[10px] uppercase tracking-[0.18em] text-slate-500">Próximo</span>
                  <span className="font-cormorant text-lg text-slate-200 transition-colors group-hover:text-brand-cyan">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight size={15} className="text-slate-300 transition-colors group-hover:text-brand-cyan" />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
