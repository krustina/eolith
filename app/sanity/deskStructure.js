import { ControlsIcon, EditIcon } from "@sanity/icons";

export const deskStructure = (S) =>
    S.list()
        .title("Content")
        .items([
            // S.listItem()
            //   .title('Homepage')
            //   .icon(HomeIcon)
            //   .child(S.editor().schemaType('homepage').documentId('homepage')),
            S.listItem()
                .title("About & Contact")
                .icon(EditIcon)
                .child(S.editor().schemaType("info").documentId("info")),

            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !["global", "homepage", "info"].includes(listItem.getId())
            ),
            // Add a visual divider (optional)
            S.divider(),
            S.listItem()
                .title("Settings")
                .icon(ControlsIcon)
                .child(S.editor().schemaType("global").documentId("global")),
        ]);
