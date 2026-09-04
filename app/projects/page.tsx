import { ProjectEntry } from "@/app/ui/project-entry";
import { DimensionDivider } from "@/app/ui/dimension-divider";

// temp projects
const projects = [
    {
        title: "Webfolio",
        blurb: "This site: a Next.js framework portfolio to showcase my projects and thoughts in logs. Created to learn how to use external libraries and devtools.",
        tags: ["Next.js", "TailwindCSS", "Supabase", "Markdown"],
        href: "https://github.com/Anonymoose725/webfolio",
    },
    {
        title: "Haskell Algorithm Visualizer",
        blurb: "An algorithm visualizer with a backend written in Haskell. Designed to demonstrate classic CS algorithms in a manner that is easy to understand if you can't grasp the concept by looking at code alone.",
        tags: ["Haskell", "Servant", "React", "DSA"],
        href: "https://github.com/Anonymoose725/algo-visualizer",
    },
    {
        title: "Single-Cycle MIPS Processor",
        blurb: "A processor designed in Logisim Evolution to execute instructions through the MIPS architecture datapath in a single clock cycle",
        tags: ["MIPS", "Assembly", "CPU", "Logisim"],
        href: "https://github.com/Anonymoose725/mips-single-cycle",
    },
];

export default function ProjectsPage() {

    return (
        <div className="mx-auto max-w-2xl px-8 py-16">
            <DimensionDivider label="FIG. 03 - PROJECTS" />
            <h1 className="mt-6 mb-10 font-heading text-5xl font-bold tracking-wide">
                PROJECTS
            </h1>

            <div className="space-y-4"> {/* adds vertical space inside a parent container between children */}
                {projects.map((p, i) => (
                    // key is a react bookkeeper index for the map function! not a prop of ProjectEntry.
                    <ProjectEntry key={p.title} project={p} index={i} />
                ))}
            </div>
        </div>
    );
}