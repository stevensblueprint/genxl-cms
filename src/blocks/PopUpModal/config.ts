import { Block } from 'payload/types';

export const PopUpModal: Block = {
  slug: 'popupModal',
  interfaceName: 'PopUpModal',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'Stay Connected!',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      defaultValue: 'Get to know about new classes and programs!',
    },
    {
      name: 'placeholder',
      type: 'text',
      label: 'Email Placeholder',
      defaultValue: 'Your Email',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Subscribe',
    },
    {
      name: 'showOnLoad',
      type: 'checkbox',
      label: 'Show on Page Load',
      defaultValue: true,
    },
    {
      name: 'delaySeconds',
      type: 'number',
      label: 'Delay (seconds)',
      admin: {
        description: 'How long to wait before showing the popup',
      },
      defaultValue: 2,
    },
  ],
};
