import type { TranslationDictionary } from "../translations";

export const cayleyPageRu: TranslationDictionary = {
  "A Cayley table is the whole of a finite operation written out: one row and one column per element, and in every cell the element the operation returns. There is nothing hidden in it, because there is nowhere for anything to hide — a table with n rows has exactly n² cells and every one of them is filled in. GALO declares two such tables at each of seven levels, freezes them, and derives everything else from them. This page prints all fourteen, traces a worked calculation through each one, and then answers the question a reader is entitled to ask: where does anything rich come from, if the pieces are this small?":
    "Таблица Кэли — это конечная операция, выписанная целиком: по строке и по столбцу на каждый элемент, а в каждой ячейке — элемент, который операция возвращает. В ней ничего не спрятано, потому что прятать негде: у таблицы с n строками ровно n² ячеек, и заполнены все. GALO объявляет по две такие таблицы на каждом из семи уровней, замораживает их и выводит из них всё остальное. Эта страница печатает все четырнадцать, проводит по каждой разобранное вычисление и затем отвечает на вопрос, который читатель вправе задать: откуда берётся хоть что-то богатое, если детали настолько малы?",
  "All fourteen printed in full, each with a lookup traced line by line":
    "Все четырнадцать целиком, и в каждой — поиск, разобранный по строкам",
  "All fourteen printed in full, with a worked lookup through each.":
    "Все четырнадцать целиком, и по каждой — разобранное вычисление.",
  "All fourteen tables printed in full, with a worked lookup through each one":
    "Все четырнадцать таблиц целиком, и по каждой — разобранное вычисление",
  "All seven PLUS and all seven STAR tables printed in full, each with a worked lookup traced line by line, and six checkable reasons why tables this small generate rich logic rather than arithmetic.":
    "Все семь таблиц PLUS и все семь таблиц STAR, напечатанные целиком, с построчно разобранным вычислением для каждой и шестью проверяемыми причинами, почему такие маленькие таблицы дают богатую логику, а не арифметику.",
  Answer: "Ответ",
  "Cayley tables navigation": "Навигация по таблицам Кэли",
  "Check it yourself": "Проверьте сами",
  "Compare row P0 of any STAR table with row P0 of the PLUS table at the same level. One is flat and the other is a permutation, and that single row is where almost all of the difference between the two towers lives.":
    "Сравните строку P0 любой таблицы STAR со строкой P0 таблицы PLUS того же уровня. Одна плоская, другая — перестановка, и в этой единственной строке живёт почти вся разница между двумя башнями.",
  "Definitions, propositions, and the counts they generate.":
    "Определения, утверждения и счета, которые из них следуют.",
  "Even size, so the carrier splits cleanly in half and a step of two lands you exactly opposite. That halving is what makes the level-2 map into this one possible.":
    "Чётный размер: носитель делится ровно пополам, и шаг на два приводит точно в противоположную точку. Именно это деление пополам делает возможным отображение второго уровня в этот.",
  "Every cell of every table holds a member of the same carrier the operands came from. That is closure, and it is what makes a chain of steps finite in principle: a run can compose forever and never produce a value that has to be interpreted, approximated or rounded back in. There is no state outside the table for anything to fall into.":
    "Каждая ячейка каждой таблицы содержит элемент того же носителя, откуда пришли операнды. Это и есть замкнутость, и именно она делает цепочку шагов конечной в принципе: прогон может составлять сколько угодно и никогда не получит значения, которое пришлось бы истолковывать, аппроксимировать или загонять обратно. Вне таблицы нет состояния, куда что-либо могло бы провалиться.",
  "Every one of these is addition modulo the size of its own carrier. There is no branch and nothing to decide: the trace beside each table is three lines long at every level, and the only thing that changes from one to the next is where the wrap happens. Read them for the shape — each row is the row above it shifted by one, which is what a cyclic group looks like when you write it out in full.":
    "Каждая из них — сложение по модулю размера своего носителя. Здесь нет ветвления и нечего решать: разбор рядом с каждой таблицей на любом уровне занимает три строки, и от одной к другой меняется только место, где происходит перенос. Читайте их ради формы: каждая строка — это строка выше, сдвинутая на единицу, и именно так выглядит циклическая группа, выписанная целиком.",
  "Every step the engine can take is one cell in one of these tables.":
    "Каждый шаг, который может сделать движок, — это одна ячейка в одной из этих таблиц.",
  "Find the column": "Найдите столбец",
  "Find the row": "Найдите строку",
  "Fix one operand of PLUS and you get a permutation of the carrier — every pole lands somewhere different, so the step can always be undone and nothing has been decided. Fix one operand of STAR and poles collapse together. That collapse is the informative part: a step that can merge two possibilities is a step that can rule one out. A system with only the first law could never narrow anything; a system with only the second could never be reversed.":
    "Зафиксируйте один операнд PLUS — и получите перестановку носителя: каждый полюс попадает в своё место, поэтому шаг всегда можно отменить и ничего не решено. Зафиксируйте один операнд STAR — и полюсы схлопнутся вместе. Именно это схлопывание и информативно: шаг, способный слить две возможности, — это шаг, способный одну исключить. Система с одним лишь первым законом никогда ничего не сузила бы; система с одним лишь вторым не могла бы быть обращена вспять.",
  "Four stepping rows against one absorbing row. The rank of a fixed-operand map drops by exactly one, and the poles that collapse together become indistinguishable from that step on.":
    "Четыре шагающие строки против одной поглощающей. Ранг отображения с фиксированным операндом падает ровно на единицу, а схлопнувшиеся вместе полюсы с этого шага неразличимы.",
  "Fourteen tables, two operand orientations and seven levels give 560 typed coordinates — the whole address space a prediction is allowed to route through. The tables are small on purpose. What they buy is that the space they generate is finite, declared in advance, and checkable by a person with a printout.":
    "Четырнадцать таблиц, две ориентации операндов и семь уровней дают 560 типизированных координат — всё адресное пространство, по которому прогнозу дозволено проходить. Таблицы малы намеренно. Взамен получается, что порождаемое ими пространство конечно, объявлено заранее и проверяемо человеком с распечаткой.",
  "HOW TO READ ONE": "КАК ЧИТАТЬ ОДНУ ТАБЛИЦУ",
  "How fourteen tables become 560 typed coordinates":
    "Как четырнадцать таблиц становятся 560 типизированными координатами",
  "How to read one": "Как читать одну таблицу",
  "Level 3 has 3 poles and level 5 has 5; no scaled map carries the first into the second, and the site publishes that as a boundary rather than as an approximation.":
    "На третьем уровне 3 полюса, на пятом — 5; никакое масштабированное отображение не переносит первый во второй, и сайт публикует это как границу, а не как приближение.",
  "Nothing composed ever leaves the set": "Ничто составленное никогда не покидает множества",
  "Nothing forces a table to be addition. Every one of the n² cells could independently hold any of the n poles, so at level 7 there are 7⁴⁹ possible tables — past 10⁴¹. GALO declares two per level and freezes them before anything runs. The richness is not in the tables being large; it is in the choice being made once, in public, and never adjusted afterwards to fit a result.":
    "Ничто не обязывает таблицу быть сложением. Каждая из n² ячеек могла бы независимо содержать любой из n полюсов, так что на уровне 7 возможных таблиц 7⁴⁹ — больше 10⁴¹. GALO объявляет по две на уровень и замораживает их до того, как что-либо запустится. Богатство не в том, что таблицы велики; оно в том, что выбор сделан один раз, публично, и потом никогда не подгонялся под результат.",
  "One law never loses information; the other loses it on purpose":
    "Один закон никогда не теряет информацию; другой теряет её намеренно",
  "One pole can end a line of reasoning outright": "Один полюс может разом закрыть линию рассуждения",
  "One pole, one cell, one possible answer. Nothing can be decided here, which is why this level carries control rather than content.":
    "Один полюс, одна ячейка, один возможный ответ. Решить здесь нечего — поэтому этот уровень несёт управление, а не содержание.",
  "Outside the absorbing row STAR agrees with PLUS, which is why the two tables differ in exactly one row and nowhere else.":
    "Вне поглощающей строки STAR совпадает с PLUS — потому две таблицы и различаются ровно в одной строке и больше нигде.",
  "P0 absorbs from the left under STAR: whatever the column holds, the answer is P0 and the column is never consulted. In an algebra that is one row of a table. In a run it is a terminal — a step that closes a branch rather than continuing it, in a way that is decided by the declared law rather than by a heuristic that stopped early.":
    "Под STAR P0 поглощает слева: что бы ни стояло в столбце, ответ — P0, и столбец не читается. В алгебре это одна строка таблицы. В прогоне это терминал — шаг, закрывающий ветвь, а не продолжающий её, и закрывающий по объявленному закону, а не по эвристике, которая остановилась пораньше.",
  "P0 absorbs from the left. Whatever the column holds, the answer is P0, and the column was never consulted — which is how a single step can close a line of reasoning rather than continue it.":
    "P0 поглощает слева. Что бы ни стояло в столбце, ответ — P0, и столбец даже не читался: вот так один шаг может закрыть линию рассуждения, а не продолжить её.",
  "PLUS at this level is addition modulo the size of the carrier.":
    "PLUS на этом уровне — сложение по модулю размера носителя.",
  "PLUS is associative: bracket three operands either way and the result is the same, so the brackets are decoration. STAR is not. Under STAR, (a ★ b) ★ c and a ★ (b ★ c) can land on different poles, which means a list of operands does not name a result — only a tree does. That is why the syntax tree is carried in the record rather than reconstructed, and why a stranger can rebuild the arithmetic exactly.":
    "PLUS ассоциативен: расставьте скобки в трёх операндах любым способом — результат тот же, значит скобки декоративны. STAR — нет. Под STAR (a ★ b) ★ c и a ★ (b ★ c) могут попасть на разные полюсы, а значит список операндов не называет результата — его называет только дерево. Поэтому синтаксическое дерево несётся в записи, а не восстанавливается, и поэтому посторонний может воспроизвести арифметику точно.",
  "Pick three poles at level 6 and evaluate both bracketings against the tables above. Where the left bracketing passes through P0 and the right one does not, the two answers differ, and the difference is visible in two lookups.":
    "Возьмите три полюса на уровне 6 и вычислите обе расстановки скобок по таблицам выше. Там, где левая расстановка проходит через P0, а правая — нет, ответы различаются, и различие видно за два поиска по таблице.",
  "Prime again, and the largest declared. Every non-zero step reaches everything, and nothing between the poles is left unreachable.":
    "Снова простой — и самый большой из объявленных. Любой ненулевой шаг достигает всего, и между полюсами не остаётся ничего недостижимого.",
  "Prime size, so every non-zero pole generates the whole carrier by repetition. There is no proper sub-cycle to get stuck in.":
    "Простой размер: любой ненулевой полюс повторением порождает весь носитель. Здесь нет собственного подцикла, в котором можно застрять.",
  "Read any row of any table above and check that every entry is one of the poles named on its own axis. That is the whole of the property, and it holds in all fourteen.":
    "Возьмите любую строку любой таблицы выше и убедитесь, что каждая запись — один из полюсов, названных на её же оси. В этом и состоит всё свойство, и оно выполняется во всех четырнадцати.",
  "Read the cell": "Прочитайте ячейку",
  "Row {left}, column {right}.": "Строка {left}, столбец {right}.",
  "Row, column, cell. There is no third step.": "Строка, столбец, ячейка. Третьего шага нет.",
  "STAR asks this before it computes anything.": "STAR задаёт этот вопрос прежде, чем что-либо вычислять.",
  "Seven PLUS tables, and one rule between them.": "Семь таблиц PLUS и одно правило на все.",
  "Seven STAR tables, and one row that changes everything.": "Семь таблиц STAR и одна строка, которая меняет всё.",
  "Six poles, one absorbing row, and both sub-cycles from the smaller levels still visible in the rest of the table.":
    "Шесть полюсов, одна поглощающая строка — и оба подцикла с меньших уровней по-прежнему видны в остальной части таблицы.",
  "Small tables, chosen and frozen, do more work than large ones left open.":
    "Маленькие таблицы, выбранные и замороженные, работают больше, чем большие, оставленные открытыми.",
  "THE FIRST TOWER": "ПЕРВАЯ БАШНЯ",
  "THE FOURTEEN TABLES": "ЧЕТЫРНАДЦАТЬ ТАБЛИЦ",
  "THE SECOND TOWER": "ВТОРАЯ БАШНЯ",
  "Tables that could have been declared at this level: {count}. Declared and frozen: 2.":
    "Таблиц, которые могли быть объявлены на этом уровне: {count}. Объявлено и заморожено: 2.",
  "Take any row of a PLUS table and confirm every entry appears exactly once. Then take row P0 of the STAR table beside it and confirm every entry is the same. Two rows, two completely different behaviours, on the same carrier.":
    "Возьмите любую строку таблицы PLUS и убедитесь, что каждая запись встречается ровно один раз. Затем возьмите строку P0 соседней таблицы STAR и убедитесь, что все записи одинаковы. Две строки, два совершенно разных поведения — на одном и том же носителе.",
  "Take the left operand down the side and the right operand along the top; the cell where they meet is the result. That is the entire lookup, and it is why a step of GALO can be checked by a person with a printout and no software. The traces below each table do exactly that, one line at a time, so a reader who disagrees with a number can point at the line where the disagreement starts.":
    "Левый операнд ищите сбоку, правый — сверху; ячейка на их пересечении и есть результат. Это весь поиск целиком — и именно поэтому шаг GALO может проверить человек с распечаткой и без всякой программы. Разборы под каждой таблицей делают ровно это, по строке за раз, так что читатель, не согласный с числом, может указать строку, с которой начинается разногласие.",
  "The Fourteen Cayley Tables — Every Step GALO Can Take":
    "Четырнадцать таблиц Кэли — каждый шаг, который может сделать GALO",
  "The absorbing row is the only row, so at this level STAR and PLUS are the same one-cell table. The difference between the laws needs at least two poles to exist.":
    "Поглощающая строка здесь единственная, поэтому на этом уровне STAR и PLUS — одна и та же таблица из одной ячейки. Чтобы различие между законами существовало, нужно минимум два полюса.",
  "The complete {operation} table at level {level}": "Полная таблица {operation} на уровне {level}",
  "The count of possible tables per level is printed beside each one. Compare it to the two that were declared, and note that the comparison is the argument: a system that could pick its table after seeing the data would have no claim to make.":
    "Число возможных таблиц на уровне напечатано рядом с каждой. Сравните его с двумя объявленными — и заметьте, что сравнение и есть довод: система, способная выбрать таблицу после того, как увидела данные, не имела бы права ни на какое утверждение.",
  "The first level where the wrap is visible in more than one place. Every row is the row above it shifted by one, which is what a cyclic group looks like written out.":
    "Первый уровень, где заворачивание видно не в одном месте. Каждая строка — это строка выше, сдвинутая на единицу, и именно так выглядит циклическая группа, выписанная целиком.",
  "The first table where the two laws part company: row P0 is flattened to P0 while row P1 still steps. One row lost, one row kept.":
    "Первая таблица, где два закона расходятся: строка P0 сплющена в P0, а строка P1 всё ещё шагает. Одна строка потеряна, одна сохранена.",
  "The fourteen tables these renamings act on": "Четырнадцать таблиц, на которые действуют эти переобозначения",
  "The largest declared table, and still only one row differs from PLUS. Almost all of the richness comes from that single row being there at all.":
    "Самая большая из объявленных таблиц — и всё равно от PLUS её отличает одна строка. Почти всё богатство берётся из того, что эта единственная строка вообще есть.",
  "The left operand names the row. Under the site's naming this is the pole the run is standing on, and under STAR it is the one that decides whether the rest of the lookup happens at all.":
    "Строку называет левый операнд. В принятых на сайте обозначениях это полюс, на котором стоит прогон, а под STAR — тот, который решает, произойдёт ли остальная часть поиска вообще.",
  "The levels are not seven copies of one idea. A map from one level into another has to send P0 to P0 and commute with both laws, and that is only possible when the sizes divide: level 2 embeds into 4 and 6, level 3 into 6, and level 3 into 5 not at all. So the tower has a shape, some pairs are joined and others are provably not, and a claim that transports across a join that does not exist fails rather than degrades.":
    "Уровни — не семь копий одной идеи. Отображение из одного уровня в другой обязано переводить P0 в P0 и коммутировать с обоими законами, а это возможно только когда размеры делятся: второй уровень вкладывается в четвёртый и шестой, третий — в шестой, а третий в пятый — никак. Значит, у башни есть форма, какие-то пары соединены, а какие-то доказуемо нет, и утверждение, переносящееся через несуществующее соединение, падает, а не деградирует.",
  "The order of application changes the answer, so a program is a tree":
    "Порядок применения меняет ответ, поэтому программа — это дерево",
  "The reasonable first reaction to these tables is that they are too small to matter. The size is not what does the work. Six properties are, and each one can be checked against the tables printed above rather than taken on trust.":
    "Разумная первая реакция на эти таблицы — что они слишком малы, чтобы что-то значить. Работу делает не размер. Её делают шесть свойств, и каждое можно проверить по напечатанным выше таблицам, а не принимать на веру.",
  "The richest of the seven for structure: six splits by two and by three, so this level contains copies of both smaller cycles at once.":
    "Самый богатый по структуре из семи: шесть делится и на два, и на три, поэтому этот уровень содержит копии обоих меньших циклов сразу.",
  "The right operand names the column. This is the pole supplied to the step — the one an admitted candidate brought with it.":
    "Столбец называет правый операнд. Это полюс, поданный шагу, — тот, который принёс с собой допущенный кандидат.",
  "The same wrap as before, on the same carrier.": "То же заворачивание, что и раньше, на том же носителе.",
  "The seven PLUS tables": "Семь таблиц PLUS",
  "The seven STAR tables": "Семь таблиц STAR",
  "The seven levels interlock, and the joins have real obstructions":
    "Семь уровней сцеплены, и у соединений есть настоящие препятствия",
  "The smallest table where a step can do something: P1 flips to P0 and back. This is a switch, and it is already enough to record a binary distinction.":
    "Наименьшая таблица, где шаг вообще что-то делает: P1 переключается в P0 и обратно. Это тумблер — и его уже достаточно, чтобы записать двоичное различие.",
  "The sum is already inside the carrier, so the wrap changes nothing here.":
    "Сумма и так внутри носителя, поэтому заворачивание здесь ничего не меняет.",
  "The sum ran past the last pole, so it wraps to the front. Nothing is lost in wrapping: the step can be undone by subtracting.":
    "Сумма ушла за последний полюс, поэтому она заворачивается в начало. При заворачивании ничего не теряется: шаг можно отменить вычитанием.",
  "The symmetries these tables carry": "Симметрии, которые несут эти таблицы",
  "The value in the cell is the result, and it is a member of the same set the operands came from. Nothing is rounded, nothing is sampled, and there is no second-best answer to fall back on.":
    "Значение в ячейке — это результат, и он принадлежит тому же множеству, откуда пришли операнды. Ничего не округляется, ничего не семплируется, и нет второго по качеству ответа, к которому можно отступить.",
  "These agree with the tables above everywhere except the first row. Under STAR, P0 absorbs from the left: whatever the column holds, the answer is P0 and the column is never consulted. That single shaded row is where the second tower earns its keep — it is what lets a step end a line of reasoning, what makes a fixed operand collapse the carrier instead of relabelling it, and what makes the order of application matter. Each table carries two traces, because there are two rules to see.":
    "Они совпадают с таблицами выше везде, кроме первой строки. Под STAR полюс P0 поглощает слева: что бы ни стояло в столбце, ответ — P0, и столбец даже не читается. Именно эта затенённая строка оправдывает существование второй башни: она позволяет шагу закрыть линию рассуждения, заставляет фиксированный операнд схлопывать носитель, а не переобозначать его, и делает значимым порядок применения. У каждой таблицы два разбора — потому что правил здесь два.",
  "These tables are mathematics, not a result. They say exactly what the engine's steps are and nothing at all about whether the engine is useful to anybody.":
    "Эти таблицы — математика, а не результат. Они точно говорят, каковы шаги движка, и ровным счётом ничего — о том, полезен ли движок кому-либо.",
  "Three quarters of the table behaves like addition and one quarter of it does not. That asymmetry is what carries information: knowing the answer was P0 tells you something about the row.":
    "Три четверти таблицы ведут себя как сложение, а одна четверть — нет. Именно эта асимметрия и несёт информацию: знание, что ответ был P0, кое-что говорит о строке.",
  "Two rows step and one absorbs. From here on the table is not a group table at all — it has no two-sided identity and it cannot be undone.":
    "Две строки шагают, одна поглощает. Начиная отсюда, это уже вовсе не групповая таблица: в ней нет двустороннего нейтрального элемента и её нельзя обратить.",
  "Two tables were chosen out of an astronomical space, and then frozen":
    "Две таблицы выбраны из астрономического пространства — и затем заморожены",
  "WHY THIS IS RICH AND NOT JUST ARITHMETIC": "ПОЧЕМУ ЭТО БОГАТО, А НЕ ПРОСТО АРИФМЕТИКА",
  "What a run has to do before an answer may be published":
    "Что обязан сделать прогон, прежде чем ответ можно опубликовать",
  "What is printed on this page": "Что напечатано на этой странице",
  "Which rule this lookup takes": "Какое правило берёт этот поиск",
  "Why this is rich": "Почему это богато",
  "a step inside the range": "шаг внутри диапазона",
  "a step that wraps past the end": "шаг, заворачивающийся за конец",
  "laws, frozen before anything ran": "закона, замороженных до того, как что-либо запустилось",
  "levels, from one pole to seven": "уровней — от одного полюса до семи",
  "tables printed in full": "таблицы напечатаны целиком",
  "the row that ends the line": "строка, которая закрывает линию",
  "the row that steps on": "строка, которая шагает дальше",
};

