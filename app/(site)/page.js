"use client";

import { getLatestExhibition } from "../sanity/sanity-utils";

export default async function Home() {
    const latest = await getLatestExhibition();

    return (
        <main className="main">
            <div className="subheader">
                <div className="exhibition-info">
                    <p>{latest.title}</p>
                    <p>{latest.location}</p>
                    <p>
                        {latest.startDate} - {latest.endDate}
                    </p>

                    <ul className="artists">
                        {latest.artists.map((artist) => (
                            <li>{artist}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {latest.documentation.map((image) => (
                <div className="img-container">
                    <img src={image.asset} />
                    <figcaption>{image.caption}</figcaption>
                </div>
            ))}
            {latest.exhibitionText.map((paragraph, key) => {
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
