'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Loader2, Mail, MessageSquareMore, Phone, Reply, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Contact } from '@/types'

type ContactStatus = Contact['status']

const statusConfig: Record<ContactStatus, { label: string; color: string }> = {
  NEW: { label: 'Novo', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  READ: { label: 'Lido', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  REPLIED: { label: 'Respondido', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  ARCHIVED: { label: 'Arquivado', color: 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400' },
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | ContactStatus>('all')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

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
        const result = (await response.json()) as { success: boolean; data?: Contact[]; error?: string }

        if (!response.ok || !result.success || !result.data) {
          throw new Error(result.error || 'Não foi possível carregar os leads.')
        }

        const normalized = result.data.map((item) => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }))

        setContacts(normalized)
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
        <h1 className="font-cormorant text-2xl lg:text-3xl font-light text-stone-900 dark:text-white">Leads</h1>
        <p className="font-inter text-sm text-stone-500 dark:text-stone-400 mt-1">
          Central de contatos recebidos pelos formulários públicos do site.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          ['Total', String(counts.total)],
          ['Novos', String(counts.new)],
          ['Orçamentos', String(counts.budget)],
          ['Reuniões técnicas', String(counts.meeting)],
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5"
          >
            <p className="font-inter text-xs uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">{label}</p>
            <p className="mt-2 font-inter text-2xl font-semibold text-stone-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg">
          <Search size={18} className="text-stone-400" />
          <input
            type="text"
            placeholder="Buscar por nome, empresa, e-mail ou tipo de projeto..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="flex-1 bg-transparent font-inter text-sm text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          {(['all', 'NEW', 'READ', 'REPLIED', 'ARCHIVED'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={cn(
                'px-4 py-2.5 rounded-lg font-inter text-xs uppercase tracking-wide transition-colors',
                statusFilter === status
                  ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-900'
                  : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
              )}
            >
              {status === 'all' ? 'Todos' : statusConfig[status].label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-12 text-center">
          <Loader2 size={32} className="animate-spin text-stone-400 mx-auto" />
          <p className="mt-4 font-inter text-sm text-stone-500 dark:text-stone-400">Carregando leads...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 rounded-xl p-5">
          <p className="font-inter text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      ) : filteredContacts.length === 0 ? (
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-12 text-center">
          <MessageSquareMore size={40} className="mx-auto text-stone-300 dark:text-stone-600 mb-4" />
          <p className="font-inter text-sm text-stone-600 dark:text-stone-300">Nenhum lead encontrado.</p>
          <p className="font-inter text-xs text-stone-500 dark:text-stone-400 mt-2">
            Quando um formulário público for enviado, ele aparecerá aqui.
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 divide-y divide-stone-100 dark:divide-stone-800">
          {filteredContacts.map((contact) => (
            <motion.button
              key={contact.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-left p-5 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
              onClick={() => setSelectedContact(contact)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="font-inter text-sm font-semibold text-stone-900 dark:text-white">{contact.name}</h2>
                    <span className={cn('inline-flex px-2 py-0.5 rounded-full text-[10px] font-inter', statusConfig[contact.status].color)}>
                      {statusConfig[contact.status].label}
                    </span>
                    {contact.source && (
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-[10px] font-inter uppercase tracking-wide">
                        {contact.source}
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-sm text-stone-700 dark:text-stone-300">
                    {contact.company || 'Lead sem empresa informada'}
                  </p>
                  <p className="font-inter text-xs text-stone-500 dark:text-stone-400 mt-1">
                    {contact.email}
                    {contact.projectType ? ` • ${contact.projectType}` : ''}
                  </p>
                  <p className="font-inter text-xs text-stone-500 dark:text-stone-400 mt-2 line-clamp-2">{contact.message}</p>
                </div>
                <div className="text-right shrink-0">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedContact(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl bg-white dark:bg-stone-900 rounded-xl shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <div>
                  <h2 className="font-inter text-lg font-medium text-stone-900 dark:text-white">{selectedContact.name}</h2>
                  <p className="font-inter text-sm text-stone-500 dark:text-stone-400">
                    {selectedContact.company || selectedContact.subject || 'Lead recebido pelo site'}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <X size={20} className="text-stone-500" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="flex items-center gap-2 px-3 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-stone-700 dark:text-stone-300"
                  >
                    <Mail size={16} />
                    <span className="font-inter text-sm">{selectedContact.email}</span>
                  </a>
                  {selectedContact.phone && (
                    <a
                      href={`tel:${selectedContact.phone}`}
                      className="flex items-center gap-2 px-3 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-stone-700 dark:text-stone-300"
                    >
                      <Phone size={16} />
                      <span className="font-inter text-sm">{selectedContact.phone}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-2 px-3 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-stone-700 dark:text-stone-300">
                    <Calendar size={16} />
                    <span className="font-inter text-sm">
                      {selectedContact.createdAt.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <h3 className="font-inter text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-2">
                    Mensagem
                  </h3>
                  <p className="font-inter text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
                    {selectedContact.message}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-end">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject || 'Contato ARCANINE'}`}
                  className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors font-inter text-sm"
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
    <div className="rounded-lg bg-stone-50 dark:bg-stone-800 px-4 py-3">
      <p className="font-inter text-[10px] uppercase tracking-[0.16em] text-stone-500 dark:text-stone-400">{label}</p>
      <p className="mt-1 font-inter text-sm text-stone-800 dark:text-stone-200">{value}</p>
    </div>
  )
}