export const cayleyPageZh: TranslationDictionary = {
  "A Cayley table is the whole of a finite operation written out: one row and one column per element, and in every cell the element the operation returns. There is nothing hidden in it, because there is nowhere for anything to hide — a table with n rows has exactly n² cells and every one of them is filled in. GALO declares two such tables at each of seven levels, freezes them, and derives everything else from them. This page prints all fourteen, traces a worked calculation through each one, and then answers the question a reader is entitled to ask: where does anything rich come from, if the pieces are this small?":
    "凯莱表就是把一个有限运算整个写出来：每个元素一行一列，每个格子里放着这个运算返回的那个元素。里面藏不住任何东西，因为根本没地方藏：一张 n 行的表恰好有 n² 个格子，而且格格填满。GALO 在七层的每一层上声明两张这样的表，把它们冻结，其余一切都从它们导出。本页把十四张全部印出来，为每一张走一遍详细演算，然后回答读者有权提出的那个问题：如果零件小成这样，丰富从哪儿来？",
  "All fourteen printed in full, each with a lookup traced line by line":
    "十四张全部完整印出，每一张都有一次逐行走完的查表",
  "All fourteen printed in full, with a worked lookup through each.":
    "十四张全部完整印出，每一张都配一次走完的查表演算。",
  "All fourteen tables printed in full, with a worked lookup through each one":
    "十四张表全部完整印出，每一张都配一次走完的查表演算",
  "All seven PLUS and all seven STAR tables printed in full, each with a worked lookup traced line by line, and six checkable reasons why tables this small generate rich logic rather than arithmetic.":
    "七张 PLUS 表和七张 STAR 表全部完整印出，每一张都配一次逐行走完的查表演算，外加六条可自行核对的理由，说明这么小的表为什么给出的是丰富的逻辑而不是算术。",
  Answer: "答案",
  "Cayley tables navigation": "凯莱表导航",
  "Check it yourself": "自己核对",
  "Compare row P0 of any STAR table with row P0 of the PLUS table at the same level. One is flat and the other is a permutation, and that single row is where almost all of the difference between the two towers lives.":
    "把任意一张 STAR 表的 P0 行，跟同一层 PLUS 表的 P0 行比一比。一个是平的，一个是置换；两座塔之间几乎全部的差别，就住在这唯一一行里。",
  "Definitions, propositions, and the counts they generate.": "定义、命题，以及由它们生成的那些计数。",
  "Even size, so the carrier splits cleanly in half and a step of two lands you exactly opposite. That halving is what makes the level-2 map into this one possible.":
    "偶数大小，所以载体正好一分为二，走两步恰好落到正对面。正是这个对半分，让第 2 层到这一层的映射成为可能。",
  "Every cell of every table holds a member of the same carrier the operands came from. That is closure, and it is what makes a chain of steps finite in principle: a run can compose forever and never produce a value that has to be interpreted, approximated or rounded back in. There is no state outside the table for anything to fall into.":
    "每一张表的每一个格子里，装的都是操作数所来自的那同一个载体的成员。这就是封闭性，也正是它让一串步骤在原理上是有限的：一次运行可以一直组合下去，永远不会产出一个需要被解释、被近似或者被硬塞回去的值。表之外没有任何状态可供跌落。",
  "Every one of these is addition modulo the size of its own carrier. There is no branch and nothing to decide: the trace beside each table is three lines long at every level, and the only thing that changes from one to the next is where the wrap happens. Read them for the shape — each row is the row above it shifted by one, which is what a cyclic group looks like when you write it out in full.":
    "这里每一张都是按它自己载体大小取模的加法。没有分支，也没有什么要决定的：每张表旁边的演算在任何一层都是三行，从一张到下一张变的只是「绕回去」发生在哪儿。读它们要看形状——每一行都是上面那行整体挪一位，而这就是一个循环群完整写出来的样子。",
  "Every step the engine can take is one cell in one of these tables.": "引擎能走的每一步，都是这些表里的某一个格子。",
  "Find the column": "找到列",
  "Find the row": "找到行",
  "Fix one operand of PLUS and you get a permutation of the carrier — every pole lands somewhere different, so the step can always be undone and nothing has been decided. Fix one operand of STAR and poles collapse together. That collapse is the informative part: a step that can merge two possibilities is a step that can rule one out. A system with only the first law could never narrow anything; a system with only the second could never be reversed.":
    "把 PLUS 的一个操作数固定住，你得到的是载体上的一个置换：每个极都落到各自的位置，所以这一步永远可以撤回，什么也没被决定。把 STAR 的一个操作数固定住，就会有极被并到一起。正是这次坍缩带来信息量：一个能把两种可能并成一个的步骤，就是一个能排除掉一种可能的步骤。只有前一条法则的系统永远收窄不了任何东西；只有后一条的系统则无法被倒回去。",
  "Four stepping rows against one absorbing row. The rank of a fixed-operand map drops by exactly one, and the poles that collapse together become indistinguishable from that step on.":
    "四行在走，对上一行在吸收。固定一个操作数所得映射的秩恰好掉一，而被并到一起的那些极，从这一步起就再也分不开了。",
  "Fourteen tables, two operand orientations and seven levels give 560 typed coordinates — the whole address space a prediction is allowed to route through. The tables are small on purpose. What they buy is that the space they generate is finite, declared in advance, and checkable by a person with a printout.":
    "十四张表、两种操作数朝向、七层，合起来给出 560 个类型化坐标——预测被允许穿行的全部地址空间。表小是有意为之。换来的是：它们生成的那个空间是有限的、事先声明好的，而且一个手里有打印件的人就能核对。",
  "HOW TO READ ONE": "怎么读一张表",
  "How fourteen tables become 560 typed coordinates": "十四张表怎样变成 560 个类型化坐标",
  "How to read one": "怎么读一张表",
  "Level 3 has 3 poles and level 5 has 5; no scaled map carries the first into the second, and the site publishes that as a boundary rather than as an approximation.":
    "第 3 层有 3 个极，第 5 层有 5 个；没有任何缩放映射能把前者搬到后者，而本站把这一点作为一条边界公布，而不是当成一个近似。",
  "Nothing composed ever leaves the set": "组合出来的东西永远走不出这个集合",
  "Nothing forces a table to be addition. Every one of the n² cells could independently hold any of the n poles, so at level 7 there are 7⁴⁹ possible tables — past 10⁴¹. GALO declares two per level and freezes them before anything runs. The richness is not in the tables being large; it is in the choice being made once, in public, and never adjusted afterwards to fit a result.":
    "没有什么强迫一张表必须是加法。n² 个格子中的每一个都可以独立地放 n 个极中的任何一个，所以在第 7 层，可能的表有 7⁴⁹ 张——超过 10⁴¹。GALO 每层声明两张，并且在任何东西跑起来之前就把它们冻住。丰富不在于表大；而在于这个选择只做过一次、是公开做的，而且事后从未为了迁就结果被调整过。",
  "One law never loses information; the other loses it on purpose": "一条法则从不丢失信息；另一条是故意丢",
  "One pole can end a line of reasoning outright": "一个极可以直接结束一条推理线",
  "One pole, one cell, one possible answer. Nothing can be decided here, which is why this level carries control rather than content.":
    "一个极、一个格子、一个可能的答案。这里没有什么可决定的——所以这一层承载的是控制，不是内容。",
  "Outside the absorbing row STAR agrees with PLUS, which is why the two tables differ in exactly one row and nowhere else.":
    "在吸收行之外，STAR 与 PLUS 一致——这正是为什么两张表恰好只在一行上不同，别处都一样。",
  "P0 absorbs from the left under STAR: whatever the column holds, the answer is P0 and the column is never consulted. In an algebra that is one row of a table. In a run it is a terminal — a step that closes a branch rather than continuing it, in a way that is decided by the declared law rather than by a heuristic that stopped early.":
    "在 STAR 之下，P0 从左边吸收：无论那一列里是什么，答案都是 P0，而那一列根本不被读。在代数里，这是表的一行。在一次运行里，这是一个终点——一个把分支关掉而不是接下去的步骤，而且关掉它的是被声明的法则，不是某个提前收手的启发式。",
  "P0 absorbs from the left. Whatever the column holds, the answer is P0, and the column was never consulted — which is how a single step can close a line of reasoning rather than continue it.":
    "P0 从左边吸收。无论那一列里是什么，答案都是 P0，而那一列根本没被读过：一步就是这样结束一条推理线，而不是把它接下去的。",
  "PLUS at this level is addition modulo the size of the carrier.": "这一层上的 PLUS，就是按载体大小取模的加法。",
  "PLUS is associative: bracket three operands either way and the result is the same, so the brackets are decoration. STAR is not. Under STAR, (a ★ b) ★ c and a ★ (b ★ c) can land on different poles, which means a list of operands does not name a result — only a tree does. That is why the syntax tree is carried in the record rather than reconstructed, and why a stranger can rebuild the arithmetic exactly.":
    "PLUS 满足结合律：三个操作数怎么加括号结果都一样，所以括号是装饰。STAR 不是。在 STAR 之下，(a ★ b) ★ c 和 a ★ (b ★ c) 可能落到不同的极上，这意味着一串操作数并没有指定出一个结果——只有一棵树才能。所以语法树是被带进记录里的，不是被重建出来的；也所以，一个外人能把这套算术精确地复现出来。",
  "Pick three poles at level 6 and evaluate both bracketings against the tables above. Where the left bracketing passes through P0 and the right one does not, the two answers differ, and the difference is visible in two lookups.":
    "在第 6 层挑三个极，对着上面的表把两种加括号方式都算一遍。凡是左边那种经过 P0、右边那种没经过的地方，两个答案就不一样，而这个差别只需要查两次表就看得见。",
  "Prime again, and the largest declared. Every non-zero step reaches everything, and nothing between the poles is left unreachable.":
    "又是素数，而且是声明过的最大的一层。任何非零的一步都能触及一切，极与极之间没有到不了的地方。",
  "Prime size, so every non-zero pole generates the whole carrier by repetition. There is no proper sub-cycle to get stuck in.":
    "素数大小，所以任何非零的极靠重复就能生成整个载体。这里没有可以卡住的真子循环。",
  "Read any row of any table above and check that every entry is one of the poles named on its own axis. That is the whole of the property, and it holds in all fourteen.":
    "随便挑上面任何一张表的任何一行，核对每一项都是它自己那根轴上写着的极之一。整个性质就这些，而它在十四张里都成立。",
  "Read the cell": "读那个格子",
  "Row {left}, column {right}.": "第 {left} 行，第 {right} 列。",
  "Row, column, cell. There is no third step.": "行、列、格。没有第三步。",
  "STAR asks this before it computes anything.": "STAR 在算任何东西之前先问这个。",
  "Seven PLUS tables, and one rule between them.": "七张 PLUS 表，它们之间只有一条规则。",
  "Seven STAR tables, and one row that changes everything.": "七张 STAR 表，以及改变一切的那一行。",
  "Six poles, one absorbing row, and both sub-cycles from the smaller levels still visible in the rest of the table.":
    "六个极、一行吸收，而来自更小层的两个子循环，在表的其余部分里依然看得见。",
  "Small tables, chosen and frozen, do more work than large ones left open.":
    "小的表，一旦选定并冻结，比大而敞开的表干的活更多。",
  "THE FIRST TOWER": "第一座塔",
  "THE FOURTEEN TABLES": "十四张表",
  "THE SECOND TOWER": "第二座塔",
  "Tables that could have been declared at this level: {count}. Declared and frozen: 2.":
    "这一层上本可以声明的表：{count} 张。实际声明并冻结：2 张。",
  "Take any row of a PLUS table and confirm every entry appears exactly once. Then take row P0 of the STAR table beside it and confirm every entry is the same. Two rows, two completely different behaviours, on the same carrier.":
    "随便挑 PLUS 表的一行，确认每一项恰好出现一次。然后挑旁边那张 STAR 表的 P0 行，确认每一项都一样。两行，两种完全不同的行为，都在同一个载体上。",
  "Take the left operand down the side and the right operand along the top; the cell where they meet is the result. That is the entire lookup, and it is why a step of GALO can be checked by a person with a printout and no software. The traces below each table do exactly that, one line at a time, so a reader who disagrees with a number can point at the line where the disagreement starts.":
    "左操作数在侧边找，右操作数在顶上找；它们交叉处的那个格子就是结果。整个查表就这些——正因如此，GALO 的一步可以由一个手里只有打印件、没有任何软件的人来核对。每张表下面的演算做的正是这件事，一次一行；所以不同意某个数的读者，可以指出分歧是从哪一行开始的。",
  "The Fourteen Cayley Tables — Every Step GALO Can Take": "十四张凯莱表 — GALO 能走的每一步",
  "The absorbing row is the only row, so at this level STAR and PLUS are the same one-cell table. The difference between the laws needs at least two poles to exist.":
    "吸收行是这里唯一的一行，所以这一层上 STAR 和 PLUS 是同一张只有一个格子的表。两条法则之间的差别，至少要两个极才存在得起来。",
  "The complete {operation} table at level {level}": "第 {level} 层完整的 {operation} 表",
  "The count of possible tables per level is printed beside each one. Compare it to the two that were declared, and note that the comparison is the argument: a system that could pick its table after seeing the data would have no claim to make.":
    "每一层可能有多少张表，就印在每张表旁边。把它跟实际声明的那两张比一比，并且注意：这个比较本身就是论证——一个能在看过数据之后再挑表的系统，没有资格作任何主张。",
  "The first level where the wrap is visible in more than one place. Every row is the row above it shifted by one, which is what a cyclic group looks like written out.":
    "第一个能在不止一处看见绕回的层。每一行都是上面那行挪一位，而这就是一个循环群写出来的样子。",
  "The first table where the two laws part company: row P0 is flattened to P0 while row P1 still steps. One row lost, one row kept.":
    "两条法则第一次分道扬镳的表：P0 那一行被压平成 P0，而 P1 那一行仍然在走。丢了一行，留了一行。",
  "The fourteen tables these renamings act on": "这些重新贴标签所作用的那十四张表",
  "The largest declared table, and still only one row differs from PLUS. Almost all of the richness comes from that single row being there at all.":
    "声明过的最大的一张表，而与 PLUS 不同的仍然只有一行。几乎全部的丰富，都来自这唯一一行的存在本身。",
  "The left operand names the row. Under the site's naming this is the pole the run is standing on, and under STAR it is the one that decides whether the rest of the lookup happens at all.":
    "行由左操作数指定。按本站的叫法，这就是运行此刻所站的那个极；而在 STAR 之下，正是它决定接下来的查表还发不发生。",
  "The levels are not seven copies of one idea. A map from one level into another has to send P0 to P0 and commute with both laws, and that is only possible when the sizes divide: level 2 embeds into 4 and 6, level 3 into 6, and level 3 into 5 not at all. So the tower has a shape, some pairs are joined and others are provably not, and a claim that transports across a join that does not exist fails rather than degrades.":
    "这些层不是同一个想法的七个副本。从一层到另一层的映射必须把 P0 送到 P0，并且与两条法则都可交换；而这只有在大小整除时才可能：第 2 层嵌入第 4 层和第 6 层，第 3 层嵌入第 6 层，而第 3 层到第 5 层则完全不行。所以这座塔是有形状的，有些对是接上的，有些则可证明地接不上；而一个想跨过并不存在的接合处去搬运的主张，是直接失败，不是逐渐退化。",
  "The order of application changes the answer, so a program is a tree": "施加的顺序会改变答案，所以程序是一棵树",
  "The reasonable first reaction to these tables is that they are too small to matter. The size is not what does the work. Six properties are, and each one can be checked against the tables printed above rather than taken on trust.":
    "面对这些表，合理的第一反应是：它们小到无关紧要。干活的不是尺寸，是六条性质；而每一条都可以对着上面印出来的表自行核对，不必当作信条接受。",
  "The richest of the seven for structure: six splits by two and by three, so this level contains copies of both smaller cycles at once.":
    "七层里结构最丰富的一层：六既能被二整除也能被三整除，所以这一层同时装着两个更小循环的副本。",
  "The right operand names the column. This is the pole supplied to the step — the one an admitted candidate brought with it.":
    "列由右操作数指定。这是递给这一步的那个极——被允许进来的候选带来的那个。",
  "The same wrap as before, on the same carrier.": "跟前面一样的绕回，在同一个载体上。",
  "The seven PLUS tables": "七张 PLUS 表",
  "The seven STAR tables": "七张 STAR 表",
  "The seven levels interlock, and the joins have real obstructions": "七层是互相咬合的，而这些接合处有真实的障碍",
  "The smallest table where a step can do something: P1 flips to P0 and back. This is a switch, and it is already enough to record a binary distinction.":
    "最小的、走一步真能干点什么的表：P1 翻到 P0，再翻回来。这是一个开关——而它已经足够记录一个二元的区分。",
  "The sum is already inside the carrier, so the wrap changes nothing here.":
    "和本来就在载体里，所以这里绕不绕都一样。",
  "The sum ran past the last pole, so it wraps to the front. Nothing is lost in wrapping: the step can be undone by subtracting.":
    "和越过了最后一个极，于是绕回开头。绕回并不丢失什么：这一步可以靠减法撤回。",
  "The symmetries these tables carry": "这些表带着的那些对称性",
  "The value in the cell is the result, and it is a member of the same set the operands came from. Nothing is rounded, nothing is sampled, and there is no second-best answer to fall back on.":
    "格子里的值就是结果，而它属于操作数所来自的同一个集合。没有四舍五入，没有采样，也没有一个次好的答案可以退而求其次。",
  "These agree with the tables above everywhere except the first row. Under STAR, P0 absorbs from the left: whatever the column holds, the answer is P0 and the column is never consulted. That single shaded row is where the second tower earns its keep — it is what lets a step end a line of reasoning, what makes a fixed operand collapse the carrier instead of relabelling it, and what makes the order of application matter. Each table carries two traces, because there are two rules to see.":
    "它们与上面那些表处处一致，只有第一行不同。在 STAR 之下，P0 从左边吸收：无论那一列里是什么，答案都是 P0，而那一列根本没被读过。正是这一行加了底色的行，让第二座塔配得上自己的位置：它让一步能够结束一条推理线，让固定住的操作数把载体坍缩而不是重新贴标签，并且让施加的顺序变得要紧。每张表配两段演算——因为这里有两条规则要看。",
  "These tables are mathematics, not a result. They say exactly what the engine's steps are and nothing at all about whether the engine is useful to anybody.":
    "这些表是数学，不是结果。它们精确地说出引擎的那些步骤是什么，而对引擎对谁有没有用，一个字也没说。",
  "Three quarters of the table behaves like addition and one quarter of it does not. That asymmetry is what carries information: knowing the answer was P0 tells you something about the row.":
    "这张表有四分之三的行为像加法，四分之一不是。正是这份不对称在承载信息：知道答案是 P0，就等于知道了关于那一行的某件事。",
  "Two rows step and one absorbs. From here on the table is not a group table at all — it has no two-sided identity and it cannot be undone.":
    "两行在走，一行在吸收。从这里开始，这已经根本不是一张群表了：它没有双边单位元，也无法被撤回。",
  "Two tables were chosen out of an astronomical space, and then frozen":
    "两张表是从一个天文数字般大的空间里挑出来的，然后被冻结",
  "WHY THIS IS RICH AND NOT JUST ARITHMETIC": "为什么这是丰富的，而不只是算术",
  "What a run has to do before an answer may be published": "在一个答案可以被公开之前，一次运行必须做到什么",
  "What is printed on this page": "本页印了什么",
  "Which rule this lookup takes": "这次查表走的是哪条规则",
  "Why this is rich": "为什么这是丰富的",
  "a step inside the range": "范围之内的一步",
  "a step that wraps past the end": "绕过末尾的一步",
  "laws, frozen before anything ran": "条法则，在任何东西跑起来之前就冻结了",
  "levels, from one pole to seven": "层，从一个极到七个极",
  "tables printed in full": "张表完整印出",
  "the row that ends the line": "结束这条线的那一行",
  "the row that steps on": "继续往前走的那一行",
};

