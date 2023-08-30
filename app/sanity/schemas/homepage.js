export default {
    name: "homepage",
    type: "document",
    title: "Homepage",
    fields: [
        {
            name: "announcement",
            title: "Announcement Bar",
            description: "ex: Upcoming: *show name*",
            type: "string",
        },
        {
            name: "announcementVisible",
            title: "Show Announcement Bar?",
            type: "boolean",
        },
    ],
};
