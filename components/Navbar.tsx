"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { fadeDown, staggerContainer, staggerItem } from "@/lib/animations";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "px-3 pt-3" : "pt-6"}`}
    >
      <nav
        className={`container-shell flex items-center justify-between rounded-full px-5 py-3 transition-all ${
          scrolled ? "border border-white/10 bg-[#06101f]/80 shadow-glow backdrop-blur-xl" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <a href="#home" className="focus-ring font-display text-sm font-semibold tracking-tight text-white">
          Akbar Farizky
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, id]) => (
            <a key={id} className="focus-ring text-xs text-slate-400 transition hover:text-white" href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring hidden rounded-full bg-violet px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-bloom md:inline-flex"
        >
          Let&apos;s talk
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="focus-ring rounded-lg p-2 text-slate-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-shell mt-2 rounded-2xl border border-white/10 bg-[#06101f]/95 p-3 backdrop-blur-xl md:hidden"
          >
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-1">
              {navLinks.map(([label, id]) => (
                <motion.a
                  variants={staggerItem}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
                  href={`#${id}`}
                  key={id}
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
