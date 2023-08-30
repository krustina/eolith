import { createClient, groq } from "next-sanity";

export async function getExhibitions() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == "exhibitions" ] {
            ...
        }`
    );
}
export async function getExhibition(slug) {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == "exhibitions" && slug.current == $slug][0] {
            ...,
            "documentation": documentation[]{
                ...,
                "asset": asset->url
            }         
        }`,
        { slug }
    );
}

export async function getHomePage() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == "homepage" ] {
            _id,
            announcement,
            announcementVisible,
            "landingImg": landingImg.asset->url,
        }[0]`
    );
}

export async function getAbout() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == "about" ] {
            ...
        }[0]`
    );
}

export async function getPress() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == "press" ] {
            ...
        }`
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
            backgroundColour,
            primaryTextColour,
            secondaryTextColour,
            "metaImg": metaImg.asset->url,
            "logo": logo.asset->url
        }[0]`
    );
}
