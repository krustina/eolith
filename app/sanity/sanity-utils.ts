import { createClient, groq } from "next-sanity";

export async function getExhibitions() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
        perspective: "published",
    });

    return client.fetch(
        groq`
        *[
        _type == "exhibitions" &&
        hpDisplay != true &&
        !(slug.current in ["inlandsis", "eolith", "the-new-motive-power", "inlandsis-at-l'imagier"])
      ] | order(startDate desc) {
        ...
      }`
    );
}
export async function getEolithExhibitions () {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
        perspective: "published",
    });

    return client.fetch(
        groq`
        *[_type == "exhibitions" && slug.current in ["inlandsis", "eolith", "the-new-motive-power", "inlandsis-at-l'imagier"]] {
  ...
}`
    );
}

export async function getExhibition(slug) {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
        perspective: "published",
    });

    return client.fetch(
        groq`
        *[_type == "exhibitions" && slug.current == $slug][0] {
            ...,
            "heroImg": heroImg.asset->url,
            "documentation": documentation[]{
                ...,
                "asset": asset->url
            },
            "addAssets": addAssets[]{
                ...,
                "asset": asset->url
            }           
        }`,
        { slug }
    );
}

export async function getLatestExhibition() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
        perspective: "published",
    });
    return client.fetch(
        groq`
    *[_type == "exhibitions"][hpDisplay == true][0] {
            ...,
            "heroImg": heroImg.asset->url,
            "documentation": documentation[]{
                ...,
                "asset": asset->url
            },
            "addAssets": addAssets[]{
                ...,
                "asset": asset->url
            }    
        }
    `
    );
}

export async function getInfo() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == "info" ] {
            ...
        }[0]`
    );
}

export async function getSettings() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
         *[_type == "global" ] {
            _id,
            meta,
            "metaImg": metaImg.asset->url,
            "logo": logo.asset->url,
            "favicon": favicon.asset->url,
        }[0]`
    );
}

// export async function getHomePage() {
//     const client = createClient({
//         projectId: "26ygkesq",
//         dataset: "production",
//         apiVersion: "2021-10-21",
//     });

//     return client.fetch(
//         groq`
//         *[_type == "homepage" ] {
//             _id,
//             announcement,
//             announcementVisible,
//         }[0]`
//     );
// }
