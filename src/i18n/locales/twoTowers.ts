import type { TranslationDictionary } from "../translations";

/**
 * The two towers in the engine core — the home-page figure and the three notes
 * under it.
 *
 * PLUS and STAR stay Latin in every locale: they are the names of the two frozen
 * laws, and a reader meets them again in a table header and in a record. Tower is
 * башня / 塔 / برج, pole is полюс / 极点 / قطب, fold is складывается / 折 / ينطوي.
 */

export const twoTowersRu: TranslationDictionary = {
  "A left P0 absorbs": "Левый P0 поглощает",
  "Asks about a reset first": "Сначала проверяет сброс",
  Associative: "Ассоциативна",
  "Because the upper ones are not redundant, and that is checked rather than assumed. Across every downward pair of levels the only map that commutes with all four action families glues every pole onto P0 and preserves nothing. So a higher level can draw distinctions no lower level reproduces, and enumerating it is not padding.":
    "Потому что верхние не избыточны, и это проверено, а не принято на веру. Для каждой пары уровней сверху вниз единственное отображение, коммутирующее со всеми четырьмя семействами действий, склеивает все полюса в P0 и не сохраняет ничего. Значит, верхний уровень способен провести различия, которые ни один нижний не воспроизводит, и перечислять его — не набивка.",
  "Chips are the same size on purpose. A higher level is not a better one.":
    "Клетки одного размера намеренно. Уровень выше — не значит лучше.",
  Commutative: "Коммутативна",
  "Every pole has an inverse": "У каждого полюса есть обратный",
  "Folds down in {folds} ways": "Складывается вниз {folds} способами",
  "Moves around the dial": "Ходит по циферблату",
  "Never folds down": "Никогда не складывается вниз",
  "Nonassociative at n ≥ 2": "Неассоциативна при n ≥ 2",
  "Noncommutative at n ≥ 2": "Некоммутативна при n ≥ 2",
  "PLUS and STAR are not two settings of one law. They are two families of frozen tables running over the same finite carrier, and they behave differently enough that neither can stand in for the other. Both live in the kernel, and the same 560 typed cells serve every domain the engine runs.":
    "PLUS и STAR — не две настройки одного закона. Это два семейства замороженных таблиц над одним и тем же конечным носителем, и ведут они себя достаточно по-разному, чтобы ни одно не заменяло другое. Обе живут в ядре, и одни и те же 560 типизированных клеток обслуживают каждый домен, в котором работает движок.",
  "PLUS is a cyclic group: it composes in any order and every step can be undone. STAR is not — it inspects one operand first, and past two positions it is neither commutative nor associative. A system with only PLUS cannot express a reset; a system with only STAR loses the arithmetic underneath it.":
    "PLUS — циклическая группа: складывается в любом порядке, и любой шаг можно отменить. STAR — нет: он сперва смотрит на один операнд, и дальше двух позиций уже ни коммутативен, ни ассоциативен. Система с одним PLUS не умеет выразить сброс; система с одним STAR теряет арифметику под собой.",
  "People expect the core of an AI system to be a model. Here it is two families of Cayley tables over seven finite levels, written before anything runs and never edited afterwards. The kernel carries them byte for byte, and the same 560 typed cells serve every domain the engine works in — the language contour and the graph contours are not separate copies.":
    "От ядра ИИ-системы ждут модели. Здесь это два семейства таблиц Кэли над семью конечными уровнями, написанные до любого запуска и больше не правившиеся. Ядро несёт их байт в байт, и одни и те же 560 типизированных клеток обслуживают каждый домен, в котором работает движок: языковой контур и графовые контуры — не отдельные копии.",
  "Read the two laws in full": "Прочитать оба закона целиком",
  "Same seven levels, same poles. Two different algebras on them.":
    "Те же семь уровней, те же полюса. Две разные алгебры на них.",
  "THE TWO TOWERS IN THE ENGINE CORE": "ДВЕ БАШНИ В ЯДРЕ ДВИЖКА",
  "That the towers are what produced the published learning results. They are not in the measured path of those campaigns, and their contribution to it is unproven — it is written on the evidence page as an open boundary rather than left for a reader to discover.":
    "Что именно башни дали опубликованные результаты обучения. В измеряющий путь тех кампаний они не входят, и их вклад в него не доказан — это записано на странице доказательств как открытая граница, а не оставлено читателю на догадку.",
  "The PLUS tower and the STAR tower side by side": "Башня PLUS и башня STAR рядом",
  "The same poles Q_n at every level. Different structure on them.":
    "Одни и те же полюса Q_n на каждом уровне. Структура на них разная.",
  "Two panels. Each holds a column of seven equally sized level chips, L7 at the top down to L1, next to the properties of that law. The PLUS column marks the two levels that can fold onto a lower one; the STAR column marks none. A line underneath states that both towers stand over the same poles.":
    "Две панели. В каждой — колонка из семи одинаковых по размеру клеток уровней, от L7 сверху до L1, рядом со свойствами этого закона. В колонке PLUS отмечены два уровня, которые могут сложиться на нижний; в колонке STAR не отмечено ни одного. Под ними строка о том, что обе башни стоят на одних и тех же полюсах.",
  "Two towers of frozen tables, and everything else is a lookup in them.":
    "Две башни замороженных таблиц — и всё остальное просто обращается к ним.",
  "WHAT IS IN THE CORE": "ЧТО НАХОДИТСЯ В ЯДРЕ",
  "What this does not establish": "Чего это не устанавливает",
  "Why seven levels and not one": "Почему семь уровней, а не один",
  "Why two and not one": "Почему две, а не одна",
  "marked: a level that folds onto a lower one": "отмечено: уровень, который складывается на нижний",
};

