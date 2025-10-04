export default {
  name: 'research',
  type: 'document',
  title: 'Research Publications',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the research publication.',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'authors',
      type: 'array',
      title: 'Authors',
      description: 'List of authors (in order).',
      of: [{type: 'string'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      title: 'Publication Year',
      description: 'Year the research was published.',
      validation: (Rule: {
        required: () => any
        min: (arg0: number) => any
        max: (arg0: number) => any
      }) =>
        Rule.required()
          .min(1900)
          .max(new Date().getFullYear() + 1),
    },
    {
      name: 'publicationType',
      type: 'string',
      title: 'Publication Type',
      description: 'Type of publication.',
      options: {
        list: [
          {title: 'Journal Article', value: 'journal-article'},
          {title: 'Conference Paper', value: 'conference-paper'},
          {title: 'Preprint', value: 'preprint'},
          {title: 'Book Chapter', value: 'book-chapter'},
          {title: 'Thesis', value: 'thesis'},
          {title: 'Technical Report', value: 'technical-report'},
          {title: 'Poster', value: 'poster'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
      description: 'Journal name, conference name, or publisher.',
    },
    {
      name: 'doi',
      type: 'string',
      title: 'DOI',
      description: 'Digital Object Identifier (e.g., 10.1234/example).',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Publication URL',
      description: 'Direct link to the publication.',
      validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'pdfLink',
      type: 'url',
      title: 'PDF Link',
      description: 'Direct link to PDF version.',
      validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'githubLink',
      type: 'url',
      title: 'GitHub Repository',
      description: 'Link to associated code repository.',
      validation: (Rule: {uri: (arg0: {scheme: string[]}) => any}) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Research topics, keywords, or tags.',
      of: [{type: 'string'}],
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Order in which to display (lower numbers appear first).',
      initialValue: 0,
    },
    {
      name: 'citations',
      type: 'number',
      title: 'Citation Count',
      description: 'Number of citations (optional).',
    },
  ],
  orderings: [
    {
      title: 'Year (Newest)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Year (Oldest)',
      name: 'yearAsc',
      by: [{field: 'year', direction: 'asc'}],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      type: 'publicationType',
    },
    prepare(selection: {title: any; year: any; type: any}) {
      const {title, year, type} = selection
      return {
        title: title,
        subtitle: `${year} • ${type}`,
      }
    },
  },
}
