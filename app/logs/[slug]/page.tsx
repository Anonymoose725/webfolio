import { Suspense } from 'react'; // loading skeleton component to display until children are rendered
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { getPostSource } from '@/lib/posts';
import { mdxComponents } from '../mdx-components';

// each mdx is rendered on the page with this component

export default async function LogPost({ params }: { params: Promise<{ slug: string }> }) { // slug is a promise, like Maybe in haskell
    const { slug } = await params; // must await a promise
    const src = getPostSource(slug);
    console.log('MDX source:', src);

    return (
        <article className="mx-auto max-w-prose px-8 py-16 text-blueprint-line">
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

export function MDXError({ error }: { error: Error }) {
    return (
        <p className="text-blueprint-accent-red">
            Post failed to render, error: {error.message}
        </p>
    )
}