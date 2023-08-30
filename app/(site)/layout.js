"use client";

import Head from "next/head";
import "../styles/global.css";
import Header from "./header";
import Footer from "./footer";

const metadata = {
    title: "eolith",
    description: "test test 123",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>{/* figure out what goes here */}</Head>
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
