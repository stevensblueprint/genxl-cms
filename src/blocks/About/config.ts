import type { Block } from 'payload'

export const About: Block = {
  slug: 'about',
  labels: { singular: 'About', plural: 'About' },
  fields: [
    { name: 'heading', type: 'text', required: false, label: 'Heading' },
    { name: 'subheading', type: 'text', required: false, label: 'Subheading' },
    { name: 'description', type: 'textarea', required: false, label: 'Description' },
    {
      type: 'group',
      name: 'button',
      label: 'Button (optional)',
      fields: [
        { name: 'label', type: 'text', required: false, label: 'Button Text' },
        { name: 'url', type: 'text', required: false, label: 'Button Link (URL or slug)' },
      ],
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Large Image',
    },
  ],
}

export default About
