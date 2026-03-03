import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cases } from '@/lib/site-content/projects'
import { getPublishedPageSettings } from '@/lib/page-settings'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPublishedPageSettings('home')
  return {
    title: settings.seo_home_title,
    description: settings.seo_home_description,
  }
}

export default async function Home() {
  const settings = await getPublishedPageSettings('home')

  const offerings = [
    settings.what_we_do_card_1,
    settings.what_we_do_card_2,
    settings.what_we_do_card_3,
    settings.what_we_do_card_4,
    settings.what_we_do_card_5,
    settings.what_we_do_card_6,
  ].filter(Boolean)

  const differentials = [
    settings.differentials_item_1,
    settings.differentials_item_2,
    settings.differentials_item_3,
    settings.differentials_item_4,
    settings.differentials_item_5,
    settings.differentials_item_6,
  ].filter(Boolean)

  const processSteps = [
    settings.process_step_1,
    settings.process_step_2,
    settings.process_step_3,
    settings.process_step_4,
    settings.process_step_5,
    settings.process_step_6,
    settings.process_step_7,
  ].filter(Boolean)

  const featuredCases = cases.slice(0, 3)

  return (
    <div className="bg-[#F1E7DE]">
      <section className="relative overflow-hidden border-b border-stone-300/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,74,47,0.15),transparent_45%)]" />
        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 relative">
          <div className="max-w-4xl">
            <h1 className="font-cormorant text-4xl lg:text-6xl font-light text-stone-900 leading-tight">
              {settings.hero_heading}
            </h1>
            <p className="mt-6 font-inter text-base lg:text-lg text-stone-700 leading-relaxed max-w-3xl">
              {settings.hero_subheading}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={settings.hero_cta_primary_url}
                className="inline-flex items-center px-6 py-3 bg-stone-900 text-white font-inter text-xs tracking-[0.18em] uppercase hover:bg-stone-800 transition-colors"
              >
                {settings.hero_cta_primary_label}
              </Link>
              <Link
                href={settings.hero_cta_secondary_url}
                className="inline-flex items-center px-6 py-3 border border-stone-900 text-stone-900 font-inter text-xs tracking-[0.18em] uppercase hover:bg-stone-900 hover:text-white transition-colors"
              >
                {settings.hero_cta_secondary_label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-900">
            {settings.what_we_do_title}
          </h2>
          <p className="mt-4 font-inter text-sm text-stone-600 max-w-3xl leading-relaxed">
            {settings.what_we_do_intro}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((item) => (
              <div key={item} className="border border-stone-300/50 bg-white/60 p-5">
                <p className="font-inter text-sm text-stone-800 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-900">
            {settings.differentials_title}
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((item) => (
              <div key={item} className="border-l-2 border-stone-500 bg-white/50 p-5">
                <p className="font-inter text-sm text-stone-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-900">
                {settings.cases_title}
              </h2>
              <p className="mt-3 font-inter text-sm text-stone-600 max-w-2xl leading-relaxed">
                {settings.cases_intro}
              </p>
            </div>
            <Link
              href={settings.cases_cta_url}
              className="inline-flex items-center font-inter text-xs tracking-[0.16em] uppercase text-stone-700 hover:text-stone-900"
            >
              {settings.cases_cta_label}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {featuredCases.map((item) => (
              <Link key={item.id} href={`/projects/${item.slug}`} className="group block border border-stone-300/50 bg-white/70 overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={item.coverImage} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-cormorant text-xl text-stone-900">{item.title}</h3>
                  <p className="mt-1 font-inter text-xs uppercase tracking-[0.14em] text-stone-500">{item.segment}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#E9E1DB]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-900">
            {settings.process_title}
          </h2>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step, index) => (
              <li key={step} className="border border-stone-300/50 bg-white/70 p-5">
                <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-stone-500">Etapa {index + 1}</p>
                <p className="mt-2 font-cormorant text-xl text-stone-900">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light leading-tight">
            {settings.home_cta_title}
          </h2>
          <p className="mt-4 font-inter text-sm text-stone-200 leading-relaxed">
            {settings.home_cta_subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={settings.home_cta_primary_url}
              className="inline-flex items-center px-6 py-3 bg-white text-stone-900 font-inter text-xs tracking-[0.18em] uppercase hover:bg-stone-200 transition-colors"
            >
              {settings.home_cta_primary_label}
            </Link>
            <Link
              href={settings.home_cta_secondary_url}
              className="inline-flex items-center px-6 py-3 border border-white/70 text-white font-inter text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-stone-900 transition-colors"
            >
              {settings.home_cta_secondary_label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
