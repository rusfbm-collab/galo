import type { TranslationDictionary } from "../translations";

/**
 * Two figures on the theory page: how large the space of possible Cayley tables
 * is against the fourteen GALO declares, and how a frame is assembled out of
 * those tables.
 *
 * Terminology follows the rest of the site: frame is фрейм / 框架 / إطار, carrier
 * is носитель / 载体 / حامل, arity is арность / 元数 / أرية. The three-letter
 * variables n, k and m stay Latin in every locale — they are read against the
 * formulas, not translated.
 */

export const tableSpaceRu: TranslationDictionary = {
  "PLUS and STAR at L{level} · {pairs} addresses each":
    "PLUS и STAR на L{level} · по {pairs} адресов в каждой",
  "Q_{level} · {poles} positions":
    "Q_{level} · {poles} позиции",
  "k role slots":
    "k ролевых слотов",
  "{cells} typed cells":
    "{cells} типизированных клеток",
  "A frame is the two tables, plus three declarations about how to read them.":
    "Фрейм — это те же две таблицы плюс три объявления о том, как их читать.",
  "A program is not written in the open. It is written inside a frame: a local scene that has already declared which level it works at, which two tables it reads, and how many places it has. The frame is where the tables stop being arithmetic and start being a thing you can state a relation in.":
    "Программу не пишут в чистом поле. Её пишут внутри фрейма — локальной сцены, которая уже объявила, на каком уровне работает, какие две таблицы читает и сколько у неё мест. Именно во фрейме таблицы перестают быть арифметикой и становятся тем, в чём можно высказать отношение.",
  "Bars follow digit count, not value.":
    "Длина столбцов — по числу цифр, а не по величине.",
  "CARRIER":
    "НОСИТЕЛЬ",
  "DECLARED":
    "ОБЪЯВЛЕНО",
  "Declare how many places the scene has":
    "Объявить, сколько у сцены мест",
  "Each of the n × n cells may hold any of the n positions, so a level of size n has n^(n²) possible tables. The bars count digits rather than values, because the growth is the subject: by L5 the space is past anything anyone could enumerate, and it keeps going.":
    "Каждая из n × n клеток может держать любую из n позиций, поэтому у уровня размера n есть n^(n²) возможных таблиц. Столбцы считают цифры, а не значения, потому что предмет здесь — рост: к L5 пространство уже вне любого перечисления, и оно продолжает расти.",
  "Four declarations turning two Cayley tables into one frame":
    "Четыре объявления, превращающие две таблицы Кэли в один фрейм",
  "Four numbered steps down the left — choose a level, take its two frozen laws, read each cell with its roles, declare how many places the scene has — feeding into a panel on the right. The panel shows the carrier positions, the two tables drawn as grids, and the empty role slots that make up one frame.":
    "Четыре пронумерованных шага слева — выбрать уровень, взять два замороженных закона этого уровня, прочитать каждую клетку с её ролями, объявить, сколько у сцены мест, — подаются в панель справа. В панели показаны позиции носителя, две таблицы, нарисованные сетками, и пустые ролевые слоты, из которых состоит один фрейм.",
  "HOW A FRAME IS MADE OUT OF THE TABLES":
    "КАК ФРЕЙМ ПОЛУЧАЕТСЯ ИЗ ТАБЛИЦ",
  "HOW MANY TABLES THERE ARE, AND HOW MANY ARE DECLARED":
    "СКОЛЬКО ТАБЛИЦ СУЩЕСТВУЕТ И СКОЛЬКО ОБЪЯВЛЕНО",
  "Nothing here says the two declared laws are the best two. It says what they were declared out of.":
    "Здесь не говорится, что два объявленных закона — лучшие из возможных. Говорится, из чего они объявлены.",
  "Nothing new is invented at this step. A frame is a local scene in which a relation can be stated and checked, and everything inside it is a cell of the same two frozen tables — which is why a frame can be handed to somebody else and read the same way.":
    "На этом шаге ничего не изобретается. Фрейм — это локальная сцена, в которой отношение можно высказать и проверить, и всё внутри него — клетка тех же двух замороженных таблиц. Именно поэтому фрейм можно передать другому человеку и прочитать одинаково.",
  "PLUS and STAR at every level — {tables} tables, {cells} typed cells, frozen before anything runs":
    "PLUS и STAR на каждом уровне — {tables} таблиц, {cells} типизированных клеток, заморожены до любого запуска",
  "POSSIBLE TABLES":
    "ВОЗМОЖНЫЕ ТАБЛИЦЫ",
  "Past 10^41 to choose from at L7. Two are declared, and then frozen.":
    "На L7 выбирать есть из более чем 10^41. Объявлены две — и заморожены.",
  "Pick a level":
    "Выбрать уровень",
  "Polarity is local to this frame.":
    "Полярность локальна этому фрейму.",
  "ROLE SLOTS":
    "РОЛЕВЫЕ СЛОТЫ",
  "Read each cell with its roles":
    "Прочитать каждую клетку с её ролями",
  "Seven horizontal bars, one per level, whose lengths follow the number of digits in the count of possible tables. Level 1 has one table, level 3 has 19,683, level 7 has more than 10 to the 41st. A short bar underneath marks the fourteen tables GALO actually declares.":
    "Семь горизонтальных столбцов, по одному на уровень; их длина следует числу цифр в количестве возможных таблиц. У уровня 1 таблица одна, у уровня 3 — 19 683, у уровня 7 — больше 10 в 41-й степени. Короткий столбец под ними отмечает те четырнадцать таблиц, которые GALO объявляет на самом деле.",
  "THE SAME TWO TABLES":
    "ТЕ ЖЕ ДВЕ ТАБЛИЦЫ",
  "Take the two frozen laws at it":
    "Взять два его замороженных закона",
  "The number of possible tables at each level, against the two that are declared":
    "Сколько таблиц возможно на каждом уровне — против тех двух, что объявлены",
  "Three independent numbers. Nothing makes them agree, and they are read apart everywhere.":
    "Три независимых числа. Ничто их не уравнивает, и всюду они читаются раздельно.",
  "Why this matters more than the two tables themselves: a table nobody fixed in advance is a table that can be adjusted after the fact to suit an answer. These two were declared once, and everything downstream is a lookup in them.":
    "Почему это важнее самих двух таблиц: таблица, которую никто не зафиксировал заранее, — это таблица, которую можно подправить задним числом под нужный ответ. Эти две объявлены один раз, и всё дальнейшее — обращение к ним.",
  "is the arity":
    "— это арность",
  "is the level":
    "— это уровень",
  "is the route length":
    "— это длина маршрута",
};

