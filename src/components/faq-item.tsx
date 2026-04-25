"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "@/lib/motion";

export function FaqItem({
  question,
  answer,
  openLabel,
  closeLabel,
  index,
}: {
  question: string;
  answer: string;
  openLabel: string;
  closeLabel: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
      className="border-b border-border/60"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
      >
        <span className="font-serif text-[1.05rem] leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent md:text-[1.2rem]">
          {question}
        </span>
        <span
          aria-hidden
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-accent transition-transform duration-300 ease-out ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="max-w-[68ch] space-y-4 pb-6 pr-10 text-[15px] leading-[1.8] text-muted md:text-base">
              {answer.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
