import type { Block } from 'payload'
// If your CourseCard config lives somewhere else, adjust the path:
import { CourseCard } from '@/blocks/CourseCard/config'

export const CoursesBlock: Block = {
  slug: 'courses',
  labels: { singular: 'Courses', plural: 'Courses' },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: false,
      defaultValue: 'Courses',
    },
    {
      name: 'filters',
      label: 'Filters',
      type: 'group',
      fields: [
        {
          name: 'subjects',
          type: 'array',
          required: true,
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
          ],
        },
        {
          name: 'grades',
          type: 'array',
          required: true,
          fields: [{ name: 'Grade', type: 'number', required: true }],
        },
        {
          name: 'durations',
          type: 'array',
          required: true,
          fields: [{ name: 'Duration (weeks)', type: 'number', required: true }],
        },
        {
          name: 'classSizes',
          type: 'array',
          required: true,
          fields: [
            { name: 'Minimum Class Size', type: 'number', required: true },
            { name: 'Maximum Class Size', type: 'number', required: true },
          ],
        },
      ],
    },

    //embedding course cards
    {
      name: 'cards',
      type: 'blocks',
      blocks: [CourseCard],
      label: 'Course Cards',
      required: false,
      admin: {
        description: 'Add CourseCard blocks. Set “category” for filters.',
      },
    },
  ],
}

export default CoursesBlock
