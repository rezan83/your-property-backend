export default {
  name: "person",
  title: "Person",
  type: "document",
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100, auto: true },
    },
  ],
};


