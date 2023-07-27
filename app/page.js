"use client";

import styled, { css } from "styled-components";
import { getHomePage, getSettings } from "./sanity/sanity-utils";

export default async function Home() {
    const home = await getHomePage();
    const settings = await getSettings();
    const bgImg = home.landingImg;

    return (
        <Main style={{ backgroundImage: `url(${bgImg})` }}>
            <Logo src={settings.logo} />
            <Announcement>{home.announcement}</Announcement>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    z-index: 0;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
const Logo = styled.img`
    mix-blend-mode: difference;
    padding: 10px;
`;

const Announcement = styled.div`
    padding: 10px;
    overflow-x: scroll;
`;
