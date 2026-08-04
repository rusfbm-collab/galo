import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const distRoot = join(projectRoot, "dist");
const canonicalOrigin = "https://aigalo.com";

const locales = {
  en: {
    htmlLang: "en",
    direction: "ltr",
    prefix: "",
    organization: "Founder-led research architecture for explicit world state and bounded, replayable execution.",
    pages: {
      home: {
        path: "",
        title: "GALO AI — Explicit World State and Replayable Execution",
        description:
          "GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed replay.",
      },
      evidence: {
        path: "evidence",
        title: "Evidence — GALO AI",
        description:
          "Inspect GALO's implemented bounded mechanics, immutable release fingerprint, public claim matrix, and disclosed research boundaries.",
      },
      privacy: {
        path: "privacy",
        title: "Privacy — GALO AI",
        description: "How the static GALO AI website handles data, cookies, analytics, and external contact links.",
      },
    },
  },
  ru: {
    htmlLang: "ru",
    direction: "ltr",
    prefix: "ru",
    organization:
      "Исследовательская архитектура под руководством основателя для явного состояния мира и ограниченного воспроизводимого исполнения.",
    pages: {
      home: {
        path: "",
        title: "GALO AI — Явное состояние мира и воспроизводимое исполнение",
        description:
          "GALO — самостоятельная исследовательская архитектура для явного состояния мира, типизированного исполнения и воспроизведения, подтверждаемого протоколами исполнения.",
      },
      evidence: {
        path: "evidence",
        title: "Доказательства — GALO AI",
        description:
          "Изучите реализованные ограниченные механизмы GALO, неизменяемый отпечаток выпуска, матрицу публичных утверждений и раскрытые границы исследования.",
      },
      privacy: {
        path: "privacy",
        title: "Конфиденциальность — GALO AI",
        description:
          "Как статический сайт GALO AI обращается с данными, cookie, аналитикой и внешними контактными ссылками.",
      },
    },
  },
  zh: {
    htmlLang: "zh-CN",
    direction: "ltr",
    prefix: "zh",
    organization: "一套由创始人主导、面向显式世界状态以及受限、可重放执行的研究架构。",
    pages: {
      home: {
        path: "",
        title: "GALO AI — 显式世界状态与可重放执行",
        description: "GALO 是一套面向显式世界状态、类型化执行与回执支撑重放的独立研究架构。",
      },
      evidence: {
        path: "evidence",
        title: "证据 — GALO AI",
        description: "查看 GALO 已实现的有限机制、不可变发布指纹、公开声明矩阵及已披露的研究边界。",
      },
      privacy: {
        path: "privacy",
        title: "隐私 — GALO AI",
        description: "了解 GALO AI 静态网站如何处理数据、Cookie、分析工具和外部联系链接。",
      },
    },
  },
  ar: {
    htmlLang: "ar",
    direction: "rtl",
    prefix: "ar",
    organization: "بنية بحثية يقودها المؤسس لحالة عالم صريحة وتنفيذ مقيّد قابل لإعادة التشغيل.",
    pages: {
      home: {
        path: "",
        title: "GALO AI — حالة عالم صريحة وتنفيذ قابل لإعادة التشغيل",
        description:
          "GALO هي بنية بحثية مستقلة لحالة عالم صريحة، وتنفيذ محدد الأنواع، وإعادة تشغيل مدعومة بإيصالات التنفيذ.",
      },
      evidence: {
        path: "evidence",
        title: "GALO AI — الأدلة وحدود الادعاءات",
        description: "الأدلة العامة وحدود الادعاءات للإصدار البحثي الحالي من GALO.",
      },
      privacy: {
        path: "privacy",
        title: "GALO AI — الخصوصية",
        description: "سياسة الخصوصية لموقع GALO AI الثابت والخالي من التحليلات والنماذج.",
      },
    },
  },
};

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function localizedPath(locale, page) {
  return [locales[locale].prefix, page.path].filter(Boolean).join("/");
}

function canonicalUrl(locale, page) {
  const path = localizedPath(locale, page);
  return path ? `${canonicalOrigin}/${path}` : `${canonicalOrigin}/`;
}

function alternates(pageKey) {
  const links = Object.entries(locales).map(([locale, config]) => {
    const href = canonicalUrl(locale, config.pages[pageKey]);
    return `    <link rel="alternate" hreflang="${config.htmlLang}" href="${href}" data-galo-locale="${locale}" />`;
  });
  links.push(
    `    <link rel="alternate" hreflang="x-default" href="${canonicalUrl("en", locales.en.pages[pageKey])}" data-galo-locale="default" />`,
  );
  return links.join("\n");
}

function render(template, locale, pageKey) {
  const config = locales[locale];
  const page = config.pages[pageKey];
  const canonical = canonicalUrl(locale, page);
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GALO AI",
    url: canonicalOrigin,
    email: "rusfbm@gmail.com",
    description: config.organization,
  });

  return template
    .replace(/<html\b[^>]*>/i, `<html lang="${config.htmlLang}" dir="${config.direction}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/i, `$1${description}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/i, `$1${title}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/i, `$1${description}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/i, `$1${canonical}$2`)
    .replace(
      /(<meta\s+property="og:url"[^>]*>)/i,
      `$1\n    <meta property="og:locale" content="${config.htmlLang.replace("-", "_")}" />`,
    )
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/(<link\s+rel="canonical"[^>]*>)/i, `$1\n${alternates(pageKey)}`)
    .replace(
      /<script\s+id="galo-structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="galo-structured-data" type="application/ld+json">${structuredData}</script>`,
    );
}

const template = await readFile(join(distRoot, "index.html"), "utf8");
let written = 0;

for (const [locale, config] of Object.entries(locales)) {
  for (const [pageKey, page] of Object.entries(config.pages)) {
    const path = localizedPath(locale, page);
    const output = path ? join(distRoot, path, "index.html") : join(distRoot, "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, render(template, locale, pageKey), "utf8");
    written += 1;
  }
}

console.log(JSON.stringify({ status: "PASS", localizedHtmlEntries: written }));
