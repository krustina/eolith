import {LinkIcon} from '@sanity/icons'

export default {
  name: 'press',
  type: 'document',
  title: 'Press',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'pressDate',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
}
