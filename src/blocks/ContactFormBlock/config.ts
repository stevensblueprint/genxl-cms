import type { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contactForm',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'contactHeading',
      type: 'text',
      required: false,
      label: 'Contact Heading',
      defaultValue: 'Contact Us',
    },
    {
      name: 'contactSubheading',
      type: 'textarea',
      required: false,
      label: 'Contact Subheading',
      defaultValue: 'Have a question, comment, or concern? Tell us about it here!',
    },
  ],
}

export default ContactForm
