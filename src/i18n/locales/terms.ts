import type { TranslationDictionary } from "../translations";

export const termsRu: TranslationDictionary = {
  "A pole is one named position a level is allowed to be in — nothing more and nothing less.":
    "Полюс — это одна именованная позиция, в которой уровню разрешено находиться, не больше и не меньше.",
  "Think of the floor indicator in a lift. Floor 2 is a position, not a quantity of anything; it only tells you where the lift is right now.":
    "Представьте указатель этажа в лифте. Этаж 2 — это позиция, а не количество чего-либо; он лишь говорит, где лифт находится прямо сейчас.",
  "GALO refuses to hide its state inside an opaque vector. If a state can be named, it can be printed into a receipt, compared with an earlier run, and disputed by a reviewer who does not trust you.":
    "GALO принципиально не прячет своё состояние в непрозрачном векторе. Если состояние можно назвать, его можно записать в протокол, сравнить с прошлым запуском и оспорить, даже если вы не доверяете автору.",
  "Every table cell, every typed coordinate, and every recorded receipt on this site is written in poles.":
    "Каждая ячейка таблицы, каждая типизированная координата и каждый записанный протокол на этом сайте записаны в полюсах.",
  "A level fixes how many distinct positions exist: L3 has three, L7 has seven.":
    "Уровень задаёт, сколько различных позиций существует: у L3 их три, у L7 — семь.",
  "It is the difference between a three-way switch and a seven-position dial. The dial is not cleverer; it simply has more positions to tell apart.":
    "Это разница между трёхпозиционным переключателем и семипозиционным диском. Диск не умнее — у него просто больше позиций, которые можно различить.",
  "Resolution should be a decision, not an accident. Writing the level down turns the need for a finer distinction into a statement that someone else can check.":
    "Разрешение должно быть решением, а не случайностью. Записанный уровень превращает потребность в более тонком различии в утверждение, которое можно проверить.",
  "Levels L1 through L7 appear in every table, in the 560-coordinate count, and in the rules for moving between levels.":
    "Уровни от L1 до L7 встречаются во всех таблицах, в подсчёте 560 координат и в правилах перехода между уровнями.",
  "Modulo n means counting that wraps: after the last position you are back at the first.":
    "«По модулю n» означает счёт, который замыкается: после последней позиции вы снова оказываетесь на первой.",
  "A clock face. Four hours after ten o'clock is two o'clock, because the count wraps at twelve.":
    "Циферблат часов. Через четыре часа после десяти будет два часа, потому что счёт замыкается на двенадцати.",
  "Wraparound keeps every calculation inside the declared finite set. No operation can produce a state that was not declared in advance, so the space of outcomes stays closed.":
    "Замыкание удерживает любое вычисление внутри объявленного конечного множества. Ни одна операция не может выдать состояние, которое не было объявлено заранее, поэтому пространство исходов остаётся закрытым.",
  "It drives PLUS, it drives the non-reset rows of STAR, and it is the wrap you can see in the dial illustration.":
    "Он движет PLUS, движет несбрасывающие строки STAR и виден как замыкание на иллюстрации с циферблатом.",
  "PLUS takes two positions and rotates the first one forward by the index of the second.":
    "PLUS берёт две позиции и поворачивает первую вперёд на индекс второй.",
  "Turning a combination dial: start where you are, advance the number of clicks named by the second input, and read where you stopped.":
    "Поворот кодового диска: начните там, где стоите, продвиньтесь на столько щелчков, сколько указывает второй вход, и прочитайте, где остановились.",
  "PLUS is the well-behaved half of the kernel. It is associative, commutative and reversible, which makes it safe to reason about in bulk and a fair baseline for judging STAR.":
    "PLUS — благополучная половина ядра. Он ассоциативен, коммутативен и обратим, поэтому о нём безопасно рассуждать в большом объёме и с ним честно сравнивать STAR.",
  "PLUS fills the symmetric Cayley table, defines the cyclic structure of each level, and anchors every symmetry argument.":
    "PLUS заполняет симметричную таблицу Кэли, задаёт циклическую структуру каждого уровня и держит на себе все рассуждения о симметриях.",
  "STAR behaves exactly like PLUS, except that a raw-left P0 forces the answer to P0 before any addition happens.":
    "STAR ведёт себя в точности как PLUS, за одним исключением: левый операнд P0 обнуляет результат до P0 ещё до всякого сложения.",
  "A machine with a safety latch on the left slot. Drop P0 into that slot and the machine stops at P0, whatever sits in the other slot.":
    "Машина с предохранителем на левом гнезде. Положите в это гнездо P0 — и машина остановится на P0, что бы ни лежало во втором гнезде.",
  "One asymmetric clause removes commutativity, associativity and the identity element at once. GALO keeps it because a reset that only one side can trigger is exactly what a controlled, revisable state needs.":
    "Одно несимметричное условие сразу лишает операцию коммутативности, ассоциативности и нейтрального элемента. GALO сохраняет его, потому что сброс, который может запустить только одна сторона, — именно то, что нужно управляемому и пересматриваемому состоянию.",
  "The flat P0 row in the STAR table, the zero-prefix rule, and most of the boundaries on this site follow from this single clause.":
    "Ровная строка P0 в таблице STAR, правило нулевого префикса и большая часть границ на этом сайте следуют из этого единственного условия.",
  "A left zero decides the answer whenever it sits in the left slot.":
    "Левый нуль определяет ответ всякий раз, когда стоит в левом гнезде.",
  "A cancel button. Once it is pressed, whatever else was typed no longer matters.":
    "Кнопка отмены. Как только её нажали, всё набранное раньше уже не важно.",
  "It gives the kernel a way to halt a chain that the other operand cannot override. That is the algebraic seed of a reset.":
    "Он даёт ядру способ остановить цепочку так, что второй операнд этого не отменит. Это алгебраическое зерно сброса.",
  "P0 is the unique left zero of STAR at every level n≥2, which is why the whole P0 row of a STAR table is constant.":
    "P0 — единственный левый нуль STAR на каждом уровне n≥2, поэтому вся строка P0 в таблице STAR постоянна.",
  "A right-neutral element changes nothing when it sits in the right slot.":
    "Правый нейтральный элемент ничего не меняет, когда стоит в правом гнезде.",
  "Advancing by zero steps: you stay exactly where you already were.":
    "Продвижение на ноль шагов: вы остаётесь ровно там, где были.",
  "It is the half of an identity that STAR genuinely has. Naming it precisely blocks the much stronger and false claim that STAR has an identity element.":
    "Это та половина нейтрального элемента, которая у STAR действительно есть. Точное название блокирует куда более сильное и ложное утверждение, будто у STAR есть нейтральный элемент.",
  "P0 is the unique right-neutral element of STAR; together with the left-zero property it is why STAR has no two-sided identity.":
    "P0 — единственный правый нейтральный элемент STAR; вместе со свойством левого нуля именно поэтому у STAR нет двустороннего нейтрального элемента.",
  "A typed coordinate is the full address of one transition: level, law family, source role, and active role.":
    "Типизированная координата — полный адрес одного перехода: уровень, семейство закона, роль источника и роль активного полюса.",
  "A postal address. The same street number in a different city is a different place, however identical the number looks.":
    "Почтовый адрес. Тот же номер дома в другом городе — совсем другое место, каким бы одинаковым ни выглядел номер.",
  "Two transitions can land on the same result for completely different reasons. Keeping the address means the reason survives into the record instead of being averaged away.":
    "Два перехода могут дать один и тот же результат по совершенно разным причинам. Сохранённый адрес переносит эту причину в запись, вместо того чтобы усреднить её.",
  "Identifiers such as L3:STAR_LEFT:P0:P2, the 560-coordinate count, and the guided transition laboratory.":
    "Идентификаторы вида L3:STAR_LEFT:P0:P2, подсчёт 560 координат и пошаговая лаборатория переходов.",
  "A Cayley table lists the result of a two-input rule for every possible pair of inputs.":
    "Таблица Кэли перечисляет результат правила с двумя входами для каждой возможной пары входов.",
  "The times table you already know, but written for any two-input rule instead of multiplication.":
    "Хорошо знакомая таблица умножения, но записанная для любого правила с двумя входами, а не только для умножения.",
  "A finite table can be checked exhaustively. Nothing has to be trusted, sampled or estimated: every cell is either right or wrong, and the site regenerates them rather than quoting them.":
    "Конечную таблицу можно проверить целиком. Ничего не приходится принимать на веру, выбирать выборочно или оценивать: каждая ячейка либо верна, либо нет, и сайт пересчитывает их, а не цитирует.",
  "The L3 tables, the coloured field illustration, and the table channel of every glossary entry.":
    "Таблицы L3, раскрашенная иллюстрация-поле и табличный канал каждой словарной статьи.",
  "An automorphism is a reversible renaming of every position that leaves every rule intact.":
    "Автоморфизм — обратимое переименование всех позиций, при котором ни одно правило не меняется.",
  "Relabelling the keys and the locks of a building at the same time. Every key still opens exactly the door it opened before.":
    "Одновременно перемаркировать все ключи и все замки в здании. Каждый ключ по-прежнему открывает ровно ту дверь, что и раньше.",
  "It separates distinctions that are structural from distinctions that are only a naming convention — an honesty check on what the mathematics really says.":
    "Он отделяет различия структурные от различий, которые всего лишь соглашение об именах, — это проверка на честность того, что математика действительно утверждает.",
  "The unit multipliers, the eighteen same-level automorphisms summed over L1–L7, and the whole symmetry chapter.":
    "Единичные множители, восемнадцать одноуровневых автоморфизмов в сумме по L1–L7 и вся глава о симметриях.",
  "An orbit collects everything one object can be turned into by the allowed symmetries.":
    "Орбита собирает всё, во что один объект может быть переведён допустимыми симметриями.",
  "The seats you can reach by rotating a round table. Reachable seats form one group; the seats you can never reach form another.":
    "Места, до которых можно добраться, вращая круглый стол. Достижимые места образуют одну группу, недостижимые — другую.",
  "Counting orbits counts genuinely different cases instead of counting relabellings of the same case, so a structural total does not get inflated by naming choices.":
    "Подсчёт орбит считает действительно разные случаи, а не переименования одного и того же случая, поэтому структурный итог не раздувается за счёт выбора имён.",
  "The two L3 pole orbits, the 224 typed orbits across the tower, and the Burnside average.":
    "Две орбиты полюсов на L3, 224 типизированные орбиты по всей башне и усреднение по Бёрнсайду.",
  "A homomorphism translates positions from one level to another so that every rule still holds after the translation.":
    "Гомоморфизм переводит позиции с одного уровня на другой так, что после перевода все правила продолжают выполняться.",
  "A faithful translator. If the original sentence was a question, the translated sentence is still a question.":
    "Добросовестный переводчик. Если исходная фраза была вопросом, переведённая фраза тоже остаётся вопросом.",
  "Moving information between levels is exactly where silent corruption would happen. The preservation equation turns that move into something a machine can check cell by cell.":
    "Перенос информации между уровнями — именно то место, где происходило бы тихое искажение. Уравнение сохранения превращает этот перенос в проверку, которую машина выполняет по ячейкам.",
  "The L2→L4 pass, the L3→L5 rejection, and the zero map that exists between every pair of levels.":
    "Успешный переход L2→L4, отклонение L3→L5 и нулевое отображение, существующее для любой пары уровней.",
  "An embedding is a homomorphism that also keeps distinct positions distinct.":
    "Вложение — это гомоморфизм, который вдобавок сохраняет различие между различными позициями.",
  "Fitting a small cog inside a large one. It meshes only when the teeth line up exactly; otherwise it does not fit at all.":
    "Посадить маленькую шестерню внутрь большой. Она входит, только если зубцы совпадают точно; иначе не входит вовсе.",
  "It is the exact condition for carrying a finer state into a coarser system without quietly losing a distinction that a decision depended on.":
    "Это точное условие, при котором более тонкое состояние можно перенести в более грубую систему, не потеряв незаметно различие, от которого зависело решение.",
  "The divisibility rule, the level-transfer illustration, and the rejected same-index candidate from L3 to L5.":
    "Правило делимости, иллюстрация переносов между уровнями и отклонённый кандидат с одинаковыми индексами из L3 в L5.",
  "A receipt is the machine-readable record of what one bounded run checked, executed and concluded.":
    "Протокол — машиночитаемая запись того, что один ограниченный запуск проверил, выполнил и чем завершился.",
  "A laboratory notebook page: which experiment, which inputs, which result — written down while it happened.":
    "Страница лабораторного журнала: какой эксперимент, какие входные данные, какой результат — записанные в момент, когда это происходило.",
  "A claim without a receipt cannot be re-run by somebody who does not trust the person making it. GALO treats that as a defect in the claim, not a detail of the paperwork.":
    "Утверждение без протокола не может быть перезапущено тем, кто не доверяет автору. GALO считает это дефектом самого утверждения, а не мелочью в оформлении.",
  "The recorded walkthrough on the home page, the work ledger, and every check identifier shown on this site.":
    "Записанный разбор на главной странице, реестр единиц работы и каждый идентификатор проверки на этом сайте.",
  "A boundary is an explicit statement that a stronger conclusion is not available yet, together with the reason.":
    "Граница — явное заявление о том, что более сильный вывод пока недоступен, вместе с причиной.",
  "A sign saying the bridge ends here — not a detour sign pretending the road continues.":
    "Знак, сообщающий, что мост здесь заканчивается, а не указатель объезда, делающий вид, будто дорога продолжается.",
  "The fastest way to lose a technical reader is to blur the edge of the evidence. Marking the edge is what makes everything inside it worth reading.":
    "Быстрее всего технического читателя теряют, когда размывают край доказательств. Обозначенный край — именно то, ради чего стоит читать всё, что внутри него.",
  "Every BOUNDARY status, the open-boundaries column, and the status field of the public claim matrix.":
    "Каждый статус BOUNDARY, колонка открытых границ и поле статуса в матрице публичных утверждений.",
  "Three separate things: the mathematics that is settled, the engine that runs today, and the architecture still being built.":
    "Три разные вещи: устоявшаяся математика, движок, который работает сегодня, и архитектура, которая ещё строится.",
  "A finished blueprint, a working prototype on the bench, and the machine the bench is aiming at. Three real objects in three different states.":
    "Готовый чертёж, работающий прототип на верстаке и машина, к которой этот верстак стремится. Три реальных объекта в трёх разных состояниях.",
  "Most confusion about a research system comes from quoting one layer while the reader assumes another. Keeping them apart is the reason this site exists in its current form.":
    "Большая часть путаницы вокруг исследовательских систем возникает, когда цитируют один слой, а читатель подразумевает другой. Их разделение — причина, по которой этот сайт выглядит именно так.",
  "The four tracks on the evidence page, the FORMAL / CURRENT V4 / TARGET tags, and the claim matrix.":
    "Четыре направления на странице доказательств, метки FORMAL / CURRENT V4 / TARGET и матрица утверждений.",
  "A carrier is the complete list of positions that exist at one level; nothing outside the list is allowed.":
    "Носитель — полный список позиций, которые существуют на данном уровне; ничего вне этого списка не допускается.",
  "The seat list of one small carousel. If a seat is not on the list, nobody can sit there.":
    "Список мест на маленькой карусели. Если места нет в списке, сесть на него нельзя.",
  "Declaring the whole set up front is what makes exhaustive checking possible: there is no long tail of states that nobody ever enumerated.":
    "Именно объявление всего множества заранее делает возможной исчерпывающую проверку: не остаётся длинного хвоста состояний, которые никто не перечислил.",
  "The row and column headers of every table, and the size n that every level formula refers to.":
    "Заголовки строк и столбцов каждой таблицы и размер n, к которому обращается каждая формула уровня.",
  "A residue class is the whole family of integers that land on the same position after wrapping.":
    "Класс вычетов — целое семейство чисел, которые после замыкания попадают в одну и ту же позицию.",
  "Every moment the clock hand points at three: three today, three next week, fifteen hundred hours. One mark, many moments.":
    "Все моменты, когда стрелка указывает на тройку: сегодня, через неделю, в пятнадцать часов. Одна метка — много моментов.",
  "It explains how a label can carry exact arithmetic without pretending to be a quantity. The label stands for a class, not for a size.":
    "Это объясняет, как метка может нести точную арифметику, не притворяясь величиной: метка обозначает класс, а не размер.",
  "The correspondence between P_i and the remainder i, and every wraparound in the tables.":
    "Соответствие между P_i и остатком i, а также каждое замыкание в таблицах.",
  "A binary operation turns exactly two inputs into exactly one output, with no gaps and no choices.":
    "Бинарная операция превращает ровно два входа ровно в один выход — без пропусков и без выбора.",
  "A vending machine with two slots. The same two coins give the same item, every single time.":
    "Торговый автомат с двумя приёмниками. Одни и те же две монеты каждый раз дают один и тот же товар.",
  "Determinism is not a nice-to-have here. Replay only means something if identical inputs always produce an identical output.":
    "Детерминизм здесь не приятное дополнение. Воспроизведение имеет смысл только тогда, когда одинаковые входы всегда дают одинаковый выход.",
  "PLUS and STAR are both binary operations, which is why each one fills a complete square table.":
    "И PLUS, и STAR — бинарные операции, поэтому каждая заполняет полную квадратную таблицу.",
  "Closure means the operation can never send you outside the declared set of positions.":
    "Замкнутость означает, что операция никогда не может вывести вас за пределы объявленного набора позиций.",
  "A board game in which no legal move can ever push a piece off the board.":
    "Настольная игра, в которой ни один допустимый ход не может столкнуть фигуру с доски.",
  "Without closure the finite universe would leak, and no exhaustive check over it could be trusted afterwards.":
    "Без замкнутости конечный универсум протекал бы, и никакой исчерпывающей проверке по нему уже нельзя было бы доверять.",
  "Every cell of every table holds a position from the same level. That is closure, made visible.":
    "Каждая ячейка каждой таблицы содержит позицию того же уровня. Это и есть наглядная замкнутость.",
  "Commutativity asks whether swapping the two inputs leaves the result unchanged.":
    "Коммутативность спрашивает, останется ли результат прежним, если поменять два входа местами.",
  "Socks then shoes is not the same as shoes then socks. Some orders matter and some do not.":
    "Сначала носки, потом ботинки — не то же самое, что сначала ботинки, потом носки. Иногда порядок важен, иногда нет.",
  "PLUS commutes and STAR does not. That single difference is what makes role placement a real decision instead of bookkeeping.":
    "PLUS коммутативен, а STAR — нет. Именно это различие превращает размещение ролей в настоящее решение, а не в формальность.",
  "The PLUS table is mirror-symmetric across its diagonal; the STAR table visibly is not.":
    "Таблица PLUS зеркально симметрична относительно диагонали; таблица STAR явно нет.",
  "An identity element leaves every input unchanged, and it must do so from both sides.":
    "Нейтральный элемент оставляет любой вход неизменным, причём с обеих сторон.",
  "Adding nothing to a shopping basket. The basket is unchanged whichever side you add the nothing on.":
    "Добавить в корзину ничего. Корзина остаётся прежней, с какой стороны это ничего ни добавляй.",
  "Claiming an identity where only a one-sided version exists is exactly the kind of small overstatement this project is built to catch.":
    "Заявить о нейтральном элементе там, где есть лишь односторонняя версия, — ровно то мелкое преувеличение, ради поимки которого этот проект и построен.",
  "PLUS has one; STAR has none for n≥2, and the complete non-existence proof is on the theory page.":
    "У PLUS он есть; у STAR при n≥2 его нет, и полное доказательство несуществования приведено на странице теории.",
  "Four names for how many good properties an operation actually has, from fewest to most.":
    "Четыре названия для того, сколько хороших свойств у операции на самом деле — от наименьшего к наибольшему.",
  "A checklist you climb: each rung keeps every requirement below it and adds one more.":
    "Лестница-чеклист: каждая ступень сохраняет все требования ниже и добавляет ещё одно.",
  "Naming the exact rung stops a weaker structure from being described with a stronger word by accident.":
    "Названная точная ступень не даёт случайно описать более слабую структуру более сильным словом.",
  "PLUS reaches the top rung; STAR stops on the first one, and the site says so wherever it matters.":
    "PLUS доходит до верхней ступени; STAR останавливается на первой, и сайт говорит об этом всюду, где это важно.",
  "The source is the position a transition starts from, tracked as a named role rather than as a slot.":
    "Источник — позиция, с которой начинается переход; он отслеживается как именованная роль, а не как слот.",
  "On a delivery record the sender stays the sender, even when the form rearranges its fields.":
    "В накладной отправитель остаётся отправителем, даже если бланк переставит поля местами.",
  "Roles survive rearrangement and slots do not. Keeping the role is how provenance stays attached to a result.":
    "Роли переживают перестановку, а слоты — нет. Сохранение роли и есть то, благодаря чему происхождение остаётся привязанным к результату.",
  "The third field of every typed coordinate, and the LEFT/RIGHT switch in the guided laboratory.":
    "Третье поле каждой типизированной координаты и переключатель LEFT/RIGHT в пошаговой лаборатории.",
  "The active pole is the position applied to the source: the instruction rather than the starting point.":
    "Активный полюс — позиция, применяемая к источнику: это инструкция, а не точка старта.",
  "On a combination lock the source is where the dial stands and the active pole is how far you turn it.":
    "На кодовом замке источник — то, где стоит диск, а активный полюс — на сколько вы его поворачиваете.",
  "Separating what is being changed from what is doing the changing is the smallest workable model of an action.":
    "Отделение того, что меняют, от того, чем меняют, — минимальная работающая модель действия.",
  "The fourth field of every typed coordinate, and the second control in the guided laboratory.":
    "Четвёртое поле каждой типизированной координаты и второй регулятор в пошаговой лаборатории.",
  "Fix one input of a two-input rule and what remains is a one-input map through the table.":
    "Зафиксируйте один вход правила с двумя входами — и останется отображение с одним входом, идущее по таблице.",
  "Lock one dial of a combination lock and turn only the other: you trace a single line of outcomes.":
    "Заблокируйте один диск кодового замка и вращайте только второй: вы прочерчиваете единственную линию исходов.",
  "Most questions about what a step can reach are questions about these fixed slices, so the site names them precisely, including where the naming inverts.":
    "Большинство вопросов о том, куда может дойти шаг, — это вопросы об этих фиксированных срезах, поэтому сайт называет их точно, включая место, где название переворачивается.",
  "The ranks computed at L3 with the active pole fixed, and the warning that the interface name and the algebraic name point opposite ways.":
    "Ранги, вычисленные на L3 при фиксированном активном полюсе, и предупреждение о том, что интерфейсное и алгебраическое названия указывают в противоположные стороны.",
  "Rank counts how many different destinations a fixed one-input map can actually reach.":
    "Ранг считает, до скольких различных целей на самом деле может добраться фиксированное одновходовое отображение.",
  "A bus route with ten stops printed on the timetable but only four it ever really calls at.":
    "Автобусный маршрут, у которого в расписании десять остановок, а по-настоящему он заезжает лишь на четыре.",
  "It measures how much a step can still distinguish. A drop in rank is a loss of resolution you can see and count.":
    "Он измеряет, сколько шаг ещё способен различить. Падение ранга — это потеря разрешения, которую видно и можно посчитать.",
  "The L3 comparison where one orientation reaches two positions and the other reaches all three.":
    "Сравнение на L3, где одна ориентация достигает двух позиций, а другая — всех трёх.",
  "The 560 figure is one exhaustive count of addresses: input pairs first, then laws, then role placements.":
    "Число 560 — один исчерпывающий подсчёт адресов: сначала пары входов, затем законы, затем размещения ролей.",
  "Counting a warehouse by aisle, then shelf, then bin. Three independent multiplications, one total.":
    "Инвентаризация склада по проходам, затем по стеллажам, затем по ячейкам. Три независимых умножения и один итог.",
  "A number anyone can recount from the definitions cannot quietly drift into being a marketing figure.":
    "Число, которое каждый может пересчитать по определениям, не может тихо превратиться в маркетинговую цифру.",
  "The per-level bar chart, and the 140 to 280 to 560 to 556 chain printed beneath it.":
    "Столбчатая диаграмма вкладов по уровням и напечатанная под ней цепочка 140 → 280 → 560 → 556.",
  "A signature lists the operations a structure offers and how many inputs each one takes.":
    "Сигнатура перечисляет операции структуры и число входов у каждой из них.",
  "The button panel of a machine: two two-handed levers and one fixed marked position.":
    "Панель кнопок машины: два двуручных рычага и одна фиксированная отмеченная позиция.",
  "Comparing two structures only means something once both are described with the same vocabulary of operations.":
    "Сравнение двух структур обретает смысл лишь тогда, когда обе описаны одним и тем же словарём операций.",
  "The shorthand (2,2,0) for the full algebra: PLUS, STAR, and the named constant P0.":
    "Сокращение (2,2,0) для полной алгебры: PLUS, STAR и именованная константа P0.",
  "Composition feeds the output of one step into the input of the next, forming a tree of steps.":
    "Композиция подаёт выход одного шага на вход следующего, образуя дерево шагов.",
  "A recipe in which the contents of one bowl become an ingredient in the next bowl.":
    "Рецепт, в котором содержимое одной миски становится ингредиентом в следующей.",
  "A single step is one cell; a plan is a tree. Writing the tree down is what turns a sequence of actions into something auditable.":
    "Один шаг — это одна ячейка; план — это дерево. Записанное дерево и превращает последовательность действий в нечто проверяемое.",
  "The two bracketed L3 programs, and the boundary stating that the current engine executes one step and not a tree.":
    "Две программы на L3 со скобками и граница, гласящая, что текущий движок исполняет один шаг, а не дерево.",
  "Nonassociative means the brackets matter: regrouping the same inputs can change the answer.":
    "Неассоциативность означает, что скобки важны: перегруппировка тех же входов может изменить ответ.",
  "Ordinary subtraction does it too. Eight minus three minus two is not eight minus one.":
    "Обычное вычитание тоже так себя ведёт: восемь минус три минус два — это не восемь минус один.",
  "If brackets change the outcome, a plan cannot be stored as a flat list. The structure has to be written down and carried.":
    "Если скобки меняют исход, план нельзя хранить как плоский список. Структуру приходится записывать и переносить.",
  "The pair of L3 trees that return P2 and P1 from the very same three inputs.":
    "Пара деревьев на L3, которые из одних и тех же трёх входов дают P2 и P1.",
  "Associativity is permission to move the brackets while keeping the input order fixed.":
    "Ассоциативность — разрешение переставлять скобки, сохраняя порядок входов.",
  "Stacking boxes: taping the first two together first or the last two first leaves the same stack.":
    "Складывание коробок: склеите ли вы сначала первые две или последние две — стопка получится одна и та же.",
  "It is the property that lets long chains be evaluated in any convenient order, and precisely the property STAR gives up.":
    "Именно это свойство позволяет вычислять длинные цепочки в любом удобном порядке — и именно от него отказывается STAR.",
  "PLUS has it at every level; the STAR counterexample is worked out in full on the theory page.":
    "У PLUS она есть на каждом уровне; контрпример для STAR полностью разобран на странице теории.",
  "In a left-to-right STAR chain, once a running prefix reaches P0 every later value stays P0.":
    "В цепочке STAR слева направо: как только текущий префикс достигает P0, все последующие значения остаются P0.",
  "A latch that clicks shut. Nothing further down the line can unlatch it.":
    "Защёлка, которая захлопнулась. Ничто дальше по цепочке не может её открыть.",
  "It shows that history matters: a final total tells you nothing about whether the chain already reset along the way.":
    "Это показывает, что история важна: итоговая сумма ничего не говорит о том, произошёл ли сброс по дороге.",
  "The worked L5 chain where the ordinary sum and the STAR result disagree.":
    "Разобранная цепочка на L5, где обычная сумма и результат STAR расходятся.",
  "Catalan numbers count how many different bracketings a fixed row of inputs admits.":
    "Числа Каталана считают, сколько разных расстановок скобок допускает фиксированный ряд входов.",
  "The number of ways to pair up parentheses along a line without any pair ever crossing another.":
    "Число способов расставить пары скобок вдоль строки так, чтобы ни одна пара не пересекала другую.",
  "It puts an exact size on the space of possible plans, so plan structure becomes a counted object instead of a vague one.":
    "Это задаёт точный размер пространства возможных планов, и структура плана становится посчитанным объектом, а не расплывчатым.",
  "The 1, 2, 5, 14 progression for two, three, four, and five operands.":
    "Последовательность 1, 2, 5, 14 для двух, трёх, четырёх и пяти операндов.",
  "A group action is a full set of reversible moves together with the rule for combining them.":
    "Действие группы — полный набор обратимых движений вместе с правилом их сочетания.",
  "The rotations of a dial, plus the fact that performing two rotations is itself a rotation.":
    "Повороты циферблата плюс тот факт, что два поворота подряд — тоже поворот.",
  "A symmetry claim only means something once the acting set is declared. Naming the action is what keeps orbit counts honest.":
    "Утверждение о симметрии обретает смысл лишь тогда, когда объявлено действующее множество. Названное действие и держит подсчёт орбит честным.",
  "The unit multipliers acting at each level, and the two-element action at L3.":
    "Единичные множители, действующие на каждом уровне, и двухэлементное действие на L3.",
  "The stabilizer of an object is the set of moves that leave it exactly where it was.":
    "Стабилизатор объекта — множество движений, которые оставляют его ровно на месте.",
  "The rotations of a square that leave one particular corner in place.":
    "Повороты квадрата, которые оставляют один конкретный угол на месте.",
  "Orbit size multiplied by stabilizer size gives the size of the whole group, which turns counting into arithmetic instead of guesswork.":
    "Размер орбиты, умноженный на размер стабилизатора, даёт порядок всей группы, и подсчёт превращается в арифметику вместо угадывания.",
  "The L3 check where only the identity fixes P1, matching its two-element orbit.":
    "Проверка на L3, где P1 оставляет на месте только тождественное отображение, что согласуется с орбитой из двух элементов.",
  "Burnside counts distinct cases by averaging how many objects each move leaves untouched.":
    "Лемма Бёрнсайда считает различные случаи, усредняя число объектов, которые каждое движение не трогает.",
  "Counting genuinely different bead necklaces by asking, for each rotation, how many arrangements it leaves alone.":
    "Подсчёт по-настоящему разных бусинных ожерелий: для каждого поворота спрашиваем, сколько раскладок он не трогает.",
  "It gives a second and independent route to a structural count, so the site can publish two derivations that are required to agree.":
    "Она даёт второй, независимый путь к структурному числу, поэтому сайт может опубликовать два вывода, обязанных совпасть.",
  "The average of three and one at L3, and the 224 typed orbits reconstructed twice over.":
    "Среднее из трёх и одного на L3 и 224 типизированные орбиты, восстановленные дважды.",
  "The zero homomorphism sends every position to P0, and it exists between every pair of levels.":
    "Нулевой гомоморфизм переводит каждую позицию в P0 и существует между любой парой уровней.",
  "A translator who answers every question with the same single word. Perfectly consistent, and useless.":
    "Переводчик, который на любой вопрос отвечает одним и тем же словом. Совершенно последовательно — и бесполезно.",
  "It is why saying that no map exists is almost always the wrong statement. What fails is a map that keeps distinctions.":
    "Поэтому фраза «отображения не существует» почти всегда неверна. Не существует отображения, сохраняющего различия.",
  "The correction printed beside the L3 to L5 rejection, and the empty cells of the transfer matrix.":
    "Уточнение рядом с отклонением L3 → L5 и пустые ячейки матрицы переносов.",
  "Order is how many steps it takes to return to the start, and it has to divide the size of the level.":
    "Порядок — за сколько шагов возвращаешься к началу, и он обязан делить размер уровня.",
  "A gear with three teeth meshes cleanly into one with six, but never into one with five.":
    "Шестерня с тремя зубьями чисто входит в шестерню с шестью, но никогда — в шестерню с пятью.",
  "It converts a question about carrying state between levels into a fact about numbers that can be checked in one line.":
    "Это превращает вопрос о переносе состояния между уровнями в факт о числах, проверяемый в одну строку.",
  "The rule that a nonzero embedding from one level into another exists exactly when the sizes divide.":
    "Правило, по которому ненулевое вложение одного уровня в другой существует ровно тогда, когда их размеры делятся.",
  "The whole current engine written out as one worked pass, from accepted input to recorded receipt.":
    "Весь текущий движок, выписанный как один разобранный проход: от принятого входа до записанного протокола.",
  "A sealed card catalogue: recognise one of two request cards, discard the forbidden card types, pick one shelf, sort reproducibly, and use one card once.":
    "Запечатанный карточный каталог: узнать одну из двух карточек-запросов, отбросить запрещённые типы карточек, выбрать одну полку, отсортировать воспроизводимо и использовать одну карточку один раз.",
  "It is the single place where every published runtime number appears in the order the engine actually applies them.":
    "Это единственное место, где все опубликованные числа среды исполнения появляются в том порядке, в каком движок их действительно применяет.",
  "The narrowing illustration, the descriptor arithmetic table, and the current-scope ledger.":
    "Иллюстрация сужения, таблица арифметики дескрипторов и реестр текущей области действия.",
  "In one line": "Одним предложением",
  "A picture you already know": "Знакомая картинка",
  "Why GALO needs it": "Зачем это нужно GALO",
  "Where you meet it on this site": "Где это встречается на сайте",
  "Complete definition and two independent checks": "Полное определение и две независимые проверки",
  "Related terms": "Смежные термины",
  "Close the explanation": "Закрыть объяснение",
  "Theory chapter": "Глава «Теория»",
  "Mathematics chapter": "Глава «Математика»",
  "Symmetry chapter": "Глава «Симметрии»",
};

