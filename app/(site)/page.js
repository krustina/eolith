"use client";

import { getExhibition } from "../sanity/sanity-utils";

export default async function Home() {
    const exhibition = await getExhibition();

    return (
        <>
            {exhibition.current ? (
                <Exhibition />
            ) : (
                <>New Programming Fall 2023/2024 TBA</>
            )}
        </>
    );
}
