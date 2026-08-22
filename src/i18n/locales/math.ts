import type { TranslationDictionary } from "../translations";
import { academicAr } from "./academicAr";
import { academicRu } from "./academicRu";
import { academicZh } from "./academicZh";
import { mathExtraAr, mathExtraRu, mathExtraZh } from "./mathExtras";

export const mathRu: TranslationDictionary = {
  Mathematics: "Математика",
  "GALO Mathematics — PLUS and STAR Cayley Tables": "Математика GALO — таблицы Кэли PLUS и STAR",
  "Explore the finite PLUS and STAR Cayley tables, exact formulas, execution orientations, and disclosed limits of the GALO formal kernel.":
    "Исследуйте конечные таблицы Кэли PLUS и STAR, точные формулы, ориентации исполнения и раскрытые границы формального ядра GALO.",
  "FORMAL KERNEL": "ФОРМАЛЬНОЕ ЯДРО",
  "The mathematics beneath GALO AI.": "Математическая основа GALO AI.",
  "The L1–L7 Cayley tables define the frozen PLUS and STAR operators used by the current formal kernel. They specify exact finite transformations; they do not by themselves prove learning, intelligence, or external performance.":
    "Таблицы Кэли L1–L7 задают операторы PLUS и STAR, закреплённые в нынешнем формальном ядре. Они описывают точные конечные преобразования — и сами по себе не говорят ничего ни об обучении, ни об интеллекте, ни о пользе снаружи.",
  "Formal scope": "Формальная область",
  FORMALLY_DERIVED: "FORMALLY_DERIVED",
  "Explore the tables": "Исследовать таблицы",
  "INTERACTIVE CAYLEY EXPLORER": "ИНТЕРАКТИВНЫЕ ТАБЛИЦЫ КЭЛИ",
  "Read every transition directly from the formula.": "Считайте каждый переход непосредственно из формулы.",
  "Choose a level and an operation. Rows are left operands, columns are right operands, and each intersection is the exact result.":
    "Выберите уровень и операцию. Строки — левые операнды, столбцы — правые, а каждое пересечение содержит точный результат.",
  "Cayley table controls": "Управление таблицей Кэли",
  Level: "Уровень",
  "Choose level L{level}": "Выбрать уровень L{level}",
  Operation: "Операция",
  "Choose operation": "Выберите операцию",
  "{operation} Cayley table at L{level}": "Таблица Кэли {operation} на уровне L{level}",
  "Left operand by right operand": "Левый операнд по строкам, правый — по столбцам",
  "{operation} at L{level}: P{left} with P{right} equals P{result}":
    "{operation} на L{level}: P{left} с P{right} даёт P{result}",
  "Selected cell": "Выбранная ячейка",
  "RESET ROW": "СТРОКА СБРОСА",
  "CYCLIC STEP": "ЦИКЛИЧЕСКИЙ ШАГ",
  "Left P{left}, right P{right}: {operation} returns P{result}.":
    "Слева P{left}, справа P{right}: {operation} возвращает P{result}.",
  "Rows: left operand": "Строки: левый операнд",
  "Columns: right operand": "Столбцы: правый операнд",
  "Cell: result": "Ячейка: результат",
  "PLUS formula": "Формула PLUS",
  "STAR formula": "Формула STAR",
  "Generated locally from the displayed formula. Educational view — not a live engine, Atlas, or replay.":
    "Сгенерировано локально по показанной формуле. Это учебное представление, а не работающий в реальном времени движок, Atlas или воспроизведение.",
  "HOW TO READ THE TABLE": "КАК ЧИТАТЬ ТАБЛИЦУ",
  "Three coordinates, one deterministic answer.": "Три координаты — один детерминированный ответ.",
  "Pick the left operand": "Выберите левый операнд",
  "Find P_i in the first column. This fixes the row.": "Найдите P_i в первом столбце. Так определяется строка.",
  "Pick the right operand": "Выберите правый операнд",
  "Find P_j in the header. This fixes the column.": "Найдите P_j в заголовке. Так определяется столбец.",
  "Read the intersection": "Прочитайте пересечение",
  "The cell is the output P_k. No probability or learned parameter is involved.":
    "Ячейка содержит выход P_k. Здесь нет ни вероятности, ни обучаемого параметра.",
  "Worked example at L3": "Разобранный пример на L3",
  "Move from row P1 to column P2. Since (1 + 2) mod 3 = 0, the result is P0.":
    "Перейдите от строки P1 к столбцу P2. Поскольку (1 + 2) mod 3 = 0, результат равен P0.",
  "STAR reset example at L3": "Пример сброса STAR на L3",
  "The P0 row is constant under STAR: P0 is a left reset.": "Строка P0 постоянна в STAR: P0 является левым сбросом.",
  "TWO FROZEN OPERATORS": "ДВА ЗАФИКСИРОВАННЫХ ОПЕРАТОРА",
  "PLUS and STAR share a carrier; their reducts are different algebraic structures.":
    "PLUS и STAR имеют общий носитель, но разные алгебраические структуры.",
  "PLUS / CYCLIC GROUP": "PLUS / ЦИКЛИЧЕСКАЯ ГРУППА",
  "PLUS is closed and associative, P0 is the identity, and every pole has an inverse. It is the cyclic group C_n on the pole indices.":
    "PLUS замкнут и ассоциативен, P0 является нейтральным элементом, а у каждого полюса есть обратный элемент. На индексах полюсов это циклическая группа C_n.",
  "Exact nonassociativity witness at L3": "Точный свидетель неассоциативности на L3",
  "Same inputs, different brackets, different result.": "Одни входы, разные скобки, разный результат.",
  "The two bracketings return different poles, so brackets are part of the program.":
    "Две расстановки скобок возвращают разные полюса, поэтому скобки являются частью программы.",
  "P0 is a local algebraic anchor. It is not global truth, moral good, customer acceptance, access authorization, or a final real-world verdict.":
    "P0 — локальный алгебраический якорь. Это не глобальная истина, моральное благо, принятие клиентом, разрешение доступа или окончательный вердикт о реальном мире.",
  "TYPED EXECUTION": "ТИПИЗИРОВАННОЕ ИСПОЛНЕНИЕ",
  "The four action families preserve operand order explicitly.":
    "Четыре семейства действий явно фиксируют порядок операндов.",
  "The binary table is not redefined for LEFT or RIGHT. The family determines how source and active pole are placed into the same frozen operator.":
    "Бинарная таблица не переопределяется для LEFT или RIGHT. Семейство определяет, как исходный и активный полюса подаются одному и тому же зафиксированному оператору.",
  "source then active": "сначала исходный, затем активный",
  "active then source": "сначала активный, затем исходный",
  "Orientation changes where the operands sit. The Cayley law is untouched.":
    "Ориентация меняет размещение операндов. Закон Кэли остаётся прежним.",
  "Direct L3 orientation witness": "Прямой свидетель ориентации на L3",
  "PLUS returns the same target because it is commutative, while STAR orientation changes the target. The typed identities remain distinct in both cases.":
    "PLUS возвращает одну и ту же цель благодаря коммутативности, тогда как ориентация STAR меняет цель. В обоих случаях типизированные идентичности остаются различными.",
  "TOWER INVARIANT": "ИНВАРИАНТ БАШНИ",
  "Why the current registry contains exactly 560 typed cells.":
    "Почему текущий реестр содержит ровно 560 типизированных ячеек.",
  "Each level L_n has n² cells per operator. Two operators and two orientations produce 4n² typed cells.":
    "На каждом уровне L_n приходится n² ячеек на оператор. Два оператора и две ориентации дают 4n² типизированных ячеек.",
  "L1–L7 formal cell count": "Формальный подсчёт ячеек L1–L7",
  Poles: "Полюса",
  "Cells per operator": "Ячеек на оператор",
  "Typed cells": "Типизированные ячейки",
  Total: "Итого",
  "Exact invariant": "Точный инвариант",
  "The count measures the size of a formal registry. It counts no semantic concepts, and it is not an intelligence metric.":
    "Это размер формального реестра. Не число смыслов и не мера интеллекта.",
  "A higher level is not more intelligent. Pole labels are local to a frame and have no fixed global meaning.":
    "Более высокий уровень не является более интеллектуальным. Метки полюсов локальны для фрейма и не имеют фиксированного глобального смысла.",
  "A binary Cayley operation on Q_n does not make the carrier L2. Every level L1–L7 has binary PLUS and STAR laws.":
    "Бинарная операция Кэли на Q_n не делает носитель уровнем L2. На каждом уровне L1–L7 действуют бинарные законы PLUS и STAR.",
  "MATHEMATICAL BOUNDARY": "МАТЕМАТИЧЕСКАЯ ГРАНИЦА",
  "What these tables establish—and what they do not.": "Что эти таблицы устанавливают — и чего не устанавливают.",
  Established: "Установлено",
  "Total deterministic maps Q_n × Q_n → Q_n for L1–L7.":
    "Тотальные детерминированные отображения Q_n × Q_n → Q_n для L1–L7.",
  "Closure, operator formulas, typed operand orientation, and exact table count.":
    "Замкнутость, формулы операторов, типизированная ориентация операндов и точное число табличных ячеек.",
  "A finite transition alphabet for the current formal execution layer.":
    "Конечный алфавит переходов для текущего формального слоя исполнения.",
  "Not established": "Не установлено",
  "Tables alone do not provide world semantics.": "Сами по себе таблицы не дают семантику мира.",
  "Persistent policy learning:": "Персистентное обучение политики:",
  "Trained Atlas:": "Обученный Atlas:",
  "External operational gain:": "Внешний операционный выигрыш:",
  "General AI:": "General AI:",
  "This browser explorer is not a runtime selfcheck or release replay.":
    "Этот браузерный обозреватель не является самопроверкой среды исполнения или воспроизведением выпуска.",
  "Release evidence": "Доказательства выпуска",
  "Review the status, fingerprint, test receipts, and claim boundaries.":
    "Изучите статус, отпечаток, протоколы проверок и границы утверждений.",
  "View the evidence layer": "Открыть слой доказательств",
  ...mathExtraRu,
  ...academicRu,
};

