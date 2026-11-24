'use client';

//import { EmbedPdfViewerElement } from '@embedpdf/viewer-react';
// for embedpdf windows to be rendered by the client locally in MDX pages

import dynamic from 'next/dynamic'

const DynamicPDFViewer = dynamic( // dynamically import with lazy react
    () => import('@embedpdf/viewer-react').then((mod) => mod.PDFViewer),
    {
        ssr: false, // client side render
        loading: () => (
            <div className="flex h-150 w-full items-center justify-center rounded-lg border border-blueprint-muted text-sm text-blueprint-line">
                Loading ...
            </div>
        ),
    }
);

interface PDFViewerProps {
    src: string; // to refer to local store
    height?: string;
}

export function PdfWindow({ src, height = "600px" }: PDFViewerProps) {
    return (
        <div
            style={{ height }}
            className="relative left-1/2 my-10 w-[92vw] max-w-5xl -translate-x-1/2 overflow-hidden rounded-lg border border-blueprint-muted"
        // break the text boundary put into place by the logs tsx
        >
            <DynamicPDFViewer src={src} style={{ height: "100%", width: "100%" }} />
        </div >
    )
}