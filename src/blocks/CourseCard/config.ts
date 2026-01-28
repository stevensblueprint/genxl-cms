import type { Block } from 'payload'

export const CourseCard: Block = {
  slug: 'courseCard',
  labels: { singular: 'Course Card', plural: 'Course Cards' },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Course name' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
    },
    {
      name: 'buttonHref',
      type: 'text',
      required: false,
      label: 'Link URL',
      admin: {
        description: 'URL or slug to navigate to when clicking the card (e.g. /courses/scratch)',
      },
    },

    // Hidden fields for filtering (kept for backwards compatibility)
    {
      name: 'grade',
      type: 'group',
      required: true,
      label: 'Grade',
      fields: [
        { name: 'minGrade', type: 'number', required: true },
        { name: 'maxGrade', type: 'number', required: true },
      ],
      admin: { description: 'Used for filtering courses' },
    },
    {
      name: 'duration',
      type: 'number',
      required: true,
      label: 'Duration (weeks)',
      admin: { description: 'Used for filtering courses' },
    },
    {
      name: 'classSize',
      type: 'number',
      required: true,
      label: 'Class Size',
      admin: { description: 'Used for filtering courses' },
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Subject',
      admin: { description: 'Used for filtering courses' },
    },
  ],
}

export default CourseCard
