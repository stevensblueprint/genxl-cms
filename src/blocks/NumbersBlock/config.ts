import { Block } from 'payload/types';

export const NumbersBlock: Block = {
  slug: 'numbersBlock',
  interfaceName: 'NumbersBlock',
  fields: [
    {
      name: 'uniqueCourses',
      type: 'number',
      label: 'Unique Courses',
      required: true,
      defaultValue: 10,
    },
    {
      name: 'applicants',
      type: 'number',
      label: 'Applicants',
      required: true,
      defaultValue: 51000,
    },
    {
      name: 'countriesStates',
      type: 'number',
      label: 'Countries & States',
      required: true,
      defaultValue: 40,
    },
    {
      name: 'instructors',
      type: 'number',
      label: 'Course Instructors',
      required: true,
      defaultValue: 2100,
    },
  ],
};
