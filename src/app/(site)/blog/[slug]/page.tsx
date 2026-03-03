/*
Arquivo: src/app/(site)/blog/[slug]/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, blogPostsBySlug } from '@/lib/site-content/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPostsBySlug[slug]

  if (!post) {
    notFound()
  }

  return (
    <section className="bg-[#F1E7DE] min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Link href="/blog" className="font-inter text-[11px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-700 transition-colors">
          Voltar para blog
        </Link>

        <header className="mt-6">
          <p className="font-inter text-[10px] tracking-[0.16em] uppercase text-stone-500">
            {post.category} | {post.readingTime} | {post.publishedAt}
          </p>
          <h1 className="mt-3 font-cormorant text-3xl lg:text-5xl text-stone-900 leading-tight">{post.title}</h1>
          <p className="mt-4 font-inter text-sm lg:text-base text-stone-600 leading-relaxed">{post.excerpt}</p>
        </header>

        <article className="mt-8 space-y-6">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="font-inter text-sm lg:text-base text-stone-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}