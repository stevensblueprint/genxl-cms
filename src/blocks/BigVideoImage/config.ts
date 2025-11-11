import type { Block } from 'payload'

export const BigVideoImage: Block = {
  slug: 'bigVideoImage',
  interfaceName: 'BigVideoImageBlock',
  labels: {
    singular: 'Big Video/Image',
    plural: 'Big Video/Image',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload an image or video that will span the entire page width',
      },
    },
  ],
}

