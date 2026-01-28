import type { Block } from 'payload'

export const TwoColumnHero: Block = {
  slug: 'twoColumnHero',
  labels: {
    singular: 'Two Column Hero',
    plural: 'Two Column Heroes',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: false,
      label: 'Hero Heading',
      defaultValue: 'Volunteer',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Hero Image',
    },
  ],
}

export default TwoColumnHero
