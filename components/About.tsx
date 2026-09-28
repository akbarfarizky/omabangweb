"use client";

import { motion } from "motion/react";
import { Binary, LockKeyhole, ScanSearch } from "lucide-react";
import { fadeLeft, fadeRight, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

export default function About() {
  return (
    <Section id="about" className="border-t border-white/5 bg-deep">
      <SectionHeading eyebrow="06 / Profile" title="Building secure and intelligent digital solutions." />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-5 leading-relaxed text-slate-400">
          <p>
            Information Technology Professional currently pursuing a Master&apos;s Degree in Cyber Defense at Universitas Pertahanan Republik Indonesia through a full scholarship program.
          </p>
          <p>
            Certified Associate Data Engineer (BNSP) with hands-on experience in software development, AI implementation, quality assurance, and technology business management.
          </p>
          <p>Proficient in Python, JavaScript, PostgreSQL, Next.js, and Node.js.</p>
          <p>Demonstrated aptitude in IT Security through a Top 5 placement in a Pentest Competition organized by Litbang TNI AD.</p>
        </motion.div>
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
            <LockKeyhole className="mb-8 text-bloom" size={21} />
            <p className="text-sm font-semibold text-white">Security-minded</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">A practical lens for secure systems and data integrity.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
            <ScanSearch className="mb-8 text-sky-300" size={21} />
            <p className="text-sm font-semibold text-white">Detail-oriented</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">Quality assurance from product logic to user experience.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
            <Binary className="mb-8 text-bloom" size={21} />
            <p className="text-sm font-semibold text-white">Systems thinker</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">Connecting software, AI, and data into useful tools.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
