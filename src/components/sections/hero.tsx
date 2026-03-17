/*
Arquivo: src/components/sections/hero.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ConversionCTAs } from '@/components/ui/conversion-ctas'

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=2000&q=80&auto=format&fit=crop',
    line1: 'Tecnologia que organiza, automatiza e escala.',
    line2: 'Estratégia, engenharia e resultado no mesmo projeto.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=2000&q=80&auto=format&fit=crop',
    line1: 'Sistemas sob medida para operações críticas.',
    line2: 'Controle total de dados, processos e desempenho.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80&auto=format&fit=crop',
    line1: 'Integração entre software, times e operação real.',
    line2: 'Da arquitetura técnica ao ganho operacional contínuo.',
  },
]

interface HeroProps {
  videoUrl?: string
  slideshow?: boolean
}

export function Hero({
  videoUrl,
  slideshow = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!slideshow || videoUrl) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slideshow, videoUrl])

  useEffect(() => {
    if (!videoUrl) {
      const timer = setTimeout(() => setIsLoaded(true), 300)
      return () => clearTimeout(timer)
    }
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [videoUrl])

  const currentSlide = heroSlides[currentIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <>
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <Image
                  src={slide.image}
                  alt={`ARCANINE Tecnologia - ${slide.line1}`}
                  fill
                  priority={index === 0}
                  className="object-cover scale-105"
                  onLoad={() => index === 0 && setIsLoaded(true)}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: index === currentIndex ? [1, 1.05] : 1,
                  }}
                  transition={{
                    duration: 6,
                    ease: 'linear',
                  }}
                />
              </div>
            ))}
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />
      </div>

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="max-w-5xl"
          >
            <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-wide">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="block"
              >
                {currentSlide.line1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="block text-white/90 mt-2"
              >
                {currentSlide.line2}
              </motion.span>
            </h1>

            <p className="mt-6 font-inter text-sm lg:text-base text-white/85 max-w-3xl mx-auto leading-relaxed">
              Projetamos plataformas, automações e integrações para empresas que precisam reduzir atrito operacional,
              ganhar previsibilidade e crescer com base técnica sólida.
            </p>

            <ConversionCTAs className="mt-8 justify-center" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
