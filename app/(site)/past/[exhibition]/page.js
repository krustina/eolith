// THIS IS THE EXHIBITION PAGE

// "use client";

import { getExhibition } from "../../../sanity/sanity-utils";

import { PortableText } from "@portabletext/react";

export async function generateMetadata({ params }) {
    const slug = params.exhibition;

    const exhibition = await getExhibition(slug);

    return {
        title: exhibition.title,
    };
}

export default async function Exhibition({ params }) {
    const slug = params.exhibition;

    const exhibition = await getExhibition(slug);
    return (
        <main className="main">
            <div className="subheader">
                <div className="info">
                    <p>{exhibition.title}</p>
                    <p>{exhibition.location}</p>
                    <p>
                        {exhibition.startDate} - {exhibition.endDate}
                    </p>

                    <ul className="artists">
                        {exhibition.artists.map((artist) => (
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

            {exhibition.heroImg && <div className="hero-img-container">
                <img src={exhibition.heroImg + "?fm=webp&q=80"} />
            </div>}

            {exhibition.documentation &&
                exhibition.documentation.map((image) => (
                    <div className="img-container">
                        <img src={image.asset + "?fm=webp&q=80"} />
                        <figcaption>{image.caption}</figcaption>
                    </div>
                ))}
            {exhibition.exhibitionText && (
                <div className="text-container">
                    <div className="text">
                        <PortableText value={exhibition.exhibitionText} />
                    </div>
                </div>
            )}

            {exhibition.addAssets &&
                exhibition.addAssets.map((asset) => (
                    <img className="hero" src={asset.asset + "?fm=webp&q=80"} />
                ))}

            {exhibition.press && (
                <>
                    <p className="press">PRESS</p>
                    <br />
                    {exhibition.press.map((source) => (
                        <div className="info">
                            <p>{source.source}</p>
                            <a href={source.link} target="_blank">
                                {source.title}
                            </a>
                            <span></span>
                            <span></span>
                        </div>
                    ))}
                </>
            )}
        </main>
    );
}
