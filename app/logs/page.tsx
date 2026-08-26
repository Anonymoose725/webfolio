import Link from 'next/link';
import { DimensionDivider } from '@/app/ui/dimension-divider';
import { getAllPosts } from '@/lib/posts';

// logs INDEX page, for displaying all posts
export default function LogsPage() {
    const posts = getAllPosts();

    return (
        <div className="mx-auto max-w-2xl px-8 py-16">
            <DimensionDivider label="FIG. 04 - LOGS" />
            <h1 className="mt-6 mb-10 font-heading text-5xl font-bold tracking-wide">
                LOGS
            </h1>

            {/* conditional formatting */}
            {/* same bordered row setup as in projects page */}
            {posts.length === 0 ? (
                <p className="text-blueprint-muted">No entries found</p>
            ) : (
                <div className="space-y-4">
                    {posts.map((post, i) => (
                        <Link
                            key={post.slug}
                            href={`/logs/${post.slug}`}
                            className="block border border-blueprint-muted p-4 transition-colors hover:border-blueprint-accent"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-xs tracking-widest text-blueprint-muted">
                                    0{i + 1}
                                </span>
                                <h3 className="font-heading font-bold tracking-wide">
                                    {post.title.toUpperCase()}
                                </h3>
                                <span className="ml-auto text-xs tracking-widest text-blueprint-muted">
                                    {post.date}
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-blueprint-muted">{post.summary}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}