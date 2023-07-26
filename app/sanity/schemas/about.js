export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'aboutUs',
      title: 'About',
      type: 'text',
    },
    {
      name: 'contact',
      title: 'Contact',
      description: 'Add email address(es), etc.',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
