// takes a label instead of text to make it reusable across project
export function DimensionDivider({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="w-10 border-t border-blueprint-muted" />
            <span className="text-xs tracking-widest text-blueprint-muted">{label}</span>
            <span className="w-10 border-t border-blueprint-muted" />
        </div>
    );
}