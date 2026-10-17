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
    // tables with GFM support (style made from |, - syntax)
    // the wrapper div lets wide tables scroll sideways on devices where the whole table doesnt fit
    table: (props: any) => (
        <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm" {...props} />
        </div>
    ),
    thead: (props: any) => ( // full table
        <thead className="border-b-2 border-blueprint-accent-dark" {...props} />
    ),
    tr: (props: any) => ( // table row
        <tr className="border-b border-blueprint-muted" {...props} />
    ),
    th: (props: any) => ( // table header
        <th className="px-4 py-2 text-left font-heading font-bold tracking-wide text-blueprint-line" {...props} />
    ),
    td: (props: any) => ( // table data
        // tabular-nums keeps digits equal width so number columns line up nicely
        <td className="px-4 py-2 text-blueprint-line tabular-nums" {...props} />
    ),

    DrawingPanel,
    ProjectEntry,
    DemoFrame
};

