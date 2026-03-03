/*
Arquivo: src/components/sections/instagram-feed.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { ArtisticText } from '@/components/ui/artistic-text'
import { siteConfig } from '@/lib/site-config'

interface InstagramPost {
  id: string
  postId: string
  shortCode: string | null
  type: string
  url: string
  displayUrl: string
  videoUrl: string | null
  caption: string | null
  likesCount: number
  commentsCount: number
}

// Fallback images caso não tenha posts no banco
const fallbackImages = [
  { id: '1', src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&q=80&auto=format&fit=crop', alt: 'ARCANINE', url: siteConfig.links.instagram },
  { id: '2', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80&auto=format&fit=crop', alt: 'ARCANINE', url: siteConfig.links.instagram },
  { id: '3', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80&auto=format&fit=crop', alt: 'ARCANINE', url: siteConfig.links.instagram },
  { id: '4', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80&auto=format&fit=crop', alt: 'ARCANINE', url: siteConfig.links.instagram },
  { id: '5', src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80&auto=format&fit=crop', alt: 'ARCANINE', url: siteConfig.links.instagram },
  { id: '6', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80&auto=format&fit=crop', alt: 'ARCANINE', url: siteConfig.links.instagram },
]

export function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  // Buscar posts do banco
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram/posts?limit=12')
        if (response.ok) {
          const data = await response.json()
          if (data && data.length > 0) {
            setPosts(data)
          }
        }
      } catch (error) {
        console.error('Erro ao buscar posts do Instagram:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // Auto scroll lento
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationId: number
    let scrollPos = 0

    const scroll = () => {
      if (!isHovered && container) {
        scrollPos += 0.5
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0
        }
        container.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isHovered])

  // Preparar imagens (posts reais ou fallback)
  const displayImages = posts.length > 0
    ? posts.map((post) => ({
        id: post.id,
        src: post.displayUrl,
        alt: post.caption?.substring(0, 50) || 'Post do Instagram @arcanine.tecnologia',
        url: post.url,
      }))
    : fallbackImages

  // Duplicar para loop infinito
  const allImages = [...displayImages, ...displayImages]

  return (
    <section className="py-16 lg:py-24 bg-[#E3DFDD] overflow-hidden relative">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <ArtisticText
            as="p"
            highlightWords={['TECNOLOGIA', 'OPERACAO', 'RESULTADO', 'NEGOCIO']}
            className="font-inter text-sm sm:text-base lg:text-lg font-light text-stone-700 leading-relaxed"
            highlightClassName="text-stone-600"
          >
            TECNOLOGIA aplicada a OPERACAO real, com foco em RESULTADO mensuravel de NEGOCIO.
          </ArtisticText>
        </motion.div>
      </div>

      {/* Carrossel auto-scroll */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-3 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {allImages.map((image, index) => (
          <Link
            key={`${image.id}-${index}`}
            href={image.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] relative overflow-hidden bg-stone-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Instagram
                    size={24}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Gradient fades nas bordas */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#E3DFDD] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#E3DFDD] to-transparent" />
    </section>
  )
}
