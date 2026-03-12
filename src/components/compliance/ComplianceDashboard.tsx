import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Download, RotateCcw, ShieldCheck, Target, CheckSquare } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { useComplianceStore, getComplianceScore } from '../../stores/complianceStore'
import { getRequirementsForRisk } from '../../data/complianceRequirements'
import type { RiskLevel } from '../../types/compliance'

const riskBadgeVariant: Record<RiskLevel, 'danger' | 'warning' | 'default' | 'success'> = {
  unacceptable: 'danger',
  high: 'warning',
  limited: 'default',
  minimal: 'success',
}

function ProgressRing({ percentage }: { percentage: number }) {
  const radius = 80
  const stroke = 10
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2} className="mx-auto">
      <circle
        stroke="currentColor"
        className="text-gray-200 dark:text-gray-700"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="currentColor"
        className="text-primary-600 transition-all duration-500"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        className="fill-current text-3xl font-bold"
      >
        {percentage}%
      </text>
    </svg>
  )
}

export function ComplianceDashboard() {
  const { t } = useTranslation()
  const { riskLevel, wizardCompleted, checkedItems, resetWizard } = useComplianceStore()
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  if (!wizardCompleted || !riskLevel) {
    return (
      <Card className="py-12 text-center">
        <ShieldCheck className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600" />
        <p className="mt-2 text-gray-500 dark:text-gray-400">{t('compliance.dashboard.noData')}</p>
      </Card>
    )
  }

  const { checked, total, percentage } = getComplianceScore(riskLevel, checkedItems)
  const categories = getRequirementsForRisk(riskLevel)

  const handleExport = () => {
    const lines: string[] = [
      t('compliance.report.title'),
      '='.repeat(40),
      '',
      `${t('compliance.report.generatedOn')}: ${new Date().toLocaleDateString()}`,
      `${t('compliance.report.riskClassification')}: ${t(`compliance.riskLevels.${riskLevel}`)}`,
      '',
      `${t('compliance.report.overallScore')}: ${percentage}% (${checked}/${total})`,
      '',
      t('compliance.report.requirementsStatus'),
      '-'.repeat(40),
    ]

    categories.forEach((cat) => {
      lines.push('')
      lines.push(t(cat.titleKey))
      cat.items.forEach((item) => {
        const status = checkedItems[item.id] ? `[x] ${t('compliance.report.completed')}` : `[ ] ${t('compliance.report.pending')}`
        lines.push(`  ${status} - ${t(item.labelKey)}`)
      })
    })

    lines.push('')
    lines.push('-'.repeat(40))
    lines.push(t('compliance.report.disclaimer'))

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `eu-ai-act-compliance-report-${new Date().toISOString().split('T')[0]}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    resetWizard()
    setShowResetConfirm(false)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('compliance.dashboard.riskLevel')}</p>
              <Badge variant={riskBadgeVariant[riskLevel]} className="mt-2">
                {t(`compliance.riskLevels.${riskLevel}`)}
              </Badge>
            </div>
            <ShieldCheck className="h-8 w-8 text-primary-600" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('compliance.dashboard.complianceScore')}</p>
              <p className="mt-1 text-3xl font-bold">{percentage}%</p>
            </div>
            <Target className="h-8 w-8 text-primary-600" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('compliance.dashboard.itemsCompleted')}</p>
              <p className="mt-1 text-3xl font-bold">{checked}/{total}</p>
            </div>
            <CheckSquare className="h-8 w-8 text-primary-600" />
          </div>
        </Card>
      </div>

      {riskLevel !== 'unacceptable' && (
        <Card className="text-center">
          <ProgressRing percentage={percentage} />
        </Card>
      )}

      {riskLevel !== 'unacceptable' && (
        <Card>
          <h3 className="mb-4 font-semibold">{t('compliance.dashboard.categoryBreakdown')}</h3>
          <div className="space-y-3">
            {categories.map((cat) => {
              const catChecked = cat.items.filter((i) => checkedItems[i.id]).length
              const catTotal = cat.items.length
              const catPct = catTotal > 0 ? Math.round((catChecked / catTotal) * 100) : 0

              return (
                <div key={cat.id}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{t(cat.titleKey)}</span>
                    <span className="text-gray-500">{catChecked}/{catTotal}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-primary-600 transition-all"
                      style={{ width: `${catPct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      )}

      <div className="flex gap-3">
        <Button variant="secondary" onClick={handleExport}>
          <Download className="h-4 w-4" />
          {t('compliance.dashboard.exportReport')}
        </Button>

        {showResetConfirm ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-red-600">{t('compliance.dashboard.resetConfirm')}</span>
            <Button variant="danger" size="sm" onClick={handleReset}>
              Ja
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowResetConfirm(false)}>
              Nein
            </Button>
          </div>
        ) : (
          <Button variant="ghost" onClick={() => setShowResetConfirm(true)}>
            <RotateCcw className="h-4 w-4" />
            {t('compliance.dashboard.resetAssessment')}
          </Button>
        )}
      </div>
    </div>
  )
}
