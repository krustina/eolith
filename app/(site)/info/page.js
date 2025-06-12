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
                    <br />
                    <p>
                        <i>By appointment only</i>
                    </p>
                </div>

                <div></div>
                <a href="mailto:ddanfernan@gmail.com,nfcastonguay@gmail.com,theroux.maxime@gmail.com?subject=Ermitage%20Inquiry" target="_blank">EMAIL US</a>


                <a href="https://www.instagram.com/ermitage_308/" target="_blank">@ermitage_308</a>



            </div>
        </div>
    );
}
