// THIS IS THE ARCHIVE PAGE

import { getEolithExhibitions } from "../../sanity/sanity-utils";
import Link from "next/link";

export const metadata = {
    title: "Archive",
};

export default async function Archive() {
    const exhibitions = await getEolithExhibitions();

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
