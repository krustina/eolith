"use client";

import { getHomePage, getSettings } from "../sanity/sanity-utils";

export default async function Header() {
    const home = await getHomePage();
    const settings = await getSettings();
    return (
        <footer>
            <img src={settings.logo} />

            {home.announcementVisible && <div>{home.announcement}</div>}
        </footer>
    );
}
