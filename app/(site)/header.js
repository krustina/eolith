"use client";

import Link from "next/link";
import { getExhibitions } from "../sanity/sanity-utils";

export default async function Header() {
    const exhibitions = await getExhibitions();

    return (
        <header>
            <Link href="/">Recent</Link>
            <Link href="/archive">Archive</Link>
            <Link href="/about">About</Link>
            <a href="https://www.instagram.com/e.olith/" target="_blank">
                @eolith
            </a>
        </header>
    );
}
