import { createClient, groq } from "next-sanity";

export async function getExhibitions() {
    const client = createClient({
        projectId: "26ygkesq",
        dataset: "production",
        apiVersion: "2021-10-21",
    });

    return client.fetch(
        groq`
        *[_type == 'exhibitions']{
                _id,
                title, 
                "slug": slug.current, 
                current, 
                artists, 
                startDate, 
                endDate }`
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
        *[_type == 'homepage']{
                _id,
                announcement,
                announcementVisible,
                "images": landingImg[].asset->url,}`
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
        *[_type == 'about']{
                _id,
                aboutUs,
                contact,}`
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
        *[_type == 'press']{
                _id,
                title,
                pressDate,
                link}`
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
         *[_type == 'global' ]{
            _id,
            logo,
            metaImg,
            meta,
        }`
    );
}
