import { getExhibition } from "../../../sanity/sanity-utils";
import styled from "styled-components";

export default async function Exhibition({ params }) {
    const slug = params.exhibition;
    const exhibition = await getExhibition(slug);

    return (
        <>
            <div>
                <div>
                    {exhibition.title}
                    {exhibition.startDate}
                    {exhibition.endDate && <>{exhibition.endDate}</>}
                    {exhibition.location}
                </div>
                <ul>
                    {exhibition.artists.map((artist) => (
                        <li>{artist}</li>
                    ))}
                </ul>
            </div>
            {exhibition.documentation.map((image) => (
                <>
                    <img src={image} />
                    <figcaption>{image.caption}</figcaption>
                </>
            ))}
            {exhibition.exhibitionText.map((paragraph, key) => {
                <p key={key}>
                    {paragraph.children.map((child) => child.text).join("")}
                </p>;
            })}
        </>
    );
}
//TODO: make page per slug
