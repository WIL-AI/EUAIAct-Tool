import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/ui/Button'
import { RiskWizard } from '../components/compliance/RiskWizard'
import { ComplianceChecklist } from '../components/compliance/ComplianceChecklist'
import { ComplianceDashboard } from '../components/compliance/ComplianceDashboard'
import { useComplianceStore } from '../stores/complianceStore'

type Tab = 'classify' | 'checklist' | 'dashboard'

export function CompliancePage() {
  const { t } = useTranslation()
  const { wizardCompleted } = useComplianceStore()
  const [activeTab, setActiveTab] = useState<Tab>(wizardCompleted ? 'dashboard' : 'classify')

  const tabs: { id: Tab; label: string; disabled: boolean }[] = [
    { id: 'classify', label: t('compliance.tabs.classify'), disabled: false },
    { id: 'checklist', label: t('compliance.tabs.checklist'), disabled: !wizardCompleted },
    { id: 'dashboard', label: t('compliance.tabs.dashboard'), disabled: !wizardCompleted },
  ]

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold">{t('compliance.title')}</h1>

      <div className="flex gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'primary' : 'ghost'}
            size="sm"
            disabled={tab.disabled}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {activeTab === 'classify' && (
        <RiskWizard onComplete={() => setActiveTab('checklist')} />
      )}
      {activeTab === 'checklist' && <ComplianceChecklist />}
      {activeTab === 'dashboard' && <ComplianceDashboard />}
    </div>
  )
}
