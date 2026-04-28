import type { Block } from 'payload'

export const MeetTheTeam: Block = {
  slug: 'meetTheTeam',
  labels: {
    singular: 'Meet the Team',
    plural: 'Meet the Team Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Meet the Team',
    },
    {
      name: 'members',
      type: 'array',
      label: 'Team Members',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          required: true,
          label: 'Role',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Headshot',
        },
      ],
    },
  ],
}

export default MeetTheTeam
