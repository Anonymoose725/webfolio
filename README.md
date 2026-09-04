# Webfolio

My personal portfolio and blog for, live at [ethangat.com](https://ethangat.com).

Built deliberately as a full-stack learning exercise: my previous personal site was built entirely from scratch in Haskell, with no external libraries. This project takes the opposite approach, intending to lean on modern, well-established tools and libraries intentionally, rather than reinventing them completely from scratch source.

## Stack

- **[Next.js](https://nextjs.org)** (App Router) — routing, Server/Client Components
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling with a custom design-token system
- **[MDX](https://mdxjs.com)** via `next-mdx-remote-client` — the blog/writing pipeline, with `gray-matter` for frontmatter and `rehype-pretty-code`/Shiki for syntax highlighting
- **[Motion](https://motion.dev)** (formerly Framer Motion) — interaction animation
- **[Supabase](https://supabase.com)** — planned, not yet integrated (see Roadmap)
- **[Vercel](https://vercel.com)** — deployment, with automatic preview URLs per branch

## Design system

A custom "blueprint" visual identity, with two (so far) reusable components.

- `DimensionDivider` — a labeled section divider styled after technical-drawing dimension lines
- `DrawingPanel` — a bordered panel with a corner label, used for project cards, callouts, and MDX content blocks alike

## Project structure

```text
app/
├── layout.tsx          # shared nav, fonts, global styles
├── page.tsx            # home
├── about/
├── projects/
├── logs/
│   ├── page.tsx         # blog index
│   ├── mdx-components.tsx
│   └── [slug]/          # individual post pages
├── ui/                  # DimensionDivider, DrawingPanel, ProjectEntry
└── not-found.tsx
content/
└── logs/                # raw .mdx post files
lib/
└── posts.ts             # frontmatter parsing, post retrieval
```

## Roadmap

- [ ] Light Mode styling

## Author

**Ethan Gat** — [GitHub](https://github.com/Anonymoose725) · [LinkedIn](https://linkedin.com/in/ethan-gat) · [ethangat.com](https://ethangat.com)
