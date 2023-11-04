import "../styles/global.css";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
    title: {
        default: "Eolith",
        template: "Eolith • %s",
    },
    description:
        "a roughly chipped flint found in Tertiary strata, originally thought to be an early artifact but probably of natural origin.sx",
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
