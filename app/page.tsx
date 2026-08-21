import Link from "next/link";
import Image from "next/image";
import { DimensionDivider } from "./ui/dimension-divider";
import { DrawingPanel } from "./ui/drawing-panel";

// temp projects
const projects = [
    {
        title: "32-bit Single Cycle MIPS CPU",
        blurb: "A single cycle processor with 32 registers written in MIPS assembly",
        tags: ["MIPS", "Assembly"],
    },
    {
        title: "Haskell Algorithm Visualizer",
        blurb: "An algorithm visualizer with a backend written in Haskell.",
        tags: ["Haskell", "Servant", "React", "DSA"],
    },
    {
        title: "Webfolio",
        blurb: "It's a website AND a portfolio. How is this possible??",
        tags: ["AAA", "AAAA", "AAAAAAAAAA"],
    },
];

export default function Page() {
    return (
        <div className="bg-blueprint-grid">

            {/* Big name + project link  + image */}
            <section className="mx-auto max-w-2xl px-8 py-16">
                <DimensionDivider label="FIG. 01 - PORTFOLIO WEBSITE" />
                <div className="mt-6 flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between">
                    {/* name, bio, project link */}
                    <div>
                        <h1 className="mt-6 mb-6 font-heading text-5xl font-bold tracking-wide">
                            ETHAN GAT
                        </h1>
                        <p className="mb-8 text-lg text-blueprint-muted">
                            Systems-centric CS student. I build things from start to finish, problem to solution.
                        </p>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 border border-blueprint-accent px-5 py-2 text-sm tracking-widest text-blueprint-accent transition-colors hover:bg-blueprint-accent hover:text-blueprint"
                        >
                            VIEW PROJECTS
                        </Link>
                    </div>

                    {/* image */}
                    <div className="relative shrink-0 border border-blueprint-muted p-2">
                        <span className="absolute -top-3 left-4 bg-blueprint px-2 text-xs tracking-widest text-blueprint-muted">
                            My cat, Socrates
                        </span>
                        <Image
                            src="/images/cat.jpeg"
                            alt="Socrates, my cat"
                            height={320}
                            width={320}
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* "notes" */}
            <section className="mx-auto max-w-2xl px-8 py-8">
                <DrawingPanel label="Notes">
                    <p>
                        Third-year CS student focused on algorithms, developer tools, and project-based work.
                    </p>
                </DrawingPanel>
            </section>

            {/* highlighted projects */}
            <section className="mx-auto grid max-w-3xl gap-6 px-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => ( // for each i'th project
                    <DrawingPanel key={p.title} label={`PROJ. 0${i + 1}`}>
                        <h3 className="mb-2 font-heading font-bold tracking-wide">
                            {p.title.toUpperCase()}
                        </h3>
                        <p className="mb-4 text-sm text-blueprint-muted">{p.blurb}</p>
                        <p className="text-xs tracking-widest text-blueprint-accent">
                            {p.tags.join(', ')}
                        </p>
                    </DrawingPanel>
                ))}
            </section>

            {/* "dev tools" */}
            <section className="mx-auto max-w-2xl px-8 py-12">
                <DimensionDivider label="DEV TOOLS" />
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    {["Typescript", "React", "Next.js", "TailwindCSS", "Postgres"].map((t) => (
                        <span key={t}>{t}</span> // span titles
                    ))}
                </div>
            </section>
        </div>
    );
}