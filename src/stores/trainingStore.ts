import { create } from 'zustand'
import type { ModuleProgress } from '../types/compliance'

interface TrainingState {
  participantName: string
  moduleProgress: Record<string, ModuleProgress>
  certificateId: string | null
  setParticipantName: (name: string) => void
  completeModule: (moduleId: string, quizScore: number) => void
  resetTraining: () => void
}

function loadState() {
  try {
    const data = localStorage.getItem('training-data')
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

function saveState(state: Partial<TrainingState>) {
  localStorage.setItem('training-data', JSON.stringify({
    participantName: state.participantName,
    moduleProgress: state.moduleProgress,
    certificateId: state.certificateId,
  }))
}

function generateCertificateId(name: string): string {
  const timestamp = Date.now().toString(36)
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i)
    hash |= 0
  }
  return `CERT-${timestamp}-${Math.abs(hash).toString(36).toUpperCase()}`
}

const saved = loadState()

export const useTrainingStore = create<TrainingState>((set, get) => ({
  participantName: saved?.participantName || '',
  moduleProgress: saved?.moduleProgress || {},
  certificateId: saved?.certificateId || null,

  setParticipantName: (name) =>
    set((s) => {
      const next = { ...s, participantName: name }
      saveState(next)
      return next
    }),

  completeModule: (moduleId, quizScore) =>
    set((s) => {
      const passed = quizScore >= 80
      const progress: ModuleProgress = {
        completed: passed,
        quizScore,
        completedAt: passed ? new Date().toISOString() : null,
      }
      const moduleProgress = { ...s.moduleProgress, [moduleId]: progress }

      const allModuleIds = ['m1', 'm2', 'm3', 'm4', 'm5']
      const allCompleted = allModuleIds.every((id) => moduleProgress[id]?.completed)
      const certificateId = allCompleted && !s.certificateId
        ? generateCertificateId(s.participantName)
        : s.certificateId

      const next = { ...s, moduleProgress, certificateId }
      saveState(next)
      return next
    }),

  resetTraining: () =>
    set(() => {
      const next = { participantName: '', moduleProgress: {}, certificateId: null }
      saveState(next as any)
      return next
    }),
}))
