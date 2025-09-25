import type { GlobalConfig } from 'payload'

// import { link } from '@/fields/link'
import { revalidateCarousel } from './hooks/revalidateCarousel'

export const Carousel: GlobalConfig = {
  slug: 'carousel',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
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
  hooks: {
    afterChange: [revalidateCarousel],
  },
}
