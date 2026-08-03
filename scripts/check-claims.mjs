import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url);
const sourceRoots = [
  "src/pages",
  "src/components",
  "src/app",
  "src/content/evidence.ts",
  "src/data/controlled-replay.json",
  "index.html",
];
const extensions = new Set([".ts", ".tsx", ".html", ".json"]);

const forbidden = [
  "AGI achieved",
  "LLM killer",
  "replaces LLMs",
  "human-level",
  "universally superior",
  "production-ready",
  "customer-proven",
  "Hub71-backed",
  "trained general AI",
  "fully autonomous",
  "never hallucinates",
  "all possible reasoning",
  "proves truth about the world",
];

const required = [
  "Persistent policy learning",
  "NOT STARTED",
  "trained Atlas is not present",
  "External operational gain",
  "General AI",
  "not a live model",
  "not an intelligence metric",
];

async function collect(relativePath) {
  const url = new URL(relativePath, root);
  if (extname(relativePath)) return [{ relativePath, text: await readFile(url, "utf8") }];

  const entries = await readdir(url, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const child = join(relativePath, entry.name);
      if (entry.isDirectory()) return collect(child);
      if (!extensions.has(extname(entry.name))) return [];
      return [{ relativePath: child, text: await readFile(new URL(child, root), "utf8") }];
    }),
  );
  return nested.flat();
}

const files = (await Promise.all(sourceRoots.map(collect))).flat();
const combined = files.map((file) => file.text).join("\n");
const violations = [];

for (const phrase of forbidden) {
  const pattern = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  for (const file of files) {
    if (pattern.test(file.text)) violations.push({ code: "FORBIDDEN_PUBLIC_CLAIM", phrase, where: file.relativePath });
  }
}

for (const phrase of required) {
  if (!combined.toLowerCase().includes(phrase.toLowerCase())) {
    violations.push({ code: "REQUIRED_BOUNDARY_MISSING", phrase, where: "public UI source" });
  }
}

if (violations.length > 0) {
  console.error(JSON.stringify({ status: "FAIL", violations }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "PASS",
    scannedFiles: files.length,
    forbiddenMatches: 0,
    requiredBoundaries: required.length,
  }),
);
