import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { TrainingQuiz } from './TrainingQuiz'
import { useTrainingStore } from '../../stores/trainingStore'
import type { TrainingModule as TModule } from '../../types/compliance'

interface TrainingModuleProps {
  module: TModule
  onBack: () => void
}

export function TrainingModule({ module, onBack }: TrainingModuleProps) {
  const { t } = useTranslation()
  const { completeModule } = useTrainingStore()
  const [currentLesson, setCurrentLesson] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)

  const lesson = module.lessons[currentLesson]
  const totalLessons = module.lessons.length

  const handleQuizComplete = (score: number) => {
    completeModule(module.id, score)
    onBack()
  }

  if (showQuiz) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => setShowQuiz(false)}>
          <ArrowLeft className="h-4 w-4" />
          {t('training.backToOverview')}
        </Button>
        <h2 className="text-xl font-bold">{t('training.quiz.title')} - {t(module.titleKey)}</h2>
        <TrainingQuiz questions={module.quiz} onComplete={handleQuizComplete} />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        {t('training.backToOverview')}
      </Button>

      <h2 className="text-xl font-bold">{t(module.titleKey)}</h2>

      <div>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {t('training.lesson', { current: currentLesson + 1, total: totalLessons })}
        </p>
        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2 rounded-full bg-primary-600 transition-all"
            style={{ width: `${((currentLesson + 1) / totalLessons) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-semibold">{t(lesson.titleKey)}</h3>
        <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-line text-gray-700 dark:text-gray-300">
          {t(lesson.contentKey)}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrentLesson((i) => i - 1)}
          disabled={currentLesson === 0}
        >
          <ArrowLeft className="h-4 w-4" />
          {t('training.prevLesson')}
        </Button>

        {currentLesson < totalLessons - 1 ? (
          <Button onClick={() => setCurrentLesson((i) => i + 1)}>
            {t('training.nextLesson')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={() => setShowQuiz(true)}>
            {t('training.startQuiz')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
