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
`;
const Logo = styled.img`
    width: 25%;
    filter: invert(1);
`;

const Announcement = styled.div``;
