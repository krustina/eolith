"use client";

import Link from "next/link";

export default function Header() {
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
