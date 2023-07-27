import { getAbout } from "../sanity/sanity-utils";

export default async function About() {
    const about = await getAbout();

    return <>about section</>;
}
