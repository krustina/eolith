export default {
    name: "info",
    type: "document",
    title: "info",
    fields: [
        {
            name: "aboutUs",
            title: "about",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [{ type: "block" }],
        },
        {
            name: "contact",
            title: "Contact",
            description: "Add email address(es), etc.",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [
                {
                    type: "string",
                },
            ],
        },
    ],
};
