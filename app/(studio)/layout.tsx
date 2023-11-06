export const metadata = {
    title: {
        default: "Eolith",
        template: "Eolith • %s",
    },
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
