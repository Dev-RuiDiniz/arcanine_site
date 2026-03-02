/*
Arquivo: src/components/sections/home-gallery.tsx
Objetivo: Secao de interface usada em paginas publicas.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = [
  '/galeriaInicial/beautiful and timeless comporta summer house interior design by RAIZ.jpg',
  '/galeriaInicial/contemporary minimalist living room suspended staircase and fireplace interior design by RAIZ .jpg',
  '/galeriaInicial/contemporary-beach-house-living-room-with-fireplace-interior-design-by-RAIZ.jpg',
  '/galeriaInicial/elegant timeless luxury master suite interior design by RAIZ.jpg',
  '/galeriaInicial/IMG_0820_SnapseedCopy.jpg',
  '/galeriaInicial/SUITE 4K.jpg',
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
                alt={`RAIZ Interiors Gallery ${index + 1}`}
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

