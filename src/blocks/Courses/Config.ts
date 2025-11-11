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
      label: 'Filter Options',
      type: 'array',
      labels: { singular: 'Option', plural: 'Options' },
      admin: { description: 'Add dropdown options like “Math”, “Programming”, etc.' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
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
