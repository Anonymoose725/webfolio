// exports for mdx logs

export const mdxComponents = {
    // custom component map for export!
    // without this, mdx wouldnt match the site's design, in an unstyled browser default for markdowns
    h2: (props: any) => (
        <h2 className="mt-10 mb-4 font-heading text-2xl fond-bold tracking-wide" {...props} /> // note ... forwards all props over
    ),
    p: (props: any) => (
        <p className="mb-4 text-blueprint-line" {...props} />
    ),
    a: (props: any) => (
        <a className="text-blueprint-accent hover:underline" />
    ),
    codeBlock: (props: any) => (
        <code className="text-sm text-blueprint-accent-red" {...props} />
    )
};