export const mathZh: TranslationDictionary = {
  Mathematics: "数学",
  "GALO Mathematics — PLUS and STAR Cayley Tables": "GALO 数学 — PLUS 与 STAR 凯莱表",
  "Explore the finite PLUS and STAR Cayley tables, exact formulas, execution orientations, and disclosed limits of the GALO formal kernel.":
    "探索有限的 PLUS 与 STAR 凯莱表、精确公式、执行方向以及 GALO 形式化内核已披露的边界。",
  "FORMAL KERNEL": "形式化内核",
  "The mathematics beneath GALO AI.": "GALO AI 的数学基础。",
  "The L1–L7 Cayley tables define the frozen PLUS and STAR operators used by the current formal kernel. They specify exact finite transformations; they do not by themselves prove learning, intelligence, or external performance.":
    "L1–L7 凯莱表定义了当前形式化内核所使用的冻结 PLUS 和 STAR 运算。它们给出精确的有限变换；但这些表本身并不能证明学习、智能或外部表现。",
  "Formal scope": "形式化范围",
  FORMALLY_DERIVED: "FORMALLY_DERIVED",
  "Explore the tables": "查看这些表",
  "INTERACTIVE CAYLEY EXPLORER": "交互式凯莱表浏览器",
  "Read every transition directly from the formula.": "直接由公式读取每一次转换。",
  "Choose a level and an operation. Rows are left operands, columns are right operands, and each intersection is the exact result.":
    "选择一个层级和一种运算。行表示左操作数，列表示右操作数，每个交点都是精确结果。",
  "Cayley table controls": "凯莱表控制项",
  Level: "层级",
  "Choose level L{level}": "选择层级 L{level}",
  Operation: "运算",
  "Choose operation": "选择运算",
  "{operation} Cayley table at L{level}": "L{level} 的 {operation} 凯莱表",
  "Left operand by right operand": "左操作数 × 右操作数",
  "{operation} at L{level}: P{left} with P{right} equals P{result}":
    "L{level} 的 {operation}：P{left} 与 P{right} 的结果为 P{result}",
  "Selected cell": "所选单元格",
  "RESET ROW": "重置行",
  "CYCLIC STEP": "循环步",
  "Left P{left}, right P{right}: {operation} returns P{result}.":
    "左侧 P{left}，右侧 P{right}：{operation} 返回 P{result}。",
  "Rows: left operand": "行：左操作数",
  "Columns: right operand": "列：右操作数",
  "Cell: result": "单元格：结果",
  "PLUS formula": "PLUS 公式",
  "STAR formula": "STAR 公式",
  "Generated locally from the displayed formula. Educational view — not a live engine, Atlas, or replay.":
    "本表在本地根据所示公式生成。仅用于教学展示，并非实时引擎、Atlas 或重放。",
  "HOW TO READ THE TABLE": "如何读取凯莱表",
  "Three coordinates, one deterministic answer.": "三个坐标，一个确定性答案。",
  "Pick the left operand": "选择左操作数",
  "Find P_i in the first column. This fixes the row.": "在第一列中找到 P_i，由此确定行。",
  "Pick the right operand": "选择右操作数",
  "Find P_j in the header. This fixes the column.": "在表头中找到 P_j，由此确定列。",
  "Read the intersection": "读取交点",
  "The cell is the output P_k. No probability or learned parameter is involved.":
    "单元格即输出 P_k；这里不涉及概率或学习所得的参数。",
  "Worked example at L3": "L3 示例",
  "Move from row P1 to column P2. Since (1 + 2) mod 3 = 0, the result is P0.":
    "从 P1 行移至 P2 列。由于 (1 + 2) mod 3 = 0，结果为 P0。",
  "STAR reset example at L3": "L3 的 STAR 重置示例",
  "The P0 row is constant under STAR: P0 is a left reset.": "在 STAR 下，P0 行恒为 P0：P0 是左侧重置元。",
  "TWO FROZEN OPERATORS": "两个冻结运算",
  "PLUS and STAR share a carrier; their reducts are different algebraic structures.":
    "PLUS 和 STAR 共享同一载体集；它们的约化结构是不同的代数结构。",
  "PLUS / CYCLIC GROUP": "PLUS / 循环群",
  "PLUS is closed and associative, P0 is the identity, and every pole has an inverse. It is the cyclic group C_n on the pole indices.":
    "PLUS 在 Q_n 上封闭并满足结合律，P0 是双侧中性元，每个极都有逆元。按极的索引，它构成循环群 C_n。",
  "Exact nonassociativity witness at L3": "L3 上非结合性的精确见证",
  "Same inputs, different brackets, different result.": "相同输入，不同括号，不同结果。",
  "The two bracketings return different poles, so brackets are part of the program.":
    "两种括号安排返回不同的极，因此括号是程序的一部分。",
  "P0 is a local algebraic anchor. It is not global truth, moral good, customer acceptance, access authorization, or a final real-world verdict.":
    "P0 是一个局部代数锚点。它并不代表全局真理、道德善、客户接受、访问授权或最终的现实世界结论。",
  "TYPED EXECUTION": "类型化执行",
  "The four action families preserve operand order explicitly.": "四个动作族显式保留操作数顺序。",
  "The binary table is not redefined for LEFT or RIGHT. The family determines how source and active pole are placed into the same frozen operator.":
    "LEFT 或 RIGHT 不会重新定义二元表。动作族只决定源状态与活动极如何放入同一个冻结运算。",
  "source then active": "先源状态，后活动极",
  "active then source": "先活动极，后源状态",
  "Orientation changes where the operands sit. The Cayley law is untouched.":
    "执行方向改变操作数的放置次序，而不改变凯莱运算律。",
  "Direct L3 orientation witness": "L3 方向的直接见证",
  "PLUS returns the same target because it is commutative, while STAR orientation changes the target. The typed identities remain distinct in both cases.":
    "PLUS 因满足交换律而返回相同目标，STAR 的执行方向则会改变目标；两种情况下，类型化身份都保持不同。",
  "TOWER INVARIANT": "层级塔不变量",
  "Why the current registry contains exactly 560 typed cells.": "为什么当前登记表恰好包含 560 个类型化单元格。",
  "Each level L_n has n² cells per operator. Two operators and two orientations produce 4n² typed cells.":
    "每个 L_n 层级中，每种运算都有 n² 个单元格。两种运算和两个执行方向共生成 4n² 个类型化单元格。",
  "L1–L7 formal cell count": "L1–L7 形式化单元格计数",
  Poles: "极数",
  "Cells per operator": "每种运算的单元格数",
  "Typed cells": "类型化单元格",
  Total: "合计",
  "Exact invariant": "精确不变量",
  "The count measures the size of a formal registry. It counts no semantic concepts, and it is not an intelligence metric.":
    "这一数值表示形式化登记表的规模，并非语义概念数量，也不是智能指标。",
  "A higher level is not more intelligent. Pole labels are local to a frame and have no fixed global meaning.":
    "更高层级并不意味着更高智能。极标签只在局部框架内有效，没有固定的全局含义。",
  "A binary Cayley operation on Q_n does not make the carrier L2. Every level L1–L7 has binary PLUS and STAR laws.":
    "Q_n 上的二元凯莱运算并不会使载体变成 L2；L1–L7 的每一层都具有二元 PLUS 与 STAR 运算律。",
  "MATHEMATICAL BOUNDARY": "数学边界",
  "What these tables establish—and what they do not.": "这些表能够确立什么，又不能确立什么。",
  Established: "已确立",
  "Total deterministic maps Q_n × Q_n → Q_n for L1–L7.": "L1–L7 上从 Q_n × Q_n 到 Q_n 的全定义确定性映射。",
  "Closure, operator formulas, typed operand orientation, and exact table count.":
    "封闭性、运算公式、类型化操作数方向以及精确的表格计数。",
  "A finite transition alphabet for the current formal execution layer.": "当前形式化执行层的有限转换字母表。",
  "Not established": "尚未确立",
  "Tables alone do not provide world semantics.": "这些表本身并不提供世界语义。",
  "Persistent policy learning:": "持续策略学习：",
  "Trained Atlas:": "已训练的 Atlas：",
  "External operational gain:": "外部运行增益：",
  "General AI:": "General AI：",
  "This browser explorer is not a runtime selfcheck or release replay.":
    "这个浏览器端工具不等同于运行时自检，也不是版本重放。",
  "Release evidence": "版本证据",
  "Review the status, fingerprint, test receipts, and claim boundaries.": "查看状态、指纹、测试回执和声明边界。",
  "View the evidence layer": "查看证据层",
  ...mathExtraZh,
  ...academicZh,
};

