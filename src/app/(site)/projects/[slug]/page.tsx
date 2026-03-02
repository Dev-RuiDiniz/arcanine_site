/*
Arquivo: src/app/(site)/projects/[slug]/page.tsx
Objetivo: Pagina publica do site (rota App Router).
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Dados dos projetos conforme Work.docx da cliente
const projectsData: Record<string, ProjectDetail> = {
  'summer-house-comporta': {
    id: '1',
    slug: 'summer-house-comporta',
    title: 'Summer House in Comporta',
    subtitle: 'Comporta Retreat',
    location: 'Comporta, Portugal',
    category: 'RESIDENTIAL',
    year: '2023',
    area: '',
    client: 'Private Client',
    description: `Inspired by the natural beauty of Comporta and the serene rice fields stretching towards the horizon, this summer house captures the essence of its unique landscape. The interior design unfolds through warm, organic tones and textures that echo the earthiness of the region, creating a harmonious balance between comfort, simplicity, and nature.

Each room tells its own story, deeply rooted in the local identity — from the rustic charm of natural fibres and handcrafted details to the soft, golden light that bathes the living spaces. A home conceived to slow down time, embrace tranquillity, and celebrate the art of living well.`,
    credits: 'INTERIOR DESIGN & DECORATION (co-autoria Carla Belo)',
    photography: 'RAIZ INTERIORS STUDIO',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/SUMMER HOUSE in COMPORTA.jpg',
    images: [
      { id: '1', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style  summer house dinning room interior design by RAIZ.jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style  summer house kitchen and dinning room  interior design by RAIZ.jpg', orientation: 'landscape' },
      { id: '3', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house fireplace interior design by RAIZ_.jpg', orientation: 'portrait' },
      { id: '4', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house master suite interior design by RAIZ.jpg', orientation: 'portrait' },
      { id: '5', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house dinning area interior design by RAIZ_.jpg', orientation: 'landscape' },
      { id: '6', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house home office interior design by RAIZ.jpg', orientation: 'landscape' },
      { id: '7', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house home office with antiques interior design by RAIZ.jpg', orientation: 'landscape' },
      { id: '8', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house master suite bathroom interior design by RAIZ_.jpg', orientation: 'portrait' },
      { id: '9', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house master suite closet interior design by RAIZ.jpg', orientation: 'portrait' },
      { id: '10', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house powder room interior design by RAIZ.jpg', orientation: 'portrait' },
      { id: '11', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house powder room detail design by RAIZ.jpg', orientation: 'portrait' },
      { id: '12', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house room interior design by RAIZ.jpg', orientation: 'landscape' },
      { id: '13', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house room interior design by RAIZ_.jpg', orientation: 'landscape' },
      { id: '14', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house room bathroom interior design by RAIZ.jpg', orientation: 'portrait' },
      { id: '15', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house double room interior design by RAIZ_.jpg', orientation: 'landscape' },
      { id: '16', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house closet interior design by RAIZ_.jpg', orientation: 'portrait' },
      { id: '17', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house dinning  interior design by RAIZ_.jpg', orientation: 'landscape' },
      { id: '18', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/beautiful and timeless comporta style summer house yoga shala interior design by RAIZ_.jpg', orientation: 'landscape' },
      { id: '19', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/outddor dinning area comporta style summer house interior design  by RAIZ.jpg', orientation: 'landscape' },
      { id: '20', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/outddor lounge area comporta style summer house interior design  by RAIZ.jpg', orientation: 'landscape' },
      { id: '21', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/outddor swiming pool area comporta style summer house deck interior design  by RAIZ_.jpg', orientation: 'landscape' },
      { id: '22', url: '/2026/PROJECTS/SUMMER HOUSE COMPORTA/outddor swiming pool area comporta style summer house interior design  by RAIZ_.jpg', orientation: 'landscape' },
    ],
    prevProject: null,
    nextProject: { slug: 'contemporary-city-house', title: 'Contemporary City House' },
  },
  'contemporary-city-house': {
    id: '2',
    slug: 'contemporary-city-house',
    title: 'Contemporary City House',
    subtitle: 'Urban Living',
    location: 'Almada, Portugal',
    category: 'RESIDENTIAL',
    year: '2022',
    area: '',
    client: 'Private Client',
    description: `Elegant and understated, this contemporary city home embodies the soul of modern minimalism. A carefully curated monochromatic palette and clean architectural lines bring harmony and balance to the space, where every element has purpose and every detail speaks to refined simplicity.

Designed for a life lived with intention, the interiors merge functionality and beauty seamlessly. Natural light plays a central role, enhancing the sense of openness and calm. Thoughtful material choices and bespoke furniture pieces add subtle warmth, creating an environment that feels both sophisticated and deeply welcoming.`,
    credits: 'TOTAL RENOVATION, INTERIOR ARCHITECTURE & DECORATION',
    photography: 'RAIZ INTERIORS STUDIO',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/CONTEMPORARY CITY HOUSE.jpg',
    images: [
      { id: '1', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist living room suspended staircase and fireplace interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist living room  dining room interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '3', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist living room hall  interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '4', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist living room suspended staircase interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '5', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist living room interior design by RAIZ .JPG', orientation: 'landscape' },
      { id: '6', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist master suite interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '7', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist master suite walk in closet interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '8', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist bathroom interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '9', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist kids bedroom interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '10', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist kids bedroom interior design by RAIZ _.jpg', orientation: 'landscape' },
      { id: '11', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist laundry room interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '12', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist living room TV  interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '13', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist outdoor pool interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '14', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist powder room interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '15', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist suite  interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '16', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist suite bathroom interior design by RAIZ .jpg', orientation: 'portrait' },
      { id: '17', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist suite interior design by RAIZ .jpg', orientation: 'landscape' },
      { id: '18', url: '/2026/PROJECTS/CONTEMPORARY CITY HOUSE/contemporary minimalist walk in closet interior design by RAIZ .jpg', orientation: 'portrait' },
    ],
    prevProject: { slug: 'summer-house-comporta', title: 'Summer House in Comporta' },
    nextProject: { slug: 'elegant-timeless-duplex', title: 'Elegant & Timeless Duplex' },
  },
  'elegant-timeless-duplex': {
    id: '3',
    slug: 'elegant-timeless-duplex',
    title: 'Elegant & Timeless Duplex',
    subtitle: '',
    location: 'Braga, Portugal',
    category: 'RESIDENTIAL',
    year: '2023',
    area: '',
    client: 'Private Client',
    description: `Elegant and warm, this timeless duplex apartment was conceived to evoke the comfort and refinement of a boutique hotel, seamlessly adapted to the rhythm of multifunctional family living.

Thoughtfully designed to balance sophistication with everyday ease, the spaces flow naturally between social and private moments. Rich materials, soft textures, and carefully layered lighting create an atmosphere that feels both luxurious and genuinely welcoming — a home where every detail has been considered, and every room invites you to stay a little longer.`,
    credits: 'TOTAL RENOVATION, INTERIOR ARCHITECTURE (co-autoria Carla Belo)',
    photography: 'JOAO RODRIGO CORREIA',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/ELEGANT and TMELESS DUPLEX.jpg',
    images: [
      { id: '1', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant timeless luxury master suite interior design by RAIZ.jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant timeless luxury master suite design by RAIZ.jpg', orientation: 'landscape' },
      { id: '3', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant timeless luxury master suite bespoke headboard by RAIZ.png', orientation: 'portrait' },
      { id: '4', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant timeless luxury master suite bespoke closet design by RAIZ.jpg', orientation: 'portrait' },
      { id: '5', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant and luxury bathroom interior design by RAIZ.jpg', orientation: 'portrait' },
      { id: '6', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant and timeless marble bathroom design by RAIZ.jpg', orientation: 'portrait' },
      { id: '7', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/clean and minimal attic design by RAIZ.jpg', orientation: 'landscape' },
      { id: '8', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/clean and minimal attic design details  by RAIZ.jpg', orientation: 'landscape' },
      { id: '9', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/modern and contemporary bespoke headboard design  by RAIZ.jpg', orientation: 'landscape' },
      { id: '10', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/modern and contemporary bespoke headboard interior design  by RAIZ.jpg', orientation: 'landscape' },
      { id: '11', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/modern and contemporary bespoke wardrobe design  by RAIZ.jpg', orientation: 'portrait' },
      { id: '12', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/minimal and contemporary bathroom design by RAIZ.png', orientation: 'portrait' },
      { id: '13', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/modern contemporary staircase design with LED lighting detail projected by RAIZ.jpg', orientation: 'portrait' },
      { id: '14', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/modern contemporary staircase design with LED lighting projected by RAIZ.png', orientation: 'portrait' },
      { id: '15', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/modern contemporary suspended steps staircase design with LED lighting projected by RAIZ.png', orientation: 'portrait' },
      { id: '16', url: '/2026/PROJECTS/ELEGANT & TIMELESS DUPLEX/elegant timeless luxury master suite bespoke closet  with mirror design by RAIZ.jpg', orientation: 'portrait' },
    ],
    prevProject: { slug: 'contemporary-city-house', title: 'Contemporary City House' },
    nextProject: { slug: 'beach-house-troia', title: 'Beach House in Troia' },
  },
  'beach-house-troia': {
    id: '4',
    slug: 'beach-house-troia',
    title: 'Beach House in Troia',
    subtitle: '',
    location: 'Pestana Troia Eco Resort',
    category: 'RESIDENTIAL',
    year: '2024',
    area: '',
    client: 'Private Client',
    description: `Nestled within the sweeping dunes of Troia, this beach house reflects the pure essence of coastal living. Inspired by the soft sandy tones of its surroundings, the design embraces a minimalist and monochromatic aesthetic where simplicity and serenity take centre stage.

Created as a seasonal family retreat, the spaces combine comfort and functionality, flowing seamlessly to encourage relaxed living, quiet moments, and joyful gatherings. A refined yet effortless celebration of seaside living in Portugal.`,
    credits: 'INTERIOR DESIGN & DECORATION (co-autoria Carla Belo)',
    photography: '3D IMAGES: SARA PETIZ VIANA',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/BEACH HOUSE in TROIA.jpg',
    images: [
      { id: '1', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-living-room-with-fireplace-interior-design-by-RAIZ.jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-living-room-interior-design-by-RAIZ.jpg', orientation: 'landscape' },
      { id: '3', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-living-room-with-curved-sofa-interior-design-by-RAIZ.jpg', orientation: 'landscape' },
      { id: '4', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-dinning-room-interior-design-by-RAIZ.jpg', orientation: 'landscape' },
      { id: '5', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-open-kitchen-and-dinning-room -interior-design-by-RAIZ.jpg', orientation: 'landscape' },
      { id: '6', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-Master-Suite-interior-design-by-RAIZ.jpg', orientation: 'landscape' },
      { id: '7', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-microcement-bathroom-interior-design-by-RAIZ.jpg', orientation: 'portrait' },
      { id: '8', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-microcement-Hall-interior-design-by-RAIZ.jpg', orientation: 'portrait' },
      { id: '9', url: '/2026/PROJECTS/BEACH HOUSE TROIA/contemporary-beach-house-office-interior-design-by-RAIZ.jpg', orientation: 'landscape' },
    ],
    prevProject: { slug: 'elegant-timeless-duplex', title: 'Elegant & Timeless Duplex' },
    nextProject: { slug: 'pombaline-restoration-principe-real', title: 'Príncipe Real Pombaline Restoration' },
  },
  'pombaline-restoration-principe-real': {
    id: '5',
    slug: 'pombaline-restoration-principe-real',
    title: 'Príncipe Real Pombaline Restoration',
    subtitle: '',
    location: 'Lisboa, Portugal',
    category: 'RESIDENTIAL',
    year: '2024',
    area: '',
    client: 'Private Client',
    description: `Located in the heart of Príncipe Real, this Pombaline building underwent a full rehabilitation to adapt each apartment to contemporary living while preserving its original character.

Despite its advanced deterioration, key historical features—such as traditional tile panels, the original staircase, and traces of frescoes—were carefully restored to retain the soul of the building in the communal areas.

Inside the apartments, where the alterations were most visible, a contemporary, neutral, and timeless design language was introduced, elegant yet understated, ensuring comfort and coherence while respecting the architectural identity of the Pombaline structure.`,
    credits: 'INTERIOR ARCHITECTURE AND RESTORATION',
    photography: '3D IMAGES: DMYTRO',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/PRÍNCIPE REAL POMBALINE RESTORATION.jpg',
    images: [
      { id: '1', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/2.jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/4.jpg', orientation: 'portrait' },
      { id: '3', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/5.jpg', orientation: 'portrait' },
      { id: '4', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/6.jpg', orientation: 'landscape' },
      { id: '5', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/7.jpg', orientation: 'landscape' },
      { id: '6', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/9.jpg', orientation: 'landscape' },
      { id: '7', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/10.jpg', orientation: 'landscape' },
      { id: '8', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/13.jpg', orientation: 'portrait' },
      { id: '9', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/15.jpg', orientation: 'portrait' },
      { id: '10', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/15_.jpg', orientation: 'landscape' },
      { id: '11', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/16.jpg', orientation: 'landscape' },
      { id: '12', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/17.jpg', orientation: 'landscape' },
      { id: '13', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/18.jpg', orientation: 'portrait' },
      { id: '14', url: '/2026/PROJECTS/PRÍNCIPE REAL POMBALINE RESTORATION/18 B.jpg', orientation: 'portrait' },
    ],
    prevProject: { slug: 'beach-house-troia', title: 'Beach House in Troia' },
    nextProject: { slug: 'rural-retreat', title: 'Rural Retreat' },
  },
  'rural-retreat': {
    id: '6',
    slug: 'rural-retreat',
    title: 'Rural Retreat',
    subtitle: '',
    location: 'Serra da Lousã, Portugal',
    category: 'HOSPITALITY',
    year: '2024',
    area: '',
    client: 'Private Client',
    description: `Set in the peaceful interior of Portugal, this rural retreat offers a soothing escape from the rush of everyday life. Designed for those seeking tranquillity and authentic connection, it carries the charm of a traditional village home filled with history, textures, and quiet corners.

Rooted in natural materials and vernacular architecture, the project preserves heritage while subtly reinterpreting it. Each space enhances comfort and sensory warmth, transforming the house into a sanctuary for rest, reflection, and deep rejuvenation.`,
    credits: 'ARCHITECTURE, INTERIOR ARCHITECTURE & DECORATION',
    photography: '',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/RURAL RETREAT.jpeg',
    images: [
      { id: '1', url: '/2026/PROJECTS/RURAL RETREAT/Stone ruin restoration project for a guest house  rural mountain retreat by RAIZ.jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/RURAL RETREAT/Stone ruin restoration project for a guest house  rural mountain retreat by RAIZ_.jpg', orientation: 'landscape' },
      { id: '3', url: '/2026/PROJECTS/RURAL RETREAT/Stone ruin restoration project for a rural mountain retreat by RAIZ.JPG', orientation: 'landscape' },
      { id: '4', url: '/2026/PROJECTS/RURAL RETREAT/textured old wood rural retreat in the mountain project by RAIZ.JPG', orientation: 'landscape' },
    ],
    prevProject: { slug: 'pombaline-restoration-principe-real', title: 'Príncipe Real Pombaline Restoration' },
    nextProject: { slug: 'store-restauration-atelier', title: 'Curated Objects & Restauration Atelier' },
  },
  'store-restauration-atelier': {
    id: '7',
    slug: 'store-restauration-atelier',
    title: 'Curated Objects & Restauration Atelier',
    subtitle: '',
    location: 'Almada, Portugal',
    category: 'COMMERCIAL',
    year: '2023',
    area: '',
    client: '',
    description: `In a contemporary reinterpretation of traditional historic-centre shops, this store-gallery emerges as a space where architecture, curation, and restoration coexist seamlessly. The project celebrates each object and its renewed meaning through an integrated restoration atelier, emphasizing authenticity, craftsmanship, and design.

A minimalist aesthetic, thoughtfully designed lighting, and a neutral material palette create a calm atmosphere that highlights every piece, giving it a near-museographic presence and an immersive sense of discovery.`,
    credits: 'INTERIOR ARCHITECTURE',
    photography: 'RAIZ INTERIORS STUDIO',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/STORE & RESTAURATION ATELIER.jpg',
    images: [
      { id: '1', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/capa 01.jpg', orientation: 'landscape' },
      { id: '2', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/1_IMG_5870.jpg', orientation: 'landscape' },
      { id: '3', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/3_IMG_5845.jpg', orientation: 'portrait' },
      { id: '4', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/5_IMG_5860.jpg', orientation: 'portrait' },
      { id: '5', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5786.jpg', orientation: 'landscape' },
      { id: '6', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5811.jpg', orientation: 'landscape' },
      { id: '7', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5826.jpg', orientation: 'portrait' },
      { id: '8', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5833.jpg', orientation: 'portrait' },
      { id: '9', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5839.jpg', orientation: 'landscape' },
      { id: '10', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5850.jpg', orientation: 'landscape' },
      { id: '11', url: '/2026/PROJECTS/STORE & RESTAURATION ATELIER/IMG_5877.jpg', orientation: 'landscape' },
    ],
    prevProject: { slug: 'rural-retreat', title: 'Rural Retreat' },
    nextProject: { slug: 'beach-house-troia-ii', title: 'Beach House in Troia II' },
  },
  'beach-house-troia-ii': {
    id: '8',
    slug: 'beach-house-troia-ii',
    title: 'Beach House in Troia II',
    subtitle: '',
    location: 'Pestana Troia Eco Resort',
    category: 'RESIDENTIAL',
    year: '',
    area: '',
    client: 'Private Client',
    description: 'Coming soon.',
    credits: '',
    photography: '',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/BEACH HOUSE TROIA II.jpg',
    images: [],
    prevProject: { slug: 'store-restauration-atelier', title: 'Curated Objects & Restauration Atelier' },
    nextProject: { slug: 'weekend-family-house', title: 'Weekend Family House' },
  },
  'weekend-family-house': {
    id: '9',
    slug: 'weekend-family-house',
    title: 'Weekend Family House',
    subtitle: '',
    location: 'Aroeira, Portugal',
    category: 'RESIDENTIAL',
    year: '',
    area: '',
    client: 'Private Client',
    description: 'Coming soon.',
    credits: '',
    photography: '',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/AROEIRA WEEKEND HOUSE.jpg',
    images: [],
    prevProject: { slug: 'beach-house-troia-ii', title: 'Beach House in Troia II' },
    nextProject: { slug: 'young-soul-city-apartment', title: 'Young Soul City Apartment' },
  },
  'young-soul-city-apartment': {
    id: '10',
    slug: 'young-soul-city-apartment',
    title: 'Young Soul City Apartment',
    subtitle: '',
    location: 'Mirear Terraces',
    category: 'RESIDENTIAL',
    year: '',
    area: '',
    client: 'Private Client',
    description: 'Coming soon.',
    credits: '',
    photography: '',
    coverImage: '/2026/PROJECTS/_fotos capa menu projectos/YOUNG SOUL CITY APATMENT.jpeg',
    images: [],
    prevProject: { slug: 'weekend-family-house', title: 'Weekend Family House' },
    nextProject: null,
  },
}

// Default fallback
const defaultProject: ProjectDetail = projectsData['summer-house-comporta']

interface ProjectDetail {
  id: string
  slug: string
  title: string
  subtitle: string
  location: string
  category: string
  year: string
  area: string
  client: string
  description: string
  credits: string
  photography: string
  coverImage: string
  images: { id: string; url: string; orientation: 'landscape' | 'portrait' }[]
  prevProject: { slug: string; title: string } | null
  nextProject: { slug: string; title: string } | null
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const project = projectsData[slug] || defaultProject
  const descriptionBgClass =
    project.slug === 'summer-house-comporta' || project.slug === 'contemporary-city-house'
      ? 'bg-[#CFCAC7]'
      : 'bg-[#E3DFDD]'

  return (
    <>
      {/* Hero Cover - Altura reduzida */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-2 font-inter text-sm text-white/80">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Description - Texto corrido sem título */}
      <section className={`py-12 lg:py-16 ${descriptionBgClass}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="font-inter text-sm text-stone-600 leading-relaxed whitespace-pre-line">
              {project.description}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 lg:py-12 bg-[#CFCAC7]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={
                  image.orientation === 'landscape' ? 'md:col-span-2' : ''
                }
              >
                <div
                  className={`relative overflow-hidden bg-stone-200 ${
                    image.orientation === 'landscape'
                      ? 'aspect-[16/9]'
                      : 'aspect-[3/4]'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details - No final com menos destaque */}
      <section className="py-10 lg:py-14 bg-[#E3DFDD]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4"
          >
            <DetailItem label="Location" value={project.location} />
            <DetailItem label="Year" value={project.year} />
            <DetailItem label="Category" value={project.category} />
            <DetailItem label="Type" value={project.client} />
            {project.credits && <DetailItem label="Credits" value={project.credits} />}
            {project.photography && <DetailItem label="Photography / 3D" value={project.photography} />}
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 lg:py-14 bg-[#B4ADA8] border-t border-stone-500/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Back to Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="transform group-hover:-translate-x-1 transition-transform"
              />
              <span>Back to Projects</span>
            </Link>

            {/* Prev / Next */}
            <div className="flex items-center gap-8">
              {project.prevProject && (
                <Link
                  href={`/projects/${project.prevProject.slug}`}
                  className="text-right group"
                >
                  <span className="block font-inter text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    Previous
                  </span>
                  <span className="font-cormorant text-lg text-stone-600 group-hover:text-stone-900 transition-colors">
                    {project.prevProject.title}
                  </span>
                </Link>
              )}

              {project.nextProject && (
                <Link
                  href={`/projects/${project.nextProject.slug}`}
                  className="text-left group"
                >
                  <span className="block font-inter text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                    Next
                  </span>
                  <span className="font-cormorant text-lg text-stone-600 group-hover:text-stone-900 transition-colors">
                    {project.nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-stone-200 pb-4">
      <span className="block font-inter text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1">
        {label}
      </span>
      <span className="font-inter text-sm text-stone-800">{value}</span>
    </div>
  )
}

