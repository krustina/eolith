"use client";

import { getExhibition } from "../../../sanity/sanity-utils";

export default async function Exhibition({ params }) {
    const slug = params.exhibition;

    const exhibition = await getExhibition(slug);

    return (
        <main className="main">
            <div className="subheader">
                <div className="exhibition-info">
                    <p>{exhibition.title}</p>
                    <p>{exhibition.location}</p>
                    <p>
                        {exhibition.startDate} - {exhibition.endDate}
                    </p>

                    {/* <ul className="artists">
                        {exhibition.artists.map((artist) => (
                            <li>{artist}</li>
                        ))}
                    </ul> */}
                </div>
            </div>
            {exhibition.documentation.map((image) => (
                <div className="img-container">
                    <img src={image.asset} />
                    <figcaption>{image.caption}</figcaption>
                </div>
            ))}
            {exhibition.exhibitionText.map((paragraph, key) => {
                <p key={key}>
                    {paragraph.children.map((child) => (
                        <>{child.text}</>
                    ))}
                </p>;
            })}
            {/* ADD PRESS HERE */}
        </main>
    );
}
