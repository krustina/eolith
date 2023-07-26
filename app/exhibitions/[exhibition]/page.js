export default async function Exhibition({ params }) {
    const slug = params.exhibition;
    const exhibition = await getExhibition(slug);

    return <div>exhibition page</div>;
}
//TODO: make page per slug
