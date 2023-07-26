import { getExhibitions } from "../sanity/sanity-utils";

export default async function Archive() {
    const exhibitions = await getExhibitions();

    return (
        <>
            here are the exhibitions:
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
