import type { Block } from 'payload'

export const MeatballMenu: Block = {
  slug: 'meatballMenu',
  interfaceName: 'MeatballMenu',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'What We Provide',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      defaultValue: 'Why GenXl?',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Menu Sections',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon/Image',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Background Color (Hex Code)',
      admin: {
        placeholder: '#ffffff',
        description: 'Enter a hex color code (e.g., #ffffff for white, #000000 for black)',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return true // Allow empty (will use default)
        const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
        if (!hexRegex.test(value)) {
          return 'Please enter a valid hex color code (e.g., #ffffff)'
        }
        return true
      },
    },
    {
      name: 'button',
      type: 'group',
      label: 'Optional Button',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Button',
          defaultValue: false,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          admin: {
            condition: (data, siblingData) => siblingData.show,
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Button Link',
          admin: {
            condition: (data, siblingData) => siblingData.show,
          },
        },
      ],
    },
  ],
}
 