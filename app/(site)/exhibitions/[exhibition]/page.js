"use client";
import styled from "styled-components";

import { getExhibition } from "../../../sanity/sanity-utils";

export default async function Exhibition({ params }) {
    const slug = params.exhibition;

    const exhibition = await getExhibition(slug);
    return (
        <Main>
            <SubHeader>
                <ExhibitionInfo>
                    <p>{exhibition.title}</p>
                    <p>{exhibition.location}</p>
                    <p>
                        {exhibition.startDate} - {exhibition.endDate}
                    </p>

                    <Artists>
                        {exhibition.artists.map((artist) => (
                            <li>{artist}</li>
                        ))}
                    </Artists>
                </ExhibitionInfo>
            </SubHeader>
            {exhibition.documentation.map((image) => (
                <ImgContainer>
                    <img src={image.asset} />
                    <figcaption>{image.caption}</figcaption>
                </ImgContainer>
            ))}
            {exhibition.exhibitionText.map((paragraph, key) => {
                <p key={key}>
                    {paragraph.children.map((child) => (
                        <>{child.text}</>
                    ))}
                </p>;
            })}
            {/* ADD PRESS HERE */}
        </Main>
    );
}
const Main = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SubHeader = styled.div`
    margin-top: 4em;
    width: 100%;
    position: fixed;
    color: white;
    mix-blend-mode: difference;
`;

const ExhibitionInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: inherit;
`;

const Artists = styled.ul`
    padding: 0;

    & li {
        list-style: none;
    }
`;
const ImgContainer = styled.div`
    margin-bottom: 2em;
    & img {
        width: 100%;
    }
    &:nth-child(odd) {
        width: 50%;
        align-self: flex-end;
    }
    &:nth-child(even) {
        width: 65%;
    }
    & figcaption {
        font-size: 12px;
        margin: 0px;
    }
`;
