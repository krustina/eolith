import {SparklesIcon} from '@sanity/icons'

//TODO: Add video upload

export default {
  name: 'exhibitions',
  icon: SparklesIcon,
  type: 'document',
  title: 'Exhibitions',
  fields: [
    {
      name: 'title',
      title: 'Exhibition Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'current',
      title: 'Current Exhibition?',
      description: 'Turning this off will archive this exhibition',
      type: 'boolean',
    },
    {
      name: 'artists',
      title: 'Artists',
      description: 'Add artist(s)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'location',
      title: 'Location',
      description: 'ex: l`île-de-la-visitation or 45.575012, -73.661780',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'exhibitionText',
      title: 'Exhibition Text',
      description: 'Add exhibition write up here',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'documentation',
      description: 'Add all photographic documentation (.JPEG, .SVG, .PNG, .GIF)',
      title: 'Documentation',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
  ],
}