export const termsZh: TranslationDictionary = {
  "A pole is one named position a level is allowed to be in — nothing more and nothing less.":
    "极点就是一个层级被允许处在的、有名字的位置——不多也不少。",
  "Think of the floor indicator in a lift. Floor 2 is a position, not a quantity of anything; it only tells you where the lift is right now.":
    "想想电梯里的楼层指示器。2 楼是一个位置，而不是任何东西的数量；它只告诉你电梯此刻在哪里。",
  "GALO refuses to hide its state inside an opaque vector. If a state can be named, it can be printed into a receipt, compared with an earlier run, and disputed by a reviewer who does not trust you.":
    "GALO 拒绝把状态藏进不透明的向量里。一个状态只要能被命名，就能被写进回执、与此前的运行相比较，并被一位并不信任你的评审者提出质疑。",
  "Every table cell, every typed coordinate, and every recorded receipt on this site is written in poles.":
    "本站的每一个表格单元、每一个类型化坐标、每一条已记录的回执，都是用极点写成的。",
  "A level fixes how many distinct positions exist: L3 has three, L7 has seven.":
    "层级规定了存在多少个互不相同的位置：L3 有三个，L7 有七个。",
  "It is the difference between a three-way switch and a seven-position dial. The dial is not cleverer; it simply has more positions to tell apart.":
    "这就像三档开关和七档旋钮之间的差别。旋钮并不更聪明，它只是有更多可以区分的位置。",
  "Resolution should be a decision, not an accident. Writing the level down turns the need for a finer distinction into a statement that someone else can check.":
    "分辨率应当是一个决定，而不是一次偶然。把层级写下来，就把「这里需要更细的区分」变成了一句别人可以核对的陈述。",
  "Levels L1 through L7 appear in every table, in the 560-coordinate count, and in the rules for moving between levels.":
    "从 L1 到 L7 的层级出现在每一张表格里、在 560 个坐标的计数中，以及在层级之间迁移的规则里。",
  "Modulo n means counting that wraps: after the last position you are back at the first.":
    "「模 n」指的是会绕回的计数：走过最后一个位置之后，你又回到第一个。",
  "A clock face. Four hours after ten o'clock is two o'clock, because the count wraps at twelve.":
    "想想钟面。十点过四个小时是两点，因为计数在十二处绕回。",
  "Wraparound keeps every calculation inside the declared finite set. No operation can produce a state that was not declared in advance, so the space of outcomes stays closed.":
    "绕回使任何计算都留在已声明的有限集合之内。任何运算都不可能产生事先未声明的状态，因此结果空间始终是封闭的。",
  "It drives PLUS, it drives the non-reset rows of STAR, and it is the wrap you can see in the dial illustration.":
    "它驱动 PLUS，驱动 STAR 中不触发重置的那些行，也就是刻度盘插图里你看到的那次绕回。",
  "PLUS takes two positions and rotates the first one forward by the index of the second.":
    "PLUS 取两个位置，并把第一个按第二个的索引向前旋转。",
  "Turning a combination dial: start where you are, advance the number of clicks named by the second input, and read where you stopped.":
    "转动密码转盘：从你现在的位置出发，按第二个输入所标的格数向前拨，然后读出停在哪里。",
  "PLUS is the well-behaved half of the kernel. It is associative, commutative and reversible, which makes it safe to reason about in bulk and a fair baseline for judging STAR.":
    "PLUS 是内核中性情温和的那一半。它满足结合律、交换律且可逆，因此可以放心地成批推理，也可作为衡量 STAR 的公平基准。",
  "PLUS fills the symmetric Cayley table, defines the cyclic structure of each level, and anchors every symmetry argument.":
    "PLUS 填满了对称的凯莱表，定义了每个层级的循环结构，并支撑起全部关于对称性的论证。",
  "STAR behaves exactly like PLUS, except that a raw-left P0 forces the answer to P0 before any addition happens.":
    "STAR 的行为与 PLUS 完全一致，只有一点例外：当原始左操作数是 P0 时，结果在任何加法之前就被强制为 P0。",
  "A machine with a safety latch on the left slot. Drop P0 into that slot and the machine stops at P0, whatever sits in the other slot.":
    "一台在左侧插槽上装了保险闩的机器。把 P0 放进那个插槽，无论另一个插槽里是什么，机器都停在 P0。",
  "One asymmetric clause removes commutativity, associativity and the identity element at once. GALO keeps it because a reset that only one side can trigger is exactly what a controlled, revisable state needs.":
    "一条不对称的条款，一次性拿掉了交换律、结合律和单位元。GALO 仍然保留它，因为「只有一侧能触发的重置」正是一个可控且可修订的状态所需要的。",
  "The flat P0 row in the STAR table, the zero-prefix rule, and most of the boundaries on this site follow from this single clause.":
    "STAR 表中那一行平坦的 P0、零前缀规则，以及本站的大多数边界，都源自这一个条款。",
  "A left zero decides the answer whenever it sits in the left slot.": "左零元只要位于左侧插槽，就直接决定了结果。",
  "A cancel button. Once it is pressed, whatever else was typed no longer matters.":
    "取消键。一旦按下，之前输入的一切都不再重要。",
  "It gives the kernel a way to halt a chain that the other operand cannot override. That is the algebraic seed of a reset.":
    "它给了内核一种中止链条的方式，而另一个操作数无法推翻它。这正是重置在代数上的种子。",
  "P0 is the unique left zero of STAR at every level n≥2, which is why the whole P0 row of a STAR table is constant.":
    "在每个 n≥2 的层级上，P0 都是 STAR 唯一的左零元，这正是 STAR 表中整行 P0 保持不变的原因。",
  "A right-neutral element changes nothing when it sits in the right slot.": "右中性元位于右侧插槽时，什么都不改变。",
  "Advancing by zero steps: you stay exactly where you already were.": "前进零步：你恰好还停在原地。",
  "It is the half of an identity that STAR genuinely has. Naming it precisely blocks the much stronger and false claim that STAR has an identity element.":
    "这是 STAR 真正拥有的那一半单位元。把它准确命名，就挡住了一个强得多也错得多的说法——「STAR 有单位元」。",
  "P0 is the unique right-neutral element of STAR; together with the left-zero property it is why STAR has no two-sided identity.":
    "P0 是 STAR 唯一的右中性元；再加上左零元的性质，这正是 STAR 没有双边单位元的原因。",
  "A typed coordinate is the full address of one transition: level, law family, source role, and active role.":
    "类型化坐标是一次转换的完整地址：层级、法则族、源角色和活动角色。",
  "A postal address. The same street number in a different city is a different place, however identical the number looks.":
    "邮政地址。同样的门牌号放在另一座城市就是另一个地方，无论号码看起来多么相同。",
  "Two transitions can land on the same result for completely different reasons. Keeping the address means the reason survives into the record instead of being averaged away.":
    "两次转换可能出于完全不同的原因得到相同的结果。保留地址，就把这个原因带进了记录，而不是把它平均掉。",
  "Identifiers such as L3:STAR_LEFT:P0:P2, the 560-coordinate count, and the guided transition laboratory.":
    "诸如 L3:STAR_LEFT:P0:P2 这样的标识符、560 个坐标的计数，以及那个分步的转换实验室。",
  "A Cayley table lists the result of a two-input rule for every possible pair of inputs.":
    "凯莱表把一条双输入规则在每一对可能输入下的结果全部列出。",
  "The times table you already know, but written for any two-input rule instead of multiplication.":
    "你早已熟悉的乘法表，只不过写给任意的双输入规则，而不只是乘法。",
  "A finite table can be checked exhaustively. Nothing has to be trusted, sampled or estimated: every cell is either right or wrong, and the site regenerates them rather than quoting them.":
    "有限的表格可以被穷尽检查。没有任何东西需要被信任、抽样或估算：每个单元格非对即错，而且本站是重新计算它们，而不是引用它们。",
  "The L3 tables, the coloured field illustration, and the table channel of every glossary entry.":
    "L3 的两张表、彩色色块插图，以及每个词条的表格核对通道。",
  "An automorphism is a reversible renaming of every position that leaves every rule intact.":
    "自同构是一种可逆的重命名：所有位置都换了名字，而每一条规则依然成立。",
  "Relabelling the keys and the locks of a building at the same time. Every key still opens exactly the door it opened before.":
    "同时给大楼里所有的钥匙和门锁重新贴标签。每把钥匙依然只打开它原来打开的那扇门。",
  "It separates distinctions that are structural from distinctions that are only a naming convention — an honesty check on what the mathematics really says.":
    "它把结构性的区分与仅仅是命名约定的区分分开——这是对「数学究竟说了什么」的一次诚实性检查。",
  "The unit multipliers, the eighteen same-level automorphisms summed over L1–L7, and the whole symmetry chapter.":
    "单位乘子、L1–L7 上同层自同构合计十八个，以及整章对称性内容。",
  "An orbit collects everything one object can be turned into by the allowed symmetries.":
    "轨道收集了一个对象在所有被允许的对称变换下可以变成的一切。",
  "The seats you can reach by rotating a round table. Reachable seats form one group; the seats you can never reach form another.":
    "转动圆桌所能到达的座位。能到达的座位构成一组，永远到不了的构成另一组。",
  "Counting orbits counts genuinely different cases instead of counting relabellings of the same case, so a structural total does not get inflated by naming choices.":
    "数轨道，数的是真正不同的情形，而不是同一情形的不同命名，因此结构性的总数不会被命名方式撑大。",
  "The two L3 pole orbits, the 224 typed orbits across the tower, and the Burnside average.":
    "L3 上的两条极点轨道、整座塔上的 224 条类型化轨道，以及伯恩赛德平均。",
  "A homomorphism translates positions from one level to another so that every rule still holds after the translation.":
    "同态把位置从一个层级翻译到另一个层级，并且翻译之后每一条规则依然成立。",
  "A faithful translator. If the original sentence was a question, the translated sentence is still a question.":
    "一位忠实的译者。如果原句是一个问句，译文也依然是问句。",
  "Moving information between levels is exactly where silent corruption would happen. The preservation equation turns that move into something a machine can check cell by cell.":
    "在层级之间搬运信息，正是无声损坏最容易发生的地方。保持性等式把这次搬运变成机器可以逐格核对的检查。",
  "The L2→L4 pass, the L3→L5 rejection, and the zero map that exists between every pair of levels.":
    "L2→L4 的通过、L3→L5 的拒绝，以及在任意一对层级之间都存在的零映射。",
  "An embedding is a homomorphism that also keeps distinct positions distinct.":
    "嵌入是一种同态，而且它还把原本不同的位置保持为不同。",
  "Fitting a small cog inside a large one. It meshes only when the teeth line up exactly; otherwise it does not fit at all.":
    "把小齿轮装进大齿轮里。只有齿距完全对得上才装得进去，否则根本装不进去。",
  "It is the exact condition for carrying a finer state into a coarser system without quietly losing a distinction that a decision depended on.":
    "这正是把更精细的状态搬进更粗的系统、而不悄悄丢掉某个决策所依赖的区分的确切条件。",
  "The divisibility rule, the level-transfer illustration, and the rejected same-index candidate from L3 to L5.":
    "整除规则、层级转移插图，以及那个被拒绝的、从 L3 到 L5 的同索引候选映射。",
  "A receipt is the machine-readable record of what one bounded run checked, executed and concluded.":
    "回执是一条机器可读的记录，写明某一次受限运行检查了什么、执行了什么、得出了什么结论。",
  "A laboratory notebook page: which experiment, which inputs, which result — written down while it happened.":
    "实验记录本上的一页：哪个实验、哪些输入、什么结果——在事情发生的当下写下来。",
  "A claim without a receipt cannot be re-run by somebody who does not trust the person making it. GALO treats that as a defect in the claim, not a detail of the paperwork.":
    "没有回执的主张，无法被一个不信任提出者的人重新运行。GALO 把这看作主张本身的缺陷，而不是文书上的细节。",
  "The recorded walkthrough on the home page, the work ledger, and every check identifier shown on this site.":
    "首页上那次已记录的走查、工作单元台账，以及本站出现的每一个检查标识。",
  "A boundary is an explicit statement that a stronger conclusion is not available yet, together with the reason.":
    "边界是一句明确的声明：更强的结论目前还不成立，并说明原因。",
  "A sign saying the bridge ends here — not a detour sign pretending the road continues.":
    "一块写着「桥到此为止」的牌子，而不是一块假装道路仍在继续的绕行指示牌。",
  "The fastest way to lose a technical reader is to blur the edge of the evidence. Marking the edge is what makes everything inside it worth reading.":
    "让技术读者最快流失的做法，就是把证据的边缘抹糊。把边缘标出来，才让边缘之内的一切值得一读。",
  "Every BOUNDARY status, the open-boundaries column, and the status field of the public claim matrix.":
    "每一个 BOUNDARY 状态、开放边界那一栏，以及公开声明矩阵中的状态字段。",
  "Three separate things: the mathematics that is settled, the engine that runs today, and the architecture still being built.":
    "三件不同的东西：已经确定的数学、今天正在运行的引擎，以及仍在建设中的架构。",
  "A finished blueprint, a working prototype on the bench, and the machine the bench is aiming at. Three real objects in three different states.":
    "一张画完的图纸、工作台上一个能跑的原型，以及这张工作台正朝之努力的那台机器。三个真实存在的东西，处在三种不同的状态。",
  "Most confusion about a research system comes from quoting one layer while the reader assumes another. Keeping them apart is the reason this site exists in its current form.":
    "关于研究型系统的大多数混乱，都来自「引用的是这一层，读者以为的是另一层」。把它们分开，正是本站之所以是现在这个样子的原因。",
  "The four tracks on the evidence page, the FORMAL / CURRENT V4 / TARGET tags, and the claim matrix.":
    "证据页上的四条工作线、FORMAL / CURRENT V4 / TARGET 三个标签，以及声明矩阵。",
  "A carrier is the complete list of positions that exist at one level; nothing outside the list is allowed.":
    "载体就是某个层级上全部存在的位置清单；清单之外的一切都不被允许。",
  "The seat list of one small carousel. If a seat is not on the list, nobody can sit there.":
    "一座小旋转木马的座位清单。清单上没有的座位，谁也坐不上去。",
  "Declaring the whole set up front is what makes exhaustive checking possible: there is no long tail of states that nobody ever enumerated.":
    "正因为整套集合是事先声明好的，穷尽检查才有可能：不会留下一条谁都没有列举过的状态长尾。",
  "The row and column headers of every table, and the size n that every level formula refers to.":
    "每张表格的行标题与列标题，以及每条层级公式所引用的规模 n。",
  "A residue class is the whole family of integers that land on the same position after wrapping.":
    "同余类是一整族整数：它们在绕回之后都落在同一个位置上。",
  "Every moment the clock hand points at three: three today, three next week, fifteen hundred hours. One mark, many moments.":
    "指针指向三点的每一个时刻：今天的三点、下周的三点、十五时。一个刻度，许多时刻。",
  "It explains how a label can carry exact arithmetic without pretending to be a quantity. The label stands for a class, not for a size.":
    "这解释了标签为何能承载精确的算术，却不必假装自己是一个数量：标签代表的是一个类，而不是一个大小。",
  "The correspondence between P_i and the remainder i, and every wraparound in the tables.":
    "P_i 与余数 i 之间的对应关系，以及表格中的每一次绕回。",
  "A binary operation turns exactly two inputs into exactly one output, with no gaps and no choices.":
    "二元运算把恰好两个输入变成恰好一个输出——没有空缺，也没有选择余地。",
  "A vending machine with two slots. The same two coins give the same item, every single time.":
    "一台有两个投币口的自动售货机。同样的两枚硬币，每一次都给出同样的商品。",
  "Determinism is not a nice-to-have here. Replay only means something if identical inputs always produce an identical output.":
    "在这里，确定性不是锦上添花。只有当相同的输入总是给出相同的输出时，重放才有意义。",
  "PLUS and STAR are both binary operations, which is why each one fills a complete square table.":
    "PLUS 与 STAR 都是二元运算，因此各自填满一张完整的方阵表。",
  "Closure means the operation can never send you outside the declared set of positions.":
    "封闭性意味着运算永远不可能把你送出已声明的位置集合之外。",
  "A board game in which no legal move can ever push a piece off the board.":
    "一种棋类游戏：任何合法的走法都不可能把棋子推出棋盘。",
  "Without closure the finite universe would leak, and no exhaustive check over it could be trusted afterwards.":
    "没有封闭性，有限全集就会漏出去，此后对它做的任何穷尽检查都不再可信。",
  "Every cell of every table holds a position from the same level. That is closure, made visible.":
    "每张表格的每个单元格里都是同一层级的位置。这就是看得见的封闭性。",
  "Commutativity asks whether swapping the two inputs leaves the result unchanged.":
    "交换律问的是：把两个输入对调，结果是否保持不变。",
  "Socks then shoes is not the same as shoes then socks. Some orders matter and some do not.":
    "先穿袜子再穿鞋，和先穿鞋再穿袜子并不一样。有些顺序要紧，有些不要紧。",
  "PLUS commutes and STAR does not. That single difference is what makes role placement a real decision instead of bookkeeping.":
    "PLUS 可交换而 STAR 不可交换。正是这一点差别，使角色的摆放成为一个真正的决定，而不只是记账。",
  "The PLUS table is mirror-symmetric across its diagonal; the STAR table visibly is not.":
    "PLUS 表沿对角线镜像对称；STAR 表明显不是。",
  "An identity element leaves every input unchanged, and it must do so from both sides.":
    "单位元让任何输入都保持不变，而且必须两边都如此。",
  "Adding nothing to a shopping basket. The basket is unchanged whichever side you add the nothing on.":
    "往购物篮里加入「什么也不加」。无论从哪一边加，篮子都还是原样。",
  "Claiming an identity where only a one-sided version exists is exactly the kind of small overstatement this project is built to catch.":
    "在只有单侧版本的地方声称存在单位元，正是这个项目要抓住的那类细小夸大。",
  "PLUS has one; STAR has none for n≥2, and the complete non-existence proof is on the theory page.":
    "PLUS 有单位元；n≥2 时 STAR 没有，理论页上给出了完整的不存在性证明。",
  "Four names for how many good properties an operation actually has, from fewest to most.":
    "四个名称，用来说明一个运算究竟具备多少良好性质，由少到多。",
  "A checklist you climb: each rung keeps every requirement below it and adds one more.":
    "一架清单式的阶梯：每一级都保留下面所有的要求，并再加上一条。",
  "Naming the exact rung stops a weaker structure from being described with a stronger word by accident.":
    "点明确切的那一级，就不会有人不小心用一个更强的词去描述一个更弱的结构。",
  "PLUS reaches the top rung; STAR stops on the first one, and the site says so wherever it matters.":
    "PLUS 走到了最高一级；STAR 停在第一级，凡是要紧之处本站都会说明这一点。",
  "The source is the position a transition starts from, tracked as a named role rather than as a slot.":
    "源是一次转换的起始位置，并且它是作为一个有名字的角色被追踪的，而不是作为某个槽位。",
  "On a delivery record the sender stays the sender, even when the form rearranges its fields.":
    "在一张运单上，寄件人始终是寄件人，哪怕表格把字段的位置调换了。",
  "Roles survive rearrangement and slots do not. Keeping the role is how provenance stays attached to a result.":
    "角色经得起重新排列，槽位经不起。保留角色，正是让来源始终附着于结果的办法。",
  "The third field of every typed coordinate, and the LEFT/RIGHT switch in the guided laboratory.":
    "每个类型化坐标的第三个字段，以及分步实验室里的 LEFT/RIGHT 开关。",
  "The active pole is the position applied to the source: the instruction rather than the starting point.":
    "活动极点是施加到源上的那个位置：它是指令，而不是起点。",
  "On a combination lock the source is where the dial stands and the active pole is how far you turn it.":
    "在密码锁上，源是转盘当前停在哪里，活动极点是你把它转多远。",
  "Separating what is being changed from what is doing the changing is the smallest workable model of an action.":
    "把「被改变的东西」和「用来改变的东西」分开，就是一个动作的最小可用模型。",
  "The fourth field of every typed coordinate, and the second control in the guided laboratory.":
    "每个类型化坐标的第四个字段，以及分步实验室里的第二个控件。",
  "Fix one input of a two-input rule and what remains is a one-input map through the table.":
    "把一条双输入规则的其中一个输入固定住，剩下的就是一条穿过表格的单输入映射。",
  "Lock one dial of a combination lock and turn only the other: you trace a single line of outcomes.":
    "锁住密码锁的一个转盘，只转另一个：你就描出了一条结果的单线。",
  "Most questions about what a step can reach are questions about these fixed slices, so the site names them precisely, including where the naming inverts.":
    "关于「一步能到达哪里」的大多数问题，其实都是关于这些固定切片的问题，所以本站精确地为它们命名，包括命名发生反转的那一处。",
  "The ranks computed at L3 with the active pole fixed, and the warning that the interface name and the algebraic name point opposite ways.":
    "在 L3 上固定活动极点后算出的秩，以及那条提醒：界面名称与代数名称指向相反的方向。",
  "Rank counts how many different destinations a fixed one-input map can actually reach.":
    "秩数的是：一个固定的单输入映射，实际上能到达多少个不同的目的地。",
  "A bus route with ten stops printed on the timetable but only four it ever really calls at.":
    "一条公交线路，时刻表上印着十个站，实际却只停靠其中四个。",
  "It measures how much a step can still distinguish. A drop in rank is a loss of resolution you can see and count.":
    "它衡量的是一步还能区分多少东西。秩的下降，就是一次看得见、数得清的分辨率损失。",
  "The L3 comparison where one orientation reaches two positions and the other reaches all three.":
    "L3 上的那个对比：一种方向只到达两个位置，另一种到达全部三个。",
  "The 560 figure is one exhaustive count of addresses: input pairs first, then laws, then role placements.":
    "560 这个数字是一次穷尽的地址计数：先数输入对，再数法则，最后数角色摆放。",
  "Counting a warehouse by aisle, then shelf, then bin. Three independent multiplications, one total.":
    "按通道、再按货架、再按格位来清点仓库。三次独立的相乘，一个总数。",
  "A number anyone can recount from the definitions cannot quietly drift into being a marketing figure.":
    "一个人人都能照着定义重新数一遍的数字，不会悄悄变成一个营销数字。",
  "The per-level bar chart, and the 140 to 280 to 560 to 556 chain printed beneath it.":
    "各层级贡献的柱状图，以及印在图下方的 140 → 280 → 560 → 556 这条链。",
  "A signature lists the operations a structure offers and how many inputs each one takes.":
    "签名列出一个结构提供了哪些运算，以及每个运算各取几个输入。",
  "The button panel of a machine: two two-handed levers and one fixed marked position.":
    "一台机器的按钮面板：两根需要双手操作的拉杆，以及一个固定的标记位置。",
  "Comparing two structures only means something once both are described with the same vocabulary of operations.":
    "只有当两个结构用同一套运算词汇来描述时，比较它们才有意义。",
  "The shorthand (2,2,0) for the full algebra: PLUS, STAR, and the named constant P0.":
    "完整代数的简写 (2,2,0)：PLUS、STAR，以及有名字的常量 P0。",
  "Composition feeds the output of one step into the input of the next, forming a tree of steps.":
    "复合把上一步的输出送进下一步的输入，从而形成一棵步骤之树。",
  "A recipe in which the contents of one bowl become an ingredient in the next bowl.":
    "一份食谱：上一个碗里的东西，成了下一个碗里的原料。",
  "A single step is one cell; a plan is a tree. Writing the tree down is what turns a sequence of actions into something auditable.":
    "一步是一个单元格；一个计划是一棵树。把树写下来，才让一串动作变成可审计的东西。",
  "The two bracketed L3 programs, and the boundary stating that the current engine executes one step and not a tree.":
    "L3 上那两个带括号的程序，以及那条边界：当前引擎执行的是一步，而不是一棵树。",
  "Nonassociative means the brackets matter: regrouping the same inputs can change the answer.":
    "不结合意味着括号很重要：把同样的输入重新分组，答案可能就变了。",
  "Ordinary subtraction does it too. Eight minus three minus two is not eight minus one.":
    "普通的减法也是如此：八减三再减二，并不等于八减一。",
  "If brackets change the outcome, a plan cannot be stored as a flat list. The structure has to be written down and carried.":
    "如果括号会改变结果，计划就不能被存成一个扁平的列表。结构必须被写下来并被带着走。",
  "The pair of L3 trees that return P2 and P1 from the very same three inputs.":
    "L3 上那一对树：同样的三个输入，一个给出 P2，另一个给出 P1。",
  "Associativity is permission to move the brackets while keeping the input order fixed.":
    "结合律是一种许可：在输入顺序不变的前提下移动括号。",
  "Stacking boxes: taping the first two together first or the last two first leaves the same stack.":
    "码放箱子：先把前两个粘在一起，还是先把后两个粘在一起，堆出来都是同一摞。",
  "It is the property that lets long chains be evaluated in any convenient order, and precisely the property STAR gives up.":
    "正是这条性质，使长链条可以按任何方便的顺序求值——而这恰恰是 STAR 放弃掉的性质。",
  "PLUS has it at every level; the STAR counterexample is worked out in full on the theory page.":
    "PLUS 在每个层级上都具备它；STAR 的反例在理论页上被完整地演算了一遍。",
  "In a left-to-right STAR chain, once a running prefix reaches P0 every later value stays P0.":
    "在从左到右的 STAR 链条中：一旦运行中的前缀到达 P0，其后的每一个值都停留在 P0。",
  "A latch that clicks shut. Nothing further down the line can unlatch it.":
    "一个已经扣上的卡扣。链条后面的任何东西都无法再把它松开。",
  "It shows that history matters: a final total tells you nothing about whether the chain already reset along the way.":
    "这说明历史是要紧的：最后的总和，完全说明不了链条中途是否已经重置过。",
  "The worked L5 chain where the ordinary sum and the STAR result disagree.":
    "L5 上那条演算过的链条：普通求和与 STAR 的结果并不一致。",
  "Catalan numbers count how many different bracketings a fixed row of inputs admits.":
    "卡塔兰数数的是：一列固定的输入，一共允许多少种不同的加括号方式。",
  "The number of ways to pair up parentheses along a line without any pair ever crossing another.":
    "在一行里为括号配对的方式数，且任何一对都不与另一对交叉。",
  "It puts an exact size on the space of possible plans, so plan structure becomes a counted object instead of a vague one.":
    "它给出了可能计划所构成空间的确切规模，于是计划的结构成为一个被数清的对象，而不是一个含糊的东西。",
  "The 1, 2, 5, 14 progression for two, three, four, and five operands.":
    "对应两个、三个、四个、五个操作数的 1、2、5、14 这一串数。",
  "A group action is a full set of reversible moves together with the rule for combining them.":
    "群作用是一整套可逆的动作，外加把它们组合起来的规则。",
  "The rotations of a dial, plus the fact that performing two rotations is itself a rotation.":
    "刻度盘的各种旋转，再加上「两次旋转合起来仍是一次旋转」这一事实。",
  "A symmetry claim only means something once the acting set is declared. Naming the action is what keeps orbit counts honest.":
    "只有当作用的那一组被声明出来，关于对称的说法才有意义。把作用点名，正是让轨道计数保持诚实的办法。",
  "The unit multipliers acting at each level, and the two-element action at L3.":
    "在每个层级上作用的单位乘子，以及 L3 上那个两元素的作用。",
  "The stabilizer of an object is the set of moves that leave it exactly where it was.":
    "一个对象的稳定子，就是那些让它原地不动的动作所组成的集合。",
  "The rotations of a square that leave one particular corner in place.":
    "正方形的那些旋转：它们让某一个特定的角保持不动。",
  "Orbit size multiplied by stabilizer size gives the size of the whole group, which turns counting into arithmetic instead of guesswork.":
    "轨道的大小乘以稳定子的大小，就等于整个群的大小，于是计数变成算术，而不是猜测。",
  "The L3 check where only the identity fixes P1, matching its two-element orbit.":
    "L3 上的那次核对：只有恒等变换让 P1 不动，这与它两个元素的轨道相吻合。",
  "Burnside counts distinct cases by averaging how many objects each move leaves untouched.":
    "伯恩赛德引理通过对「每个动作保持不动的对象数」取平均，来数出真正不同的情形。",
  "Counting genuinely different bead necklaces by asking, for each rotation, how many arrangements it leaves alone.":
    "数出真正不同的串珠项链：对每一次旋转，问它让多少种排列保持原样。",
  "It gives a second and independent route to a structural count, so the site can publish two derivations that are required to agree.":
    "它给出了通向同一个结构性数目的第二条、彼此独立的路径，因此本站可以公布两条必须一致的推导。",
  "The average of three and one at L3, and the 224 typed orbits reconstructed twice over.":
    "L3 上三与一的平均，以及被两次重建出来的 224 条类型化轨道。",
  "The zero homomorphism sends every position to P0, and it exists between every pair of levels.":
    "零同态把每一个位置都送到 P0，而且它在任意一对层级之间都存在。",
  "A translator who answers every question with the same single word. Perfectly consistent, and useless.":
    "一个不论问什么都用同一个词回答的译者。完全一致，也完全没用。",
  "It is why saying that no map exists is almost always the wrong statement. What fails is a map that keeps distinctions.":
    "所以「不存在映射」这句话几乎总是错的。真正不存在的，是能保住区分的那种映射。",
  "The correction printed beside the L3 to L5 rejection, and the empty cells of the transfer matrix.":
    "印在 L3 → L5 拒绝旁边的那处更正，以及转移矩阵中的空白单元格。",
  "Order is how many steps it takes to return to the start, and it has to divide the size of the level.":
    "阶就是走多少步才回到起点，而它必须整除该层级的规模。",
  "A gear with three teeth meshes cleanly into one with six, but never into one with five.":
    "三齿的齿轮能干净地啮合进六齿的齿轮，却永远啮合不进五齿的。",
  "It converts a question about carrying state between levels into a fact about numbers that can be checked in one line.":
    "它把「状态能否在层级之间搬运」这个问题，变成一条关于数字的事实，一行就能核对。",
  "The rule that a nonzero embedding from one level into another exists exactly when the sizes divide.":
    "那条规则：从一个层级到另一个层级的非零嵌入，恰好在两者规模整除时才存在。",
  "The whole current engine written out as one worked pass, from accepted input to recorded receipt.":
    "把当前整个引擎写成一次完整走查：从被接受的输入，一直到被记录下来的回执。",
  "A sealed card catalogue: recognise one of two request cards, discard the forbidden card types, pick one shelf, sort reproducibly, and use one card once.":
    "一个封存的卡片目录：认出两张请求卡中的一张，剔除被禁止的卡片类型，选定一层书架，可复现地排序，然后把一张卡片用一次。",
  "It is the single place where every published runtime number appears in the order the engine actually applies them.":
    "这是唯一一处，把所有已公布的运行时数字，按引擎实际施加它们的顺序摆出来。",
  "The narrowing illustration, the descriptor arithmetic table, and the current-scope ledger.":
    "那张收窄示意图、描述符算术表，以及当前范围的台账。",
  "In one line": "一句话说清",
  "A picture you already know": "一个你已经熟悉的画面",
  "Why GALO needs it": "GALO 为什么需要它",
  "Where you meet it on this site": "你会在本站的哪些地方遇到它",
  "Complete definition and two independent checks": "完整定义与两条独立核对",
  "Related terms": "相关术语",
  "Close the explanation": "关闭说明",
  "Theory chapter": "理论章节",
  "Mathematics chapter": "数学章节",
  "Symmetry chapter": "对称性章节",
};

