import Head from "next/head";
import styled, { css } from "styled-components";
import { getHomePage } from "./sanity/sanity-utils";

import Link from "next/link";

export default async function Home() {
    const home = await getHomePage();
    console.log("home", home.announcement);

    return (
        <main>
            <p>{home[0].announcement}</p>
        </main>
    );
}
