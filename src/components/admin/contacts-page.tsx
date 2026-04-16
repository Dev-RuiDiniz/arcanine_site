'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Calendar,
  Loader2,
  Mail,
  MessageSquareMore,
  Phone,
  Reply,
  Search,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Contact } from '@/types'

type ContactStatus = Contact['status']
type ContactApiRecord = Omit<Contact, 'createdAt' | 'updatedAt'> & {
  createdAt: string
  updatedAt?: string
}

const statusConfig: Record<ContactStatus, { label: string; color: string }> = {
  NEW: { label: 'Novo', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  READ: { label: 'Lido', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  REPLIED: { label: 'Respondido', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  ARCHIVED: { label: 'Arquivado', color: 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400' },
}

function normalizeContact(item: ContactApiRecord): Contact {
  return {
    ...item,
    createdAt: new Date(item.createdAt),
    updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
  }
}

export function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | ContactStatus>('all')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [updatingStatus, setUpdatingStatus] = useState<ContactStatus | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadLeads() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch('/api/leads', {
          cache: 'no-store',
          signal: controller.signal,
        })
        const result = (await response.json()) as {
          success: boolean
          data?: ContactApiRecord[]
          error?: string
        }

        if (!response.ok || !result.success || !result.data) {
          throw new Error(result.error || 'Não foi possível carregar os leads.')
        }

        setContacts(result.data.map(normalizeContact))
      } catch (requestError) {
        if ((requestError as Error).name === 'AbortError') {
          return
        }
        setError(requestError instanceof Error ? requestError.message : 'Não foi possível carregar os leads.')
      } finally {
        setLoading(false)
      }
    }

    loadLeads()

    return () => controller.abort()
  }, [])

  async function handleStatusUpdate(nextStatus: ContactStatus) {
    if (!selectedContact || selectedContact.status === nextStatus) {
      return
    }

    setUpdatingStatus(nextStatus)
    setError('')

    try {
      const response = await fetch(`/api/leads/${selectedContact.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      })
      const result = (await response.json()) as {
        success: boolean
        data?: ContactApiRecord
        error?: string
      }

      if (!response.ok || !result.success || !result.data) {
        throw new Error(result.error || 'Não foi possível atualizar o status do lead.')
      }

      const updatedContact = normalizeContact(result.data)
      setContacts((current) =>
        current.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
      )
      setSelectedContact(updatedContact)
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Não foi possível atualizar o status do lead.'
      )
    } finally {
      setUpdatingStatus(null)
    }
  }

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        contact.name.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        (contact.company || '').toLowerCase().includes(query) ||
        (contact.subject || '').toLowerCase().includes(query) ||
        (contact.projectType || '').toLowerCase().includes(query)

      const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [contacts, searchQuery, statusFilter])

  const counts = useMemo(
    () => ({
      total: contacts.length,
      new: contacts.filter((contact) => contact.status === 'NEW').length,
      budget: contacts.filter((contact) => contact.source === 'solicitar-orcamento').length,
      meeting: contacts.filter((contact) => contact.source === 'agendar-reuniao').length,
    }),
    [contacts]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-cormorant text-2xl font-light text-stone-900 dark:text-white lg:text-3xl">Leads</h1>
        <p className="mt-1 font-inter text-sm text-stone-500 dark:text-stone-400">
          Fila operacional de contatos recebidos pelos formulários públicos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['Total', String(counts.total)],
          ['Novos', String(counts.new)],
          ['Orçamentos', String(counts.budget)],
          ['Reuniões técnicas', String(counts.meeting)],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900"
          >
            <p className="font-inter text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">{label}</p>
            <p className="mt-2 font-inter text-2xl font-semibold text-stone-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-2.5 dark:border-stone-800 dark:bg-stone-900">
          <Search size={18} className="text-stone-400" />
          <input
            type="text"
            placeholder="Buscar por nome, empresa, e-mail ou tipo de projeto..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="flex-1 bg-transparent font-inter text-sm text-stone-900 placeholder-stone-400 focus:outline-none dark:text-white"
          />
        </div>

        <div className="flex gap-2">
          {(['all', 'NEW', 'READ', 'REPLIED', 'ARCHIVED'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={cn(
                'rounded-lg px-4 py-2.5 font-inter text-xs uppercase tracking-wide transition-colors',
                statusFilter === status
                  ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                  : 'border border-stone-200 bg-white text-stone-600 hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-stone-700'
              )}
            >
              {status === 'all' ? 'Todos' : statusConfig[status].label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="rounded-xl border border-stone-200 bg-white p-12 text-center dark:border-stone-800 dark:bg-stone-900">
          <Loader2 size={32} className="mx-auto animate-spin text-stone-400" />
          <p className="mt-4 font-inter text-sm text-stone-500 dark:text-stone-400">Carregando leads...</p>
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-900/10">
          <p className="font-inter text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      ) : filteredContacts.length === 0 ? (
        <div className="rounded-xl border border-stone-200 bg-white p-12 text-center dark:border-stone-800 dark:bg-stone-900">
          <MessageSquareMore size={40} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
          <p className="font-inter text-sm text-stone-600 dark:text-stone-300">Nenhum lead encontrado.</p>
          <p className="mt-2 font-inter text-xs text-stone-500 dark:text-stone-400">
            Quando um formulário público for enviado, ele aparecerá aqui.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-stone-100 rounded-xl border border-stone-200 bg-white dark:divide-stone-800 dark:border-stone-800 dark:bg-stone-900">
          {filteredContacts.map((contact) => (
            <motion.button
              key={contact.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full p-5 text-left transition-colors hover:bg-stone-50 dark:hover:bg-stone-800/50"
              onClick={() => setSelectedContact(contact)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="font-inter text-sm font-semibold text-stone-900 dark:text-white">{contact.name}</h2>
                    <span className={cn('inline-flex rounded-full px-2 py-0.5 text-[10px] font-inter', statusConfig[contact.status].color)}>
                      {statusConfig[contact.status].label}
                    </span>
                    {contact.source && (
                      <span className="inline-flex rounded-full bg-stone-100 px-2 py-0.5 font-inter text-[10px] uppercase tracking-wide text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                        {contact.source}
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-sm text-stone-700 dark:text-stone-300">
                    {contact.company || 'Lead sem empresa informada'}
                  </p>
                  <p className="mt-1 font-inter text-xs text-stone-500 dark:text-stone-400">
                    {contact.email}
                    {contact.projectType ? ` • ${contact.projectType}` : ''}
                  </p>
                  <p className="mt-2 line-clamp-2 font-inter text-xs text-stone-500 dark:text-stone-400">{contact.message}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-inter text-xs text-stone-400">
                    {contact.createdAt.toLocaleDateString('pt-BR')}
                  </p>
                  <p className="font-inter text-xs text-stone-400">
                    {contact.createdAt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {selectedContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedContact(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl rounded-xl bg-white shadow-2xl dark:bg-stone-900"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-stone-200 p-6 dark:border-stone-800">
                <div>
                  <h2 className="font-inter text-lg font-medium text-stone-900 dark:text-white">{selectedContact.name}</h2>
                  <p className="font-inter text-sm text-stone-500 dark:text-stone-400">
                    {selectedContact.company || selectedContact.subject || 'Lead recebido pelo site'}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="rounded-lg p-2 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  <X size={20} className="text-stone-500" />
                </button>
              </div>

              <div className="space-y-6 p-6">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="flex items-center gap-2 rounded-lg bg-stone-100 px-3 py-2 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                  >
                    <Mail size={16} />
                    <span className="font-inter text-sm">{selectedContact.email}</span>
                  </a>
                  {selectedContact.phone && (
                    <a
                      href={`tel:${selectedContact.phone}`}
                      className="flex items-center gap-2 rounded-lg bg-stone-100 px-3 py-2 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                    >
                      <Phone size={16} />
                      <span className="font-inter text-sm">{selectedContact.phone}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-2 rounded-lg bg-stone-100 px-3 py-2 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                    <Calendar size={16} />
                    <span className="font-inter text-sm">
                      {selectedContact.createdAt.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-inter text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    Status operacional
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(statusConfig) as ContactStatus[]).map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusUpdate(status)}
                        disabled={updatingStatus !== null}
                        className={cn(
                          'rounded-full border px-3 py-2 font-inter text-[11px] uppercase tracking-[0.12em] transition-colors',
                          selectedContact.status === status
                            ? 'border-stone-900 bg-stone-900 text-white dark:border-white dark:bg-white dark:text-stone-900'
                            : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-500'
                        )}
                      >
                        {updatingStatus === status ? 'Atualizando...' : statusConfig[status].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {selectedContact.company && (
                    <InfoCard label="Empresa" value={selectedContact.company} />
                  )}
                  {selectedContact.projectType && (
                    <InfoCard label="Tipo de projeto" value={selectedContact.projectType} />
                  )}
                  {selectedContact.intent && (
                    <InfoCard label="Intenção" value={selectedContact.intent} />
                  )}
                  {selectedContact.budgetRange && (
                    <InfoCard label="Faixa de investimento" value={selectedContact.budgetRange} />
                  )}
                  {selectedContact.source && (
                    <InfoCard label="Origem" value={selectedContact.source} />
                  )}
                  {selectedContact.subject && (
                    <InfoCard label="Assunto" value={selectedContact.subject} />
                  )}
                </div>

                <div>
                  <h3 className="mb-2 font-inter text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    Mensagem
                  </h3>
                  <p className="rounded-lg bg-stone-50 p-4 font-inter text-sm leading-relaxed text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                    {selectedContact.message}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end border-t border-stone-200 p-6 dark:border-stone-800">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject || 'Contato Arcane'}`}
                  className="flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 font-inter text-sm text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-100"
                >
                  <Reply size={16} />
                  Responder por e-mail
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-stone-50 px-4 py-3 dark:bg-stone-800">
      <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">{label}</p>
      <p className="mt-1 font-inter text-sm text-stone-800 dark:text-stone-200">{value}</p>
    </div>
  )
}
