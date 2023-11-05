import "../styles/global.css";
import { getSettings } from "../sanity/sanity-utils";

import Header from "./header";
import Footer from "./footer";

export async function generateMetadata() {
    const settings = await getSettings();

    return {
        title: {
            default: "Eolith",
            template: "Eolith • %s",
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
            <body>
                <div className="container">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
