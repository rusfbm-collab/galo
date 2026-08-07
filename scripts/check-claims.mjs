import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url);
const sourceRoots = [
  "src/pages",
  "src/components",
  "src/app",
  "src/i18n",
  "src/content/academicAnalysis.ts",
  "src/content/audit.ts",
  "src/content/contact.ts",
  "src/content/evidence.ts",
  "src/content/investors.ts",
  "src/content/llmComparison.ts",
  "src/content/orientation.ts",
  "src/content/plainLanguage.ts",
  "src/content/plainWords.ts",
  "src/content/programme.ts",
  "src/content/site.ts",
  "src/content/termDeepDives.ts",
  "src/content/termPages.ts",
  "src/content/thinking.ts",
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
  "Hub71 portfolio",
  "Hub71 cohort",
  "member of Hub71",
  "part of the Hub71",
  "in partnership with Hub71",
  "Hub71 company",
  "accepted into Hub71",
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
  "STAR is closed and has right identity P0",
  "STAR замкнут и имеет правую единицу P0",
  "no homomorphism L3→L5",
  "there is no homomorphism L3 to L5",
  "18-element global automorphism group",
  "560 formal transition records",
  "560 formal raw cells",
  "560 raw Cayley cells",
  "learned selector",
  "external truth authenticated",
  "external operational gain is proven",
  "fresh FULL passed",
  "fresh FULL 1,366",
  "dual-minor PASS",
  "current trained Atlas is present",
  "CORE/QUASI/BOUNDARY executable",
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
  "not affiliated with, endorsed by, backed by, or selected by Hub71",
  "не аффилирован с Hub71",
  "与 Hub71 及其任何合作方均无隶属关系",
  "لا ترتبط GALO AI بـ Hub71",
  "P0 is the unique left zero and unique right-neutral element",
  "not a two-sided identity or zero",
  "560 oriented typed transition coordinates",
  "Zero homomorphism exists between every pair of levels",
  "compatibility and audit mathematics",
  "deterministic selector for exactly two fixed source patterns",
  "bundled finite sample verifies against a release-pinned public key",
  "stored release evidence; fresh FULL was not run",
  "BEGINNER_TRANSITION_DUAL_CHANNEL",
  "table_expected",
  "formula_got",
  "COMPATIBILITY_ONLY",
  "Conclusion: STAR has no two-sided identity at any level n≥2.",
  "TARGET ARCHITECTURE · NOT CURRENT V4",
  "Atlas semantic reads, rank effects, and learning writes are all zero",
  "Current sequencing, rollback, and revocation evidence is process-local",
  "The zero homomorphism still exists",
  "единственным левым нулём и единственным правым нейтральным элементом",
  "唯一的左零元和唯一的右中性元",
  "الصفر الأيسر الوحيد والعنصر المحايد الوحيد من اليمين",
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
