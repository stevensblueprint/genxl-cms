import type { Block } from 'payload'

export const SponsorsPartners: Block = {
  slug: 'sponsorsPartners',
  labels: { singular: 'Sponsors/Partners', plural: 'Sponsors/Partners' },
  fields: [
    {
      type: 'group',
      name: 'sponsors',
      label: 'Sponsors Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Sponsors' },
        { name: 'description', type: 'textarea', label: 'Caption' },
        {
          name: 'logos',
          type: 'array',
          fields: [
            { name: 'media', type: 'upload', relationTo: 'media', required: true },
            { name: 'alt', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'partners',
      label: 'Partners Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Partners' },
        { name: 'description', type: 'textarea', label: 'Caption' },
        {
          name: 'logos',
          type: 'array',
          fields: [
            { name: 'media', type: 'upload', relationTo: 'media', required: true },
            { name: 'alt', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
      ],
    },
  ],
}
export default SponsorsPartners
