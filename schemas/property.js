export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "location", title: "Locationle", type: "geopoint" },
    { name: "description", title: "Description", type: "string" },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        { type: "propertyImage" },
        
      ],
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",

      options: {
        layout: "radio",
        list: [
          { title: "House", value: "House" },
          { title: "Flat", value: "Flat" },
          { title: "Bed and Breakfast", value: "Bed and Breakfast" },
          { title: "Hotel", value: "Hotel" },
        ],
      },
    },
    { name: "price", title: "Price per Night", type: "number" },
    { name: "beds", title: "Beds", type: "number" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100, auto: true },
    },
    {
      title: "Host",
      name: "host",
      type: "reference",
      to: [{ type: "person" }],
    },
    // { name: "host", title: "Host", type: "host" },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "review",
        },
      ],
    },
  ],
};
