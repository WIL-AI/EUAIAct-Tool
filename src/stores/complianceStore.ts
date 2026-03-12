import { create } from 'zustand'
import type { RiskLevel } from '../types/compliance'
import { getRequirementsForRisk } from '../data/complianceRequirements'

interface ComplianceState {
  wizardAnswers: Record<string, string>
  riskLevel: RiskLevel | null
  wizardCompleted: boolean
  checkedItems: Record<string, boolean>
  setWizardAnswer: (questionId: string, value: string) => void
  setRiskLevel: (level: RiskLevel) => void
  completeWizard: () => void
  resetWizard: () => void
  toggleChecklistItem: (itemId: string) => void
  resetChecklist: () => void
}

function loadState() {
  try {
    const data = localStorage.getItem('compliance-data')
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

function saveState(state: Partial<ComplianceState>) {
  localStorage.setItem('compliance-data', JSON.stringify({
    wizardAnswers: state.wizardAnswers,
    riskLevel: state.riskLevel,
    wizardCompleted: state.wizardCompleted,
    checkedItems: state.checkedItems,
  }))
}

const saved = loadState()

export const useComplianceStore = create<ComplianceState>((set) => ({
  wizardAnswers: saved?.wizardAnswers || {},
  riskLevel: saved?.riskLevel || null,
  wizardCompleted: saved?.wizardCompleted || false,
  checkedItems: saved?.checkedItems || {},

  setWizardAnswer: (questionId, value) =>
    set((s) => {
      const next = { ...s, wizardAnswers: { ...s.wizardAnswers, [questionId]: value } }
      saveState(next)
      return next
    }),

  setRiskLevel: (level) =>
    set((s) => {
      const next = { ...s, riskLevel: level }
      saveState(next)
      return next
    }),

  completeWizard: () =>
    set((s) => {
      const next = { ...s, wizardCompleted: true }
      saveState(next)
      return next
    }),

  resetWizard: () =>
    set(() => {
      const next = { wizardAnswers: {}, riskLevel: null, wizardCompleted: false, checkedItems: {} }
      saveState(next as any)
      return next
    }),

  toggleChecklistItem: (itemId) =>
    set((s) => {
      const next = { ...s, checkedItems: { ...s.checkedItems, [itemId]: !s.checkedItems[itemId] } }
      saveState(next)
      return next
    }),

  resetChecklist: () =>
    set((s) => {
      const next = { ...s, checkedItems: {} }
      saveState(next)
      return next
    }),
}))

export function getComplianceScore(riskLevel: RiskLevel | null, checkedItems: Record<string, boolean>) {
  if (!riskLevel) return { checked: 0, total: 0, percentage: 0 }
  const categories = getRequirementsForRisk(riskLevel)
  const allItems = categories.flatMap((c) => c.items)
  const total = allItems.length
  const checked = allItems.filter((item) => checkedItems[item.id]).length
  return { checked, total, percentage: total > 0 ? Math.round((checked / total) * 100) : 0 }
}
