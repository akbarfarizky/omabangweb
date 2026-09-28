"use client";

import { motion } from "motion/react";
import { Medal, Sparkles } from "lucide-react";
import { achievements } from "@/lib/data";
import { scaleIn, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="05 / Recognition" title="Achievements" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map(([title, detail], i) => (
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ y: -5 }}
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/[.03] p-5"
          >
            <div className="mb-12 flex items-center justify-between">
              <Medal size={20} className={i % 2 ? "text-sky-300" : "text-bloom"} />
              <Sparkles size={15} className="text-white/20 transition group-hover:text-bloom" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
