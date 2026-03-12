import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle, XCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import type { QuizQuestion } from '../../types/compliance'

interface TrainingQuizProps {
  questions: QuizQuestion[]
  onComplete: (score: number) => void
}

export function TrainingQuiz({ questions, onComplete }: TrainingQuizProps) {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = questions[currentIndex]
  const isCorrect = selectedValue === currentQuestion?.correctValue

  const handleSubmit = () => {
    if (!selectedValue) return
    setAnswered(true)
    if (isCorrect) {
      setCorrectCount((c) => c + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedValue(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  if (showResult) {
    const percentage = Math.round((correctCount / questions.length) * 100)
    const passed = percentage >= 80

    return (
      <Card className="text-center">
        <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
          {passed ? (
            <CheckCircle className="h-8 w-8 text-green-600" />
          ) : (
            <XCircle className="h-8 w-8 text-red-600" />
          )}
        </div>
        <h3 className="mb-2 text-xl font-bold">{t('training.quiz.result')}</h3>
        <p className="mb-2 text-lg">
          {t('training.quiz.score', { correct: correctCount, total: questions.length, percentage })}
        </p>
        <Badge variant={passed ? 'success' : 'danger'} className="mb-4 text-base px-4 py-1">
          {passed ? t('training.quiz.passed') : t('training.quiz.failed')}
        </Badge>
        {!passed && (
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{t('training.quiz.passThreshold')}</p>
        )}
        <Button onClick={() => onComplete(percentage)} className="mt-4">
          {passed ? t('training.quiz.continueTraining') : t('training.quiz.retryModule')}
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {t('training.quiz.question', { current: currentIndex + 1, total: questions.length })}
        </p>
        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2 rounded-full bg-primary-600 transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-semibold">{t(currentQuestion.questionKey)}</h3>
        <div className="space-y-2">
          {currentQuestion.options.map((option) => {
            let optionClass = 'border-gray-200 dark:border-gray-600'
            if (answered) {
              if (option.value === currentQuestion.correctValue) {
                optionClass = 'border-green-500 bg-green-50 dark:bg-green-900/20'
              } else if (option.value === selectedValue && !isCorrect) {
                optionClass = 'border-red-500 bg-red-50 dark:bg-red-900/20'
              }
            } else if (selectedValue === option.value) {
              optionClass = 'border-primary-600 bg-primary-50 dark:border-primary-400 dark:bg-primary-900/20'
            }

            return (
              <button
                key={option.value}
                onClick={() => !answered && setSelectedValue(option.value)}
                disabled={answered}
                className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${optionClass} ${!answered ? 'hover:bg-gray-50 dark:hover:bg-gray-700' : ''}`}
              >
                {t(option.labelKey)}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className={`mt-4 rounded-lg p-3 text-sm ${isCorrect ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300'}`}>
            <p className="font-semibold">
              {isCorrect ? t('training.quiz.correct') : t('training.quiz.incorrect')}
            </p>
            <p className="mt-1">{t('training.quiz.explanation')}: {t(currentQuestion.explanationKey)}</p>
          </div>
        )}
      </Card>

      <div className="flex justify-end">
        {!answered ? (
          <Button onClick={handleSubmit} disabled={!selectedValue}>
            {t('training.quiz.submit')}
          </Button>
        ) : (
          <Button onClick={handleNext}>
            {currentIndex < questions.length - 1 ? t('training.quiz.next') : t('training.quiz.result')}
          </Button>
        )}
      </div>
    </div>
  )
}
