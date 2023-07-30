"use client";

import styled from "styled-components";
import { getExhibitions } from "../sanity/sanity-utils";

export default async function Home() {
    const exhibitions = await getExhibitions();

    return (
        <Main>
            {exhibitions.current ? (
                <></>
            ) : (
                <>New Programming Fall 2023/2024 TBA</>
            )}
        </Main>
    );
}

const Main = styled.main`
    flex: 1;
    overflow: auto;

    & div {
        height: 100%;
        overflow: auto;
    }
`;
