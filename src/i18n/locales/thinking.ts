import type { TranslationDictionary } from "../translations";

export const thinkingRu: TranslationDictionary = {
  "The decision procedure": "Процедура принятия решения",
  "Nine stages of one thought, drawn as schemes": "Девять этапов одной мысли, нарисованные схемами",
  "Follow one decision from the input to the record": "Проследите одно решение от входа до записи",
  "A horizontal lane runs from an observation on the left to a receipt on the right. Five gates labelled G1 to G5 stand across the lane, and each has a downward arrow into a tray that collects refusals together with the code of the gate that produced them.":
    "Горизонтальная дорожка идёт от наблюдения слева к протоколу исполнения справа. Поперёк дорожки стоят пять шлюзов с обозначениями от G1 до G5, и от каждого вниз идёт стрелка в поддон, который собирает отказы вместе с кодом остановившего шлюза.",
  "A preference would have to be learned, stored, and trusted. A hash over recorded values needs none of those: it can be recomputed from the receipt alone, by someone who has no access to the machine and no reason to trust its operator.":
    "Предпочтение надо было бы обучить, где-то хранить и принять на веру. Хешу от записанных значений ничего этого не нужно: его пересчитает по одному протоколу человек, у которого нет доступа к машине и нет причин верить её оператору.",
  "A procedure that can stop is more useful than one that always answers.":
    "Процедура, которая умеет остановиться, полезнее той, которая всегда что-то отвечает.",
  "A thought travels the lane from left to right and has to clear every gate. Failing one is not an error condition to be recovered from: the run stops, and the gate that stopped it is written down, which is why a refusal can be argued with afterwards.":
    "Мысль идёт по дорожке слева направо и обязана пройти каждый шлюз. Не пройти шлюз — не сбой, из которого надо выкарабкиваться: запуск встаёт, а шлюз, который его остановил, попадает в запись. Потому с отказом и можно спорить потом.",
  "Carried and non-carried state between two runs": "Переносимое и непереносимое состояние между двумя запусками",
  "Each one is written in the strongest form somebody might repeat it, and then corrected.":
    "Каждое из них записано в самой сильной форме, в какой его могли бы повторить, и затем исправлено.",
  "Every input to the order appears in the record, so a reviewer can recompute the sequence without access to the machine that produced it.":
    "Каждый вход порядка попадает в протокол, поэтому проверяющий может пересчитать последовательность, не имея доступа к машине, которая её произвела.",
  "Every input to the order is recorded, so the same sequence can be recomputed by someone else.":
    "Каждый вход порядка записан, поэтому ту же последовательность может пересчитать кто-то другой.",
  "Five gates, each with a name that ends up in the record.":
    "Пять шлюзов, и у каждого есть имя, которое попадает в протокол.",
  "Five refusal gates along one execution lane": "Пять шлюзов отказа вдоль одной дорожки исполнения",
  "Four boxes at the corners of a cycle: the starting position, the operand supplied by the admitted candidate, the addressed table cell, and the written receipt. A dashed arrow returns from the receipt to the starting position to show that the next run begins from the new position. Three counters in the centre are all zero.":
    "Четыре блока по углам цикла: исходная позиция, операнд, который даёт допущенный кандидат, адресуемая ячейка таблицы и записанный протокол исполнения. Пунктирная стрелка возвращается от протокола к исходной позиции, показывая, что следующий запуск начинается с новой позиции. Три счётчика в центре равны нулю.",
  "GALO thinks the way a person thinks.": "GALO мыслит так же, как человек.",
  "HOW GALO REACHES A DECISION": "КАК GALO ПРИХОДИТ К РЕШЕНИЮ",
  "How it thinks": "Как он мыслит",
  "How this differs from a language model": "Чем это отличается от языковой модели",
  "If the set of possible actions could grow during a run, no enumeration would ever be complete and no reviewer could check the whole of it. Fixing 1,204 descriptors at release time is what turns checking from sampling into exhaustion.":
    "Если бы множество возможных действий могло расти во время запуска, ни одно перечисление не было бы полным и ни один проверяющий не смог бы охватить его целиком. Фиксация 1 204 дескрипторов на момент выпуска — это то, что превращает проверку из выборочной в исчерпывающую.",
  "In what order are they taken?": "В каком порядке они берутся?",
  "Learned weights": "Выученные веса",
  "MEMORY, STATED EXACTLY": "ПАМЯТЬ, НАЗВАННАЯ ТОЧНО",
  "Membership in the universe and permission to run are kept apart on purpose. A descriptor can be a legitimate member and still be inert, which means the executable surface can be widened later as an explicit, reviewable change rather than as a side effect.":
    "Членство во вселенной и разрешение исполняться намеренно разведены. Дескриптор может быть законным членом и всё равно оставаться инертным; значит, исполнимую поверхность можно расширить позже явным, проверяемым изменением, а не побочным эффектом.",
  "No claim about understanding, awareness, judgement, or autonomy is made here or anywhere else on this site.":
    "Ни здесь, ни где-либо ещё на этом сайте не утверждается ничего о понимании, осознании, суждении или автономности.",
  "Nothing. There are none.": "Ничего. Их попросту нет.",
  "ONE TURN OF THE CYCLE": "ОДИН ОБОРОТ ЦИКЛА",
  "One bounded action, then the run ends and writes its receipt. There is no second step inside the run.":
    "Одно ограниченное действие, после чего запуск завершается и пишет свой протокол исполнения. Второго шага внутри запуска нет.",
  "One candidate is bound to a single process-local use. A second use is refused by the sequence check.":
    "Один кандидат привязывается к единственному использованию в пределах процесса. Повторное использование отклоняется проверкой последовательности.",
  "Only four action kinds are executable; every other descriptor stays inert by construction.":
    "Исполнимы только четыре вида действий; любой другой дескриптор по построению остаётся инертным.",
  Stage: "Этап",
  "Stops here when": "Останавливается здесь, когда",
  "The candidate the order selects is bound to one process-local use. Using it a second time is refused by the sequence check rather than silently allowed.":
    "Кандидата, которого выбрал порядок, привязывают к одному использованию внутри процесса. Второй раз его отклонит проверка последовательности — молча пропустить не выйдет.",
  "The committed universe is entered in full. It was fixed by the release, not assembled during the run.":
    "Зафиксированную вселенную берут целиком. Её задал выпуск; во время запуска её никто не собирает.",
  "The first of the two accepted patterns matched, which fixes both the operand role and the enumeration parity.":
    "Совпал первый из двух принимаемых шаблонов, что задаёт и роль операнда, и чётность перечисления.",
  "The five things a page about thinking is most likely to be taken to mean.":
    "Пять вещей, которые страница о мышлении с наибольшей вероятностью заставит подумать.",
  "The input is held as an opaque value. Nothing is inferred from it before it is matched.":
    "Вход держится как непрозрачное значение. До сопоставления из него ничего не выводится.",
  "The matched pattern selects one parity half, so the other half is never even offered for ordering.":
    "Совпавший шаблон выбирает одну половину по чётности, поэтому вторая половина вообще не предлагается к упорядочиванию.",
  "The one-step state cycle of the current engine": "Одношаговый цикл состояния текущего движка",
  "The operand the admitted candidate supplies": "Операнд, который даёт допущенный кандидат",
  "The order over candidates is a hash of values that are all written down: the observation, the candidate identifier, and the ordinal. Nothing in it comes from the machine, the clock, or anything an earlier run left behind, so the sequence is the same wherever it is recomputed.":
    "Порядок кандидатов задаёт хеш от записанных значений: наблюдение, идентификатор кандидата и порядковый номер. Ни машины, ни часов, ни следов предыдущего запуска в нём нет, поэтому последовательность везде выходит одна и та же.",
  "The other kind of machine": "Машина другого рода",
  "The position the run starts from": "Позиция, с которой начинается запуск",
  "The question it answers": "Вопрос, на который он отвечает",
  "The recorded result, and the start of the next run": "Записанный результат и начало следующего запуска",
  "The single table cell those two address": "Одна ячейка таблицы, которую эти двое адресуют",
  "The whole mutable state is one label from the three declared at this level.":
    "Всё изменяемое состояние — это одна метка из трёх, объявленных на этом уровне.",
  "Thinking chapter navigation": "Навигация по разделам о мышлении",
  "This is the smallest complete picture of GALO acting. It is worth reading twice, because everything else on the site — the counts, the symmetries, the receipts — exists to make this one turn checkable.":
    "Это самая маленькая полная картина того, как GALO действует. Её стоит прочитать дважды, потому что всё остальное на сайте — подсчёты, симметрии, протоколы исполнения — существует ради того, чтобы этот единственный оборот можно было проверить.",
  "Three parallel lanes labelled run 1, run 2, and run 3. Each lane passes through the same observation, the same hash, and the same ordinal, and all three converge on a single box marked with an equals sign and the word receipt.":
    "Три параллельные дорожки с подписями run 1, run 2 и run 3. Каждая проходит через одно и то же наблюдение, тот же хеш и тот же порядковый номер, и все три сходятся в один блок, помеченный знаком равенства и словом receipt.",
  "Three runs of the same observation converging on one record":
    "Три запуска одного и того же наблюдения, сходящиеся к одной записи",
  "Three separate runs, one identical record.": "Три отдельных запуска, одна и та же запись.",
  "Two positions address one cell, and the cell names where the run ends.":
    "Две позиции адресуют одну ячейку, и ячейка называет, где запуск закончится.",
  "Two positions address one cell, the cell names the new position, and the record fixes what happened. The counters in the middle stay at zero throughout, which is what lets a second machine reproduce the step exactly instead of approximately.":
    "Две позиции адресуют одну ячейку, ячейка называет новую позицию, а запись фиксирует произошедшее. Счётчики в середине всё это время остаются нулевыми — именно это позволяет второй машине воспроизвести шаг точно, а не приблизительно.",
  "WHAT ONE STEP LEAVES BEHIND": "ЧТО ОСТАЁТСЯ ПОСЛЕ ОДНОГО ШАГА",
  "WHERE A THOUGHT IS ALLOWED TO STOP": "ГДЕ МЫСЛИ РАЗРЕШЕНО ОСТАНОВИТЬСЯ",
  "WHY THE SAME THOUGHT HAPPENS TWICE": "ПОЧЕМУ ТА ЖЕ МЫСЛЬ ПОВТОРЯЕТСЯ",
  "What actually ran?": "Что в итоге выполнилось?",
  "What came in?": "Что пришло на вход?",
  "What exists at all?": "Что вообще существует?",
  "What is allowed to execute?": "Чему разрешено исполняться?",
  "What is exposed to this pattern?": "Что открыто этому шаблону?",
  "What it does not mean": "Чего это не значит",
  "What that means": "Что это значит",
  "What thinking means on this page": "Что на этой странице значит «мышление»",
  "Where does the run stand?": "В какой точке находится запуск?",
  "Which candidate, and for how long?": "Какой кандидат и на какой срок?",
  "Which declared pattern matched?": "Какой объявленный шаблон совпал?",
  "Why a hash and not a preference": "Почему хеш, а не чьё-то предпочтение",
  "Why only four kinds execute": "Почему исполнимы только четыре вида",
  "Why the universe is fixed in advance": "Почему вселенная фиксируется заранее",
  carried: "переносится",
  "no gate is skipped, and no gate has a fallback branch":
    "ни один шлюз не пропускается, и ни у одного нет запасной ветви",
  "not carried": "не переносится",
  "nothing in the ordering comes from the machine, the clock, or an earlier run":
    "в упорядочивании нет ничего от машины, от часов или от предыдущего запуска",
  "one run performs exactly one turn of this cycle": "один запуск делает ровно один оборот этого цикла",
  "stopped here, with the gate written into the record": "остановлено здесь, и шлюз вписан в протокол",
};

