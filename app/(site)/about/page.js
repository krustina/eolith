import { getAbout } from "../../sanity/sanity-utils";

export default async function About() {
    const about = await getAbout();

    return (
        <div className="body-wrap">
            <p>{about.aboutUs}</p>
            <p>For all inquiries, please contact {about.contact}</p>
        </div>
    );
}
