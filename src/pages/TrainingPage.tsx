import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, CheckCircle, RotateCcw, Award } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Input } from '../components/ui/Input'
import { TrainingModule } from '../components/training/TrainingModule'
import { TrainingCertificate } from '../components/training/TrainingCertificate'
import { useTrainingStore } from '../stores/trainingStore'
import { trainingModules } from '../data/trainingModules'

export function TrainingPage() {
  const { t } = useTranslation()
  const { participantName, moduleProgress, certificateId, setParticipantName, resetTraining } = useTrainingStore()
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null)
  const [showCertificate, setShowCertificate] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const completedCount = trainingModules.filter((m) => moduleProgress[m.id]?.completed).length
  const totalModules = trainingModules.length

  if (showCertificate && certificateId) {
    return <TrainingCertificate onBack={() => setShowCertificate(false)} />
  }

  const activeModule = trainingModules.find((m) => m.id === activeModuleId)
  if (activeModule) {
    return <TrainingModule module={activeModule} onBack={() => setActiveModuleId(null)} />
  }

  const handleReset = () => {
    resetTraining()
    setShowResetConfirm(false)
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('training.title')}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{t('training.subtitle')}</p>
      </div>

      <Card>
        <Input
          label={t('training.participantName')}
          placeholder={t('training.participantPlaceholder')}
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
        />
      </Card>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">{t('training.overallProgress')}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t('training.modulesCompleted', { count: completedCount, total: totalModules })}
          </span>
        </div>
        <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-3 rounded-full bg-primary-600 transition-all"
            style={{ width: `${(completedCount / totalModules) * 100}%` }}
          />
        </div>
      </Card>

      {certificateId && (
        <Card className="border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-900/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-green-700 dark:text-green-400">
                  {t('training.certificateAvailable')}
                </p>
              </div>
            </div>
            <Button size="sm" onClick={() => setShowCertificate(true)}>
              {t('training.viewCertificate')}
            </Button>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {trainingModules.map((mod, index) => {
          const progress = moduleProgress[mod.id]
          const isCompleted = progress?.completed

          return (
            <Card key={mod.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                    isCompleted
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {isCompleted ? <CheckCircle className="h-5 w-5" /> : index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{t(mod.titleKey)}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t(mod.descriptionKey)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isCompleted ? (
                    <Badge variant="success">{progress.quizScore}%</Badge>
                  ) : progress?.quizScore ? (
                    <Badge variant="danger">{progress.quizScore}%</Badge>
                  ) : null}
                  <Button
                    size="sm"
                    variant={isCompleted ? 'secondary' : 'primary'}
                    onClick={() => setActiveModuleId(mod.id)}
                    disabled={!participantName.trim()}
                  >
                    {isCompleted ? t('training.completed') : progress ? t('training.continueModule') : t('training.startModule')}
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-end">
        {showResetConfirm ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-red-600">{t('training.resetConfirm')}</span>
            <Button variant="danger" size="sm" onClick={handleReset}>Ja</Button>
            <Button variant="ghost" size="sm" onClick={() => setShowResetConfirm(false)}>Nein</Button>
          </div>
        ) : (
          <Button variant="ghost" onClick={() => setShowResetConfirm(true)}>
            <RotateCcw className="h-4 w-4" />
            {t('training.resetTraining')}
          </Button>
        )}
      </div>
    </div>
  )
}
