"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export default function Nav() {
    return (
        <NavContainer>
            <Link href="/">*</Link>
            <Link href="/archive">Archive</Link>
            <Link href="/about">About</Link>
            <a href="https://www.instagram.com/e.olith/" target="_blank">
                @eolith
            </a>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 1;

    & Link {
        padding: 10px;
    }
    & a {
        padding: 10px;
    }
`;
