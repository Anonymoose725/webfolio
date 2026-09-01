import Link from 'next/link';
import { DimensionDivider } from './ui/dimension-divider';

export default function NotFound() {
    return (
        <div className="mx-auto max-w-2xl px-8 py-24 text-center">
            {/* <DimensionDivider label="ERROR 404: NOT FOUND" /> */}
            <h1 className="mt-6 mb-4 font-heading text-6xl font-bold tracking-wide">
                404
            </h1>
            <p className="mb-8 text-blueprint-muted">
                This page doesn't exist. Check the URL, or head back home.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 border border-blueprint-accent px-5 py-2 text-sm tracking-widest text-blueprint-accent transition-colors hover:bg-blueprint-accent hover:text-blueprint"
            >
                Return Home
            </Link>
        </div>
    )
}