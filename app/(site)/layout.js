import "../styles/global.css";
import localFont from "next/font/local";

import { getSettings } from "../sanity/sanity-utils";

import Header from "./header";
import Footer from "./footer";

const arialNarrow = localFont({ src: "../fonts/ARIALN.woff2" });

export async function generateMetadata() {
    const settings = await getSettings();

    return {
        title: {
            default: "Ermitage",
            template: "Ermitage • %s",
        },
        locale: "en_US",
        icons: {
            icon: settings.favicon,
        },
        images: [{ url: settings.metaImg }],
        description: settings.meta,
        keywords: [
            "Eolith",
            "Montreal",
            "Canada",
            "Contemporary Art",
            "Emerging Artists",
            "Emerging Canadian Artists",
            "Emerging Montreal Artists",
            "Art Collectors Montreal",
            "Contemporary Art Investment",
            "Online Art Gallery Montreal",
            "Offsite Contemporary Art Exhibition",
            "Emerging Curators Montreal",
            "Emerging Curators",
            "Curatorial Project Canada",
            "Curatorial Project Montreal",
            "Sculpture Montreal",
            "Painting Montreal",
            "Daniel Fernandes Montreal",
            "Nick Castonguay Montreal",
            "Maxime Theroux Montreal",
        ],
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={arialNarrow.className}>
                <div className="container">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
