import type { Block } from 'payload'

export const MeatballMenu: Block = {
  slug: 'meatballMenu',
  interfaceName: 'MeatballMenuBlock',
  labels: {
    plural: 'Meatball Menus',
    singular: 'Meatball Menu',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: false,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: false,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Background Color (Hex Code)',
      required: false,
      admin: {
        description: 'Enter a hex color code (e.g., #F5F5F5)',
        placeholder: '#FFFFFF',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
          required: false,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
          required: false,
        },
        {
          name: 'subcaption',
          type: 'textarea',
          label: 'Subcaption',
          required: false,
        },
      ],
    },
  ],
}

export default MeatballMenu
