"use client";

import { getExhibitions } from "../sanity/sanity-utils";

export default async function Home() {
    const exhibition = await getExhibitions();

    return <div className="body-wrap">hello</div>;
}
