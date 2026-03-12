import { useTranslation } from 'react-i18next'
import { Menu, Moon, Sun, Globe } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

export function Header() {
  const { i18n } = useTranslation()
  const { theme, setTheme, toggleSidebar } = useUIStore()

  const toggleLang = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 px-4 sm:px-6 dark:border-gray-700">
      <button onClick={toggleSidebar} className="lg:hidden">
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex-1" />

      <div className="flex items-center gap-2">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <Globe className="h-4 w-4" />
          {i18n.language === 'de' ? 'DE' : 'EN'}
        </button>

        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
      </div>
    </header>
  )
}
