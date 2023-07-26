import { createClient } from "next-sanity";

const client = createClient({
    projectId: "26ygkesq",
    dataset: "production",
    apiVersion: "2021-08-31",
});

export default client;

// export function getHomePage() {
//     return createClient(clientConfig).fetch(groq`
//         *[_type == 'exhibitions' ]{
//             _id,
//             landingImg,
//         }`);
// }
// export function getExhibitions() {
//     return createClient(clientConfig).fetch(groq`
//         *[_type == 'exhibitions' ]{
//             _id,
//             title,
//             slug,
//             artists,
//             documentation,
//             startDate,
//             current,
//             location,
//         }`);
// }
// export function getSettings() {
//     return createClient(clientConfig).fetch(groq`
//         *[_type == 'global' ]{
//             _id,
//             logo,
//             metaImg,
//             meta,
//         }`);
// }
