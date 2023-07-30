"use client";

import Head from "next/head";
import "../styles/global.css";
import styled from "styled-components";
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
                <Container>
                    <Header />
                    {children}
                    <Footer />
                </Container>
            </body>
        </html>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;
