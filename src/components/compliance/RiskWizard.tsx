import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AlertTriangle, CheckCircle, ArrowRight, ArrowLeft, RotateCcw, Scale } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { useComplianceStore } from '../../stores/complianceStore'
import { wizardQuestions } from '../../data/complianceQuestions'
import type { RiskLevel } from '../../types/compliance'

const riskBadgeVariant: Record<RiskLevel, 'danger' | 'warning' | 'default' | 'success'> = {
  unacceptable: 'danger',
  high: 'warning',
  limited: 'default',
  minimal: 'success',
}

interface RiskWizardProps {
  onComplete: () => void
}

export function RiskWizard({ onComplete }: RiskWizardProps) {
  const { t } = useTranslation()
  const { wizardAnswers, riskLevel, wizardCompleted, setWizardAnswer, setRiskLevel, completeWizard, resetWizard } = useComplianceStore()

  const [currentQuestionId, setCurrentQuestionId] = useState<string>('q1')
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(wizardCompleted)
  const [history, setHistory] = useState<string[]>([])

  const currentQuestion = useMemo(
    () => wizardQuestions.find((q) => q.id === currentQuestionId),
    [currentQuestionId]
  )

  const questionIndex = wizardQuestions.findIndex((q) => q.id === currentQuestionId)
  const totalQuestions = wizardQuestions.length

  const handleSelect = (value: string) => {
    setSelectedValue(value)
  }

  const handleNext = () => {
    if (!selectedValue || !currentQuestion) return

    const option = currentQuestion.options.find((o) => o.value === selectedValue)
    if (!option) return

    setWizardAnswer(currentQuestion.id, selectedValue)

    if (option.resultRisk) {
      setRiskLevel(option.resultRisk)
      completeWizard()
      setShowResult(true)
    } else if (option.leadsTo) {
      setHistory((h) => [...h, currentQuestionId])
      setCurrentQuestionId(option.leadsTo)
      setSelectedValue(wizardAnswers[option.leadsTo] || null)
    }
  }

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory((h) => h.slice(0, -1))
      setCurrentQuestionId(prev)
      setSelectedValue(wizardAnswers[prev] || null)
    }
  }

  const handleRetake = () => {
    resetWizard()
    setCurrentQuestionId('q1')
    setSelectedValue(null)
    setShowResult(false)
    setHistory([])
  }

  if (showResult && riskLevel) {
    return (
      <div className="space-y-6">
        <Card className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
            {riskLevel === 'unacceptable' ? (
              <AlertTriangle className="h-8 w-8 text-red-500" />
            ) : (
              <CheckCircle className="h-8 w-8 text-primary-600" />
            )}
          </div>
          <h2 className="mb-2 text-xl font-bold">{t('compliance.wizard.resultTitle')}</h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400">{t('compliance.wizard.resultDescription')}</p>
          <Badge variant={riskBadgeVariant[riskLevel]} className="px-4 py-2 text-base">
            {t(`compliance.riskLevels.${riskLevel}`)}
          </Badge>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {t(`compliance.riskLevels.${riskLevel}Desc`)}
          </p>
        </Card>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="flex gap-3">
            <Scale className="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <p className="text-sm text-amber-800 dark:text-amber-300">
              {t('compliance.wizard.legalHint')}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="ghost" onClick={handleRetake}>
            <RotateCcw className="h-4 w-4" />
            {t('compliance.wizard.retake')}
          </Button>
          <Button onClick={onComplete} className="flex-1">
            {t('compliance.wizard.continueToChecklist')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  if (!currentQuestion) return null

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {t('compliance.wizard.question', { current: questionIndex + 1, total: totalQuestions })}
        </p>
        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2 rounded-full bg-primary-600 transition-all"
            style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-semibold">{t(currentQuestion.questionKey)}</h3>
        <div className="space-y-2">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${
                selectedValue === option.value
                  ? 'border-primary-600 bg-primary-50 text-primary-700 dark:border-primary-400 dark:bg-primary-900/20 dark:text-primary-300'
                  : 'border-gray-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
              }`}
            >
              {t(option.labelKey)}
            </button>
          ))}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={history.length === 0}
        >
          <ArrowLeft className="h-4 w-4" />
          {t('compliance.wizard.back')}
        </Button>
        <Button onClick={handleNext} disabled={!selectedValue}>
          {currentQuestion.options.some((o) => o.value === selectedValue && o.resultRisk)
            ? t('compliance.wizard.viewResults')
            : t('compliance.wizard.next')}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
