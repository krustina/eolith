export default {
    name: "info",
    type: "document",
    title: "info",
    fields: [
        {
            name: "aboutUs",
            title: "about",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "contact",
            title: "Contact",
            description: "Add email address(es), etc.",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
    ],
};
