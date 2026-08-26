import { Suspense } from 'react'; // loading skeleton component to display until children are rendered
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { getPostSource } from '@/lib/posts';
import { mdxComponents } from './mdx-components';

export default async function LogPost({ params }: { params: { slug: string } }) {
    const src = getPostSource(params.slug);

    return (
        <article className="mx-auto max-w-prose px-8 py-16 text-blueprint-line">
            <Suspense fallback={<p className="text-blueprint-muted">Loading...</p>}>
                <MDXRemote
                    source={{ src }}
                    components={mdxComponents}
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