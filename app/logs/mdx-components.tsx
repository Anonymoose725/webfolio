// exports for mdx logs
import { DrawingPanel } from "../ui/drawing-panel";
import { ProjectEntry } from "../ui/project-entry";

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
    // hyperlinks
    a: (props: any) => (
        <a target="_blank" className="text-blueprint-accent hover:underline" {...props} />
    ),
    // preformated text
    pre: (props: any) => (
        <pre className="mb-4 overflow-x-auto rounded border border-blueprint-muted p-4 text-sm"> {...props} </pre>
    ),
    // triple-backtick code blocks
    code: (props: any) => (
        <code className="text-md text-blueprint-accent-red" {...props} />
    ),
    DrawingPanel,
    ProjectEntry
};

