import { useTranslation } from 'react-i18next'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useUIStore } from '../stores/uiStore'

export function SettingsPage() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useUIStore()

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">{t('settings.title')}</h1>

      <Card>
        <h2 className="mb-4 text-lg font-semibold">{t('settings.language')}</h2>
        <div className="flex gap-2">
          <Button
            variant={i18n.language === 'de' ? 'primary' : 'secondary'}
            onClick={() => setLanguage('de')}
          >
            Deutsch
          </Button>
          <Button
            variant={i18n.language === 'en' ? 'primary' : 'secondary'}
            onClick={() => setLanguage('en')}
          >
            English
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 text-lg font-semibold">{t('settings.theme')}</h2>
        <div className="flex gap-2">
          <Button
            variant={theme === 'light' ? 'primary' : 'secondary'}
            onClick={() => setTheme('light')}
          >
            {t('settings.themeLight')}
          </Button>
          <Button
            variant={theme === 'dark' ? 'primary' : 'secondary'}
            onClick={() => setTheme('dark')}
          >
            {t('settings.themeDark')}
          </Button>
        </div>
      </Card>
    </div>
  )
}
