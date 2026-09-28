"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { fadeUp, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-mist">
      <SectionHeading light eyebrow="07 / Social proof" title="What people say" />
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            key={item.name}
            className="rounded-2xl bg-white p-6 shadow-card"
          >
            <Quote className="text-violet" size={22} />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-6">
              <p className="text-sm font-semibold text-ink">{item.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">{item.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
