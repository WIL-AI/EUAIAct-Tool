import type { WizardQuestion } from '../types/compliance'

export const wizardQuestions: WizardQuestion[] = [
  {
    id: 'q1',
    questionKey: 'compliance.wizard.q1',
    options: [
      { labelKey: 'compliance.wizard.q1_social_scoring', value: 'social_scoring', resultRisk: 'unacceptable' },
      { labelKey: 'compliance.wizard.q1_biometric', value: 'biometric', resultRisk: 'unacceptable' },
      { labelKey: 'compliance.wizard.q1_manipulation', value: 'manipulation', resultRisk: 'unacceptable' },
      { labelKey: 'compliance.wizard.q1_exploitation', value: 'exploitation', resultRisk: 'unacceptable' },
      { labelKey: 'compliance.wizard.q1_none', value: 'none', leadsTo: 'q2' },
    ],
  },
  {
    id: 'q2',
    questionKey: 'compliance.wizard.q2',
    options: [
      { labelKey: 'compliance.wizard.q2_biometric', value: 'biometric', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_critical', value: 'critical', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_education', value: 'education', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_employment', value: 'employment', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_services', value: 'services', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_law', value: 'law', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_migration', value: 'migration', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_justice', value: 'justice', leadsTo: 'q3' },
      { labelKey: 'compliance.wizard.q2_none', value: 'none', leadsTo: 'q4' },
    ],
  },
  {
    id: 'q3',
    questionKey: 'compliance.wizard.q3',
    options: [
      { labelKey: 'compliance.wizard.q3_autonomous', value: 'autonomous', resultRisk: 'high' },
      { labelKey: 'compliance.wizard.q3_assists', value: 'assists', resultRisk: 'high' },
      { labelKey: 'compliance.wizard.q3_no', value: 'no', leadsTo: 'q4' },
    ],
  },
  {
    id: 'q4',
    questionKey: 'compliance.wizard.q4',
    options: [
      { labelKey: 'compliance.wizard.q4_chatbot', value: 'chatbot', resultRisk: 'limited' },
      { labelKey: 'compliance.wizard.q4_deepfake', value: 'deepfake', resultRisk: 'limited' },
      { labelKey: 'compliance.wizard.q4_text', value: 'text', resultRisk: 'limited' },
      { labelKey: 'compliance.wizard.q4_no', value: 'no', leadsTo: 'q5' },
    ],
  },
  {
    id: 'q5',
    questionKey: 'compliance.wizard.q5',
    options: [
      { labelKey: 'compliance.wizard.q5_yes', value: 'yes', resultRisk: 'limited' },
      { labelKey: 'compliance.wizard.q5_no', value: 'no', resultRisk: 'minimal' },
    ],
  },
]
