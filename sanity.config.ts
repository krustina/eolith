import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { deskStructure } from "./app/sanity/deskStructure";
import schemas from "./app/sanity/schemas";

const config = defineConfig({
    projectId: "26ygkesq",
    dataset: "production",
    title: "Eolith",
    apiVersion: "2021-08-31",
    basePath: "/admin",
    plugins: [
        colorInput(),

        deskTool({
            structure: deskStructure,
        }),
        visionTool(),
    ],
    schema: { types: schemas },
});

export default config;
