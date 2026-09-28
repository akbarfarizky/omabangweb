"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Globe2, Linkedin, Mail, MapPin } from "lucide-react";
import { fadeLeft, fadeRight, viewport } from "@/lib/animations";
import { profile } from "@/lib/data";
import { Section } from "./Section";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!form.get("name") || !form.get("email") || !form.get("message")) {
      setError("Please complete all fields.");
      return;
    }
    setError("");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <Section id="contact" className="bg-violet">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-white/70">08 / Contact</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] text-white sm:text-5xl">Let&apos;s work together</h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/75">
            I&apos;m open to new opportunities and collaborations. Secure today, stronger tomorrow.
          </p>
          <div className="mt-8 space-y-4">
            <a className="focus-ring flex items-center gap-4 text-sm text-white/90 hover:text-white" href={`mailto:${profile.email}`}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                <Mail size={17} />
              </span>
              {profile.email}
            </a>
            <div className="flex items-center gap-4 text-sm text-white/90">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                <MapPin size={17} />
              </span>
              {profile.location}
            </div>
            <a className="focus-ring flex items-center gap-4 text-sm text-white/90 hover:text-white" href={profile.linkedin}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                <Linkedin size={17} />
              </span>
              linkedin.com/in/akbarfarizky
            </a>
            <a className="focus-ring flex items-center gap-4 text-sm text-white/90 hover:text-white" href={profile.github}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                <Github size={17} />
              </span>
              github.com/akbarfarizky
            </a>
            <div className="flex items-center gap-4 text-sm text-white/90">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                <Globe2 size={17} />
              </span>
              {profile.portfolio}
            </div>
          </div>
        </motion.div>
        <motion.form
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          onSubmit={submit}
          className="rounded-2xl bg-white p-6 shadow-card sm:p-8"
        >
          <label className="block text-sm font-medium text-ink">
            Name
            <input
              name="name"
              className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none"
              placeholder="Your name"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Email
            <input
              name="email"
              type="email"
              className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none"
              placeholder="you@email.com"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Message
            <textarea
              name="message"
              rows={5}
              className="focus-ring mt-2 w-full resize-none rounded-lg border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none"
              placeholder="Tell me about the work."
            />
          </label>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          {sent && <p className="mt-3 text-sm text-emerald-600">Message captured. I&apos;ll get back to you soon.</p>}
          <button
            type="submit"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-night"
          >
            Send message <ArrowUpRight size={16} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
