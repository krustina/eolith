"use client";

import styled from "styled-components";
import { getHomePage, getSettings } from "../sanity/sanity-utils";

export default async function Header() {
    const home = await getHomePage();
    const settings = await getSettings();
    return (
        <FooterContainer>
            <Logo src={settings.logo} />

            {home.announcementVisible && (
                <Announcement>{home.announcement}</Announcement>
            )}
        </FooterContainer>
    );
}
const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    max-width: inherit;
    width: inherit;
    mix-blend-mode: difference;
`;
const Logo = styled.img`
    width: 12rem;
`;

const Announcement = styled.div``;
