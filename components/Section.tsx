"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, viewport } from "@/lib/animations";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={`font-display text-3xl font-semibold tracking-[-.04em] sm:text-5xl ${light ? "text-ink" : "text-white"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 leading-relaxed ${light ? "text-slate-500" : "text-slate-400"}`}>{intro}</p>}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-pad ${className}`}>
      <div className="container-shell">{children}</div>
    </section>
  );
}
