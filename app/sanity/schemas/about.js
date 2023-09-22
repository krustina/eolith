export default {
    name: "about",
    type: "document",
    title: "About",
    fields: [
        {
            name: "aboutUs",
            title: "About",
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
