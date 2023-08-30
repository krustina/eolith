import { getExhibitions } from "../../sanity/sanity-utils";

export default async function Archive() {
    const exhibitions = await getExhibitions();

    return (
        <div className="body-wrap">
            {exhibitions.map((exhibition) => (
                <>
                    <h1>{exhibition.title}</h1>
                    <p>
                        {exhibition.startDate} - {exhibition.endDate}
                    </p>
                </>
            ))}
        </div>
    );
}
