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
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