export const twoTowersZh: TranslationDictionary = {
  "A left P0 absorbs": "左侧的 P0 会吞掉一切",
  "Asks about a reset first": "先问重置",
  Associative: "结合律成立",
  "Because the upper ones are not redundant, and that is checked rather than assumed. Across every downward pair of levels the only map that commutes with all four action families glues every pole onto P0 and preserves nothing. So a higher level can draw distinctions no lower level reproduces, and enumerating it is not padding.":
    "因为上面那些并不多余，而这是查过的，不是假定的。在每一对自上而下的层级之间，唯一一个与全部四个动作族都可交换的映射，会把所有极点粘到 P0 上，什么也不保留。也就是说，上层能作出下层复现不了的区分，把它枚举出来不是凑数。",
  "Chips are the same size on purpose. A higher level is not a better one.":
    "方块大小一样是故意的。层级更高不等于更好。",
  Commutative: "交换律成立",
  "Every pole has an inverse": "每个极点都有逆元",
  "Folds down in {folds} ways": "有 {folds} 种方式向下折",
  "Moves around the dial": "在表盘上走一圈",
  "Never folds down": "从不向下折",
  "Nonassociative at n ≥ 2": "在 n ≥ 2 时不满足结合律",
  "Noncommutative at n ≥ 2": "在 n ≥ 2 时不满足交换律",
  "PLUS and STAR are not two settings of one law. They are two families of frozen tables running over the same finite carrier, and they behave differently enough that neither can stand in for the other. Both live in the kernel, and the same 560 typed cells serve every domain the engine runs.":
    "PLUS 与 STAR 不是同一条法则的两个设置。它们是跑在同一个有限载体之上的两族冻结的表，而且行为差别大到谁也替不了谁。两者都住在内核里，同样的 560 个带类型的格子服务于引擎工作的每一个域。",
  "PLUS is a cyclic group: it composes in any order and every step can be undone. STAR is not — it inspects one operand first, and past two positions it is neither commutative nor associative. A system with only PLUS cannot express a reset; a system with only STAR loses the arithmetic underneath it.":
    "PLUS 是一个循环群：怎么排顺序都一样，每一步都能撤回。STAR 不是——它先看一个操作数，超过两个位置之后既不交换也不结合。只有 PLUS 的系统表达不了重置；只有 STAR 的系统会丢掉底下的算术。",
  "People expect the core of an AI system to be a model. Here it is two families of Cayley tables over seven finite levels, written before anything runs and never edited afterwards. The kernel carries them byte for byte, and the same 560 typed cells serve every domain the engine works in — the language contour and the graph contours are not separate copies.":
    "人们指望一个 AI 系统的内核里是一个模型。这里是两族凯莱表，架在七个有限的层级上，在任何东西跑起来之前就写好，之后再没改过。内核逐字节地带着它们，而同样的 560 个带类型的格子服务于引擎工作的每一个域：语言回路和图回路不是各自的副本。",
  "Read the two laws in full": "把两条法则完整读一遍",
  "Same seven levels, same poles. Two different algebras on them.":
    "同样的七个层级，同样的极点。上面是两套不同的代数。",
  "THE TWO TOWERS IN THE ENGINE CORE": "引擎内核里的两座塔",
  "That the towers are what produced the published learning results. They are not in the measured path of those campaigns, and their contribution to it is unproven — it is written on the evidence page as an open boundary rather than left for a reader to discover.":
    "并没有确立「是这两座塔产生了已公布的学习结果」。它们不在那几场实验的测量路径上，它们对该路径的贡献没有被证明——这一点写在证据页上，作为一条开放的边界，而不是留给读者自己去发现。",
  "The PLUS tower and the STAR tower side by side": "PLUS 塔与 STAR 塔并排",
  "The same poles Q_n at every level. Different structure on them.": "每个层级上都是同样的极点 Q_n。上面的结构不一样。",
  "Two panels. Each holds a column of seven equally sized level chips, L7 at the top down to L1, next to the properties of that law. The PLUS column marks the two levels that can fold onto a lower one; the STAR column marks none. A line underneath states that both towers stand over the same poles.":
    "两块面板。每块里是一列七个大小相同的层级方块，从上面的 L7 到 L1，旁边是这条法则的性质。PLUS 那一列标出了两个能折到更低层级的层级；STAR 那一列一个也没有。下面一行说明两座塔立在同样的极点之上。",
  "Two towers of frozen tables, and everything else is a lookup in them.":
    "两座由冻结的表构成的塔，其余的一切都只是去查它们。",
  "WHAT IS IN THE CORE": "内核里是什么",
  "What this does not establish": "这并没有确立什么",
  "Why seven levels and not one": "为什么是七个层级，不是一个",
  "Why two and not one": "为什么是两条，不是一条",
  "marked: a level that folds onto a lower one": "带标记的：能折到更低层级的层级",
};

