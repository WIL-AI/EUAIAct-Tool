import type { TrainingModule } from '../types/compliance'

export const trainingModules: TrainingModule[] = [
  {
    id: 'm1',
    titleKey: 'training.modules.m1_title',
    descriptionKey: 'training.modules.m1_desc',
    lessons: [
      { id: 'm1_l1', titleKey: 'training.content.m1.l1.title', contentKey: 'training.content.m1.l1.content' },
      { id: 'm1_l2', titleKey: 'training.content.m1.l2.title', contentKey: 'training.content.m1.l2.content' },
      { id: 'm1_l3', titleKey: 'training.content.m1.l3.title', contentKey: 'training.content.m1.l3.content' },
    ],
    quiz: [
      {
        id: 'm1_q1',
        questionKey: 'training.content.m1.quiz.q1.question',
        options: [
          { labelKey: 'training.content.m1.quiz.q1.a', value: 'a' },
          { labelKey: 'training.content.m1.quiz.q1.b', value: 'b' },
          { labelKey: 'training.content.m1.quiz.q1.c', value: 'c' },
          { labelKey: 'training.content.m1.quiz.q1.d', value: 'd' },
        ],
        correctValue: 'b',
        explanationKey: 'training.content.m1.quiz.q1.explanation',
      },
      {
        id: 'm1_q2',
        questionKey: 'training.content.m1.quiz.q2.question',
        options: [
          { labelKey: 'training.content.m1.quiz.q2.a', value: 'a' },
          { labelKey: 'training.content.m1.quiz.q2.b', value: 'b' },
          { labelKey: 'training.content.m1.quiz.q2.c', value: 'c' },
          { labelKey: 'training.content.m1.quiz.q2.d', value: 'd' },
        ],
        correctValue: 'c',
        explanationKey: 'training.content.m1.quiz.q2.explanation',
      },
      {
        id: 'm1_q3',
        questionKey: 'training.content.m1.quiz.q3.question',
        options: [
          { labelKey: 'training.content.m1.quiz.q3.a', value: 'a' },
          { labelKey: 'training.content.m1.quiz.q3.b', value: 'b' },
          { labelKey: 'training.content.m1.quiz.q3.c', value: 'c' },
          { labelKey: 'training.content.m1.quiz.q3.d', value: 'd' },
        ],
        correctValue: 'a',
        explanationKey: 'training.content.m1.quiz.q3.explanation',
      },
      {
        id: 'm1_q4',
        questionKey: 'training.content.m1.quiz.q4.question',
        options: [
          { labelKey: 'training.content.m1.quiz.q4.a', value: 'a' },
          { labelKey: 'training.content.m1.quiz.q4.b', value: 'b' },
          { labelKey: 'training.content.m1.quiz.q4.c', value: 'c' },
          { labelKey: 'training.content.m1.quiz.q4.d', value: 'd' },
        ],
        correctValue: 'd',
        explanationKey: 'training.content.m1.quiz.q4.explanation',
      },
      {
        id: 'm1_q5',
        questionKey: 'training.content.m1.quiz.q5.question',
        options: [
          { labelKey: 'training.content.m1.quiz.q5.a', value: 'a' },
          { labelKey: 'training.content.m1.quiz.q5.b', value: 'b' },
          { labelKey: 'training.content.m1.quiz.q5.c', value: 'c' },
          { labelKey: 'training.content.m1.quiz.q5.d', value: 'd' },
        ],
        correctValue: 'b',
        explanationKey: 'training.content.m1.quiz.q5.explanation',
      },
    ],
  },
  {
    id: 'm2',
    titleKey: 'training.modules.m2_title',
    descriptionKey: 'training.modules.m2_desc',
    lessons: [
      { id: 'm2_l1', titleKey: 'training.content.m2.l1.title', contentKey: 'training.content.m2.l1.content' },
      { id: 'm2_l2', titleKey: 'training.content.m2.l2.title', contentKey: 'training.content.m2.l2.content' },
      { id: 'm2_l3', titleKey: 'training.content.m2.l3.title', contentKey: 'training.content.m2.l3.content' },
    ],
    quiz: [
      {
        id: 'm2_q1', questionKey: 'training.content.m2.quiz.q1.question',
        options: [
          { labelKey: 'training.content.m2.quiz.q1.a', value: 'a' },
          { labelKey: 'training.content.m2.quiz.q1.b', value: 'b' },
          { labelKey: 'training.content.m2.quiz.q1.c', value: 'c' },
          { labelKey: 'training.content.m2.quiz.q1.d', value: 'd' },
        ],
        correctValue: 'c', explanationKey: 'training.content.m2.quiz.q1.explanation',
      },
      {
        id: 'm2_q2', questionKey: 'training.content.m2.quiz.q2.question',
        options: [
          { labelKey: 'training.content.m2.quiz.q2.a', value: 'a' },
          { labelKey: 'training.content.m2.quiz.q2.b', value: 'b' },
          { labelKey: 'training.content.m2.quiz.q2.c', value: 'c' },
          { labelKey: 'training.content.m2.quiz.q2.d', value: 'd' },
        ],
        correctValue: 'b', explanationKey: 'training.content.m2.quiz.q2.explanation',
      },
      {
        id: 'm2_q3', questionKey: 'training.content.m2.quiz.q3.question',
        options: [
          { labelKey: 'training.content.m2.quiz.q3.a', value: 'a' },
          { labelKey: 'training.content.m2.quiz.q3.b', value: 'b' },
          { labelKey: 'training.content.m2.quiz.q3.c', value: 'c' },
          { labelKey: 'training.content.m2.quiz.q3.d', value: 'd' },
        ],
        correctValue: 'a', explanationKey: 'training.content.m2.quiz.q3.explanation',
      },
      {
        id: 'm2_q4', questionKey: 'training.content.m2.quiz.q4.question',
        options: [
          { labelKey: 'training.content.m2.quiz.q4.a', value: 'a' },
          { labelKey: 'training.content.m2.quiz.q4.b', value: 'b' },
          { labelKey: 'training.content.m2.quiz.q4.c', value: 'c' },
          { labelKey: 'training.content.m2.quiz.q4.d', value: 'd' },
        ],
        correctValue: 'd', explanationKey: 'training.content.m2.quiz.q4.explanation',
      },
      {
        id: 'm2_q5', questionKey: 'training.content.m2.quiz.q5.question',
        options: [
          { labelKey: 'training.content.m2.quiz.q5.a', value: 'a' },
          { labelKey: 'training.content.m2.quiz.q5.b', value: 'b' },
          { labelKey: 'training.content.m2.quiz.q5.c', value: 'c' },
          { labelKey: 'training.content.m2.quiz.q5.d', value: 'd' },
        ],
        correctValue: 'a', explanationKey: 'training.content.m2.quiz.q5.explanation',
      },
    ],
  },
  {
    id: 'm3',
    titleKey: 'training.modules.m3_title',
    descriptionKey: 'training.modules.m3_desc',
    lessons: [
      { id: 'm3_l1', titleKey: 'training.content.m3.l1.title', contentKey: 'training.content.m3.l1.content' },
      { id: 'm3_l2', titleKey: 'training.content.m3.l2.title', contentKey: 'training.content.m3.l2.content' },
      { id: 'm3_l3', titleKey: 'training.content.m3.l3.title', contentKey: 'training.content.m3.l3.content' },
    ],
    quiz: [
      {
        id: 'm3_q1', questionKey: 'training.content.m3.quiz.q1.question',
        options: [
          { labelKey: 'training.content.m3.quiz.q1.a', value: 'a' },
          { labelKey: 'training.content.m3.quiz.q1.b', value: 'b' },
          { labelKey: 'training.content.m3.quiz.q1.c', value: 'c' },
          { labelKey: 'training.content.m3.quiz.q1.d', value: 'd' },
        ],
        correctValue: 'b', explanationKey: 'training.content.m3.quiz.q1.explanation',
      },
      {
        id: 'm3_q2', questionKey: 'training.content.m3.quiz.q2.question',
        options: [
          { labelKey: 'training.content.m3.quiz.q2.a', value: 'a' },
          { labelKey: 'training.content.m3.quiz.q2.b', value: 'b' },
          { labelKey: 'training.content.m3.quiz.q2.c', value: 'c' },
          { labelKey: 'training.content.m3.quiz.q2.d', value: 'd' },
        ],
        correctValue: 'c', explanationKey: 'training.content.m3.quiz.q2.explanation',
      },
      {
        id: 'm3_q3', questionKey: 'training.content.m3.quiz.q3.question',
        options: [
          { labelKey: 'training.content.m3.quiz.q3.a', value: 'a' },
          { labelKey: 'training.content.m3.quiz.q3.b', value: 'b' },
          { labelKey: 'training.content.m3.quiz.q3.c', value: 'c' },
          { labelKey: 'training.content.m3.quiz.q3.d', value: 'd' },
        ],
        correctValue: 'a', explanationKey: 'training.content.m3.quiz.q3.explanation',
      },
      {
        id: 'm3_q4', questionKey: 'training.content.m3.quiz.q4.question',
        options: [
          { labelKey: 'training.content.m3.quiz.q4.a', value: 'a' },
          { labelKey: 'training.content.m3.quiz.q4.b', value: 'b' },
          { labelKey: 'training.content.m3.quiz.q4.c', value: 'c' },
          { labelKey: 'training.content.m3.quiz.q4.d', value: 'd' },
        ],
        correctValue: 'd', explanationKey: 'training.content.m3.quiz.q4.explanation',
      },
      {
        id: 'm3_q5', questionKey: 'training.content.m3.quiz.q5.question',
        options: [
          { labelKey: 'training.content.m3.quiz.q5.a', value: 'a' },
          { labelKey: 'training.content.m3.quiz.q5.b', value: 'b' },
          { labelKey: 'training.content.m3.quiz.q5.c', value: 'c' },
          { labelKey: 'training.content.m3.quiz.q5.d', value: 'd' },
        ],
        correctValue: 'b', explanationKey: 'training.content.m3.quiz.q5.explanation',
      },
    ],
  },
  {
    id: 'm4',
    titleKey: 'training.modules.m4_title',
    descriptionKey: 'training.modules.m4_desc',
    lessons: [
      { id: 'm4_l1', titleKey: 'training.content.m4.l1.title', contentKey: 'training.content.m4.l1.content' },
      { id: 'm4_l2', titleKey: 'training.content.m4.l2.title', contentKey: 'training.content.m4.l2.content' },
      { id: 'm4_l3', titleKey: 'training.content.m4.l3.title', contentKey: 'training.content.m4.l3.content' },
    ],
    quiz: [
      {
        id: 'm4_q1', questionKey: 'training.content.m4.quiz.q1.question',
        options: [
          { labelKey: 'training.content.m4.quiz.q1.a', value: 'a' },
          { labelKey: 'training.content.m4.quiz.q1.b', value: 'b' },
          { labelKey: 'training.content.m4.quiz.q1.c', value: 'c' },
          { labelKey: 'training.content.m4.quiz.q1.d', value: 'd' },
        ],
        correctValue: 'c', explanationKey: 'training.content.m4.quiz.q1.explanation',
      },
      {
        id: 'm4_q2', questionKey: 'training.content.m4.quiz.q2.question',
        options: [
          { labelKey: 'training.content.m4.quiz.q2.a', value: 'a' },
          { labelKey: 'training.content.m4.quiz.q2.b', value: 'b' },
          { labelKey: 'training.content.m4.quiz.q2.c', value: 'c' },
          { labelKey: 'training.content.m4.quiz.q2.d', value: 'd' },
        ],
        correctValue: 'a', explanationKey: 'training.content.m4.quiz.q2.explanation',
      },
      {
        id: 'm4_q3', questionKey: 'training.content.m4.quiz.q3.question',
        options: [
          { labelKey: 'training.content.m4.quiz.q3.a', value: 'a' },
          { labelKey: 'training.content.m4.quiz.q3.b', value: 'b' },
          { labelKey: 'training.content.m4.quiz.q3.c', value: 'c' },
          { labelKey: 'training.content.m4.quiz.q3.d', value: 'd' },
        ],
        correctValue: 'b', explanationKey: 'training.content.m4.quiz.q3.explanation',
      },
      {
        id: 'm4_q4', questionKey: 'training.content.m4.quiz.q4.question',
        options: [
          { labelKey: 'training.content.m4.quiz.q4.a', value: 'a' },
          { labelKey: 'training.content.m4.quiz.q4.b', value: 'b' },
          { labelKey: 'training.content.m4.quiz.q4.c', value: 'c' },
          { labelKey: 'training.content.m4.quiz.q4.d', value: 'd' },
        ],
        correctValue: 'd', explanationKey: 'training.content.m4.quiz.q4.explanation',
      },
      {
        id: 'm4_q5', questionKey: 'training.content.m4.quiz.q5.question',
        options: [
          { labelKey: 'training.content.m4.quiz.q5.a', value: 'a' },
          { labelKey: 'training.content.m4.quiz.q5.b', value: 'b' },
          { labelKey: 'training.content.m4.quiz.q5.c', value: 'c' },
          { labelKey: 'training.content.m4.quiz.q5.d', value: 'd' },
        ],
        correctValue: 'a', explanationKey: 'training.content.m4.quiz.q5.explanation',
      },
    ],
  },
  {
    id: 'm5',
    titleKey: 'training.modules.m5_title',
    descriptionKey: 'training.modules.m5_desc',
    lessons: [
      { id: 'm5_l1', titleKey: 'training.content.m5.l1.title', contentKey: 'training.content.m5.l1.content' },
      { id: 'm5_l2', titleKey: 'training.content.m5.l2.title', contentKey: 'training.content.m5.l2.content' },
      { id: 'm5_l3', titleKey: 'training.content.m5.l3.title', contentKey: 'training.content.m5.l3.content' },
    ],
    quiz: [
      {
        id: 'm5_q1', questionKey: 'training.content.m5.quiz.q1.question',
        options: [
          { labelKey: 'training.content.m5.quiz.q1.a', value: 'a' },
          { labelKey: 'training.content.m5.quiz.q1.b', value: 'b' },
          { labelKey: 'training.content.m5.quiz.q1.c', value: 'c' },
          { labelKey: 'training.content.m5.quiz.q1.d', value: 'd' },
        ],
        correctValue: 'b', explanationKey: 'training.content.m5.quiz.q1.explanation',
      },
      {
        id: 'm5_q2', questionKey: 'training.content.m5.quiz.q2.question',
        options: [
          { labelKey: 'training.content.m5.quiz.q2.a', value: 'a' },
          { labelKey: 'training.content.m5.quiz.q2.b', value: 'b' },
          { labelKey: 'training.content.m5.quiz.q2.c', value: 'c' },
          { labelKey: 'training.content.m5.quiz.q2.d', value: 'd' },
        ],
        correctValue: 'c', explanationKey: 'training.content.m5.quiz.q2.explanation',
      },
      {
        id: 'm5_q3', questionKey: 'training.content.m5.quiz.q3.question',
        options: [
          { labelKey: 'training.content.m5.quiz.q3.a', value: 'a' },
          { labelKey: 'training.content.m5.quiz.q3.b', value: 'b' },
          { labelKey: 'training.content.m5.quiz.q3.c', value: 'c' },
          { labelKey: 'training.content.m5.quiz.q3.d', value: 'd' },
        ],
        correctValue: 'a', explanationKey: 'training.content.m5.quiz.q3.explanation',
      },
      {
        id: 'm5_q4', questionKey: 'training.content.m5.quiz.q4.question',
        options: [
          { labelKey: 'training.content.m5.quiz.q4.a', value: 'a' },
          { labelKey: 'training.content.m5.quiz.q4.b', value: 'b' },
          { labelKey: 'training.content.m5.quiz.q4.c', value: 'c' },
          { labelKey: 'training.content.m5.quiz.q4.d', value: 'd' },
        ],
        correctValue: 'd', explanationKey: 'training.content.m5.quiz.q4.explanation',
      },
      {
        id: 'm5_q5', questionKey: 'training.content.m5.quiz.q5.question',
        options: [
          { labelKey: 'training.content.m5.quiz.q5.a', value: 'a' },
          { labelKey: 'training.content.m5.quiz.q5.b', value: 'b' },
          { labelKey: 'training.content.m5.quiz.q5.c', value: 'c' },
          { labelKey: 'training.content.m5.quiz.q5.d', value: 'd' },
        ],
        correctValue: 'b', explanationKey: 'training.content.m5.quiz.q5.explanation',
      },
    ],
  },
]
