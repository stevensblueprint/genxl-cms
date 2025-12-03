import type { Block } from 'payload'

export const Map: Block = {
  slug: 'map',
  interfaceName: 'Map',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Map Title',
      defaultValue: 'Our Outreach Locations',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Map Description',
      admin: {
        description: 'Optional description to display above the map',
      },
    },
    {
      name: 'locations',
      type: 'array',
      label: 'Locations',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Location Name',
          required: true,
          admin: {
            description: 'e.g., "Kathmandu, Nepal"',
          },
        },
        {
          name: 'latitude',
          type: 'number',
          label: 'Latitude',
          required: true,
          admin: {
            description: 'Location latitude (e.g., 27.7172)',
            step: 0.0001,
          },
        },
        {
          name: 'longitude',
          type: 'number',
          label: 'Longitude',
          required: true,
          admin: {
            description: 'Location longitude (e.g., 85.3240)',
            step: 0.0001,
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Location Description',
          admin: {
            description: 'Optional description shown in the popup',
          },
        },
      ],
    },
    {
      name: 'defaultZoom',
      type: 'number',
      label: 'Default Zoom Level',
      defaultValue: 2,
      admin: {
        description: 'Zoom level when map first loads (1-18, where 1 is world view)',
      },
      min: 1,
      max: 18,
    },
    {
      name: 'defaultCenter',
      type: 'group',
      label: 'Default Map Center',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          label: 'Center Latitude',
          defaultValue: 20,
          admin: {
            description: 'Default center latitude for the map',
            step: 0.0001,
          },
        },
        {
          name: 'longitude',
          type: 'number',
          label: 'Center Longitude',
          defaultValue: 0,
          admin: {
            description: 'Default center longitude for the map',
            step: 0.0001,
          },
        },
      ],
    },
  ],
}
