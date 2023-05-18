import { createClient, groq } from "next-sanity";

const clientConfig = {
    projectId: "26ygkesq",
    dataset: "production",
    useCnd: false,
};
export function getHomePage() {
    return createClient(clientConfig).fetch(groq`
        *[_type == 'exhibitions' ]{
            _id,
            landingImg,
        }`);
}
export function getExhibitions() {
    return createClient(clientConfig).fetch(groq`
        *[_type == 'exhibitions' ]{
            _id,
            title,
            artists,
            documentation,
            startDate,
            current,
            location,
        }`);
}
export function getSettings() {
    return createClient(clientConfig).fetch(groq`
        *[_type == 'global' ]{
            _id,
            logo,
            metaImg,
            meta,
        }`);
}
