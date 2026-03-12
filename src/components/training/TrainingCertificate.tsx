import { useTranslation } from 'react-i18next'
import { Printer, ArrowLeft, Award } from 'lucide-react'
import { Button } from '../ui/Button'
import { useTrainingStore } from '../../stores/trainingStore'
import { trainingModules } from '../../data/trainingModules'

interface TrainingCertificateProps {
  onBack: () => void
}

export function TrainingCertificate({ onBack }: TrainingCertificateProps) {
  const { t } = useTranslation()
  const { participantName, moduleProgress, certificateId } = useTrainingStore()

  const completionDate = Object.values(moduleProgress)
    .map((p) => p.completedAt)
    .filter(Boolean)
    .sort()
    .reverse()[0]

  const averageScore = Math.round(
    Object.values(moduleProgress).reduce((sum, p) => sum + p.quizScore, 0) / trainingModules.length
  )

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 print:hidden">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
          {t('training.certificate.backToTraining')}
        </Button>
        <Button onClick={handlePrint}>
          <Printer className="h-4 w-4" />
          {t('training.certificate.print')}
        </Button>
      </div>

      <div
        id="certificate-print"
        className="mx-auto max-w-2xl rounded-xl border-4 border-primary-600 bg-white p-8 text-center dark:bg-gray-800 print:border-primary-600 print:shadow-none"
      >
        <div className="mb-6">
          <Award className="mx-auto h-16 w-16 text-primary-600" />
        </div>

        <h1 className="mb-1 text-2xl font-bold text-primary-600">{t('app.title')}</h1>
        <p className="mb-6 text-sm text-gray-400">{t('app.subtitle')}</p>

        <div className="mb-8 border-b border-t border-gray-200 py-6 dark:border-gray-600">
          <h2 className="mb-6 text-xl font-bold text-gray-800 dark:text-gray-100">
            {t('training.certificate.heading')}
          </h2>

          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{t('training.certificate.certifies')}</p>
          <p className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{participantName}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('training.certificate.completedTraining')}</p>
        </div>

        <div className="mb-6 text-left">
          <h3 className="mb-3 font-semibold">{t('training.certificate.modules')}</h3>
          <div className="space-y-2">
            {trainingModules.map((mod) => {
              const progress = moduleProgress[mod.id]
              return (
                <div key={mod.id} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 text-sm dark:bg-gray-700">
                  <span>{t(mod.titleKey)}</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {progress?.quizScore}%
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-gray-500 dark:text-gray-400">{t('training.certificate.score')}</p>
            <p className="text-lg font-bold">{averageScore}%</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-gray-500 dark:text-gray-400">{t('training.certificate.date')}</p>
            <p className="text-lg font-bold">
              {completionDate ? new Date(completionDate).toLocaleDateString() : '-'}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-600">
          <p className="text-xs text-gray-400">
            {t('training.certificate.certificateId')}: {certificateId}
          </p>
          <p className="mt-1 text-xs text-gray-400">{t('training.certificate.legalRef')}</p>
          <p className="mt-3 text-xs italic text-gray-400">{t('disclaimer.certificate')}</p>
        </div>
      </div>
    </div>
  )
}
