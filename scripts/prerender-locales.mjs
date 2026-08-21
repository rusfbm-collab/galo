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
        title: "GALO AI — A Verifiable World Model for Private AI and Industrial Autonomy",
        description:
          "A general-purpose verifiable world-model and autonomy architecture, with industrial decision assurance as its first product. Scoped learning results are published together with their negatives; partner-controlled validity is not proven and production autonomy is not authorised.",
      },
      simple: {
        path: "simple",
        title: "GALO AI in Plain Words — No Jargon, No Formulas",
        description:
          "GALO explained the way you would explain it to a friend: the everyday situation it addresses, what it actually does, why a table, what that buys you, and what we cannot yet promise.",
      },
      investors: {
        path: "investors",
        title: "GALO AI for Investors — What Exists, What Does Not, and How to Check",
        description:
          "A non-technical account of GALO: the problem in business terms, where a declared layer would sit, what runs today, six risks with their tests, and a diligence path a reader can run without us.",
      },
      hub71: {
        path: "hub71",
        title: "GALO AI Application Dossier — Assessment Lines, Milestones, and Limits",
        description:
          "An application dossier prepared for assessment: twelve lines of the current state with six of them negative, four regional-fit claims with their limits, twelve months of commitments each with a failure condition, and the six questions we expect to be pressed on. No affiliation with Hub71 is claimed or implied.",
      },
      industry: {
        path: "industry",
        title: "GALO AI for Industry — Decision Assurance Around Existing Digital Twins",
        description:
          "The first commercial product: a bounded, read-only, advisory evaluation on one industrial workflow. Where GALO sits above a digital twin, the seven steps of an evaluated decision, the autonomy ladder with its gates, and planning price hypotheses that are not a price list.",
      },
      audit: {
        path: "audit",
        title: "GALO AI for Auditors — What an Outsider Can Actually Verify",
        description:
          "Four tiers of verifiability, the five slots of every published claim, how to read a status without being misled, eight reviewer questions, a five-step reproduction, and the limits of this site.",
      },
      theory: {
        path: "theory",
        title: "GALO Theory for Beginners — From States to Verified Execution",
        description:
          "Understand GALO step by step: finite states, PLUS and STAR, typed transitions, 560 coordinates, programs, symmetries, level maps, runtime scope, and evidence boundaries.",
      },
      thinking: {
        path: "thinking",
        title: "How GALO Thinks — The Decision Procedure, Stage by Stage",
        description:
          "The GALO thinking schemes: the nine stages of one thought, the five refusal gates, the narrowing from 1,204 candidates to one, the one-step state cycle, and what is carried between runs.",
      },
      "vs-llm": {
        path: "vs-llm",
        title: "GALO AI and Language Models — What Is Actually Different",
        description:
          "How GALO differs from a language model — state, checking, replay, correction, breadth — and where it stands against twelve named families of system that are also trying to build artificial intelligence.",
      },
      math: {
        path: "math",
        title: "GALO Mathematics — PLUS and STAR Cayley Tables",
        description:
          "Explore the finite PLUS and STAR Cayley tables, exact formulas, execution orientations, and disclosed limits of the GALO formal kernel.",
      },
      symmetry: {
        path: "symmetry",
        title: "GALO Symmetry — Automorphisms, Orbits, and Burnside",
        description:
          "Explore the distinct PLUS and STAR symmetry layers, unit automorphisms, affine boundaries, orbits, stabilizers, Burnside counts, and cross-level homomorphisms.",
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
        title: "GALO AI — проверяемая модель мира для частного ИИ и промышленной автономности",
        description:
          "Архитектура общего назначения для проверяемой модели мира и автономности, первый продукт которой — гарантия промышленных решений. Ограниченные результаты обучения опубликованы вместе с отрицательными; валидность на данных партнёра не доказана, промышленная автономность не разрешена.",
      },
      simple: {
        path: "simple",
        title: "GALO AI простыми словами — без терминов и формул",
        description:
          "GALO так, как объясняют другу: знакомая ситуация, с которой всё начинается, что мы с ней делаем, при чём тут таблица, что это даёт и чего мы пока не обещаем.",
      },
      investors: {
        path: "investors",
        title: "GALO AI для инвесторов — что есть, чего нет и как это проверить",
        description:
          "Нетехнический разбор GALO: проблема на языке денег, место объявленного слоя в системе, что работает сегодня, шесть рисков с проверками и путь due diligence, который читатель может пройти без нас.",
      },
      hub71: {
        path: "hub71",
        title: "Досье заявки GALO AI — строки оценки, обязательства и границы",
        description:
          "Досье заявки, подготовленное для оценки: двенадцать строк текущего состояния, шесть из них отрицательные; четыре довода о региональном соответствии с их пределами; двенадцать месяцев обязательств, у каждого — условие невыполнения; и шесть вопросов, по которым мы ожидаем давления. Аффилиация с Hub71 не заявляется и не подразумевается.",
      },
      industry: {
        path: "industry",
        title: "GALO AI для промышленности — гарантия решений вокруг существующих цифровых двойников",
        description:
          "Первый коммерческий продукт: ограниченная оценка одного промышленного процесса — только чтение, только рекомендации. Где GALO стоит над цифровым двойником, семь шагов одного оценённого решения, лестница автономности со всеми её шлюзами и плановые ценовые гипотезы, которые не являются прайс-листом.",
      },
      audit: {
        path: "audit",
        title: "GALO AI для аудиторов — что внешний проверяющий действительно может установить",
        description:
          "Четыре уровня проверяемости, пять полей каждого публикуемого утверждения, как читать статус и не быть введённым в заблуждение, восемь вопросов проверяющего, воспроизведение в пять шагов и границы этого сайта.",
      },
      theory: {
        path: "theory",
        title: "Теория GALO для начинающих — от состояний к верифицированному исполнению",
        description:
          "Пошаговое введение в GALO: конечные состояния, PLUS и STAR, типизированные переходы, 560 координат, программы, симметрии, отображения уровней, runtime и границы доказательств.",
      },
      thinking: {
        path: "thinking",
        title: "Как мыслит GALO — процедура принятия решения по шагам",
        description:
          "Схемы мышления GALO: девять этапов одной мысли, пять шлюзов отказа, сужение от 1 204 кандидатов до одного, одношаговый цикл состояния и то, что переносится между запусками.",
      },
      "vs-llm": {
        path: "vs-llm",
        title: "GALO AI и языковые модели — в чём именно разница",
        description:
          "Чем GALO отличается от языковой модели: состояние, проверка, воспроизведение, локальное исправление и широта охвата, — и где он стоит относительно двенадцати названных семейств систем, которые тоже пытаются построить искусственный интеллект.",
      },
      math: {
        path: "math",
        title: "Математика GALO — таблицы Кэли PLUS и STAR",
        description:
          "Изучите конечные таблицы Кэли PLUS и STAR, точные формулы, ориентации исполнения и раскрытые границы формального ядра GALO.",
      },
      symmetry: {
        path: "symmetry",
        title: "Симметрии GALO — автоморфизмы, орбиты и лемма Бёрнсайда",
        description:
          "Раздельный анализ симметрий PLUS и STAR: автоморфизмы, аффинные границы, орбиты, стабилизаторы, лемма Бёрнсайда и межуровневые гомоморфизмы.",
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
        title: "GALO AI — 可验证的世界模型，面向私有 AI 与工业自主",
        description:
          "一套通用的可验证世界模型与自主性架构，其第一个产品是工业决策保障。有限范围的学习结果连同负面结果一并公开；由合作方掌控的有效性尚未证明，工业自主性也未获授权。",
      },
      simple: {
        path: "simple",
        title: "用大白话说 GALO AI — 没有术语，没有公式",
        description:
          "像跟朋友解释那样讲 GALO：一个你早就熟悉的情境、我们究竟拿它怎么办、为什么偏偏是一张表、这能带来什么，以及我们还不能承诺什么。",
      },
      investors: {
        path: "investors",
        title: "面向投资人的 GALO AI — 有什么、没有什么、怎么核实",
        description:
          "不含数学的 GALO 说明：用钱来讲的问题、这一声明层该放在哪里、今天真正在跑的东西、六项风险及其检验方式，以及一条读者无需我们配合就能自己走完的尽调路径。",
      },
      hub71: {
        path: "hub71",
        title: "GALO AI 申请档案 — 评估条目、里程碑与边界",
        description:
          "为评估而准备的申请档案：十二条现状条目，其中六条为否定；四项区域契合主张，各附其限度；十二个月的承诺，每一项都带有未达成的判定条件；以及我们预计会被追问的六个问题。不声称也不暗示与 Hub71 存在任何隶属关系。",
      },
      industry: {
        path: "industry",
        title: "GALO AI 面向工业 — 让现有数字孪生旁的决策站得住",
        description:
          "第一个商业产品：针对一个工业流程的有限评估，只读、只给建议。GALO 在数字孪生之上处于什么位置、一次被评估的决策的七个步骤、带全部闸门的自主性阶梯，以及并非价目表的规划性价格假设。",
      },
      audit: {
        path: "audit",
        title: "面向审计者的 GALO AI — 外部人究竟能核实到什么",
        description:
          "四级可核实性、每一条公开主张的五个字段、如何读状态而不被误导、审阅者的八个问题、五步复现流程，以及本站的边界。",
      },
      theory: {
        path: "theory",
        title: "GALO 入门理论 — 从状态到可验证执行",
        description:
          "逐步理解 GALO：有限状态、PLUS 与 STAR、类型化转换、560 个坐标、程序、对称性、层级映射、运行时范围与证据边界。",
      },
      thinking: {
        path: "thinking",
        title: "GALO 如何思考 — 逐阶段拆解的决策流程",
        description:
          "GALO 的思维图解：一次思考的九个阶段、五道拒绝闸门、从 1,204 个候选收敛到一个、单步状态循环，以及在两次运行之间被带走的东西。",
      },
      "vs-llm": {
        path: "vs-llm",
        title: "GALO AI 与语言模型 — 究竟差别在哪里",
        description:
          "GALO 与语言模型的差别：状态、检查方式、重放、局部修正与覆盖广度；以及它相对于另外十二类同样在尝试造出人工智能的系统处在什么位置。",
      },
      math: {
        path: "math",
        title: "GALO 数学 — PLUS 与 STAR 凯莱表",
        description: "探索有限的 PLUS 与 STAR 凯莱表、精确公式、执行方向以及 GALO 形式内核已披露的边界。",
      },
      symmetry: {
        path: "symmetry",
        title: "GALO 对称性 — 自同构、轨道与伯恩赛德引理",
        description: "分别探索 PLUS 与 STAR 的对称层、单位自同构、仿射边界、轨道、稳定子、伯恩赛德计数和跨层同态。",
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
        title: "GALO AI — نموذج عالم قابل للتحقّق: ذكاء اصطناعي خاصّ واستقلالية صناعية",
        description:
          "بنية عامّة الغرض لنموذج عالم قابل للتحقّق وللاستقلالية، منتجها الأول ضمان القرار الصناعي. تُنشر نتائج التعلّم المحدودة النطاق مع نتائجها السلبية؛ والصلاحية الخاضعة لسيطرة الشريك غير مُثبتة، والاستقلالية الإنتاجية غير مأذون بها.",
      },
      simple: {
        path: "simple",
        title: "GALO AI بكلام بسيط — بلا مصطلحات ولا صيغ",
        description:
          "شرح GALO كما تشرحه لصديق: الموقف المألوف الذي يبدأ منه كل شيء، وما الذي نفعله حياله، ولماذا جدول تحديدًا، وماذا يمنحك ذلك، وما الذي لا نستطيع الوعد به بعد.",
      },
      investors: {
        path: "investors",
        title: "GALO AI للمستثمرين — ما هو قائم وما ليس قائمًا وكيف يُتحقَّق منه",
        description:
          "عرض غير تقني لـ GALO: المشكلة بلغة المال، وأين تقع الطبقة المعلنة، وما الذي يعمل اليوم، وستة مخاطر مع اختباراتها، ومسار عناية واجبة يستطيع القارئ سلوكه دوننا.",
      },
      hub71: {
        path: "hub71",
        title: "ملف طلب GALO AI — بنود التقييم والالتزامات والحدود",
        description:
          "ملف طلب أُعدّ للتقييم: اثنا عشر بندًا تصف الوضع الراهن، ستّة منها سلبية؛ وأربع دعاوى للملاءمة الإقليمية مع حدودها؛ واثنا عشر شهرًا من الالتزامات، لكلٍّ منها شرط الإخفاق؛ والأسئلة الستّة التي نتوقّع أن نُساءل عنها. لا نَدّعي ولا نُلمّح إلى أي ارتباط بـ Hub71.",
      },
      industry: {
        path: "industry",
        title: "GALO AI للصناعة — قرارٌ يمكن الدفاع عنه إلى جانب التوائم الرقمية القائمة",
        description:
          "المنتج التجاري الأول: تقييم محدود لسير عمل صناعي واحد، بالقراءة فقط وبصفة استشارية. أين يقف GALO فوق التوأم الرقمي، والخطوات السبع لقرار مُقيَّم، وسلّم الاستقلالية ببواباته كلّها، وفرضيات تسعير تخطيطية ليست قائمة أسعار.",
      },
      audit: {
        path: "audit",
        title: "GALO AI للمدققين — ما الذي يستطيع مراجع خارجي إثباته فعلًا",
        description:
          "أربع درجات لقابلية التحقق، والحقول الخمسة لكل ادعاء منشور، وكيف يُقرأ الحالة دون تضليل، وثمانية أسئلة للمراجع، وإعادة إنتاج من خمس خطوات، وحدود هذا الموقع.",
      },
      theory: {
        path: "theory",
        title: "نظرية GALO للمبتدئين — من الحالات إلى التنفيذ القابل للتحقق",
        description:
          "شرح تدريجي لـ GALO: الحالات المنتهية وPLUS وSTAR والانتقالات محددة النوع و560 إحداثيًا والبرامج والتناظرات وخرائط المستويات ونطاق التشغيل وحدود الأدلة.",
      },
      thinking: {
        path: "thinking",
        title: "كيف يفكّر GALO — إجراء اتخاذ القرار مرحلةً مرحلة",
        description:
          "مخططات التفكير في GALO: مراحل الفكرة التسع، وبوابات الرفض الخمس، والتضييق من 1,204 مرشحًا إلى واحد، ودورة الحالة ذات الخطوة الواحدة، وما يُحمل بين التشغيلات.",
      },
      "vs-llm": {
        path: "vs-llm",
        title: "GALO AI ونماذج اللغة — أين يكمن الفرق فعلًا",
        description:
          "كيف يختلف GALO عن نموذج اللغة — الحالة وطريقة الفحص وإعادة التشغيل والتصحيح الموضعي واتساع النطاق — وأين يقف من اثنتي عشرة عائلة مسمّاة من الأنظمة تحاول هي الأخرى بناء ذكاء اصطناعي.",
      },
      math: {
        path: "math",
        title: "رياضيات GALO — جدولا كايلي PLUS وSTAR",
        description:
          "استكشف جدولي كايلي المحدودين PLUS وSTAR، والصيغ الدقيقة، واتجاهات التنفيذ، والحدود المعلنة للنواة الشكلية في GALO.",
      },
      symmetry: {
        path: "symmetry",
        title: "تناظرات GALO — التشاكلات الذاتية والمدارات ولمّة برنسايد",
        description:
          "استكشف طبقتي تناظر PLUS وSTAR كلًا على حدة، والتشاكلات الذاتية، والحدود الأفينية، والمدارات، والمثبتات، وعدّ برنسايد، والتشاكلات بين المستويات.",
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

// Term pages are generated one per concept. The slug list is derived from the same
// source of truth the app uses; tests assert the two derivations agree.
const conceptSource = await readFile(join(projectRoot, "src/content/theory.ts"), "utf8");
const conceptTerms = [...conceptSource.matchAll(/^\s{4}term: "(.+?)",$/gm)].map((match) => match[1]);
const termSlug = (term) =>
  term
    .toLowerCase()
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const termPageTitles = {
  en: (term) => [`${term} — GALO AI`, `What "${term}" means inside GALO, shown on a live table from the tower.`],
  ru: (term) => [`${term} — GALO AI`, `Что «${term}» значит внутри GALO — на живой таблице из башни.`],
  zh: (term) => [`${term} — GALO AI`, `“${term}”在 GALO 内部指什么——用塔中的一张实时表来说明。`],
  ar: (term) => [`${term} — GALO AI`, `ما الذي يعنيه «${term}» داخل GALO، معروضًا على جدول حي من البرج.`],
};

for (const [locale, config] of Object.entries(locales)) {
  for (const term of conceptTerms) {
    const [title, description] = termPageTitles[locale](term);
    config.pages[`term-${termSlug(term)}`] = { path: `term/${termSlug(term)}`, title, description };
  }
}

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
