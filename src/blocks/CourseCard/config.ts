import type { Block } from 'payload'

export const CourseCard: Block = {
  slug: 'courseCard',
  labels: { singular: 'Course Card', plural: 'Course Cards' },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Card Image',
    },
    { name: 'title', type: 'text', required: true, label: 'Course name' },

    { name: 'grade', type: 'text', required: true, label: 'Grade' },
    { name: 'duration', type: 'text', required: true, label: 'Duration' },
    { name: 'classSize', type: 'text', required: true, label: 'Class size' },
    {
      name: 'category',
      type: 'text',
      required: true,
      label: 'Category',
      admin: { description: 'Use same category as dropdown for filtering courses' },
    },

    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
      label: 'Button label',
      defaultValue: 'Information',
    },
    {
      name: 'buttonHref',
      type: 'text',
      required: false,
      label: 'Button URL or slug',
      admin: {
        description: 'Paste a URL or a site-relative slug like /courses/scratch',
      },
    },
  ],
}

export default CourseCard
