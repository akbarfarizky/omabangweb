"use client";

import { useEffect, useState } from "react";
import { profile, roles } from "@/lib/data";

const TYPE_MS = 75;
const DELETE_MS = 40;
const HOLD_MS = 1500;
const START_MS = 320;

type Phase = "typing" | "holding" | "deleting";

export default function RotatingRole({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const current = roles[index];
    const step = (delay: number, next: () => void) => window.setTimeout(next, delay);
    let timer: number | undefined;

    if (phase === "typing") {
      timer = step(text.length === 0 ? START_MS : TYPE_MS, () => {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setPhase("holding");
      });
    } else if (phase === "holding") {
      timer = step(HOLD_MS, () => setPhase("deleting"));
    } else {
      timer = step(DELETE_MS, () => {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else {
          setIndex((i) => (i + 1) % roles.length);
          setPhase("typing");
        }
      });
    }

    return () => window.clearTimeout(timer);
  }, [text, phase, index, reduced]);

  return (
    <span className={className}>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">{reduced ? profile.role : text}</span>
      {!reduced && (
        <span aria-hidden="true" className="cursor-blink ml-0.5 inline-block">
          |
        </span>
      )}
    </span>
  );
}
