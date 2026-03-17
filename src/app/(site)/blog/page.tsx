/*
Arquivo: src/app/(site)/blog/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import Link from 'next/link'
import { blogPosts } from '@/lib/site-content/blog'

export default function BlogPage() {
  return (
    <section className="bg-[#F1E7DE] min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="font-inter text-[11px] tracking-[0.22em] uppercase text-stone-500">Blog</span>
          <h1 className="mt-4 font-cormorant text-3xl lg:text-5xl text-stone-900 leading-tight">
            Conteúdo técnico para decisão de negócio.
          </h1>
          <p className="mt-5 font-inter text-sm lg:text-base text-stone-600 max-w-3xl">
            Publicações objetivas sobre engenharia de software, automação, IA aplicada e integração de sistemas em cenários reais.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-stone-300/40 bg-white/70 p-5">
              <p className="font-inter text-[10px] tracking-[0.16em] uppercase text-stone-500">
                {post.category} | {post.readingTime}
              </p>
              <h2 className="mt-3 font-cormorant text-2xl text-stone-900 leading-tight">{post.title}</h2>
              <p className="mt-3 font-inter text-sm text-stone-600 leading-relaxed">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-5 font-inter text-[11px] tracking-[0.16em] uppercase text-stone-700 hover:text-stone-900 transition-colors"
              >
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
