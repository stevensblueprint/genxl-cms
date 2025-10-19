import type { Block } from 'payload'

export const DropdownBlock: Block = {
  slug: 'dropdown-block',
  interfaceName: 'DropdownBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Dropdown Label',
      required: true,
      defaultValue: 'What are you interested in learning?',
    },
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder Text',
      required: false,
      defaultValue: 'Select an option',
    },
    {
      name: 'options',
      type: 'array',
      label: 'Dropdown Options',
      required: true,
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Option Label',
          required: true,
          admin: {
            description: 'The text displayed to users',
          },
        },
        {
          name: 'value',
          type: 'text',
          label: 'Option Value',
          required: true,
          admin: {
            description: 'The internal value (lowercase, no spaces)',
          },
        },
      ],
      admin: {
        description: 'Add options that will appear in the dropdown menu',
      },
    },
  ],
};