export const termsAr: TranslationDictionary = {
  "A pole is one named position a level is allowed to be in — nothing more and nothing less.":
    "القطب موضع واحد مُسمّى يُسمح للمستوى بأن يكون فيه، لا أكثر ولا أقل.",
  "Think of the floor indicator in a lift. Floor 2 is a position, not a quantity of anything; it only tells you where the lift is right now.":
    "تخيّل مؤشر الطوابق في المصعد. الطابق 2 موضع، لا كمية لشيء ما؛ فهو يخبرك فقط أين المصعد الآن.",
  "GALO refuses to hide its state inside an opaque vector. If a state can be named, it can be printed into a receipt, compared with an earlier run, and disputed by a reviewer who does not trust you.":
    "يرفض GALO إخفاء حالته داخل متجه غير شفاف. فالحالة التي يمكن تسميتها يمكن طباعتها في إيصال، ومقارنتها بتشغيل سابق، والاعتراض عليها من مراجع لا يثق بك.",
  "Every table cell, every typed coordinate, and every recorded receipt on this site is written in poles.":
    "كل خلية جدول وكل إحداثي محدد النوع وكل إيصال مسجَّل في هذا الموقع مكتوب بالأقطاب.",
  "A level fixes how many distinct positions exist: L3 has three, L7 has seven.":
    "المستوى يحدد عدد المواضع المتمايزة الموجودة: L3 فيه ثلاثة، وL7 فيه سبعة.",
  "It is the difference between a three-way switch and a seven-position dial. The dial is not cleverer; it simply has more positions to tell apart.":
    "هو الفرق بين مفتاح ثلاثي الأوضاع وقرص بسبعة مواضع. القرص ليس أذكى، بل لديه فقط مواضع أكثر يمكن التمييز بينها.",
  "Resolution should be a decision, not an accident. Writing the level down turns the need for a finer distinction into a statement that someone else can check.":
    "ينبغي أن تكون الدقة قرارًا لا مصادفة. وتدوين المستوى يحوّل الحاجة إلى تمييز أدقّ إلى عبارة يستطيع غيرك التحقق منها.",
  "Levels L1 through L7 appear in every table, in the 560-coordinate count, and in the rules for moving between levels.":
    "تظهر المستويات من L1 إلى L7 في كل جدول، وفي عدّ الإحداثيات البالغ 560، وفي قواعد الانتقال بين المستويات.",
  "Modulo n means counting that wraps: after the last position you are back at the first.":
    "«بالمقياس n» يعني عدًّا يلتف: بعد الموضع الأخير تعود إلى الأول.",
  "A clock face. Four hours after ten o'clock is two o'clock, because the count wraps at twelve.":
    "وجه الساعة. فبعد أربع ساعات من العاشرة تصبح الثانية، لأن العدّ يلتف عند الاثنتي عشرة.",
  "Wraparound keeps every calculation inside the declared finite set. No operation can produce a state that was not declared in advance, so the space of outcomes stays closed.":
    "يبقي الالتفافُ كلَّ عملية حسابية داخل المجموعة المنتهية المعلَنة. فلا يمكن لأي عملية أن تنتج حالة لم تُعلَن مسبقًا، ويبقى فضاء النتائج مغلقًا.",
  "It drives PLUS, it drives the non-reset rows of STAR, and it is the wrap you can see in the dial illustration.":
    "هو ما يحرّك PLUS، ويحرّك صفوف STAR التي لا تُعيد الضبط، وهو الالتفاف الذي تراه في رسم القرص.",
  "PLUS takes two positions and rotates the first one forward by the index of the second.":
    "يأخذ PLUS موضعين ويدير الأول إلى الأمام بمقدار دليل الثاني.",
  "Turning a combination dial: start where you are, advance the number of clicks named by the second input, and read where you stopped.":
    "إدارة قرص التشفير: ابدأ من حيث أنت، وتقدّم بعدد النقرات الذي يسميه المدخل الثاني، ثم اقرأ أين توقفت.",
  "PLUS is the well-behaved half of the kernel. It is associative, commutative and reversible, which makes it safe to reason about in bulk and a fair baseline for judging STAR.":
    "PLUS هو النصف حسن السلوك من النواة. فهو تجميعي وإبدالي وقابل للعكس، ما يجعل الاستدلال عليه بالجملة آمنًا ويجعله أساسًا عادلًا للحكم على STAR.",
  "PLUS fills the symmetric Cayley table, defines the cyclic structure of each level, and anchors every symmetry argument.":
    "يملأ PLUS جدول كايلي المتماثل، ويحدد البنية الدورية لكل مستوى، ويرسي كل حجج التناظر.",
  "STAR behaves exactly like PLUS, except that a raw-left P0 forces the answer to P0 before any addition happens.":
    "يتصرف STAR تمامًا كما يتصرف PLUS، إلا في أمر واحد: المعامل الأيسر الخام P0 يفرض أن تكون النتيجة P0 قبل أي جمع.",
  "A machine with a safety latch on the left slot. Drop P0 into that slot and the machine stops at P0, whatever sits in the other slot.":
    "آلة فيها مزلاج أمان على الفتحة اليسرى. ضع P0 في تلك الفتحة فتتوقف الآلة عند P0 مهما كان في الفتحة الأخرى.",
  "One asymmetric clause removes commutativity, associativity and the identity element at once. GALO keeps it because a reset that only one side can trigger is exactly what a controlled, revisable state needs.":
    "شرط واحد غير متماثل يزيل الإبدالية والتجميعية والعنصر المحايد دفعةً واحدة. ويحتفظ GALO به لأن إعادة ضبط لا يطلقها إلا طرف واحد هي بالضبط ما تحتاجه حالة مضبوطة وقابلة للمراجعة.",
  "The flat P0 row in the STAR table, the zero-prefix rule, and most of the boundaries on this site follow from this single clause.":
    "الصف المسطح P0 في جدول STAR، وقاعدة البادئة الصفرية، ومعظم الحدود في هذا الموقع، كلها تنبع من هذا الشرط الوحيد.",
  "A left zero decides the answer whenever it sits in the left slot.":
    "الصفر الأيسر يحدد الجواب كلما وُضع في الفتحة اليسرى.",
  "A cancel button. Once it is pressed, whatever else was typed no longer matters.":
    "زر الإلغاء. فما إن يُضغط حتى يفقد كل ما أُدخل قبله أهميته.",
  "It gives the kernel a way to halt a chain that the other operand cannot override. That is the algebraic seed of a reset.":
    "يمنح النواة وسيلة لإيقاف السلسلة لا يستطيع المعامل الآخر تجاوزها. وهذه هي البذرة الجبرية لإعادة الضبط.",
  "P0 is the unique left zero of STAR at every level n≥2, which is why the whole P0 row of a STAR table is constant.":
    "P0 هو الصفر الأيسر الوحيد لـ STAR عند كل مستوى n≥2، ولهذا يكون صف P0 كاملًا في جدول STAR ثابتًا.",
  "A right-neutral element changes nothing when it sits in the right slot.":
    "العنصر المحايد من اليمين لا يغيّر شيئًا حين يكون في الفتحة اليمنى.",
  "Advancing by zero steps: you stay exactly where you already were.": "التقدّم بمقدار صفر خطوة: تبقى تمامًا حيث كنت.",
  "It is the half of an identity that STAR genuinely has. Naming it precisely blocks the much stronger and false claim that STAR has an identity element.":
    "هذا هو نصف العنصر المحايد الذي يملكه STAR فعلًا. وتسميته بدقة تسدّ الطريق أمام ادعاء أقوى بكثير وكاذب بأن لـ STAR عنصرًا محايدًا.",
  "P0 is the unique right-neutral element of STAR; together with the left-zero property it is why STAR has no two-sided identity.":
    "P0 هو العنصر المحايد الوحيد من اليمين لـ STAR؛ ومع خاصية الصفر الأيسر يتبيّن لماذا لا يملك STAR عنصرًا محايدًا من الجهتين.",
  "A typed coordinate is the full address of one transition: level, law family, source role, and active role.":
    "الإحداثي محدد النوع هو العنوان الكامل لانتقال واحد: المستوى، وعائلة القانون، ودور المصدر، ودور الفعّال.",
  "A postal address. The same street number in a different city is a different place, however identical the number looks.":
    "عنوان بريدي. فالرقم نفسه في مدينة أخرى مكان مختلف، مهما بدا الرقم متطابقًا.",
  "Two transitions can land on the same result for completely different reasons. Keeping the address means the reason survives into the record instead of being averaged away.":
    "قد ينتهي انتقالان إلى النتيجة نفسها لأسباب مختلفة تمامًا. والاحتفاظ بالعنوان ينقل ذلك السبب إلى السجل بدل أن يُذوّبه في متوسط.",
  "Identifiers such as L3:STAR_LEFT:P0:P2, the 560-coordinate count, and the guided transition laboratory.":
    "معرّفات مثل L3:STAR_LEFT:P0:P2، وعدّ الإحداثيات البالغ 560، ومختبر الانتقالات الموجَّه.",
  "A Cayley table lists the result of a two-input rule for every possible pair of inputs.":
    "جدول كايلي يسرد نتيجة قاعدة ذات مدخلين لكل زوج ممكن من المدخلات.",
  "The times table you already know, but written for any two-input rule instead of multiplication.":
    "جدول الضرب المألوف لديك، لكنه مكتوب لأي قاعدة ذات مدخلين لا للضرب وحده.",
  "A finite table can be checked exhaustively. Nothing has to be trusted, sampled or estimated: every cell is either right or wrong, and the site regenerates them rather than quoting them.":
    "الجدول المنتهي يمكن فحصه بالكامل. فلا شيء يحتاج إلى ثقة أو معاينة عيّنة أو تقدير: كل خلية إما صحيحة أو خاطئة، والموقع يعيد توليدها بدل أن يقتبسها.",
  "The L3 tables, the coloured field illustration, and the table channel of every glossary entry.":
    "جدولا L3، والرسم الملوَّن للحقلين، وقناة الجدول في كل مدخل من مداخل المسرد.",
  "An automorphism is a reversible renaming of every position that leaves every rule intact.":
    "التشاكل الذاتي إعادة تسمية عكوسة لكل المواضع تُبقي كل قاعدة على حالها.",
  "Relabelling the keys and the locks of a building at the same time. Every key still opens exactly the door it opened before.":
    "إعادة ترقيم كل المفاتيح والأقفال في مبنى في الوقت نفسه. فيظل كل مفتاح يفتح الباب ذاته الذي كان يفتحه.",
  "It separates distinctions that are structural from distinctions that are only a naming convention — an honesty check on what the mathematics really says.":
    "يفصل التمييزات البنيوية عن تلك التي ليست سوى اصطلاح تسمية، وهو اختبار أمانة لما تقوله الرياضيات فعلًا.",
  "The unit multipliers, the eighteen same-level automorphisms summed over L1–L7, and the whole symmetry chapter.":
    "المضاعِفات الوحدوية، والتشاكلات الذاتية الثمانية عشر داخل المستويات مجموعةً من L1 إلى L7، وفصل التناظر كله.",
  "An orbit collects everything one object can be turned into by the allowed symmetries.":
    "المدار يجمع كل ما يمكن أن يتحول إليه كائن واحد بفعل التناظرات المسموح بها.",
  "The seats you can reach by rotating a round table. Reachable seats form one group; the seats you can never reach form another.":
    "المقاعد التي يمكن بلوغها بإدارة طاولة مستديرة. فالمقاعد التي تُبلَغ تشكّل مجموعة، وتلك التي لا تُبلَغ أبدًا تشكّل أخرى.",
  "Counting orbits counts genuinely different cases instead of counting relabellings of the same case, so a structural total does not get inflated by naming choices.":
    "عدّ المدارات يعدّ الحالات المختلفة فعلًا لا إعادات تسمية الحالة نفسها، فلا ينتفخ المجموع البنيوي بسبب اختيارات التسمية.",
  "The two L3 pole orbits, the 224 typed orbits across the tower, and the Burnside average.":
    "مدارا القطبين عند L3، والمدارات المحددة النوع البالغة 224 عبر البرج كله، ومتوسط برنسايد.",
  "A homomorphism translates positions from one level to another so that every rule still holds after the translation.":
    "التشاكل يترجم المواضع من مستوى إلى آخر بحيث تبقى كل قاعدة صحيحة بعد الترجمة.",
  "A faithful translator. If the original sentence was a question, the translated sentence is still a question.":
    "مترجم أمين. فإن كانت الجملة الأصلية سؤالًا، بقيت الجملة المترجمة سؤالًا.",
  "Moving information between levels is exactly where silent corruption would happen. The preservation equation turns that move into something a machine can check cell by cell.":
    "نقل المعلومات بين المستويات هو بالضبط الموضع الذي قد يحدث فيه فساد صامت. ومعادلة الحفظ تحوّل ذلك النقل إلى فحص تجريه الآلة خلية خلية.",
  "The L2→L4 pass, the L3→L5 rejection, and the zero map that exists between every pair of levels.":
    "نجاح L2→L4، ورفض L3→L5، والتطبيق الصفري الموجود بين كل زوج من المستويات.",
  "An embedding is a homomorphism that also keeps distinct positions distinct.":
    "التضمين تشاكل يحافظ أيضًا على تمايز المواضع المتمايزة.",
  "Fitting a small cog inside a large one. It meshes only when the teeth line up exactly; otherwise it does not fit at all.":
    "إدخال ترس صغير داخل ترس كبير. فهو لا يتعشّق إلا إذا تطابقت الأسنان تمامًا، وإلا فلا يدخل أصلًا.",
  "It is the exact condition for carrying a finer state into a coarser system without quietly losing a distinction that a decision depended on.":
    "هذا هو الشرط الدقيق لنقل حالة أدقّ إلى نظام أخشن دون أن يضيع بصمت تمييز كان قرار ما يعتمد عليه.",
  "The divisibility rule, the level-transfer illustration, and the rejected same-index candidate from L3 to L5.":
    "قاعدة القابلية للقسمة، ورسم الانتقال بين المستويات، والمرشح المرفوض ذو الدليل نفسه من L3 إلى L5.",
  "A receipt is the machine-readable record of what one bounded run checked, executed and concluded.":
    "الإيصال سجل مقروء آليًا لما فحصه تشغيل مقيَّد واحد وما نفّذه وما انتهى إليه.",
  "A laboratory notebook page: which experiment, which inputs, which result — written down while it happened.":
    "صفحة من دفتر مختبر: أي تجربة، وأي مدخلات، وأي نتيجة — مكتوبة لحظة حدوثها.",
  "A claim without a receipt cannot be re-run by somebody who does not trust the person making it. GALO treats that as a defect in the claim, not a detail of the paperwork.":
    "الادعاء بلا إيصال لا يستطيع من لا يثق بصاحبه إعادة تشغيله. ويعدّ GALO ذلك عيبًا في الادعاء نفسه لا تفصيلًا إداريًا.",
  "The recorded walkthrough on the home page, the work ledger, and every check identifier shown on this site.":
    "الجولة المسجَّلة في الصفحة الرئيسية، ودفتر وحدات العمل، وكل معرّف فحص يظهر في هذا الموقع.",
  "A boundary is an explicit statement that a stronger conclusion is not available yet, together with the reason.":
    "الحد إعلان صريح بأن استنتاجًا أقوى غير متاح بعد، مع ذكر السبب.",
  "A sign saying the bridge ends here — not a detour sign pretending the road continues.":
    "لافتة تقول إن الجسر ينتهي هنا، لا لافتة تحويل توهم بأن الطريق مستمر.",
  "The fastest way to lose a technical reader is to blur the edge of the evidence. Marking the edge is what makes everything inside it worth reading.":
    "أسرع طريقة لفقدان قارئ تقني هي تمييع حافة الأدلة. وتحديد الحافة هو ما يجعل كل ما بداخلها جديرًا بالقراءة.",
  "Every BOUNDARY status, the open-boundaries column, and the status field of the public claim matrix.":
    "كل حالة BOUNDARY، وعمود الحدود المفتوحة، وحقل الحالة في مصفوفة الادعاءات العامة.",
  "Three separate things: the mathematics that is settled, the engine that runs today, and the architecture still being built.":
    "ثلاثة أشياء منفصلة: الرياضيات المستقرة، والمحرّك العامل اليوم، والبنية التي ما تزال قيد البناء.",
  "A finished blueprint, a working prototype on the bench, and the machine the bench is aiming at. Three real objects in three different states.":
    "مخطط منجز، ونموذج أولي يعمل على الطاولة، والآلة التي تسعى إليها تلك الطاولة. ثلاثة أشياء حقيقية في ثلاث حالات مختلفة.",
  "Most confusion about a research system comes from quoting one layer while the reader assumes another. Keeping them apart is the reason this site exists in its current form.":
    "معظم الالتباس حول أي نظام بحثي ينشأ من اقتباس طبقة بينما يفترض القارئ طبقة أخرى. والفصل بينها هو سبب وجود هذا الموقع بشكله الحالي.",
  "The four tracks on the evidence page, the FORMAL / CURRENT V4 / TARGET tags, and the claim matrix.":
    "المسارات الأربعة في صفحة الأدلة، والوسوم FORMAL / CURRENT V4 / TARGET، ومصفوفة الادعاءات.",
  "A carrier is the complete list of positions that exist at one level; nothing outside the list is allowed.":
    "الحامل هو القائمة الكاملة للمواضع الموجودة في مستوى واحد؛ ولا يُسمح بشيء خارج القائمة.",
  "The seat list of one small carousel. If a seat is not on the list, nobody can sit there.":
    "قائمة مقاعد دوّامة صغيرة. فالمقعد الذي لا يرد في القائمة لا يستطيع أحد الجلوس عليه.",
  "Declaring the whole set up front is what makes exhaustive checking possible: there is no long tail of states that nobody ever enumerated.":
    "الإعلان عن المجموعة كاملة مسبقًا هو ما يجعل الفحص الشامل ممكنًا: فلا يبقى ذيل طويل من الحالات لم يحصها أحد.",
  "The row and column headers of every table, and the size n that every level formula refers to.":
    "عناوين الصفوف والأعمدة في كل جدول، والحجم n الذي تشير إليه كل صيغة مستوى.",
  "A residue class is the whole family of integers that land on the same position after wrapping.":
    "فئة البواقي هي عائلة كاملة من الأعداد الصحيحة تقع كلها على الموضع نفسه بعد الالتفاف.",
  "Every moment the clock hand points at three: three today, three next week, fifteen hundred hours. One mark, many moments.":
    "كل لحظة يشير فيها عقرب الساعة إلى الثالثة: اليوم، والأسبوع القادم، والساعة الخامسة عشرة. علامة واحدة ولحظات كثيرة.",
  "It explains how a label can carry exact arithmetic without pretending to be a quantity. The label stands for a class, not for a size.":
    "هذا يفسّر كيف تحمل التسمية حسابًا دقيقًا دون أن تدّعي أنها كمية: فالتسمية تمثل فئة لا مقدارًا.",
  "The correspondence between P_i and the remainder i, and every wraparound in the tables.":
    "التناظر بين P_i والباقي i، وكل التفاف في الجداول.",
  "A binary operation turns exactly two inputs into exactly one output, with no gaps and no choices.":
    "العملية الثنائية تحوّل مدخلين اثنين بالضبط إلى مخرج واحد بالضبط، بلا ثغرات وبلا خيارات.",
  "A vending machine with two slots. The same two coins give the same item, every single time.":
    "آلة بيع فيها فتحتان. العملتان نفساهما تعطيان المنتج نفسه في كل مرة.",
  "Determinism is not a nice-to-have here. Replay only means something if identical inputs always produce an identical output.":
    "الحتمية هنا ليست ميزة إضافية. فإعادة التشغيل لا معنى لها إلا إذا كانت المدخلات المتطابقة تعطي دائمًا مخرجًا متطابقًا.",
  "PLUS and STAR are both binary operations, which is why each one fills a complete square table.":
    "كل من PLUS وSTAR عملية ثنائية، ولذلك يملأ كل منهما جدولًا مربعًا كاملًا.",
  "Closure means the operation can never send you outside the declared set of positions.":
    "الانغلاق يعني أن العملية لا يمكنها أبدًا أن تخرج بك عن مجموعة المواضع المعلَنة.",
  "A board game in which no legal move can ever push a piece off the board.":
    "لعبة لوحية لا يمكن لأي نقلة مشروعة فيها أن تدفع القطعة خارج اللوح.",
  "Without closure the finite universe would leak, and no exhaustive check over it could be trusted afterwards.":
    "بلا انغلاق يتسرب الكون المنتهي، ولا يعود أي فحص شامل عليه جديرًا بالثقة.",
  "Every cell of every table holds a position from the same level. That is closure, made visible.":
    "كل خلية في كل جدول تحمل موضعًا من المستوى نفسه. هذا هو الانغلاق مجسَّدًا.",
  "Commutativity asks whether swapping the two inputs leaves the result unchanged.":
    "الإبدالية تسأل: هل تبقى النتيجة كما هي إذا بادلنا بين المدخلين؟",
  "Socks then shoes is not the same as shoes then socks. Some orders matter and some do not.":
    "الجوارب ثم الحذاء ليس كالحذاء ثم الجوارب. فبعض الترتيبات مهمة وبعضها لا.",
  "PLUS commutes and STAR does not. That single difference is what makes role placement a real decision instead of bookkeeping.":
    "PLUS إبدالي وSTAR ليس كذلك. وهذا الفارق وحده يجعل ترتيب الأدوار قرارًا حقيقيًا لا مجرد إجراء دفتري.",
  "The PLUS table is mirror-symmetric across its diagonal; the STAR table visibly is not.":
    "جدول PLUS متماثل مرآويًا حول قطره؛ أما جدول STAR فليس كذلك بوضوح.",
  "An identity element leaves every input unchanged, and it must do so from both sides.":
    "العنصر المحايد يترك أي مدخل دون تغيير، ويجب أن يفعل ذلك من الجهتين.",
  "Adding nothing to a shopping basket. The basket is unchanged whichever side you add the nothing on.":
    "إضافة لا شيء إلى سلة التسوق. تبقى السلة كما هي مهما كانت الجهة التي أضفت منها هذا اللاشيء.",
  "Claiming an identity where only a one-sided version exists is exactly the kind of small overstatement this project is built to catch.":
    "ادعاء وجود عنصر محايد حيث لا توجد إلا نسخة أحادية الجهة هو بالضبط نوع المبالغة الصغيرة التي بُني هذا المشروع لالتقاطها.",
  "PLUS has one; STAR has none for n≥2, and the complete non-existence proof is on the theory page.":
    "لدى PLUS عنصر محايد؛ ولا يملك STAR واحدًا عند n≥2، والبرهان الكامل على عدم وجوده منشور في صفحة النظرية.",
  "Four names for how many good properties an operation actually has, from fewest to most.":
    "أربعة أسماء تصف كم من الخصائص الجيدة تملكها العملية فعلًا، من الأقل إلى الأكثر.",
  "A checklist you climb: each rung keeps every requirement below it and adds one more.":
    "سُلَّم من قائمة تحقّق: كل درجة تحتفظ بكل شروط ما دونها وتضيف شرطًا آخر.",
  "Naming the exact rung stops a weaker structure from being described with a stronger word by accident.":
    "تسمية الدرجة بدقة تمنع وصف بنية أضعف بكلمة أقوى عن غير قصد.",
  "PLUS reaches the top rung; STAR stops on the first one, and the site says so wherever it matters.":
    "يبلغ PLUS الدرجة العليا؛ ويتوقف STAR عند الأولى، ويذكر الموقع ذلك في كل موضع يهمّ فيه.",
  "The source is the position a transition starts from, tracked as a named role rather than as a slot.":
    "المصدر هو الموضع الذي يبدأ منه الانتقال، ويُتتبَّع بوصفه دورًا مُسمّى لا فتحةً.",
  "On a delivery record the sender stays the sender, even when the form rearranges its fields.":
    "في إيصال الشحن يبقى المرسِل مرسِلًا، حتى لو أعاد النموذج ترتيب حقوله.",
  "Roles survive rearrangement and slots do not. Keeping the role is how provenance stays attached to a result.":
    "الأدوار تصمد أمام إعادة الترتيب، والفتحات لا تصمد. والاحتفاظ بالدور هو ما يبقي المصدر ملتصقًا بالنتيجة.",
  "The third field of every typed coordinate, and the LEFT/RIGHT switch in the guided laboratory.":
    "الحقل الثالث في كل إحداثي محدد النوع، ومفتاح LEFT/RIGHT في المختبر الموجَّه.",
  "The active pole is the position applied to the source: the instruction rather than the starting point.":
    "القطب الفعّال هو الموضع المطبَّق على المصدر: أي التعليمة لا نقطة الانطلاق.",
  "On a combination lock the source is where the dial stands and the active pole is how far you turn it.":
    "في قفل التوليفة، المصدر هو موضع القرص الآن، والقطب الفعّال هو مقدار ما تديره.",
  "Separating what is being changed from what is doing the changing is the smallest workable model of an action.":
    "الفصل بين ما يجري تغييره وما يُجري التغيير هو أصغر نموذج صالح للإجراء.",
  "The fourth field of every typed coordinate, and the second control in the guided laboratory.":
    "الحقل الرابع في كل إحداثي محدد النوع، والمتحكم الثاني في المختبر الموجَّه.",
  "Fix one input of a two-input rule and what remains is a one-input map through the table.":
    "ثبّت أحد مدخلَي قاعدة ذات مدخلين، فيتبقى تطبيق أحادي المدخل يمر عبر الجدول.",
  "Lock one dial of a combination lock and turn only the other: you trace a single line of outcomes.":
    "اقفل أحد قرصَي قفل التوليفة وأدر الآخر وحده: عندئذٍ ترسم خطًا واحدًا من النتائج.",
  "Most questions about what a step can reach are questions about these fixed slices, so the site names them precisely, including where the naming inverts.":
    "معظم الأسئلة عن مدى ما تبلغه خطوة واحدة هي أسئلة عن هذه الشرائح المثبَّتة، ولذلك يسمّيها الموقع بدقة، بما في ذلك الموضع الذي تنعكس فيه التسمية.",
  "The ranks computed at L3 with the active pole fixed, and the warning that the interface name and the algebraic name point opposite ways.":
    "الرتب المحسوبة عند L3 مع تثبيت القطب الفعّال، والتنبيه إلى أن اسم الواجهة والاسم الجبري يشيران إلى جهتين متعاكستين.",
  "Rank counts how many different destinations a fixed one-input map can actually reach.":
    "الرتبة تعدّ كم وجهة مختلفة يستطيع تطبيق أحادي المدخل مثبَّت أن يبلغها فعلًا.",
  "A bus route with ten stops printed on the timetable but only four it ever really calls at.":
    "خط حافلات تُطبع في جدوله عشر محطات، لكنه لا يقف فعليًا إلا عند أربع.",
  "It measures how much a step can still distinguish. A drop in rank is a loss of resolution you can see and count.":
    "تقيس الرتبة قدر ما تستطيع الخطوة أن تميّزه بعد. وانخفاض الرتبة خسارة في الدقة يمكن رؤيتها وعدّها.",
  "The L3 comparison where one orientation reaches two positions and the other reaches all three.":
    "المقارنة عند L3 حيث يبلغ أحد الاتجاهين موضعين ويبلغ الآخر المواضع الثلاثة كلها.",
  "The 560 figure is one exhaustive count of addresses: input pairs first, then laws, then role placements.":
    "الرقم 560 عدّ شامل واحد للعناوين: أزواج المدخلات أولًا، ثم القوانين، ثم ترتيبات الأدوار.",
  "Counting a warehouse by aisle, then shelf, then bin. Three independent multiplications, one total.":
    "جرد مستودع بالممر ثم بالرف ثم بالصندوق. ثلاث عمليات ضرب مستقلة ومجموع واحد.",
  "A number anyone can recount from the definitions cannot quietly drift into being a marketing figure.":
    "الرقم الذي يستطيع أي شخص إعادة عدّه من التعريفات لا يمكن أن ينزلق بهدوء إلى رقم تسويقي.",
  "The per-level bar chart, and the 140 to 280 to 560 to 556 chain printed beneath it.":
    "مخطط الأعمدة لإسهام كل مستوى، وسلسلة 140 ← 280 ← 560 ← 556 المطبوعة تحته.",
  "A signature lists the operations a structure offers and how many inputs each one takes.":
    "التوقيع يسرد العمليات التي تقدّمها البنية وعدد مدخلات كل عملية.",
  "The button panel of a machine: two two-handed levers and one fixed marked position.":
    "لوحة أزرار آلة: ذراعان يحتاج كل منهما إلى يدين، وموضع واحد ثابت مُعلَّم.",
  "Comparing two structures only means something once both are described with the same vocabulary of operations.":
    "لا يصبح لمقارنة بنيتين معنى إلا حين تُوصفان بالمفردات نفسها من العمليات.",
  "The shorthand (2,2,0) for the full algebra: PLUS, STAR, and the named constant P0.":
    "الاختصار (2,2,0) للجبر الكامل: PLUS وSTAR والثابت المُسمّى P0.",
  "Composition feeds the output of one step into the input of the next, forming a tree of steps.":
    "التركيب يغذّي مخرج خطوة إلى مدخل الخطوة التالية، فيتكوّن شجرة من الخطوات.",
  "A recipe in which the contents of one bowl become an ingredient in the next bowl.":
    "وصفة يصبح فيها محتوى وعاء واحد مكوّنًا في الوعاء التالي.",
  "A single step is one cell; a plan is a tree. Writing the tree down is what turns a sequence of actions into something auditable.":
    "الخطوة الواحدة خلية، والخطة شجرة. وكتابة الشجرة هي ما يحوّل سلسلة الإجراءات إلى شيء قابل للتدقيق.",
  "The two bracketed L3 programs, and the boundary stating that the current engine executes one step and not a tree.":
    "البرنامجان المقوَّسان عند L3، والحد الذي ينص على أن المحرّك الحالي ينفّذ خطوة واحدة لا شجرة.",
  "Nonassociative means the brackets matter: regrouping the same inputs can change the answer.":
    "عدم التجميعية يعني أن الأقواس مهمة: فإعادة تجميع المدخلات نفسها قد تغيّر الجواب.",
  "Ordinary subtraction does it too. Eight minus three minus two is not eight minus one.":
    "الطرح العادي يفعل ذلك أيضًا: ثمانية ناقص ثلاثة ناقص اثنين ليست ثمانية ناقص واحد.",
  "If brackets change the outcome, a plan cannot be stored as a flat list. The structure has to be written down and carried.":
    "إذا كانت الأقواس تغيّر النتيجة فلا يمكن حفظ الخطة كقائمة مسطحة. لا بد من كتابة البنية وحملها معها.",
  "The pair of L3 trees that return P2 and P1 from the very same three inputs.":
    "الشجرتان عند L3 اللتان تعطيان P2 وP1 من المدخلات الثلاثة نفسها.",
  "Associativity is permission to move the brackets while keeping the input order fixed.":
    "التجميعية إذن بتحريك الأقواس مع إبقاء ترتيب المدخلات كما هو.",
  "Stacking boxes: taping the first two together first or the last two first leaves the same stack.":
    "رصّ صناديق: سواء لصقت الأولين معًا أو الأخيرين، تبقى الكومة نفسها.",
  "It is the property that lets long chains be evaluated in any convenient order, and precisely the property STAR gives up.":
    "هذه الخاصية بالذات هي ما يتيح حساب السلاسل الطويلة بأي ترتيب مريح، وهي بالضبط ما يتخلى عنه STAR.",
  "PLUS has it at every level; the STAR counterexample is worked out in full on the theory page.":
    "يملكها PLUS في كل مستوى؛ أما المثال المضاد لـ STAR فمحسوب بالكامل في صفحة النظرية.",
  "In a left-to-right STAR chain, once a running prefix reaches P0 every later value stays P0.":
    "في سلسلة STAR من اليسار إلى اليمين: ما إن تبلغ البادئة الجارية P0 حتى تبقى كل القيم التالية P0.",
  "A latch that clicks shut. Nothing further down the line can unlatch it.":
    "مزلاج أُغلق. ولا شيء لاحق في السلسلة يستطيع فتحه.",
  "It shows that history matters: a final total tells you nothing about whether the chain already reset along the way.":
    "هذا يبيّن أن التاريخ مهم: فالمجموع النهائي لا يخبرك بشيء عمّا إذا كانت السلسلة قد أُعيد ضبطها في الطريق.",
  "The worked L5 chain where the ordinary sum and the STAR result disagree.":
    "السلسلة المحسوبة عند L5 حيث يختلف المجموع العادي عن نتيجة STAR.",
  "Catalan numbers count how many different bracketings a fixed row of inputs admits.":
    "أعداد كاتالان تعدّ كم طريقة تقويس مختلفة يقبلها صف ثابت من المدخلات.",
  "The number of ways to pair up parentheses along a line without any pair ever crossing another.":
    "عدد طرق مزاوجة الأقواس على امتداد سطر دون أن يتقاطع زوج مع آخر.",
  "It puts an exact size on the space of possible plans, so plan structure becomes a counted object instead of a vague one.":
    "هذا يعطي حجمًا دقيقًا لفضاء الخطط الممكنة، فتصبح بنية الخطة كائنًا معدودًا لا شيئًا مبهمًا.",
  "The 1, 2, 5, 14 progression for two, three, four, and five operands.":
    "المتتالية 1 و2 و5 و14 لمعاملين وثلاثة وأربعة وخمسة.",
  "A group action is a full set of reversible moves together with the rule for combining them.":
    "فعل الزمرة هو مجموعة كاملة من الحركات العكوسة مع قاعدة تركيبها.",
  "The rotations of a dial, plus the fact that performing two rotations is itself a rotation.":
    "دورات القرص، مع كون تنفيذ دورتين متتاليتين هو نفسه دورة.",
  "A symmetry claim only means something once the acting set is declared. Naming the action is what keeps orbit counts honest.":
    "لا يصبح لادعاء التناظر معنى إلا بعد الإعلان عن المجموعة الفاعلة. وتسمية الفعل هي ما يبقي عدّ المدارات أمينًا.",
  "The unit multipliers acting at each level, and the two-element action at L3.":
    "المضاعِفات الوحدوية الفاعلة في كل مستوى، والفعل ذو العنصرين عند L3.",
  "The stabilizer of an object is the set of moves that leave it exactly where it was.":
    "مُثبِّت كائن ما هو مجموعة الحركات التي تتركه في مكانه تمامًا.",
  "The rotations of a square that leave one particular corner in place.":
    "دورات المربع التي تُبقي زاوية بعينها في مكانها.",
  "Orbit size multiplied by stabilizer size gives the size of the whole group, which turns counting into arithmetic instead of guesswork.":
    "حجم المدار مضروبًا في حجم المثبِّت يعطي حجم الزمرة كلها، فيتحول العدّ إلى حساب بدل التخمين.",
  "The L3 check where only the identity fixes P1, matching its two-element orbit.":
    "الفحص عند L3 حيث لا يثبّت P1 سوى التطبيق المحايد، بما يطابق مداره ذا العنصرين.",
  "Burnside counts distinct cases by averaging how many objects each move leaves untouched.":
    "لمّة برنسايد تعدّ الحالات المختلفة بأخذ متوسط عدد الكائنات التي لا تحرّكها كل حركة.",
  "Counting genuinely different bead necklaces by asking, for each rotation, how many arrangements it leaves alone.":
    "عدّ عقود الخرز المختلفة فعلًا: نسأل عند كل دورة كم ترتيبًا تتركه دون تغيير.",
  "It gives a second and independent route to a structural count, so the site can publish two derivations that are required to agree.":
    "تعطي طريقًا ثانيًا ومستقلًا إلى العدد البنيوي، فيستطيع الموقع نشر اشتقاقين مطلوب منهما أن يتطابقا.",
  "The average of three and one at L3, and the 224 typed orbits reconstructed twice over.":
    "متوسط الثلاثة والواحد عند L3، والمدارات المحددة النوع البالغة 224 المعاد بناؤها مرتين.",
  "The zero homomorphism sends every position to P0, and it exists between every pair of levels.":
    "التشاكل الصفري يرسل كل موضع إلى P0، وهو موجود بين كل زوج من المستويات.",
  "A translator who answers every question with the same single word. Perfectly consistent, and useless.":
    "مترجم يجيب عن كل سؤال بالكلمة نفسها. متسق تمامًا، وعديم الفائدة تمامًا.",
  "It is why saying that no map exists is almost always the wrong statement. What fails is a map that keeps distinctions.":
    "لهذا تكون عبارة «لا يوجد تطبيق» خاطئة في الغالب. فالذي لا يوجد هو تطبيق يحافظ على التمييزات.",
  "The correction printed beside the L3 to L5 rejection, and the empty cells of the transfer matrix.":
    "التصحيح المطبوع بجوار رفض L3 ← L5، والخلايا الفارغة في مصفوفة الانتقال.",
  "Order is how many steps it takes to return to the start, and it has to divide the size of the level.":
    "الرتبة هي عدد الخطوات اللازمة للعودة إلى البداية، ويجب أن تقسم حجم المستوى.",
  "A gear with three teeth meshes cleanly into one with six, but never into one with five.":
    "ترس بثلاثة أسنان يتعشّق بنظافة مع ترس بستة أسنان، لكنه لا يتعشّق أبدًا مع ترس بخمسة.",
  "It converts a question about carrying state between levels into a fact about numbers that can be checked in one line.":
    "يحوّل هذا سؤالًا عن نقل الحالة بين المستويات إلى واقعة عددية يمكن التحقق منها في سطر واحد.",
  "The rule that a nonzero embedding from one level into another exists exactly when the sizes divide.":
    "القاعدة القائلة إن التضمين غير الصفري من مستوى إلى آخر يوجد بالضبط حين يقسم حجم أحدهما الآخر.",
  "The whole current engine written out as one worked pass, from accepted input to recorded receipt.":
    "المحرّك الحالي كله مكتوبًا بوصفه تمريرة واحدة محسوبة: من المدخل المقبول إلى الإيصال المسجَّل.",
  "A sealed card catalogue: recognise one of two request cards, discard the forbidden card types, pick one shelf, sort reproducibly, and use one card once.":
    "فهرس بطاقات مختوم: تعرّف على إحدى بطاقتَي الطلب، واستبعد أنواع البطاقات الممنوعة، واختر رفًّا واحدًا، ورتّب بطريقة قابلة لإعادة الإنتاج، واستخدم بطاقة واحدة مرة واحدة.",
  "It is the single place where every published runtime number appears in the order the engine actually applies them.":
    "هذا هو الموضع الوحيد الذي تظهر فيه كل أرقام بيئة التشغيل المنشورة بالترتيب الذي يطبّقها به المحرّك فعلًا.",
  "The narrowing illustration, the descriptor arithmetic table, and the current-scope ledger.":
    "رسم التضييق، وجدول حساب الواصفات، ودفتر النطاق الحالي.",
  "In one line": "في سطر واحد",
  "A picture you already know": "صورة تعرفها بالفعل",
  "Why GALO needs it": "لماذا يحتاجه GALO",
  "Where you meet it on this site": "أين تصادفه في هذا الموقع",
  "Complete definition and two independent checks": "التعريف الكامل وفحصان مستقلان",
  "Related terms": "مصطلحات ذات صلة",
  "Close the explanation": "إغلاق الشرح",
  "Theory chapter": "فصل النظرية",
  "Mathematics chapter": "فصل الرياضيات",
  "Symmetry chapter": "فصل التناظر",
};
