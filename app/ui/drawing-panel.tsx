// takes a label instead of text to make it reusable across project
export function DrawingPanel({
    label, children
}: {
    label: string,
    children: React.ReactNode;
}) {
    return (
        // relative parent, absolute child -> respect offsets
        // tracking-widest spaces letters apart for "blueprint" look
        <div className="relative border border-blueprint-muted p-5">
            <span className="absolute -top-3 left-4 bg-blueprint px-2 text-xs tracking-widest text-blueprint-muted">
                {label}
            </span>
            {children}
        </div>
    );
}