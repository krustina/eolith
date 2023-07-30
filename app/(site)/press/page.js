import { getPress } from "../../sanity/sanity-utils";
import styled from "styled-components";

export default async function Press() {
    const press = await getPress();

    return (
        <>
            {press.map((pressClipping) => (
                <div>
                    <a href={pressClipping.link}>{pressClipping.title}</a>
                    <p>{pressClipping.source}</p>
                    <p>{pressClipping.pressDate}</p>
                </div>
            ))}
        </>
    );
}
