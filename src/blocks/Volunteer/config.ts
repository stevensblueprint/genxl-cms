import type { Block } from 'payload'

export const Volunteer: Block = {
  slug: 'volunteer',
  interfaceName: 'Volunteer',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'caption',
          type: 'textarea',
          label: 'Card Caption',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Apply',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link (URL)',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
      ],
    },
  ],
}
