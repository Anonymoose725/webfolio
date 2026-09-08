import { ProjectEntry } from "@/app/ui/project-entry";
import { DimensionDivider } from "@/app/ui/dimension-divider";
import { supabase } from "@/lib/supabase";

// const projects = [
//     {
//         title: "Webfolio",
//         blurb: "This site: a Next.js framework portfolio to showcase my projects and thoughts in logs. Created to learn how to use external libraries and devtools.",
//         tags: ["Next.js", "TailwindCSS", "Supabase", "Markdown"],
//         href: "https://github.com/Anonymoose725/webfolio",
//     },
// ];

export const revalidate = 3600; 
// reserved export that forces an update of the page every 1 hour (3600 seconds)
// this is better than doing a force-dynamic export because that would make the page dynamic and not cacheable, which would be bad for performance and SEO

export default async function ProjectsPage() {
    const { data: projects, error } = await supabase.from("projects").select("*").order("sort_order");

    if (error) {
        console.error("Error fetching projects:", error);
        return <p className="text-blueprint-accent-red">Error loading projects: {error.message}</p>;
    }

    else return (
        <div className="mx-auto max-w-2xl px-8 py-16">
            <DimensionDivider label="FIG. 03 - PROJECTS" />
            <h1 className="mt-6 mb-10 font-heading text-5xl font-bold tracking-wide">
                PROJECTS
            </h1>
            <div className="space-y-4">
                {projects?.map((project, i) => (
                    <ProjectEntry key={i} project={project} index={i} />
                ))}
            </div>
        </div>
    )

}