export const tableSpaceZh: TranslationDictionary = {
  "PLUS and STAR at L{level} · {pairs} addresses each":
    "L{level} 上的 PLUS 与 STAR · 各 {pairs} 个地址",
  "Q_{level} · {poles} positions":
    "Q_{level} · {poles} 个位置",
  "k role slots":
    "k 个角色槽位",
  "{cells} typed cells":
    "{cells} 个带类型的格子",
  "A frame is the two tables, plus three declarations about how to read them.":
    "一个框架就是那两张表，外加三条关于「怎么读它们」的声明。",
  "A program is not written in the open. It is written inside a frame: a local scene that has already declared which level it works at, which two tables it reads, and how many places it has. The frame is where the tables stop being arithmetic and start being a thing you can state a relation in.":
    "程序不是写在空地上的。它写在一个框架里面：这个局部场景已经声明了自己在哪个层级上工作、读哪两张表、有几个位置。正是在框架里，那两张表不再只是算术，而成了可以在其中陈述一条关系的东西。",
  "Bars follow digit count, not value.":
    "条形的长度按位数来，不按数值来。",
  "CARRIER":
    "载体",
  "DECLARED":
    "已声明",
  "Declare how many places the scene has":
    "声明这个场景有几个位置",
  "Each of the n × n cells may hold any of the n positions, so a level of size n has n^(n²) possible tables. The bars count digits rather than values, because the growth is the subject: by L5 the space is past anything anyone could enumerate, and it keeps going.":
    "n × n 张格子里的每一格都可以放 n 个位置中的任意一个，所以一个大小为 n 的层级有 n^(n²) 张可能的表。条形数的是位数而不是数值，因为这里要看的是增长：到了 L5，这个空间已经超出任何人能枚举的范围，而且还在继续涨。",
  "Four declarations turning two Cayley tables into one frame":
    "四条声明，把两张凯莱表变成一个框架",
  "Four numbered steps down the left — choose a level, take its two frozen laws, read each cell with its roles, declare how many places the scene has — feeding into a panel on the right. The panel shows the carrier positions, the two tables drawn as grids, and the empty role slots that make up one frame.":
    "左侧四个编号的步骤——选一个层级、取这个层级上那两条冻结的法则、按角色去读每一格、声明这个场景有几个位置——汇入右侧的一块面板。面板里画着载体的各个位置、用网格画出的那两张表，以及构成一个框架的那些空的角色槽位。",
  "HOW A FRAME IS MADE OUT OF THE TABLES":
    "框架是怎么从表里做出来的",
  "HOW MANY TABLES THERE ARE, AND HOW MANY ARE DECLARED":
    "一共有多少张表，声明了多少张",
  "Nothing here says the two declared laws are the best two. It says what they were declared out of.":
    "这里没有说被声明的那两条法则是最好的两条。说的是它们是从多大的范围里声明出来的。",
  "Nothing new is invented at this step. A frame is a local scene in which a relation can be stated and checked, and everything inside it is a cell of the same two frozen tables — which is why a frame can be handed to somebody else and read the same way.":
    "这一步没有发明任何新东西。框架是一个局部场景，在里面可以陈述并检验一条关系，而里面的一切都是那两张冻结的表里的格子。正因如此，一个框架可以交给别人，而且读法一样。",
  "PLUS and STAR at every level — {tables} tables, {cells} typed cells, frozen before anything runs":
    "每个层级上的 PLUS 与 STAR — {tables} 张表、{cells} 个带类型的格子，在任何东西跑起来之前就已冻结",
  "POSSIBLE TABLES":
    "可能的表",
  "Past 10^41 to choose from at L7. Two are declared, and then frozen.":
    "在 L7 可挑的超过 10^41 张。被声明的是两张——然后冻结。",
  "Pick a level":
    "选一个层级",
  "Polarity is local to this frame.":
    "极性只属于这个框架。",
  "ROLE SLOTS":
    "角色槽位",
  "Read each cell with its roles":
    "按角色去读每一格",
  "Seven horizontal bars, one per level, whose lengths follow the number of digits in the count of possible tables. Level 1 has one table, level 3 has 19,683, level 7 has more than 10 to the 41st. A short bar underneath marks the fourteen tables GALO actually declares.":
    "七道横条，每个层级一道，长度跟着「可能的表」这个数的位数走。层级 1 只有一张表，层级 3 有 19,683 张，层级 7 超过 10 的 41 次方。下面一道短条标出 GALO 实际声明的那十四张表。",
  "THE SAME TWO TABLES":
    "同样的那两张表",
  "Take the two frozen laws at it":
    "取这个层级上那两条冻结的法则",
  "The number of possible tables at each level, against the two that are declared":
    "每个层级上有多少张可能的表，对照被声明的那两张",
  "Three independent numbers. Nothing makes them agree, and they are read apart everywhere.":
    "三个互相独立的数。没有什么让它们相等，而且到处都是分开读的。",
  "Why this matters more than the two tables themselves: a table nobody fixed in advance is a table that can be adjusted after the fact to suit an answer. These two were declared once, and everything downstream is a lookup in them.":
    "为什么这件事比那两张表本身更要紧：一张没人事先定死的表，就是一张事后可以为了配合某个答案而被改一改的表。这两张只声明一次，后面的一切都只是去查它们。",
  "is the arity":
    "是元数",
  "is the level":
    "是层级",
  "is the route length":
    "是路线长度",
};

