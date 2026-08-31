// exports for mdx logs
import { DrawingPanel } from "../ui/drawing-panel";
import { ProjectEntry } from "../ui/project-entry";
import { DemoFrame } from "../ui/demoFrame";
import Link from "next/link";

export const mdxComponents = {
    // custom component map for export! mdx override
    // without this, mdx wouldnt match the site's design, in an unstyled browser default for markdowns
    h2: (props: any) => (
        <h2 className="mt-10 mb-4 font-heading text-2xl font-bold tracking-wide" {...props} /> // note ... forwards all props over
    ),
    // paragraph
    p: (props: any) => (
        <p className="mb-4 text-blueprint-line" {...props} />
    ),
    // for ordered and unordered lists in mdx as html components
    ol: (props: any) => (
        <ol className="mb-4 list-decimal space-y-1 pl-6 text-blueprint-line" {...props} />
    ),
    ul: (props: any) => (
        <ul className="mb-4 list-disc space-y-1 pl-6 text-blueprint-line" {...props} />
    ),
    // hyperlinks
    // conditional : if app routing internally, refer to respective page.tsx
    // otherwise, refer to external url
    // this way, all links regardless of source appear in mdx as [text here](link here).
    a: ({ href, children, ...props }: any) => {
        const isInternal = href?.startsWith('/');
        if (isInternal) {
            return (
                <Link href={href} className="text-blueprint-accent hover:underline">
                    {children}
                </Link>
            );
        }
        return (
            <a href={href} target="_blank" className="text-blueprint-accent hover:underline" {...props}>
                {children}
            </a>
        );
    },
    // preformated text
    pre: (props: any) => (
        <pre className="mb-4 overflow-x-auto rounded border border-blueprint-muted p-4 text-sm" {...props} />
    ),
    // triple-backtick code blocks
    code: (props: any) => (
        <code className="text-md text-blueprint-accent-red" {...props} />
    ),
    DrawingPanel,
    ProjectEntry,
    DemoFrame
};

