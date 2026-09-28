"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeUp, viewport } from "@/lib/animations";
import { Section, SectionHeading } from "./Section";

export default function Projects() {
  return (
    <Section id="projects" className="bg-mist">
      <SectionHeading
        light
        eyebrow="02 / Selected work"
        title="Featured projects"
        intro="Building practical products where security, intelligence, and usability meet."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            key={project.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[10px] text-white">
                <Layers3 size={12} />
                {project.tech}
              </div>
            </div>
            <div className="p-6">
              <h3 className="pr-5 font-display text-xl font-semibold leading-snug text-ink">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{project.description}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">{project.detail}</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-semibold text-violet"
              >
                Explore case study
                <ArrowUpRight size={15} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
