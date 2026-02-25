import { getSettings } from "./sanity/sanity-utils";


export default async function NotFound() {
    const settings = await getSettings();
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${settings.errorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "Arial Narrow, Arial, sans-serif",
            cursor: 'crosshair',
            overflow: "hidden",
            color: "white"

        }}>
            <h1 style={{ fontSize: "24px" }}>404<br />Page Not Found</h1>

        </div>
    )
}