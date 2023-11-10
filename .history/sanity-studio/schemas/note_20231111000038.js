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
      type: 'text',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string',
            },
            {
              title: 'Comment Created At',
              name: 'commentAt',
              type: 'datetime',
            },
            {
              title: 'Comment Created At2',
              name: 'commentAt2',
              type: '_createdAt',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'notetitle',
      authorname: 'author.username',
    },
    prepare(selection) {
      const {title, authorname} = selection
      return {
        title,
        subtitle: `by ${authorname}`,
      }
    },
  },
}
