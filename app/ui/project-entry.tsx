'use client'; // for state management <- animate in DOM, needs client

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Project = {
    title: string;
    blurb: string;
    tags: string[];
    href: string;
}

export function ProjectEntry({ project, index }: { project: Project, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}

            // accent color on mouse
            className="border border-blueprint-muted p-4 transition-colors hover:border-blueprint-accent"
        >
            <div className="flex items-center gap-4">
                <span className="text-xs tracking-widest text-blueprint-muted">0{index + 1}</span> {/* fig.0i styling*/}
                <h3 className="font-heading font-bold tracking-wide">{project.title.toUpperCase()}</h3>
                <span className="ml-auto text-xs tracking-widest text-blueprint-accent">{project.tags[0]}</span>
            </div>

            {/* animation div */}
            <motion.div
                initial={false} // stops from animating a jarring open when the page is loaded
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="overflow-hidden"
            >
                <div className="mt-4 border-t border-blueprint-muted pt-4">
                    <p className="mb-3 text-sm text-blueprint-muted">{project.blurb}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-widest">
                        <span className="text-blueprint-accent">{project.tags.join(', ')}</span> {/* join tags by comma seperation */}
                        <a href={project.href} target="_blank" className="inline-flex items-center gap-1 hover:underline">
                            VIEW REPOSITORY <ArrowUpRight size={12} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}