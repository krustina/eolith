import { SparklesIcon } from "@sanity/icons";

//TODO: Add video upload

export default {
    name: "exhibitions",
    icon: SparklesIcon,
    type: "document",
    title: "Exhibitions",
    fields: [
        {
            name: "title",
            title: "Exhibition Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
        {
            title: "Current Exhibition?",
            description:
                "ON = show current exhibition on homepage • OFF = archived",
            name: "hpDisplay",
            type: "boolean",
        },
        {
            name: "artists",
            title: "Artists",
            description: "Add artist(s)",
            type: "array",
            of: [
                {
                    type: "document",
                    fields: [
                        {
                            name: "name",
                            type: "string",
                            title: "Name",
                        },
                        {
                            name: "link",
                            description: "Link to artist ig or website",
                            type: "url",
                            title: "Link",
                        },
                    ],
                },
            ],
        },
        {
            name: "startDate",
            title: "Start date",
            type: "date",
            options: {
                dateFormat: "DD MMM YYYY",
            },

            validation: (Rule) => Rule.required(),
        },
        {
            name: "endDate",
            title: "End date",
            type: "date",
            options: {
                dateFormat: "DD MMM YYYY",
            },
        },
        {
            name: "location",
            title: "Location",
            description: "ex: l`île-de-la-visitation or 45.575012, -73.661780",
            type: "string",
            // validation: (Rule) => Rule.required(),
        },
        {
            name: "heroImg",
            title: "Hero Image",
            description: "Main exhibition image",
            type: "image",
        },
        {
            name: "documentation",
            description:
                "Add all photographic documentation (.JPEG, .SVG, .PNG, .GIF)",
            title: "Documentation",
            type: "array",
            of: [
                {
                    type: "image",
                    fields: [
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                        },
                    ],
                },
            ],
            options: {
                layout: "grid",
            },
        },
        {
            name: "exhibitionText",
            title: "Exhibition Text",
            description: "Add exhibition write up here",
            type: "array",
            of: [{ type: "block" }],
        },

        {
            name: "addAssets",
            description:
                "Ex: Site map asset, show poster, etc.. Will appear at the bottom of the exhibition page before any press listings.",
            title: "Additional Assets",
            type: "array",
            of: [
                {
                    type: "image",
                    fields: [
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                        },
                    ],
                },
            ],
            options: {
                layout: "grid",
            },
        },
        {
            name: "press",
            description: "Add all press associated with exhibition.",
            title: "Press",
            type: "array",
            of: [
                {
                    type: "document",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "source",
                            title: "Source",
                            type: "string",
                        },
                        {
                            name: "link",
                            title: "Link",
                            type: "url",
                        },
                    ],
                },
            ],
        },
    ],
    orderings: [
        {
            title: "Exhibition Date",
            name: "exhibitionDateDesc",
            by: [{ field: "startDate", direction: "desc" }],
        },
    ],
};
