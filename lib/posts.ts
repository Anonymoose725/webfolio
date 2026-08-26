import fs from 'fs';                // node promise-based filesystem (async, await)
import path from 'path';            // transforming file and directory path
import matter from 'gray-matter';   // fontmatter parser

const postsDir = path.join(process.cwd(), 'content/logs'); // cwd = current working directory

export type PostMeta = {
    slug: string,
    title: string,
    date: string,
    summary: string
};

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx')); // read contents of directory, only read .mdx

    const posts = files.map((file) => {
        const slug = file.replace(/\.mdx$/, '');                        // remove file extension to generate slug
        const src = fs.readFileSync(path.join(postsDir, file), 'utf8'); // read files and encode in UTF-8
        const { data } = matter(src);                                   // extract and parse fontmatter object
        return {
            slug,
            title: data.title as string, // type strict
            // date: data.date as string,
            date: new Date(data.date).toLocaleDateString('en-US', { // needed to format properly for gray-matter
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            summary: data.summary as string
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1)); // return posts as array of slugs and metadata
}

export function getPostSource(slug: string): string { // retrieve source from slug
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const rawContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(rawContents); // strip fontmatter after parsing
    return content;
}


// getAllPosts only reads fontmatter, does not render markdown pages
// getPostSource retrieves the source, so only that slug is rendered on demand