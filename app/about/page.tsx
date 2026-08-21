import { DimensionDivider } from "@/app/ui/dimension-divider";
import { DrawingPanel } from "@/app/ui/drawing-panel";
import { GitBranch, User, Mail } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-blueprint-grid">
            <section className="mx-auto max-w-5xl px-8 py-16">
                <DimensionDivider label="FIG. 02 - ABOUT" />
                <h1 className="mt-6 mb-8 font-heading text-5xl font-bold tracking-wide">
                    ABOUT
                </h1>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
                    {/* Main content */}
                    <div className="max-w-prose space-y-6 text-lg text-blueprint-line">
                        <p>
                            Placeholder - who I am and what I study. Similar tone to homepage tagline, but with room to breathe.
                        </p>
                        <p>
                            Placeholder - the story paragraph. How I got into CS, what pulled me into the kind of projects I build.
                        </p>
                        <p>
                            Placeholder - current focus, what kind of role I'm looking for, doubling as a call-to-action
                        </p>
                    </div>

                    {/* Sidebar rail */}
                    <div className="space-y-8 lg:sticky lg:top-8 lg:self-start">
                        <DrawingPanel label="BACKGROUND">
                            <p className="text-sm text-blueprint-muted">
                                Placeholder - school, major, current year
                            </p>
                        </DrawingPanel>

                        <DrawingPanel label="FOCUS">
                            <p className="text-sm text-blueprint-muted">
                                Placeholder - a few areas i'm currently interested in
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