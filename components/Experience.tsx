"use client";

import { motion } from "motion/react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import { fadeUp, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Work experience"
        intro="Entrepreneurial experience grounded in technology operations, customer support, and digital business processes."
      />
      <div className="relative space-y-5 before:absolute before:bottom-0 before:left-[13px] before:top-0 before:w-px before:bg-gradient-to-b before:from-bloom before:via-violet/30 before:to-transparent">
        {experiences.map((item) => (
          <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} key={item.role} className="relative pl-10">
            <span className="absolute left-0 top-7 grid h-7 w-7 place-items-center rounded-full border border-violet/40 bg-night text-bloom">
              <BriefcaseBusiness size={13} />
            </span>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <p className="font-mono text-[11px] text-bloom">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                </div>
                <p className="flex items-center gap-1 text-xs text-slate-600">
                  <MapPin size={13} />
                  {item.location}
                </p>
              </div>
              <ul className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm leading-relaxed text-slate-400">
                {item.responsibilities.map((r) => (
                  <li className="flex gap-3" key={r}>
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bloom" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
