"use client";

import { getExhibition } from "../../../sanity/sanity-utils";

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

            {exhibition.heroImg && (
                <img className="hero" src={exhibition.heroImg} />
            )}

            {exhibition.documentation &&
                exhibition.documentation.map((image) => (
                    <div className="img-container">
                        <img src={image.asset} />
                        <figcaption>{image.caption}</figcaption>
                    </div>
                ))}

            {exhibition.exhibitionText &&
                exhibition.exhibitionText.map((paragraph, key) => {
                    <p key={key}>
                        {paragraph.children.map((child) => (
                            <>{child.text}</>
                        ))}
                    </p>;
                })}
            {exhibition.press && (
                <>
                    <p>Press</p>
                    {exhibition.press.map((source) => (
                        <div className="info">
                            <a href={source.link} target="_blank">
                                {source.title}
                            </a>
                            <p>{source.source}</p>
                            <p>{source.pressDate}</p>
                        </div>
                    ))}
                </>
            )}
        </main>
    );
}
