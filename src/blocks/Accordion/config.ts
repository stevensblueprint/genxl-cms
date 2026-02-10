import type { Block } from 'payload'

export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlock',
  labels: {
    plural: 'Accordions',
    singular: 'Accordion',
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
}
