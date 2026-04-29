import type { Block } from 'payload'

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
      defaultValue: 'Support genxl',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Make a donation, make a difference',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'donationAmounts',
      type: 'array',
      label: 'Donation Amount Buttons',
      minRows: 1,
      maxRows: 4,
      defaultValue: [
        {
          amount: 100,
        },
        {
          amount: 50,
        },
        {
          amount: 25,
        },
        {
          amount: 10,
        },
      ],
      fields: [
        {
          name: 'amount',
          type: 'number',
          label: 'Amount',
          required: true,
        },
      ],
    },
  ],
}