export const thinkingZh: TranslationDictionary = {
  "The decision procedure": "决策流程",
  "Nine stages of one thought, drawn as schemes": "一次思考的九个阶段，画成图解",
  "Follow one decision from the input to the record": "跟着一个决定，从输入一路走到记录",
  "A horizontal lane runs from an observation on the left to a receipt on the right. Five gates labelled G1 to G5 stand across the lane, and each has a downward arrow into a tray that collects refusals together with the code of the gate that produced them.":
    "一条水平通道从左侧的观测通向右侧的回执。五道分别标记为 G1 至 G5 的闸门横跨通道，每道闸门都有一支向下的箭头通往一个托盘，托盘把拒绝连同造成拒绝的闸门代码一起收集起来。",
  "A preference would have to be learned, stored, and trusted. A hash over recorded values needs none of those: it can be recomputed from the receipt alone, by someone who has no access to the machine and no reason to trust its operator.":
    "偏好必须先被学出来、被存起来、再被信任。而对已记录数值取的哈希不需要这三样：仅凭回执就能重新算出来，哪怕算的人既无法接触那台机器，也没有理由信任它的运营方。",
  "A procedure that can stop is more useful than one that always answers.":
    "一个懂得停下来的流程，比一个永远都会给出答案的流程更有用。",
  "A thought travels the lane from left to right and has to clear every gate. Failing one is not an error condition to be recovered from: the run stops, and the gate that stopped it is written down, which is why a refusal can be argued with afterwards.":
    "一次思考沿着通道从左走到右，必须通过每一道闸门。没能通过并不是一个需要去恢复的错误状态：运行就此停止，而拦下它的那道闸门会被写下来——正因如此，事后才可以对这次拒绝提出异议。",
  "Carried and non-carried state between two runs": "两次运行之间被带走与不被带走的状态",
  "Each one is written in the strongest form somebody might repeat it, and then corrected.":
    "每一条都按别人可能复述的最强说法写出来，然后再加以纠正。",
  "Every input to the order appears in the record, so a reviewer can recompute the sequence without access to the machine that produced it.":
    "排序的每一项输入都出现在记录里，因此审阅者无需接触产生它的那台机器，也能重新算出这个序列。",
  "Every input to the order is recorded, so the same sequence can be recomputed by someone else.":
    "排序的每一项输入都被记录下来，因此别人也能重新算出同样的序列。",
  "Five gates, each with a name that ends up in the record.": "五道闸门，每一道都有一个会写进记录的名字。",
  "Five refusal gates along one execution lane": "沿同一条执行通道排列的五道拒绝闸门",
  "Four boxes at the corners of a cycle: the starting position, the operand supplied by the admitted candidate, the addressed table cell, and the written receipt. A dashed arrow returns from the receipt to the starting position to show that the next run begins from the new position. Three counters in the centre are all zero.":
    "循环四角上的四个方块：起始位置、被准入的候选所提供的操作数、被寻址到的那一格表格，以及写下的回执。一支虚线箭头从回执返回起始位置，表示下一次运行从新的位置开始。中间的三个计数器全为零。",
  "GALO thinks the way a person thinks.": "GALO 像人一样思考。",
  "HOW GALO REACHES A DECISION": "GALO 如何得出一个决定",
  "How it thinks": "它如何思考",
  "How this differs from a language model": "这与语言模型有何不同",
  "If the set of possible actions could grow during a run, no enumeration would ever be complete and no reviewer could check the whole of it. Fixing 1,204 descriptors at release time is what turns checking from sampling into exhaustion.":
    "如果可能动作的集合能在运行途中变大，那么任何枚举都不可能完整，任何审阅者也无法把它整个检查一遍。在发布时固定 1,204 个描述符，正是把抽样式的检查变成穷尽式检查的原因。",
  "In what order are they taken?": "它们按什么顺序被取用？",
  "Learned weights": "学出来的权重",
  "MEMORY, STATED EXACTLY": "被精确说明的记忆",
  "Membership in the universe and permission to run are kept apart on purpose. A descriptor can be a legitimate member and still be inert, which means the executable surface can be widened later as an explicit, reviewable change rather than as a side effect.":
    "属于这个宇宙与获准运行，是被刻意分开的两件事。一个描述符可以是合法成员，同时仍然惰性——这意味着可执行的那一面日后可以通过一次显式的、可复核的变更来扩大，而不是作为副作用悄悄扩大。",
  "No claim about understanding, awareness, judgement, or autonomy is made here or anywhere else on this site.":
    "无论在这里还是在本站的其他地方，都不对理解、意识、判断或自主性作出任何声称。",
  "Nothing. There are none.": "什么都没有。根本不存在。",
  "ONE TURN OF THE CYCLE": "循环的一整圈",
  "One bounded action, then the run ends and writes its receipt. There is no second step inside the run.":
    "一个受限动作，然后这次运行就结束并写下自己的回执。运行内部没有第二步。",
  "One candidate is bound to a single process-local use. A second use is refused by the sequence check.":
    "一个候选被绑定为进程内的一次性使用。第二次使用会被序列检查拒绝。",
  "Only four action kinds are executable; every other descriptor stays inert by construction.":
    "只有四种动作类型可执行；其余任何描述符按构造保持惰性。",
  Stage: "阶段",
  "Stops here when": "在以下情况停在这里",
  "The candidate the order selects is bound to one process-local use. Using it a second time is refused by the sequence check rather than silently allowed.":
    "顺序选中的那个候选，被绑定为进程内的一次性使用。第二次使用会被序列检查拒绝，而不是被默默放行。",
  "The committed universe is entered in full. It was fixed by the release, not assembled during the run.":
    "已承诺的宇宙被整个载入。它由发布版确定，而不是在运行途中拼出来的。",
  "The first of the two accepted patterns matched, which fixes both the operand role and the enumeration parity.":
    "两个被接受的模式中，第一个匹配上了，这同时确定了操作数角色与枚举奇偶。",
  "The five things a page about thinking is most likely to be taken to mean.":
    "一个讲思考的页面最容易被误会成的五种意思。",
  "The input is held as an opaque value. Nothing is inferred from it before it is matched.":
    "输入被当作一个不透明的值持有。在匹配之前，不从中推断任何东西。",
  "The matched pattern selects one parity half, so the other half is never even offered for ordering.":
    "匹配上的模式选中一半奇偶，因此另一半根本不会被拿去排序。",
  "The one-step state cycle of the current engine": "当前引擎的单步状态循环",
  "The operand the admitted candidate supplies": "被准入的候选所提供的操作数",
  "The order over candidates is a hash of values that are all written down: the observation, the candidate identifier, and the ordinal. Nothing in it comes from the machine, the clock, or anything an earlier run left behind, so the sequence is the same wherever it is recomputed.":
    "候选之间的顺序，是对一组全部被写下来的数值取哈希：观测、候选标识、序号。里面没有任何东西来自机器、来自时钟，或来自上一次运行留下的痕迹——所以无论在哪里重新计算，序列都一样。",
  "The other kind of machine": "另一种机器",
  "The position the run starts from": "本次运行出发的位置",
  "The question it answers": "它回答的问题",
  "The recorded result, and the start of the next run": "被记录下来的结果，也是下一次运行的起点",
  "The single table cell those two address": "这两者共同寻址到的那一格表格",
  "The whole mutable state is one label from the three declared at this level.":
    "全部可变状态，就是本层级所声明的三个标签中的一个。",
  "Thinking chapter navigation": "思考章节导航",
  "This is the smallest complete picture of GALO acting. It is worth reading twice, because everything else on the site — the counts, the symmetries, the receipts — exists to make this one turn checkable.":
    "这是 GALO 采取行动的最小完整图景。值得读两遍，因为本站其余的一切——那些计数、那些对称性、那些回执——存在的意义就是让这一圈变得可检验。",
  "Three parallel lanes labelled run 1, run 2, and run 3. Each lane passes through the same observation, the same hash, and the same ordinal, and all three converge on a single box marked with an equals sign and the word receipt.":
    "三条平行通道，分别标记为 run 1、run 2、run 3。每条都经过同一个观测、同一个哈希、同一个序号，三条最终汇入同一个方块，方块上标着等号与 receipt 一词。",
  "Three runs of the same observation converging on one record": "同一观测的三次运行，收敛到同一份记录",
  "Three separate runs, one identical record.": "三次各自独立的运行，一份完全相同的记录。",
  "Two positions address one cell, and the cell names where the run ends.":
    "两个位置寻址到同一格，而这一格指明这次运行在哪里结束。",
  "Two positions address one cell, the cell names the new position, and the record fixes what happened. The counters in the middle stay at zero throughout, which is what lets a second machine reproduce the step exactly instead of approximately.":
    "两个位置寻址到同一格，这一格给出新的位置，而记录固定下发生过的事。中间那几个计数器自始至终都是零——正是这一点，让第二台机器能够精确地、而不是近似地重现这一步。",
  "WHAT ONE STEP LEAVES BEHIND": "一步之后留下了什么",
  "WHERE A THOUGHT IS ALLOWED TO STOP": "思考被允许在哪里停下",
  "WHY THE SAME THOUGHT HAPPENS TWICE": "为什么同一次思考会重演",
  "What actually ran?": "实际运行的是什么？",
  "What came in?": "进来的是什么？",
  "What exists at all?": "总共存在些什么？",
  "What is allowed to execute?": "什么获准执行？",
  "What is exposed to this pattern?": "对这个模式开放的是什么？",
  "What it does not mean": "它不意味着什么",
  "What that means": "这意味着什么",
  "What thinking means on this page": "本页所说的“思考”是什么意思",
  "Where does the run stand?": "这次运行处在哪一点？",
  "Which candidate, and for how long?": "哪一个候选，用多久？",
  "Which declared pattern matched?": "匹配上的是哪个已声明的模式？",
  "Why a hash and not a preference": "为什么用哈希，而不用偏好",
  "Why only four kinds execute": "为什么只有四种类型可执行",
  "Why the universe is fixed in advance": "为什么宇宙要事先固定",
  carried: "被带走",
  "no gate is skipped, and no gate has a fallback branch": "没有一道闸门会被跳过，也没有一道有兜底分支",
  "not carried": "不被带走",
  "nothing in the ordering comes from the machine, the clock, or an earlier run":
    "排序里没有任何东西来自机器、时钟或上一次运行",
  "one run performs exactly one turn of this cycle": "一次运行恰好走完这个循环的一圈",
  "stopped here, with the gate written into the record": "在此停止，并把闸门写进记录",
};

