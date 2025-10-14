import type { GlobalConfig } from 'payload'

// import { link } from '@/fields/link'
import { revalidateAccordion } from './hooks/revalidateAccordion'

export const Accordion: GlobalConfig = {
  slug: 'accordion',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'questions',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'text',
        },
        {
          name: 'answer',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateAccordion],
  },
}
