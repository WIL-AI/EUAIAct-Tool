import { useTranslation } from 'react-i18next'
import { AlertTriangle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { useComplianceStore } from '../../stores/complianceStore'
import { getRequirementsForRisk } from '../../data/complianceRequirements'

export function ComplianceChecklist() {
  const { t } = useTranslation()
  const { riskLevel, wizardCompleted, checkedItems, toggleChecklistItem } = useComplianceStore()

  if (!wizardCompleted || !riskLevel) {
    return (
      <Card className="py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">{t('compliance.checklist.notClassified')}</p>
      </Card>
    )
  }

  if (riskLevel === 'unacceptable') {
    const categories = getRequirementsForRisk(riskLevel)
    return (
      <Card className="border-l-4 border-l-red-500">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-500" />
          <div>
            <h3 className="font-semibold text-red-700 dark:text-red-400">
              {t('compliance.checklist.prohibited')}
            </h3>
            <p className="mt-1 text-sm text-red-600 dark:text-red-300">
              {t('compliance.checklist.prohibitedDesc')}
            </p>
            <ul className="mt-4 space-y-2">
              {categories[0].items.map((item) => (
                <li key={item.id} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-300">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {t(item.labelKey)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    )
  }

  const categories = getRequirementsForRisk(riskLevel)

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const checkedCount = category.items.filter((item) => checkedItems[item.id]).length
        const totalCount = category.items.length

        return (
          <Card key={category.id}>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{t(category.titleKey)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t(category.descriptionKey)}</p>
              </div>
              <Badge variant={checkedCount === totalCount ? 'success' : 'default'}>
                {t('compliance.checklist.progress', { checked: checkedCount, total: totalCount })}
              </Badge>
            </div>

            <div className="space-y-2">
              {category.items.map((item) => (
                <label
                  key={item.id}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => toggleChecklistItem(item.id)}
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className={`text-sm ${checkedItems[item.id] ? 'text-gray-400 line-through' : ''}`}>
                    {t(item.labelKey)}
                  </span>
                </label>
              ))}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
