import type { Block } from 'payload';

export const PopUpModalBlock: Block = {
  slug: 'popupModalBlock',
  interfaceName: 'PopUpModalBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Modal Title',
      required: true,
      defaultValue: 'Stay Connected!',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
      defaultValue: 'Get to know about new classes and programs!',
    },
    {
      name: 'emailPlaceholder',
      type: 'text',
      label: 'Email Input Placeholder',
      required: true,
      defaultValue: 'Your Email',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Subscribe Button Text',
      required: true,
      defaultValue: 'Subscribe',
    },
  ],
};
