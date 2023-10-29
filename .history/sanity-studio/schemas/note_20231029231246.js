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
          to: [{type: 'note'}],
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
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'notetitle',
      authorid: 'author.userid',
      authorname: 'author.username',
      authoremail: 'author.email',
    },
    prepare(selection) {
      const {title, authorid, authorname, authoremail} = selection
      return {
        title,
        subtitle: `by ${authorname} (${authorid}) (${authoremail})`,
      }
    },
  },
}
