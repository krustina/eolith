export const metadata = {
    title: {
        default: "Ermitage",
        template: "Ermitage • %s",
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
