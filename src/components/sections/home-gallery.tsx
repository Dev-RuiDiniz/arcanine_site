/*
Arquivo: src/components/sections/home-gallery.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
]

export function HomeGallery() {
  return (
    <section className="py-8 lg:py-12 bg-[#E3DFDD]">
      <div className="px-2 lg:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/3] overflow-hidden bg-stone-300"
            >
              <Image
                src={image}
                alt={`ARCANINE gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
