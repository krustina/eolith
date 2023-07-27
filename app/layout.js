import Head from "next/head";
import Nav from "./navbar";
import GlobalStyles from "./styles/global.css";

export const metadata = {
    title: "eolith",
    description: "test test 123",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
