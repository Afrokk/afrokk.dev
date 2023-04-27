export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the project.',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'A short summary of the project.',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the project.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'An image of the project.',
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Tags related to the project.',
      of: [{ type: 'string' }],
    },
    {
      name: 'viewLink',
      type: 'url',
      title: 'View Link',
      description: 'A link to view the project.',
      validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
    },
    {
      name: 'githubLink',
      type: 'url',
      title: 'GitHub Link',
      description: 'A link to the project repository on GitHub.',
      validation: (Rule: { uri: (arg0: { scheme: string[]; allowRelative: boolean; relativeOnly: boolean; }) => any; }) => Rule.uri({
        scheme: ['http', 'https'],
        allowRelative: true,
        relativeOnly: false,
      }),
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created At',
      description: 'The date and time the project was created.',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
