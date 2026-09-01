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

// date formatter 
function formatDate(rawDate: string): string {
    return new Date(rawDate).toLocaleDateString('en-US', {
        year: "numeric",
        month: "short",
        day: "numeric"
    })
}

export function getPostMeta(slug: string) {
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(raw);
    return {
        title: data.title as string,
        date: formatDate(data.date)
    }
}

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx')); // read contents of directory, only read .mdx

    const posts = files.map((file) => {
        const slug = file.replace(/\.mdx$/, '');                        // remove file extension to generate slug
        const src = fs.readFileSync(path.join(postsDir, file), 'utf8'); // read files and encode in UTF-8
        const { data } = matter(src);                                   // extract and parse fontmatter object
        return {
            slug,
            title: data.title as string, // type strict
            summary: data.summary as string,
            date: formatDate(data.date),
            _sortValue: new Date(data.date).getTime() // a timestamp for sort only, never returned
        };
    });

    // sort: newest first, using actual date
    // map: remove _sortValue before returning
    return posts.sort((a, b) => b._sortValue - a._sortValue).map(({ _sortValue, ...meta }) => meta);
}

export function getPostSource(slug: string): string { // retrieve source from slug
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const rawContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(rawContents); // strip fontmatter after parsing
    return content;
}


// getAllPosts only reads fontmatter, does not render markdown pages
// getPostSource retrieves the source, so only that slug is rendered on demand