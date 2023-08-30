"use client";

import { getLatestExhibition } from "../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
    const latest = await getLatestExhibition();

    return (
        <main className="main">
            <div className="subheader">
                <div className="info">
                    <p>{latest.title}</p>
                    <p>{latest.location}</p>
                    <p>
                        {latest.startDate} - {latest.endDate}
                    </p>

                    <ul className="artists">
                        {latest.artists.map((artist) => (
                            <li>
                                {artist.link ? (
                                    <a href={artist.link} target="_blank">
                                        {artist.name}
                                    </a>
                                ) : (
                                    <>{artist.name}</>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {latest.documentation &&
                latest.documentation.map((image) => (
                    <div className="img-container">
                        <img src={image.asset} />
                        <figcaption>{image.caption}</figcaption>
                    </div>
                ))}
            {latest.exhibitionText && (
                <div className="text">
                    <PortableText value={latest.exhibitionText} />
                </div>
            )}

            {latest.heroImg && <img className="hero" src={latest.heroImg} />}

            {latest.press && (
                <>
                    <p>Press</p>
                    <br />
                    {latest.press.map((source) => (
                        <div className="info">
                            <p>{source.source}</p>
                            <a href={source.link} target="_blank">
                                {source.title}
                            </a>
                        </div>
                    ))}
                </>
            )}
        </main>
    );
}
