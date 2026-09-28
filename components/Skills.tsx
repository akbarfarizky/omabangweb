"use client";

import { motion } from "motion/react";
import { Braces, Cpu, Shield } from "lucide-react";
import { skills, techStack } from "@/lib/data";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

const icons = { Cybersecurity: Shield, Development: Braces, "Emerging Technology": Cpu };

export default function Skills() {
  return (
    <Section id="skills" className="bg-deep">
      <SectionHeading
        eyebrow="01 / Stack"
        title="Technologies I work with"
        intro="A focused toolkit spanning security, product engineering, and emerging technology."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mb-8 flex flex-wrap gap-2"
      >
        {techStack.map((item) => (
          <motion.span
            variants={staggerItem}
            key={item}
            className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-slate-300"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
      <div className="grid gap-4 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => {
          const Icon = icons[category as keyof typeof icons];
          return (
            <motion.div
              key={category}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[.03] p-6"
            >
              <div className="mb-7 flex items-center justify-between">
                <Icon size={21} className="text-bloom" />
                <span className="font-mono text-[10px] text-slate-600">0{Object.keys(skills).indexOf(category) + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <motion.span
                    variants={staggerItem}
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-slate-400 transition hover:border-bloom/50 hover:text-bloom"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
