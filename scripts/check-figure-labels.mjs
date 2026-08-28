/**
 * Does any SVG label run outside the shape it is meant to sit in?
 *
 * SVG text does not wrap, so a phrase that fits its chip in English can run out
 * through the sides in Russian or Arabic while staying well inside the canvas —
 * which is why a viewBox check does not catch it. This walks every figure on
 * every page in all four languages and pairs each label with the shape it sits
 * in, so the whole class is caught rather than the instances somebody noticed.
 *
 * Playwright is not a dependency of this project, so this is a manual gate
 * rather than a CI one. Install it where you run the check, start a preview
 * server, and point the script at it:
 *
 *   npm run build && npx vite preview --port 4173 &
 *   npm i --no-save playwright && npx playwright install chromium
 *   node scripts/check-figure-labels.mjs
 *
 * It is a committed script rather than a note because the defect it catches is
 * invisible until somebody opens the right page in the right language, and it
 * has already found two.
 */
import { existsSync } from "node:fs";
import { chromium } from "playwright";

/** The container pins a browser; elsewhere, let Playwright find its own. */
const EXECUTABLE = process.env.CHROMIUM_PATH ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const PORT = Number(process.env.PORT ?? 4173);
const ROUTES = [
  "",
  "simple",
  "investors",
  "audit",
  "engine",
  "industry",
  "theory",
  "thinking",
  "vs-llm",
  "math",
  "symmetry",
  "evidence",
];
const LOCALES = ["", "ru", "zh", "ar"];
const b = await chromium.launch(existsSync(EXECUTABLE) ? { executablePath: EXECUTABLE } : {});
let bad = 0,
  checked = 0;
for (const loc of LOCALES) {
  for (const route of ROUTES) {
    const p = await b.newPage({ viewport: { width: 1280, height: 1000 } });
    await p.goto(`http://127.0.0.1:${PORT}/${loc ? loc + "/" : ""}${route}`, { waitUntil: "networkidle" });
    const hits = await p.evaluate(() => {
      const out = [];
      for (const svg of document.querySelectorAll("svg")) {
        for (const g of svg.querySelectorAll("g")) {
          const rect = g.querySelector(":scope > rect");
          if (!rect) continue;
          const rb = rect.getBoundingClientRect();
          if (rb.width < 4) continue;
          for (const text of g.querySelectorAll(":scope > text")) {
            const tb = text.getBoundingClientRect();
            if (tb.width < 1) continue;
            // A label placed BESIDE a shape (a bar chart's value name) is not
            // overflowing it. Only a label whose centre sits inside the shape
            // was meant to be in it, and only that one has to fit.
            const centre = (tb.left + tb.right) / 2;
            const middle = (tb.top + tb.bottom) / 2;
            if (centre < rb.left || centre > rb.right) continue;
            // Same for captions sitting above or below a bar rather than in it.
            if (middle < rb.top || middle > rb.bottom) continue;
            const overLeft = rb.left - tb.left;
            const overRight = tb.right - rb.right;
            const over = Math.max(overLeft, overRight);
            if (over > 1.5) {
              out.push({
                over: Math.round(over),
                label: (text.textContent || "").slice(0, 44),
                fig: (svg.closest("figure")?.className || svg.className.baseVal || "?").toString().slice(0, 48),
              });
            }
          }
        }
      }
      return out;
    });
    checked++;
    for (const h of hits) {
      bad++;
      console.log(
        `${(loc || "en").padEnd(3)} /${route.padEnd(10)} +${String(h.over).padStart(3)}px  "${h.label}"  ${h.fig}`,
      );
    }
    await p.close();
  }
}
await b.close();
console.log(
  JSON.stringify({
    status: bad === 0 ? "PASS" : "FAIL",
    checkedViews: checked,
    overflowingLabels: bad,
  }),
);
process.exit(bad === 0 ? 0 : 1);
