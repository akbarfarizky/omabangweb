"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-mono text-[10px] text-slate-600">© 2026 Akbar Farizky. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a className="focus-ring text-slate-500 hover:text-white" href={profile.github} aria-label="GitHub">
            <Github size={16} />
          </a>
          <a className="focus-ring text-slate-500 hover:text-white" href={profile.linkedin} aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a className="focus-ring text-slate-500 hover:text-white" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={16} />
          </a>
          <a
            className="focus-ring grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:border-bloom/50 hover:text-white"
            href="#home"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
