"use client";

import Link from "next/link";
import { getExhibitions } from "../sanity/sanity-utils";

export default async function Header() {
    const exhibitions = await getExhibitions();

    return (
        <header>
            <Link href="/">LATEST</Link>
            <Link href="/archive">ARCHIVE</Link>
            <Link href="/about">INFO</Link>
            <a href="https://www.instagram.com/e.olith/" target="_blank">
                @EOLITH
            </a>
        </header>
    );
}
