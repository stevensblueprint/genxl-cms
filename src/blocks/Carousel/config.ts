import type { Block } from 'payload'

export const Carousel: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
  labels: {
    plural: 'Carousels',
    singular: 'Carousel',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'reviews',
      type: 'array',
      fields: [
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
  ],
}
