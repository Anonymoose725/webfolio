export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return <h1>Post: {params.slug}</h1>;
}