import { DimensionDivider } from "../ui/dimension-divider";
import { DrawingPanel } from "../ui/drawing-panel";

export default function AboutPage() {
    return (
        <div className="bg-blueprint-grid">

            {/* About blurbs */}
            <section className="mx-auto max-w-2xl px-8 py-16">
                <DimensionDivider label="FIG. 02 - ABOUT" />
                <h1 className="mt-6 mb-8 font-heading text-5xl font-bold tracking-wide">
                    ABOUT
                </h1>

                <div className="space-y-6 text-lg text-blueprint-line">
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
            </section>

            {/* Background */}
            <section className="mx-auto max-w-2xl px-8 py-8">
                <DrawingPanel label="BACKGROUND">
                    <p>
                        Placeholder - school, major, current year
                    </p>
                </DrawingPanel>
            </section>

            {/* Focus */}
            <section className="mx-auto max-w-2xl px-8 py-8">
                <DrawingPanel label="FOCUS">
                    <p>
                        Placeholder - a few areas i'm currently interested in
                    </p>
                </DrawingPanel>
            </section>

            {/* TEST EDITING PY TO SEE WHAT HAPPENS */}
            <section className="mx-auto max-w-2xl px-8 py-12">
                <DimensionDivider label="LINKS" />
                <div className="mt-6 flex flex-wrap gap-6 text-sm">
                    <a href="https://github.com/Anonymoose725" className="text-blueprint-accent hover:underline">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/ethan-gat" className="text-blueprint-accent hover:underline">
                        LinkedIn
                    </a>
                    <a href="mailto:ethangat725@gmail.com" className="text-blueprint-accent hover:underline">
                        Email Me!
                    </a>
                </div>
            </section>
        </div>
    );
}