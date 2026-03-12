import type { ChecklistCategory, RiskLevel } from '../types/compliance'

const highRiskCategories: ChecklistCategory[] = [
  {
    id: 'risk_mgmt',
    titleKey: 'compliance.checklist.risk_mgmt',
    descriptionKey: 'compliance.checklist.risk_mgmt_desc',
    items: [
      { id: 'risk_mgmt_1', labelKey: 'compliance.checklist.risk_mgmt_1' },
      { id: 'risk_mgmt_2', labelKey: 'compliance.checklist.risk_mgmt_2' },
      { id: 'risk_mgmt_3', labelKey: 'compliance.checklist.risk_mgmt_3' },
      { id: 'risk_mgmt_4', labelKey: 'compliance.checklist.risk_mgmt_4' },
    ],
  },
  {
    id: 'data_gov',
    titleKey: 'compliance.checklist.data_gov',
    descriptionKey: 'compliance.checklist.data_gov_desc',
    items: [
      { id: 'data_gov_1', labelKey: 'compliance.checklist.data_gov_1' },
      { id: 'data_gov_2', labelKey: 'compliance.checklist.data_gov_2' },
      { id: 'data_gov_3', labelKey: 'compliance.checklist.data_gov_3' },
      { id: 'data_gov_4', labelKey: 'compliance.checklist.data_gov_4' },
    ],
  },
  {
    id: 'tech_doc',
    titleKey: 'compliance.checklist.tech_doc',
    descriptionKey: 'compliance.checklist.tech_doc_desc',
    items: [
      { id: 'tech_doc_1', labelKey: 'compliance.checklist.tech_doc_1' },
      { id: 'tech_doc_2', labelKey: 'compliance.checklist.tech_doc_2' },
      { id: 'tech_doc_3', labelKey: 'compliance.checklist.tech_doc_3' },
      { id: 'tech_doc_4', labelKey: 'compliance.checklist.tech_doc_4' },
    ],
  },
  {
    id: 'records',
    titleKey: 'compliance.checklist.records',
    descriptionKey: 'compliance.checklist.records_desc',
    items: [
      { id: 'records_1', labelKey: 'compliance.checklist.records_1' },
      { id: 'records_2', labelKey: 'compliance.checklist.records_2' },
      { id: 'records_3', labelKey: 'compliance.checklist.records_3' },
    ],
  },
  {
    id: 'transparency',
    titleKey: 'compliance.checklist.transparency',
    descriptionKey: 'compliance.checklist.transparency_desc',
    items: [
      { id: 'transparency_1', labelKey: 'compliance.checklist.transparency_1' },
      { id: 'transparency_2', labelKey: 'compliance.checklist.transparency_2' },
      { id: 'transparency_3', labelKey: 'compliance.checklist.transparency_3' },
      { id: 'transparency_4', labelKey: 'compliance.checklist.transparency_4' },
    ],
  },
  {
    id: 'human_oversight',
    titleKey: 'compliance.checklist.human_oversight',
    descriptionKey: 'compliance.checklist.human_oversight_desc',
    items: [
      { id: 'human_oversight_1', labelKey: 'compliance.checklist.human_oversight_1' },
      { id: 'human_oversight_2', labelKey: 'compliance.checklist.human_oversight_2' },
      { id: 'human_oversight_3', labelKey: 'compliance.checklist.human_oversight_3' },
    ],
  },
  {
    id: 'accuracy',
    titleKey: 'compliance.checklist.accuracy',
    descriptionKey: 'compliance.checklist.accuracy_desc',
    items: [
      { id: 'accuracy_1', labelKey: 'compliance.checklist.accuracy_1' },
      { id: 'accuracy_2', labelKey: 'compliance.checklist.accuracy_2' },
      { id: 'accuracy_3', labelKey: 'compliance.checklist.accuracy_3' },
    ],
  },
  {
    id: 'qms',
    titleKey: 'compliance.checklist.qms',
    descriptionKey: 'compliance.checklist.qms_desc',
    items: [
      { id: 'qms_1', labelKey: 'compliance.checklist.qms_1' },
      { id: 'qms_2', labelKey: 'compliance.checklist.qms_2' },
      { id: 'qms_3', labelKey: 'compliance.checklist.qms_3' },
    ],
  },
  {
    id: 'conformity',
    titleKey: 'compliance.checklist.conformity',
    descriptionKey: 'compliance.checklist.conformity_desc',
    items: [
      { id: 'conformity_1', labelKey: 'compliance.checklist.conformity_1' },
      { id: 'conformity_2', labelKey: 'compliance.checklist.conformity_2' },
    ],
  },
  {
    id: 'ce_marking',
    titleKey: 'compliance.checklist.ce_marking',
    descriptionKey: 'compliance.checklist.ce_marking_desc',
    items: [
      { id: 'ce_marking_1', labelKey: 'compliance.checklist.ce_marking_1' },
      { id: 'ce_marking_2', labelKey: 'compliance.checklist.ce_marking_2' },
    ],
  },
  {
    id: 'eu_db',
    titleKey: 'compliance.checklist.eu_db',
    descriptionKey: 'compliance.checklist.eu_db_desc',
    items: [
      { id: 'eu_db_1', labelKey: 'compliance.checklist.eu_db_1' },
    ],
  },
]

const limitedRiskCategories: ChecklistCategory[] = [
  {
    id: 'limited_transparency',
    titleKey: 'compliance.checklist.limited_transparency',
    descriptionKey: 'compliance.checklist.limited_transparency_desc',
    items: [
      { id: 'limited_transparency_1', labelKey: 'compliance.checklist.limited_transparency_1' },
      { id: 'limited_transparency_2', labelKey: 'compliance.checklist.limited_transparency_2' },
      { id: 'limited_transparency_3', labelKey: 'compliance.checklist.limited_transparency_3' },
      { id: 'limited_transparency_4', labelKey: 'compliance.checklist.limited_transparency_4' },
    ],
  },
]

const minimalRiskCategories: ChecklistCategory[] = [
  {
    id: 'voluntary',
    titleKey: 'compliance.checklist.voluntary',
    descriptionKey: 'compliance.checklist.voluntary_desc',
    items: [
      { id: 'voluntary_1', labelKey: 'compliance.checklist.voluntary_1' },
      { id: 'voluntary_2', labelKey: 'compliance.checklist.voluntary_2' },
      { id: 'voluntary_3', labelKey: 'compliance.checklist.voluntary_3' },
      { id: 'voluntary_4', labelKey: 'compliance.checklist.voluntary_4' },
    ],
  },
]

const unacceptableCategories: ChecklistCategory[] = [
  {
    id: 'prohibited',
    titleKey: 'compliance.checklist.prohibited',
    descriptionKey: 'compliance.checklist.prohibitedDesc',
    items: [
      { id: 'prohibited_1', labelKey: 'compliance.checklist.prohibited_1' },
      { id: 'prohibited_2', labelKey: 'compliance.checklist.prohibited_2' },
      { id: 'prohibited_3', labelKey: 'compliance.checklist.prohibited_3' },
    ],
  },
]

export function getRequirementsForRisk(riskLevel: RiskLevel): ChecklistCategory[] {
  switch (riskLevel) {
    case 'unacceptable':
      return unacceptableCategories
    case 'high':
      return highRiskCategories
    case 'limited':
      return limitedRiskCategories
    case 'minimal':
      return minimalRiskCategories
  }
}