export const twoTowersAr: TranslationDictionary = {
  "A left P0 absorbs": "P0 على اليسار يبتلع",
  "Asks about a reset first": "يسأل عن إعادة الضبط أولًا",
  Associative: "تجميعية",
  "Because the upper ones are not redundant, and that is checked rather than assumed. Across every downward pair of levels the only map that commutes with all four action families glues every pole onto P0 and preserves nothing. So a higher level can draw distinctions no lower level reproduces, and enumerating it is not padding.":
    "لأن العليا ليست فائضة، وهذا مفحوصٌ لا مفترَض. ففي كل زوجٍ من المستويات نزولًا، التطبيق الوحيد الذي يُبادِل العائلات الأربع جميعًا يلصق كل الأقطاب في P0 ولا يحفظ شيئًا. أي أن المستوى الأعلى يستطيع أن يقيم فروقًا لا يعيدها أي مستوى أدنى، وتعدادُه ليس حشوًا.",
  "Chips are the same size on purpose. A higher level is not a better one.":
    "المربّعات متساوية الحجم عن قصد. والمستوى الأعلى ليس الأفضل.",
  Commutative: "تبديلية",
  "Every pole has an inverse": "لكل قطبٍ نظيرٌ عكسي",
  "Folds down in {folds} ways": "يُطوى نزولًا بـ{folds} طرق",
  "Moves around the dial": "يدور على الميناء",
  "Never folds down": "لا يُطوى نزولًا أبدًا",
  "Nonassociative at n ≥ 2": "غير تجميعية عند n ≥ 2",
  "Noncommutative at n ≥ 2": "غير تبديلية عند n ≥ 2",
  "PLUS and STAR are not two settings of one law. They are two families of frozen tables running over the same finite carrier, and they behave differently enough that neither can stand in for the other. Both live in the kernel, and the same 560 typed cells serve every domain the engine runs.":
    "ليس PLUS وSTAR ضبطَين لقانونٍ واحد، بل عائلتان من الجداول المجمَّدة تعملان فوق الحامل المنتهي نفسه، ويختلف سلوكهما بما يكفي لألّا تحلّ إحداهما محل الأخرى. وكلتاهما تسكن النواة، والخلايا المحددة النوع الـ560 نفسها تخدم كل مجالٍ يعمل فيه المحرك.",
  "PLUS is a cyclic group: it composes in any order and every step can be undone. STAR is not — it inspects one operand first, and past two positions it is neither commutative nor associative. A system with only PLUS cannot express a reset; a system with only STAR loses the arithmetic underneath it.":
    "PLUS زمرةٌ دورية: يتركّب بأي ترتيب، وكل خطوةٍ فيه قابلة للنقض. أما STAR فلا: ينظر في أحد المعاملين أولًا، وبعد موضعين لا هو تبديلي ولا تجميعي. ونظامٌ بـPLUS وحده لا يستطيع التعبير عن إعادة ضبط؛ ونظامٌ بـSTAR وحده يفقد ما تحته من حساب.",
  "People expect the core of an AI system to be a model. Here it is two families of Cayley tables over seven finite levels, written before anything runs and never edited afterwards. The kernel carries them byte for byte, and the same 560 typed cells serve every domain the engine works in — the language contour and the graph contours are not separate copies.":
    "يتوقّع الناس أن يكون في نواة نظام ذكاءٍ اصطناعي نموذج. وهنا عائلتان من جداول كايلي فوق سبعة مستوياتٍ منتهية، كُتبتا قبل أن يجري أي شيء ولم تُعدَّلا بعدها. تحملهما النواة بايتًا ببايت، والخلايا المحددة النوع الـ560 نفسها تخدم كل مجالٍ يعمل فيه المحرك: مسارُ اللغة ومسارات الرسوم ليست نسخًا منفصلة.",
  "Read the two laws in full": "اقرأ القانونين كاملَين",
  "Same seven levels, same poles. Two different algebras on them.":
    "المستويات السبعة نفسها والأقطاب نفسها. وجبران مختلفان عليها.",
  "THE TWO TOWERS IN THE ENGINE CORE": "البرجان في نواة المحرك",
  "That the towers are what produced the published learning results. They are not in the measured path of those campaigns, and their contribution to it is unproven — it is written on the evidence page as an open boundary rather than left for a reader to discover.":
    "أن البرجَين هما ما أنتج نتائج التعلُّم المنشورة. فهما ليسا في مسار القياس في تلك الحملات، وإسهامهما فيه غير مُثبَت — وهذا مكتوبٌ في صفحة الأدلة بوصفه حدًّا مفتوحًا لا متروكًا للقارئ ليكتشفه.",
  "The PLUS tower and the STAR tower side by side": "برج PLUS وبرج STAR جنبًا إلى جنب",
  "The same poles Q_n at every level. Different structure on them.":
    "الأقطاب Q_n نفسها في كل مستوى. والبنية عليها مختلفة.",
  "Two panels. Each holds a column of seven equally sized level chips, L7 at the top down to L1, next to the properties of that law. The PLUS column marks the two levels that can fold onto a lower one; the STAR column marks none. A line underneath states that both towers stand over the same poles.":
    "لوحتان. في كلٍّ منهما عمودٌ من سبعة مربّعات مستوياتٍ متساوية الحجم، من L7 في الأعلى إلى L1، إلى جانب خصائص ذلك القانون. ويُعلَّم في عمود PLUS مستويان يمكن طيُّهما إلى مستوًى أدنى؛ ولا يُعلَّم في عمود STAR أيٌّ منها. وتحتهما سطرٌ يقول إن البرجَين يقومان على الأقطاب نفسها.",
  "Two towers of frozen tables, and everything else is a lookup in them.":
    "برجان من الجداول المجمَّدة، وكلُّ ما عداهما مراجعةٌ لهما.",
  "WHAT IS IN THE CORE": "ما الذي في النواة",
  "What this does not establish": "ما الذي لا يُثبته هذا",
  "Why seven levels and not one": "لماذا سبعة مستويات لا مستوى واحد",
  "Why two and not one": "لماذا اثنان لا واحد",
  "marked: a level that folds onto a lower one": "معلَّم: مستوى يُطوى إلى مستوًى أدنى",
};
