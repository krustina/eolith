export default {
    name: "info",
    type: "document",
    title: "info",
    fields: [
        {
            name: "aboutUs",
            title: "About",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [{ type: "block" }],
        },
        {
            name: "email",
            title: "Email address",
            type: "string",
            validation: (Rule) => Rule.required(),
            of: [{ type: "block" }],
        },
    ],
};
