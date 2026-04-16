/*
Arquivo: src/types/index.ts
Objetivo: Tipos e contratos TypeScript centralizados.
Guia rapido: consulte imports no topo, depois tipos/constantes, e por fim a exportacao principal.
*/

// ===========================================
// Arcane - TYPES
// ===========================================

export type ProjectCategory = 'SOFTWARE_PLATFORM' | 'AUTOMATION' | 'COMMERCE' | 'DATA_AI'
export type ProjectStatus = 'DRAFT' | 'PUBLISHED' | 'COMING_SOON' | 'WORK_IN_PROGRESS'

export interface Project {
  id: string
  slug: string
  title: string
  subtitle?: string | null
  location: string
  category: ProjectCategory
  status: ProjectStatus
  description?: string | null
  coverImage: string
  year?: string | null
  client?: string | null
  area?: string | null
  credits?: string | null
  featured: boolean
  order: number
  images: ProjectImage[]
  createdAt: Date
  updatedAt: Date
}

export interface ProjectImage {
  id: string
  url: string
  alt?: string | null
  width?: number | null
  height?: number | null
  order: number
  projectId: string
}

export interface Service {
  id: string
  slug: string
  title: string
  subtitle?: string | null
  description?: string | null
  coverImage?: string | null
  icon?: string | null
  features: string[]
  order: number
  active: boolean
}

export interface Contact {
  id: string
  name: string
  email: string
  company?: string | null
  phone?: string | null
  subject?: string | null
  intent?: string | null
  projectType?: string | null
  budgetRange?: string | null
  message: string
  status: 'NEW' | 'READ' | 'REPLIED' | 'ARCHIVED'
  source?: string | null
  createdAt: Date
  updatedAt?: Date
}

export interface LeadPayload {
  name: string
  email: string
  phone?: string
  message: string
  source: string
  company?: string
  subject?: string
  intent?: string
  projectType?: string
  budgetRange?: string
}

export interface SiteSettings {
  id: string
  siteName: string
  tagline?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  linkedin?: string | null
  aboutText?: string | null
  aboutImage?: string | null
  heroVideoUrl?: string | null
  heroImageUrl?: string | null
  heroTitle?: string | null
  heroSubtitle?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
}

export interface PageContent {
  pageId: string
  draft: Record<string, string>
  published: Record<string, string>
  updatedAt: string | null
  publishedAt: string | null
  updatedById: string | null
  publishedById: string | null
}

// Navigation
export interface NavItem {
  label: string
  href: string
}

// API Response
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
