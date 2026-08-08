import { useEffect, useState } from "react";

export type ContentsItem = {
  /** A same-page fragment, e.g. "#risks". */
  href: string;
  label: string;
};

/**
 * Where the page stops being covered: the sticky header plus the chapter bar,
 * with a little room so a section that has just been jumped to counts as the
 * one being read.
 */
const READING_LINE = 190;

/**
 * Which of the listed sections the reader is currently in.
 *
 * The pages this runs on are long — twelve sections is normal — and a list of
 * links that never changes tells a reader nothing about where they are in it.
 * The rule is the one a person would use: the section you are in is the last
 * one whose heading has passed the line where the page becomes visible under
 * the header. Reading rectangles rather than watching intersections avoids the
 * off-by-one that appears when two sections meet exactly on that line.
 */
export function useActiveSection(items: readonly ContentsItem[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = items.map((item) => item.href.replace(/^#/, ""));
    let frame = 0;

    const measure = () => {
      frame = 0;
      let current: string | null = null;
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= READING_LINE) current = id;
      }
      setActive(current);
    };

    const schedule = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [items]);

  return active;
}
