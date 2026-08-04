import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("../dist/", import.meta.url);
const extensions = new Set([".html", ".js", ".css", ".json", ".xml", ".txt", ".svg"]);

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
  "TODO_CONFIRM",
  "AGI достигнут",
  "готово к промышленной эксплуатации",
  "поддержано Hub71",
  "никогда не галлюцинирует",
  "已实现 AGI",
  "生产就绪",
  "Hub71 支持",
  "永不产生幻觉",
  "تم تحقيق AGI",
  "جاهز للإنتاج",
  "مدعوم من Hub71",
  "لا يهلوس أبداً",
];

async function collect(relativePath = "") {
  const url = new URL(relativePath, root);
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

const files = await collect();
const violations = [];

for (const phrase of forbidden) {
  const needle = phrase.toLowerCase();
  for (const file of files) {
    if (file.text.toLowerCase().includes(needle)) {
      violations.push({ code: "FORBIDDEN_BUILD_CONTENT", phrase, where: file.relativePath });
    }
  }
}

if (violations.length > 0) {
  console.error(JSON.stringify({ status: "FAIL", violations }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: "PASS", scannedArtifacts: files.length, forbiddenMatches: 0 }));
