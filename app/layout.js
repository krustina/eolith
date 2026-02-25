import "./styles/global.css";


export const metadata = {
    title: {
        default: "Ermitage",
    },

}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}