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
    title: "Ethan Gat Webfolio",
    description: "A web portfolio demonstrating Ethan Gat's work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <nav className="flex gap-4 p-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/logs">Logs</Link>
                </nav>
                {children}
            </body>
        </html>
    );
}
