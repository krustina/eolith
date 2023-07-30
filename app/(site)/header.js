"use client";

import Link from "next/link";
import styled from "styled-components";
import { getExhibitions } from "../sanity/sanity-utils";

export default async function Header() {
    const exhibitions = await getExhibitions();

    return (
        <NavBar>
            <Link href="/">
                {exhibitions.current ? <>Current</> : <>Upcoming</>}
            </Link>
            <Link href="/archive">Archive</Link>
            <Link href="/about">About</Link>
            <Link href="/press">Press</Link>
            <a href="https://www.instagram.com/e.olith/" target="_blank">
                @eolith
            </a>
        </NavBar>
    );
}
const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    height: auto;
    position: fixed;
    top: 0;
    max-width: inherit;
    width: inherit;
`;
