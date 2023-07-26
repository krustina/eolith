export default {
    name: "global",
    type: "document",
    title: "Global Settings",
    fields: [
        {
            name: "logo",
            title: "Logo",
            description: "Add logo file (.JPEG, .SVG, .PNG, .GIF)",
            type: "image",
            validation: (Rule) => Rule.required(),
        },

        {
            name: "backgroundColour",
            title: "Background colour",
            description: "Global background colour",
            type: "color",
        },
        {
            name: "primaryTextColour",
            title: "Primary Text Colour",
            description: "Global text colour",
            type: "color",
        },
        {
            name: "secondaryTextColour",
            title: "Secondary Text Colour",
            description: "Highlight Colour",
            type: "color",
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
    ],
};
