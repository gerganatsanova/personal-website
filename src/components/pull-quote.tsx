"use client";

import { motion } from "motion/react";
import { Ornament } from "./ornament";
import { EASE } from "@/lib/motion";

export function PullQuote({ text }: { text: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="my-10 flex flex-col items-center gap-6 text-center md:my-12"
    >
      <Ornament />
      <blockquote className="whitespace-pre-line font-serif text-2xl italic leading-[1.3] tracking-tight text-foreground md:text-[1.75rem] md:leading-[1.25]">
        {text}
      </blockquote>
      <Ornament />
    </motion.figure>
  );
}
