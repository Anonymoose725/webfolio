'use client'; // for state management

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Project = {
    title: string;
    blurb: string;
    tags: string[];
    href: string;
}

export function ProjectEntry({ project, index }: { project: Project, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return
}