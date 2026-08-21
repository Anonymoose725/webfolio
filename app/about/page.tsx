import { DimensionDivider } from "@/app/ui/dimension-divider";
import { DrawingPanel } from "@/app/ui/drawing-panel";
import { GitBranch, User, Mail } from 'lucide-react';

export default function AboutPage() {
    return (
        <div>
            <section className="mx-auto max-w-5xl px-8 py-16">
                <DimensionDivider label="FIG. 02 - ABOUT" />
                <h1 className="mt-6 mb-8 font-heading text-5xl font-bold tracking-wide">
                    ABOUT
                </h1>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
                    {/* Main content */}
                    <div className="max-w-prose space-y-6 text-lg text-blueprint-line">
                        <p>
                            I'm Ethan, a tech and math enthusiast. I study computer science and mathematics academically, and in my spare time
                            I enjoy watching tech youtubers cover my favourite corners of software and hardware. Outside of technology,
                            I love to listen to music. I play the guitar and practice film photography, try new foods with friends, and travel
                            with family.
                        </p>
                        <p>
                            When I was younger I was drawn in to computer science. I was attracted by the tangible relationship between
                            programming and physical computers, and later now I am equally drawn to the theoretical relationship between
                            computer science and mathematics. Influences on my skills and interests were Linus Tech Tips, my Nintendo 3DS,
                            and Minecraft, while today they are are Linux, linear algebra, and advancements in artifical intelligence.
                            The projects I build are often related to these influences or at the very least inspired.
                        </p>
                        <p>
                            Currently, my focuses are on fullstack web development, developer tools, and algorithm design. I'm looking for a role
                            that broadly applies my work philosophies: project-based assignment, automation, and solutions-to-problems.
                            My next internship window is Summer 2027. My goals will include gaining experience and building things that are utilised
                            rather than graded.
                        </p>
                    </div>

                    {/* Sidebar rail */}
                    <div className="space-y-8 lg:sticky lg:top-8 lg:self-start">
                        <DrawingPanel label="BACKGROUND">
                            <p className="text-sm text-blueprint-muted">
                                McGill University - B.Sc Computer Science, Class of 2028
                            </p>
                        </DrawingPanel>

                        <DrawingPanel label="FOCUS">
                            <p className="text-sm text-blueprint-muted">
                                Functional programming, developer tools, agentic AI, algorithms and computation
                            </p>
                        </DrawingPanel>

                        <DrawingPanel label="LINKS">
                            <div className="flex flex-col gap-3 text-sm">
                                <a href="https://github.com/Anonymoose725" target="_blank" className="flex items-center gap-2 text-blueprint-accent hover:underline">
                                    <GitBranch size={16} aria-hidden="true" />
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/ethan-gat" target="_blank" className="flex items-center gap-2 text-blueprint-accent hover:underline">
                                    <User size={16} aria-hidden="true" />
                                    LinkedIn
                                </a>
                                <a href="mailto:ethangat725@gmail.com" target="_blank" className="flex items-center gap-2 text-blueprint-accent hover:underline">
                                    <Mail size={16} aria-hidden="true" />
                                    Email Me!
                                </a>
                            </div>
                        </DrawingPanel>
                    </div>
                </div>
            </section>
        </div>
    );
}