export const mathAr: TranslationDictionary = {
  Mathematics: "الرياضيات",
  "GALO Mathematics — PLUS and STAR Cayley Tables": "رياضيات GALO — جدولا كايلي PLUS وSTAR",
  "Explore the finite PLUS and STAR Cayley tables, exact formulas, execution orientations, and disclosed limits of the GALO formal kernel.":
    "استكشف جدولي كايلي المنتهيين PLUS وSTAR، والصيغ الدقيقة، واتجاهات التنفيذ، والحدود المعلنة للنواة الشكلية لـ GALO.",
  "FORMAL KERNEL": "النواة الشكلية",
  "The mathematics beneath GALO AI.": "الرياضيات التي تقوم عليها GALO AI.",
  "The L1–L7 Cayley tables define the frozen PLUS and STAR operators used by the current formal kernel. They specify exact finite transformations; they do not by themselves prove learning, intelligence, or external performance.":
    "تعرّف جداول كايلي للمستويات L1–L7 العمليتين المجمّدتين PLUS وSTAR اللتين تستخدمهما النواة الشكلية الحالية. وهي تحدد تحويلات منتهية بدقة؛ لكنها لا تثبت بمفردها التعلّم أو الذكاء أو الأداء الخارجي.",
  "Formal scope": "النطاق الشكلي",
  FORMALLY_DERIVED: "FORMALLY_DERIVED",
  "Explore the tables": "استكشف الجداول",
  "INTERACTIVE CAYLEY EXPLORER": "مستكشف جداول كايلي التفاعلي",
  "Read every transition directly from the formula.": "اقرأ كل انتقال مباشرة من الصيغة.",
  "Choose a level and an operation. Rows are left operands, columns are right operands, and each intersection is the exact result.":
    "اختر مستوى وعملية. تمثل الصفوف المُعاملات اليسرى، وتمثل الأعمدة المُعاملات اليمنى، ويحتوي كل تقاطع على النتيجة الدقيقة.",
  "Cayley table controls": "عناصر التحكم في جدول كايلي",
  Level: "المستوى",
  "Choose level L{level}": "اختر المستوى L{level}",
  Operation: "العملية",
  "Choose operation": "اختر العملية",
  "{operation} Cayley table at L{level}": "جدول كايلي للعملية {operation} عند المستوى L{level}",
  "Left operand by right operand": "المُعامَل الأيسر بحسب المُعامَل الأيمن",
  "{operation} at L{level}: P{left} with P{right} equals P{result}":
    "{operation} عند L{level}: P{left} مع P{right} يساوي P{result}",
  "Selected cell": "الخلية المحددة",
  "RESET ROW": "صف إعادة الضبط",
  "CYCLIC STEP": "خطوة دورية",
  "Left P{left}, right P{right}: {operation} returns P{result}.":
    "يسارًا P{left} ويمينًا P{right}: تُرجع {operation} القيمة P{result}.",
  "Rows: left operand": "الصفوف: المُعامَل الأيسر",
  "Columns: right operand": "الأعمدة: المُعامَل الأيمن",
  "Cell: result": "الخلية: النتيجة",
  "PLUS formula": "صيغة PLUS",
  "STAR formula": "صيغة STAR",
  "Generated locally from the displayed formula. Educational view — not a live engine, Atlas, or replay.":
    "تم إنشاؤه محليًا من الصيغة المعروضة. عرض تعليمي — وليس محركًا حيًا أو Atlas أو إعادة تشغيل.",
  "HOW TO READ THE TABLE": "كيفية قراءة الجدول",
  "Three coordinates, one deterministic answer.": "ثلاثة إحداثيات، وإجابة حتمية واحدة.",
  "Pick the left operand": "اختر المُعامَل الأيسر",
  "Find P_i in the first column. This fixes the row.": "ابحث عن P_i في العمود الأول؛ بذلك يتحدد الصف.",
  "Pick the right operand": "اختر المُعامَل الأيمن",
  "Find P_j in the header. This fixes the column.": "ابحث عن P_j في رأس الجدول؛ بذلك يتحدد العمود.",
  "Read the intersection": "اقرأ نقطة التقاطع",
  "The cell is the output P_k. No probability or learned parameter is involved.":
    "الخلية هي المخرج P_k. لا تدخل في ذلك أي احتمالات أو مُعلَمات متعلَّمة.",
  "Worked example at L3": "مثال محلول عند L3",
  "Move from row P1 to column P2. Since (1 + 2) mod 3 = 0, the result is P0.":
    "انتقل من الصف P1 إلى العمود P2. بما أن (1 + 2) mod 3 = 0، فالنتيجة هي P0.",
  "STAR reset example at L3": "مثال إعادة ضبط STAR عند L3",
  "The P0 row is constant under STAR: P0 is a left reset.": "صف P0 ثابت تحت STAR: يمثّل P0 إعادة ضبط من اليسار.",
  "TWO FROZEN OPERATORS": "عمليتان مجمّدتان",
  "PLUS and STAR share a carrier; their reducts are different algebraic structures.":
    "تشترك PLUS وSTAR في المجموعة الحاملة نفسها، لكن بنيتيهما الجبريتين مختلفتان.",
  "PLUS / CYCLIC GROUP": "PLUS / زمرة دورية",
  "PLUS is closed and associative, P0 is the identity, and every pole has an inverse. It is the cyclic group C_n on the pole indices.":
    "عملية PLUS مغلقة وتحقق خاصية التجميع، وP0 هو العنصر المحايد، ولكل قطب معكوس. وهي الزمرة الدورية C_n على فهارس الأقطاب.",
  "Exact nonassociativity witness at L3": "شاهد دقيق على عدم التجميع عند L3",
  "Same inputs, different brackets, different result.": "المدخلات نفسها، وأقواس مختلفة، ونتيجة مختلفة.",
  "The two bracketings return different poles, so brackets are part of the program.":
    "تعيد طريقتا وضع الأقواس قطبين مختلفين، لذا فالأقواس جزء من البرنامج.",
  "P0 is a local algebraic anchor. It is not global truth, moral good, customer acceptance, access authorization, or a final real-world verdict.":
    "P0 مرساة جبرية محلية. وهو ليس حقيقة عالمية، أو خيرًا أخلاقيًا، أو قبولًا من عميل، أو تصريح وصول، أو حكمًا نهائيًا على العالم الواقعي.",
  "TYPED EXECUTION": "تنفيذ محدد الأنواع",
  "The four action families preserve operand order explicitly.":
    "تحافظ عائلات الإجراءات الأربع صراحةً على ترتيب المُعاملات.",
  "The binary table is not redefined for LEFT or RIGHT. The family determines how source and active pole are placed into the same frozen operator.":
    "لا يُعاد تعريف الجدول الثنائي من أجل LEFT أو RIGHT. تحدد العائلة كيفية وضع القطب المصدر والقطب النشط في العملية المجمّدة نفسها.",
  "source then active": "المصدر ثم النشط",
  "active then source": "النشط ثم المصدر",
  "Orientation changes where the operands sit. The Cayley law is untouched.":
    "يغيّر الاتجاه موضع المُعاملات، لا قانون كايلي.",
  "Direct L3 orientation witness": "شاهد مباشر للاتجاه عند L3",
  "PLUS returns the same target because it is commutative, while STAR orientation changes the target. The typed identities remain distinct in both cases.":
    "تعيد PLUS الهدف نفسه لأنها تبادلية، بينما يغيّر اتجاه STAR الهدف. وتظل الهويات محددة الأنواع متميزة في الحالتين.",
  "TOWER INVARIANT": "ثابت البرج",
  "Why the current registry contains exactly 560 typed cells.":
    "لماذا يحتوي السجل الحالي على 560 خلية محددة الأنواع بالضبط.",
  "Each level L_n has n² cells per operator. Two operators and two orientations produce 4n² typed cells.":
    "يحتوي كل مستوى L_n على n² خلية لكل عملية. وتنتج عمليتان واتجاهان 4n² خلية محددة الأنواع.",
  "L1–L7 formal cell count": "العدد الشكلي لخلايا L1–L7",
  Poles: "الأقطاب",
  "Cells per operator": "الخلايا لكل عملية",
  "Typed cells": "الخلايا محددة الأنواع",
  Total: "المجموع",
  "Exact invariant": "الثابت الدقيق",
  "The count measures the size of a formal registry. It counts no semantic concepts, and it is not an intelligence metric.":
    "هذا العدد هو حجم سجل شكلي، وليس عددًا للمفاهيم الدلالية ولا مقياسًا للذكاء.",
  "A higher level is not more intelligent. Pole labels are local to a frame and have no fixed global meaning.":
    "المستوى الأعلى ليس أكثر ذكاءً. تسميات الأقطاب محلية داخل الإطار وليس لها معنى عالمي ثابت.",
  "A binary Cayley operation on Q_n does not make the carrier L2. Every level L1–L7 has binary PLUS and STAR laws.":
    "وجود عملية كايلي ثنائية على Q_n لا يجعل المجموعة الحاملة L2. لكل مستوى من L1 إلى L7 قانونا PLUS وSTAR ثنائيان.",
  "MATHEMATICAL BOUNDARY": "الحدود الرياضية",
  "What these tables establish—and what they do not.": "ما الذي تثبته هذه الجداول — وما الذي لا تثبته.",
  Established: "مثبت ضمن النطاق",
  "Total deterministic maps Q_n × Q_n → Q_n for L1–L7.": "تطبيقات كلية حتمية Q_n × Q_n → Q_n للمستويات L1–L7.",
  "Closure, operator formulas, typed operand orientation, and exact table count.":
    "الإغلاق، وصيغ العمليات، واتجاه المُعاملات محدد الأنواع، والعدد الدقيق لخلايا الجداول.",
  "A finite transition alphabet for the current formal execution layer.":
    "أبجدية انتقالات منتهية لطبقة التنفيذ الشكلية الحالية.",
  "Not established": "غير مثبت",
  "Tables alone do not provide world semantics.": "لا توفر الجداول وحدها دلالات العالم.",
  "Persistent policy learning:": "التعلّم المستديم للسياسة:",
  "Trained Atlas:": "Atlas المدرَّب:",
  "External operational gain:": "المكسب التشغيلي الخارجي:",
  "General AI:": "General AI:",
  "This browser explorer is not a runtime selfcheck or release replay.":
    "هذا المستكشف في المتصفح ليس فحصًا ذاتيًا لبيئة التشغيل ولا إعادة تشغيل للإصدار.",
  "Release evidence": "أدلة الإصدار",
  "Review the status, fingerprint, test receipts, and claim boundaries.":
    "راجع الحالة والبصمة وإيصالات الاختبارات وحدود الادعاءات.",
  "View the evidence layer": "عرض طبقة الأدلة",
  ...mathExtraAr,
  ...academicAr,
};
