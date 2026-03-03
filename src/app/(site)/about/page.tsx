import type { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPageSettings } from '@/lib/page-settings'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPublishedPageSettings('about')
  return {
    title: settings.seo_about_title,
    description: settings.seo_about_description,
  }
}

export default async function AboutPage() {
  const settings = await getPublishedPageSettings('about')
  const values = settings.about_values
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean)

  return (
    <div className="bg-[#F1E7DE]">
      <section className="pt-24 lg:pt-32 pb-14 border-b border-stone-300/40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
              {settings.about_heading}
            </h1>
            <h2 className="mt-8 font-cormorant text-2xl lg:text-3xl font-light text-stone-900">
              Nossa historia
            </h2>
            <p className="mt-6 font-inter text-sm lg:text-base text-stone-700 leading-relaxed">
              {settings.about_manifesto}
            </p>
            <p className="mt-3 font-inter text-sm lg:text-base text-stone-700 leading-relaxed">
              {settings.about_intro_paragraph_2}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="border border-stone-300/50 bg-white/60 p-6">
              <h2 className="font-cormorant text-2xl text-stone-900">Missao</h2>
              <p className="mt-3 font-inter text-sm text-stone-700 leading-relaxed">{settings.about_mission}</p>
            </article>
            <article className="border border-stone-300/50 bg-white/60 p-6">
              <h2 className="font-cormorant text-2xl text-stone-900">Visao</h2>
              <p className="mt-3 font-inter text-sm text-stone-700 leading-relaxed">{settings.about_vision}</p>
            </article>
            <article className="border border-stone-300/50 bg-white/60 p-6">
              <h2 className="font-cormorant text-2xl text-stone-900">Posicionamento</h2>
              <p className="mt-3 font-inter text-sm text-stone-700 leading-relaxed">{settings.about_positioning}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-900">Valores</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value) => (
              <div key={value} className="border-l-2 border-stone-500 bg-white/60 p-4">
                <p className="font-inter text-sm text-stone-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light leading-tight">
            {settings.about_cta_title}
          </h2>
          <div className="mt-8">
            <Link
              href={settings.about_cta_url}
              className="inline-flex items-center px-8 py-3 border border-white/80 font-inter text-xs uppercase tracking-[0.18em] hover:bg-white hover:text-stone-900 transition-colors"
            >
              {settings.about_cta_button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
