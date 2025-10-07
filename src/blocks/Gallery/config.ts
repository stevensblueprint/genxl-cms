import type { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Gallery Title',
      defaultValue: 'Our Gallery',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images',
      minRows: 1,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image or Video',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Image Caption',
        },
      ],
    },
  ],
}
 