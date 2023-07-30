import { getAbout } from "../../sanity/sanity-utils";
import styled from "styled-components";

export default async function About() {
    const about = await getAbout();

    return (
        <>
            <p>{about.aboutUs}</p>
            <p>For all inquiries, please contact {about.contact}</p>
        </>
    );
}
