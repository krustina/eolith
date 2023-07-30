import { getExhibitions } from "../../sanity/sanity-utils";
import styled from "styled-components";

export default async function Archive() {
    const exhibitions = await getExhibitions();

    return (
        <>
            {exhibitions.map((exhibition) => (
                <div>
                    <h1>{exhibition.title}</h1>
                    <p>
                        {exhibition.startDate} - {exhibition.endDate}
                    </p>
                </div>
            ))}
        </>
    );
}
