import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Lora, Inter } from "next/font/google";

const lora = Lora({
    variable: "--font-lora",
    weight: "400",
    subsets: ["latin"],
})

const inter = Inter({
    variable: "--font-inter",
    weight: "400",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    metadataBase: new URL("https://webfolio-delta.vercel.app/"), // vercel URL
    title: "Ethan Gat Webfolio",
    description: "A web portfolio demonstrating Ethan Gat's projects and blogs",
    openGraph: {
        title: "Ethan Gat Webfolio",
        description: "A web portfolio demonstrating Ethan Gat's projects and blogs",
        siteName: "Ethan Gat Webfolio"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // put variables for fonts on html, register them as tailwind theme values in globals.css
        <html lang="en" className={`${inter.variable} ${lora.variable}`}>
            <body className="min-h-screen bg-blueprint bg-blueprint-grid text-blueprint-line font-sans">
                <nav className="flex items-center justify-between border-b border-blueprint-muted px-8 py-5">
                    <Link href="/" className="text-sm tracking-widest">
                        WEBFOLIO - E. GAT
                    </Link>
                    <div className="flex items-center gap-6 text-sm tracking-widest">
                        <Link href="/about" className="transition-colors hover:text-blueprint-accent">
                            ABOUT
                        </Link>
                        <Link href="/projects" className="transition-colors hover:text-blueprint-accent">
                            PROJECTS
                        </Link>
                        <Link href="/logs" className="transition-colors hover:text-blueprint-accent">
                            LOGS
                        </Link>
                    </div>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