export const cayleyPageAr: TranslationDictionary = {
  "A Cayley table is the whole of a finite operation written out: one row and one column per element, and in every cell the element the operation returns. There is nothing hidden in it, because there is nowhere for anything to hide — a table with n rows has exactly n² cells and every one of them is filled in. GALO declares two such tables at each of seven levels, freezes them, and derives everything else from them. This page prints all fourteen, traces a worked calculation through each one, and then answers the question a reader is entitled to ask: where does anything rich come from, if the pieces are this small?":
    "جدولُ كايلي هو العمليّةُ المنتهية مكتوبةً بتمامها: صفٌّ وعمودٌ لكلِّ عنصر، وفي كلِّ خليةٍ العنصرُ الذي تُرجِعه العمليّة. لا شيءَ مخفيٌّ فيه لأنّه لا موضعَ للإخفاء: جدولٌ بـn صفًّا له n² خليةً بالضبط وكلُّها مملوءة. ويُعلِن GALO جدولين كهذين عند كلٍّ من سبعة مستويات، ويُجمّدهما، ويشتقُّ منهما كلَّ ما سواهما. تطبع هذه الصفحةُ الأربعةَ عشر جميعًا، وتقتفي في كلٍّ منها حسابًا مشغولًا، ثمّ تجيب عن السؤال الذي يحقُّ للقارئ طرحُه: من أين يأتي أيُّ غنًى إن كانت القِطَعُ بهذا الصِّغَر؟",
  "All fourteen printed in full, each with a lookup traced line by line":
    "الأربعةَ عشرَ مطبوعةً كاملةً، وفي كلٍّ منها بحثٌ مُقتفًى سطرًا سطرًا",
  "All fourteen printed in full, with a worked lookup through each.":
    "الأربعةَ عشرَ مطبوعةً كاملةً، ولكلٍّ منها عمليّةُ بحثٍ مشغولة.",
  "All fourteen tables printed in full, with a worked lookup through each one":
    "الجداولُ الأربعةَ عشر مطبوعةً كاملةً، ولكلٍّ منها عمليّةُ بحثٍ مشغولة",
  "All seven PLUS and all seven STAR tables printed in full, each with a worked lookup traced line by line, and six checkable reasons why tables this small generate rich logic rather than arithmetic.":
    "جداولُ PLUS السبعة وجداولُ STAR السبعة مطبوعةً كاملةً، مع عمليةِ بحثٍ مشغولةٍ سطرًا سطرًا لكلِّ جدول، وستّةُ أسبابٍ قابلةٍ للفحص تبيّن لماذا تولّد جداولُ بهذا الصِّغَر منطقًا غنيًّا لا حسابًا.",
  Answer: "الجواب",
  "Cayley tables navigation": "تنقُّلُ جداول كايلي",
  "Check it yourself": "افحصه بنفسك",
  "Compare row P0 of any STAR table with row P0 of the PLUS table at the same level. One is flat and the other is a permutation, and that single row is where almost all of the difference between the two towers lives.":
    "قارِن صفَّ P0 من أيِّ جدول STAR بصفِّ P0 من جدول PLUS عند المستوى نفسِه. أحدُهما مسطَّحٌ والآخرُ تبديل، وفي ذلك الصفِّ الواحد يعيش أكثرُ الفرق بين البرجين.",
  "Definitions, propositions, and the counts they generate.": "تعريفاتٌ وقضايا والأعدادُ التي تولّدها.",
  "Even size, so the carrier splits cleanly in half and a step of two lands you exactly opposite. That halving is what makes the level-2 map into this one possible.":
    "حجمٌ زوجيّ، فينقسم الحاملُ نصفين تمامًا، وخطوةٌ بمقدار اثنين تُنزِلك في المقابل تمامًا. وهذا التنصيفُ هو ما يجعل الاقترانَ من المستوى الثاني إلى هذا ممكنًا.",
  "Every cell of every table holds a member of the same carrier the operands came from. That is closure, and it is what makes a chain of steps finite in principle: a run can compose forever and never produce a value that has to be interpreted, approximated or rounded back in. There is no state outside the table for anything to fall into.":
    "كلُّ خليةٍ في كلِّ جدولٍ تحمل عضوًا من الحامل نفسِه الذي جاء منه المُعامِلان. هذا هو الانغلاق، وهو ما يجعل سلسلةَ الخطوات منتهيةً من حيث المبدأ: يستطيع التشغيلُ أن يُركِّب إلى ما لا نهاية دون أن يُنتِج قيمةً تحتاج تأويلًا أو تقريبًا أو ردًّا إلى الداخل. ولا حالةَ خارجَ الجدول يسقط فيها شيء.",
  "Every one of these is addition modulo the size of its own carrier. There is no branch and nothing to decide: the trace beside each table is three lines long at every level, and the only thing that changes from one to the next is where the wrap happens. Read them for the shape — each row is the row above it shifted by one, which is what a cyclic group looks like when you write it out in full.":
    "كلٌّ من هذه جمعٌ بمقياس حجم حاملها هي. لا تفرُّعَ ولا شيءَ يُقرَّر: الاقتفاءُ إلى جانب كلِّ جدولٍ ثلاثةُ أسطرٍ عند كلّ مستوى، والذي يتغيّر من واحدٍ إلى آخر هو موضعُ الالتفاف فحسب. اقرأها للشكل — كلُّ صفٍّ هو الصفُّ الذي فوقه مُزاحًا بواحد، وهكذا تبدو زمرةٌ دوريّةٌ مكتوبةً بتمامها.",
  "Every step the engine can take is one cell in one of these tables.":
    "كلُّ خطوةٍ يستطيع المحرّكُ أن يخطوها خليةٌ واحدةٌ في أحد هذه الجداول.",
  "Find the column": "جِدِ العمود",
  "Find the row": "جِدِ الصفّ",
  "Fix one operand of PLUS and you get a permutation of the carrier — every pole lands somewhere different, so the step can always be undone and nothing has been decided. Fix one operand of STAR and poles collapse together. That collapse is the informative part: a step that can merge two possibilities is a step that can rule one out. A system with only the first law could never narrow anything; a system with only the second could never be reversed.":
    "ثبِّت أحد مُعامِلَي PLUS تحصلْ على تبديلٍ للحامل: كلُّ قطبٍ يحطُّ في موضعه هو، فالخطوةُ قابلةٌ للتراجع دائمًا ولم يُقرَّر شيء. وثبِّت أحد مُعامِلَي STAR تنطبقْ أقطابٌ معًا. وهذا الانطباقُ هو المُفيد: خطوةٌ تستطيع دمجَ احتمالين هي خطوةٌ تستطيع استبعادَ أحدهما. ونظامٌ بالقانون الأوّل وحدَه لن يضيّق شيئًا أبدًا؛ ونظامٌ بالثاني وحدَه لا يمكن عكسُه.",
  "Four stepping rows against one absorbing row. The rank of a fixed-operand map drops by exactly one, and the poles that collapse together become indistinguishable from that step on.":
    "أربعةُ صفوفٍ تخطو في مقابل صفٍّ ماصٍّ واحد. ورتبةُ الاقتران ذي المُعامِل المثبَّت تنقص واحدًا بالضبط، والأقطابُ التي تنطبق معًا لا تتمايز من تلك الخطوة فصاعدًا.",
  "Fourteen tables, two operand orientations and seven levels give 560 typed coordinates — the whole address space a prediction is allowed to route through. The tables are small on purpose. What they buy is that the space they generate is finite, declared in advance, and checkable by a person with a printout.":
    "أربعةَ عشرَ جدولًا واتّجاها مُعامِلاتٍ وسبعةُ مستوياتٍ تعطي 560 إحداثيًّا محدَّدَ النوع — كلَّ فضاء العنونة المسموحِ للتنبّؤ بالمرور فيه. والجداولُ صغيرةٌ عن قصد. والمقابلُ أنّ الفضاءَ الذي تولّده منتهٍ ومُعلَنٌ سلفًا وقابلٌ للفحص من شخصٍ بورقةٍ مطبوعة.",
  "HOW TO READ ONE": "كيف تُقرأ واحدةٌ منها",
  "How fourteen tables become 560 typed coordinates": "كيف تصير أربعةَ عشرَ جدولًا 560 إحداثيًّا محدَّدَ النوع",
  "How to read one": "كيف تُقرأ واحدةٌ منها",
  "Level 3 has 3 poles and level 5 has 5; no scaled map carries the first into the second, and the site publishes that as a boundary rather than as an approximation.":
    "المستوى 3 له ثلاثةُ أقطابٍ والمستوى 5 له خمسة؛ ولا اقترانَ مُقاسٍ يحمل الأوّلَ إلى الثاني، والموقعُ ينشر ذلك حدًّا لا تقريبًا.",
  "Nothing composed ever leaves the set": "لا يغادر المُركَّبُ المجموعةَ أبدًا",
  "Nothing forces a table to be addition. Every one of the n² cells could independently hold any of the n poles, so at level 7 there are 7⁴⁹ possible tables — past 10⁴¹. GALO declares two per level and freezes them before anything runs. The richness is not in the tables being large; it is in the choice being made once, in public, and never adjusted afterwards to fit a result.":
    "لا شيءَ يُلزِم جدولًا بأن يكون جمعًا. كلٌّ من خلاياه الـn² يمكن أن تحمل مستقلّةً أيًّا من الأقطاب الـn، فعند المستوى 7 هناك 7⁴⁹ جدولًا ممكنًا — فوق 10⁴¹. ويُعلِن GALO جدولين لكلِّ مستوًى ويُجمّدهما قبل أن يجري أيُّ شيء. والغنى ليس في كِبَر الجداول، بل في أنّ الاختيار جرى مرّةً واحدةً علانيةً ولم يُعدَّل بعدها قطُّ ليوافق نتيجة.",
  "One law never loses information; the other loses it on purpose":
    "قانونٌ لا يفقد المعلومةَ أبدًا؛ والآخرُ يفقدها عمدًا",
  "One pole can end a line of reasoning outright": "قطبٌ واحدٌ يستطيع إنهاءَ خطِّ استدلالٍ رأسًا",
  "One pole, one cell, one possible answer. Nothing can be decided here, which is why this level carries control rather than content.":
    "قطبٌ واحدٌ وخليةٌ واحدةٌ وجوابٌ واحدٌ ممكن. لا شيءَ يُقرَّر هنا، ولذلك يحمل هذا المستوى تحكُّمًا لا محتوًى.",
  "Outside the absorbing row STAR agrees with PLUS, which is why the two tables differ in exactly one row and nowhere else.":
    "خارجَ الصفِّ الماصّ يتّفق STAR مع PLUS، ولهذا يختلف الجدولان في صفٍّ واحدٍ بالضبط ولا شيءَ سواه.",
  "P0 absorbs from the left under STAR: whatever the column holds, the answer is P0 and the column is never consulted. In an algebra that is one row of a table. In a run it is a terminal — a step that closes a branch rather than continuing it, in a way that is decided by the declared law rather than by a heuristic that stopped early.":
    "تحت STAR يمتصُّ P0 من اليسار: مهما حمل العمودُ كان الجوابُ P0 ولا يُستشار العمود. في الجبر هذا صفٌّ من جدول. وفي التشغيل هو طرَفٌ نهائيّ — خطوةٌ تُغلِق فرعًا بدل أن تُكمِله، بحكم قانونٍ مُعلَنٍ لا بحكم استدلالٍ تقريبيٍّ توقّف مبكّرًا.",
  "P0 absorbs from the left. Whatever the column holds, the answer is P0, and the column was never consulted — which is how a single step can close a line of reasoning rather than continue it.":
    "يمتصُّ P0 من اليسار. مهما حمل العمودُ كان الجوابُ P0، ولم يُستشَر العمودُ أصلًا — وهكذا تستطيع خطوةٌ واحدةٌ أن تُغلِق خطَّ استدلالٍ بدل أن تُكمِله.",
  "PLUS at this level is addition modulo the size of the carrier.": "PLUS عند هذا المستوى جمعٌ بمقياس حجم الحامل.",
  "PLUS is associative: bracket three operands either way and the result is the same, so the brackets are decoration. STAR is not. Under STAR, (a ★ b) ★ c and a ★ (b ★ c) can land on different poles, which means a list of operands does not name a result — only a tree does. That is why the syntax tree is carried in the record rather than reconstructed, and why a stranger can rebuild the arithmetic exactly.":
    "PLUS تجميعيّ: قوِّس المُعامِلات الثلاثة كيفما شئت تكن النتيجةُ واحدةً، فالأقواسُ زينة. أمّا STAR فلا. تحته قد يحطُّ (a ★ b) ★ c وa ★ (b ★ c) على قطبَين مختلفَين، ومعناه أنّ قائمةَ المُعامِلات لا تسمّي نتيجةً — لا تسمّيها إلّا شجرة. ولهذا تُحمَل شجرةُ التركيب في السجلّ ولا يُعاد بناؤها، ولهذا يستطيع غريبٌ أن يعيد إنتاجَ الحساب بالضبط.",
  "Pick three poles at level 6 and evaluate both bracketings against the tables above. Where the left bracketing passes through P0 and the right one does not, the two answers differ, and the difference is visible in two lookups.":
    "اختر ثلاثةَ أقطابٍ عند المستوى 6 واحسب طريقتَي التقويس على الجداول أعلاه. وحيث تمرُّ اليسرى بـP0 ولا تمرُّ اليمنى يختلف الجوابان، والفرقُ ظاهرٌ في عمليّتَي بحث.",
  "Prime again, and the largest declared. Every non-zero step reaches everything, and nothing between the poles is left unreachable.":
    "أوّليٌّ مرّةً أخرى، وأكبرُ المُعلَن. وكلُّ خطوةٍ غيرِ صفريّةٍ تبلغ كلَّ شيء، ولا يبقى بين الأقطاب ما لا يُبلَغ.",
  "Prime size, so every non-zero pole generates the whole carrier by repetition. There is no proper sub-cycle to get stuck in.":
    "حجمٌ أوّليّ، فكلُّ قطبٍ غيرِ صفريٍّ يولّد الحاملَ كلَّه بالتكرار. ولا دورةَ جزئيّةً فعليّةً يُعلَق فيها.",
  "Read any row of any table above and check that every entry is one of the poles named on its own axis. That is the whole of the property, and it holds in all fourteen.":
    "خذ أيَّ صفٍّ من أيِّ جدولٍ أعلاه وتحقّق أنّ كلَّ مدخلٍ فيه أحدُ الأقطاب المسمّاة على محوره هو. هذه هي الخاصّيّةُ بتمامها، وهي تثبت في الأربعة عشر جميعًا.",
  "Read the cell": "اقرأ الخلية",
  "Row {left}, column {right}.": "الصفُّ {left}، والعمودُ {right}.",
  "Row, column, cell. There is no third step.": "صفٌّ وعمودٌ وخلية. لا خطوةَ ثالثة.",
  "STAR asks this before it computes anything.": "يسأل STAR هذا قبل أن يحسب أيَّ شيء.",
  "Seven PLUS tables, and one rule between them.": "سبعةُ جداولِ PLUS، وقاعدةٌ واحدةٌ بينها.",
  "Seven STAR tables, and one row that changes everything.": "سبعةُ جداولِ STAR، وصفٌّ واحدٌ يغيّر كلَّ شيء.",
  "Six poles, one absorbing row, and both sub-cycles from the smaller levels still visible in the rest of the table.":
    "ستّةُ أقطابٍ وصفٌّ ماصٌّ واحد، والدورتان الجزئيّتان من المستويات الأصغر ما زالتا ظاهرتين في بقيّة الجدول.",
  "Small tables, chosen and frozen, do more work than large ones left open.":
    "الجداولُ الصغيرة، إذا اختيرت وجُمِّدت، تؤدّي عملًا أكثرَ من الكبيرة المتروكة مفتوحة.",
  "THE FIRST TOWER": "البرجُ الأوّل",
  "THE FOURTEEN TABLES": "الجداولُ الأربعةَ عشر",
  "THE SECOND TOWER": "البرجُ الثاني",
  "Tables that could have been declared at this level: {count}. Declared and frozen: 2.":
    "جداولُ كان يمكن إعلانُها عند هذا المستوى: {count}. المُعلَن والمجمَّد: 2.",
  "Take any row of a PLUS table and confirm every entry appears exactly once. Then take row P0 of the STAR table beside it and confirm every entry is the same. Two rows, two completely different behaviours, on the same carrier.":
    "خذ أيَّ صفٍّ من جدول PLUS وتأكّد أنّ كلَّ مدخلٍ يظهر مرّةً واحدةً بالضبط. ثمّ خذ صفَّ P0 من جدول STAR المجاور وتأكّد أنّ كلَّ المداخل واحد. صفّان، وسلوكان مختلفان تمامًا، على الحامل نفسِه.",
  "Take the left operand down the side and the right operand along the top; the cell where they meet is the result. That is the entire lookup, and it is why a step of GALO can be checked by a person with a printout and no software. The traces below each table do exactly that, one line at a time, so a reader who disagrees with a number can point at the line where the disagreement starts.":
    "خذ المُعامِلَ الأيسرَ على الجانب والأيمنَ على الأعلى؛ والخليةُ التي يلتقيان عندها هي النتيجة. هذا هو البحثُ كلُّه، ولهذا يستطيع شخصٌ بورقةٍ مطبوعةٍ ودون أيّ برمجيّةٍ أن يفحص خطوةً من GALO. والاقتفاءاتُ تحت كلِّ جدولٍ تفعل ذلك بالضبط، سطرًا سطرًا، فيستطيع قارئٌ يخالف رقمًا أن يشير إلى السطر الذي يبدأ عنده الخلاف.",
  "The Fourteen Cayley Tables — Every Step GALO Can Take":
    "جداولُ كايلي الأربعةَ عشر — كلُّ خطوةٍ يستطيع GALO أن يخطوها",
  "The absorbing row is the only row, so at this level STAR and PLUS are the same one-cell table. The difference between the laws needs at least two poles to exist.":
    "الصفُّ الماصُّ هو الصفُّ الوحيد هنا، فعند هذا المستوى STAR وPLUS جدولٌ واحدٌ بخليةٍ واحدة. والفرقُ بين القانونين يحتاج قطبَين على الأقلّ ليوجد.",
  "The complete {operation} table at level {level}": "جدولُ {operation} الكامل عند المستوى {level}",
  "The count of possible tables per level is printed beside each one. Compare it to the two that were declared, and note that the comparison is the argument: a system that could pick its table after seeing the data would have no claim to make.":
    "عددُ الجداول الممكنة عند كلِّ مستوًى مطبوعٌ إلى جانب كلٍّ منها. قارِنه بالاثنين المُعلَنَين، ولاحظ أنّ المقارنةَ هي الحجّة: نظامٌ يستطيع انتقاءَ جدوله بعد رؤية البيانات لا دعوى له.",
  "The first level where the wrap is visible in more than one place. Every row is the row above it shifted by one, which is what a cyclic group looks like written out.":
    "أوّلُ مستوًى يظهر فيه الالتفافُ في أكثر من موضع. كلُّ صفٍّ هو الصفُّ الذي فوقه مُزاحًا بواحد، وهكذا تبدو زمرةٌ دوريّةٌ مكتوبة.",
  "The first table where the two laws part company: row P0 is flattened to P0 while row P1 still steps. One row lost, one row kept.":
    "أوّلُ جدولٍ يفترق فيه القانونان: صفُّ P0 مُسطَّحٌ إلى P0 بينما صفُّ P1 ما زال يخطو. صفٌّ فُقِد وصفٌّ بقي.",
  "The fourteen tables these renamings act on": "الجداولُ الأربعةَ عشر التي تعمل عليها إعاداتُ الوسم هذه",
  "The largest declared table, and still only one row differs from PLUS. Almost all of the richness comes from that single row being there at all.":
    "أكبرُ جدولٍ مُعلَن، ومع ذلك لا يفرقه عن PLUS إلّا صفٌّ واحد. وأكثرُ الغنى كلِّه آتٍ من مجرّد وجود ذلك الصفِّ الواحد.",
  "The left operand names the row. Under the site's naming this is the pole the run is standing on, and under STAR it is the one that decides whether the rest of the lookup happens at all.":
    "المُعامِلُ الأيسرُ يسمّي الصفّ. وبتسمية الموقع هو القطبُ الذي يقف عليه التشغيل، وتحت STAR هو الذي يقرّر هل يحدث بقيّةُ البحث أصلًا.",
  "The levels are not seven copies of one idea. A map from one level into another has to send P0 to P0 and commute with both laws, and that is only possible when the sizes divide: level 2 embeds into 4 and 6, level 3 into 6, and level 3 into 5 not at all. So the tower has a shape, some pairs are joined and others are provably not, and a claim that transports across a join that does not exist fails rather than degrades.":
    "المستوياتُ ليست سبعَ نسخٍ من فكرةٍ واحدة. فالاقترانُ من مستوًى إلى آخر عليه أن ينقل P0 إلى P0 وأن يتبادل مع القانونين، وهذا لا يمكن إلّا حين تقبل الأحجامُ القسمة: المستوى 2 ينغرس في 4 و6، والمستوى 3 في 6، والمستوى 3 في 5 لا البتّة. فللبرج شكل، وبعضُ الأزواج موصولٌ وبعضُها غيرُ موصولٍ ببرهان، والدعوى التي تنتقل عبر وصلٍ غيرِ موجودٍ تسقط ولا تتدهور.",
  "The order of application changes the answer, so a program is a tree": "ترتيبُ التطبيق يغيّر الجواب، فالبرنامجُ شجرة",
  "The reasonable first reaction to these tables is that they are too small to matter. The size is not what does the work. Six properties are, and each one can be checked against the tables printed above rather than taken on trust.":
    "ردُّ الفعل الأوّلُ المعقول على هذه الجداول أنّها أصغرُ من أن تهمّ. ليس الحجمُ ما يؤدّي العمل، بل ستُّ خصائص، وكلٌّ منها قابلٌ للفحص على الجداول المطبوعة أعلاه لا للأخذ على الثقة.",
  "The richest of the seven for structure: six splits by two and by three, so this level contains copies of both smaller cycles at once.":
    "أغنى السبعة بنيةً: ستّةٌ تقبل القسمة على اثنين وعلى ثلاثة، فيحوي هذا المستوى نسختَي الدورتين الأصغرِ معًا.",
  "The right operand names the column. This is the pole supplied to the step — the one an admitted candidate brought with it.":
    "المُعامِلُ الأيمنُ يسمّي العمود. وهذا هو القطبُ المُقدَّم إلى الخطوة — الذي أتى به مرشَّحٌ مقبول.",
  "The same wrap as before, on the same carrier.": "الالتفافُ نفسُه كما قبل، على الحامل نفسِه.",
  "The seven PLUS tables": "جداولُ PLUS السبعة",
  "The seven STAR tables": "جداولُ STAR السبعة",
  "The seven levels interlock, and the joins have real obstructions":
    "المستوياتُ السبعة متشابكة، ولمواضع الوصل عوائقُ حقيقيّة",
  "The smallest table where a step can do something: P1 flips to P0 and back. This is a switch, and it is already enough to record a binary distinction.":
    "أصغرُ جدولٍ تستطيع فيه خطوةٌ أن تفعل شيئًا: P1 ينقلب إلى P0 والعكس. هذا مفتاح، وهو كافٍ سلفًا لتسجيل تمييزٍ ثنائيّ.",
  "The sum is already inside the carrier, so the wrap changes nothing here.":
    "المجموعُ داخلَ الحامل أصلًا، فالالتفافُ لا يغيّر هنا شيئًا.",
  "The sum ran past the last pole, so it wraps to the front. Nothing is lost in wrapping: the step can be undone by subtracting.":
    "تجاوز المجموعُ القطبَ الأخير فالتفَّ إلى المقدّمة. ولا يُفقَد شيءٌ في الالتفاف: يمكن التراجعُ عن الخطوة بالطرح.",
  "The symmetries these tables carry": "التناظراتُ التي تحملها هذه الجداول",
  "The value in the cell is the result, and it is a member of the same set the operands came from. Nothing is rounded, nothing is sampled, and there is no second-best answer to fall back on.":
    "القيمةُ في الخلية هي النتيجة، وهي عضوٌ في المجموعة نفسِها التي جاء منها المُعامِلان. لا تقريبَ ولا أخذَ عيّنة، ولا جوابَ ثانيًا في الجودة يُلجَأ إليه.",
  "These agree with the tables above everywhere except the first row. Under STAR, P0 absorbs from the left: whatever the column holds, the answer is P0 and the column is never consulted. That single shaded row is where the second tower earns its keep — it is what lets a step end a line of reasoning, what makes a fixed operand collapse the carrier instead of relabelling it, and what makes the order of application matter. Each table carries two traces, because there are two rules to see.":
    "تتّفق هذه مع الجداول أعلاه في كلِّ موضعٍ إلّا الصفَّ الأوّل. فتحت STAR يمتصُّ P0 من اليسار: مهما حمل العمودُ كان الجوابُ P0، ولم يُستشَر العمودُ أصلًا. وذلك الصفُّ المظلَّل وحدَه هو ما يكسب البرجَ الثانيَ مكانَه: هو ما يتيح لخطوةٍ أن تُنهي خطَّ استدلال، وما يجعل مُعامِلًا مثبَّتًا يُطبِق الحاملَ بدل أن يعيد وسمَه، وما يجعل ترتيبَ التطبيق ذا أثر. ولكلِّ جدولٍ اقتفاءان، لأنّ هنا قاعدتين تُريان.",
  "These tables are mathematics, not a result. They say exactly what the engine's steps are and nothing at all about whether the engine is useful to anybody.":
    "هذه الجداولُ رياضيّاتٌ لا نتيجة. تقول بالضبط ما خطواتُ المحرّك، ولا تقول شيئًا البتّةَ عمّا إذا كان المحرّكُ نافعًا لأحد.",
  "Three quarters of the table behaves like addition and one quarter of it does not. That asymmetry is what carries information: knowing the answer was P0 tells you something about the row.":
    "ثلاثةُ أرباع الجدول تتصرّف كالجمع والرُّبعُ لا. وهذا اللاتماثلُ بعينه هو ما يحمل المعلومة: معرفةُ أنّ الجوابَ كان P0 تقول لك شيئًا عن الصفّ.",
  "Two rows step and one absorbs. From here on the table is not a group table at all — it has no two-sided identity and it cannot be undone.":
    "صفّان يخطوان وصفٌّ يمتصّ. ومن هنا فصاعدًا لم يعد هذا جدولَ زمرةٍ البتّة: لا عنصرَ محايدَ من الجهتين فيه ولا يمكن التراجعُ عنه.",
  "Two tables were chosen out of an astronomical space, and then frozen": "جدولان اختيرا من فضاءٍ فلكيّ، ثمّ جُمِّدا",
  "WHY THIS IS RICH AND NOT JUST ARITHMETIC": "لماذا هذا غنيٌّ لا مجرّدُ حساب",
  "What a run has to do before an answer may be published": "ما على التشغيل أن يفعله قبل أن يُسمح بنشر جواب",
  "What is printed on this page": "ما المطبوع في هذه الصفحة",
  "Which rule this lookup takes": "أيَّ قاعدةٍ يسلك هذا البحث",
  "Why this is rich": "لماذا هذا غنيّ",
  "a step inside the range": "خطوةٌ داخل المدى",
  "a step that wraps past the end": "خطوةٌ تلتفُّ بعد النهاية",
  "laws, frozen before anything ran": "قانونان، جُمِّدا قبل أن يجري أيُّ شيء",
  "levels, from one pole to seven": "مستوياتٍ، من قطبٍ واحدٍ إلى سبعة",
  "tables printed in full": "جدولًا مطبوعةً كاملة",
  "the row that ends the line": "الصفُّ الذي يُنهي الخطّ",
  "the row that steps on": "الصفُّ الذي يمضي",
};
