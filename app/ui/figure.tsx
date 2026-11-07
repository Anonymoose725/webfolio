import Image from "next/image";

interface FigureProps {
    src: string;
    alt: string;
    caption: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
    return (
        <figure className="my-10">
            <Image
                src={src}
                alt={alt}
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg border border-blueprint-muted"
                loading="eager"
            />
            <figcaption className="mt-3 text-center text-sm text-blueprint-muted">
                {caption}
            </figcaption>
        </figure>
    );
}