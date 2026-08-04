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
};
