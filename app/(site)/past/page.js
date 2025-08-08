// THIS IS THE ARCHIVE PAGE

import { getExhibitions } from "../../sanity/sanity-utils";
import Link from "next/link";

export const metadata = {
    title: "Past",
};

export default async function Archive() {
    const exhibitions = await getExhibitions();

    // Sort exhibitions by startDate in descending order (most recent first)
    const sortedExhibitions = exhibitions.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB - dateA; // Descending order
    });

    return (
        <div className="body-wrap">
            {sortedExhibitions.length > 0 ? (
                sortedExhibitions.map((exhibition) => (
                    <Link
                        href={`/past/${exhibition.slug.current}`}
                        key={exhibition._id}
                        className="info"
                    >
                        <p>{exhibition.title}</p>
                        <p>
                            {exhibition.startDate} {exhibition.endDate && `- ${exhibition.endDate}`}
                        </p>
                    </Link>
                ))
            ) : (
                <p className="info">No exhibitions...</p>
            )}
        </div>
    );
}
