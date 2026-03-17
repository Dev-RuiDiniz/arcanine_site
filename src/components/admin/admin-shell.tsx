'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/admin/sidebar'
import { Topbar } from '@/components/admin/topbar'
import { cn } from '@/lib/utils'

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="hidden lg:block">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
      </div>

      <Topbar
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      <main
        className={cn(
          'min-h-screen pt-16 transition-all duration-300',
          isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-[280px]'
        )}
      >
        <div className="p-4 lg:p-6">{children}</div>
      </main>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="h-full w-[280px] bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <Sidebar
              isCollapsed={false}
              setIsCollapsed={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
