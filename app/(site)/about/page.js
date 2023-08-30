import { getAbout } from "../../sanity/sanity-utils";

export default async function About() {
    const about = await getAbout();

    return (
        <div className="body-wrap">
            <div className="info">
                <p>{about.aboutUs}</p>
                <p>
                    For all inquiries, please contact{" "}
                    <a href={`mailto:${about.contact}?subject=hello`}>
                        {about.contact}
                    </a>
                </p>
            </div>
        </div>
    );
}
