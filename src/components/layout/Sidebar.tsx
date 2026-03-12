import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'
import { ShieldCheck, GraduationCap, Settings, X } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'

const navItems = [
  { to: '/', icon: ShieldCheck, label: 'nav.compliance' },
  { to: '/training', icon: GraduationCap, label: 'nav.training' },
  { to: '/settings', icon: Settings, label: 'nav.settings' },
]

export function Sidebar() {
  const { t } = useTranslation()
  const { sidebarOpen, toggleSidebar, theme } = useUIStore()

  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={toggleSidebar} />
      )}

      <aside
        className={clsx(
          'fixed left-0 top-0 z-30 flex h-full w-64 flex-col border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800',
          'lg:static lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="wil-AI"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-sm font-bold text-primary-600">{t('app.title')}</h1>
              <p className="text-xs text-gray-400">{t('app.subtitle')}</p>
            </div>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                )
              }
            >
              <Icon className="h-5 w-5" />
              {t(label)}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <p className="text-xs text-gray-400">v1.0.0</p>
        </div>
      </aside>
    </>
  )
}