export const tableSpaceAr: TranslationDictionary = {
  "PLUS and STAR at L{level} · {pairs} addresses each":
    "PLUS وSTAR في L{level} · {pairs} عنوانًا في كلٍّ منهما",
  "Q_{level} · {poles} positions":
    "Q_{level} · {poles} مواضع",
  "k role slots":
    "k من خانات الأدوار",
  "{cells} typed cells":
    "{cells} خلية محددة النوع",
  "A frame is the two tables, plus three declarations about how to read them.":
    "الإطار هو الجدولان نفسهما، مضافًا إليهما ثلاثة إعلانات عن كيفية قراءتهما.",
  "A program is not written in the open. It is written inside a frame: a local scene that has already declared which level it works at, which two tables it reads, and how many places it has. The frame is where the tables stop being arithmetic and start being a thing you can state a relation in.":
    "لا يُكتب البرنامج في العراء، بل يُكتب داخل إطار: مشهدٍ محلي أعلن سلفًا على أي مستوى يعمل، وأيّ جدولين يقرأ، وكم موضعًا له. وفي الإطار يكفّ الجدولان عن كونهما حسابًا ويصيران شيئًا يمكن أن تُصاغ فيه علاقة.",
  "Bars follow digit count, not value.":
    "أطوال الأعمدة بعدد الأرقام لا بالقيمة.",
  "CARRIER":
    "الحامل",
  "DECLARED":
    "المعلن",
  "Declare how many places the scene has":
    "أعلِن كم موضعًا للمشهد",
  "Each of the n × n cells may hold any of the n positions, so a level of size n has n^(n²) possible tables. The bars count digits rather than values, because the growth is the subject: by L5 the space is past anything anyone could enumerate, and it keeps going.":
    "كلُّ خليةٍ من خلايا الجدول n × n قد تحمل أيًا من المواضع الـn، فالمستوى الذي حجمه n له n^(n²) من الجداول الممكنة. والأعمدة تعدّ الأرقام لا القيم، لأن الموضوع هنا هو النمو: عند L5 صار الفضاء خارج أي تعدادٍ ممكن، وهو ماضٍ في الزيادة.",
  "Four declarations turning two Cayley tables into one frame":
    "أربعة إعلانات تحوّل جدولَي كايلي إلى إطارٍ واحد",
  "Four numbered steps down the left — choose a level, take its two frozen laws, read each cell with its roles, declare how many places the scene has — feeding into a panel on the right. The panel shows the carrier positions, the two tables drawn as grids, and the empty role slots that make up one frame.":
    "أربع خطوات مرقَّمة على اليسار — اختر مستوى، وخذ قانونَيه المجمَّدَين، واقرأ كل خلية بأدوارها، وأعلن كم موضعًا للمشهد — تصبّ في لوحةٍ على اليمين. تُظهر اللوحة مواضع الحامل، والجدولين مرسومَين شبكتين، وخانات الأدوار الفارغة التي يتكوَّن منها إطارٌ واحد.",
  "HOW A FRAME IS MADE OUT OF THE TABLES":
    "كيف يُصنع الإطار من الجداول",
  "HOW MANY TABLES THERE ARE, AND HOW MANY ARE DECLARED":
    "كم جدولًا يوجد، وكم منها معلن",
  "Nothing here says the two declared laws are the best two. It says what they were declared out of.":
    "لا يُقال هنا إن القانونين المعلنَين هما الأفضل؛ يُقال ممّ أُعلنا.",
  "Nothing new is invented at this step. A frame is a local scene in which a relation can be stated and checked, and everything inside it is a cell of the same two frozen tables — which is why a frame can be handed to somebody else and read the same way.":
    "لا يُبتكَر شيءٌ في هذه الخطوة. الإطار مشهدٌ محلي يمكن أن تُصاغ فيه علاقةٌ ويُتحقَّق منها، وكلُّ ما فيه خليةٌ من الجدولين المجمَّدَين نفسيهما. ولهذا يمكن تسليم الإطار إلى غيرك فيُقرأ القراءة نفسها.",
  "PLUS and STAR at every level — {tables} tables, {cells} typed cells, frozen before anything runs":
    "PLUS وSTAR في كل مستوى — {tables} جدولًا و{cells} خلية محددة النوع، مجمَّدة قبل أن يجري أي شيء",
  "POSSIBLE TABLES":
    "الجداول الممكنة",
  "Past 10^41 to choose from at L7. Two are declared, and then frozen.":
    "في L7 يوجد أكثر من 10^41 للاختيار منه. المعلن اثنان — ثم يُجمَّدان.",
  "Pick a level":
    "اختر مستوى",
  "Polarity is local to this frame.":
    "القطبية محلية لهذا الإطار.",
  "ROLE SLOTS":
    "خانات الأدوار",
  "Read each cell with its roles":
    "اقرأ كل خلية بأدوارها",
  "Seven horizontal bars, one per level, whose lengths follow the number of digits in the count of possible tables. Level 1 has one table, level 3 has 19,683, level 7 has more than 10 to the 41st. A short bar underneath marks the fourteen tables GALO actually declares.":
    "سبعة أعمدة أفقية، واحدٌ لكل مستوى، تتبع أطوالها عدد أرقام عدد الجداول الممكنة. للمستوى 1 جدولٌ واحد، وللمستوى 3 عددُها 19,683، وللمستوى 7 أكثر من 10 مرفوعًا إلى 41. ويشير عمودٌ قصير تحتها إلى الجداول الأربعة عشر التي يعلنها GALO فعلًا.",
  "THE SAME TWO TABLES":
    "الجدولان نفسهما",
  "Take the two frozen laws at it":
    "خذ قانونَي هذا المستوى المجمَّدَين",
  "The number of possible tables at each level, against the two that are declared":
    "عدد الجداول الممكنة في كل مستوى، في مقابل الجدولين المعلنَين",
  "Three independent numbers. Nothing makes them agree, and they are read apart everywhere.":
    "ثلاثة أعدادٍ مستقلة. لا شيء يجعلها متساوية، وتُقرأ منفصلةً في كل موضع.",
  "Why this matters more than the two tables themselves: a table nobody fixed in advance is a table that can be adjusted after the fact to suit an answer. These two were declared once, and everything downstream is a lookup in them.":
    "ولماذا هذا أهمّ من الجدولين نفسيهما: جدولٌ لم يثبّته أحدٌ سلفًا هو جدولٌ يمكن تعديله بأثرٍ رجعي ليوافق جوابًا بعينه. أما هذان فأُعلنا مرةً واحدة، وكلُّ ما بعدهما مراجعةٌ لهما.",
  "is the arity":
    "هو الأرية",
  "is the level":
    "هو المستوى",
  "is the route length":
    "هو طول المسار",
};
