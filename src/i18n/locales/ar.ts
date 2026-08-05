import type { TranslationDictionary } from "../translations";
import { mathAr } from "./math";
import { releaseAr } from "./releaseAr";
import { theoryAr } from "./theoryAr";
import { academicArExtra } from "./academic";
import { comparisonAr } from "./comparison";
import { termsAr } from "./terms";
import { visualsAr } from "./visuals";

export const ar: TranslationDictionary = {
  ...mathAr,
  ...releaseAr,
  ...theoryAr,
  ...termsAr,
  ...academicArExtra,
  ...comparisonAr,
  ...visualsAr,
  Language: "اللغة",
  "Skip to content": "الانتقال إلى المحتوى",
  "GALO AI home": "الصفحة الرئيسية لـ GALO AI",
  "Primary navigation": "التنقّل الرئيسي",
  "Mobile navigation": "التنقّل على الأجهزة المحمولة",
  "Open navigation": "فتح قائمة التنقّل",
  "Close navigation": "إغلاق قائمة التنقّل",
  "Footer links": "روابط التذييل",
  "Request evaluation": "طلب تقييم",
  "Why GALO": "لماذا GALO",
  Architecture: "البنية المعمارية",
  Receipt: "إيصال التنفيذ",
  Evidence: "الأدلة",
  Evaluation: "التقييم",
  Founder: "المؤسس",
  "Abu Dhabi": "أبوظبي",
  Privacy: "الخصوصية",
  Home: "الرئيسية",
  "GALO technical evaluation": "التقييم التقني لـ GALO",
  "Standalone research architecture for explicit world state and bounded, replayable execution.":
    "بنية بحثية مستقلة لحالة عالم صريحة وتنفيذ مقيّد قابل لإعادة التشغيل.",
  "Working bounded prototype. Persistent learning, external operational gain, General AI, commercial traction, and programme selection are not claimed.":
    "نموذج أولي عامل ومحدود النطاق. لا ندّعي وجود تعلّم مستديم، أو مكسب تشغيلي خارجي، أو ذكاء اصطناعي عام، أو زخم تجاري، أو اختيار ضمن أي برنامج.",
  "Founder & Chief Architect": "المؤسس وكبير مهندسي البنية",
  "Ruslan originated the GALO multipolar architecture, designed its frozen PLUS/STAR kernel and graph-free World Atlas model, and directed a multi-stage experimental programme across explicit memory, adaptive resolution, local revision, candidate-universe control, and deterministic replay. He established a red-team discipline that requires over-stated claims to be withdrawn or downgraded when stronger controls fail.":
    "ابتكر رسلان بنية GALO متعددة الأقطاب، وصمّم نواتها المجمّدة PLUS/STAR ونموذج World Atlas غير المعتمد على الرسوم البيانية، وقاد برنامجًا تجريبيًا متعدد المراحل شمل الذاكرة الصريحة، والدقة التكيفية، والمراجعة الموضعية، والتحكم في كون المرشّحات، وإعادة التشغيل الحتمية. كما أرسى منهجية فريق أحمر تفرض سحب الادعاءات المبالغ فيها أو خفض درجتها عندما تفشل الضوابط الأقوى.",
  "Plans to relocate to Abu Dhabi and build the operating team there if selected.":
    "يخطط للانتقال إلى أبوظبي وبناء فريق التشغيل هناك في حال الاختيار.",

  "RESEARCH ARCHITECTURE FOR INSPECTABLE AGENT STATE": "بنية بحثية لحالة وكيل قابلة للفحص",
  "AI agents need a world state they can inspect, revise, and replay.":
    "تحتاج أنظمة الذكاء الاصطناعي الوكيلة إلى حالة عالم تستطيع فحصها ومراجعتها وإعادة تشغيلها.",
  "GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed replay. Its current release verifies a finite execution layer; persistent learning and external performance remain unproven.":
    "GALO هي بنية بحثية مستقلة لحالة عالم صريحة، وتنفيذ محدد الأنواع، وإعادة تشغيل مدعومة بإيصالات التنفيذ. يتحقق إصدارها الحالي من طبقة تنفيذ محدودة؛ أما التعلّم المستديم والأداء الخارجي فلا يزالان غير مثبتين.",
  "Current project status": "حالة المشروع الحالية",
  "Working bounded prototype": "نموذج أولي عامل ومحدود النطاق",
  "Pre-seed": "مرحلة ما قبل التمويل الأولي",
  "Founder-led": "يقوده المؤسس",
  "Abu Dhabi relocation planned": "الانتقال إلى أبوظبي مخطط له",
  "Inspect a verified receipt": "فحص إيصال متحقَّق منه",
  "Request a technical evaluation": "طلب تقييم تقني",
  "Formal replay within a declared scope. General AI and external capability superiority are not claimed.":
    "إعادة تشغيل شكلية ضمن نطاق معلن. لا ندّعي تحقيق الذكاء الاصطناعي العام أو التفوق في القدرات الخارجية.",
  "Layered resolution and receipt visual": "تمثيل بصري لمستويات الدقة وإيصالات التنفيذ",
  "WORLD STATE / RESOLUTION": "حالة العالم / مستوى الدقة",
  "DECLARED SCOPE": "النطاق المعلَن",
  "BOUND HANDLE": "مقبض مرتبط",
  "WORK LEDGER": "سجل العمل",
  "Minimum sufficient level selected": "تم اختيار الحد الأدنى الكافي من الدقة",
  "Receipt chain intact": "سلسلة الإيصالات سليمة",
  "Verified current mechanics": "الآليات الحالية المتحقَّق منها",
  "Finite universe": "كون محدود",
  "1,204 commitments / 756 cells": "1,204 سجلًا مُثبّتًا / 756 خلية",
  "Bound execution": "تنفيذ مرتبط",
  "Membership proof + one-shot handle": "إثبات عضوية + مقبض أحادي الاستخدام",
  "Budget law": "قانون الميزانية",
  "Bounded action + atomic rollback": "إجراء مقيّد + تراجع ذري",
  "Receipt ledger": "سجل الإيصالات",
  "Work reconstructed from receipts": "إعادة بناء العمل من الإيصالات",

  "THE PROBLEM": "المشكلة",
  "Agentic AI is moving faster than its reasoning state can be governed.":
    "يتقدم الذكاء الاصطناعي الوكيلي أسرع من القدرة على حوكمة حالة استدلاله.",
  "Models can produce increasingly capable outputs, while the authoritative state behind long-running decisions can remain implicit, transient, or difficult to revise locally.":
    "يمكن للنماذج إنتاج مخرجات متزايدة القدرة، بينما قد تظل الحالة المرجعية وراء القرارات طويلة الأمد ضمنية أو عابرة أو صعبة المراجعة موضعيًا.",
  "Implicit world state": "حالة عالم ضمنية",
  "A system can answer without exposing the durable model behind the answer.":
    "يمكن للنظام تقديم إجابة من دون إظهار النموذج المستديم الكامن وراءها.",
  "Memory drift": "انجراف الذاكرة",
  "Prompts, retrieved context, and memory updates can alter behaviour without a discrete, inspectable state transition.":
    "قد تغيّر المطالبات والسياق المسترجع وتحديثات الذاكرة السلوك من دون انتقال حالة منفصل وقابل للفحص.",
  "Premature collapse": "الاختزال المبكر",
  "Several plausible explanations can be compressed into one output before evidence warrants a unique decision.":
    "قد تُختزل عدة تفسيرات معقولة في مخرج واحد قبل أن تبرر الأدلة قرارًا وحيدًا.",
  "Broad correction": "تصحيح واسع النطاق",
  "A local counterexample may require a broad prompt, memory, or model change that affects unrelated behaviour.":
    "قد يتطلب مثال مضاد موضعي تعديلًا واسعًا للمطالبة أو الذاكرة أو النموذج، بما يؤثر في سلوك غير ذي صلة.",

  ARCHITECTURE: "البنية المعمارية",
  "Separate the verified execution slice from the target world-model loop.":
    "افصل شريحة التنفيذ المتحقَّق منها عن حلقة نموذج العالم المستهدفة.",
  "The current release verifies bounded local mechanics within the declared finite scope. The wider architecture specifies how explicit state, local revision, and adaptive search should connect once the open controls are closed.":
    "يتحقق الإصدار الحالي من آليات موضعية مقيّدة ضمن النطاق المحدود المعلن. وتحدد البنية الأوسع كيفية ربط الحالة الصريحة والمراجعة الموضعية والبحث التكيفي بعد إغلاق الضوابط المفتوحة.",
  "Explicit World Atlas": "World Atlas صريح",
  "The architecture specifies objects, events, alternative hypotheses, evidence, and revisions as first-class state. A trained Atlas is not present.":
    "تحدد البنية تمثيل الكائنات والأحداث والفرضيات البديلة والأدلة والمراجعات بوصفها عناصر حالة من الدرجة الأولى. لا يوجد Atlas مدرَّب.",
  "Minimal sufficient resolution": "الحد الأدنى الكافي من الدقة",
  "Designed to increase reasoning resolution only when a lower-dimensional representation loses a task-relevant distinction.":
    "مصممة لزيادة دقة الاستدلال فقط عندما يفقد تمثيل أقل أبعادًا تمييزًا ذا صلة بالمهمة.",
  "Localized revision": "مراجعة موضعية",
  "Designed so a counterexample can invalidate an affected map or assumption without forcing a global reset.":
    "مصممة بحيث يمكن لمثال مضاد إبطال خريطة أو افتراض متأثر من دون فرض إعادة ضبط شاملة.",
  "Typed execution": "تنفيذ محدد الأنواع",
  "The current bounded slice admits actions through typed contracts and records their execution through receipts.":
    "تقبل الشريحة الحالية المقيّدة الإجراءات من خلال عقود محددة الأنواع، وتسجل تنفيذها بواسطة الإيصالات.",
  "Constitutional verification": "تحقق دستوري",
  "The architectural proposal separates adaptive ordering from formal admission. Persistent adaptive ordering remains in development.":
    "يفصل المقترح المعماري بين الترتيب التكيفي والقبول الشكلي. ويظل الترتيب التكيفي المستديم قيد التطوير.",
  "The verifier is not the whole product. It is the constitutional layer intended to protect the wider adaptive architecture.":
    "أداة التحقق ليست المنتج بأكمله. فهي الطبقة الدستورية المقصود منها حماية البنية التكيفية الأوسع.",
  "CURRENT VERIFIED SLICE": "الشريحة الحالية المتحقَّق منها",
  "Finite, typed, receipt-backed execution": "تنفيذ محدود، محدد الأنواع، ومدعوم بالإيصالات",
  "Committed finite universe": "كون محدود مُثبّت",
  "Bound executable handle": "مقبض تنفيذ مرتبط",
  "Budgeted one-shot action": "إجراء أحادي الاستخدام ضمن ميزانية",
  "Execution receipts": "إيصالات التنفيذ",
  "Work ledger": "سجل العمل",
  "TARGET ARCHITECTURE · IN DEVELOPMENT": "البنية المستهدفة · قيد التطوير",
  "Explicit state, local revision, adaptive search": "حالة صريحة، ومراجعة موضعية، وبحث تكيفي",
  "Authenticated observation": "ملاحظة موثَّقة",
  "World Atlas state": "حالة World Atlas",
  "Task decomposition": "تفكيك المهمة",
  "Multi-level ProgramIR": "ProgramIR متعدد المستويات",
  "Local revision": "مراجعة موضعية",
  "Persistent policy": "سياسة مستديمة",
  "Revision loop": "حلقة المراجعة",
  "A trained Atlas is not present. Observation-conditioned structural reasoning and persistent learning are not implemented in the current release.":
    "لا يوجد Atlas مدرَّب. الاستدلال البنيوي المشروط بالملاحظة والتعلّم المستديم غير منفّذين في الإصدار الحالي.",
  "MINIMAL SUFFICIENT RESOLUTION": "الحد الأدنى الكافي من الدقة",
  "Open only the level needed to preserve a task-relevant distinction.":
    "افتح فقط المستوى اللازم للحفاظ على تمييز ذي صلة بالمهمة.",
  "binary distinction": "تمييز ثنائي",
  "third alternative": "بديل ثالث",
  "directional relation": "علاقة اتجاهية",
  "additional resolution": "دقة إضافية",
  "higher-order distinction": "تمييز من رتبة أعلى",
  "maximum current level": "أعلى مستوى حالي",
  selected: "محدّد",
  "More poles are not automatically better.": "زيادة عدد الأقطاب ليست أفضل تلقائيًا.",
  "ARCHITECTURE PRINCIPLE": "مبدأ معماري",
  "Local revision, not global reset": "مراجعة موضعية، لا إعادة ضبط شاملة",
  "Map A": "الخريطة A",
  "Map B": "الخريطة B",
  "Map C": "الخريطة C",
  unchanged: "دون تغيير",
  "counterexample applied": "طُبّق مثال مضاد",
  "Designed behaviour. External validation remains a target milestone.":
    "سلوك مصمم على مستوى البنية. ويظل التحقق الخارجي معلمًا مستهدفًا.",

  "RECORDED RECEIPT": "إيصال مسجّل",
  "Inspect the execution state, not a staged answer.": "افحص حالة التنفيذ، لا إجابة معدّة مسبقًا.",
  "This deterministic walkthrough uses sanitized identifiers from the current direct selfcheck. It does not generate a semantic answer and it does not adapt to the input observation.":
    "يستخدم هذا العرض الحتمي معرّفات منقحة مأخوذة من الفحص الذاتي المباشر الحالي. وهو لا يولّد إجابة دلالية ولا يتكيف مع الملاحظة المُدخلة.",
  "STATIC JSON · NO BACKEND": "STATIC JSON · بلا واجهة خلفية",
  "Receipt walkthrough modes": "أوضاع استعراض الإيصال",
  "Recorded receipt": "إيصال مسجّل",
  "Target learning loop": "حلقة التعلّم المستهدفة",
  "Receipt steps": "خطوات الإيصال",
  "Show step {number}: {label}": "عرض الخطوة {number}: {label}",
  STEP: "الخطوة",
  Mode: "النمط",
  "deterministic / client-side": "حتمي / على جانب العميل",
  "Sanitized receipt payload": "حمولة إيصال منقحة",
  "Replaying…": "جارٍ إعادة التشغيل…",
  "Replay again": "إعادة التشغيل مرة أخرى",
  "Replay receipt": "إعادة تشغيل الإيصال",
  "Next step": "الخطوة التالية",
  Reset: "إعادة ضبط",
  "IN DEVELOPMENT": "قيد التطوير",
  "From source custody to partner-owned evaluation": "من حفظ عهدة المصدر إلى تقييم يملكه الشريك",
  "These components describe the next research contour. They are intentionally separated from the recorded current receipt.":
    "تصف هذه المكونات المسار البحثي التالي. وقد فُصلت عمدًا عن الإيصال الحالي المسجّل.",
  "Controlled architecture walkthrough — not a live model, grounded reasoning demo, or external benchmark.":
    "عرض مضبوط للبنية المعمارية — وليس نموذجًا حيًا، ولا عرضًا لاستدلال مرتكز على ملاحظات خارجية، ولا اختبارًا معياريًا خارجيًا.",
  "Public observation envelope recorded": "تم تسجيل مغلف الملاحظة العام",
  "Finite candidate universe committed": "تم تثبيت كون محدود للمرشّحات",
  "Executable handle bound to universe membership": "تم ربط مقبض التنفيذ بعضوية الكون",
  "One-shot action executed under budget": "نُفّذ إجراء أحادي الاستخدام ضمن الميزانية",
  "Receipt-derived work ledger resolved": "حُلَّ سجل العمل المشتق من الإيصالات",
  "Terminal result preserved with a boundary": "حُفظت النتيجة النهائية مع حد معلَن",
  "Authenticated external source": "مصدر خارجي موثَّق",
  "Observation-conditioned admissibility": "مقبولية مشروطة بالملاحظة",
  "Oracle-free action selection": "اختيار إجراء من دون أوراكل",
  "Multi-step proof state": "حالة إثبات متعددة الخطوات",
  "Persistent policy sidecar": "وحدة جانبية لسياسة مستديمة",
  "Partner-grade evaluator": "مقيّم بمستوى مناسب للشركاء",

  EVIDENCE: "الأدلة",
  "Evidence, scoped precisely.": "الأدلة، بنطاق محدد بدقة.",
  "The numbers below describe formal inventory and release reproducibility. None is presented as a measure of intelligence, customer value, or external operational gain.":
    "تصف الأرقام أدناه المخزون الشكلي وقابلية إعادة إنتاج الإصدار. ولا يُقدَّم أي منها بوصفه مقياسًا للذكاء أو قيمة العملاء أو المكسب التشغيلي الخارجي.",
  "Open evidence page": "فتح صفحة الأدلة",
  "CURRENT RELEASE DEMONSTRATES": "ما يثبته الإصدار الحالي",
  "A closed mechanical chain with explicit terminal boundaries.": "سلسلة ميكانيكية مغلقة ذات حدود نهائية صريحة.",
  "Formal transition records": "سجلات انتقال شكلية",
  "Frozen L1–L7 kernel. An execution alphabet, not semantic concepts.":
    "نواة L1–L7 مجمّدة. وهي أبجدية تنفيذ وليست مفاهيم دلالية.",
  "Committed candidate records": "سجلات مرشّحات مُثبّتة",
  "Across 756 coverage cells in the declared binary, one-step scope.":
    "موزعة على 756 خلية تغطية ضمن النطاق الثنائي أحادي الخطوة المعلن.",
  "Stored regression checks": "اختبارات انحدار محفوظة",
  "Passed in the declared release environment; not an intelligence metric.":
    "نجحت في بيئة الإصدار المعلنة؛ وهي ليست مقياسًا للذكاء.",
  "Finite committed candidate universe": "كون مرشّحات محدود ومُثبّت",
  "Universe-membership-bound executable handles": "مقابض تنفيذ مرتبطة بعضوية الكون",
  "Single-use execution with bounded budget": "تنفيذ أحادي الاستخدام ضمن ميزانية محددة",
  "Atomic candidate and budget rollback": "تراجع ذري للمرشّح والميزانية",
  "Receipt-derived occurrence work accounting": "احتساب عمل مشتق من إيصالات الوقوع",
  "Deterministic replay within the declared formal scope": "إعادة تشغيل حتمية ضمن النطاق الشكلي المعلن",
  "Authenticated external-source provenance": "منشأ موثَّق لمصدر خارجي",
  "Observation-conditioned structural reasoning": "استدلال بنيوي مشروط بالملاحظة",
  "External operational gain": "مكسب تشغيلي خارجي",
  "Persistent policy learning": "تعلّم مستديم للسياسة",
  "Trained World Atlas": "World Atlas مدرَّب",
  "General AI": "الذكاء الاصطناعي العام",
  "CLAIM DISCIPLINE": "انضباط الادعاءات",
  "What is verified — and what is not.": "ما تم التحقق منه — وما لم يتم.",
  "A useful research system must expose the edge of its evidence. GALO treats BOUNDARY and claim withdrawal as product behaviour, not footnotes.":
    "يجب أن يكشف النظام البحثي المفيد حدود أدلته. يتعامل GALO مع BOUNDARY وسحب الادعاء بوصفهما سلوكًا للمنتج، لا ملاحظات هامشية.",
  CURRENT: "الحالي",
  "Verified within declared scope": "متحقَّق منه ضمن النطاق المعلن",
  "OPEN BOUNDARIES": "الحدود المفتوحة",
  "Not implemented, started, or proven": "غير منفّذ أو غير مبدوء أو غير مثبت",
  "Claim discipline is part of the product.": "انضباط الادعاءات جزء من المنتج.",

  "DESIGN-PARTNER EVALUATION": "تقييم مع شريك تصميم",
  "Test the architecture on a bounded sequential decision problem.": "اختبر البنية على مسألة قرار تسلسلية محدودة.",
  "GALO is seeking partner-owned sequential data and a falsifiable evaluation environment where explicit state, late evidence, local revision, and deterministic replay matter.":
    "يبحث GALO عن بيانات تسلسلية يملكها الشريك وبيئة تقييم قابلة للاختبار والتفنيد، تكون فيها الحالة الصريحة والأدلة المتأخرة والمراجعة الموضعية وإعادة التشغيل الحتمية عوامل ذات أهمية.",
  "Request a 25-minute evaluation": "طلب جلسة تقييم لمدة 25 دقيقة",
  "Review the founder plan": "مراجعة خطة المؤسس",
  "Review the evidence boundary": "مراجعة حدود الأدلة",
  "Public evaluation contact is pending founder confirmation.": "جهة الاتصال العامة للتقييم بانتظار تأكيد المؤسس.",
  "PROPOSED EVALUATION INPUT": "مدخلات التقييم المقترحة",
  "Partner-owned bounded event stream": "تدفق أحداث محدود يملكه الشريك",
  "Late evidence and competing hypotheses": "أدلة متأخرة وفرضيات متنافسة",
  "Explicit action costs": "تكاليف إجراءات صريحة",
  "Local revision requirement": "متطلب مراجعة موضعية",
  "Authenticated source custody": "عهدة مصدر موثَّقة",
  "Preregistered evaluator and replay": "مقيّم وإعادة تشغيل مسجلان مسبقًا",
  "TERMINAL OUTPUT": "المخرج النهائي",
  "Evidence-backed result / portfolio / BOUNDARY": "نتيجة مدعومة بالأدلة / محفظة / BOUNDARY",

  "COMMERCIAL WEDGE": "مدخل تجاري تدريجي",
  "A staged route from technical evaluation to private deployment.": "مسار مرحلي من التقييم التقني إلى النشر الخاص.",
  "The commercial path is planned, not traction. No customers, revenue, pilots, or partner commitments are represented on this site.":
    "المسار التجاري خطة مستقبلية، وليس دليلًا على وجود زخم. لا يعرض هذا الموقع أي عملاء أو إيرادات أو تجارب رائدة أو التزامات من شركاء.",
  "Technical architecture evaluation": "تقييم تقني للبنية المعمارية",
  "Partner world-model pilot": "تجربة شريك لنموذج العالم",
  "Private GALO Runtime deployment": "نشر خاص لـ GALO Runtime",
  "Runtime, SDK, and domain Atlas licensing": "ترخيص Runtime وSDK وAtlas المجال",
  "Sovereign and enterprise AI": "الذكاء الاصطناعي السيادي والمؤسسي",
  "Long-running systems where the authoritative decision state must be inspected and replayed.":
    "أنظمة طويلة الأمد يجب فحص حالة القرار المرجعية فيها وإعادة تشغيلها.",
  "Scientific and industrial workflows": "مسارات العمل العلمية والصناعية",
  "Bounded sequential evidence with competing hypotheses and expensive corrections.":
    "أدلة تسلسلية محدودة، مع فرضيات متنافسة وتصحيحات مرتفعة التكلفة.",
  "Regulated decision support": "دعم القرار المنظّم",
  "Private evaluation settings that require disclosed scope and explicit failure boundaries.":
    "بيئات تقييم خاصة تتطلب نطاقًا معلنًا وحدود فشل صريحة.",

  ROADMAP: "خارطة الطريق",
  "From verified mechanics to externally grounded learning.":
    "من آليات متحقَّق منها إلى تعلّم مؤسَّس على مصادر خارجية.",
  "Each milestone closes a dependency before the next capability is authorized.":
    "تغلق كل مرحلة اعتمادًا قبل التصريح بالقدرة التالية.",
  "Authenticate the source": "وثّق المصدر",
  "Signed source custody and a pinned external trust root.": "عهدة مصدر موقّعة وجذر ثقة خارجي مُثبّت.",
  "Close selection": "أغلق حلقة الاختيار",
  "Oracle-free candidate selection with noninterference receipts.":
    "اختيار مرشّح من دون أوراكل، مع إيصالات لعدم التداخل.",
  "Condition the structure": "اربط البنية بالملاحظة",
  "Observation-derived admissibility and multi-step proof state.":
    "مقبولية مشتقة من الملاحظة وحالة إثبات متعددة الخطوات.",
  "Evaluate externally": "قيّم خارجيًا",
  "Partner-owned data, preregistered outcomes, and private evaluation.":
    "بيانات يملكها الشريك، ونتائج مسجلة مسبقًا، وتقييم خاص.",
  "Authorize learning": "صرّح بالتعلّم",
  "Persistent policy sidecar with exact fallback only after prior controls close.":
    "وحدة جانبية لسياسة مستديمة، مع رجوع مطابق لا يُفعّل إلا بعد إغلاق الضوابط السابقة.",

  "WHY ABU DHABI": "لماذا أبوظبي",
  "Abu Dhabi is GALO’s planned operating base — not a satellite office.":
    "أبوظبي هي قاعدة التشغيل المخطط لها لـ GALO — وليست مكتبًا فرعيًا.",
  "The next stage needs technical evaluation partners, company formation, focused hiring, and access to a serious AI infrastructure ecosystem in one place.":
    "تحتاج المرحلة التالية إلى شركاء للتقييم التقني، وتأسيس الشركة، وتوظيف مركز، والوصول إلى منظومة جادة للبنية التحتية للذكاء الاصطناعي في مكان واحد.",
  "AI ecosystem": "منظومة الذكاء الاصطناعي",
  "Access to research, compute, engineering, and infrastructure relationships relevant to a private technical evaluation.":
    "الوصول إلى علاقات بحثية وحوسبية وهندسية وبنية تحتية ذات صلة بتقييم تقني خاص.",
  "Market access": "الوصول إلى السوق",
  "Proximity to enterprise, government, and sovereign-AI teams able to define bounded partner-owned settings.":
    "القرب من فرق المؤسسات والحكومات والذكاء الاصطناعي السيادي القادرة على تحديد بيئات محدودة يملكها الشريك.",
  "Company building": "بناء الشركة",
  "A base for incorporation, relocation, hiring, legal operations, finance, and the next fundraising evidence.":
    "قاعدة للتأسيس والانتقال والتوظيف والعمليات القانونية والتمويلية وبناء أدلة الجولة التالية.",
  "12-MONTH CONTRIBUTION PLAN": "خطة مساهمة لمدة 12 شهرًا",
  "Build the external-evidence layer from Abu Dhabi.": "بناء طبقة الأدلة الخارجية من أبوظبي.",
  "Relocate the founder and establish the operating company": "انتقال المؤسس وتأسيس الشركة التشغيلية",
  "Hire a founding systems engineer and research/evaluation engineer": "توظيف مهندس أنظمة مؤسس ومهندس للبحث والتقييم",
  "Release a private Runtime and World Atlas alpha": "إصدار نسخة Alpha خاصة من Runtime وWorld Atlas",
  "Complete two partner-grade technical evaluations": "إكمال تقييمين تقنيين بمستوى مناسب للشركاء",
  "Target one committed or paid pilot and prepare seed evidence":
    "استهداف تجربة رائدة واحدة ملتزم بها أو مدفوعة، وإعداد أدلة جولة التمويل الأولي",
  "No programme selection, partnership, or endorsement is implied.":
    "لا يُفهم من ذلك أي اختيار في برنامج أو شراكة أو تأييد.",

  "FOUNDER / ARCHITECT": "المؤسس / مهندس البنية",
  FOUNDER: "المؤسس",
  "Founder-led research, built with adversarial claim discipline.":
    "بحث يقوده المؤسس ومبني على انضباط صارم للاختبار المضاد للادعاءات.",
  RELOCATION: "الانتقال",
  "FOUNDING TEAM PLAN": "خطة الفريق المؤسس",
  "Systems engineering · Research/evaluation · Abu Dhabi partnerships":
    "هندسة الأنظمة · البحث والتقييم · شراكات أبوظبي",
  "NEXT CONVERSATION": "المحادثة التالية",
  "Evaluate the architecture on a bounded problem.": "قيّم البنية على مسألة محدودة.",
  "Bring partner-owned sequential data, a falsifiable outcome, and a setting where explicit state and replay matter.":
    "أحضر بيانات تسلسلية يملكها الشريك، ونتيجة قابلة للتفنيد، وبيئة تكون فيها الحالة الصريحة وإعادة التشغيل عاملين مهمين.",
  "Inspect the evidence first": "فحص الأدلة أولًا",
  "Inspect the recorded receipt": "فحص الإيصال المسجّل",

  "PUBLIC EVIDENCE LAYER": "طبقة الأدلة العامة",
  "This page separates implemented bounded mechanics from architectural targets and claims that remain unproven.":
    "تفصل هذه الصفحة الآليات المقيّدة المنفّذة عن الأهداف المعمارية والادعاءات التي لا تزال غير مثبتة.",
  "CURRENT RELEASE STATUS": "حالة الإصدار الحالي",
  "RELEASE FINGERPRINT": "بصمة الإصدار",
  "Bound to one immutable research archive.": "مرتبطة بأرشيف بحثي واحد غير قابل للتغيير.",
  "Metrics on this page are not blended with historical releases.":
    "لا تُدمج مقاييس هذه الصفحة مع الإصدارات التاريخية.",
  "Copy release fingerprint": "نسخ بصمة الإصدار",
  COPY: "نسخ",
  COPIED: "تم النسخ",
  "Exact public scope:": "النطاق العام الدقيق:",
  "finite, binary, one-step candidate execution across the declared L1–L7 tower. This is not the complete space of general reasoning.":
    "تنفيذ مرشّحات محدود وثنائي وأحادي الخطوة عبر برج L1–L7 المعلن. وهذا ليس الفضاء الكامل للاستدلال العام.",
  "CURRENT CAPABILITIES": "القدرات الحالية",
  "Implemented bounded mechanics": "آليات مقيّدة منفّذة",
  "CURRENT BOUNDARIES": "الحدود الحالية",
  "CLAIM MATRIX": "مصفوفة الادعاءات",
  "Every public claim has a status and a scope.": "لكل ادعاء عام حالة ونطاق.",
  "Architecture statements describe the design. Implemented and bounded statements describe the current release. They are not interchangeable.":
    "تصف عبارات البنية التصميم. وتصف العبارات المنفّذة والمقيّدة الإصدار الحالي. ولا يمكن استخدام إحداها بدل الأخرى.",
  "Public claim matrix": "مصفوفة الادعاءات العامة",
  "Public claim": "الادعاء العام",
  Status: "الحالة",
  "Source class": "فئة المصدر",
  architecture: "بنية معمارية",
  implemented: "مُنفّذ",
  bounded: "مقيّد",
  "in-development": "قيد التطوير",
  "not-proven": "غير مُثبت",
  "not-started": "لم يبدأ",
  "not-present": "غير موجود",
  "not-claimed": "غير مُدّعى",
  "GALO is a standalone research architecture for explicit world state and bounded, replayable execution.":
    "GALO هي بنية بحثية مستقلة لحالة عالم صريحة وتنفيذ مقيّد قابل لإعادة التشغيل.",
  "The architecture specifies a versioned World Atlas; a trained Atlas is not present.":
    "تحدد البنية World Atlas مُدارًا بالإصدارات؛ ولا يوجد Atlas مدرَّب.",
  "Current bounded actions use typed execution contracts and receipts.":
    "تستخدم الإجراءات المقيّدة الحالية عقود تنفيذ محددة الأنواع وإيصالات.",
  "Executable handles are bound to membership in a committed finite universe and are single-use.":
    "ترتبط مقابض التنفيذ بعضوية كون محدود مُثبّت، وهي أحادية الاستخدام.",
  "Work accounting is reconstructed from execution receipts within the current occurrence scope.":
    "يُعاد بناء احتساب العمل من إيصالات التنفيذ ضمن نطاق الوقوع الحالي.",
  "Persistent policy learning has not started.": "لم يبدأ التعلّم المستديم للسياسة.",
  "A trained Atlas is not present.": "لا يوجد Atlas مدرَّب.",
  "External operational gain is not proven.": "المكسب التشغيلي الخارجي غير مُثبت.",
  "General AI is not claimed.": "لا ندّعي تحقيق الذكاء الاصطناعي العام.",
  "Current theory reference": "مرجع النظرية الحالي",
  "Frozen kernel capability registry": "سجل قدرات النواة المجمّدة",
  "Theory and current release status": "النظرية وحالة الإصدار الحالي",
  "Current capability registry": "سجل القدرات الحالي",
  "Direct machine selfcheck": "الفحص الذاتي المباشر الآلي",
  "Current release status": "حالة الإصدار الحالي",
  "Current claim registry": "سجل الادعاءات الحالي",
  "Replay status": "حالة إعادة التشغيل",
  "Research archive policy": "سياسة أرشيف البحث",
  "Historical research materials may reflect earlier scopes, experiments, or metrics. They must not be combined with this release without an explicit provenance bridge.":
    "قد تعكس مواد البحث التاريخية نطاقات أو تجارب أو مقاييس سابقة. ويجب عدم دمجها مع هذا الإصدار من دون جسر منشأ صريح.",
  "Public-data policy": "سياسة البيانات العامة",
  "The raw engine, internal consolidate, private manifests, test fixtures, and source paths are not distributed through this website. Technical review material is sanitized before publication.":
    "لا يوزّع الموقع المحرك الخام أو حزمة التجميع الداخلية أو البيانات التعريفية الخاصة أو بيانات الاختبار الثابتة أو مسارات المصدر. وتُنقّح مواد المراجعة التقنية قبل نشرها.",

  PRIVACY: "الخصوصية",
  "A quiet, static website by default.": "موقع ثابت وهادئ افتراضيًا.",
  "GALO does not intentionally collect personal data through forms, analytics, advertising trackers, or cookies on this website.":
    "لا يجمع GALO عمدًا بيانات شخصية من خلال نماذج أو تحليلات أو أدوات تتبع إعلانية أو ملفات تعريف ارتباط على هذا الموقع.",
  "The hosting provider may process technical request logs for security and service delivery. If you choose an external email, Telegram, or social link after one is published, you leave this website and the destination service’s terms and privacy practices apply.":
    "قد يعالج مزود الاستضافة سجلات الطلبات التقنية لأغراض الأمن وتقديم الخدمة. وإذا استخدمت رابطًا خارجيًا للبريد الإلكتروني أو Telegram أو الشبكات الاجتماعية، فإنك تغادر هذا الموقع وتطبق شروط الخدمة الوجهة وممارسات الخصوصية الخاصة بها.",
  "Please do not send sensitive information through public channels.":
    "يرجى عدم إرسال معلومات حساسة عبر القنوات العامة.",
  "No analytics": "لا تحليلات",
  "No cookies": "لا ملفات تعريف ارتباط",
  "No forms": "لا نماذج",
  "No user accounts": "لا حسابات مستخدمين",
  "Page not found.": "الصفحة غير موجودة.",
  "The requested page is outside the current site boundary.": "الصفحة المطلوبة خارج الحدود الحالية للموقع.",
  "Return home": "العودة إلى الرئيسية",
  "View evidence": "عرض الأدلة",

  "GALO AI — Explicit World State and Replayable Execution": "GALO AI — حالة عالم صريحة وتنفيذ قابل لإعادة التشغيل",
  "GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed replay.":
    "GALO هي بنية بحثية مستقلة لحالة عالم صريحة، وتنفيذ محدد الأنواع، وإعادة تشغيل مدعومة بإيصالات التنفيذ.",
  "Evidence — GALO AI": "GALO AI — الأدلة وحدود الادعاءات",
  "Inspect GALO's implemented bounded mechanics, immutable release fingerprint, public claim matrix, and disclosed research boundaries.":
    "الأدلة العامة وحدود الادعاءات للإصدار البحثي الحالي من GALO.",
  "Privacy — GALO AI": "GALO AI — الخصوصية",
  "How the static GALO AI website handles data, cookies, analytics, and external contact links.":
    "سياسة الخصوصية لموقع GALO AI الثابت والخالي من التحليلات والنماذج.",
  "Page not found — GALO AI": "الصفحة غير موجودة — GALO AI",
  "The requested page is outside the current GALO AI site boundary.":
    "الصفحة المطلوبة خارج الحدود الحالية لموقع GALO AI.",
  "Founder-led research architecture for explicit world state and bounded, replayable execution.":
    "بنية بحثية يقودها المؤسس لحالة عالم صريحة وتنفيذ مقيّد قابل لإعادة التشغيل.",
};
