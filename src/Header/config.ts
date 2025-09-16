import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      label: 'Navigation Items',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
        {
          name: 'newTab',
          label: 'Open in new tab',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'hasDropdown',
          label: 'Has Dropdown',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'dropdownItems',
          label: 'Dropdown Items',
          type: 'array',
          admin: {
            condition: (_: any, siblingData: any) => siblingData?.hasDropdown,
          },
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
            },
            {
              name: 'newTab',
              label: 'Open in new tab',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
        description: 'Add navigation items for the header menu',
      },
      defaultValue: [
        {
          label: 'home',
          url: '/',
          newTab: false,
          hasDropdown: false,
        },
        {
          label: 'about',
          url: '/about',
          newTab: false,
          hasDropdown: true,
          dropdownItems: [
            {
              label: 'about',
              url: '/about',
              newTab: false,
            },
            {
              label: 'FAQ',
              url: '/faq',
              newTab: false,
            },
          ],
        },
        {
          label: 'courses',
          url: '/courses',
          newTab: false,
          hasDropdown: false,
        },
        {
          label: 'team',
          url: '/team',
          newTab: false,
          hasDropdown: false,
        },
        {
          label: 'get involved',
          url: '/get-involved',
          newTab: false,
          hasDropdown: true,
          dropdownItems: [
            {
              label: 'contact us',
              url: '/contact',
              newTab: false,
            },
            {
              label: 'donate',
              url: '/donate',
              newTab: false,
            },
            {
              label: 'volunteer',
              url: '/volunteer',
              newTab: false,
            },
          ],
        },
        {
          label: 'partners + sponsors',
          url: '/partners',
          newTab: false,
          hasDropdown: false,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
