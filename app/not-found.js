import { getInfo } from "./sanity/sanity-utils";


export default async function NotFound() {
    const info = await getInfo();

    return (
        <div style={{
            backgroundImage: `url(${info.errorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "Arial Narrow, Arial, sans-serif",
            fontSize: "13px",
            cursor: 'crosshair',
        }}>
            <h1>404</h1>
            <br />
            <p>The page you are looking for does not exist!</p>
            <br />
            <a href="/">← BACK</a>
        </div>
    )
}