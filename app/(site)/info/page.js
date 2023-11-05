import { getInfo } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const metadata = {
    title: "Info",
};

export default async function Info() {
    const info = await getInfo();

    return (
        <div className="body-wrap">
            <div className="info">
                <div>
                    <PortableText value={info.aboutUs} />
                </div>

                <p>
                    For all inquiries, please contact
                    <a href={`mailto:${info.contact}?subject=hello`}>
                        {info.contact}
                    </a>
                </p>
            </div>
        </div>
    );
}
