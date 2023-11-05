export default {
    name: "global",
    type: "document",
    title: "Global Settings",
    fields: [
        {
            name: "logo",
            title: "Logo",
            description:
                "Add logo file (.JPEG, .SVG, .PNG, .GIF). Must be white to work with mix-blend-mode that is applied.",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "metaImg",
            title: "Meta Image",
            description:
                "Add meta image file (.JPEG, .SVG, .PNG, .GIF) | Shown in link share",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "meta",
            title: "Meta Description",
            description:
                "Description listed in search engine results/link share",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "favicon",
            title: "Favicon",
            description: "Website icon, tab icon, URL icon, or bookmark icon",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
    ],
};
