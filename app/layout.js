import Head from "next/head";

export const metadata = {
    title: "eolith",
    description: "test test 123",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
