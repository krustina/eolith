"use client";

import { getSettings } from "../sanity/sanity-utils";

export default async function Header() {
    const settings = await getSettings();
    return (
        <footer>
            <img src={settings.logo} />
        </footer>
    );
}
