import { getExhibitions } from "./helpers/sanity-server";

export default async function Home() {
    const exhibitions = await getExhibitions();
    console.log(exhibitions);
    return (
        <main>
            {exhibitions.map((exhibition) => {
                return <h2>{exhibition.title}</h2>;
            })}
        </main>
    );
}
