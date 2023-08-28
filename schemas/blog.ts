import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const blog = {
    name: "blog",
    title: "Blog",
    description: "Blog Schema",
    type: "document",
    icon: BiPackage,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter the name of the blog",
        },
        {
            name: "author",
            title: "Author",
            type: "string",
            description: "Enter the author name of the blog",
        },
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            validation: (rule) => rule.max(60).required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
                "Add a custom slug for the URL or generate one from the name",
            options: { source: "name" },
            validation: (rule) => rule.required(),
        }),
        {
            name: "logo",
            title: "Blog Logo",
            type: "image",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "Upload a cover image for this blog",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            description: "Write a full detail about this blog",
            of: [{ type: "block" }],
        },
    ],
};

export default blog;
