import type { TranslationDictionary } from "../translations";

export const academicRu: TranslationDictionary = {
  "Cyclic-group proof": "Доказательство для циклической группы",
  "A PLUS automorphism is determined by the image of its generator P1; exactly the unit residues generate the whole cyclic carrier.":
    "Автоморфизм PLUS определяется образом образующего P1; весь циклический носитель порождают в точности обратимые классы вычетов.",
  "STAR rigidity proof": "Доказательство жёсткости STAR",
  "A STAR automorphism fixes the unique left zero P0 and preserves addition through the nonzero rows, so it is the same unit multiplication map.":
    "Автоморфизм STAR фиксирует единственный левый нуль P0 и сохраняет сложение через ненулевые строки; поэтому он является тем же отображением умножения на обратимый класс.",
  "Canonical group isomorphism": "Канонический изоморфизм групп",
  "The groups are canonically isomorphic under this map; writing them as literally equal would conflate residues with permutations.":
    "При этом отображении группы канонически изоморфны; буквальное равенство смешивало бы классы вычетов с перестановками.",
  "Compatibility boundary:": "Граница совместимости:",
  "The morphism receipts below belong to the compatibility and audit mathematics. The legacy morphism_v1 module is excluded from the current V4 runtime wheel; these examples are not current API capabilities.":
    "Приведённые ниже протоколы морфизмов относятся к математике совместимости и аудита. Устаревший модуль morphism_v1 исключён из текущего runtime-wheel V4; эти примеры не являются возможностями текущего API.",
  "legacy compatibility code": "устаревший код слоя совместимости",
  "Across ordered pairs L1–L7 there are 70 full-algebra homomorphisms, including 28 embeddings. The compatibility replay lists 16 divisible level pairs and chooses one canonical embedding on each; it does not enumerate every homomorphism.":
    "Для упорядоченных пар L1–L7 существует 70 гомоморфизмов полной алгебры, включая 28 вложений. Воспроизведение слоя совместимости перечисляет 16 пар уровней, связанных делимостью, и выбирает по одному каноническому вложению для каждой; оно не перечисляет все гомоморфизмы.",
  "Exact CRT boundary at L6": "Точная граница КТО на L6",
  "CRT decomposes cyclic addition, but STAR tests zero globally; a residue that is zero in only one CRT coordinate exposes the failure of coordinatewise preservation.":
    "Китайская теорема об остатках разлагает циклическое сложение, однако STAR проверяет нуль глобально; класс, нулевой лишь в одной КТО-координате, обнаруживает нарушение покоординатного сохранения.",
  "Complete L1–L7 count": "Полный подсчёт для L1–L7",
  "The compatibility replay chooses one canonical embedding on 16 divisible level pairs. Its legacy morphism module is excluded from the current V4 runtime wheel.":
    "Воспроизведение слоя совместимости выбирает по одному каноническому вложению на 16 парах уровней, связанных делимостью. Его устаревший модуль морфизмов исключён из текущего runtime-wheel V4.",
  Symmetry: "Симметрии",
  "GALO Symmetry — Automorphisms, Orbits, and Burnside": "Симметрии GALO — автоморфизмы, орбиты и лемма Бёрнсайда",
  "Explore the distinct PLUS and STAR symmetry layers, unit automorphisms, affine boundaries, orbits, stabilizers, Burnside counts, and cross-level homomorphisms.":
    "Исследуйте раздельные слои симметрий PLUS и STAR: автоморфизмы, аффинные границы, орбиты, стабилизаторы, подсчёты по лемме Бёрнсайда и межуровневые гомоморфизмы.",
  "Objects and notation": "Объекты и обозначения",
  "Translations and ranks": "Трансляции и ранги",
  "Stability and congruences": "Устойчивость и конгруэнции",
  "OBJECTS AND NOTATION": "ОБЪЕКТЫ И ОБОЗНАЧЕНИЯ",
  "One carrier, two reducts, one full finite algebra.": "Один носитель, два редукта и одна полная конечная алгебра.",
  "Project labels P_i are residue classes. The word tower is project terminology for the indexed family L1–L7; it is not an ascending chain unless connecting morphisms are specified.":
    "Проектные метки P_i соответствуют классам вычетов. Слово «башня» — проектное название индексированного семейства L1–L7, а не возрастающая цепь без явно заданных связующих морфизмов.",
  "Carrier correspondence": "Соответствие носителей",
  "The bijection sends P_i to the residue class i modulo n and P0 to 0.":
    "Биекция переводит P_i в класс вычетов i по модулю n, а P0 — в 0.",
  "PLUS reduct": "PLUS-редукт",
  "This is the cyclic group of order n. P0 is its two-sided neutral element.":
    "Это циклическая группа порядка n. P0 — её двусторонний нейтральный элемент.",
  "STAR reduct": "STAR-редукт",
  "This is a pointed finite magma: a set with one total binary operation and a named constant.":
    "Это конечная магма с выделенным элементом: множество с одной тотальной бинарной операцией и именованной константой.",
  "Full expansion": "Полное расширение",
  "This finite algebra has signature (2,2,0): two binary operations and one constant.":
    "Эта конечная алгебра имеет сигнатуру (2,2,0): две бинарные операции и одну константу.",
  "STAR / POINTED FINITE MAGMA": "STAR / КОНЕЧНАЯ МАГМА С ВЫДЕЛЕННЫМ ЭЛЕМЕНТОМ",
  "For STAR and n≥2, P0 is the unique left zero and unique right-neutral element. There is no left-neutral element, right zero, or two-sided neutral element: STAR is noncommutative, nonassociative, and neither a group nor a monoid.":
    "Для STAR при n≥2 элемент P0 является единственным левым нулём и единственным правым нейтральным элементом. Левого нейтрального элемента, правого нуля и двустороннего нейтрального элемента нет: STAR некоммутативен, неассоциативен и не является ни группой, ни моноидом.",
  "all levels": "все уровни",
  "P0 is a two-sided neutral element for PLUS.": "P0 — двусторонний нейтральный элемент для PLUS.",
  "P0 is neutral only on the right and absorbing only on the left; it is not a two-sided identity or zero.":
    "P0 нейтрален только справа и поглощает только слева; он не является ни двусторонним нейтральным элементом, ни двусторонним нулём.",
  "Degenerate exception: on the one-element carrier, P0 is simultaneously a two-sided neutral element and a two-sided zero.":
    "Вырожденное исключение: на одноэлементном носителе P0 одновременно является двусторонним нейтральным элементом и двусторонним нулём.",
  "STANDARD TRANSLATIONS AND FINITE RANKS": "СТАНДАРТНЫЕ ТРАНСЛЯЦИИ И КОНЕЧНЫЕ РАНГИ",
  "A fixed active pole gives a column for LEFT and a row for RIGHT.":
    "Фиксированный активный полюс задаёт столбец для LEFT и строку для RIGHT.",
  "Fixing the family and active pole turns source-to-target records into a unary map. ABI LEFT/RIGHT names encode operand placement; they are not the standard names of left and right algebraic translations.":
    "Фиксация семейства и активного полюса превращает записи «источник–цель» в унарное отображение. Имена ABI LEFT/RIGHT кодируют размещение операндов и не совпадают со стандартными названиями левых и правых алгебраических трансляций.",
  "fixed column · standard right translation": "фиксированный столбец · стандартная правая трансляция",
  "For a=0 this is the identity map; for a≠0 its image is Q_n without P_a.":
    "При a=0 это тождественное отображение; при a≠0 его образ равен Q_n без P_a.",
  "fixed row · standard left translation": "фиксированная строка · стандартная левая трансляция",
  "For a=0 this is the constant P0 map; for a≠0 it is a cyclic bijection.":
    "При a=0 это постоянное отображение в P0; при a≠0 — циклическая биекция.",
  "A separate academic symmetry chapter": "Отдельная академическая глава о симметриях",
  "These are sums of local quantities, not the order of one global group or the orbit count of one global action. The dedicated chapter defines automorphisms, affine actions, orbits, stabilizers, and Burnside's lemma.":
    "Это суммы локальных величин, а не порядок одной глобальной группы и не число орбит одного глобального действия. Отдельная глава определяет автоморфизмы, аффинные действия, орбиты, стабилизаторы и лемму Бёрнсайда.",
  "Open the symmetry chapter": "Открыть главу о симметриях",
  "Left-associated iteration at L6, a=P2": "Левоассоциированная итерация на L6, a=P2",
  "Once a prefix sum reaches P0, every later left-associated STAR product remains P0.":
    "После достижения P0 префиксной суммой все последующие левоассоциированные STAR-произведения остаются равными P0.",
  "Right-associated iteration at L6, a=P2": "Правоассоциированная итерация на L6, a=P2",
  "Right association repeatedly applies a nonzero left translation, so the additive cycle continues through P0.":
    "При правой ассоциации многократно применяется ненулевая левая трансляция, поэтому аддитивный цикл продолжается через P0.",
  "Zero-prefix theorem · L5 witness": "Теорема о нулевом префиксе · пример L5",
  "The ordinary PLUS sum is P4, but the first zero prefix is captured by the left-associated STAR word.":
    "Обычная PLUS-сумма равна P4, но левоассоциированное STAR-слово фиксирует первый нулевой префикс.",
  "STAR REDUCT: STABILITY AND CONGRUENCES": "STAR-РЕДУКТ: УСТОЙЧИВОСТЬ И КОНГРУЭНЦИИ",
  "One-sided closure is asymmetric; quotient structure is rigid.":
    "Односторонняя замкнутость асимметрична, а фактор-структура жёстка.",
  "These are statements about the STAR reduct S_n. They use standard finite-algebra terminology and do not import ring ideals or ring multiplication.":
    "Это утверждения о STAR-редукте S_n. Они используют стандартную терминологию конечных алгебр и не переносят сюда идеалы или умножение колец.",
  "Right-stable subsets · n≥2": "Правоустойчивые подмножества · n≥2",
  "The proper nonempty example is {P0}; it is closed when elements of the subset occupy the left operand.":
    "Собственный непустой пример — {P0}; он замкнут, когда элементы подмножества занимают место левого операнда.",
  "Left-stable and two-sided · n≥2": "Левоустойчивые и двусторонне устойчивые · n≥2",
  "The subset {P0} fails because P1 ★ P0 = P1. There is no proper nonempty left-stable subset.":
    "Подмножество {P0} не подходит, поскольку P1 ★ P0 = P1. Собственных непустых левоустойчивых подмножеств нет.",
  "Congruences · n≥2": "Конгруэнции · n≥2",
  "If P0 is identified with one nonzero element, compatibility forces every element into one class. If P0 stays alone, two distinct nonzero elements cannot be identified.":
    "Если P0 отождествить с одним ненулевым элементом, совместимость вынуждает объединить все элементы в один класс. Если P0 остаётся отдельным, два различных ненулевых элемента отождествить нельзя.",
  "The L1 exception": "Исключение L1",
  "On a one-element carrier the identity and universal congruences coincide, and every subset classification degenerates accordingly.":
    "На одноэлементном носителе тождественная и универсальная конгруэнции совпадают; классификации подмножеств соответственно вырождаются.",
  "Canonical nonzero embedding": "Каноническое ненулевое вложение",
  "canonical nontrivial scaled embeddings": "канонические нетривиальные масштабированные вложения",
  "Same-index candidate injection": "Кандидатная инъекция с сохранением индексов",
  "Zero homomorphism exists between every pair of levels": "Нулевой гомоморфизм существует между любой парой уровней",
  "Therefore A3→A5 has a homomorphism, but no nonzero homomorphism and no embedding. For n≥2, a nonzero homomorphism A_n→A_m exists exactly when n divides m; every such map is injective. At n=1 the unique zero map is itself an embedding.":
    "Следовательно, гомоморфизм A3→A5 существует, но ненулевого гомоморфизма и вложения нет. При n≥2 ненулевой гомоморфизм A_n→A_m существует тогда и только тогда, когда n делит m; всякое такое отображение инъективно. При n=1 единственное нулевое отображение само является вложением.",
  "A homomorphism is a mathematical preservation condition; an embedding is an injective homomorphism; a candidate injection is only a set map until preservation is proved. LevelAlignmentReceipt separately records whether an operational transfer is authorized.":
    "Гомоморфизм задаётся математическим условием сохранения; вложение — это инъективный гомоморфизм; кандидатная инъекция остаётся лишь отображением множеств, пока сохранение не доказано. LevelAlignmentReceipt отдельно фиксирует разрешение операционного переноса.",
  "Two indexed families": "Два индексированных семейства",
  "Symmetry vocabulary": "Терминология симметрий",
  "Orbit and stabilizer lab": "Лаборатория орбит и стабилизаторов",
  "L1–L7 symmetry ledger": "Реестр симметрий L1–L7",
  "Affine and STAR boundary": "Граница аффинного слоя и STAR",
  "Morphism comparison": "Сравнение морфизмов",
  "Interpretation boundaries": "Границы интерпретации",
  "ACADEMIC SYMMETRY CHAPTER": "АКАДЕМИЧЕСКАЯ ГЛАВА О СИММЕТРИЯХ",
  "Symmetries of the PLUS and STAR families.": "Симметрии семейств PLUS и STAR.",
  "This chapter distinguishes group automorphisms, affine torsor symmetries, STAR automorphisms, orbits, stabilizers, and cross-level homomorphisms. Similar formulas are not treated as the same structure.":
    "Эта глава различает групповые автоморфизмы, аффинные симметрии торсора, STAR-автоморфизмы, орбиты, стабилизаторы и межуровневые гомоморфизмы. Сходные формулы не отождествляются как одна структура.",
  "FIBREWISE, NOT GLOBAL": "ПО СЛОЯМ, НЕ ГЛОБАЛЬНО",
  "Symmetry chapter navigation": "Навигация по главе о симметриях",
  "OBJECT TYPES BEFORE SYMMETRIES": "ТИПЫ ОБЪЕКТОВ ПЕРЕД СИММЕТРИЯМИ",
  "The same carrier supports different symmetry categories.": "Один носитель поддерживает разные категории симметрий.",
  "The project calls L1–L7 two towers. Academically they are indexed families until bonding maps are declared; divisibility supplies only some nonzero embeddings.":
    "Проект называет L1–L7 двумя башнями. В академическом смысле это индексированные семейства до задания связующих отображений; отношение делимости даёт лишь некоторые ненулевые вложения.",
  Object: "Объект",
  "Preserved data": "Сохраняемые данные",
  Automorphisms: "Автоморфизмы",
  "Additional symmetry layer": "Дополнительный слой симметрии",
  "cyclic addition and P0": "циклическое сложение и P0",
  "STAR and the named point P0": "STAR и выделенная точка P0",
  "both operations and P0": "обе операции и P0",
  "No affine STAR layer": "Аффинного STAR-слоя нет",
  "Same unit maps; stronger preservation contract": "Те же unit-отображения; более сильное условие сохранения",
  "STANDARD GROUP-ACTION VOCABULARY": "СТАНДАРТНАЯ ТЕРМИНОЛОГИЯ ДЕЙСТВИЙ ГРУПП",
  "Automorphism, action, orbit, stabilizer, and Burnside are different notions.":
    "Автоморфизм, действие, орбита, стабилизатор и лемма Бёрнсайда — разные понятия.",
  Automorphism: "Автоморфизм",
  "A bijection from a structure to itself that preserves every operation and named constant in the declared signature.":
    "Биекция структуры на себя, сохраняющая все операции и именованные константы объявленной сигнатуры.",
  "Group action": "Действие группы",
  "A rule assigning each group element a permutation, with the identity acting trivially and products acting by composition.":
    "Правило, сопоставляющее каждому элементу группы перестановку: единица действует тождественно, а произведению соответствует композиция.",
  Orbit: "Орбита",
  "All points reachable from one point under the whole acting group. An orbit is a subset, not a new state or a probability class.":
    "Все точки, получаемые из одной точки действием всей группы. Орбита — подмножество, а не новое состояние или вероятностный класс.",
  Stabilizer: "Стабилизатор",
  "The subgroup of transformations that leave one selected point fixed. Orbit–stabilizer relates local symmetry to orbit size.":
    "Подгруппа преобразований, оставляющих выбранную точку неподвижной. Теорема об орбите и стабилизаторе связывает локальную симметрию с размером орбиты.",
  "Burnside's lemma": "Лемма Бёрнсайда",
  "The number of orbits equals the average number of points fixed by a group element. Here it independently checks pair-orbit enumeration.":
    "Число орбит равно среднему числу точек, фиксируемых элементом группы. Здесь лемма независимо проверяет прямой перебор орбит пар.",
  "INTERACTIVE UNIT-ACTION LAB": "ИНТЕРАКТИВНАЯ ЛАБОРАТОРИЯ ДЕЙСТВИЯ ГРУППЫ ЕДИНИЦ",
  "Inspect cycles, orbits, stabilizers, and the Burnside ledger.":
    "Исследуйте циклы, орбиты, стабилизаторы и расчёт по лемме Бёрнсайда.",
  "Every result is recomputed from multiplication by units modulo n in this browser.":
    "Каждый результат пересчитывается в браузере посредством умножения на обратимые классы по модулю n.",
  "Symmetry explorer controls": "Управление исследователем симметрий",
  "Unit multiplier": "Обратимый множитель",
  "Source pole": "Полюс-источник",
  "Active pole": "Активный полюс",
  "Selected automorphism": "Выбранный автоморфизм",
  "Cycle notation lists every pole exactly once; one-cycles are fixed points.":
    "Цикловая запись перечисляет каждый полюс ровно один раз; одноэлементные циклы — неподвижные точки.",
  "Carrier orbit": "Орбита элемента носителя",
  "The orbit contains every image of the selected pole under all units, not only the selected unit.":
    "Орбита содержит все образы выбранного полюса при действии всех обратимых классов, а не только выбранного.",
  "Ordered-pair orbit": "Орбита упорядоченной пары",
  "The same multiplier acts diagonally on source and active; level and family remain fixed.":
    "Один и тот же множитель действует диагонально на источник и активный полюс; уровень и семейство фиксированы.",
  "Stabilizer and orbit–stabilizer": "Стабилизатор и теорема об орбите–стабилизаторе",
  "Group order equals orbit size times stabilizer order for this finite action.":
    "Для этого конечного действия порядок группы равен произведению размера орбиты и порядка стабилизатора.",
  "Burnside ledger for ordered pairs": "Расчёт Бёрнсайда для упорядоченных пар",
  "Pair orbits": "Орбиты пар",
  "Typed orbits at this level": "Типизированные орбиты на этом уровне",
  "L1–L7 SYMMETRY LEDGER": "РЕЕСТР СИММЕТРИЙ L1–L7",
  "Local groups first; aggregate sums second.": "Сначала локальные группы, затем агрегированные суммы.",
  "Pair orbits are computed inside each fixed level. Multiplying by four keeps the action-family tag fixed; no orbit crosses a level or family boundary.":
    "Орбиты пар вычисляются внутри каждого фиксированного уровня. Множитель четыре сохраняет метку семейства действий; ни одна орбита не пересекает границы уровня или семейства.",
  "Aggregate automorphism-map count": "Суммарное число отображений-автоморфизмов",
  "Eighteen is a sum over seven local groups, not the order of a global automorphism group.":
    "Восемнадцать — сумма по семи локальным группам, а не порядок глобальной группы автоморфизмов.",
  "Fibrewise typed-orbit count": "Послойное число типизированных орбит",
  "The four family tags stay separate. Direct traversal and Burnside's lemma must return the same total.":
    "Четыре метки семейств остаются раздельными. Прямой обход и лемма Бёрнсайда должны дать одинаковую сумму.",
  "Independent reconciliation": "Независимое согласование",
  "Equality is a consistency witness for the finite action; it does not authorize semantic merging.":
    "Равенство подтверждает согласованность конечного действия, но не разрешает семантическое объединение.",
  "POINTED AUTOMORPHISMS VS AFFINE TORSOR SYMMETRIES": "АВТОМОРФИЗМЫ С ВЫДЕЛЕННОЙ ТОЧКОЙ И АФФИННЫЕ СИММЕТРИИ ТОРСОРА",
  "Hol(C_n) belongs to the PLUS torsor, not to STAR automorphisms.":
    "Hol(C_n) относится к PLUS-торсору, а не к STAR-автоморфизмам.",
  "Pointed automorphism": "Автоморфизм с выделенной точкой",
  "It preserves PLUS, STAR, and P0 for every unit u.": "Он сохраняет PLUS, STAR и P0 для каждого u∈U(n).",
  "Affine torsor map": "Аффинное отображение торсора",
  "For b≠0 it does not fix P0, so it is not an automorphism of the pointed cyclic group.":
    "При b≠0 оно не фиксирует P0 и потому не является автоморфизмом циклической группы с выделенной точкой.",
  "Exact STAR failure": "Точный контрпример для STAR",
  "The inequality holds for every nonzero residue b, not merely in a generic case.":
    "Неравенство выполняется для каждого ненулевого класса b, а не только в общем случае.",
  "Inversion orbits, not physical mirrors": "Орбиты инверсии, а не физические зеркала",
  "These are orbits of the involution on differences; they do not encode time, causality, or spatial reflection.":
    "Это орбиты инволюции на разностях; они не кодируют время, причинность или пространственное отражение.",
  "Quadratic-residue nuance": "Уточнение о квадратичных вычетах",
  "The quadratic-residue subgroup preserves each block; the full unit group preserves only the unordered two-block partition and may swap its blocks.":
    "Подгруппа квадратичных вычетов сохраняет каждый блок; полная группа единиц сохраняет лишь неупорядоченное разбиение на два блока и может менять блоки местами.",
  "Characters and faithful phase labels": "Характеры и точные фазовые параметризации",
  "All s define characters of C_n; only unit s give faithful labels. In a phase model P0 maps to complex 1, not complex 0.":
    "Каждый s задаёт характер C_n; только обратимые s дают точные параметризации. В фазовой модели P0 переходит в комплексное число 1, а не в комплексный нуль.",
  "CROSS-LEVEL HOMOMORPHISMS": "МЕЖУРОВНЕВЫЕ ГОМOMОРФИЗМЫ",
  "PLUS and STAR have different homomorphism counts.": "PLUS и STAR имеют разные числа гомоморфизмов.",
  "Each cell shows PLUS homomorphisms / full-algebra homomorphisms. PLUS has gcd(n,m) maps. For n≥2, the full algebra has the zero map and φ(n) additional embeddings exactly when n divides m; at n=1 the zero map is the unique embedding.":
    "Каждая ячейка показывает число PLUS-гомоморфизмов / гомоморфизмов полной алгебры. Для PLUS их gcd(n,m). При n≥2 полная алгебра имеет нулевое отображение и ровно φ(n) дополнительных вложений, когда n делит m; при n=1 нулевое отображение является единственным вложением.",
  Homomorphism: "Гомоморфизм",
  "A map preserving the declared operations and constant. It need not be injective; the zero map is the decisive example.":
    "Отображение, сохраняющее объявленные операции и константу. Оно не обязано быть инъективным; решающий пример — нулевое отображение.",
  Embedding: "Вложение",
  "An injective homomorphism. For n≥2, a nonzero A_n→A_m homomorphism is automatically an embedding and exists exactly when n divides m; the L1 zero map is exceptionally injective.":
    "Инъективный гомоморфизм. При n≥2 ненулевой гомоморфизм A_n→A_m автоматически является вложением и существует тогда и только тогда, когда n делит m; нулевое отображение из L1 является исключительным инъективным случаем.",
  "Operational transfer": "Операционный перенос",
  "A runtime use that may require provenance, alignment, and loss checks beyond algebraic preservation. A homomorphism alone is not an authorization receipt.":
    "Применение во время исполнения, которому помимо алгебраического сохранения могут требоваться проверки происхождения, выравнивания и потерь. Один гомоморфизм не является разрешающим протоколом.",
  "INTERPRETATION FIREWALL": "ГРАНИЦА ИНТЕРПРЕТАЦИИ",
  "Finite algebra does not imply physical or field-theoretic symmetry.":
    "Конечная алгебра не влечёт физическую симметрию или симметрию теории полей.",
  "Established here": "Установлено здесь",
  "Finite cyclic groups, pointed magmas, automorphism groups, and explicit group actions.":
    "Конечные циклические группы, магмы с выделенным элементом, группы автоморфизмов и явно заданные действия групп.",
  "Exact local orbit, stabilizer, Burnside, congruence, and homomorphism calculations for L1–L7.":
    "Точные локальные вычисления орбит, стабилизаторов, леммы Бёрнсайда, конгруэнций и гомоморфизмов для L1–L7.",
  "PLUS affine symmetries and their failure to preserve STAR.":
    "Аффинные симметрии PLUS и контрпример к сохранению ими STAR.",
  "Not implied": "Не следует из этого",
  "A root-of-unity phase index is not automatically a Galois group of a field extension.":
    "Индекс корня из единицы не является автоматически группой Галуа расширения полей.",
  "CRT decomposes the PLUS reduct; STAR's global zero test is not coordinatewise under that decomposition.":
    "Китайская теорема об остатках раскладывает PLUS-редукт; глобальная проверка нуля в STAR не становится покоординатной.",
  "Orbit equivalence does not merge provenance, semantics, authority, or real-world verdicts.":
    "Эквивалентность по орбитам не объединяет происхождение, семантику, полномочия или вердикты о реальном мире.",
  "Return to the formal kernel chapter": "Вернуться к главе о формальном ядре",
  level: "уровень",
  "carrier orbits": "орбиты носителя",
  "pair orbits": "орбиты пар",
  "typed orbits": "типизированные орбиты",
  "source / target": "источник / цель",
  embeddings: "вложений",
};
