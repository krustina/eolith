import { getAbout } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const metadata = {
    title: "Info",
};

export default async function About() {
    const about = await getAbout();

    return (
        <div className="body-wrap">
            <div className="info">
                <div>
                    <PortableText value={about.aboutUs} />
                </div>

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
