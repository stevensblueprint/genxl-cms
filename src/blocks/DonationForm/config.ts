import type { Block } from 'payload'
import { FormBlock } from '../Form/config'

export const DonationForm: Block = {
  slug: 'donate',
  interfaceName: 'DonationFormBlock',
  labels: {
    plural: 'Donation Forms',
    singular: 'Donation Form',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'form',
      type: 'blocks',
      blocks: [FormBlock],
    },
  ],
}
