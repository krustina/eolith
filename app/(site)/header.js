"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/">LATEST</Link>
            <Link href="/past">PAST</Link>
            <Link href="/info">INFO</Link>
            <Link href="/archive">ARCHIVE</Link>
        </header>
    );
}