export const thinkingAr: TranslationDictionary = {
  "The decision procedure": "إجراء اتخاذ القرار",
  "Nine stages of one thought, drawn as schemes": "مراحل الفكرة التسع، مرسومة مخططات",
  "Follow one decision from the input to the record": "تتبّع قرارًا واحدًا من المدخل إلى السجل",
  "A horizontal lane runs from an observation on the left to a receipt on the right. Five gates labelled G1 to G5 stand across the lane, and each has a downward arrow into a tray that collects refusals together with the code of the gate that produced them.":
    "‏مسار أفقي يمتد من ملاحظة على اليسار إلى إيصال على اليمين. تعترض المسار خمس بوابات مرمّزة من G1 إلى G5، ولكل واحدة سهم نازل إلى صينية تجمع حالات الرفض مع رمز البوابة التي أنتجتها.",
  "A preference would have to be learned, stored, and trusted. A hash over recorded values needs none of those: it can be recomputed from the receipt alone, by someone who has no access to the machine and no reason to trust its operator.":
    "التفضيل يجب أن يُتعلَّم ويُخزَّن ويُوثق به. أما التجزئة المحسوبة على قيم مسجَّلة فلا تحتاج شيئًا من ذلك: يمكن إعادة حسابها من الإيصال وحده، ويستطيع ذلك من لا يملك وصولًا إلى الآلة ولا سببًا للثقة بمشغّلها.",
  "A procedure that can stop is more useful than one that always answers.":
    "الإجراء القادر على التوقف أنفع من إجراء يجيب دائمًا.",
  "A thought travels the lane from left to right and has to clear every gate. Failing one is not an error condition to be recovered from: the run stops, and the gate that stopped it is written down, which is why a refusal can be argued with afterwards.":
    "تسير الفكرة في المسار من اليسار إلى اليمين وعليها اجتياز كل بوابة. والإخفاق في واحدة ليس حالة خطأ يجب التعافي منها: التشغيل يتوقف، وتُدوَّن البوابة التي أوقفته، ولهذا يمكن مناقشة الرفض لاحقًا.",
  "Carried and non-carried state between two runs": "الحالة المحمولة وغير المحمولة بين تشغيلين",
  "Each one is written in the strongest form somebody might repeat it, and then corrected.":
    "كل واحدة مكتوبة بأقوى صيغة قد يرددها بها أحد، ثم تُصحَّح.",
  "Every input to the order appears in the record, so a reviewer can recompute the sequence without access to the machine that produced it.":
    "كل مدخل من مدخلات الترتيب يظهر في السجل، فيستطيع المراجع إعادة حساب التسلسل دون وصول إلى الآلة التي أنتجته.",
  "Every input to the order is recorded, so the same sequence can be recomputed by someone else.":
    "كل مدخل من مدخلات الترتيب مسجَّل، فيستطيع شخص آخر إعادة حساب التسلسل نفسه.",
  "Five gates, each with a name that ends up in the record.": "خمس بوابات، لكل واحدة اسم ينتهي في السجل.",
  "Five refusal gates along one execution lane": "خمس بوابات رفض على مسار تنفيذ واحد",
  "Four boxes at the corners of a cycle: the starting position, the operand supplied by the admitted candidate, the addressed table cell, and the written receipt. A dashed arrow returns from the receipt to the starting position to show that the next run begins from the new position. Three counters in the centre are all zero.":
    "أربعة مربعات عند زوايا دورة: الموضع الابتدائي، والمعامل الذي يقدّمه المرشح المقبول، وخلية الجدول المعنونة، والإيصال المكتوب. ويعود سهم متقطع من الإيصال إلى الموضع الابتدائي ليبيّن أن التشغيل التالي يبدأ من الموضع الجديد. والعدّادات الثلاثة في الوسط كلها أصفار.",
  "GALO thinks the way a person thinks.": "‏GALO يفكّر كما يفكّر الإنسان.",
  "HOW GALO REACHES A DECISION": "كيف يصل GALO إلى قرار",
  "How it thinks": "كيف يفكّر",
  "How this differs from a language model": "بماذا يختلف هذا عن نموذج اللغة",
  "If the set of possible actions could grow during a run, no enumeration would ever be complete and no reviewer could check the whole of it. Fixing 1,204 descriptors at release time is what turns checking from sampling into exhaustion.":
    "لو أمكن لمجموعة الأفعال الممكنة أن تنمو أثناء التشغيل لما اكتمل أي تعداد ولما استطاع مراجع فحصها كلها. وتثبيت 1,204 واصفًا وقت الإصدار هو ما يحوّل الفحص من معاينة عيّنة إلى استقصاء شامل.",
  "In what order are they taken?": "بأي ترتيب تُؤخذ؟",
  "Learned weights": "أوزان متعلَّمة",
  "MEMORY, STATED EXACTLY": "الذاكرة، محدَّدة بدقة",
  "Membership in the universe and permission to run are kept apart on purpose. A descriptor can be a legitimate member and still be inert, which means the executable surface can be widened later as an explicit, reviewable change rather than as a side effect.":
    "العضوية في الكون والإذن بالتنفيذ مفصولان عن قصد. فقد يكون الواصف عضوًا مشروعًا ويبقى خاملًا، ما يعني أن السطح القابل للتنفيذ يمكن توسيعه لاحقًا بتغيير صريح قابل للمراجعة لا كأثر جانبي.",
  "No claim about understanding, awareness, judgement, or autonomy is made here or anywhere else on this site.":
    "لا يُدّعى هنا ولا في أي موضع آخر من هذا الموقع شيء عن الفهم أو الوعي أو الحكم أو الاستقلالية.",
  "Nothing. There are none.": "لا شيء. لا وجود لها أصلًا.",
  "ONE TURN OF THE CYCLE": "دورة واحدة من الحلقة",
  "One bounded action, then the run ends and writes its receipt. There is no second step inside the run.":
    "فعل مقيَّد واحد، ثم ينتهي التشغيل ويكتب إيصاله. ولا خطوة ثانية داخل التشغيل.",
  "One candidate is bound to a single process-local use. A second use is refused by the sequence check.":
    "يُربط مرشح واحد باستخدام وحيد ضمن العملية. والاستخدام الثاني يرفضه فحص التسلسل.",
  "Only four action kinds are executable; every other descriptor stays inert by construction.":
    "أربعة أنواع أفعال فقط قابلة للتنفيذ؛ وكل واصف آخر يبقى خاملًا بحكم البناء.",
  Stage: "المرحلة",
  "Stops here when": "تتوقف هنا عندما",
  "The candidate the order selects is bound to one process-local use. Using it a second time is refused by the sequence check rather than silently allowed.":
    "المرشح الذي يختاره الترتيب يُربط باستخدام وحيد ضمن العملية. واستعماله ثانية يرفضه فحص التسلسل بدل أن يُسمح به بصمت.",
  "The committed universe is entered in full. It was fixed by the release, not assembled during the run.":
    "يُدخَل الكون الملتزَم به كاملًا. حدّده الإصدار ولم يُجمَّع أثناء التشغيل.",
  "The first of the two accepted patterns matched, which fixes both the operand role and the enumeration parity.":
    "طابق أول النمطين المقبولين، وهو ما يثبّت دور المعامل وتكافؤ التعداد معًا.",
  "The five things a page about thinking is most likely to be taken to mean.":
    "خمسة معانٍ يُرجَّح أن تُحمَل عليها صفحةٌ عن التفكير.",
  "The input is held as an opaque value. Nothing is inferred from it before it is matched.":
    "يُحتفظ بالمدخل كقيمة معتمة. ولا يُستنتج منه شيء قبل مطابقته.",
  "The matched pattern selects one parity half, so the other half is never even offered for ordering.":
    "النمط المطابِق يختار نصف تكافؤ واحدًا، فلا يُعرض النصف الآخر للترتيب أصلًا.",
  "The one-step state cycle of the current engine": "دورة الحالة ذات الخطوة الواحدة في المحرك الحالي",
  "The operand the admitted candidate supplies": "المعامل الذي يقدّمه المرشح المقبول",
  "The order over candidates is a hash of values that are all written down: the observation, the candidate identifier, and the ordinal. Nothing in it comes from the machine, the clock, or anything an earlier run left behind, so the sequence is the same wherever it is recomputed.":
    "الترتيب بين المرشحين تجزئة لقيم كلها مدوّنة: الملاحظة، ومعرّف المرشح، والرتبة. ولا شيء فيه يأتي من الآلة أو الساعة أو مما خلّفه تشغيل سابق، فالتسلسل واحد أينما أُعيد حسابه.",
  "The other kind of machine": "نوع آخر من الآلات",
  "The position the run starts from": "الموضع الذي يبدأ منه التشغيل",
  "The question it answers": "السؤال الذي تجيب عنه",
  "The recorded result, and the start of the next run": "النتيجة المسجَّلة، وبداية التشغيل التالي",
  "The single table cell those two address": "خلية الجدول الوحيدة التي يعنونها الاثنان",
  "The whole mutable state is one label from the three declared at this level.":
    "كامل الحالة القابلة للتغيّر تسمية واحدة من الثلاث المعلنة عند هذا المستوى.",
  "Thinking chapter navigation": "التنقل في فصل التفكير",
  "This is the smallest complete picture of GALO acting. It is worth reading twice, because everything else on the site — the counts, the symmetries, the receipts — exists to make this one turn checkable.":
    "هذه أصغر صورة كاملة لـ GALO وهو يعمل. تستحق قراءتين، لأن كل ما عداها في الموقع — الأعداد والتناظرات والإيصالات — موجود ليجعل هذه الدورة الواحدة قابلة للفحص.",
  "Three parallel lanes labelled run 1, run 2, and run 3. Each lane passes through the same observation, the same hash, and the same ordinal, and all three converge on a single box marked with an equals sign and the word receipt.":
    "ثلاثة مسارات متوازية موسومة run 1 وrun 2 وrun 3. يمر كل منها بالملاحظة نفسها والتجزئة نفسها والرتبة نفسها، وتلتقي الثلاثة عند مربع واحد عليه علامة يساوي وكلمة receipt.",
  "Three runs of the same observation converging on one record": "ثلاثة تشغيلات للملاحظة نفسها تلتقي عند سجل واحد",
  "Three separate runs, one identical record.": "ثلاثة تشغيلات منفصلة، وسجل واحد متطابق.",
  "Two positions address one cell, and the cell names where the run ends.":
    "موضعان يعنونان خلية واحدة، والخلية تسمّي حيث ينتهي التشغيل.",
  "Two positions address one cell, the cell names the new position, and the record fixes what happened. The counters in the middle stay at zero throughout, which is what lets a second machine reproduce the step exactly instead of approximately.":
    "موضعان يعنونان خلية واحدة، والخلية تسمّي الموضع الجديد، والسجل يثبّت ما جرى. وتبقى العدّادات في الوسط أصفارًا طوال الوقت، وهذا ما يتيح لآلة ثانية أن تعيد إنتاج الخطوة بدقة لا بالتقريب.",
  "WHAT ONE STEP LEAVES BEHIND": "ما تخلّفه خطوة واحدة",
  "WHERE A THOUGHT IS ALLOWED TO STOP": "أين يُسمح للفكرة أن تتوقف",
  "WHY THE SAME THOUGHT HAPPENS TWICE": "لماذا تتكرر الفكرة نفسها",
  "What actually ran?": "ما الذي نُفِّذ فعلًا؟",
  "What came in?": "ما الذي وصل؟",
  "What exists at all?": "ما الموجود أصلًا؟",
  "What is allowed to execute?": "ما المسموح بتنفيذه؟",
  "What is exposed to this pattern?": "ما المكشوف لهذا النمط؟",
  "What it does not mean": "ما لا يعنيه ذلك",
  "What that means": "ماذا يعني ذلك",
  "What thinking means on this page": "ما الذي يعنيه التفكير في هذه الصفحة",
  "Where does the run stand?": "أين يقف التشغيل؟",
  "Which candidate, and for how long?": "أي مرشح، ولكم من الوقت؟",
  "Which declared pattern matched?": "أي نمط معلن طابق؟",
  "Why a hash and not a preference": "لماذا تجزئة لا تفضيل",
  "Why only four kinds execute": "لماذا تُنفَّذ أربعة أنواع فقط",
  "Why the universe is fixed in advance": "لماذا يُثبَّت الكون مسبقًا",
  carried: "محمول",
  "no gate is skipped, and no gate has a fallback branch": "لا بوابة تُتخطى، ولا بوابة لها فرع احتياطي",
  "not carried": "غير محمول",
  "nothing in the ordering comes from the machine, the clock, or an earlier run":
    "لا شيء في الترتيب يأتي من الآلة أو الساعة أو تشغيل سابق",
  "one run performs exactly one turn of this cycle": "التشغيل الواحد يؤدي دورة واحدة بالضبط من هذه الحلقة",
  "stopped here, with the gate written into the record": "توقّف هنا، مع تدوين البوابة في السجل",
};
