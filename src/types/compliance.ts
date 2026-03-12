export type RiskLevel = 'unacceptable' | 'high' | 'limited' | 'minimal'

export interface WizardOption {
  labelKey: string
  value: string
  leadsTo?: string
  resultRisk?: RiskLevel
}

export interface WizardQuestion {
  id: string
  questionKey: string
  options: WizardOption[]
}

export interface ChecklistCategory {
  id: string
  titleKey: string
  descriptionKey: string
  items: ChecklistItem[]
}

export interface ChecklistItem {
  id: string
  labelKey: string
}

export interface TrainingLesson {
  id: string
  titleKey: string
  contentKey: string
}

export interface QuizQuestion {
  id: string
  questionKey: string
  options: { labelKey: string; value: string }[]
  correctValue: string
  explanationKey: string
}

export interface TrainingModule {
  id: string
  titleKey: string
  descriptionKey: string
  lessons: TrainingLesson[]
  quiz: QuizQuestion[]
}

export interface ModuleProgress {
  completed: boolean
  quizScore: number
  completedAt: string | null
}
