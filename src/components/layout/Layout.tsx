import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Scale } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export function Layout() {
  const { t } = useTranslation()

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
          <footer className="mt-8 border-t border-gray-200 pt-4 pb-6 dark:border-gray-700">
            <div className="flex items-start gap-2 text-xs text-gray-400 dark:text-gray-500">
              <Scale className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              <p>{t('disclaimer.footer')}</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
