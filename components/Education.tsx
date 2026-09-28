"use client";

import { motion } from "motion/react";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/data";
import { fadeLeft, fadeRight, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

export default function Education() {
  return (
    <Section id="education" className="bg-deep">
      <SectionHeading eyebrow="04 / Credentials" title="Education & certifications" />
      <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <GraduationCap className="text-bloom" size={20} />
            <h3 className="font-display text-xl font-semibold">Education</h3>
          </div>
          <div className="relative border-l border-violet/30 pl-7">
            {education.map((item) => (
              <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} key={item.degree} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full bg-bloom shadow-[0_0_18px_rgba(139,108,255,.8)]" />
                <p className="font-mono text-[11px] text-bloom">{item.period}</p>
                <h4 className="mt-2 text-lg font-semibold text-white">{item.degree}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                {item.highlight && <p className="mt-3 text-xs font-semibold text-sky-300">{item.highlight}</p>}
                {item.note.map((line) => (
                  <p key={line} className="mt-2 max-w-lg text-xs leading-relaxed text-slate-600">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-7 flex items-center gap-3">
            <Award className="text-sky-300" size={20} />
            <h3 className="font-display text-xl font-semibold">Certifications</h3>
          </div>
          <div className="grid gap-3">
            {certifications.map(([name, org]) => (
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                whileHover={{ x: 5 }}
                key={name}
                className="rounded-xl border border-white/10 bg-white/[.03] p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-200">{name}</h4>
                    <p className="mt-1 font-mono text-[10px] text-slate-500">{org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
