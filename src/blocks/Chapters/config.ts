import type { Block } from 'payload'

export const Chapters: Block = {
  slug: 'chapters',
  labels: {
    singular: 'National Chapters',
    plural: 'National Chapters Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'National Chapters',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      defaultValue: 'Past and Present',
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Chapter Columns',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'chapters',
          type: 'array',
          label: 'Chapters',
          minRows: 1,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Chapter Name',
            },
            {
              name: 'url',
              type: 'text',
              required: false,
              label: 'Optional Link',
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}

export default Chapters
