"use client";

import { motion } from "motion/react";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { fadeRight, staggerContainer, staggerItem } from "@/lib/animations";
import { profile } from "@/lib/data";
import RotatingRole from "./RotatingRole";

export default function Hero() {
  return (
    <section id="home" className="starfield relative overflow-hidden pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(109,74,255,.22),transparent_42%)]" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-violet/20 blur-[110px]" />
      <div className="container-shell grid items-center gap-10 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pb-28">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p variants={staggerItem} className="eyebrow mb-5">
            Hi, I&apos;m
          </motion.p>
          <motion.h1 variants={staggerItem} className="font-display text-5xl font-bold leading-[.95] tracking-[-.06em] text-white sm:text-7xl">
            Akbar Farizky
          </motion.h1>
          <motion.p variants={staggerItem} className="mt-6 min-h-[1.75rem] font-display text-xl text-bloom sm:min-h-[2rem] sm:text-2xl">
            <RotatingRole />
          </motion.p>
          <motion.p variants={staggerItem} className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.headline}
          </motion.p>
          <motion.p variants={staggerItem} className="mt-4 max-w-lg text-sm uppercase tracking-[.18em] text-slate-500">
            {profile.manifesto}
          </motion.p>
          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-bloom"
            >
              View my work <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-bloom/60 hover:bg-white/5"
            >
              Let&apos;s work together
            </a>
          </motion.div>
          <motion.div variants={staggerItem} className="mt-8 flex items-center gap-4">
            <a className="focus-ring text-slate-500 transition hover:text-white" href={profile.github} aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="focus-ring text-slate-500 transition hover:text-white" href={profile.linkedin} aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a className="focus-ring text-slate-500 transition hover:text-white" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <span className="ml-2 h-4 w-px bg-white/15" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">{profile.location}</span>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeRight} initial="hidden" animate="visible" className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[520px]">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[90px]" />
          <div className="absolute inset-x-10 bottom-6 top-8 rounded-[48%] border border-violet/25 bg-gradient-to-b from-violet/20 via-transparent to-sky-500/10" />
          <img
            src="/images/profile.png"
            alt="Akbar Farizky"
            className="absolute inset-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_20px_45px_rgba(109,74,255,.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
