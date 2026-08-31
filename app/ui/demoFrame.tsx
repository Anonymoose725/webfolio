// live iFrame demo component
export function DemoFrame({ src, height = 500 }: { src: string; height?: number }) {
    return (
        <div className="relative my-8 border border-blueprint-muted p-2">
            <span className="absolute -top-3 left-4 bg-blueprint px-2 text-xs tracking-widest text-blueprint-muted">
                Live Demo
            </span>
            <iframe
                src={src}
                className="w-full border-0"
                style={{ height }}
                loading="lazy"
                title="Live Demo"
            />
        </div>
    )
}