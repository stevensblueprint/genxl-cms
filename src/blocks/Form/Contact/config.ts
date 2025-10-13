import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contact-form-block',
  interfaceName: 'ContactFormBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'Contact Us',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue: 'Have a question, comment, or concern? Tell us about it here',
    },
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
      defaultValue: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      required: false,
      defaultValue: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
      defaultValue: 'Email',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Your Message',
      required: true,
      defaultValue: "What's up?",
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      required: false,
      defaultValue: 'SUBMIT',
    },
  ],
};

