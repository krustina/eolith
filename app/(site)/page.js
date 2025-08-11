// THIS IS THE HOMEPAGE / CURRENT EXHIBITION

"use client";

import { getLatestExhibition } from "../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
    const latest = await getLatestExhibition();

    return (
        <main className="main">
            {latest ? (
                <>
                    <div className="subheader">
                        <div className="info">
                            {latest.title && <p>{latest.title}</p>}
                            {latest.location && <p>{latest.location}</p>}
                            {latest.startDate && latest.endDate && (
                                <p>
                                    {latest.startDate} - {latest.endDate}
                                </p>
                            )}

                            {latest.artists && (
                                <ul className="artists">
                                    {latest.artists.map((artist) => (
                                        <li>
                                            {artist.link ? (
                                                <a
                                                    href={artist.link}
                                                    target="_blank"
                                                >
                                                    {artist.name}
                                                </a>
                                            ) : (
                                                <>{artist.name}</>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {latest.heroImg && <div className="hero-img-container">
                        <img src={latest.heroImg + "?fm=webp&q=100"} />
                    </div>}

                    {latest.documentation &&
                        latest.documentation.map((image) => (
                            <div className="img-container">
                                <img src={image.asset + "?fm=webp&q=100"} />
                                <figcaption>{image.caption}</figcaption>
                            </div>
                        ))}
                    {latest.exhibitionText && (
                        <div className="text-container">
                            <div className="text">
                                <PortableText value={latest.exhibitionText} />
                            </div>
                        </div>
                    )}
                    {latest.addAssets &&
                        latest.addAssets.map((asset) => (
                            <img
                                className="hero"
                                src={asset.asset + "?fm=webp&q=100"}
                            />
                        ))}
                    {latest.press && (
                        <>
                            <p className="press">Press</p>
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
                </>
            ) : (
                <div>
                    <p className="margin">Coming Soon...</p>
                </div>
            )}
        </main>
    );
}
