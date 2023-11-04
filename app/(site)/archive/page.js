// THIS IS THE ARCHIVE PAGE

import { getExhibitions } from "../../sanity/sanity-utils";
import Link from "next/link";

export const metadata = {
    title: "Archive",
};

export default async function Archive() {
    const exhibitions = await getExhibitions();

    return (
        <div className="body-wrap">
            {exhibitions.length > 1 ? (
                exhibitions
                    .slice(0)
                    .reverse()
                    .map((exhibition) => (
                        <Link
                            href={`/archive/${exhibition.slug.current}`}
                            key={exhibition._id}
                            className="info"
                        >
                            <p>{exhibition.title}</p>
                            <p>
                                {exhibition.startDate} - {exhibition.endDate}
                            </p>
                        </Link>
                    ))
            ) : (
                <p>The archive is empty...</p>
            )}
        </div>
    );
}
