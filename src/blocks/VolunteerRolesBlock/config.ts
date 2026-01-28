import type { Block } from 'payload'

export const VolunteerRoles: Block = {
  slug: 'volunteerRoles',
  labels: {
    singular: 'Volunteer Roles',
    plural: 'Volunteer Roles Blocks',
  },
  fields: [
    {
      name: 'rolesHeading',
      type: 'text',
      required: false,
      label: 'Roles Section Heading',
      defaultValue: 'Our Team Roles',
    },
    {
      name: 'roles',
      type: 'array',
      label: 'Team Roles',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Role Title',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Role Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Role Image',
        },
      ],
    },
  ],
}

export default VolunteerRoles
