import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url);
const sourceRoots = [
  "src/pages",
  "src/components",
  "src/app",
  "src/i18n",
  "src/content/evidence.ts",
  "src/content/contact.ts",
  "src/content/site.ts",
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

const required = [
  "Persistent policy learning",
  "NOT STARTED",
  "trained Atlas is not present",
  "External operational gain",
  "General AI",
  "not a live model",
  "not an intelligence metric",
  "Персистентное обучение политики не начато.",
  "Обученный Atlas отсутствует.",
  "Внешний операционный выигрыш не доказан.",
  "General AI не заявляется.",
  "持续策略学习尚未开始。",
  "当前不存在已训练的 Atlas。",
  "外部运行增益尚未得到证明。",
  "不声称已实现通用人工智能。",
  "لم يبدأ التعلّم المستديم للسياسة.",
  "لا يوجد Atlas مدرَّب.",
  "المكسب التشغيلي الخارجي غير مُثبت.",
  "لا ندّعي تحقيق الذكاء الاصطناعي العام.",
  "rusfbm@gmail.com",
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
