import { Suspense } from 'react'; // loading skeleton component to display until children are rendered
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { getPostSource, getPostMeta } from '@/lib/posts';
import { mdxComponents } from '../mdx-components';
import { DimensionDivider } from '@/app/ui/dimension-divider';


export function MDXError({ error }: { error: Error }) {
    return (
        <p className="text-blueprint-accent-red">
            Post failed to render, error: {error.message}
        </p>
    )
}

// each mdx is rendered on the page with this component
export default async function LogPost({ params }: { params: Promise<{ slug: string }> }) { // slug is a promise, like Maybe in haskell
    const { slug } = await params; // must await a promise
    const meta = getPostMeta(slug);
    const src = getPostSource(slug);
    // console.log('MDX source:', src);

    return (
        <article className="mx-auto max-w-prose px-8 py-16 text-blueprint-line">

            {/* header to render when in each log post */}
            <DimensionDivider label="Log Entry" />
            <h1 className="mt-6 mb-2 font-heading text-4xl font-bold tracking-wide">
                {meta.title}
            </h1>
            <p className="mb-10 text-xs tracking-widest text-blueprint-muted">
                {meta.date}
            </p>

            <Suspense fallback={<p className="text-blueprint-muted">Loading...</p>}>
                <MDXRemote
                    source={src}
                    components={mdxComponents}
                    onError={MDXError}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]] // necessasry javascript options for MDXremote
                            // double array -> outer array is list of plugs, inner is rehype options
                        }
                    }}
                />
            </Suspense>
        </article>
    )
}

