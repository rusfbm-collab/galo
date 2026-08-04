import type { TranslationDictionary } from "../translations";

export const theoryRu: TranslationDictionary = {
  Home: "На главную",
  "START HERE · NO ADVANCED MATHEMATICS REQUIRED": "НАЧНИТЕ ЗДЕСЬ · УГЛУБЛЁННАЯ МАТЕМАТИКА НЕ ТРЕБУЕТСЯ",
  "GALO theory, explained from the first state transition.": "Теория GALO: объяснение от первого перехода состояния.",
  "This guided chapter starts with a three-state dial and builds the theory one verified step at a time. Every key idea is shown in plain language, as a formula, as a finite table, and with an explicit limit on what it proves.":
    "Эта учебная глава начинается с трёхпозиционного циферблата и выстраивает теорию по одному верифицированному шагу. Каждая ключевая идея представлена простыми словами, формулой, конечной таблицей и явной границей того, что она доказывает.",
  "Learning path": "Путь изучения",
  "named states": "именованные состояния",
  "exact transitions": "точные переходы",
  "typed programs": "типизированные программы",
  "receipts and boundaries": "протоколы и границы",
  "Begin with the mental model": "Начать с наглядной модели",
  "Theory · start here": "Теория · начните здесь",
  "Understand GALO step by step": "Понять GALO шаг за шагом",
  "GALO Theory for Beginners — From States to Verified Execution":
    "Теория GALO для начинающих — от состояний к верифицированному исполнению",
  "Understand GALO step by step: finite states, PLUS and STAR, typed transitions, 560 coordinates, programs, symmetries, level maps, runtime scope, and evidence boundaries.":
    "Поймите GALO шаг за шагом: конечные состояния, PLUS и STAR, типизированные переходы, 560 координат, программы, симметрии, отображения между уровнями, область текущей среды исполнения и границы доказательств.",
  "Beginner theory chapter navigation": "Навигация по вводной главе теории",
  "Build the theory in this order": "Изучайте теорию в этом порядке",
  "The idea in one sentence": "Идея одним предложением",
  "States, levels, and wraparound": "Состояния, уровни и циклический переход",
  "PLUS and STAR without jargon": "PLUS и STAR без специальной терминологии",
  "Why P0 has two one-sided roles": "Почему у P0 две односторонние роли",
  "Source, active, LEFT, and RIGHT": "Источник, активный полюс, LEFT и RIGHT",
  "Guided transition laboratory": "Пошаговая лаборатория переходов",
  "Where the number 560 comes from": "Откуда берётся число 560",
  "From cells to bracketed programs": "От ячеек к программам со скобками",
  "Symmetry in plain language": "Симметрия простыми словами",
  "Maps between levels": "Отображения между уровнями",
  "How the mathematics fits the architecture": "Как математика соотносится с архитектурой",
  "How to read GALO evidence": "Как читать доказательные материалы GALO",
  "Plain-language glossary": "Словарь простыми словами",

  "THE IDEA IN ONE SENTENCE": "ИДЕЯ ОДНИМ ПРЕДЛОЖЕНИЕМ",
  "GALO makes a finite reasoning state and its permitted changes explicit enough to calculate, inspect, and replay.":
    "GALO задаёт конечное состояние рассуждения и разрешённые изменения достаточно явно, чтобы их вычислять, проверять и воспроизводить.",
  "The formal kernel is an exact alphabet for state transitions. It is not by itself a language model, a trained memory, a proof of intelligence, or a certificate that a statement about the world is true.":
    "Формальное ядро — точный алфавит переходов состояния. Само по себе оно не является языковой моделью, обученной памятью, доказательством интеллекта или сертификатом истинности утверждения о мире.",
  "Make the possible states explicit": "Задайте возможные состояния явно",
  "Instead of hiding every distinction in an opaque vector, begin with a declared finite set of local state labels.":
    "Вместо сокрытия всех различий в непрозрачном векторе начните с объявленного конечного набора локальных меток состояний.",
  "Make every transition addressable": "Задайте точный адрес каждого перехода",
  "A level, action family, source, and active pole identify one exact transition coordinate.":
    "Уровень, семейство действий, источник и активный полюс однозначно определяют одну координату перехода.",
  "Separate calculation from interpretation": "Отделите вычисление от интерпретации",
  "The finite law computes a target. Meaning, authority, evidence, and real-world action require additional contracts.":
    "Конечный закон вычисляет целевое состояние. Смысл, полномочия, доказательства и действие в реальном мире требуют дополнительных контрактов.",
  "Running example": "Сквозной пример",
  "Imagine a dial with exactly three labelled positions. P0, P1, and P2 are names for those positions. The labels may later receive domain meaning, but the mathematics initially knows only the finite positions and their transition rules.":
    "Представьте циферблат ровно с тремя именованными позициями. P0, P1 и P2 — названия этих позиций. Позднее метки могут получить предметный смысл, но исходно математика знает только конечные позиции и правила переходов между ними.",

  "STATES, LEVELS, AND WRAPAROUND": "СОСТОЯНИЯ, УРОВНИ И ЦИКЛИЧЕСКИЙ ПЕРЕХОД",
  "A level says how many local distinctions are available.": "Уровень задаёт число доступных локальных различий.",
  "L_n uses n labelled poles. For calculation, P_i corresponds to the remainder i modulo n. This correspondence supplies exact arithmetic without claiming that a pole has one universal meaning.":
    "L_n использует n именованных полюсов. Для вычислений P_i соответствует классу вычетов i по модулю n. Это соответствие задаёт точную арифметику, но не приписывает полюсу единственный универсальный смысл.",
  "The L3 dial": "Циферблат L3",
  "Three-state cyclic dial": "Трёхпозиционный циклический циферблат",
  "After P2, one more cyclic step returns to P0. That is all wraparound means here.":
    "После P2 следующий циклический шаг возвращает к P0. Именно это здесь означает циклический переход.",
  "Three different object classes": "Три разных класса объектов",
  Label: "Метка",
  "Calculation index": "Вычислительный индекс",
  "Domain meaning": "Предметный смысл",
  "Not supplied by the algebra; it must come from a separate typed map and evidence.":
    "Не задаётся алгеброй; он должен поступать из отдельного типизированного отображения и подтверждаться доказательствами.",
  "Analogy boundary:": "Граница аналогии:",
  "The dial explains modular arithmetic, not the semantics of GALO. P0 is not automatically false, empty, bad, safe, or authorized; P1 and P2 are not quantities unless a separate model declares them to be.":
    "Циферблат объясняет арифметику по модулю, а не семантику GALO. P0 не означает автоматически ложь, пустоту, вред, безопасность или разрешение; P1 и P2 не являются величинами, пока это не установлено отдельной моделью.",

  "PLUS AND STAR WITHOUT JARGON": "PLUS И STAR БЕЗ СПЕЦИАЛЬНОЙ ТЕРМИНОЛОГИИ",
  "PLUS always moves around the dial. STAR first asks one exact reset question.":
    "PLUS всегда перемещает по циклу. STAR сначала выполняет одну точную проверку условия сброса.",
  "Both laws accept two poles and return one pole at the same level. Their complete behaviour can be reconstructed either from the formula or from the Cayley table.":
    "Оба закона принимают два полюса и возвращают один полюс того же уровня. Их полное поведение можно независимо восстановить по формуле и по таблице Кэли.",
  "PLUS · cyclic addition": "PLUS · циклическое сложение",
  "Add the indices, then wrap around.": "Сложите индексы и возьмите остаток по модулю уровня.",
  "At L3, moving two steps from index 1 lands on index 0 after wraparound.":
    "На L3 два шага от индекса 1 после циклического перехода приводят к индексу 0.",
  "STAR · left-reset-sensitive addition": "STAR · сложение с проверкой левого сброса",
  "Inspect the raw-left pole first.": "Сначала проверьте непосредственный левый операнд.",
  "The reset test examines only the raw-left input. A right P0 does not trigger it.":
    "Условие сброса проверяет только непосредственный левый вход. P0 справа не запускает сброс.",
  "Complete L3 PLUS table": "Полная таблица PLUS на L3",
  "Complete L3 STAR table": "Полная таблица STAR на L3",
  "Consistency check: every displayed table cell is obtained by substituting its row and column indices into the displayed formula. The two channels agree for all nine L3 input pairs.":
    "Проверка согласованности: каждая показанная ячейка таблицы получается подстановкой индексов строки и столбца в приведённую формулу. Оба канала совпадают для всех девяти входных пар L3.",

  "WHY P0 HAS TWO ONE-SIDED ROLES": "ПОЧЕМУ У P0 ДВЕ ОДНОСТОРОННИЕ РОЛИ",
  "The side on which P0 appears changes the statement.": "Утверждение зависит от того, с какой стороны стоит P0.",
  "For STAR at every nondegenerate level n≥2, P0 is a left zero and a right-neutral element. These are two precise one-sided properties, not a two-sided identity.":
    "Для STAR на каждом невырожденном уровне n≥2 элемент P0 является левым нулём и правым нейтральным элементом. Это два точных односторонних свойства, а не двусторонняя единица.",
  "P0 on the left": "P0 слева",
  "Left zero": "Левый нуль",
  "Whatever appears on the right, a raw-left P0 forces the result to P0.":
    "Каков бы ни был правый операнд, непосредственный левый P0 принудительно даёт результат P0.",
  "P0 on the right": "P0 справа",
  "Right-neutral element": "Правый нейтральный элемент",
  "Placing P0 on the right leaves the raw-left pole unchanged.":
    "Размещение P0 справа оставляет непосредственный левый полюс неизменным.",
  "Why P0 is not a two-sided identity": "Почему P0 не является двусторонней единицей",
  "The left identity law fails": "Закон левой единицы не выполняется",
  "A two-sided identity e would require e★x=x and x★e=x. P0 satisfies only the second equation.":
    "Для двусторонней единицы e должны выполняться равенства e★x=x и x★e=x. P0 удовлетворяет только второму равенству.",
  "At the one-element level, P0★P0=P0, so left zero, right-neutral, two-sided zero, and two-sided identity collapse into the same single equation. Every statement for n≥2 must keep this degenerate exception separate.":
    "На одноэлементном уровне P0★P0=P0, поэтому левый нуль, правый нейтральный элемент, двусторонний нуль и двусторонняя единица выражаются одним и тем же равенством. В каждом утверждении для n≥2 это вырожденное исключение должно рассматриваться отдельно.",
  "Check your understanding: does right-neutral mean commutative?":
    "Проверьте понимание: означает ли правый нейтральный элемент коммутативность?",
  "No. At L3, P0★P1=P0 while P1★P0=P1. The different results directly prove that STAR is not commutative.":
    "Нет. На L3 имеем P0★P1=P0, тогда как P1★P0=P1. Различие результатов непосредственно доказывает некоммутативность STAR.",

  "SOURCE, ACTIVE, LEFT, AND RIGHT": "ИСТОЧНИК, АКТИВНЫЙ ПОЛЮС, LEFT И RIGHT",
  "semantic inputs": "семантические входы",
  "source, active": "источник, активный полюс",
  orientation: "ориентация",
  "LEFT or RIGHT": "LEFT или RIGHT",
  "raw operands": "непосредственные операнды",
  "row, column": "строка, столбец",
  law: "закон",
  "PLUS or STAR": "PLUS или STAR",
  output: "выход",
  target: "целевое состояние",
  source: "источник",
  family: "семейство",
  active: "активный полюс",
  "The operation is fixed; the semantic roles decide where its inputs are placed.":
    "Операция фиксирована; семантические роли определяют размещение её входов.",
  "Source means the state being transformed. Active means the pole applied to it. LEFT puts source on the raw left; RIGHT puts active on the raw left. The names describe the interface roles, not standard algebraic translation terminology.":
    "Source обозначает преобразуемое исходное состояние, а active — применяемый к нему активный полюс. LEFT помещает source в непосредственную левую позицию, а RIGHT помещает туда active. Эти имена описывают роли интерфейса, а не стандартные названия алгебраических трансляций.",
  "The four typed action families at source P0 and active P2 on L3":
    "Четыре типизированных семейства действий на L3 при source=P0 и active=P2",
  "row = source · column = active": "строка = source · столбец = active",
  "row = active · column = source": "строка = active · столбец = source",
  Family: "Семейство",
  "Operand placement": "Размещение операндов",
  "Direct calculation": "Прямое вычисление",
  "Plain meaning": "Объяснение простыми словами",
  "Apply cyclic addition with the source in the table row.":
    "Применить циклическое сложение, поместив источник в строку таблицы.",
  "Swap the semantic roles on the table axes. PLUS reaches the same target because PLUS is commutative.":
    "Поменять семантические роли на осях таблицы. PLUS достигает той же цели, поскольку операция PLUS коммутативна.",
  "The source controls whether the STAR reset row is entered.":
    "Источник определяет, будет ли выбрана строка сброса STAR.",
  "The active pole is placed on the left and therefore controls the STAR reset test.":
    "Активный полюс помещается слева и поэтому определяет результат проверки условия сброса STAR.",
  "Direct witness: PLUS_LEFT and PLUS_RIGHT reach the same P2 but remain different typed addresses. STAR_LEFT reaches P0 and STAR_RIGHT reaches P2 because the reset test follows the raw-left operand.":
    "Прямой свидетель: PLUS_LEFT и PLUS_RIGHT достигают одного P2, но остаются разными типизированными адресами. STAR_LEFT достигает P0, а STAR_RIGHT — P2, поскольку проверка сброса зависит от непосредственного левого операнда.",

  "GUIDED TRANSITION LABORATORY": "ПОШАГОВАЯ ЛАБОРАТОРИЯ ПЕРЕХОДОВ",
  "Rebuild one transition from roles, formula, table, and canonical record.":
    "Восстановите один переход по ролям, формуле, таблице и канонической записи.",
  "Start with the L3 reset example, then change one control at a time. The explanation, formula channel, complete table, and record must continue to agree.":
    "Начните с примера сброса на L3, затем изменяйте по одному параметру. Объяснение, формульный канал, полная таблица и запись должны сохранять согласованность.",
  "Change one input and watch every witness update.":
    "Измените один вход и проследите обновление каждого свидетельства.",
  "FORMULA-DERIVED": "FORMULA-DERIVED",
  "Beginner transition controls": "Элементы управления вводной лабораторией переходов",
  "1. Choose how many local states exist": "1. Выберите число локальных состояний",
  "2. Choose the transition family": "2. Выберите семейство перехода",
  "3. Choose the source state": "3. Выберите исходное состояние",
  "4. Choose the active pole": "4. Выберите активный полюс",
  "Plain-language replay": "Пошаговое воспроизведение простыми словами",
  "Five small decisions produce one exact transition.": "Пять простых решений задают один точный переход.",
  "L{level} contains exactly {count} allowed state labels: {states}.":
    "L{level} содержит ровно {count} допустимых меток состояний: {states}.",
  "LEFT places source P{source} on the raw left and active P{active} on the raw right.":
    "LEFT помещает source P{source} в непосредственную левую позицию, а active P{active} — в непосредственную правую.",
  "RIGHT places active P{active} on the raw left and source P{source} on the raw right.":
    "RIGHT помещает active P{active} в непосредственную левую позицию, а source P{source} — в непосредственную правую.",
  "PLUS always adds the two indices and wraps around modulo {level}.":
    "PLUS всегда складывает два индекса и берёт результат по модулю {level}.",
  "STAR sees P0 on the raw left, so the reset clause returns P0 immediately.":
    "STAR обнаруживает P0 в непосредственной левой позиции, поэтому условие сброса немедленно возвращает P0.",
  "STAR sees a nonzero raw-left pole, so this cell follows cyclic addition modulo {level}.":
    "STAR обнаруживает ненулевой непосредственный левый полюс, поэтому эта ячейка вычисляется циклическим сложением по модулю {level}.",
  "The table address is row P{left}, column P{right}; that cell contains P{target}.":
    "Адрес в таблице: строка P{left}, столбец P{right}; в этой ячейке находится P{target}.",
  "The complete typed address is {cellId}. The target is stored as a result, not hidden in the ID.":
    "Полный типизированный адрес — {cellId}. Цель хранится как результат и не кодируется скрыто в ID.",
  "Restore the L3 reset example": "Восстановить пример сброса на L3",
  "Two-channel witness": "Двухканальный свидетель",
  "Formula and complete table must agree": "Формула и полная таблица должны совпадать",
  "Formula channel": "Формульный канал",
  "Complete {operation} table at L{level}": "Полная таблица {operation} на L{level}",
  "This browser lab recomputes finite mathematics. It does not run the release engine, interpret natural language, issue an operational receipt, or learn.":
    "Эта браузерная лаборатория заново вычисляет конечную математику. Она не запускает движок выпуска, не интерпретирует естественный язык, не формирует операционный протокол и не обучается.",

  "WHERE THE NUMBER 560 COMES FROM": "ОТКУДА БЕРЁТСЯ ЧИСЛО 560",
  "Count addresses first, laws second, and semantic role placements third.":
    "Сначала подсчитайте адреса, затем законы, после этого — размещения семантических ролей.",
  "No statistical estimate is involved. The count is a complete finite enumeration across L1–L7, and each multiplication in the derivation has a different object-level meaning.":
    "Статистическая оценка здесь не используется. Это полный конечный перебор для L1–L7, причём каждый множитель в выводе относится к отдельному классу объектов.",
  "Complete count ledger": "Полный реестр подсчёта",
  "Object counted": "Подсчитываемый объект",
  Calculation: "Вычисление",
  Count: "Количество",
  "What the number means": "Что означает число",
  "560 is not": "560 — это не",
  "560 neurons": "560 нейронов",
  "560 concepts": "560 понятий",
  "560 learned skills": "560 приобретённых навыков",
  "560 meanings": "560 смыслов",
  "560 units of intelligence": "560 единиц интеллекта",
  "Why count LEFT and RIGHT separately when PLUS gives the same targets?":
    "Зачем считать LEFT и RIGHT отдельно, если PLUS даёт одинаковые цели?",
  "Because a typed coordinate records semantic roles, not only its numeric output. Two transitions may end at the same pole while carrying different source-active provenance and different compatibility obligations.":
    "Потому что типизированная координата фиксирует семантические роли, а не только числовой результат. Два перехода могут завершаться в одном полюсе, сохраняя разное происхождение ролей source–active и разные требования совместимости.",
  "Ordered input pairs for one law": "Упорядоченные входные пары для одного закона",
  "Every row-column address for one binary operation across L1–L7.":
    "Каждый адрес «строка–столбец» для одной бинарной операции на L1–L7.",
  "Raw PLUS and STAR coordinates": "Координаты исходных законов PLUS и STAR",
  "The same addresses are evaluated once under PLUS and once under STAR.":
    "Одни и те же адреса вычисляются один раз по закону PLUS и один раз по закону STAR.",
  "Oriented typed coordinates": "Ориентированные типизированные координаты",
  "Each raw law coordinate is recorded with LEFT or RIGHT source-active role placement.":
    "Каждая координата исходного закона записывается с LEFT- или RIGHT-размещением ролей source–active.",
  "Current active runtime coordinates": "Текущие активные координаты среды исполнения",
  "The mathematical catalogue includes L1; current V4 activates L2–L7 and keeps L1 as control-only.":
    "Математический каталог включает L1; текущий V4 активирует L2–L7, а L1 использует только как контрольный уровень.",

  "FROM CELLS TO BRACKETED PROGRAMS": "ОТ ЯЧЕЕК К ПРОГРАММАМ СО СКОБКАМИ",
  "One cell is one step. A program is an explicit tree of steps.":
    "Одна ячейка задаёт один шаг. Программа представляет собой явное дерево шагов.",
  "The target of one cell may feed another cell. For PLUS the grouping does not change the result; for STAR it can. Therefore a list of operands is not a complete STAR program—the brackets are executable structure.":
    "Цель одной ячейки может стать входом другой. Для PLUS группировка не изменяет результат, а для STAR может изменить. Поэтому список операндов не задаёт полную STAR-программу: скобки являются исполняемой структурой.",
  "Left-associated L3 program": "Левоассоциированная программа на L3",
  "Right-associated L3 program": "Правоассоциированная программа на L3",
  Nonassociative: "Неассоциативность",
  "Changing the brackets can change the result. The L3 calculations above are an exact counterexample to associativity.":
    "Изменение скобок может изменить результат. Приведённые вычисления на L3 являются точным контрпримером к ассоциативности.",
  "Consistency check: direct table lookup gives P2 for the left tree and P1 for the right tree. The formula and tree evaluation agree.":
    "Проверка согласованности: прямой просмотр таблицы даёт P2 для левого дерева и P1 для правого. Формула и вычисление дерева совпадают.",

  "SYMMETRY IN PLAIN LANGUAGE": "СИММЕТРИЯ ПРОСТЫМИ СЛОВАМИ",
  "A symmetry is a reversible relabelling that leaves the declared rules unchanged.":
    "Симметрия — обратимое переименование, сохраняющее объявленные правила.",
  "At L3, multiplying indices by 2 swaps P1 and P2 while fixing P0. Recompute every PLUS and STAR cell after the swap: the operation tables retain the same structure.":
    "На L3 умножение индексов на 2 переставляет P1 и P2, фиксируя P0. Если после перестановки заново вычислить каждую ячейку PLUS и STAR, структура таблиц операций сохранится.",
  "L3 relabelling": "Переименование на L3",
  "This permutation is an automorphism because it is reversible and preserves both operations.":
    "Эта перестановка является автоморфизмом, поскольку она обратима и сохраняет обе операции.",
  "Orbit of one pole": "Орбита одного полюса",
  "P1 can be carried to P2 by an allowed symmetry. P0 forms its own orbit because every automorphism fixes it.":
    "Допустимая симметрия переводит P1 в P2. P0 образует отдельную орбиту, поскольку каждый автоморфизм фиксирует его.",
  "Stabilizer of P1": "Стабилизатор P1",
  "Only the identity relabelling leaves P1 exactly where it is.":
    "Только тождественное переименование оставляет P1 на месте.",
  "Identity fixes": "Тождественное преобразование фиксирует",
  "Swap fixes": "Перестановка фиксирует",
  Average: "Среднее",
  "Burnside consistency witness: direct inspection gives the two carrier orbits {P0} and {P1,P2}; averaging fixed points also gives two.":
    "Свидетель согласованности по Бёрнсайду: прямой просмотр даёт две орбиты носителя {P0} и {P1,P2}; усреднение числа фиксированных точек также даёт две.",
  "What symmetry does not mean": "Чего не означает симметрия",
  "Orbit membership does not make two records semantically identical and does not merge their provenance, permissions, evidence, or real-world consequences.":
    "Принадлежность одной орбите не делает две записи семантически тождественными и не объединяет их происхождение, разрешения, доказательства или последствия в реальном мире.",
  "Continue to the complete symmetry chapter": "Перейти к полной главе о симметриях",

  "MAPS BETWEEN LEVELS": "ОТОБРАЖЕНИЯ МЕЖДУ УРОВНЯМИ",
  "A shared pole name is not enough to move information lawfully between levels.":
    "Совпадения имени полюса недостаточно для законного переноса информации между уровнями.",
  "A homomorphism must preserve the declared operations. An embedding must additionally keep distinct source poles distinct. Operational transfer can require still more: provenance, alignment, loss, and authorization checks.":
    "Гомоморфизм должен сохранять объявленные операции. Вложение дополнительно должно сохранять различие исходных полюсов. Для операционного переноса могут также потребоваться проверки происхождения, согласования, потерь и полномочий.",
  "nonzero embedding": "ненулевое вложение",
  "Both laws agree on the shown pair, and exhaustive checking covers every source pair and all four typed families.":
    "Оба закона совпадают на показанной паре, а полный перебор охватывает каждую исходную пару и все четыре типизированных семейства.",
  "same-name map fails": "отображение с сохранением имён не проходит проверку",
  "There is no nonzero full-algebra embedding L3→L5. The zero homomorphism still exists, so saying ‘no morphism exists’ would be false.":
    "Ненулевого вложения полной алгебры L3→L5 не существует. Нулевой гомоморфизм существует, поэтому утверждение «морфизма не существует» было бы ложным.",
  "Zero homomorphism": "Нулевой гомоморфизм",
  "Maps every pole to P0. It preserves the laws for every ordered level pair but collapses all distinctions.":
    "Переводит каждый полюс в P0. Он сохраняет законы для каждой упорядоченной пары уровней, но схлопывает все различия.",
  Embedding: "Вложение",
  "Preserves the laws and keeps distinct poles distinct. For n≥2, nonzero A_n→A_m embeddings exist exactly when n divides m.":
    "Сохраняет законы и различие полюсов. При n≥2 ненулевые вложения A_n→A_m существуют в точности тогда, когда n делит m.",
  "Operational transfer": "Операционный перенос",
  "Requires an auditable alignment decision; a mathematical embedding alone does not authorize a real runtime transfer.":
    "Требует проверяемого решения о согласовании; одного математического вложения недостаточно для разрешения реального переноса в среде исполнения.",
  "These archived morphism receipts belong to the compatibility and audit layer. The legacy morphism_v1 module is excluded from the current V4 runtime wheel and is not a current public API capability.":
    "Эти архивные протоколы морфизмов относятся к слою совместимости и аудита. Устаревший модуль morphism_v1 исключён из текущего пакета среды исполнения V4 и не является возможностью текущего публичного API.",

  "HOW THE MATHEMATICS FITS THE ARCHITECTURE": "КАК МАТЕМАТИКА СООТНОСИТСЯ С АРХИТЕКТУРОЙ",
  "The formal alphabet, the current runtime, and the target learning system are three different layers.":
    "Формальный алфавит, текущая среда исполнения и целевая обучающая система — три разных слоя.",
  "The mathematics supplies exact finite structure. The current V4 release uses only a bounded deterministic execution slice. The wider World Atlas and persistent learning loop remain an architectural target.":
    "Математика задаёт точную конечную структуру. Текущий выпуск V4 использует только ограниченный детерминированный слой исполнения. Более широкий World Atlas и сохраняемый цикл обучения остаются целевой архитектурой.",
  "Finite state alphabet": "Конечный алфавит состояний",
  "L1–L7 provide named finite carriers. A pole is a local state label, not a word meaning or neuron.":
    "L1–L7 задают именованные конечные носители. Полюс — локальная метка состояния, а не значение слова или нейрон.",
  "Frozen transition laws": "Зафиксированные законы переходов",
  "PLUS and STAR turn every ordered pair of poles into one exact target pole.":
    "PLUS и STAR переводят каждую упорядоченную пару полюсов в один точно определённый целевой полюс.",
  "Typed role placement": "Типизированное размещение ролей",
  "LEFT and RIGHT retain which input is the source and which input is active.":
    "LEFT и RIGHT сохраняют сведения о том, какой вход является источником, а какой — активным.",
  "Bounded current selection": "Текущий выбор в ограниченной области",
  "A deterministic selector orders a finite declared candidate frontier for exactly two fixed source patterns.":
    "Детерминированный селектор упорядочивает объявленное конечное множество кандидатов ровно для двух фиксированных шаблонов источника.",
  "Receipt-backed execution": "Исполнение, подтверждаемое протоколами",
  "Membership, one-shot execution, rollback, revocation, and work accounting are recorded within the current scope.":
    "Принадлежность, одноразовое исполнение, откат, отзыв и учёт работы фиксируются в текущей области.",
  "Adaptive World Atlas loop": "Адаптивный цикл World Atlas",
  "Persistent semantic state, partner-grounded evaluation, multi-step programs, and learning remain target architecture.":
    "Сохраняемое семантическое состояние, оценка на данных партнёра, многошаговые программы и обучение остаются целевой архитектурой.",
  "Current V4 actually does": "Что фактически делает текущий V4",
  "works inside a committed finite candidate universe":
    "работает внутри зафиксированного конечного универсума кандидатов",
  "orders a 440-candidate frontier for each of two fixed source patterns":
    "упорядочивает по 440 кандидатов для каждого из двух фиксированных шаблонов источника",
  "executes one bounded action and records receipts": "исполняет одно ограниченное действие и формирует протоколы",
  "performs zero Atlas semantic reads, rank effects, and learning writes":
    "выполняет ноль семантических чтений Atlas, воздействий на ранг и обучающих записей",
  "Current V4 does not yet do": "Чего текущий V4 пока не делает",
  "understand arbitrary natural-language observations": "не понимает произвольные наблюдения на естественном языке",
  "run a persistent learned policy": "не исполняет сохраняемую обученную политику",
  "contain a trained World Atlas": "не содержит обученного World Atlas",
  "prove external operational gain or General AI": "не доказывает внешний операционный выигрыш или General AI",
  "The mathematical composition chapter describes a formal programming model. It must not be presented as a current multi-step runtime capability until the operational contracts and receipts exist.":
    "Глава о математической композиции описывает формальную модель программирования. Её нельзя представлять как текущую многошаговую возможность среды исполнения, пока не существуют соответствующие операционные контракты и протоколы.",
  "Current V4 finite scope ledger": "Реестр конечной области текущего V4",
  Object: "Объект",
  "Exact value": "Точное значение",
  Interpretation: "Интерпретация",
  "Formal typed catalogue": "Формальный типизированный каталог",
  "L1–L7 mathematical coordinates": "Математические координаты L1–L7",
  "Active typed catalogue": "Активный типизированный каталог",
  "L2–L7 active; L1 control-only": "L2–L7 активны; L1 используется только как контрольный уровень",
  "Committed descriptors": "Зафиксированные дескрипторы",
  "Declared finite candidate universe": "Объявленный конечный универсум кандидатов",
  "Executable descriptors": "Исполнимые дескрипторы",
  "Four allowed action kinds": "Четыре разрешённых вида действий",
  "Frontier per source pattern": "Множество кандидатов для одного шаблона источника",
  "Deterministically ordered candidates": "Детерминированно упорядоченные кандидаты",
  "Accepted source patterns": "Принимаемые шаблоны источника",
  "Fixed patterns, not arbitrary text": "Фиксированные шаблоны, а не произвольный текст",
  "Arity / route depth": "Арность / глубина маршрута",
  "Binary, one-step current contour": "Текущий бинарный одношаговый контур",

  "HOW TO READ GALO EVIDENCE": "КАК ЧИТАТЬ ДОКАЗАТЕЛЬНЫЕ МАТЕРИАЛЫ GALO",
  "A PASS is meaningful only together with its exact contour and terminal witness.":
    "Статус PASS имеет смысл только вместе с точным контуром и терминальным свидетелем.",
  "GALO separates mathematical derivation, executable tests, archive replay, operational evaluation, and open boundaries. Evidence from one layer does not automatically authorize a claim in another.":
    "GALO разделяет математический вывод, исполняемые тесты, воспроизведение архива, операционную оценку и открытые границы. Доказательство из одного слоя не разрешает автоматически утверждение в другом.",
  "Does the statement follow from the declared finite laws?": "Следует ли утверждение из объявленных конечных законов?",
  "The 560-coordinate count and the role of P0 are exhaustively derivable.":
    "Число 560 и роль P0 выводятся полным перебором.",
  "Did independent executable checks reproduce the derivation?":
    "Воспроизвели ли независимые исполняемые проверки этот вывод?",
  "All finite tables, typed cells, automorphisms, and homomorphisms are enumerated in tests.":
    "В тестах перебраны все конечные таблицы, типизированные ячейки, автоморфизмы и гомоморфизмы.",
  "Did the supplied archive pass the named replay contour?":
    "Прошёл ли предоставленный архив указанный контур воспроизведения?",
  "Fresh STATIC and FAST passed; the stored FULL receipt reports 1,366/1,366.":
    "Свежие STATIC и FAST завершились со статусом PASS; сохранённый протокол FULL сообщает 1,366/1,366.",
  "Is a required condition missing, blocked, or outside the tested scope?":
    "Отсутствует ли обязательное условие, заблокирована ли проверка или находится ли она вне проверенной области?",
  "Fresh FULL was not run and CPython 3.13 was unavailable in the review session.":
    "Свежий FULL не запускался, а CPython 3.13 был недоступен в сессии проверки.",
  "Would the claim require external data or a stronger evaluator?":
    "Требуются ли для утверждения внешние данные или более строгий оценщик?",
  "External operational gain and arbitrary free-text reasoning are not proven.":
    "Внешний операционный выигрыш и рассуждение по произвольному свободному тексту не доказаны.",
  "Current legal release status": "Точный юридический статус текущего выпуска",
  "Fresh STATIC and FAST are session replays. The FULL result is stored release evidence and was not freshly replayed in this review.":
    "STATIC и FAST были заново воспроизведены в сессии. Результат FULL является сохранённым свидетельством выпуска и в этой проверке заново не воспроизводился.",
  "Inspect the complete evidence matrix": "Изучить полную матрицу доказательств",

  "PLAIN-LANGUAGE GLOSSARY": "СЛОВАРЬ ПРОСТЫМИ СЛОВАМИ",
  "Open a term for its intuitive meaning and exact mathematical contract.":
    "Раскройте термин, чтобы увидеть понятное объяснение и точный математический контракт.",
  "The plain explanation supports understanding; the formal line remains the authoritative definition.":
    "Объяснение простыми словами помогает пониманию; формальная строка остаётся авторитетным определением.",
  Carrier: "Носитель",
  "The complete finite set of allowed states at one level.":
    "Полный конечный набор допустимых состояний одного уровня.",
  "Q_n={P0,…,P_(n−1)}.": "Q_n={P0,…,P_(n−1)}.",
  Pole: "Полюс",
  "One named position inside a carrier.": "Одна именованная позиция внутри носителя.",
  "P_i is identified with residue i modulo n for calculation.":
    "Для вычислений P_i отождествляется с классом вычетов i по модулю n.",
  Level: "Уровень",
  "The choice of how many distinct local states are available.": "Выбор числа доступных различных локальных состояний.",
  "L_n uses the n-element carrier Q_n; a larger n is not automatically better or more intelligent.":
    "L_n использует n-элементный носитель Q_n; большее n не означает автоматически более высокое качество или интеллект.",
  "Binary operation": "Бинарная операция",
  "A rule that accepts two allowed states and returns one allowed state.":
    "Правило, принимающее два допустимых состояния и возвращающее одно допустимое состояние.",
  "f:Q_n×Q_n→Q_n.": "f:Q_n×Q_n→Q_n.",
  "Modulo n": "По модулю n",
  "Wrap around to P0 after reaching n, like a finite dial.":
    "Циклический возврат к P0 после достижения n, как на конечном циферблате.",
  "Indices differing by a multiple of n represent the same residue class.":
    "Индексы, различающиеся на число, кратное n, представляют один класс вычетов.",
  "Cayley table": "Таблица Кэли",
  "A complete lookup table for a finite binary operation.": "Полная таблица значений конечной бинарной операции.",
  "Row is the left operand, column is the right operand, and the cell is the result.":
    "Строка задаёт левый операнд, столбец — правый, а ячейка — результат.",
  PLUS: "PLUS",
  "Cyclic movement around the finite carrier.": "Циклическое перемещение по конечному носителю.",
  "PLUS_n(P_i,P_j)=P_((i+j) mod n); it forms the cyclic group C_n.":
    "PLUS_n(P_i,P_j)=P_((i+j) mod n); эта операция образует циклическую группу C_n.",
  STAR: "STAR",
  "A reset-sensitive cyclic rule: a left P0 resets; otherwise it follows PLUS.":
    "Циклическое правило с условием сброса: P0 слева вызывает сброс; иначе применяется PLUS.",
  "STAR_n(P_i,P_j)=P0 when i=0 and P_((i+j) mod n) otherwise.":
    "STAR_n(P_i,P_j)=P0 при i=0 и P_((i+j) mod n) в противном случае.",
  "An element that forces the result when it is placed on the left.":
    "Элемент, который принудительно задаёт результат, находясь слева.",
  "P0★x=P0 for every x.": "P0★x=P0 для каждого x.",
  "An element that leaves the other input unchanged when placed on the right.":
    "Элемент, оставляющий другой вход неизменным при размещении справа.",
  "x★P0=x; this does not make P0 a two-sided identity.": "x★P0=x; это не делает P0 двусторонней единицей.",
  "Source state": "Исходное состояние",
  "The state from which a typed transition begins.": "Состояние, с которого начинается типизированный переход.",
  "The source role is retained even when operand swapping gives the same numeric target.":
    "Роль источника сохраняется, даже если перестановка операндов даёт ту же числовую цель.",
  "Active pole": "Активный полюс",
  "The second semantic input applied to the source.": "Второй семантический вход, применяемый к источнику.",
  "LEFT/RIGHT determines whether active occupies the raw right or left operand position.":
    "LEFT/RIGHT определяет, занимает ли active непосредственную правую или левую позицию операнда.",
  "Typed coordinate": "Типизированная координата",
  "A complete address for one deterministic transition.": "Полный адрес одного детерминированного перехода.",
  "level:family:source:active, with a separately computed target.":
    "level:family:source:active с отдельно вычисляемой целью.",
  Composition: "Композиция",
  "Using the output of one transition as an input to the next.":
    "Использование результата одного перехода как входа следующего.",
  "For nonassociative STAR, the syntax tree or brackets are part of the program.":
    "Для неассоциативной STAR синтаксическое дерево или скобки являются частью программы.",
  Automorphism: "Автоморфизм",
  "A reversible relabelling that leaves every declared rule unchanged.":
    "Обратимое переименование, сохраняющее каждое объявленное правило.",
  "A bijection from an algebra to itself preserving its operations and named constants.":
    "Биекция алгебры на себя, сохраняющая её операции и именованные константы.",
  Orbit: "Орбита",
  "All coordinates reachable from one coordinate by allowed symmetries.":
    "Все координаты, достижимые из одной координаты посредством допустимых симметрий.",
  "Orb(x)={g·x | g∈G}.": "Orb(x)={g·x | g∈G}.",
  Stabilizer: "Стабилизатор",
  "The symmetries that leave one selected coordinate unchanged.":
    "Симметрии, оставляющие выбранную координату неизменной.",
  "Stab(x)={g∈G | g·x=x}.": "Stab(x)={g∈G | g·x=x}.",
  "Burnside's lemma": "Лемма Бёрнсайда",
  "A second way to count symmetry classes by averaging fixed points.":
    "Второй способ подсчёта классов симметрии путём усреднения числа фиксированных точек.",
  "|X/G|=(1/|G|)Σ_g |Fix(g)|.": "|X/G|=(1/|G|)Σ_g |Fix(g)|.",
  Homomorphism: "Гомоморфизм",
  "A map between levels that preserves the declared operations.":
    "Отображение между уровнями, сохраняющее объявленные операции.",
  "It need not be injective; the zero homomorphism exists for every ordered level pair.":
    "Оно не обязано быть инъективным; нулевой гомоморфизм существует для каждой упорядоченной пары уровней.",
  "A structure-preserving map that keeps different source states different.":
    "Сохраняющее структуру отображение, при котором различные исходные состояния остаются различными.",
  "An injective homomorphism; nonzero A_n→A_m embeddings for n≥2 exist exactly when n divides m.":
    "Инъективный гомоморфизм; при n≥2 ненулевые вложения A_n→A_m существуют в точности тогда, когда n делит m.",
  Receipt: "Протокол исполнения",
  "A machine-readable record of what a bounded execution checked and did.":
    "Машиночитаемая запись того, что проверило и выполнило ограниченное исполнение.",
  "A receipt is an operational witness, not a mathematical theorem or real-world truth certificate.":
    "Протокол исполнения — операционный свидетель, а не математическая теорема и не сертификат истинности в реальном мире.",
  Boundary: "Граница",
  "An explicit stop: the available evidence does not authorize the stronger conclusion.":
    "Явная остановка: доступные доказательства не разрешают более сильный вывод.",
  "BOUNDARY is a terminal status with a named missing condition or counterexample.":
    "BOUNDARY — терминальный статус с указанным отсутствующим условием или контрпримером.",

  "COMMON MISCONCEPTIONS": "РАСПРОСТРАНЁННЫЕ ЗАБЛУЖДЕНИЯ",
  "Six tempting shortcuts—and the exact correction for each one.":
    "Шесть соблазнительных упрощений и точное исправление каждого.",
  "P0 is the identity of STAR.": "P0 является единицей STAR.",
  "For n≥2, P0 is only right-neutral and only a left zero; STAR has no two-sided identity.":
    "При n≥2 элемент P0 является только правым нейтральным элементом и левым нулём; двусторонней единицы у STAR нет.",
  "L7 is more intelligent than L3.": "L7 интеллектуальнее L3.",
  "A higher level only offers more local distinctions. Intelligence and task value require separate evidence.":
    "Более высокий уровень предоставляет лишь больше локальных различий. Интеллект и ценность для задачи требуют отдельных доказательств.",
  "The 560 cells are concepts or neurons.": "560 ячеек — это понятия или нейроны.",
  "They are formal transition addresses. Semantics, memory, and learned parameters are separate object classes.":
    "Это формальные адреса переходов. Семантика, память и обученные параметры относятся к отдельным классам объектов.",
  "An orbit means several states are semantically identical.":
    "Орбита означает, что несколько состояний семантически тождественны.",
  "An orbit records equivalence under one declared symmetry action; it does not merge meaning, provenance, or authority.":
    "Орбита фиксирует эквивалентность относительно одного объявленного действия симметрий; она не объединяет смысл, происхождение или полномочия.",
  "There is no morphism from L3 to L5.": "Морфизма из L3 в L5 не существует.",
  "The zero homomorphism exists. What does not exist is a nonzero or injective full-algebra embedding.":
    "Нулевой гомоморфизм существует. Не существует ненулевого или инъективного вложения полной алгебры.",
  "Verified finite mathematics proves learning or General AI.":
    "Верифицированная конечная математика доказывает обучение или General AI.",
  "It proves only the finite claims inside its contract. Persistent learning and General AI remain unclaimed.":
    "Она доказывает только конечные утверждения внутри своего контракта. Персистентное обучение и General AI по-прежнему не заявляются.",

  "CONTINUE AT YOUR DEPTH": "ПРОДОЛЖИТЬ НА НУЖНОМ УРОВНЕ ГЛУБИНЫ",
  "You now have the conceptual map. Choose the next verification layer.":
    "Теперь у вас есть понятийная карта. Выберите следующий слой верификации.",
  "Exact formal kernel": "Точное формальное ядро",
  "Tables, 560 coordinates, ranks, programs, and morphisms": "Таблицы, 560 координат, ранги, программы и морфизмы",
  "Academic symmetry": "Академическая теория симметрий",
  "Automorphisms, orbits, stabilizers, and Burnside": "Автоморфизмы, орбиты, стабилизаторы и лемма Бёрнсайда",
  "Release evidence": "Доказательства выпуска",
  "Archive receipts, current runtime, and claim boundaries":
    "Протоколы архива, текущая среда исполнения и границы утверждений",
  "End of beginner contour: finite mathematics is established and independently tested; persistent learning, a trained current Atlas, external operational gain, and General AI are not established.":
    "Конец вводного контура: конечная математика установлена и независимо проверена; персистентное обучение, обученный текущий Atlas, внешний операционный выигрыш и General AI не установлены.",

  "NEW TO THE MATHEMATICS?": "ВПЕРВЫЕ ЗНАКОМИТЕСЬ С МАТЕМАТИКОЙ?",
  "Build GALO from one three-state example before opening the academic reference.":
    "Разберите GALO на одном примере с тремя состояниями, прежде чем переходить к академическому изложению.",
  "The beginner chapter explains every symbol, reconstructs transitions independently from tables and formulas, and keeps the formal model separate from the current runtime and target learning architecture.":
    "Вводная глава объясняет каждый символ, независимо восстанавливает переходы по таблицам и формулам и отделяет формальную модель от текущей среды исполнения и целевой обучающей архитектуры.",
  "The beginner chapter introduces the main symbols with a reading legend, reconstructs transitions independently from tables and formulas, and keeps the formal model separate from the current runtime and target learning architecture.":
    "Вводная глава знакомит с основными символами и поясняет их чтение, независимо восстанавливает переходы по таблицам и формулам и отделяет формальную модель от текущей среды исполнения и целевой обучающей архитектуры.",
  "Open the guided theory": "Открыть пошаговую теорию",
  "Name the finite states": "Задайте имена конечным состояниям",
  "A level L_n declares exactly n local labels P0 through P_(n−1).":
    "Уровень L_n объявляет ровно n локальных меток от P0 до P_(n−1).",
  "Apply one frozen law": "Примените один зафиксированный закон",
  "PLUS performs cyclic addition; STAR adds a precise raw-left P0 reset clause.":
    "PLUS выполняет циклическое сложение; STAR добавляет точное условие сброса при P0 в непосредственной левой позиции.",
  "Preserve the input roles": "Сохраните роли входов",
  "LEFT and RIGHT record how source and active are placed on the table axes.":
    "LEFT и RIGHT фиксируют, как source и active размещаются на осях таблицы.",
  "Stop at the evidence boundary": "Остановитесь на границе доказательств",
  "A formal target is not yet world meaning, a useful action, a learned policy, or General AI.":
    "Формальная цель ещё не является смыслом в мире, полезным действием, обученной политикой или General AI.",
  "ILLUSTRATIVE TARGET RESOLUTION LADDER": "ИЛЛЮСТРАТИВНАЯ ЦЕЛЕВАЯ ЛЕСТНИЦА РАЗРЕШЕНИЯ",
  "Illustrative target resolution ladder": "Иллюстративная целевая лестница разрешения",
  "The target architecture proposes choosing only the level needed to preserve a task-relevant distinction.":
    "Целевая архитектура предусматривает выбор только того уровня, который необходим для сохранения значимого для задачи различия.",
  "More poles are not automatically better. Current V4 does not prove observation-conditioned level selection.":
    "Большее число полюсов не означает автоматически более высокое качество. Текущий V4 не доказывает выбор уровня, обусловленный наблюдением.",
  "2 local states": "2 локальных состояния",
  "3 local states": "3 локальных состояния",
  "4 local states": "4 локальных состояния",
  "5 local states": "5 локальных состояний",
  "6 local states": "6 локальных состояний",
  "7 local states": "7 локальных состояний",

  "GALO makes a finite local transition alphabet explicit enough to calculate, inspect, and replay.":
    "GALO задаёт конечный локальный алфавит переходов достаточно явно, чтобы его можно было вычислять, проверять и воспроизводить.",
  "A local pole is not the agent's complete world state. The target architecture may use typed coordinates as components of an explicit World Atlas, but the formal kernel alone is not a language model, trained memory, proof of intelligence, or truth certificate.":
    "Локальный полюс не является полным состоянием мира агента. Целевая архитектура может использовать типизированные координаты как компоненты явного World Atlas, однако само формальное ядро не является языковой моделью, обученной памятью, доказательством интеллекта или сертификатом истинности.",
  "Object boundary ledger": "Реестр границ классов объектов",
  "From a local pole to an execution witness: do not mix object classes.":
    "От локального полюса к свидетелю исполнения: не смешивайте классы объектов.",
  "Layer / status": "Слой / статус",
  "Exact form": "Точная форма",
  "What it is": "Что это",
  "What it is not": "Чем это не является",
  "Typed transition coordinate": "Типизированная координата перехода",
  "One local state label inside one finite carrier.":
    "Одна локальная метка состояния внутри одного конечного носителя.",
  "Not a complete thought, world model, semantic concept, or global agent state.":
    "Не является законченной мыслью, моделью мира, семантическим понятием или глобальным состоянием агента.",
  "One address that fixes a level, law family, and the semantic roles of both inputs.":
    "Один адрес, фиксирующий уровень, семейство закона и семантические роли обоих входов.",
  "Its target is calculated; its domain meaning and permission are separate contracts.":
    "Его цель вычисляется; предметный смысл и разрешение задаются отдельными контрактами.",
  "Committed descriptor": "Зафиксированный дескриптор",
  "One member of the finite candidate universe committed by the release.":
    "Один элемент конечного универсума кандидатов, зафиксированного выпуском.",
  "A descriptor may be non-executable and is not a learned concept or completed action.":
    "Дескриптор может быть неисполняемым и не является обученным понятием или завершённым действием.",
  "Candidate frontier": "Множество доступных кандидатов",
  "The parity-filtered candidates that the deterministic selector is allowed to order.":
    "Кандидаты, отфильтрованные по чётности, которые разрешено упорядочивать детерминированному селектору.",
  "The order is hash-derived, not a semantic judgment, probability, or learned preference.":
    "Порядок выводится из хеша, а не из семантического суждения, вероятности или обученного предпочтения.",
  "One-shot handle": "Одноразовый дескриптор исполнения",
  "A runtime capability bound to one admitted candidate and one bounded use.":
    "Возможность среды исполнения, привязанная к одному допущенному кандидату и одному ограниченному применению.",
  "Current rollback, revocation, and sequencing are process-local; no persistent trusted head is implemented.":
    "Текущие откат, отзыв и управление последовательностью локальны для процесса; сохраняемая доверенная вершина не реализована.",
  "The target architecture's explicit, revisable model of a domain and its alternatives.":
    "Явная и допускающая ревизию модель предметной области и её альтернатив в целевой архитектуре.",
  "A trained current Atlas is not present and Atlas state has no effect on current V4 ranking.":
    "Обученный текущий Atlas отсутствует, а состояние Atlas не влияет на ранжирование текущего V4.",
  "Execution receipt": "Протокол исполнения",
  "A machine-readable witness of what one bounded contour checked and executed.":
    "Машиночитаемый свидетель того, что проверил и исполнил один ограниченный контур.",
  "Not a mathematical theorem, truth certificate, customer outcome, or proof of intelligence.":
    "Не является математической теоремой, сертификатом истинности, результатом для клиента или доказательством интеллекта.",

  "WHY THE PROJECT SPEAKS OF TWO TOWERS": "ПОЧЕМУ В ПРОЕКТЕ ГОВОРИТСЯ О ДВУХ БАШНЯХ",
  "PLUS and STAR use the same poles but preserve different algebraic structure.":
    "PLUS и STAR используют одни и те же полюса, но задают разные алгебраические структуры.",
  "PLUS family": "Семейство PLUS",
  "PLUS is associative and commutative, P0 is a two-sided identity, and every pole has an inverse. If the named origin is forgotten, affine maps form the larger torsor symmetry group Hol(C_n).":
    "PLUS ассоциативна и коммутативна, P0 является двусторонним нейтральным элементом, а каждый полюс имеет обратный. Если забыть выделенное начало отсчёта, аффинные отображения образуют более широкую группу симметрий торсора Hol(C_n).",
  "STAR family": "Семейство STAR",
  "STAR is a pointed total magma with a left zero and right-neutral P0. At n≥2 it is noncommutative, nonassociative, and has no affine translation symmetry layer.":
    "STAR — тотальная магма с выделенным элементом P0, являющимся левым нулём и правым нейтральным элементом. При n≥2 она некоммутативна, неассоциативна и не имеет слоя симметрий аффинных сдвигов.",
  "Tower is project language for the indexed L1–L7 families. It does not mean that every neighboring level embeds into the next one.":
    "«Башня» — проектное название индексированных семейств L1–L7. Оно не означает, что каждый уровень вкладывается в следующий соседний уровень.",

  "COMPLETE NONEXISTENCE PROOF · n≥2": "ПОЛНОЕ ДОКАЗАТЕЛЬСТВО ОТСУТСТВИЯ · n≥2",
  "No other pole can secretly be a two-sided identity.":
    "Никакой другой полюс также не может быть двусторонней единицей.",
  "If e were a two-sided identity, the right-identity equation would have to hold for the nonzero pole P1.":
    "Если бы e была двусторонней единицей, равенство правой единицы должно было бы выполняться для ненулевого полюса P1.",
  "The STAR nonzero row follows cyclic addition, so this equation forces e to have index 0.":
    "Ненулевая строка STAR подчиняется циклическому сложению, поэтому это равенство вынуждает e иметь индекс 0.",
  "The only possible candidate then fails the left-identity equation.":
    "После этого единственный возможный кандидат не удовлетворяет равенству левой единицы.",
  "Conclusion: STAR has no two-sided identity at any level n≥2.":
    "Вывод: STAR не имеет двусторонней единицы ни на одном уровне n≥2.",

  "Source is the local pole from which this typed transition begins. Active is the pole applied to that source. LEFT puts source on the raw left; RIGHT puts active on the raw left. These names describe interface roles, not a complete World Atlas state and not standard algebraic translation terminology.":
    "Source — локальный полюс, с которого начинается типизированный переход. Active — полюс, применяемый к этому источнику. LEFT помещает source в непосредственную левую позицию, а RIGHT помещает туда active. Эти имена описывают роли интерфейса, а не полное состояние World Atlas и не стандартную терминологию алгебраических трансляций.",
  "Source-active role placement flow": "Схема размещения ролей source–active",
  "raw left = source · raw right = active":
    "непосредственный левый операнд = source · непосредственный правый операнд = active",
  "raw left = active · raw right = source":
    "непосредственный левый операнд = active · непосредственный правый операнд = source",
  "STANDARD TRANSLATIONS AND RANK · L3 · active P2": "СТАНДАРТНЫЕ ТРАНСЛЯЦИИ И РАНГ · L3 · active P2",
  "Fix the active pole and watch which outputs the source can reach.":
    "Зафиксируйте активный полюс и проследите, каких выходов может достичь источник.",
  "standard right translation": "стандартная правая трансляция",
  "standard left translation": "стандартная левая трансляция",
  "The reset row collapses two sources to P0, so one output is lost.":
    "Строка сброса переводит два источника в P0, поэтому один возможный выход теряется.",
  "A nonzero fixed left pole cycles through every L3 output, so no output is lost.":
    "Фиксированный ненулевой левый полюс циклически проходит через все выходы L3, поэтому ни один выход не теряется.",
  "Rank means the number of distinct outputs. The ABI name and the standard algebraic translation name point in opposite directions because the fixed active pole occupies the other operand slot.":
    "Ранг означает число различных выходов. Имя ABI и стандартное название алгебраической трансляции указывают противоположные стороны, поскольку фиксированный активный полюс занимает другую позицию операнда.",
  "Why a PLUS affine shift is not a STAR symmetry": "Почему аффинный сдвиг PLUS не является симметрией STAR",
  "The shift moves the distinguished reset point P0. It is valid for the unpointed PLUS torsor but fails the STAR law.":
    "Сдвиг перемещает выделенную точку сброса P0. Он допустим для торсора PLUS без выделенного начала, но не сохраняет закон STAR.",

  "FROM TWO L3 POLE ORBITS TO 224 TYPED ORBITS": "ОТ ДВУХ ОРБИТ ПОЛЮСОВ L3 К 224 ТИПИЗИРОВАННЫМ ОРБИТАМ",
  "The counted set changes, so the number changes.": "Подсчитываемое множество меняется, поэтому меняется и число.",
  "The example above acts on three individual poles at L3. The whole-tower count acts on ordered source-active pairs, separately inside every level and every one of the four family fibres.":
    "Пример выше рассматривает действие на трёх отдельных полюсах L3. Подсчёт для всей башни рассматривает упорядоченные пары source–active отдельно внутри каждого уровня и каждого из четырёх волокон, заданных фиксированным семейством.",
  "Fibrewise orbit ledger from L1 through L7": "Реестр орбит по отдельным волокнам от L1 до L7",
  "No orbit crosses a level or typed-family boundary":
    "Ни одна орбита не пересекает границу уровня или типизированного семейства",
  "Pole orbits": "Орбиты полюсов",
  "Ordered-pair orbits": "Орбиты упорядоченных пар",
  "Four-family typed orbits": "Типизированные орбиты четырёх семейств",
  "Local L3 carrier witness: direct inspection gives the two pole orbits {P0} and {P1,P2}; averaging fixed poles also gives two.":
    "Локальный свидетель для носителя L3: прямой просмотр даёт две орбиты полюсов {P0} и {P1,P2}; усреднение числа фиксированных полюсов также даёт две.",
  "At L3 specifically there are two pole orbits, five ordered-pair orbits, and therefore twenty typed orbits. The number 18 is only a sum of seven local group orders, not one global 18-element group.":
    "Именно на L3 имеются две орбиты полюсов, пять орбит упорядоченных пар и, следовательно, двадцать типизированных орбит. Число 18 — лишь сумма порядков семи локальных групп, а не порядок одной глобальной 18-элементной группы.",
  "Whole-tower consistency witness: independent direct pair-orbit traversal and the Burnside fixed-point formula both reconstruct 224 typed orbits.":
    "Свидетель согласованности всей башни: независимый прямой перебор орбит пар и формула Бёрнсайда по фиксированным точкам одинаково восстанавливают 224 типизированные орбиты.",

  "The direct receipt rejects this same-index candidate. A separate order argument below rules out every nonzero full-algebra embedding L3→L5. The zero homomorphism still exists, so saying ‘no morphism exists’ would be false.":
    "Прямой протокол отклоняет этот кандидат с сохранением индексов. Отдельный аргумент через порядок элементов ниже исключает любое ненулевое вложение полной алгебры L3→L5. Нулевой гомоморфизм по-прежнему существует, поэтому утверждение «морфизма не существует» было бы ложным.",
  "INDEPENDENT EMBEDDING THEOREM · n≥2": "НЕЗАВИСИМАЯ ТЕОРЕМА О ВЛОЖЕНИЯХ · n≥2",
  "A nonzero embedding A_n→A_m exists exactly when n divides m.":
    "Ненулевое вложение A_n→A_m существует в точности тогда, когда n делит m.",
  "PLUS preservation makes the image of the generator determine the entire map.":
    "Сохранение PLUS приводит к тому, что образ образующего однозначно определяет всё отображение.",
  "If the map is injective, the image of P1 must retain its exact cyclic order n.":
    "Если отображение инъективно, образ P1 должен сохранять его точный циклический порядок n.",
  "A cyclic group of order m contains an element of order n exactly when n divides m.":
    "Циклическая группа порядка m содержит элемент порядка n в точности тогда, когда n делит m.",
  "Therefore the failure is structural, not merely a defect of the same-index candidate.":
    "Следовательно, отказ имеет структурную природу, а не является лишь недостатком кандидата с сохранением индексов.",
  "Conversely, when n divides m, scaled maps h(P_i)=P_((u·m/n)i mod m) for unit u modulo n provide the nonzero embeddings; the archived replay selects one canonical scaling.":
    "Обратно, когда n делит m, масштабированные отображения h(P_i)=P_((u·m/n)i mod m), где u — обратимый класс по модулю n, задают ненулевые вложения; архивное воспроизведение выбирает одно каноническое масштабирование.",
  "COMPATIBILITY_ONLY:": "COMPATIBILITY_ONLY:",

  "CURRENT V4 · EXACT REPLAYABLE PIPELINE": "CURRENT V4 · ТОЧНЫЙ ВОСПРОИЗВОДИМЫЙ КОНВЕЙЕР",
  "Current V4 descriptor arithmetic": "Арифметика дескрипторов текущего V4",
  "The release counts are derived in this order": "Числа выпуска выводятся в следующем порядке",
  Value: "Значение",
  "Independent arithmetic": "Независимое вычисление",
  "One release coverage quantum across four typed families and the active levels L2–L7.":
    "Одна единица покрытия выпуска для четырёх типизированных семейств и активных уровней L2–L7.",
  "The complete committed descriptor universe in the current release.":
    "Полный зафиксированный универсум дескрипторов текущего выпуска.",
  "The subset whose declared kinds are executable in current V4.":
    "Подмножество, объявленные виды которого исполнимы в текущем V4.",
  "The even- or odd-parity frontier exposed by one of the two accepted source patterns.":
    "Множество кандидатов чётной или нечётной части перебора, открываемое одним из двух принимаемых шаблонов источника.",
  "Match one fixed source pattern": "Сопоставить один фиксированный шаблон источника",
  "Only two exact closed patterns are accepted; arbitrary free text is outside this selector contract.":
    "Принимаются только два точных закрытых шаблона; произвольный свободный текст находится вне контракта селектора.",
  "Enter the committed universe": "Войти в зафиксированный универсум",
  "Every candidate must already belong to the finite release commitment.":
    "Каждый кандидат должен заранее входить в зафиксированный конечный универсум выпуска.",
  "Filter executable kinds": "Отфильтровать исполнимые виды",
  "The executable ontology is limited to FREE_FRAME, JOINT_COMPOSITION, PROBE, and ROUTE.":
    "Исполнимая онтология ограничена видами FREE_FRAME, JOINT_COMPOSITION, PROBE и ROUTE.",
  "Choose a parity frontier": "Выбрать часть перебора по чётности",
  "The recognized source pattern selects one half of the executable enumeration.":
    "Распознанный шаблон источника выбирает одну половину исполнимого перебора.",
  "Derive a deterministic order": "Получить детерминированный порядок",
  "The hash order is replayable; Atlas semantic reads, rank effects, and learning writes are all zero.":
    "Порядок по хешу воспроизводим; семантические чтения Atlas, воздействия на ранг и обучающие записи равны нулю.",
  "Bind a one-shot handle": "Связать одноразовый дескриптор исполнения",
  "The selected candidate is bound to one process-local execution contour.":
    "Выбранный кандидат привязывается к одному локальному для процесса контуру исполнения.",
  "Execute one bounded action": "Исполнить одно ограниченное действие",
  "Current V4 does not execute the formal multi-step program trees described in the mathematics chapter.":
    "Текущий V4 не исполняет формальные многошаговые деревья программ, описанные в математической главе.",
  "Record the receipt": "Зафиксировать протокол исполнения",
  "The receipt supports bounded replay and accounting; it does not measure external gain or truth.":
    "Протокол поддерживает ограниченное воспроизведение и учёт, но не измеряет внешний выигрыш или истинность.",
  "Source-pattern rule": "Правило шаблона источника",
  "Atlas effects": "Воздействия Atlas",
  "COMPATIBILITY HISTORY:": "ИСТОРИЯ СОВМЕСТИМОСТИ:",
  "Membership, one-shot execution, process-local rollback, process-local revocation, and work accounting are recorded within the current scope.":
    "Принадлежность, одноразовое исполнение, локальные для процесса откат и отзыв, а также учёт работы фиксируются в текущей области.",
  "Current sequencing, rollback, and revocation evidence is process-local; it does not establish durable trust state across restarts.":
    "Текущие свидетельства последовательности, отката и отзыва локальны для процесса; они не устанавливают долговременное доверенное состояние между перезапусками.",
  "The release checks typed admission and receipts, but they do not prove operating-system capability isolation for the Python process.":
    "Выпуск проверяет типизированный допуск и протоколы, но не доказывает изоляцию возможностей процесса Python средствами операционной системы.",

  "TARGET ARCHITECTURE · NOT CURRENT V4": "ЦЕЛЕВАЯ АРХИТЕКТУРА · NOT CURRENT V4",
  "The intended learning loop begins only after stronger contracts exist.":
    "Предполагаемый цикл обучения начинается только после появления более строгих контрактов.",
  "Every stage below is architectural intent. It must not be read as a current runtime capability, trained system, external result, or authorized learning claim.":
    "Каждый приведённый ниже этап является архитектурным намерением. Его нельзя считать текущей возможностью среды исполнения, обученной системой, внешним результатом или разрешённым утверждением об обучении.",
  "Accept externally grounded evidence with source custody, not only a bundled finite sample.":
    "Принимать внешне обоснованные доказательства с контролем происхождения источника, а не только встроенную конечную выборку.",
  "Typed domain map": "Типизированное отображение предметной области",
  "Declare how domain objects and alternatives map into local finite coordinates without assigning universal pole meanings.":
    "Объявить, как предметные объекты и альтернативы отображаются в локальные конечные координаты, не приписывая полюсам универсальных смыслов.",
  "Persistent World Atlas": "Сохраняемый World Atlas",
  "Maintain explicit objects, events, competing hypotheses, evidence, and local revisions across time.":
    "Поддерживать во времени явные объекты, события, конкурирующие гипотезы, доказательства и локальные ревизии.",
  "Choose the smallest level that retains every task-relevant distinction for the current decision.":
    "Выбирать наименьший уровень, сохраняющий каждое значимое для задачи различие в текущем решении.",
  "Explicit ProgramIR": "Явный ProgramIR",
  "Compile a bracketed, typed, auditable multi-step program rather than an unstructured action list.":
    "Компилировать типизированную, проверяемую многошаговую программу с явными скобками вместо неструктурированного списка действий.",
  "Authorized action": "Разрешённое действие",
  "Require policy, provenance, capability, budget, and rollback contracts before real execution.":
    "До реального исполнения требовать контракты политики, происхождения, возможностей, бюджета и отката.",
  "Externally grounded outcome": "Внешне обоснованный результат",
  "Use a preregistered evaluator to measure whether the action helped outside the internal receipt ledger.":
    "Использовать предварительно зарегистрированного оценщика, чтобы измерить пользу действия вне внутреннего реестра протоколов.",
  "Local revision and policy update": "Локальная ревизия и обновление политики",
  "Revise only affected hypotheses and authorize learning only after the evidence and evaluation gates close.":
    "Пересматривать только затронутые гипотезы и разрешать обучение лишь после закрытия шлюзов доказательств и оценки.",

  "Mathematical symbol legend": "Легенда математических символов",
  "How to read the symbols used in this chapter": "Как читать символы, используемые в этой главе",
  Symbol: "Символ",
  "Read aloud": "Как произносится",
  "Meaning here": "Значение здесь",
  "Q sub n": "Q с нижним индексом n",
  "The complete n-element carrier at level L_n.": "Полный n-элементный носитель уровня L_n.",
  "P sub i": "P с нижним индексом i",
  "The pole whose calculation index is i modulo n.": "Полюс, вычислительный индекс которого равен i по модулю n.",
  "the size of X": "мощность X",
  "The number of elements in a finite set X.": "Число элементов конечного множества X.",
  sum: "сумма",
  "Add the indicated quantity over every stated index.": "Сложить указанную величину по всем заданным индексам.",
  "modulo n": "по модулю n",
  "Keep the remainder after division by n; this creates wraparound.":
    "Оставить остаток от деления на n; так возникает циклический переход.",
  "f maps X to Y": "f отображает X в Y",
  "A function assigning each input in X exactly one output in Y.":
    "Функция, сопоставляющая каждому входу из X ровно один выход из Y.",
  "is isomorphic to": "изоморфно",
  "The structures have the same form under a reversible structure-preserving map.":
    "Структуры имеют одинаковую форму относительно обратимого отображения, сохраняющего структуру.",
  sigma: "сигма",
  "A relabelling map; here it normally denotes an automorphism.":
    "Отображение переименования; здесь оно обычно обозначает автоморфизм.",
  "units modulo n": "обратимые классы по модулю n",
  "Indices u with gcd(u,n)=1; multiplication by u gives the allowed pointed relabellings.":
    "Индексы u, для которых gcd(u,n)=1; умножение на u задаёт допустимые переименования с сохранением выделенной точки.",
  "orbit of x": "орбита x",
  "Every object reachable from x under the declared group action.":
    "Каждый объект, достижимый из x при объявленном действии группы.",
  "stabilizer of x": "стабилизатор x",
  "Every group element that leaves x fixed.": "Каждый элемент группы, оставляющий x неподвижным.",
  "fixed points of g": "фиксированные точки g",
  "The objects that the selected transformation g does not move.":
    "Объекты, которые выбранное преобразование g оставляет неподвижными.",
  "X modulo the action of G": "X по модулю действия G",
  "The set of orbits, not ordinary numeric division.": "Множество орбит, а не обычное числовое деление.",
  "All acted-on objects reachable from one selected object by allowed symmetries.":
    "Все объекты действия, достижимые из одного выбранного объекта посредством допустимых симметрий.",
  "The symmetries that leave one selected acted-on object unchanged.":
    "Симметрии, оставляющие один выбранный объект действия неизменным.",
  "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n) is isomorphic to the cyclic group C_n.":
    "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n) изоморфна циклической группе C_n.",
  "P0 resets to P0, while P1 wraps to P0 because 1+2≡0 (mod 3); two sources therefore share P0 and the image has rank 2.":
    "P0 сбрасывается в P0, а P1 переходит по циклу в P0, поскольку 1+2≡0 (mod 3); поэтому два источника дают P0, и ранг образа равен 2.",

  "Think of the labelled seats on one small carousel: the carrier is the complete list of seats that exist.":
    "Представьте подписанные места на небольшой карусели: носитель — это полный список всех существующих мест.",
  "Q_n={P0,…,P_(n−1)} and |Q_n|=n.": "Q_n={P0,…,P_(n−1)}, и |Q_n|=n.",
  "L3: Q_3={P0,P1,P2}; there are exactly three allowed poles.": "L3: Q_3={P0,P1,P2}; допустимы ровно три полюса.",
  "The level is declared by listing one label for each residue from 0 through n−1, so no extra pole is hidden outside the list.":
    "Уровень объявляется перечислением одной метки для каждого остатка от 0 до n−1, поэтому за пределами списка нет скрытого дополнительного полюса.",
  "A carrier is not the set of everything the agent knows; it is one finite local state set.":
    "Носитель — не множество всего, что знает агент, а одно конечное множество локальных состояний.",
  "L3 row and column headers: P0 | P1 | P2.": "Заголовки строк и столбцов L3: P0 | P1 | P2.",
  "|Q_3|=3.": "|Q_3|=3.",

  "A pole is one named seat on the carousel, not the whole carousel and not the passenger sitting there.":
    "Полюс — это одно именованное место на карусели, а не вся карусель и не сидящий на нём пассажир.",
  "P_i∈Q_n with 0≤i<n; calculation identifies P_i with residue i modulo n.":
    "P_i∈Q_n при 0≤i<n; в вычислениях P_i соответствует классу вычетов i по модулю n.",
  "L3: P2 is the label with calculation index 2; one further PLUS step reaches P0.":
    "L3: P2 — метка с вычислительным индексом 2; ещё один шаг PLUS приводит к P0.",
  "The label-to-residue correspondence is a bijection, so every pole has one calculation index and every allowed index names one pole.":
    "Соответствие между метками и классами вычетов биективно: у каждого полюса один вычислительный индекс, а каждый допустимый индекс называет один полюс.",
  "P2 does not universally mean twice as much, better, later, or more intelligent than P1.":
    "P2 не означает универсально «вдвое больше», «лучше», «позже» или «умнее», чем P1.",
  "L3: row P2 and column P2 are addresses labelled by P2, not measured quantities.":
    "L3: строка P2 и столбец P2 — адреса с меткой P2, а не измеренные величины.",
  "P_(i+kn)=P_i for every integer k.": "P_(i+kn)=P_i для любого целого k.",

  "Changing level is like choosing a dial with a different number of marked positions.":
    "Смена уровня похожа на выбор циферблата с другим числом отмеченных позиций.",
  "L_n is the local frame whose carrier is Q_n and whose index arithmetic is modulo n.":
    "L_n — локальная система отсчёта с носителем Q_n и арифметикой индексов по модулю n.",
  "L2 has {P0,P1}; L3 has {P0,P1,P2}. P2 exists locally at L3 but not at L2.":
    "В L2 есть {P0,P1}, а в L3 — {P0,P1,P2}. P2 локально существует в L3, но не в L2.",
  "The subscript n fixes both the number of labels and the modulus used by every operation at that level.":
    "Нижний индекс n задаёт и число меток, и модуль, используемый каждой операцией этого уровня.",
  "A larger level gives more distinctions, not automatically more knowledge, accuracy, or intelligence.":
    "Более высокий уровень даёт больше различимых состояний, но не автоматически больше знаний, точности или интеллекта.",
  "L2 laws have 2×2 tables; L3 laws have 3×3 tables.": "Законы L2 имеют таблицы 2×2, а законы L3 — таблицы 3×3.",
  "|Q_n|=n and |Q_n×Q_n|=n².": "|Q_n|=n и |Q_n×Q_n|=n².",

  "It is a deterministic two-slot machine: insert a left state and a right state, then receive one state.":
    "Это детерминированный автомат с двумя входами: подайте левое и правое состояния и получите одно состояние.",
  "f:Q_n×Q_n→Q_n is a total function on ordered pairs.":
    "f:Q_n×Q_n→Q_n — всюду определённая функция на упорядоченных парах.",
  "L2 has four inputs: (P0,P0), (P0,P1), (P1,P0), and (P1,P1).":
    "У L2 четыре входные пары: (P0,P0), (P0,P1), (P1,P0) и (P1,P1).",
  "A complete Cayley table contains one cell for every ordered pair and exactly one output in each cell.":
    "Полная таблица Кэли содержит по одной ячейке для каждой упорядоченной пары и ровно один выход в каждой ячейке.",
  "Binary means two inputs, not a two-element carrier and not a probabilistic yes-or-no answer.":
    "«Бинарная» означает два входа, а не двухэлементный носитель и не вероятностный ответ «да или нет».",
  "A 2×2 table has four filled body cells and no missing input pair.":
    "В таблице 2×2 четыре заполненные внутренние ячейки, и ни одна входная пара не пропущена.",
  "|Q_2×Q_2|=2²=4.": "|Q_2×Q_2|=2²=4.",

  "Modulo arithmetic is clock arithmetic: after the last mark, counting continues from the first mark.":
    "Арифметика по модулю похожа на часы: после последней отметки счёт продолжается с первой.",
  "i≡j (mod n) exactly when n divides i−j; the remainder is chosen from 0,…,n−1.":
    "i≡j (mod n) тогда и только тогда, когда n делит i−j; остаток выбирается из 0,…,n−1.",
  "L3: 2+2=4 and 4 leaves remainder 1 after division by 3, so P2⊕P2=P1.":
    "L3: 2+2=4, а при делении 4 на 3 остаётся 1, поэтому P2⊕P2=P1.",
  "The division algorithm gives one unique remainder between 0 and n−1 for every integer.":
    "Алгоритм деления даёт для каждого целого числа единственный остаток от 0 до n−1.",
  "The statement 4≡1 (mod 3) does not claim that the ordinary integers 4 and 1 are equal.":
    "Запись 4≡1 (mod 3) не утверждает, что обычные целые числа 4 и 1 равны.",
  "L3 PLUS: row P2, column P2, cell P1.": "L3 PLUS: строка P2, столбец P2, ячейка P1.",
  "(2+2) mod 3=1.": "(2+2) mod 3=1.",

  "It is the multiplication-table idea applied to any finite two-input rule.":
    "Это идея таблицы умножения, применённая к любому конечному правилу с двумя входами.",
  "The row names the raw-left operand, the column names the raw-right operand, and their intersection is f(row,column).":
    "Строка называет непосредственный левый операнд, столбец — непосредственный правый, а на их пересечении находится f(row,column).",
  "L3 PLUS: select row P1 and column P2; the intersection is P0.":
    "L3 PLUS: выберите строку P1 и столбец P2; на пересечении находится P0.",
  "Rows and columns enumerate the full Cartesian product Q_n×Q_n, so the table is another complete representation of the function.":
    "Строки и столбцы перебирают всё декартово произведение Q_n×Q_n, поэтому таблица является ещё одним полным представлением функции.",
  "Swapping row and column is harmless only after commutativity has been proved for that operation.":
    "Менять строку и столбец местами можно лишь после доказательства коммутативности данной операции.",
  "row P1 · column P2 → P0.": "строка P1 · столбец P2 → P0.",
  "PLUS_3(P1,P2)=P_((1+2) mod 3)=P0.": "PLUS_3(P1,P2)=P_((1+2) mod 3)=P0.",

  "PLUS rotates a finite dial by the number of steps named by the second pole.":
    "PLUS поворачивает конечный циферблат на число шагов, заданное вторым полюсом.",
  "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n,P0)≅C_n.": "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n,P0)≅C_n.",
  "L3: start at P1, move two steps, and wrap around: P1⊕P2=P0.":
    "L3: начните в P1, сделайте два шага с циклическим переходом: P1⊕P2=P0.",
  "Addition of residues is closed, associative, and commutative; P0 is the identity and P_(n−i) is the inverse of P_i.":
    "Сложение классов вычетов замкнуто, ассоциативно и коммутативно; P0 — нейтральный элемент, а P_(n−i) — обратный к P_i.",
  "PLUS is a finite cyclic law on labels, not ordinary addition of domain meanings or real quantities.":
    "PLUS — конечный циклический закон для меток, а не обычное сложение предметных смыслов или реальных величин.",
  "L3 PLUS: row P1, column P2, cell P0; row P2, column P1 gives the same cell value.":
    "L3 PLUS: строка P1, столбец P2 дают ячейку P0; строка P2 и столбец P1 дают то же значение.",
  "(1+2) mod 3=0=(2+1) mod 3.": "(1+2) mod 3=0=(2+1) mod 3.",

  "STAR is a dial with a one-sided emergency latch: a raw-left P0 resets before any movement is calculated.":
    "STAR похож на циферблат с односторонней аварийной защёлкой: непосредственный левый P0 сбрасывает результат до вычисления движения.",
  "STAR_n(P_i,P_j)=P0 if i=0; otherwise STAR_n(P_i,P_j)=P_((i+j) mod n).":
    "STAR_n(P_i,P_j)=P0, если i=0; иначе STAR_n(P_i,P_j)=P_((i+j) mod n).",
  "L3: P0★P2=P0, but P2★P0=P2 because only the raw-left input controls reset.":
    "L3: P0★P2=P0, но P2★P0=P2, потому что сбросом управляет только непосредственный левый вход.",
  "The piecewise definition checks i=0 first; every nonzero row then agrees cell-for-cell with PLUS.":
    "Кусочное определение сначала проверяет i=0; затем каждая ненулевая строка поэлементно совпадает с PLUS.",
  "A P0 on the right does not trigger reset, and STAR is not commutative for n≥2.":
    "P0 справа не вызывает сброс, и STAR некоммутативна при n≥2.",
  "L3 STAR: the P0 row is P0,P0,P0; the P2 row is P2,P0,P1.":
    "L3 STAR: строка P0 равна P0,P0,P0; строка P2 равна P2,P0,P1.",
  "STAR_3(P0,P2)=P0 while STAR_3(P2,P0)=P_((2+0) mod 3)=P2.":
    "STAR_3(P0,P2)=P0, тогда как STAR_3(P2,P0)=P_((2+0) mod 3)=P2.",

  "A left zero is a one-sided stop button: once it is in the left slot, the other input cannot change the output.":
    "Левый нуль — односторонняя кнопка остановки: оказавшись в левом слоте, он не позволяет второму входу изменить результат.",
  "z is a left zero when z★x=z for every x; in STAR, z=P0.":
    "z является левым нулём, если z★x=z для любого x; в STAR z=P0.",
  "L3: P0★P0=P0, P0★P1=P0, and P0★P2=P0.": "L3: P0★P0=P0, P0★P1=P0 и P0★P2=P0.",
  "The first branch of the STAR definition returns P0 for every possible right index whenever the left index is 0.":
    "Первая ветвь определения STAR возвращает P0 при любом правом индексе, если левый индекс равен 0.",
  "Left zero does not mean two-sided zero: P1★P0=P1≠P0.": "Левый нуль не означает двусторонний нуль: P1★P0=P1≠P0.",
  "The complete P0 row of every STAR table is constant P0.":
    "Полная строка P0 в каждой таблице STAR постоянно равна P0.",
  "∀j, STAR_n(P0,P_j)=P0.": "∀j, STAR_n(P0,P_j)=P0.",

  "A right-neutral element is a do-nothing input only when placed in the right slot.":
    "Правый нейтральный элемент ничего не меняет только тогда, когда помещён в правый слот.",
  "e is right-neutral when x★e=x for every x; in STAR, e=P0.":
    "e является правым нейтральным элементом, если x★e=x для любого x; в STAR e=P0.",
  "L3: P0★P0=P0, P1★P0=P1, and P2★P0=P2.": "L3: P0★P0=P0, P1★P0=P1 и P2★P0=P2.",
  "For a nonzero left index i, adding 0 leaves i unchanged; the zero row also returns P0.":
    "Для ненулевого левого индекса i прибавление 0 не меняет i; нулевая строка также возвращает P0.",
  "Right-neutral does not mean two-sided identity: P0★P1=P0≠P1.":
    "Правый нейтральный элемент не является двусторонней единицей: P0★P1=P0≠P1.",
  "The P0 column of the L3 STAR table reads P0,P1,P2 from top to bottom.":
    "Столбец P0 таблицы STAR L3 сверху вниз равен P0,P1,P2.",
  "∀i, STAR_n(P_i,P0)=P_i.": "∀i, STAR_n(P_i,P0)=P_i.",

  "The source is the named starting role in a transition, like the person whose position is being updated.":
    "Источник — именованная начальная роль перехода, как человек, положение которого обновляется.",
  "source=P_s is a semantic role retained in level:family:source:active even when raw operand order changes.":
    "source=P_s — смысловая роль, сохраняемая в level:family:source:active даже при изменении непосредственного порядка операндов.",
  "L3 with source P0 and active P2: LEFT places P0 in the row; RIGHT places P0 in the column.":
    "L3 при source P0 и active P2: LEFT помещает P0 в строку, а RIGHT — P0 в столбец.",
  "The canonical record stores source separately from the left and right operand slots.":
    "Каноническая запись хранит source отдельно от левого и правого слотов операндов.",
  "Source does not always mean raw-left operand; it moves to the raw-right slot in a RIGHT family.":
    "Source не всегда является непосредственным левым операндом: в семействе RIGHT он переходит в непосредственный правый слот.",
  "LEFT: row=source; RIGHT: column=source.": "LEFT: строка=source; RIGHT: столбец=source.",
  "LEFT(P_s,P_a)=F(P_s,P_a); RIGHT(P_s,P_a)=F(P_a,P_s).": "LEFT(P_s,P_a)=F(P_s,P_a); RIGHT(P_s,P_a)=F(P_a,P_s).",

  "The active pole is the second named role, like the instruction applied to the source.":
    "Активный полюс — вторая именованная роль, подобная инструкции, применяемой к источнику.",
  "active=P_a is retained as a semantic role; orientation determines whether it occupies the raw-right or raw-left slot.":
    "active=P_a сохраняется как смысловая роль; ориентация определяет, занимает ли она непосредственный правый или левый слот.",
  "L3 with source P0 and active P2: STAR_LEFT resets to P0, while STAR_RIGHT places P2 left and returns P2.":
    "L3 при source P0 и active P2: STAR_LEFT сбрасывает в P0, а STAR_RIGHT помещает P2 слева и возвращает P2.",
  "STAR tests the raw-left operand, so moving the active role between axes can change the result without changing the law.":
    "STAR проверяет непосредственный левый операнд, поэтому перенос роли active между осями может изменить результат, не изменяя закон.",
  "Active is not automatically an action command or a global World Atlas state; it is one local operand role.":
    "Active не является автоматически командой действия или глобальным состоянием World Atlas; это одна локальная роль операнда.",
  "STAR_LEFT uses column P2; STAR_RIGHT uses row P2.": "STAR_LEFT использует столбец P2, а STAR_RIGHT — строку P2.",
  "STAR_LEFT(P0,P2)=P0; STAR_RIGHT(P0,P2)=P2.": "STAR_LEFT(P0,P2)=P0; STAR_RIGHT(P0,P2)=P2.",

  "It is a postal address for one transition: removing any address field can send you to a different cell.":
    "Это почтовый адрес одного перехода: удаление любого поля адреса может привести к другой ячейке.",
  "cell_id=L{n}:{family}:P{source}:P{active}; target is computed from the family law and orientation.":
    "cell_id=L{n}:{family}:P{source}:P{active}; target вычисляется по закону семейства и ориентации.",
  "L3:STAR_RIGHT:P0:P2 has raw operands (P2,P0) and target P2.":
    "L3:STAR_RIGHT:P0:P2 имеет непосредственные операнды (P2,P0) и target P2.",
  "Level, family, source, and active together determine one raw ordered pair and therefore one deterministic output.":
    "Level, family, source и active вместе определяют одну непосредственную упорядоченную пару и тем самым один детерминированный выход.",
  "Two coordinates that share a target are not the same typed record and do not share provenance automatically.":
    "Две координаты с общей целью не являются одной типизированной записью и не получают автоматически общее происхождение.",
  "L3 STAR: row P2, column P0 → P2.": "L3 STAR: строка P2, столбец P0 → P2.",
  "STAR_RIGHT(P0,P2)=STAR_3(P2,P0)=P2.": "STAR_RIGHT(P0,P2)=STAR_3(P2,P0)=P2.",

  "Typed catalogue count": "Подсчёт типизированного каталога",
  "Count an inventory by addresses: input squares first, rule books second, and role labels third.":
    "Считайте каталог по адресам: сначала входные клетки, затем книги правил, затем метки ролей.",
  "Σ_(n=1)^7 n²=140; 2 laws give 280 raw law cells; 2 orientations give 560 typed coordinates.":
    "Σ_(n=1)^7 n²=140; 2 закона дают 280 исходных ячеек законов; 2 ориентации дают 560 типизированных координат.",
  "L2 contributes 4·2·2=16 typed coordinates; L3 contributes 9·2·2=36.":
    "L2 даёт 4·2·2=16 типизированных координат, а L3 — 9·2·2=36.",
  "At level n there are n choices for source and n for active, independently, for each of four family tags.":
    "На уровне n независимо доступны n вариантов source и n вариантов active для каждой из четырёх меток семейства.",
  "The 560 records are not neurons, concepts, learned skills, meanings, or units of intelligence.":
    "Эти 560 записей — не нейроны, понятия, обученные навыки, значения или единицы интеллекта.",
  "Per-level typed totals: 4,16,36,64,100,144,196.": "Типизированные итоги по уровням: 4,16,36,64,100,144,196.",
  "4Σ_(n=1)^7 n²=4·140=560; active L2–L7: 560−4=556.": "4Σ_(n=1)^7 n²=4·140=560; активные L2–L7: 560−4=556.",

  Rank: "Ранг",
  "Rank counts how many different destinations a fixed one-input machine can actually reach.":
    "Ранг показывает, сколько различных целей действительно достигает фиксированный автомат с одним входом.",
  "rank(T)=|Im(T)| for T:Q_n→Q_n obtained by fixing the family and active pole.":
    "rank(T)=|Im(T)| для T:Q_n→Q_n, полученного фиксацией семейства и активного полюса.",
  "L3, active P2: STAR_LEFT maps P0,P1,P2 to P0,P0,P1, so its image is {P0,P1} and rank=2.":
    "L3, active P2: STAR_LEFT отображает P0,P1,P2 в P0,P0,P1, поэтому его образ равен {P0,P1}, а rank=2.",
  "A finite map's image is found by listing every output once and removing duplicates.":
    "Образ конечного отображения находят, перечисляя все выходы и удаляя повторы.",
  "This is finite transformation rank, not learned matrix rank; ABI LEFT is the standard right translation when active is fixed.":
    "Это ранг конечного преобразования, а не ранг обученной матрицы; при фиксированном active семейство ABI LEFT является стандартной правой трансляцией.",
  "Read the fixed P2 column for STAR_LEFT and the fixed P2 row for STAR_RIGHT.":
    "Прочитайте фиксированный столбец P2 для STAR_LEFT и фиксированную строку P2 для STAR_RIGHT.",
  "rank(STAR_LEFT(_,P2))=2; rank(STAR_RIGHT(_,P2))=3 at L3.":
    "rank(STAR_LEFT(_,P2))=2; rank(STAR_RIGHT(_,P2))=3 на L3.",

  "x belongs to X": "x принадлежит X",
  "The object x is an element of the set X.": "Объект x является элементом множества X.",
  "A implies B": "из A следует B",
  "Whenever A is true, B must also be true.": "Всегда, когда A истинно, B также должно быть истинно.",
  "A if and only if B": "A тогда и только тогда, когда B",
  "Both implications A⇒B and B⇒A hold.": "Верны оба следствия: A⇒B и B⇒A.",
  "the empty set": "пустое множество",
  "A set containing no elements; it is not the pole P0.": "Множество без элементов; это не полюс P0.",
  "n does not divide m": "n не делит m",
  "There is no integer q with m=qn.": "Не существует целого q, для которого m=qn.",
  "S is a subset of X": "S является подмножеством X",
  "Every element of S also belongs to X.": "Каждый элемент S также принадлежит X.",
  "the equality relation on X": "отношение равенства на X",
  "The pairs (x,x) and no pairs of distinct elements.": "Все пары (x,x) и ни одной пары различных элементов.",
  "the order of x": "порядок x",
  "The first positive repeat length returning x to the identity.":
    "Наименьшее положительное число повторений, возвращающее x к нейтральному элементу.",
  "automorphisms of A": "автоморфизмы A",
  "All bijective structure-preserving self-maps of A.": "Все биективные отображения A в себя, сохраняющие структуру.",
  "endomorphisms of A": "эндоморфизмы A",
  "All structure-preserving maps from A to itself.": "Все отображения A в себя, сохраняющие структуру.",
  "homomorphisms from A to B": "гомоморфизмы из A в B",
  "All declared-structure-preserving maps A→B.": "Все отображения A→B, сохраняющие объявленную структуру.",
  phi: "фи",
  "Either a named map or Euler's totient φ(n); the surrounding definition fixes which one.":
    "Либо именованное отображение, либо функция Эйлера φ(n); нужный смысл задаёт ближайшее определение.",
  "greatest common divisor": "наибольший общий делитель",
  "The largest positive integer dividing both a and b.": "Наибольшее положительное целое число, делящее и a, и b.",
  "n choose k": "число сочетаний из n по k",
  "The number of k-element subsets of an n-element set.": "Число k-элементных подмножеств n-элементного множества.",
  "semidirect product": "полупрямое произведение",
  "A group built from G and H together with a declared action of H on G.":
    "Группа, построенная из G и H вместе с объявленным действием H на G.",
  "character chi sub s": "характер хи с нижним индексом s",
  "A group homomorphism from the cyclic group to nonzero complex phases.":
    "Гомоморфизм из циклической группы в группу ненулевых комплексных фаз.",
  "the exponential of z": "экспонента z",
  "Here it produces unit-circle phases such as exp(2πisk/n).":
    "Здесь она задаёт фазы на единичной окружности, например exp(2πisk/n).",

  "Reduct and expansion": "Редукт и расширение",
  "The same game board can be studied with one rule book or with both rule books open.":
    "Одно игровое поле можно изучать с одной открытой книгой правил или сразу с обеими.",
  "G_n=(Q_n,PLUS_n,P0), S_n=(Q_n,STAR_n,P0), and A_n=(Q_n,PLUS_n,STAR_n,P0).":
    "G_n=(Q_n,PLUS_n,P0), S_n=(Q_n,STAR_n,P0) и A_n=(Q_n,PLUS_n,STAR_n,P0).",
  "At L2 the carrier {P0,P1} is shared, but PLUS and STAR have different P0 rows and therefore define different reducts.":
    "На L2 носитель {P0,P1} общий, но у PLUS и STAR разные строки P0, поэтому они задают разные редукты.",
  "A reduct forgets named operations; an expansion names more operations on the same carrier.":
    "Редукт забывает часть именованных операций, а расширение называет дополнительные операции на том же носителе.",
  "Sharing the same set of poles does not make PLUS and STAR the same algebraic structure.":
    "Общее множество полюсов не делает PLUS и STAR одной и той же алгебраической структурой.",
  "L2 PLUS P0 row: P0,P1; L2 STAR P0 row: P0,P0.": "Строка P0 в L2 PLUS: P0,P1; строка P0 в L2 STAR: P0,P0.",
  "signature(G_n)=(2,0); signature(S_n)=(2,0); signature(A_n)=(2,2,0).":
    "signature(G_n)=(2,0); signature(S_n)=(2,0); signature(A_n)=(2,2,0).",

  "Composition is a recipe in which the output of one two-input step becomes an ingredient in the next step.":
    "Композиция — это рецепт, где выход одного шага с двумя входами становится ингредиентом следующего шага.",
  "A full binary tree with k leaves has k−1 apply nodes; its C_(k−1) possible shapes are counted by Catalan numbers.":
    "Полное бинарное дерево с k листьями имеет k−1 узлов применения; число его возможных форм C_(k−1) задают числа Каталана.",
  "Three inputs have two trees: (P1★P0)★P1=P2 and P1★(P0★P1)=P1 at L3.":
    "Для трёх входов есть два дерева: (P1★P0)★P1=P2 и P1★(P0★P1)=P1 на L3.",
  "Every binary apply joins two existing subexpressions, reducing the number of separate pieces by one.":
    "Каждое бинарное применение соединяет два существующих подвыражения, уменьшая число отдельных частей на одну.",
  "A list of operands is not a complete STAR program, and the formal tree is not a current V4 multi-step runtime claim.":
    "Список операндов не является полной программой STAR, а формальное дерево не означает наличие текущего многошагового исполнения в V4.",
  "First tree lookups: P1★P0=P1, then P1★P1=P2; second tree: P0★P1=P0, then P1★P0=P1.":
    "Поиск по первому дереву: P1★P0=P1, затем P1★P1=P2; по второму: P0★P1=P0, затем P1★P0=P1.",
  "C_2=(1/3)binom(4,2)=2.": "C_2=(1/3)binom(4,2)=2.",

  "Parentheses are like recipe order: mixing the same ingredients in a different order can change the result.":
    "Скобки похожи на порядок шагов рецепта: те же ингредиенты, смешанные в другом порядке, могут дать другой результат.",
  "An operation is nonassociative when some x,y,z satisfy (x★y)★z≠x★(y★z).":
    "Операция неассоциативна, если для некоторых x,y,z выполняется (x★y)★z≠x★(y★z).",
  "L3: (P1★P0)★P1=P2, while P1★(P0★P1)=P1.": "L3: (P1★P0)★P1=P2, тогда как P1★(P0★P1)=P1.",
  "One explicit unequal pair of bracketed evaluations is enough to disprove a universal associativity law.":
    "Одной явно неравной пары вычислений с разными скобками достаточно, чтобы опровергнуть всеобщий закон ассоциативности.",
  "Commutativity and associativity are different properties; STAR has neither for n≥2.":
    "Коммутативность и ассоциативность — разные свойства; при n≥2 у STAR нет ни одного из них.",
  "The four L3 table lookups in the two trees return final cells P2 and P1.":
    "Четыре обращения к таблице L3 в двух деревьях дают итоговые ячейки P2 и P1.",
  "P2≠P1 ⇒ STAR_3 is not associative.": "P2≠P1 ⇒ STAR_3 неассоциативна.",

  "Zero-prefix rule": "Правило нулевого префикса",
  "In a left-to-right chain, reaching the reset state is like a latch: every later step stays reset.":
    "В цепочке слева направо достижение состояния сброса работает как защёлка: каждый следующий шаг остаётся в сбросе.",
  "A left-associated STAR word follows modular prefix sums until a prefix equals P0; after that point every later value is P0.":
    "Левоассоциированное слово STAR следует префиксным суммам по модулю, пока один префикс не станет P0; после этого каждое последующее значение равно P0.",
  "L5: (P2★P3)★P4=P0★P4=P0, although P2⊕P3⊕P4=P4.": "L5: (P2★P3)★P4=P0★P4=P0, хотя P2⊕P3⊕P4=P4.",
  "Before reset, each nonzero left value uses addition; after reset, the left-zero law P0★x=P0 applies inductively.":
    "До сброса каждое ненулевое левое значение использует сложение; после сброса индуктивно действует закон левого нуля P0★x=P0.",
  "The final ordinary PLUS sum does not reveal whether an earlier STAR prefix already hit P0.":
    "Итоговая обычная сумма PLUS не показывает, достиг ли более ранний префикс STAR значения P0.",
  "L5 STAR: row P2, column P3 → P0; then row P0, column P4 → P0.":
    "L5 STAR: строка P2, столбец P3 → P0; затем строка P0, столбец P4 → P0.",
  "2+3≡0 (mod 5) ⇒ (P2★P3)★P4=P0.": "2+3≡0 (mod 5) ⇒ (P2★P3)★P4=P0.",

  "Stable subset": "Устойчивое подмножество",
  "A subset is stable on one side if using one of its members in that slot never sends the result outside the subset.":
    "Подмножество устойчиво с одной стороны, если использование его элемента в соответствующем слоте никогда не выводит результат за пределы подмножества.",
  "Right-stable means S★Q_n⊆S; left-stable means Q_n★S⊆S.": "Правая устойчивость означает S★Q_n⊆S, а левая — Q_n★S⊆S.",
  "L3: {P0} is right-stable because P0★x=P0, but not left-stable because P1★P0=P1.":
    "L3: {P0} устойчиво справа, поскольку P0★x=P0, но не слева, поскольку P1★P0=P1.",
  "Every nonzero STAR row cycles through all of Q_n, so a proper nonempty right-stable subset can contain only P0.":
    "Каждая ненулевая строка STAR циклически проходит всё Q_n, поэтому собственное непустое подмножество, устойчивое справа, может содержать только P0.",
  "These one-sided magma subsets are not automatically ring ideals, and left/right refer to operand slots.":
    "Эти односторонние подмножества магмы не являются автоматически идеалами кольца, а «левое/правое» относится к слотам операндов.",
  "L3 P0 row stays inside {P0}; the P0 column contains P1 and P2 outside {P0}.":
    "Строка P0 в L3 остаётся внутри {P0}, а столбец P0 содержит P1 и P2 вне {P0}.",
  "{P0}★Q_3={P0}, but Q_3★{P0}=Q_3.": "{P0}★Q_3={P0}, но Q_3★{P0}=Q_3.",

  Congruence: "Конгруэнция",
  "A congruence allows labels to be merged only when every operation remains well-defined after the merge.":
    "Конгруэнция разрешает объединять метки лишь тогда, когда после объединения каждая операция остаётся корректно определённой.",
  "An equivalence ∼ is a congruence when x∼x' and y∼y' imply x★y∼x'★y'.":
    "Отношение эквивалентности ∼ является конгруэнцией, если из x∼x' и y∼y' следует x★y∼x'★y'.",
  "L3: if P0∼P1, then P0★P1=P0 and P1★P1=P2 force P0∼P2, so all poles merge.":
    "L3: если P0∼P1, то P0★P1=P0 и P1★P1=P2 вынуждают P0∼P2, поэтому все полюса объединяются.",
  "The reset row distinguishes P0 so strongly that any nontrivial identification propagates through compatibility to the universal relation.":
    "Строка сброса настолько сильно выделяет P0, что любое нетривиальное отождествление по условию совместимости распространяется до универсального отношения.",
  "An arbitrary grouping of visually similar poles is not automatically a valid quotient.":
    "Произвольная группировка визуально похожих полюсов не образует автоматически корректное фактор-множество.",
  "Compare the L3 cells (P0,P1)→P0 and (P1,P1)→P2 after assuming P0∼P1.":
    "После предположения P0∼P1 сравните ячейки L3 (P0,P1)→P0 и (P1,P1)→P2.",
  "Con(S_n)={Δ_(Q_n),Q_n×Q_n} for n≥2.": "Con(S_n)={Δ_(Q_n),Q_n×Q_n} при n≥2.",

  "Rename every locker and key reversibly; if every instruction still works after renaming, the renaming is an automorphism.":
    "Обратимо переименуйте каждый шкафчик и ключ: если после этого все инструкции по-прежнему работают, переименование является автоморфизмом.",
  "A bijection σ:A_n→A_n preserving PLUS, STAR, and P0; σ_u(P_i)=P_((ui) mod n) for u∈U(n).":
    "Биекция σ:A_n→A_n, сохраняющая PLUS, STAR и P0; σ_u(P_i)=P_((ui) mod n) для u∈U(n).",
  "L3: u=2 fixes P0 and swaps P1 with P2.": "L3: u=2 фиксирует P0 и меняет P1 с P2 местами.",
  "A unit u is invertible modulo n, so multiplication by u is a permutation and distributes over modular addition without moving zero.":
    "Обратимый класс u имеет обратный по модулю n, поэтому умножение на u является перестановкой, распределяется относительно сложения по модулю и не сдвигает нуль.",
  "A reversible permutation is not enough; it must preserve every declared operation and named constant.":
    "Одной обратимой перестановки недостаточно: она должна сохранять каждую объявленную операцию и именованную константу.",
  "L3 PLUS: σ(P1⊕P2)=σ(P0)=P0 and σ(P1)⊕σ(P2)=P2⊕P1=P0.": "L3 PLUS: σ(P1⊕P2)=σ(P0)=P0 и σ(P1)⊕σ(P2)=P2⊕P1=P0.",
  "σ_u(F(x,y))=F(σ_u(x),σ_u(y)).": "σ_u(F(x,y))=F(σ_u(x),σ_u(y)).",

  "Group action": "Действие группы",
  "A group action is a complete set of reversible buttons together with the rule for pressing buttons in sequence.":
    "Действие группы — полный набор обратимых кнопок вместе с правилом их последовательного нажатия.",
  "An action satisfies 1·x=x and (gh)·x=g·(h·x).": "Действие удовлетворяет равенствам 1·x=x и (gh)·x=g·(h·x).",
  "L3: U(3)={1,2}; button 1 does nothing and button 2 swaps P1,P2. Pressing button 2 twice returns every pole.":
    "L3: U(3)={1,2}; кнопка 1 ничего не меняет, а кнопка 2 переставляет P1,P2. Двойное нажатие кнопки 2 возвращает каждый полюс.",
  "Multiplying unit indices corresponds exactly to composing their multiplication permutations.":
    "Умножение индексов обратимых классов точно соответствует композиции задаваемых ими перестановок умножения.",
  "One chosen symmetry is a group element, not the whole acting group and not an orbit.":
    "Одна выбранная симметрия — элемент группы, а не вся действующая группа и не орбита.",
  "L3 action rows: u=1 maps 0,1,2 to 0,1,2; u=2 maps them to 0,2,1.":
    "Строки действия L3: u=1 отображает 0,1,2 в 0,1,2; u=2 — в 0,2,1.",
  "σ_2∘σ_2=σ_(4 mod 3)=σ_1=id.": "σ_2∘σ_2=σ_(4 mod 3)=σ_1=id.",

  "An orbit is the list of every place a marker can reach when every allowed symmetry button is tried.":
    "Орбита — список всех мест, которых достигает метка при использовании каждой допустимой кнопки симметрии.",
  "L3 under U(3): Orb(P0)={P0} and Orb(P1)={P1,P2}.": "На L3 при действии U(3): Orb(P0)={P0} и Orb(P1)={P1,P2}.",
  "Applying every group element produces exactly the reachable images, and the group axioms make reachability an equivalence relation.":
    "Применение каждого элемента группы даёт в точности все достижимые образы, а аксиомы группы превращают достижимость в отношение эквивалентности.",
  "Objects in one orbit are structurally related, not automatically equal in meaning, provenance, evidence, or authority.":
    "Объекты одной орбиты структурно связаны, но не становятся автоматически равными по смыслу, происхождению, доказательствам или полномочиям.",
  "Apply u=1 and u=2 to P1: the output list is P1,P2.": "Примените u=1 и u=2 к P1: список выходов равен P1,P2.",
  "Orb(P1)={P_(1·1 mod 3),P_(2·1 mod 3)}={P1,P2}.": "Orb(P1)={P_(1·1 mod 3),P_(2·1 mod 3)}={P1,P2}.",

  "The stabilizer contains exactly the symmetry buttons that leave a chosen marker in its original place.":
    "Стабилизатор содержит в точности те кнопки симметрии, которые оставляют выбранную метку на исходном месте.",
  "Stab(x)={g∈G | g·x=x}; |G|=|Orb(x)|·|Stab(x)| for finite actions.":
    "Stab(x)={g∈G | g·x=x}; для конечных действий |G|=|Orb(x)|·|Stab(x)|.",
  "L3: only u=1 fixes P1, so Stab(P1)={1}; 2=2·1 matches orbit–stabilizer.":
    "L3: только u=1 фиксирует P1, поэтому Stab(P1)={1}; равенство 2=2·1 согласуется с теоремой об орбите и стабилизаторе.",
  "Group elements carrying x to the same orbit point form equal-sized cosets of the stabilizer.":
    "Элементы группы, переводящие x в одну и ту же точку орбиты, образуют смежные классы стабилизатора одинакового размера.",
  "The stabilizer is a subgroup of transformations, while the orbit is a set of acted-on objects.":
    "Стабилизатор — подгруппа преобразований, а орбита — множество объектов действия.",
  "L3: u=1 sends P1→P1; u=2 sends P1→P2.": "L3: u=1 переводит P1→P1; u=2 переводит P1→P2.",
  "|U(3)|=2=|Orb(P1)|·|Stab(P1)|=2·1.": "|U(3)|=2=|Orb(P1)|·|Stab(P1)|=2·1.",

  "Count symmetry classes by averaging how many objects each symmetry button leaves unmoved.":
    "Считайте классы симметрии, усредняя число объектов, оставляемых неподвижными каждой кнопкой симметрии.",
  "|X/G|=(1/|G|)Σ_(g∈G)|Fix(g)|.": "|X/G|=(1/|G|)Σ_(g∈G)|Fix(g)|.",
  "L3 poles: identity fixes 3 and the swap fixes only P0, so (3+1)/2=2 orbits.":
    "Полюса L3: тождественное преобразование фиксирует 3, а перестановка — только P0, поэтому орбит (3+1)/2=2.",
  "Count pairs (g,x) with g·x=x in two ways: each orbit contributes exactly |G| such pairs.":
    "Посчитайте пары (g,x) с g·x=x двумя способами: каждая орбита даёт ровно |G| таких пар.",
  "Do not divide the number of objects by |G| unless every orbit happens to have full size.":
    "Не делите число объектов на |G|, если не доказано, что каждая орбита имеет полный размер.",
  "L3 fixed-pole ledger: id→3, swap→1; direct orbit list: {P0}, {P1,P2}.":
    "Реестр фиксированных полюсов L3: id→3, swap→1; прямой список орбит: {P0}, {P1,P2}.",
  "(3+1)/2=2; for ordered pairs, (9+1)/2=5.": "(3+1)/2=2; для упорядоченных пар (9+1)/2=5.",

  "Affine torsor symmetry": "Аффинная симметрия торсора",
  "A marked dial can be relabelled around its fixed origin; an unmarked dial may also be rotated before relabelling.":
    "Циферблат с отмеченным началом можно переименовывать вокруг фиксированного начала; циферблат без отметки начала можно ещё и повернуть перед переименованием.",
  "F_(u,b)(x)=ux+b with u∈U(n); all such maps form Hol(C_n)=C_n⋊U(n).":
    "F_(u,b)(x)=ux+b при u∈U(n); все такие отображения образуют Hol(C_n)=C_n⋊U(n).",
  "L3 shift T1(x)=x+1 preserves the unpointed affine torsor, but T1(P0★P0)=P1 while T1(P0)★T1(P0)=P2.":
    "Сдвиг L3 T1(x)=x+1 сохраняет аффинный торсор без выделенной точки, но T1(P0★P0)=P1, тогда как T1(P0)★T1(P0)=P2.",
  "The translation term b moves the named origin; STAR's unique left zero must remain P0, forcing b=0 for a STAR automorphism.":
    "Слагаемое трансляции b сдвигает именованное начало; единственный левый нуль STAR обязан оставаться P0, поэтому для автоморфизма STAR необходимо b=0.",
  "Hol(C_n) is not the STAR automorphism group and an affine torsor map need not be a pointed group automorphism.":
    "Hol(C_n) не является группой автоморфизмов STAR, а аффинное отображение торсора не обязано быть автоморфизмом группы с выделенной точкой.",
  "L3 STAR compares the original cell (P0,P0)→P0 with the shifted cell (P1,P1)→P2.":
    "В L3 STAR исходная ячейка (P0,P0)→P0 сравнивается со сдвинутой ячейкой (P1,P1)→P2.",
  "T1(P0★P0)=P1≠P2=T1(P0)★T1(P0).": "T1(P0★P0)=P1≠P2=T1(P0)★T1(P0).",

  "Inversion orbit": "Орбита инверсии",
  "Inversion pairs a clockwise difference with the equally long counter-clockwise difference on the dial.":
    "Инверсия объединяет разность по часовой стрелке с равной по длине разностью против часовой стрелки.",
  "ι(δ)=−δ mod n and ι²=id; its orbits contain δ and −δ.": "ι(δ)=−δ mod n и ι²=id; её орбиты содержат δ и −δ.",
  "L3 inversion orbits are {0} and {1,2} because −1≡2 (mod 3).":
    "Орбиты инверсии L3 равны {0} и {1,2}, поскольку −1≡2 (mod 3).",
  "Applying the minus sign twice returns the original residue, so every orbit has one or two elements.":
    "Двойное применение знака минус возвращает исходный класс вычетов, поэтому каждая орбита содержит один или два элемента.",
  "These are algebraic orbits of differences, not claims about physical mirrors, time reversal, or causality.":
    "Это алгебраические орбиты разностей, а не утверждения о физических зеркалах, обращении времени или причинности.",
  "L3 inversion lookup: 0→0, 1→2, 2→1.": "Таблица инверсии L3: 0→0, 1→2, 2→1.",
  "−(−δ)≡δ (mod n).": "−(−δ)≡δ (mod n).",

  "Quadratic-residue block": "Блок квадратичных вычетов",
  "Colour nonzero dial marks by whether they are a square; some symmetries keep each colour, while others swap the colours.":
    "Раскрасьте ненулевые отметки циферблата по признаку «является квадратом»: одни симметрии сохраняют каждый цвет, другие меняют цвета местами.",
  "QR(p)={u² mod p | u∈U(p)} for odd prime p; QR(p) is a subgroup of U(p).":
    "QR(p)={u² mod p | u∈U(p)} для нечётного простого p; QR(p) — подгруппа U(p).",
  "L5: QR(5)={1,4} and the other unit block is {2,3}; multiplication by 2 swaps the two blocks.":
    "L5: QR(5)={1,4}, а другой блок обратимых классов равен {2,3}; умножение на 2 меняет два блока местами.",
  "Multiplying by a square preserves square/non-square status, while multiplying by a non-square interchanges the two cosets.":
    "Умножение на квадрат сохраняет статус «квадрат/неквадрат», а умножение на неквадрат меняет два смежных класса местами.",
  "The full unit group preserves the unordered partition, but it does not fix each block separately.":
    "Полная группа обратимых классов сохраняет неупорядоченное разбиение, но не фиксирует каждый блок по отдельности.",
  "L5 under u=2: 1→2 and 4→3, so {1,4}→{2,3}.": "На L5 при u=2: 1→2 и 4→3, поэтому {1,4}→{2,3}.",
  "QR(5)={1²,2²,3²,4²} mod 5={1,4}.": "QR(5)={1²,2²,3²,4²} mod 5={1,4}.",

  "CRT boundary": "Граница CRT",
  "A six-position addition dial can be viewed as a two-position dial and a three-position dial together, but STAR's reset watches global zero.":
    "Шестипозиционный циферблат сложения можно рассматривать как двухпозиционный и трёхпозиционный вместе, но сброс STAR следит за глобальным нулём.",
  "CRT gives Z/6Z≅Z/2Z×Z/3Z for addition; it is not a coordinatewise STAR isomorphism.":
    "CRT даёт Z/6Z≅Z/2Z×Z/3Z для сложения, но не является покоординатным изоморфизмом STAR.",
  "L6: θ(3★1)=θ(4)=(0,1), but θ(3)★_coordθ(1)=(0,0).": "L6: θ(3★1)=θ(4)=(0,1), но θ(3)★_coordθ(1)=(0,0).",
  "The residue 3 is zero modulo 3 but not globally zero modulo 6, so a coordinatewise reset fires when the original STAR reset does not.":
    "Класс 3 равен нулю по модулю 3, но не является глобальным нулём по модулю 6, поэтому покоординатный сброс срабатывает там, где исходный сброс STAR не срабатывает.",
  "A decomposition preserving PLUS does not automatically preserve every other operation on the same carrier.":
    "Разложение, сохраняющее PLUS, не обязано автоматически сохранять каждую другую операцию на том же носителе.",
  "L6 STAR: row P3, column P1 → P4; coordinate STAR resets the modulo-3 component.":
    "L6 STAR: строка P3, столбец P1 → P4; покоординатная STAR сбрасывает компоненту по модулю 3.",
  "θ(3★_6 1)=(0,1)≠(0,0)=θ(3)★_coordθ(1).": "θ(3★_6 1)=(0,1)≠(0,0)=θ(3)★_coordθ(1).",

  Character: "Характер",
  "A character labels dial positions by equally spaced arrows on the complex unit circle while respecting addition.":
    "Характер помечает позиции циферблата равноотстоящими стрелками на комплексной единичной окружности и при этом сохраняет сложение.",
  "χ_s(k)=exp(2πisk/n) and χ_s(k+ℓ)=χ_s(k)χ_s(ℓ).": "χ_s(k)=exp(2πisk/n) и χ_s(k+ℓ)=χ_s(k)χ_s(ℓ).",
  "L3 with ω=exp(2πi/3): χ_1 maps P0→1, P1→ω, and P2→ω².": "На L3 при ω=exp(2πi/3): χ_1 отображает P0→1, P1→ω и P2→ω².",
  "The exponential turns addition of angles into multiplication of complex phases.":
    "Экспонента превращает сложение углов в умножение комплексных фаз.",
  "P0 maps to complex 1, not complex 0; only unit s gives a faithful label with trivial kernel.":
    "P0 отображается в комплексное число 1, а не 0; точную параметризацию с тривиальным ядром даёт только обратимый класс s.",
  "L3 PLUS P1⊕P2=P0 matches ω·ω²=1.": "Равенству L3 PLUS P1⊕P2=P0 соответствует ω·ω²=1.",
  "χ_1(1+2)=exp(2πi)=1=χ_1(1)χ_1(2).": "χ_1(1+2)=exp(2πi)=1=χ_1(1)χ_1(2).",

  "Fibrewise aggregate": "Сумма по отдельным слоям",
  "Count objects inside labelled drawers first; adding drawer totals does not create one giant drawer.":
    "Сначала считайте объекты внутри подписанных ящиков: сложение итогов ящиков не превращает их в один гигантский ящик.",
  "Σ|Aut(A_n)|=18 and 4Σ pair_orbits(n)=224, with level and family tags fixed by the action.":
    "Σ|Aut(A_n)|=18 и 4Σ pair_orbits(n)=224, причём действие фиксирует метки уровня и семейства.",
  "L3 has 2 pole orbits, 5 ordered-pair orbits, and 4×5=20 typed orbits.":
    "L3 имеет 2 орбиты полюсов, 5 орбит упорядоченных пар и 4×5=20 типизированных орбит.",
  "The diagonal unit action is computed independently in each level and each of four family fibres before the finite totals are added.":
    "Диагональное действие обратимых классов вычисляется независимо на каждом уровне и в каждом из четырёх слоёв семейств, и лишь затем конечные итоги складываются.",
  "Eighteen is not one global group order, and 224 is not the orbit count of a cross-level action.":
    "Восемнадцать — не порядок одной глобальной группы, а 224 — не число орбит межуровневого действия.",
  "Pair-orbit row L1–L7: 1,4,5,10,7,20,9; sum=56.": "Числа орбит пар L1–L7: 1,4,5,10,7,20,9; сумма=56.",
  "4×56=224; 1+1+2+2+4+2+6=18.": "4×56=224; 1+1+2+2+4+2+6=18.",

  "A homomorphism translates labels between two dials while making every operation commute with the translation.":
    "Гомоморфизм переводит метки между двумя циферблатами так, чтобы перевод согласовывался с каждой операцией.",
  "f:A_n→A_m preserves P0, PLUS, and STAR: f(F_n(x,y))=F_m(f(x),f(y)).":
    "f:A_n→A_m сохраняет P0, PLUS и STAR: f(F_n(x,y))=F_m(f(x),f(y)).",
  "L2→L4 with f(P0)=P0 and f(P1)=P2 preserves P1⊕P1=P0 and P1★P1=P0.":
    "Отображение L2→L4 с f(P0)=P0 и f(P1)=P2 сохраняет P1⊕P1=P0 и P1★P1=P0.",
  "The preservation equation is checked on every ordered source pair; finite tables make this exhaustive.":
    "Уравнение сохранения проверяется на каждой упорядоченной паре источника; конечность таблиц делает проверку исчерпывающей.",
  "Matching pole names or being injective as a set map does not prove operation preservation.":
    "Совпадение имён полюсов или инъективность отображения множеств не доказывает сохранение операций.",
  "L2 cell (P1,P1)→P0 maps to L4 cell (P2,P2)→P0 for both laws.":
    "Для обоих законов ячейка L2 (P1,P1)→P0 отображается в ячейку L4 (P2,P2)→P0.",
  "f(P1⊕_2P1)=P0=P2⊕_4P2.": "f(P1⊕_2P1)=P0=P2⊕_4P2.",

  "It is a translation that collapses every source label onto the target's P0.":
    "Это отображение, которое склеивает каждую метку источника с P0 целевого уровня.",
  "z_(n,m)(P_i)=P0 for every P_i∈Q_n.": "z_(n,m)(P_i)=P0 для каждого P_i∈Q_n.",
  "L3→L5: P0,P1,P2 all map to P0, and both sides of every preservation equation equal P0.":
    "L3→L5: P0,P1,P2 отображаются в P0, и обе части каждого уравнения сохранения равны P0.",
  "PLUS_m(P0,P0)=P0 and STAR_m(P0,P0)=P0, so constant-P0 outputs preserve both operations.":
    "PLUS_m(P0,P0)=P0 и STAR_m(P0,P0)=P0, поэтому постоянный выход P0 сохраняет обе операции.",
  "Saying no morphism exists from L3 to L5 is false; what fails is every nonzero full-algebra homomorphism.":
    "Утверждение об отсутствии морфизма L3→L5 ложно; не существует лишь ненулевого гомоморфизма полной алгебры.",
  "Every source table cell maps to target cell (P0,P0)→P0.":
    "Каждая ячейка исходной таблицы отображается в целевую ячейку (P0,P0)→P0.",
  "z(F_n(x,y))=P0=F_m(z(x),z(y)).": "z(F_n(x,y))=P0=F_m(z(x),z(y)).",

  "An embedding places the smaller dial inside the larger one without merging any of its marked positions.":
    "Вложение помещает меньший циферблат внутрь большего, не склеивая его отмеченные позиции.",
  "An embedding is an injective homomorphism; for n≥2, A_n embeds in A_m exactly when n divides m.":
    "Вложение — инъективный гомоморфизм; при n≥2 алгебра A_n вкладывается в A_m тогда и только тогда, когда n делит m.",
  "L2→L4 uses P0→P0 and P1→P2; L3→L5 is impossible because 3 does not divide 5.":
    "L2→L4 использует P0→P0 и P1→P2; L3→L5 невозможно, поскольку 3 не делит 5.",
  "The image of generator P1 must have exact additive order n, and a cyclic group of order m has such an element exactly when n|m.":
    "Образ образующего P1 должен иметь аддитивный порядок ровно n, а циклическая группа порядка m содержит такой элемент тогда и только тогда, когда n|m.",
  "The same-index candidate P_i→P_i can fail even when labels look compatible; operational transfer needs further authorization.":
    "Кандидат P_i→P_i с тем же индексом может не сохранять операции, даже если метки выглядят совместимыми; операционный перенос требует отдельного разрешения.",
  "L3→L5 failure: source PLUS(P1,P2)→P0, target PLUS(P1,P2)→P3.":
    "Отказ L3→L5: в источнике PLUS(P1,P2)→P0, в цели PLUS(P1,P2)→P3.",
  "h(P_i)=P_((u·m/n)i mod m), u∈U(n), when n|m.": "h(P_i)=P_((u·m/n)i mod m), u∈U(n), когда n|m.",

  "A receipt is like a laboratory log: it records which bounded check ran, on what scope, and what status ended it.":
    "Протокол похож на лабораторный журнал: он фиксирует, какая ограниченная проверка выполнялась, в какой области и с каким итоговым статусом.",
  "receipt=(check_id,scope,inputs,status,work ledger,terminal witness).":
    "receipt=(check_id,scope,inputs,status,work ledger,terminal witness).",
  "DIRECT_MORPHISM_REPLAY_L2_TO_L4 records mapping, four checked pairs, four families, rc=0, and status=PASS.":
    "DIRECT_MORPHISM_REPLAY_L2_TO_L4 записывает mapping, четыре проверенные пары, четыре семейства, rc=0 и status=PASS.",
  "Machine-readable fields bind a claim to one replayable contour instead of leaving an unscoped success word.":
    "Машиночитаемые поля связывают утверждение с одним воспроизводимым контуром вместо неограниченного слова об успехе.",
  "A receipt is not a mathematical theorem, truth certificate, customer outcome, or proof of intelligence.":
    "Протокол — не математическая теорема, не сертификат истины, не результат для клиента и не доказательство интеллекта.",
  "Receipt ledger columns: check_id | scope | expected | got | status.":
    "Столбцы реестра протокола: check_id | scope | expected | got | status.",
  "PASS + disclosed scope ≠ proof outside that scope.":
    "PASS + раскрытая область ≠ доказательство за пределами этой области.",

  "A boundary is a clearly marked stop sign showing exactly why a stronger conclusion is not allowed.":
    "Граница — ясно обозначенный знак остановки, точно объясняющий, почему более сильный вывод недопустим.",
  "BOUNDARY is a terminal status paired with a missing condition, counterexample, or unavailable contour.":
    "BOUNDARY — терминальный статус, сопровождаемый отсутствующим условием, контрпримером или недоступным контуром.",
  "L3→L5 same-index transfer ends at the named level-alignment boundary with the P0≠P3 witness.":
    "Перенос L3→L5 с теми же индексами завершается на именованной границе согласования уровней со свидетелем P0≠P3.",
  "An explicit failed preservation equation is sufficient to reject that candidate map without guessing a favourable interpretation.":
    "Явного нарушенного уравнения сохранения достаточно, чтобы отвергнуть отображение-кандидат без подбора выгодной интерпретации.",
  "A boundary is not a hidden pass, and an environment block must not be reported as a successful replay.":
    "Граница — не скрытый успешный результат, а блокировку средой нельзя представлять как успешное воспроизведение.",
  "Receipt fields: expected=the divisible-pair tuple; got=[3,5]; the separate preservation counterexample compares P0 with P3.":
    "Поля протокола: expected=кортеж пар, связанных делимостью; got=[3,5]; отдельный контрпример сохранения сравнивает P0 с P3.",
  "φ(PLUS_3(P1,P2))=P0≠P3=PLUS_5(φP1,φP2).": "φ(PLUS_3(P1,P2))=P0≠P3=PLUS_5(φP1,φP2).",

  "Formal, current, and target layers": "Формальный, текущий и целевой слои",
  "Keep the proven blueprint, the machine running today, and the proposed future machine in three labelled folders.":
    "Храните доказанный чертёж, работающую сегодня машину и предложенную будущую машину в трёх подписанных папках.",
  "FORMAL=finite laws; CURRENT V4=bounded deterministic selector; TARGET=unimplemented or unproven World Atlas learning architecture.":
    "FORMAL=конечные законы; CURRENT V4=ограниченный детерминированный селектор; TARGET=нереализованная или недоказанная архитектура обучения World Atlas.",
  "Formal: 560 coordinates. Current: 556 active, 1,204 committed, 880 executable, 440 per pattern. Target: persistent trained Atlas NOT_PRESENT.":
    "Формально: 560 координат. Сейчас: 556 активных, 1,204 зафиксированных, 880 исполнимых, 440 на шаблон. Цель: сохраняемый обученный Atlas NOT_PRESENT.",
  "Each layer has different objects and evidence, so conclusions are licensed only inside the layer whose contract was checked.":
    "У каждого слоя свои объекты и доказательства, поэтому вывод разрешён только внутри слоя, контракт которого проверен.",
  "Verified finite tables do not prove persistent learning, external operational gain, a trained Atlas, or General AI.":
    "Проверенные конечные таблицы не доказывают персистентное обучение, внешний операционный выигрыш, обученный Atlas или General AI.",
  "Layer ledger: FORMAL | CURRENT V4 | TARGET, with a separate status column.":
    "Реестр слоёв: FORMAL | CURRENT V4 | TARGET, с отдельным столбцом статуса.",
  "1,204→880→440 is current selector arithmetic; it is not the 560-coordinate formal derivation.":
    "1,204→880→440 — арифметика текущего селектора, а не формальный вывод 560 координат.",

  "Symbol legend": "Легенда символов",
  "Mathematical symbols are road signs: learn what each sign asks you to do before trying to read the whole proof.":
    "Математические символы похожи на дорожные знаки: прежде чем читать всё доказательство, узнайте, что требует каждый знак.",
  "∈ means belongs to; ⇒ implies; ⇔ if and only if; ∅ empty set; ∤ does not divide; ⊆ subset; Δ equality relation; ord order; Aut automorphisms; End endomorphisms; Hom homomorphisms; φ Euler totient or a named map by context; gcd greatest common divisor; binom binomial coefficient; ⋊ semidirect product; χ character; exp exponential.":
    "∈ означает «принадлежит»; ⇒ — «следует»; ⇔ — «тогда и только тогда»; ∅ — пустое множество; ∤ — «не делит»; ⊆ — подмножество; Δ — отношение равенства; ord — порядок; Aut — автоморфизмы; End — эндоморфизмы; Hom — гомоморфизмы; φ — функция Эйлера или именованное отображение по контексту; gcd — наибольший общий делитель; binom — биномиальный коэффициент; ⋊ — полупрямое произведение; χ — характер; exp — экспонента.",
  "L3: P1∈Q_3 and ord(P1)=3 ⇒ P1 generates Q_3 under PLUS; 3∤5 ⇔ no element of order 3 exists in C_5.":
    "L3: P1∈Q_3 и ord(P1)=3 ⇒ P1 порождает Q_3 относительно PLUS; 3∤5 ⇔ в C_5 нет элемента порядка 3.",
  "Each symbol has a fixed local grammar, while overloaded letters such as φ receive their meaning from the definition immediately around them.":
    "У каждого символа есть фиксированная локальная грамматика, а многозначные буквы вроде φ получают смысл из ближайшего определения.",
  "Do not read ⇒ as equality, ⇔ as one-way implication, ∅ as P0, Δ as a numeric difference, or ⋊ as ordinary multiplication.":
    "Не читайте ⇒ как равенство, ⇔ как одностороннее следствие, ∅ как P0, Δ как числовую разность, а ⋊ как обычное умножение.",
  "Legend lookup: symbol | read aloud | meaning in this chapter.":
    "Строка легенды: символ | как произносится | значение в этой главе.",
  "n∤m is the negation of n|m; x∈∅ is always false; Δ_X={(x,x)|x∈X}.":
    "n∤m — отрицание n|m; x∈∅ всегда ложно; Δ_X={(x,x)|x∈X}.",

  "Residue class": "Класс вычетов",
  "A residue class is a basket holding all integers that land on the same dial mark.":
    "Класс вычетов похож на корзину со всеми целыми числами, попадающими на одну отметку циферблата.",
  "[i]_n={i+kn | k∈Z}; P_i represents [i]_n in Q_n.": "[i]_n={i+kn | k∈Z}; P_i представляет [i]_n в Q_n.",
  "L3: …,−5,−2,1,4,7,… all belong to [1]_3 and are represented by P1.":
    "L3: …,−5,−2,1,4,7,… принадлежат [1]_3 и представлены полюсом P1.",
  "Two integers land on the same mark exactly when their difference is a multiple of n.":
    "Два целых числа попадают на одну отметку тогда и только тогда, когда их разность кратна n.",
  "A residue class is an infinite set of integers; the selected remainder 0,…,n−1 is only its convenient representative.":
    "Класс вычетов — бесконечное множество целых чисел; выбранный остаток 0,…,n−1 лишь удобный представитель.",
  "L3 labels choose the representatives 0,1,2 for the three residue classes.":
    "Метки L3 выбирают представителей 0,1,2 для трёх классов вычетов.",
  "[4]_3=[1]_3 because 3|(4−1).": "[4]_3=[1]_3, поскольку 3|(4−1).",

  "Signature, arity, and constant": "Сигнатура, арность и константа",
  "A signature is the list of available machine buttons together with the number of input slots on each button.":
    "Сигнатура — список доступных кнопок автомата вместе с числом входных слотов у каждой кнопки.",
  "arity(PLUS)=2, arity(STAR)=2, arity(P0)=0; the project shorthand for A_n is signature (2,2,0).":
    "arity(PLUS)=2, arity(STAR)=2, arity(P0)=0; проектная сокращённая сигнатура A_n равна (2,2,0).",
  "At L2, PLUS(P1,P1) uses two inputs, while the symbol P0 names one fixed element and accepts no inputs.":
    "На L2 операция PLUS(P1,P1) использует два входа, а символ P0 называет один фиксированный элемент и не принимает входов.",
  "Arity counts argument places syntactically; a named constant is exactly a nullary operation.":
    "Арность считает места аргументов в записи; именованная константа — в точности нульарная операция.",
  "The tuple (2,2,0) lists arities, not level sizes, tensor dimensions, or learned layer widths.":
    "Кортеж (2,2,0) перечисляет арности, а не размеры уровней, размерности тензоров или ширины обученных слоёв.",
  "Operation ledger: PLUS | 2; STAR | 2; P0 | 0.": "Реестр операций: PLUS | 2; STAR | 2; P0 | 0.",
  "A_n=(Q_n,PLUS_n,STAR_n,P0).": "A_n=(Q_n,PLUS_n,STAR_n,P0).",

  "Magma, semigroup, monoid, and group": "Магма, полугруппа, моноид и группа",
  "These names are levels of a checklist: each new level keeps every earlier requirement and adds another one.":
    "Эти названия — ступени списка требований: каждая новая ступень сохраняет все предыдущие требования и добавляет ещё одно.",
  "magma=closed total binary operation; semigroup=magma+associativity; monoid=semigroup+two-sided identity; group=monoid+two-sided inverses.":
    "магма=замкнутая всюду определённая бинарная операция; полугруппа=магма+ассоциативность; моноид=полугруппа+двусторонняя единица; группа=моноид+двусторонние обратные элементы.",
  "For n≥2, PLUS is a group; STAR is a magma but fails associativity and therefore cannot be a semigroup, monoid, or group.":
    "При n≥2 PLUS является группой; STAR является магмой, но неассоциативна и потому не может быть полугруппой, моноидом или группой.",
  "The hierarchy follows directly from nested definitions, so failing an earlier requirement blocks every stronger class.":
    "Иерархия непосредственно следует из вложенных определений: нарушение раннего требования исключает каждый более сильный класс.",
  "Having a right-neutral element is not enough for a monoid; the identity must work on both sides and associativity must hold.":
    "Правого нейтрального элемента недостаточно для моноида: единица должна действовать с обеих сторон, и операция должна быть ассоциативной.",
  "L3 STAR gives (P1★P0)★P1=P2 but P1★(P0★P1)=P1.": "В L3 STAR получаем (P1★P0)★P1=P2, но P1★(P0★P1)=P1.",
  "group ⇒ monoid ⇒ semigroup ⇒ magma; the reverse implications need not hold.":
    "группа ⇒ моноид ⇒ полугруппа ⇒ магма; обратные следствия могут не выполняться.",

  Closure: "Замкнутость",
  "Closure means the operation never throws you outside the declared game board.":
    "Замкнутость означает, что операция никогда не выводит результат за пределы объявленного игрового поля.",
  "F is closed on Q_n when F(x,y)∈Q_n for every x,y∈Q_n.": "F замкнута на Q_n, если F(x,y)∈Q_n для всех x,y∈Q_n.",
  "L3: PLUS(P2,P2)=P1 and STAR(P0,P2)=P0; both outputs still belong to Q_3.":
    "L3: PLUS(P2,P2)=P1 и STAR(P0,P2)=P0; оба выхода по-прежнему принадлежат Q_3.",
  "Modulo n always returns an index 0,…,n−1, and the reset branch returns P0, which is already in Q_n.":
    "Вычисление по модулю n всегда возвращает индекс 0,…,n−1, а ветвь сброса возвращает P0, уже принадлежащий Q_n.",
  "Closure does not imply associativity, commutativity, inverses, or meaningful real-world semantics.":
    "Из замкнутости не следуют ассоциативность, коммутативность, обратимые элементы или содержательная семантика реального мира.",
  "Every body cell of each L3 table contains one of P0,P1,P2 and no outside symbol.":
    "Каждая внутренняя ячейка обеих таблиц L3 содержит один из P0,P1,P2 и ни одного внешнего символа.",
  "PLUS_n,STAR_n:Q_n×Q_n→Q_n.": "PLUS_n,STAR_n:Q_n×Q_n→Q_n.",

  Associativity: "Ассоциативность",
  "Associativity asks whether moving parentheses changes the answer while keeping operand order fixed.":
    "Ассоциативность спрашивает, меняется ли ответ при переносе скобок без изменения порядка операндов.",
  "F is associative when F(F(x,y),z)=F(x,F(y,z)) for every x,y,z.":
    "F ассоциативна, если F(F(x,y),z)=F(x,F(y,z)) для всех x,y,z.",
  "L3 PLUS is associative, but STAR fails on x=P1,y=P0,z=P1, producing P2 on the left and P1 on the right.":
    "L3 PLUS ассоциативна, но STAR нарушает закон при x=P1,y=P0,z=P1: слева получается P2, справа — P1.",
  "Residue addition inherits integer associativity; one unequal STAR triple disproves STAR associativity.":
    "Сложение классов вычетов наследует ассоциативность целых чисел; одна неравная тройка STAR опровергает ассоциативность STAR.",
  "Associativity does not permit reordering operands; that separate permission is commutativity.":
    "Ассоциативность не разрешает переставлять операнды; это отдельное свойство называется коммутативностью.",
  "Replay two table lookups for each side of the L3 STAR counterexample.":
    "Воспроизведите два обращения к таблице для каждой части контрпримера STAR на L3.",
  "(i+j)+k≡i+(j+k) (mod n), but (P1★P0)★P1≠P1★(P0★P1).": "(i+j)+k≡i+(j+k) (mod n), но (P1★P0)★P1≠P1★(P0★P1).",

  Commutativity: "Коммутативность",
  "Commutativity asks whether swapping the two input seats leaves the result unchanged.":
    "Коммутативность спрашивает, сохраняется ли результат при перестановке двух входных мест.",
  "F is commutative when F(x,y)=F(y,x) for every x,y.": "F коммутативна, если F(x,y)=F(y,x) для всех x,y.",
  "L3 PLUS(P1,P2)=P0=PLUS(P2,P1), while STAR(P0,P1)=P0≠P1=STAR(P1,P0).":
    "L3 PLUS(P1,P2)=P0=PLUS(P2,P1), тогда как STAR(P0,P1)=P0≠P1=STAR(P1,P0).",
  "Integer addition is commutative, but STAR's reset condition singles out the raw-left operand.":
    "Сложение целых чисел коммутативно, но условие сброса STAR выделяет непосредственный левый операнд.",
  "One symmetric-looking cell is not a proof; every reflected pair across the table diagonal must agree.":
    "Одной симметрично выглядящей ячейки недостаточно: должны совпасть все пары, отражённые относительно диагонали таблицы.",
  "The PLUS table is symmetric across its diagonal; the STAR table is not for n≥2.":
    "Таблица PLUS симметрична относительно диагонали, а таблица STAR при n≥2 — нет.",
  "i+j≡j+i (mod n); STAR_n(P0,P1)≠STAR_n(P1,P0).": "i+j≡j+i (mod n); STAR_n(P0,P1)≠STAR_n(P1,P0).",

  "Intuition / analogy": "Интуиция / аналогия",
  "Exact definition": "Точное определение",
  "Worked small-level example": "Разобранный пример малого уровня",
  "Why it is true": "Почему это верно",
  "Common mistake or boundary": "Типичная ошибка или граница",
  "Table channel": "Проверка по таблице",
  "Open a term for a complete seven-part explanation and two independent checks.":
    "Откройте термин, чтобы увидеть полное объяснение из семи частей и две независимые проверки.",
  "Every entry moves from analogy to exact definition, works a small example, explains why the claim is true, names a common mistake, and reconciles table and formula channels.":
    "Каждая статья идёт от аналогии к точному определению, разбирает малый пример, объясняет истинность утверждения, указывает типичную ошибку и согласует проверку по таблице с проверкой по формуле.",
  "School proof notebook": "Школьная тетрадь доказательств",
  "SCHOOL PROOF NOTEBOOK": "ШКОЛЬНАЯ ТЕТРАДЬ ДОКАЗАТЕЛЬСТВ",
  "Advanced words become manageable when every claim follows the same seven questions.":
    "Сложные термины становятся понятнее, когда каждое утверждение отвечает на одни и те же семь вопросов.",
  "Open a card in order: start with the analogy, read the exact definition, replay the small example, inspect the reason, reject the common mistake, and make the table and formula agree.":
    "Читайте карточку по порядку: начните с аналогии, прочитайте точное определение, воспроизведите малый пример, разберите обоснование, отвергните типичную ошибку и согласуйте таблицу с формулой.",
  "School symmetry notebook": "Школьная тетрадь симметрий",
  "SCHOOL SYMMETRY NOTEBOOK": "ШКОЛЬНАЯ ТЕТРАДЬ СИММЕТРИЙ",
  "Treat a symmetry as a rule-preserving relabelling before counting anything.":
    "Прежде чем что-либо считать, рассматривайте симметрию как переименование, сохраняющее правила.",
  "Each card begins with a concrete dial picture, then states the academic definition, works a finite example, proves the claim, marks the interpretation boundary, and reconciles a lookup ledger with a formula.":
    "Каждая карточка начинается с наглядного циферблата, затем даёт академическое определение, разбирает конечный пример, доказывает утверждение, отмечает границу интерпретации и согласует реестр поиска с формулой.",

  "Identity element": "Нейтральный элемент",
  "An identity is a do-nothing input that works from both sides for every element.":
    "Нейтральный элемент — вход, который ничего не меняет с обеих сторон для каждого элемента.",
  "e is a two-sided identity when e∘x=x=x∘e for every x.":
    "e является двусторонним нейтральным элементом, если e∘x=x=x∘e для любого x.",
  "At L3, P0 is the PLUS identity; STAR has P_i★P0=P_i but P0★P1=P0≠P1, so it has no identity.":
    "На L3 P0 — нейтральный элемент PLUS; в STAR выполняется P_i★P0=P_i, но P0★P1=P0≠P1, поэтому нейтрального элемента нет.",
  "For STAR, a right-neutral candidate e=P_k must satisfy P1★P_k=P1, which forces k≡0 and e=P0; the remaining candidate fails on the left because P0★P1=P0≠P1. Thus no two-sided identity exists for n≥2.":
    "В STAR кандидат на правый нейтральный элемент e=P_k должен удовлетворять P1★P_k=P1, откуда k≡0 и e=P0; оставшийся кандидат не работает слева, поскольку P0★P1=P0≠P1. Следовательно, при n≥2 двустороннего нейтрального элемента нет.",
  "Do not shorten right-neutral to identity, and keep the degenerate L1 exception separate.":
    "Не сокращайте «правый нейтральный элемент» до «нейтрального элемента» и отдельно оговаривайте вырожденное исключение L1.",
  "An identity requires both its row and its column to reproduce the header sequence.":
    "Для нейтрального элемента и его строка, и его столбец должны воспроизводить последовательность заголовков.",
  "PLUS_n(P0,P_i)=P_i=PLUS_n(P_i,P0).": "PLUS_n(P0,P_i)=P_i=PLUS_n(P_i,P0).",

  "Inverse and generator": "Обратный элемент и образующий",
  "An inverse walks back to the origin; a generator can reach every dial mark by repeated steps.":
    "Обратный элемент возвращает к началу, а повторные шаги образующего достигают каждой отметки циферблата.",
  "In PLUS, P_i^(−1)=P_((n−i) mod n); P_k generates C_n exactly when gcd(k,n)=1.":
    "В PLUS P_i^(−1)=P_((n−i) mod n); P_k порождает C_n тогда и только тогда, когда gcd(k,n)=1.",
  "L3: P1 and P2 are inverses because P1⊕P2=P0; repeated P1 visits P0,P1,P2.":
    "L3: P1 и P2 взаимно обратны, поскольку P1⊕P2=P0; повторение шага P1 посещает P0,P1,P2.",
  "The inverse index cancels i modulo n, and a step k visits n/gcd(k,n) distinct residues.":
    "Индекс обратного элемента сокращает i по модулю n, а шаг k посещает n/gcd(k,n) различных классов вычетов.",
  "STAR lacks a two-sided identity for n≥2, so group-style inverses and generators do not transfer unchanged to STAR.":
    "При n≥2 в STAR нет двустороннего нейтрального элемента, поэтому групповые понятия обратного элемента и образующего нельзя без изменений переносить на STAR.",
  "L3 PLUS row P1 contains P0 under column P2; powers of P1 cycle through all three poles.":
    "В строке P1 таблицы L3 PLUS под столбцом P2 находится P0; степени P1 циклически проходят все три полюса.",
  "i+(n−i)≡0 (mod n); ord(P_k)=n/gcd(k,n).": "i+(n−i)≡0 (mod n); ord(P_k)=n/gcd(k,n).",

  "Standard left and right translation": "Стандартная левая и правая трансляции",
  "Fix one operand of a two-input table; a fixed row or column becomes a one-input route through the outputs.":
    "Зафиксируйте один операнд таблицы с двумя входами: фиксированная строка или столбец станет одноместным маршрутом по выходам.",
  "L_a(x)=a★x is the standard left translation; R_a(x)=x★a is the standard right translation.":
    "L_a(x)=a★x — стандартная левая трансляция; R_a(x)=x★a — стандартная правая трансляция.",
  "L3 with a=P2: L_P2 maps P0,P1,P2 to P2,P0,P1; R_P2 maps them to P0,P0,P1.":
    "На L3 при a=P2: L_P2 отображает P0,P1,P2 в P2,P0,P1, а R_P2 — в P0,P0,P1.",
  "The adjective left or right names the slot occupied by the fixed multiplier a.":
    "Слова «левая» и «правая» называют слот, который занимает фиксированный множитель a.",
  "ABI STAR_LEFT(s,a)=s★a is standard R_a; ABI STAR_RIGHT(s,a)=a★s is standard L_a.":
    "ABI STAR_LEFT(s,a)=s★a является стандартной R_a; ABI STAR_RIGHT(s,a)=a★s является стандартной L_a.",
  "L_a is row a; R_a is column a.": "L_a — строка a; R_a — столбец a.",
  "STAR_LEFT(_,a)=R_a and STAR_RIGHT(_,a)=L_a.": "STAR_LEFT(_,a)=R_a и STAR_RIGHT(_,a)=L_a.",

  "Image of a function": "Образ функции",
  "The image is the set of destinations actually reached, not every destination that was available in principle.":
    "Образ — множество действительно достигнутых целей, а не всех целей, доступных в принципе.",
  "Im(f)={f(x)|x∈X}; rank(f)=|Im(f)| for a finite transformation.":
    "Im(f)={f(x)|x∈X}; для конечного преобразования rank(f)=|Im(f)|.",
  "L3 R_P2 has outputs P0,P0,P1, so Im(R_P2)={P0,P1} and rank=2.":
    "В L3 отображение R_P2 имеет выходы P0,P0,P1, поэтому Im(R_P2)={P0,P1} и rank=2.",
  "List all outputs and remove repetitions; the remaining distinct values are exactly the image.":
    "Перечислите все выходы и удалите повторы: оставшиеся различные значения и составляют образ.",
  "Codomain Q_3 has three elements even when the image has only two; image and codomain are not synonyms.":
    "Кодомен Q_3 содержит три элемента, даже если в образе только два; образ и кодомен — не синонимы.",
  "Fixed P2 STAR column: P0,P0,P1.": "Фиксированный столбец P2 таблицы STAR: P0,P0,P1.",
  "Im(R_P2)={P0,P1}⊂Q_3.": "Im(R_P2)={P0,P1}⊂Q_3.",

  "Function, injection, surjection, and bijection": "Функция, инъекция, сюръекция и биекция",
  "A function gives every student one locker; injective forbids sharing, surjective leaves no locker unused, and bijective does both.":
    "Функция выдаёт каждому ученику один шкафчик; инъекция запрещает делить шкафчик, сюръекция не оставляет пустых шкафчиков, а биекция выполняет оба условия.",
  "function: one output per input; injective: f(x)=f(y)⇒x=y; surjective: Im(f)=Y; bijective: injective and surjective.":
    "функция: один выход на каждый вход; инъективность: f(x)=f(y)⇒x=y; сюръективность: Im(f)=Y; биективность: инъективность и сюръективность.",
  "L2→L4 map P0→P0,P1→P2 is injective but not surjective; L3 multiplication by 2 is bijective.":
    "Отображение L2→L4 P0→P0,P1→P2 инъективно, но не сюръективно; умножение на 2 в L3 биективно.",
  "The definitions test collisions and coverage separately; on equal finite sets, injective and surjective are equivalent.":
    "Определения отдельно проверяют склейки и покрытие; для конечных множеств одинаковой мощности инъективность и сюръективность эквивалентны.",
  "A homomorphism need not be injective, and an injection is not an embedding until operation preservation is proved.":
    "Гомоморфизм не обязан быть инъективным, а инъекция не является вложением, пока не доказано сохранение операций.",
  "Mapping ledger L2→L4 uses two distinct targets but leaves P1 and P3 unused.":
    "Реестр отображения L2→L4 использует две различные цели, оставляя P1 и P3 неиспользованными.",
  "injective+surjective⇔bijective.": "инъективность+сюръективность⇔биективность.",

  "Divisibility and element order": "Делимость и порядок элемента",
  "An n-step cycle fits evenly inside an m-step cycle only when m can be split into whole blocks of n steps.":
    "Цикл из n шагов ровно помещается в цикл из m шагов лишь тогда, когда m разбивается на целое число блоков по n шагов.",
  "n|m means m=qn for an integer q; ord(x) is the least positive r with r·x=0 in an additive group.":
    "n|m означает m=qn для целого q; ord(x) — наименьшее положительное r, при котором r·x=0 в аддитивной группе.",
  "2|4 and P2∈C_4 has order 2; 3∤5 and no element of C_5 has order 3.":
    "2|4, и P2∈C_4 имеет порядок 2; 3∤5, и в C_5 нет элемента порядка 3.",
  "Every element order in a finite group divides the group order; in C_m an element of order n exists exactly when n|m.":
    "Порядок каждого элемента конечной группы делит порядок группы; в C_m элемент порядка n существует тогда и только тогда, когда n|m.",
  "The symbol n|m does not mean a fraction, and a same-name pole does not preserve element order across levels.":
    "Символ n|m не обозначает дробь, а одноимённый полюс не обязан сохранять порядок элемента между уровнями.",
  "L4 repeated PLUS of P2: P0→P2→P0; L5 every nonzero pole has order 5.":
    "Повторное PLUS с P2 на L4: P0→P2→P0; на L5 каждый ненулевой полюс имеет порядок 5.",
  "ord(P_k in C_m)=m/gcd(k,m).": "ord(P_k в C_m)=m/gcd(k,m).",

  "Unit group and Euler totient": "Группа обратимых классов и функция Эйлера",
  "Units are exactly the step sizes that eventually visit every mark instead of getting trapped in a smaller loop.":
    "Обратимые классы — в точности те размеры шага, которые посещают каждую отметку, а не застревают в меньшем цикле.",
  "U(n)={u mod n | gcd(u,n)=1}; |U(n)|=φ(n).": "U(n)={u mod n | gcd(u,n)=1}; |U(n)|=φ(n).",
  "U(3)={1,2} and φ(3)=2; U(4)={1,3} while step 2 is excluded because gcd(2,4)=2.":
    "U(3)={1,2} и φ(3)=2; U(4)={1,3}, а шаг 2 исключён, поскольку gcd(2,4)=2.",
  "A residue has a multiplicative inverse modulo n exactly when it is coprime to n.":
    "Класс вычетов имеет мультипликативный обратный по модулю n тогда и только тогда, когда он взаимно прост с n.",
  "U(n) is a multiplicative group of indices, not the carrier Q_n under PLUS.":
    "U(n) — мультипликативная группа индексов, а не носитель Q_n относительно PLUS.",
  "Unit ledger L1–L7 has sizes 1,1,2,2,4,2,6.": "Размеры в реестре обратимых классов L1–L7: 1,1,2,2,4,2,6.",
  "u∈U(n)⇔gcd(u,n)=1⇔∃v:uv≡1 (mod n).": "u∈U(n)⇔gcd(u,n)=1⇔∃v:uv≡1 (mod n).",

  "Catalan number and bracket recurrence": "Число Каталана и рекурсия скобок",
  "Catalan numbers count all ways to split an ordered row of operands into a left subtree and a right subtree.":
    "Числа Каталана считают все способы разделить упорядоченный ряд операндов на левое и правое поддеревья.",
  "C_0=1 and C_r=Σ_(i=0)^(r−1) C_i C_(r−1−i); equivalently C_r=(1/(r+1))binom(2r,r).":
    "C_0=1 и C_r=Σ_(i=0)^(r−1) C_i C_(r−1−i); равносильно C_r=(1/(r+1))binom(2r,r).",
  "Three operands use r=2 apply nodes: C_2=C_0C_1+C_1C_0=1+1=2 bracketings.":
    "Три операнда используют r=2 узла применения: C_2=C_0C_1+C_1C_0=1+1=2 расстановки скобок.",
  "Choose the root split; left and right subtree shapes are independent, so their counts multiply and all split positions add.":
    "Выберите разделение в корне; формы левого и правого поддеревьев независимы, поэтому их числа перемножаются, а результаты по всем местам разделения складываются.",
  "Catalan counts tree shapes with fixed operand order; it does not count permutations of operands.":
    "Число Каталана считает формы деревьев при фиксированном порядке операндов, а не перестановки операндов.",
  "arity 2,3,4,5 → bracketings 1,2,5,14.": "арность 2,3,4,5 → число расстановок скобок 1,2,5,14.",
  "C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5.": "C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5.",

  "Equivalence relation and quotient": "Отношение эквивалентности и фактор-множество",
  "An equivalence relation sorts objects into non-overlapping boxes; a quotient treats each whole box as one new point.":
    "Отношение эквивалентности раскладывает объекты по непересекающимся ящикам, а фактор-множество считает каждый ящик одной новой точкой.",
  "∼ is reflexive, symmetric, and transitive; X/∼ is the set of equivalence classes. An algebraic quotient requires ∼ to be a congruence.":
    "∼ рефлексивно, симметрично и транзитивно; X/∼ — множество классов эквивалентности. Для алгебраического фактора ∼ должно быть конгруэнцией.",
  "L3 inversion gives classes {P0} and {P1,P2}, but these orbit classes are not automatically a STAR congruence quotient.":
    "Инверсия L3 даёт классы {P0} и {P1,P2}, но эти классы орбит не образуют автоматически фактор STAR по конгруэнции.",
  "The three axioms make every object belong to exactly one class; compatibility is the extra condition that makes operations independent of representatives.":
    "Три аксиомы помещают каждый объект ровно в один класс; совместимость — дополнительное условие, делающее операции независимыми от выбора представителей.",
  "An orbit partition, semantic grouping, and congruence quotient are different constructions until compatibility is proved.":
    "Разбиение на орбиты, смысловая группировка и фактор по конгруэнции остаются разными конструкциями, пока не доказана совместимость.",
  "Test representatives P1 and P2 in the STAR table before trying to define an operation on their merged class.":
    "Проверьте представителей P1 и P2 по таблице STAR, прежде чем определять операцию на их объединённом классе.",
  "[x]★[y]=[x★y] is well-defined only when ∼ is a congruence.":
    "[x]★[y]=[x★y] корректно определено лишь тогда, когда ∼ является конгруэнцией.",

  Endomorphism: "Эндоморфизм",
  "An endomorphism is a rule-preserving map that starts and ends on the same structure, even if it collapses states.":
    "Эндоморфизм — сохраняющее правила отображение структуры в себя, даже если оно склеивает состояния.",
  "End(A_n)=Hom(A_n,A_n); automorphisms are exactly the bijective endomorphisms.":
    "End(A_n)=Hom(A_n,A_n); автоморфизмы — в точности биективные эндоморфизмы.",
  "At L3, the zero map and the two unit maps u=1,2 are the three full-algebra endomorphisms.":
    "На L3 нулевое отображение и два отображения обратимых классов u=1,2 составляют три эндоморфизма полной алгебры.",
  "Every nonzero full-algebra endomorphism at n≥2 is injective and hence bijective on the finite carrier; the zero map is the only collapsing case.":
    "При n≥2 каждый ненулевой эндоморфизм полной алгебры инъективен и потому биективен на конечном носителе; только нулевое отображение склеивает состояния.",
  "End(A_n) is not the same set as Aut(A_n): the zero endomorphism is not an automorphism when n≥2.":
    "End(A_n) и Aut(A_n) — разные множества: при n≥2 нулевой эндоморфизм не является автоморфизмом.",
  "L3 endomorphism ledger: zero | identity | swap P1,P2.":
    "Реестр эндоморфизмов L3: нулевое | тождественное | перестановка P1,P2.",
  "|End(A_3)|=1+|U(3)|=3; |Aut(A_3)|=2.": "|End(A_3)|=1+|U(3)|=3; |Aut(A_3)|=2.",

  "Isomorphism versus literal equality": "Изоморфизм и буквальное равенство",
  "Two maps can have the same route structure even when their labels and object types are different.":
    "Два отображения могут иметь одинаковую структуру маршрутов, даже если их метки и типы объектов различаются.",
  "A≅B means a bijective structure-preserving map exists; it does not assert A=B as literal sets or typed objects.":
    "A≅B означает существование биективного отображения, сохраняющего структуру; это не утверждение A=B как буквальных множеств или типизированных объектов.",
  "U(3)={1,2} is canonically isomorphic to Aut(A_3)={id,σ_2} by u↦σ_u.":
    "U(3)={1,2} канонически изоморфна Aut(A_3)={id,σ_2} посредством u↦σ_u.",
  "The correspondence preserves multiplication as composition and has a unique inverse, while residues and permutations remain different kinds of objects.":
    "Соответствие переводит умножение в композицию и имеет единственное обратное, хотя классы вычетов и перестановки остаются объектами разных видов.",
  "Writing U(n)=Aut(A_n) without declaring the identification can conflate indices with functions.":
    "Запись U(n)=Aut(A_n) без объявления отождествления может смешать индексы с функциями.",
  "Correspondence table: 1→id; 2→(P1 P2).": "Таблица соответствия: 1→id; 2→(P1 P2).",
  "σ_u∘σ_v=σ_(uv mod n).": "σ_u∘σ_v=σ_(uv mod n).",

  "Torsor and holomorph": "Торсор и голоморф",
  "A torsor is a dial whose relative differences remain meaningful even after the absolute zero mark is erased.":
    "Торсор — циферблат, на котором относительные разности сохраняют смысл даже после стирания абсолютной отметки нуля.",
  "The cyclic torsor uses [x,y,z]=x−y+z; its affine symmetries x↦ux+b form Hol(C_n)=C_n⋊U(n).":
    "Циклический торсор использует [x,y,z]=x−y+z; его аффинные симметрии x↦ux+b образуют Hol(C_n)=C_n⋊U(n).",
  "L3 shift T1(x)=x+1 preserves [x,y,z] because every b cancels in (x+b)−(y+b)+(z+b).":
    "Сдвиг L3 T1(x)=x+1 сохраняет [x,y,z], поскольку каждый b сокращается в (x+b)−(y+b)+(z+b).",
  "Translations change the chosen origin but preserve all relative differences; unit multipliers preserve the cyclic group structure.":
    "Трансляции меняют выбранное начало, но сохраняют все относительные разности; умножения на обратимые классы сохраняют структуру циклической группы.",
  "A torsor is not a pointed group, and its translation symmetries do not preserve STAR's named reset point.":
    "Торсор не является группой с выделенной точкой, а его симметрии-трансляции не сохраняют именованную точку сброса STAR.",
  "Check L3 triples before and after T1; corresponding ternary outputs differ by the same shift.":
    "Проверьте тройки L3 до и после T1: соответствующие выходы тернарной операции различаются на один и тот же сдвиг.",
  "[F(x),F(y),F(z)]=u(x−y+z)+b=F([x,y,z]).": "[F(x),F(y),F(z)]=u(x−y+z)+b=F([x,y,z]).",

  "Five L3 ordered-pair orbits": "Пять орбит упорядоченных пар L3",
  "Pair each point of the 3×3 source-active grid with the point obtained by swapping P1 and P2 in both coordinates.":
    "Сопоставьте каждой точке сетки source–active размера 3×3 точку, полученную перестановкой P1 и P2 в обеих координатах.",
  "U(3) acts diagonally by u·(P_s,P_a)=(P_(us),P_(ua)).":
    "U(3) действует диагонально по правилу u·(P_s,P_a)=(P_(us),P_(ua)).",
  "The five orbits are {(P0,P0)}, {(P0,P1),(P0,P2)}, {(P1,P0),(P2,P0)}, {(P1,P1),(P2,P2)}, and {(P1,P2),(P2,P1)}.":
    "Пять орбит: {(P0,P0)}, {(P0,P1),(P0,P2)}, {(P1,P0),(P2,P0)}, {(P1,P1),(P2,P2)} и {(P1,P2),(P2,P1)}.",
  "Identity fixes all nine pairs; u=2 fixes only (P0,P0), and every other pair is matched with one distinct partner.":
    "Тождественное преобразование фиксирует все девять пар; u=2 фиксирует только (P0,P0), а каждой другой паре сопоставляется ровно один отличный партнёр.",
  "These five pair orbits are not the two pole orbits and not the twenty typed orbits after four family tags are restored.":
    "Эти пять орбит пар — не две орбиты полюсов и не двадцать типизированных орбит после восстановления четырёх меток семейства.",
  "Orbit sizes 1+2+2+2+2=9 exhaust the L3 ordered-pair table.":
    "Размеры орбит 1+2+2+2+2=9 исчерпывают таблицу упорядоченных пар L3.",
  "Burnside: (9+1)/2=5; typed at L3: 4×5=20.": "Бёрнсайд: (9+1)/2=5; типизированных на L3: 4×5=20.",

  "Current V4 school replay": "Школьное воспроизведение Current V4",
  "Imagine a sealed card catalogue: recognize one of two exact request cards, discard forbidden card types, choose one parity shelf, sort reproducibly, and use one card once.":
    "Представьте закрытый карточный каталог: распознайте одну из двух точных карточек запроса, отбросьте запрещённые виды, выберите полку чётности, воспроизводимо отсортируйте и один раз используйте одну карточку.",
  "alpha,beta→LEFT/even; gamma,delta→RIGHT/odd; committed=1,204; executable=880; frontier=440; order=SHA-256(observation,candidate_id,ordinal); arity=2; route_depth=1.":
    "alpha,beta→LEFT/even; gamma,delta→RIGHT/odd; committed=1,204; executable=880; frontier=440; order=SHA-256(observation,candidate_id,ordinal); arity=2; route_depth=1.",
  "For alpha,beta, the selector accepts the fixed pattern, enters 1,204 committed descriptors, keeps 880 of four executable kinds, exposes the 440 even-parity candidates, derives a hash order, binds one process-local handle, executes one bounded action, and records a receipt.":
    "Для alpha,beta селектор принимает фиксированный шаблон, входит во множество из 1,204 зафиксированных дескрипторов, оставляет 880 дескрипторов четырёх исполнимых видов, раскрывает 440 кандидатов чётной половины, вычисляет хеш-порядок, связывает один локальный для процесса дескриптор, исполняет одно ограниченное действие и записывает протокол.",
  "The current release contract fixes each filter and count; semantic_reads, rank_effects, and learning_writes are all zero, so Atlas state cannot change the order.":
    "Контракт текущего выпуска фиксирует каждый фильтр и число; semantic_reads, rank_effects и learning_writes равны нулю, поэтому состояние Atlas не может изменить порядок.",
  "A pole is a formal P_i label; a source pattern is one accepted input string; rank is |Im(T)|; ranking is the hash-derived candidate order. The arithmetic shows six 108-descriptor increments, but the reviewed source does not disclose names for six generated strata, so no such names may be invented.":
    "Полюс — формальная метка P_i; source pattern — одна принятая входная строка; rank равен |Im(T)|; ranking — полученный из хеша порядок кандидатов. Арифметика показывает шесть добавок по 108 дескрипторов, но проверенный исходный код не раскрывает названия шести сгенерированных слоёв, поэтому придумывать такие названия нельзя.",
  "Replay ledger: fixed pattern | committed 1,204 | executable 880 | parity frontier 440 | one-shot handle | receipt.":
    "Реестр воспроизведения: фиксированный шаблон | committed 1,204 | executable 880 | frontier чётности 440 | одноразовый handle | receipt.",
  "108=4Σ_(n=2)^7n; 1,204=556+6·108; 880=556+3·108; 440=880/2.":
    "108=4Σ_(n=2)^7n; 1,204=556+6·108; 880=556+3·108; 440=880/2.",

  "z is a left zero when z★x=z for every x; for STAR at n≥2, the unique left zero is z=P0.":
    "z является левым нулём, если z★x=z для любого x; при n≥2 единственный левый нуль STAR — z=P0.",
  "The first branch gives P0★x=P0. If z=P_k is nonzero, choose x=P_(n−k): then z★x=P0≠z, so no nonzero pole is a left zero.":
    "Первая ветвь даёт P0★x=P0. Если z=P_k ненулевой, выберите x=P_(n−k): тогда z★x=P0≠z, поэтому ни один ненулевой полюс не является левым нулём.",
  "e is right-neutral when x★e=x for every x; for STAR at n≥2, the unique right-neutral element is e=P0.":
    "e является правым нейтральным элементом, если x★e=x для любого x; при n≥2 единственный правый нейтральный элемент STAR — e=P0.",
  "P_i★P0=P_i for every i. Conversely, if e=P_k were right-neutral, P1★P_k=P1 would force 1+k≡1 (mod n), hence k≡0 and e=P0.":
    "P_i★P0=P_i для каждого i. Обратно, если бы e=P_k был правым нейтральным элементом, из P1★P_k=P1 следовало бы 1+k≡1 (mod n), откуда k≡0 и e=P0.",
  "An equivalence ∼ is a congruence when it is compatible with every named operation: x∼x' and y∼y' imply F(x,y)∼F(x',y') for each F; use STAR for S_n and both PLUS and STAR for A_n.":
    "Отношение эквивалентности ∼ является конгруэнцией, если оно совместимо с каждой именованной операцией: из x∼x' и y∼y' следует F(x,y)∼F(x',y') для каждой F; для S_n проверяется STAR, а для A_n — и PLUS, и STAR.",
  "A character is a group homomorphism C_n→C×; χ_s(k)=exp(2πisk/n), so χ_s(k+ℓ)=χ_s(k)χ_s(ℓ). It is faithful exactly when gcd(s,n)=1.":
    "Характер — гомоморфизм групп C_n→C×; χ_s(k)=exp(2πisk/n), поэтому χ_s(k+ℓ)=χ_s(k)χ_s(ℓ). Он точен тогда и только тогда, когда gcd(s,n)=1.",
  "f:A_n→A_m is a homomorphism when f(P0)=P0 and f(F_n(x,y))=F_m(f(x),f(y)) for every x,y and each F∈{PLUS,STAR}.":
    "f:A_n→A_m является гомоморфизмом, если f(P0)=P0 и f(F_n(x,y))=F_m(f(x),f(y)) для всех x,y и каждой F∈{PLUS,STAR}.",
  "magma=set with a closed total binary operation; semigroup=magma+associativity; monoid=semigroup+two-sided identity; group=monoid in which every element has a two-sided inverse.":
    "магма=множество с замкнутой всюду определённой бинарной операцией; полугруппа=магма+ассоциативность; моноид=полугруппа+двусторонний нейтральный элемент; группа=моноид, в котором каждый элемент имеет двусторонний обратный.",
};
