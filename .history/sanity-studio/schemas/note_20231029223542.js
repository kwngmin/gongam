export default {
  title: 'Note',
  name: 'note',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Notetitle',
      name: 'notetitle',
      type: 'string',
    },
    {
      title: 'Notebody',
      name: 'notebody',
      type: 'string',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          tp: [{type: 'note'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
}
