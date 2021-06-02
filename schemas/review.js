export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "rate",
      title: "Rate",
      type: "number",
      options: {
        layout: "radio",
        list: [
          { title: "1 Star", value: 1 },
          { title: "2 Stars", value: 2 },
          { title: "3 Stars", value: 3 },
          { title: "4 Stars", value: 4 },
          { title: "5 Stars", value: 5 },
        ],
      },
    },
    { name: "reviewDescription", title: "Review Description", type: "string" },
    {
      name: "traveller",
      title: "Traveller",
      type: "traveller",
    },
  ],
  preview: { select: { title: "reviewDescription", rating: "rate" } },
};
