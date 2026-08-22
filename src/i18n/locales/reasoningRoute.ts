import type { TranslationDictionary } from "../translations";

/**
 * The reasoning route, rebuilt against the current theory edition.
 *
 * Terminology follows what the rest of the site already uses rather than a fresh
 * choice per string: episode is эпизод / 回合 / حلقة, boundary is граница / 边界 /
 * حدّ, route is маршрут / 路线 / مسار. The phase names themselves stay in Latin
 * capitals in every locale, because they are machine labels a reader will meet
 * again in a record.
 */

export const reasoningRouteRu: TranslationDictionary = {
  "CLOSED SET":
    "ЗАМКНУТЫЙ НАБОР",
  "ONE EPISODE · SEVEN PHASES":
    "ОДИН ЭПИЗОД · СЕМЬ ФАЗ",
  "One episode of GALO reasoning, drawn from opening to seal":
    "Один эпизод рассуждения GALO, нарисованный от открытия до печати",
  "One episode of reasoning, and the receipt it leaves":
    "Один эпизод рассуждения и квитанция, которую он оставляет",
  "Seven phases stacked top to bottom, from opening the candidate space to sealing the episode, each joined to the next by an arrow. A dashed rail runs down the right of all seven and ends in two boxes marked BOUNDARY and REJECT, so either exit is reachable from any phase.":
    "Семь фаз, поставленных сверху вниз — от открытия пространства кандидатов до запечатывания эпизода, — каждая соединена со следующей стрелкой. Справа вдоль всех семи идёт пунктирная рейка, заканчивающаяся двумя блоками с надписями BOUNDARY и REJECT: любой из выходов достижим из любой фазы.",
  "Work is counted as it is spent, and either exit is reachable from any phase. A stop is a recorded outcome with a named cause, not a missing answer.":
    "Работа считается по мере траты, а любой из выходов достижим из любой фазы. Остановка — записанный исход с названной причиной, а не пропавший ответ.",
  "candidates opened in full":
    "кандидаты открыты целиком",
  "maps built, structures reused":
    "карты построены, структуры взяты",
  "one distinguishing probe":
    "одна различающая проба",
  "one lawful whole, or none":
    "одно законное целое или ни одного",
  "sealed, and replayable by others":
    "запечатано и воспроизводимо другими",
  "the order changes, not the verdict":
    "меняется порядок, а не вердикт",
  "the outcome comes from outside":
    "исход приходит извне",
  "A STOP IS A RESULT":
    "ОСТАНОВКА — ЭТО РЕЗУЛЬТАТ",
  "A boundary is returned naming what could not be separated, rather than the reading the route happens to find most plausible.":
    "Возвращается граница с именем того, что не удалось разделить, а не то прочтение, которое маршруту кажется самым правдоподобным.",
  "A boundary is returned with the budget as its named cause, so running out is never confused with having answered poorly.":
    "Возвращается граница, названной причиной которой указан бюджет, — так исчерпание никогда не путают с плохим ответом.",
  "A broken invariant, refused by name rather than corrected in flight.":
    "Нарушенный инвариант, отклонённый по имени, а не исправленный на ходу.",
  "A distinguishing probe is chosen and executed, the observation is recorded, attributed to the assumption it bears on, and the affected map is revised locally.":
    "Выбирается и исполняется различающая проба, наблюдение записывается, относится к тому допущению, которого касается, и задетая карта пересматривается локально.",
  "A learning intent is formed and applied: the ordering and the durable Atlas state change, and the laws, the candidate set, and the verdict do not.":
    "Формируется и применяется намерение обучения: меняются порядок и устойчивое состояние Атласа, а законы, набор кандидатов и вердикт — нет.",
  "A probe set changed under the policy, a stale snapshot submitted, a phase outside the declared set requested. The episode is rejected rather than salvaged, because a run that repaired its own violations would be a run nobody could reason about afterwards.":
    "Набор проб изменён политикой, подан устаревший снимок, запрошена фаза вне объявленного набора. Эпизод отклоняется, а не спасается: запуск, который сам чинит свои нарушения, — это запуск, о котором потом никто не сможет рассуждать.",
  "A probe set or its price was changed under the policy, a stale snapshot was submitted, or an undeclared phase was requested.":
    "Политика изменила набор проб или их цену, подан устаревший снимок или запрошена необъявленная фаза.",
  "A search wanders an open space and reports the best thing it turned up. Each of the four below is a rule the engine enforces, so what comes out is either something that was settled or a named reason it could not be.":
    "Поиск бродит по открытому пространству и сообщает лучшее, что нашёл. Каждое из четырёх ниже — правило, которое движок исполняет, поэтому наружу выходит либо то, что удалось установить, либо названная причина, по которой этого не вышло.",
  "A structure is weakened by a counterexample rather than deleted quietly, and everything derived from it loses force with it. So a structure that turns out to be wrong leaves a trail instead of disappearing from the story.":
    "Структура ослабляется контрпримером, а не удаляется тихо, и всё выведенное из неё теряет силу вместе с ней. Поэтому структура, оказавшаяся неверной, оставляет след, а не исчезает из истории.",
  "A written-out route with declared phases, a counted budget, and a typed outcome at the end of it.":
    "Прописанный маршрут с объявленными фазами, посчитанным бюджетом и типизированным исходом в конце.",
  "An invariant was broken":
    "Нарушен инвариант",
  "An upper band with three solid boxes labelled receipts, learned volume, and proven structures, and a lower band drawn with a dashed border containing two boxes labelled weights and wider verdict, each marked with a cross.":
    "Верхняя полоса с тремя сплошными блоками — квитанции, выученный том и доказанные структуры — и нижняя полоса с пунктирной рамкой, внутри которой два блока, помеченных крестом: веса и расширенный вердикт.",
  "Any change to what is permitted":
    "Любое изменение того, что разрешено",
  "Append-only and linked back to the observation it came from, so what was learned cannot be shown without the episodes that produced it. A record is read by people and by replay tooling, never by the decision path of a later episode.":
    "Только на дозапись и со ссылкой на наблюдение, из которого она возникла, — поэтому выученное нельзя предъявить без породивших его эпизодов. Запись читают люди и инструменты воспроизведения, но никогда не путь решения следующего эпизода.",
  "Both are reported as boundaries. The second is the interesting one: holding two answers is stated outright rather than resolved by preference.":
    "Оба случая сообщаются как границы. Второй интереснее: то, что ответов два, произносится вслух, а не разрешается предпочтением.",
  "Candidates are enumerated from the declared laws rather than proposed by a model. Because completeness is checked instead of assumed, an incomplete portfolio is itself a recorded outcome: the route stops and names the part it could not open, rather than continuing over a space it cannot vouch for.":
    "Кандидаты перечисляются из объявленных законов, а не предлагаются моделью. Полнота проверяется, а не предполагается, поэтому неполный портфель — сам по себе записанный исход: маршрут останавливается и называет ту часть, которую не смог открыть, вместо того чтобы идти дальше по пространству, за которое он не ручается.",
  "Counters and learned orders over what to try first, held in a volume that can be detached.":
    "Счётчики и выученные порядки того, что пробовать первым, — в томе, который можно отсоединить.",
  "Detachable is the operative word. The same engine runs with the volume mounted and with it removed, and the difference between those two runs is what every published learning number measures. Nothing in the volume is a weight, and nothing in it can widen what is permitted.":
    "Ключевое слово — отсоединяемый. Тот же движок работает и с примонтированным томом, и без него, и разница между этими двумя запусками — это и есть то, что измеряет каждое опубликованное число про обучение. Ничто в томе не является весом, и ничто в нём не может расширить разрешённое.",
  "Does one lawful whole come out of what survived?":
    "Складывается ли из выжившего одно законное целое?",
  "Durable state is updated, and only durable state":
    "Обновляется устойчивое состояние — и только оно",
  "Each phase answers one question and hands one object to the next. The phase set is closed, so there is no unnamed state to fall into: an episode is either in one of the seven or on one of the two exits, and the exits are reachable from any phase rather than only from the end.":
    "Каждая фаза отвечает на один вопрос и передаёт следующей один объект. Набор фаз замкнут, поэтому провалиться в безымянное состояние некуда: эпизод либо в одной из семи, либо на одном из двух выходов, и выходы достижимы из любой фазы, а не только с конца.",
  "Either nothing composes lawfully, or two inequivalent lawful compositions both stand.":
    "Либо ничто не складывается законно, либо стоят две неэквивалентные законные композиции.",
  "Every phase seals its state on the way out, which is why an interrupted episode continues instead of restarting, and why a mismatch of environment or Atlas on resumption is refused by name instead of quietly producing different numbers.":
    "Каждая фаза запечатывает состояние на выходе — поэтому прерванный эпизод продолжается, а не начинается заново, и поэтому несовпадение окружения или Атласа при возобновлении отклоняется по имени, а не даёт тихо другие числа.",
  "Every shortcut has to be presentable":
    "Любое сокращение обязано быть предъявимым",
  "Every step has a price, and the budget is finite":
    "У каждого шага есть цена, и бюджет конечен",
  "Everything an episode leaves behind can be listed. That is what makes a later disagreement resolvable: two runs can be compared register by register instead of being argued about — and the learned volume can simply be removed, which is how every published learning number was measured.":
    "Всё, что эпизод оставляет после себя, можно перечислить. Именно поэтому позднее разногласие разрешимо: два запуска можно сравнить регистр за регистром, а не спорить о них, — и выученный том можно просто снять, а именно так и измерялось каждое опубликованное число про обучение.",
  "Executable local maps are built":
    "Строятся исполнимые локальные карты",
  "Four constraints do the work, and none of them is an intention.":
    "Работу делают четыре ограничения, и ни одно из них не является намерением.",
  "Four of the five below end in a boundary and one in a rejection, and the record says which. The difference matters: a boundary is a lawful run that could not settle the question, a rejection is a run that was not lawful at all. Collapsing the two would make every stop look the same.":
    "Четыре из пяти ниже заканчиваются границей, одно — отклонением, и запись говорит, какое именно. Разница существенна: граница — это законный запуск, который не смог решить вопрос, а отклонение — это запуск, который вообще не был законным. Смешать их значило бы сделать все остановки на одно лицо.",
  "GALO works out which candidate is best.":
    "GALO вычисляет, какой кандидат лучше.",
  "How GALO Thinks — The Route an Episode Travels":
    "Как мыслит GALO — маршрут, который проходит эпизод",
  "INSIDE ONE BOUNDED STEP":
    "ВНУТРИ ОДНОГО ОГРАНИЧЕННОГО ШАГА",
  "Inside one bounded step":
    "Внутри одного ограниченного шага",
  "It cannot. The budget is finite and counted as it is spent, and exhausting it is a lawful outcome with a named cause. An episode ends on a settled answer or on a boundary, never on having tried for long enough.":
    "Не может. Бюджет конечен и считается по мере траты, а его исчерпание — законный исход с названной причиной. Эпизод кончается решённым ответом или границей, но никогда — тем, что попыток было достаточно.",
  "It is not, and the gap is published rather than glossed. The measuring path of the sealed campaigns is a counting ranker reading a learned volume; the tower, the typed routes, and the verifier are not in that path, so their joint contribution is not established. An end-to-end run that would settle it is the next registered step.":
    "Нет — и этот разрыв опубликован, а не замазан. Измеряющий путь запечатанных кампаний — счётный ранкер, читающий выученный том; башня, типизированные маршруты и проверитель в этот путь не входят, поэтому их совместный вклад не установлен. Сквозной прогон, который это решил бы, — следующий зарегистрированный шаг.",
  "Lawful models become executable local maps, and any already-proven structure whose signature matches is consumed instead of being rebuilt.":
    "Законные модели становятся исполнимыми локальными картами, а всякая уже доказанная структура, чья подпись совпала, потребляется вместо того, чтобы собираться заново.",
  "Learning opens only after an outside disclosure":
    "Обучение открывается только после внешнего раскрытия",
  "No available probe would tell the surviving readings apart.":
    "Ни одна доступная проба не разделила бы выжившие прочтения.",
  "No external reveal is available, or the outcome it reports is not verified.":
    "Внешнее раскрытие недоступно, или сообщённый им исход не подтверждён.",
  "No lawful composition exists, or several inequivalent ones do.":
    "Законной композиции не существует, либо их несколько и они неэквивалентны.",
  "No parameter is fitted, adjusted, or accumulated. What differs between two runs is the order candidates are tried in and which proven structures are already available — never what counts as a lawful answer.":
    "Ни один параметр не подгоняется, не корректируется и не накапливается. Между двумя запусками различаются порядок перебора кандидатов и набор уже доступных доказанных структур — но не то, что считается законным ответом.",
  "No single lawful composition":
    "Нет единственной законной композиции",
  "Nothing is chosen for being most plausible. When there is nothing to tell the alternatives apart, the route must take a probe or return a boundary. The one thing it may not do is hand back the likeliest reading as though it had been established.":
    "Ничто не выбирается за то, что оно правдоподобнее. Когда альтернативы нечем разделить, маршрут обязан взять пробу или вернуть границу. Единственное, чего он делать не вправе, — вернуть самое вероятное прочтение так, будто оно установлено.",
  "Nothing is learned here, since there are no weights.":
    "Раз весов нет, то ничего и не выучивается.",
  "Nothing is scored. When the alternatives cannot be told apart, the route takes a probe or returns a boundary — it never hands back the most plausible one as though it had been established.":
    "Ничто не оценивается баллом. Когда альтернативы неразличимы, маршрут берёт пробу или возвращает границу — и никогда не отдаёт самую правдоподобную так, будто она установлена.",
  "Nothing left to distinguish with":
    "Разделить больше нечем",
  "Nothing. Learning cannot reach the verdict.":
    "Ничего. Обучение до вердикта не дотягивается.",
  "ONE EPISODE, FROM OPENING TO SEAL":
    "ОДИН ЭПИЗОД — ОТ ОТКРЫТИЯ ДО ПЕЧАТИ",
  "One accepted observation carried through one bounded step":
    "Одно принятое наблюдение, проведённое через один ограниченный шаг",
  "One bounded step with concrete values":
    "Один ограниченный шаг с конкретными значениями",
  "One distinguishing probe is taken":
    "Берётся одна различающая проба",
  "One episode, phase by phase":
    "Один эпизод, фаза за фазой",
  "One episode in seven phases, with two lawful ways out of it":
    "Один эпизод в семи фазах и два законных выхода из него",
  "One turn of the cycle":
    "Один оборот цикла",
  "Proven structures and their lifecycle":
    "Доказанные структуры и их жизненный цикл",
  "Reachable from any phase, and a legitimate way for an episode to end.":
    "Достижима из любой фазы и является законным способом закончить эпизод.",
  "Reaching a decision here is not a hidden chain of reasoning. It is a closed set of phases with two lawful ways out, a budget counted in units as it is spent, and a learning phase that opens only after somebody outside the system discloses what actually happened. This page walks the whole of it, then shows the one bounded step of the frozen kernel release inside it — and ends with the part of the route the published results did not measure.":
    "Прийти здесь к решению — это не скрытая цепочка рассуждений. Это замкнутый набор фаз с двумя законными выходами, бюджет, который считается по мере траты, и фаза обучения, открывающаяся только после того, как кто-то извне раскроет, что произошло на самом деле. Страница проходит его целиком, потом показывает внутри него один ограниченный шаг замороженного релиза — и заканчивается той частью маршрута, которую опубликованные результаты не измеряли.",
  "Read the diagram once for the shape and then the cards below it for the substance. Each card states the question the phase answers, what it does with the answer, and the condition under which the episode stops there instead of continuing. There is no unnamed state to fall into: a request for a phase outside this set is refused rather than improvised.":
    "Прочитайте схему один раз ради формы, а потом карточки под ней ради содержания. В каждой карточке — вопрос, на который отвечает фаза, что она делает с ответом, и условие, при котором эпизод останавливается здесь, а не идёт дальше. Провалиться в безымянное состояние некуда: запрос фазы вне этого набора отклоняется, а не додумывается.",
  "Seven numbered boxes laid out in three rows and joined by arrows in reading order, from opening the candidate space through to sealing the episode. Below them sit two wider boxes marked BOUNDARY and REJECT, drawn dashed, reachable from any of the seven.":
    "Семь пронумерованных блоков в три ряда, соединённых стрелками в порядке чтения — от открытия пространства кандидатов до запечатывания эпизода. Под ними два блока пошире, помеченные BOUNDARY и REJECT, нарисованные пунктиром и достижимые из любого из семи.",
  "Seven phases, and the set is closed.":
    "Семь фаз, и набор замкнут.",
  "Seven phases, and two ways out that are not the seventh.":
    "Семь фаз и два выхода, которые не являются восьмой.",
  "Several readings survive and no available probe would separate them.":
    "Выживает несколько прочтений, и ни одна доступная проба их не разделит.",
  "Step":
    "Шаг",
  "Structures that passed the formation checks, each standing as active, weakened, or retired.":
    "Структуры, прошедшие проверки образования, каждая со статусом активной, ослабленной или выведенной из обращения.",
  "THE WHOLE ROUTE ON ONE SCREEN":
    "ВЕСЬ МАРШРУТ НА ОДНОМ ЭКРАНЕ",
  "The GALO reasoning route: seven phases and two lawful exits, where an episode is allowed to stop, one bounded step of the frozen release with its exact values, what survives an episode, and what the published results did not measure.":
    "Маршрут рассуждения GALO: семь фаз и два законных выхода, где эпизоду разрешено остановиться, один ограниченный шаг замороженного релиза с точными значениями, что переживает эпизод и чего опубликованные результаты не измеряли.",
  "The candidate portfolio cannot be completed, or materialising it would exceed the declared limit.":
    "Портфель кандидатов не удаётся дополнить, или его материализация вышла бы за объявленный предел.",
  "The candidate space is opened":
    "Открывается пространство кандидатов",
  "The composition has to be unique up to lawful equivalence. Two inequivalent lawful compositions are not settled by preference: the route reports that it holds two of them and stops, because choosing between them would be exactly the unrecorded judgement this design exists to avoid.":
    "Композиция обязана быть единственной с точностью до законной эквивалентности. Две неэквивалентные законные композиции не разрешаются предпочтением: маршрут сообщает, что держит обе, и останавливается, — потому что выбор между ними и был бы ровно тем незаписанным суждением, ради устранения которого всё это устроено.",
  "The counted work for the episode reaches its declared budget before the route completes.":
    "Посчитанная работа эпизода достигает объявленного для него бюджета раньше, чем маршрут завершится.",
  "The environment or the Atlas does not match the checkpoint being resumed.":
    "Окружение или Атлас не совпадают с возобновляемой контрольной точкой.",
  "The episode closes on a typed terminal, and its state and checkpoint are sealed so the route can be resumed with an identical result.":
    "Эпизод закрывается типизированным терминалом, а его состояние и контрольная точка запечатываются, чтобы маршрут можно было возобновить с тем же результатом.",
  "The episode is rejected rather than repaired. A rejection says the run was not lawful at all, which is a different statement from a boundary and is kept separate in the record.":
    "Эпизод отклоняется, а не чинится. Отклонение говорит, что запуск вообще не был законным, — это другое утверждение, нежели граница, и в записи оно держится отдельно.",
  "The episode is sealed":
    "Эпизод запечатывается",
  "The episode opens, the space of lawful candidates is materialised, and the portfolio is checked for completeness before anything is chosen.":
    "Эпизод открывается, пространство законных кандидатов материализуется, и портфель проверяется на полноту до того, как что-либо выбрано.",
  "The episode stops before anything is chosen, because a choice out of a space nobody can vouch for is not a lawful choice.":
    "Эпизод останавливается прежде, чем что-либо выбрано, потому что выбор из пространства, за которое никто не ручается, — не законный выбор.",
  "The episode's record":
    "Запись эпизода",
  "The evidence did not distinguish, no lawful composition was unique, no external reveal was available, or the counted budget ran out. In each case the cause is named in the record, so a stop is something a reader can examine rather than an absence of output.":
    "Свидетельств не хватило, чтобы различить; ни одна законная композиция не оказалась единственной; внешнего раскрытия не было; или посчитанный бюджет закончился. В каждом случае причина названа в записи, поэтому остановка — то, что читатель может изучить, а не отсутствие ответа.",
  "The evidence does not distinguish, or the probe taken is not the probe that was declared.":
    "Свидетельства не различают, или взята не та проба, что была объявлена.",
  "The frozen release holds its learning counters at zero by construction, so two runs of it separated by a thousand others behave identically. The learning described on this page belongs to the sealed programme, which is a different artefact measured against itself with its learned volume detached.":
    "Замороженный релиз по построению держит свои счётчики обучения на нуле, поэтому два его запуска, разделённые тысячей других, ведут себя одинаково. Обучение, описанное на этой странице, принадлежит запечатанной программе — а это другой артефакт, измеренный против самого себя с отсоединённым выученным томом.",
  "The frozen release performs one step, and every value in it can be recomputed.":
    "Замороженный релиз делает один шаг, и каждое значение в нём можно пересчитать.",
  "The interesting question about any decision-making system is what it carries forward, because that is what a later behaviour depends on. Two of the three carried registers hold something that was learned — which is why the second one can be detached and the same engine run without it.":
    "Интересный вопрос про любую систему принятия решений — что она переносит дальше, потому что именно от этого зависит её позднейшее поведение. Два из трёх перенесённых регистров держат нечто выученное — поэтому второй можно отсоединить и запустить тот же движок без него.",
  "The laws, the candidate set, and the verifier's authority are frozen with respect to everything above. An episode may end up doing less work than the one before it; it may not end up being allowed more.":
    "Законы, набор кандидатов и полномочия проверителя заморожены по отношению ко всему вышесказанному. Эпизод может кончиться меньшим объёмом работы, чем предыдущий; он не может кончиться тем, что ему стало позволено больше.",
  "The learned volume":
    "Выученный том",
  "The outcome is disclosed from outside":
    "Исход раскрывается извне",
  "The outcome is typed, not scored":
    "Исход типизирован, а не оценён баллом",
  "The outcome of the action is disclosed by an external evaluator, and its record is required before the route may continue.":
    "Исход действия раскрывает внешний оценщик, и его запись требуется прежде, чем маршрут сможет продолжиться.",
  "The policy snapshot the intent was formed against is no longer current.":
    "Снимок политики, против которого было сформировано намерение, больше не актуален.",
  "The portfolio cannot be completed, or the space cannot be materialised within the declared limit.":
    "Портфель не удаётся дополнить, или пространство не материализуется в объявленных пределах.",
  "The route an episode travels, phase by phase.":
    "Маршрут, который проходит эпизод, фаза за фазой.",
  "The route drawn on this page is what the published results measured.":
    "Маршрут, нарисованный на этой странице, — это и есть то, что измеряли опубликованные результаты.",
  "The route keeps going until it is satisfied.":
    "Маршрут идёт, пока не будет доволен.",
  "The route may not confirm itself. Until an external evaluator discloses the outcome, no durable state may change, and an attempt to change it before that point is refused by name and written down.":
    "Маршрут не вправе подтверждать сам себя. Пока внешний оценщик не раскроет исход, никакое устойчивое состояние меняться не может, а попытка изменить его до этого момента отклоняется по имени и записывается.",
  "The route ran lawfully and could not settle it":
    "Маршрут прошёл законно и не смог это решить",
  "The run was not lawful, and is not repaired":
    "Запуск не был законным и не чинится",
  "The set of probes and their cost are fixed before the episode begins. The policy may choose among them; it may not change them or reprice them. That is the rule which keeps a probe from turning into a way of justifying a conclusion already reached.":
    "Набор проб и их цена фиксируются до начала эпизода. Политика может выбирать среди них; менять их или переоценивать — не может. Это и есть правило, которое не даёт пробе превратиться в способ оправдать уже сделанный вывод.",
  "The seven phases of one GALO episode and its two lawful exits":
    "Семь фаз одного эпизода GALO и два его законных выхода",
  "The space could not be opened in full":
    "Пространство не удалось открыть целиком",
  "The surviving maps are composed":
    "Выжившие карты складываются",
  "The surviving maps are composed into a single multi-place structure, and proven structures are applied again wherever they cover it.":
    "Выжившие карты складываются в одну многоместную структуру, и доказанные структуры применяются снова везде, где они её покрывают.",
  "The word names a written-out route with declared phases, a counted budget, and a typed outcome. No claim about cognition, understanding, or awareness is made here or anywhere else on this site.":
    "Слово называет прописанный маршрут с объявленными фазами, посчитанным бюджетом и типизированным исходом. Никакого утверждения о познании, понимании или осознании ни здесь, ни где-либо ещё на этом сайте не делается.",
  "The work budget is spent":
    "Бюджет работы исчерпан",
  "There are no weights, and there is learning. What is learned is where to look and in what order, held in a volume that can be detached; what may never be learned is the verdict. The measured results, and the comparator they were measured against, are on the evidence page.":
    "Весов нет — и обучение есть. Выучивается то, где искать и в каком порядке, и это лежит в томе, который можно отсоединить; чего выучить нельзя никогда — это вердикт. Измеренные результаты и компаратор, против которого их мерили, — на странице доказательств.",
  "This is not the route above; it is one bounded step of the frozen kernel release, which performs no policy update at all. It is here because it is the part of the system with the hardest numbers attached: the space is closed before the run starts, every cut is a rule anyone can read, and the ordering can be recomputed from the record alone.":
    "Это не тот маршрут, что выше: это один ограниченный шаг замороженного релиза ядра, который вообще не обновляет политику. Он здесь потому, что это часть системы с самыми твёрдыми числами: пространство закрыто до начала запуска, каждый срез — правило, которое можно прочитать, а порядок пересчитывается по одной лишь записи.",
  "This is where knowledge gets used rather than merely stored. When a proven structure covers a signature the episode needs, the step is taken from that structure and the shortcut leaves its own record — so a reduction in work can always be pointed at, instead of appearing as an unexplained improvement.":
    "Здесь знание не просто хранится, а используется. Когда доказанная структура покрывает нужную эпизоду подпись, шаг берётся из этой структуры, и сокращение оставляет собственную запись — поэтому на снижение объёма работы всегда можно показать пальцем, а не принимать его как необъяснённое улучшение.",
  "Three registers are carried forward. Two familiar ones are still absent.":
    "Три регистра переносятся дальше. Двух привычных по-прежнему нет.",
  "Three registers survive an episode, and two familiar ones are still absent.":
    "Эпизод переживают три регистра, а двух привычных по-прежнему нет.",
  "WHAT SURVIVES AN EPISODE":
    "ЧТО ПЕРЕЖИВАЕТ ЭПИЗОД",
  "WHY THIS IS A ROUTE AND NOT A SEARCH":
    "ПОЧЕМУ ЭТО МАРШРУТ, А НЕ ПОИСК",
  "What actually happened, according to somebody other than me?":
    "Что произошло на самом деле — по словам кого-то, кроме меня?",
  "What can somebody else replay from this?":
    "Что кто-то другой сможет по этому воспроизвести?",
  "What could lawfully happen here at all?":
    "Что здесь вообще может произойти законно?",
  "What is updated is where to look and in what order — never what counts as permitted. A policy snapshot that has gone stale is refused rather than merged, so two independent replays of the same episode land on the same state rather than on two nearly identical ones.":
    "Обновляется то, где искать и в каком порядке, — но никогда то, что считается разрешённым. Устаревший снимок политики отклоняется, а не сливается, поэтому два независимых воспроизведения одного эпизода приходят к одному и тому же состоянию, а не к двум почти одинаковым.",
  "What may I keep from this, and what may I never keep?":
    "Что мне можно из этого сохранить и чего нельзя сохранять никогда?",
  "What survives an episode":
    "Что переживает эпизод",
  "What the counted work actually came to, and against which comparator":
    "К чему в итоге свелась посчитанная работа и против какого компаратора",
  "What was checked, what was probed, what ran, what was refused, and how much work it cost.":
    "Что проверялось, что зондировалось, что исполнилось, в чём было отказано и во сколько работы это обошлось.",
  "What would tell these readings apart?":
    "Что различило бы эти прочтения?",
  "Where an episode is allowed to stop":
    "Где эпизоду разрешено остановиться",
  "Which readings of this situation are lawful?":
    "Какие прочтения этой ситуации законны?",
  "Why this is a route and not a search":
    "Почему это маршрут, а не поиск",
  "Why this step learns nothing":
    "Почему этот шаг ничему не учится",
  "Without an external reveal the route has no right to learn. This is the single rule that separates learning from self-confirmation: a system allowed to score its own outcomes can improve its numbers indefinitely without improving anything else.":
    "Без внешнего раскрытия маршрут не имеет права учиться. Это единственное правило, отделяющее обучение от самоподтверждения: системе, которой позволено оценивать собственные исходы, ничто не мешает улучшать свои числа бесконечно, не улучшая больше ничего.",
  "Work goes down by consuming structures that were already proven, and each such consumption leaves its own record. A reduction nobody can point at is treated here as a defect rather than as a result.":
    "Объём работы падает за счёт потребления уже доказанных структур, и каждое такое потребление оставляет собственную запись. Сокращение, на которое никто не может показать, считается здесь дефектом, а не результатом.",
  "Work is counted in units as it is spent, and exhausting the budget is a lawful outcome with a named cause rather than a quiet decline in quality. That is what makes the difference between two runs a quantity instead of an impression.":
    "Работа считается в единицах по мере траты, а исчерпание бюджета — законный исход с названной причиной, а не тихое падение качества. Именно это делает разницу между двумя запусками величиной, а не впечатлением.",
  "absent by construction, not merely unused":
    "отсутствуют по построению, а не просто не используются",
  "carried into the next episode":
    "переносится в следующий эпизод",
  "dashed: a lawful exit, reachable from any phase":
    "пунктир: законный выход, достижимый из любой фазы",
  "detach the volume and the same engine runs without it":
    "снимите том — и тот же движок работает без него",
  "lawful, unsettled":
    "законно, не решено",
  "solid: a phase of the route":
    "сплошная линия: фаза маршрута",
  "unlawful, refused":
    "незаконно, отклонено",
};

export const reasoningRouteZh: TranslationDictionary = {
  "CLOSED SET":
    "封闭集合",
  "ONE EPISODE · SEVEN PHASES":
    "一个回合 · 七个阶段",
  "One episode of GALO reasoning, drawn from opening to seal":
    "GALO 一个推理回合，从开启画到封存",
  "One episode of reasoning, and the receipt it leaves":
    "一个推理回合，以及它留下的回执",
  "Seven phases stacked top to bottom, from opening the candidate space to sealing the episode, each joined to the next by an arrow. A dashed rail runs down the right of all seven and ends in two boxes marked BOUNDARY and REJECT, so either exit is reachable from any phase.":
    "七个阶段自上而下排开，从打开候选空间一直到封存回合，每一个都用箭头连到下一个。右侧沿着这七个阶段有一条虚线的导轨，尽头是两个方块，标着 BOUNDARY 与 REJECT：两个出口从任何一个阶段都能到达。",
  "Work is counted as it is spent, and either exit is reachable from any phase. A stop is a recorded outcome with a named cause, not a missing answer.":
    "工作量是边花边数的，而两个出口从任何一个阶段都能到达。停止是一个带具体成因、被记录下来的结果，而不是一个没给出来的答案。",
  "candidates opened in full":
    "候选被完整打开",
  "maps built, structures reused":
    "局部图建好，结构被复用",
  "one distinguishing probe":
    "一个能区分的探针",
  "one lawful whole, or none":
    "一个合法的整体，或者一个都没有",
  "sealed, and replayable by others":
    "已封存，别人可以重放",
  "the order changes, not the verdict":
    "变的是顺序，不是裁定",
  "the outcome comes from outside":
    "结果来自外部",
  "A STOP IS A RESULT":
    "停下来也是一种结果",
  "A boundary is returned naming what could not be separated, rather than the reading the route happens to find most plausible.":
    "返回的是一个边界，指名它无法区分的是什么，而不是路线碰巧觉得最像的那个读法。",
  "A boundary is returned with the budget as its named cause, so running out is never confused with having answered poorly.":
    "返回的边界会把预算写成它的成因，于是「用完了」永远不会被当成「答得差」。",
  "A broken invariant, refused by name rather than corrected in flight.":
    "一条不变式被破坏，按名拒绝，而不是中途修补。",
  "A distinguishing probe is chosen and executed, the observation is recorded, attributed to the assumption it bears on, and the affected map is revised locally.":
    "选出并执行一个能区分的探针，记录观察结果，把它归到它所关涉的那条假设上，并就地修订受影响的局部图。",
  "A learning intent is formed and applied: the ordering and the durable Atlas state change, and the laws, the candidate set, and the verdict do not.":
    "形成并应用一次学习意图：顺序与 Atlas 的持久状态会变，法则、候选集合和裁定不会。",
  "A probe set changed under the policy, a stale snapshot submitted, a phase outside the declared set requested. The episode is rejected rather than salvaged, because a run that repaired its own violations would be a run nobody could reason about afterwards.":
    "策略改动了探针集合、提交了过期的快照、请求了声明集合之外的阶段。这一回合被拒绝，而不是补救：一个自行修补违规的运行，事后谁也没法对它讲道理。",
  "A probe set or its price was changed under the policy, a stale snapshot was submitted, or an undeclared phase was requested.":
    "策略改动了探针集合或它们的价钱，提交了过期的快照，或请求了未声明的阶段。",
  "A search wanders an open space and reports the best thing it turned up. Each of the four below is a rule the engine enforces, so what comes out is either something that was settled or a named reason it could not be.":
    "搜索在一个开放空间里游走，报告它翻出来的最好的东西。下面四条中的每一条都是引擎强制执行的规则，所以出来的要么是已经确定下来的东西，要么是一个说明为什么没能确定的具体理由。",
  "A structure is weakened by a counterexample rather than deleted quietly, and everything derived from it loses force with it. So a structure that turns out to be wrong leaves a trail instead of disappearing from the story.":
    "一条结构是被反例削弱的，而不是被悄悄删掉；由它推出的一切也随之失效。所以一条后来被证明是错的结构会留下痕迹，而不是从故事里消失。",
  "A written-out route with declared phases, a counted budget, and a typed outcome at the end of it.":
    "一条写明白的路线：阶段是声明好的，预算是数出来的，末尾是一个带类型的结果。",
  "An invariant was broken":
    "有一条不变式被破坏",
  "An upper band with three solid boxes labelled receipts, learned volume, and proven structures, and a lower band drawn with a dashed border containing two boxes labelled weights and wider verdict, each marked with a cross.":
    "上方一条带子里有三个实线方块，分别标记为回执、已学到的卷宗与已证明的结构；下方一条带子用虚线边框画出，里面是两个被打上叉号的方块：权重与更宽的裁定。",
  "Any change to what is permitted":
    "对「什么是被允许的」的任何改动",
  "Append-only and linked back to the observation it came from, so what was learned cannot be shown without the episodes that produced it. A record is read by people and by replay tooling, never by the decision path of a later episode.":
    "只追加，并且回链到产生它的那次观察，所以学到的东西没法脱离产生它的回合被拿出来展示。记录是给人和重放工具读的，绝不进入后一回合的决策路径。",
  "Both are reported as boundaries. The second is the interesting one: holding two answers is stated outright rather than resolved by preference.":
    "两种情况都作为边界报告出来。第二种更有意思：手里有两个答案这件事会被直说，而不是靠偏好把它化解掉。",
  "Candidates are enumerated from the declared laws rather than proposed by a model. Because completeness is checked instead of assumed, an incomplete portfolio is itself a recorded outcome: the route stops and names the part it could not open, rather than continuing over a space it cannot vouch for.":
    "候选是从声明好的法则里枚举出来的，而不是由某个模型提出来的。完整性是被检查的，不是被假定的，所以一个不完整的组合本身就是一个被记录下来的结果：路线停下来，指名它没能打开的那一部分，而不是在一个它担保不了的空间上继续走。",
  "Counters and learned orders over what to try first, held in a volume that can be detached.":
    "关于「先试什么」的计数器与已学到的次序，装在一个可以卸下来的卷宗里。",
  "Detachable is the operative word. The same engine runs with the volume mounted and with it removed, and the difference between those two runs is what every published learning number measures. Nothing in the volume is a weight, and nothing in it can widen what is permitted.":
    "关键词是「可卸下」。同一个引擎在挂上卷宗和卸掉卷宗两种情形下都能跑，而这两次运行之间的差值，正是每一个已公布的学习数字所测的东西。卷宗里没有任何一样是权重，也没有任何一样能扩大「什么是被允许的」。",
  "Does one lawful whole come out of what survived?":
    "从活下来的这些里，能不能出来一个合法的整体？",
  "Durable state is updated, and only durable state":
    "被更新的是持久状态，而且只有持久状态",
  "Each phase answers one question and hands one object to the next. The phase set is closed, so there is no unnamed state to fall into: an episode is either in one of the seven or on one of the two exits, and the exits are reachable from any phase rather than only from the end.":
    "每个阶段回答一个问题，并把一个对象交给下一个阶段。阶段集合是封闭的，所以没有无名的状态可以掉进去：一个回合要么在这七个之一里，要么在两个出口之一上，而且这两个出口从任何阶段都能到达，不只是从末尾。",
  "Either nothing composes lawfully, or two inequivalent lawful compositions both stand.":
    "要么没有任何合法的组合方式，要么有两个不等价的合法组合同时成立。",
  "Every phase seals its state on the way out, which is why an interrupted episode continues instead of restarting, and why a mismatch of environment or Atlas on resumption is refused by name instead of quietly producing different numbers.":
    "每个阶段在离开时都会把状态封起来——所以被打断的回合是接着走，而不是重来；也所以恢复时环境或 Atlas 对不上，会被按名拒绝，而不是悄悄给出另一组数。",
  "Every shortcut has to be presentable":
    "任何抄近路都必须拿得出来",
  "Every step has a price, and the budget is finite":
    "每一步都有价钱，而预算是有限的",
  "Everything an episode leaves behind can be listed. That is what makes a later disagreement resolvable: two runs can be compared register by register instead of being argued about — and the learned volume can simply be removed, which is how every published learning number was measured.":
    "一个回合留下的一切都能列举出来。正是这一点让日后的分歧可解：两次运行可以逐个寄存器地比对，而不是互相争论——而且已学到的卷宗可以直接卸掉，每一个已公布的学习数字就是这么测出来的。",
  "Executable local maps are built":
    "构建可执行的局部图",
  "Four constraints do the work, and none of them is an intention.":
    "干活的是四条约束，而它们没有一条是「打算」。",
  "Four of the five below end in a boundary and one in a rejection, and the record says which. The difference matters: a boundary is a lawful run that could not settle the question, a rejection is a run that was not lawful at all. Collapsing the two would make every stop look the same.":
    "下面五条里有四条以边界收尾，一条以拒绝收尾，而记录会写明是哪一种。这个区别要紧：边界是一次合法的运行没能把问题定下来，拒绝是这次运行根本就不合法。把两者混在一起，所有的停止就都长成一个样子了。",
  "GALO works out which candidate is best.":
    "GALO 会算出哪个候选最好。",
  "How GALO Thinks — The Route an Episode Travels":
    "GALO 如何思考 — 一次推理所走的路线",
  "INSIDE ONE BOUNDED STEP":
    "在一个受限步骤的内部",
  "Inside one bounded step":
    "在一个受限步骤的内部",
  "It cannot. The budget is finite and counted as it is spent, and exhausting it is a lawful outcome with a named cause. An episode ends on a settled answer or on a boundary, never on having tried for long enough.":
    "做不到。预算是有限的，而且是边花边数的，用完了是一个带具体成因的合法结果。一个回合结束于一个已定下来的答案，或者一个边界，绝不结束于「试得够久了」。",
  "It is not, and the gap is published rather than glossed. The measuring path of the sealed campaigns is a counting ranker reading a learned volume; the tower, the typed routes, and the verifier are not in that path, so their joint contribution is not established. An end-to-end run that would settle it is the next registered step.":
    "不是——而且这个缺口是公开写出来的，不是抹过去的。那几场封存实验的测量路径，是一个读取已学卷宗的计数式排序器；塔、带类型的路线和校验器都不在这条路径上，所以它们的共同贡献并没有被确立。能把这件事定下来的端到端运行，是下一个已登记的步骤。",
  "Lawful models become executable local maps, and any already-proven structure whose signature matches is consumed instead of being rebuilt.":
    "合法的模型变成可执行的局部图；任何签名对得上的、已经被证明过的结构，会被直接取用，而不是重新搭一遍。",
  "Learning opens only after an outside disclosure":
    "学习只在外部揭示之后才打开",
  "No available probe would tell the surviving readings apart.":
    "现有的任何一个探针都区分不开活下来的那些读法。",
  "No external reveal is available, or the outcome it reports is not verified.":
    "拿不到外部揭示，或者它报回来的结果没有被核实。",
  "No lawful composition exists, or several inequivalent ones do.":
    "不存在合法的组合，或者存在好几个互不等价的合法组合。",
  "No parameter is fitted, adjusted, or accumulated. What differs between two runs is the order candidates are tried in and which proven structures are already available — never what counts as a lawful answer.":
    "没有任何参数被拟合、被调整、被累积。两次运行之间不同的是候选被尝试的次序，以及哪些已证明的结构已经在手上——而不是「什么算作一个合法的答案」。",
  "No single lawful composition":
    "没有唯一的合法组合",
  "Nothing is chosen for being most plausible. When there is nothing to tell the alternatives apart, the route must take a probe or return a boundary. The one thing it may not do is hand back the likeliest reading as though it had been established.":
    "没有什么东西是因为「更像」而被选中的。当各种可能之间无从区分时，路线必须取一个探针，或者返回一个边界。它唯一不被允许做的，就是把最可能的那个读法当成已经确定的交回来。",
  "Nothing is learned here, since there are no weights.":
    "既然没有权重，那就什么也没学到。",
  "Nothing is scored. When the alternatives cannot be told apart, the route takes a probe or returns a boundary — it never hands back the most plausible one as though it had been established.":
    "什么都不打分。当各种可能分不开时，路线要么取探针，要么返回边界——它绝不会把最像的那个当成已经确定的交回来。",
  "Nothing left to distinguish with":
    "已经没有东西可以用来区分了",
  "Nothing. Learning cannot reach the verdict.":
    "什么也没有。学习够不到裁定。",
  "ONE EPISODE, FROM OPENING TO SEAL":
    "一个回合，从开启到封存",
  "One accepted observation carried through one bounded step":
    "一个被接受的观察，走完一个受限的步骤",
  "One bounded step with concrete values":
    "一个受限步骤，带上具体数值",
  "One distinguishing probe is taken":
    "取一个能区分的探针",
  "One episode, phase by phase":
    "一个回合，逐个阶段",
  "One episode in seven phases, with two lawful ways out of it":
    "一个回合走七个阶段，外加两个合法的出口",
  "One turn of the cycle":
    "循环走一圈",
  "Proven structures and their lifecycle":
    "已证明的结构，以及它们的生命周期",
  "Reachable from any phase, and a legitimate way for an episode to end.":
    "从任何阶段都能到达，而且是一个回合合法的收尾方式。",
  "Reaching a decision here is not a hidden chain of reasoning. It is a closed set of phases with two lawful ways out, a budget counted in units as it is spent, and a learning phase that opens only after somebody outside the system discloses what actually happened. This page walks the whole of it, then shows the one bounded step of the frozen kernel release inside it — and ends with the part of the route the published results did not measure.":
    "在这里作出一个决定，不是一条藏起来的推理链。它是一个封闭的阶段集合，带两个合法出口，带一份边花边数的预算，还带一个只在系统之外有人揭示实际发生了什么之后才打开的学习阶段。这一页把它整条走完，然后在它里面展示冻结版本那一个受限步骤——最后落在这条路线上已公布结果没有测到的那一部分。",
  "Read the diagram once for the shape and then the cards below it for the substance. Each card states the question the phase answers, what it does with the answer, and the condition under which the episode stops there instead of continuing. There is no unnamed state to fall into: a request for a phase outside this set is refused rather than improvised.":
    "先看一遍图，抓形状；再看图下面的卡片，抓内容。每张卡片写明这个阶段回答的是什么问题、它拿这个答案做什么，以及在什么条件下回合会停在这里而不是继续。没有无名的状态可以掉进去：请求这个集合之外的阶段会被拒绝，而不是被临时编出来。",
  "Seven numbered boxes laid out in three rows and joined by arrows in reading order, from opening the candidate space through to sealing the episode. Below them sit two wider boxes marked BOUNDARY and REJECT, drawn dashed, reachable from any of the seven.":
    "七个编号的方块排成三行，按阅读顺序用箭头连起来，从打开候选空间一直到封存回合。它们下方是两个更宽的方块，标着 BOUNDARY 与 REJECT，用虚线画出，从这七个里的任何一个都能到达。",
  "Seven phases, and the set is closed.":
    "七个阶段，而且集合是封闭的。",
  "Seven phases, and two ways out that are not the seventh.":
    "七个阶段，外加两个出口——而它们不是第八个阶段。",
  "Several readings survive and no available probe would separate them.":
    "有好几个读法活了下来，而现有的任何探针都分不开它们。",
  "Step":
    "步骤",
  "Structures that passed the formation checks, each standing as active, weakened, or retired.":
    "通过了形成检查的结构，每一条都标着「有效」「被削弱」或「已退役」。",
  "THE WHOLE ROUTE ON ONE SCREEN":
    "整条路线，一屏之内",
  "The GALO reasoning route: seven phases and two lawful exits, where an episode is allowed to stop, one bounded step of the frozen release with its exact values, what survives an episode, and what the published results did not measure.":
    "GALO 的推理路线：七个阶段与两个合法出口、一次推理允许在何处停下、冻结版本那一步的确切数值、一次推理之后留下什么，以及已公布结果没有测到的部分。",
  "The candidate portfolio cannot be completed, or materialising it would exceed the declared limit.":
    "候选组合补不齐，或者把它铺开会超出声明的上限。",
  "The candidate space is opened":
    "打开候选空间",
  "The composition has to be unique up to lawful equivalence. Two inequivalent lawful compositions are not settled by preference: the route reports that it holds two of them and stops, because choosing between them would be exactly the unrecorded judgement this design exists to avoid.":
    "组合必须在合法等价意义下唯一。两个不等价的合法组合不靠偏好来了断：路线会报告它手上有两个，然后停下来——因为在它们之间挑一个，恰恰就是这套设计要避免的那种没被记录下来的判断。",
  "The counted work for the episode reaches its declared budget before the route completes.":
    "这一回合数出来的工作量，在路线走完之前就达到了给它声明的预算。",
  "The environment or the Atlas does not match the checkpoint being resumed.":
    "环境或 Atlas 与正在恢复的那个检查点对不上。",
  "The episode closes on a typed terminal, and its state and checkpoint are sealed so the route can be resumed with an identical result.":
    "回合以一个带类型的终止状态收尾，它的状态与检查点被封存起来，好让这条路线能以完全相同的结果被接着走。",
  "The episode is rejected rather than repaired. A rejection says the run was not lawful at all, which is a different statement from a boundary and is kept separate in the record.":
    "这一回合是被拒绝的，不是被修好的。拒绝说的是「这次运行根本就不合法」，这和边界是两种不同的陈述，在记录里也是分开放的。",
  "The episode is sealed":
    "回合被封存",
  "The episode opens, the space of lawful candidates is materialised, and the portfolio is checked for completeness before anything is chosen.":
    "回合开启，合法候选的空间被铺开，并且在选任何东西之前先检查这份组合是否完整。",
  "The episode stops before anything is chosen, because a choice out of a space nobody can vouch for is not a lawful choice.":
    "回合在选任何东西之前就停下来，因为从一个没人能担保的空间里做出的选择，不是一个合法的选择。",
  "The episode's record":
    "回合的记录",
  "The evidence did not distinguish, no lawful composition was unique, no external reveal was available, or the counted budget ran out. In each case the cause is named in the record, so a stop is something a reader can examine rather than an absence of output.":
    "证据不足以区分；没有哪个合法组合是唯一的；拿不到外部揭示；或者数出来的预算用完了。每一种情形，成因都写在记录里，所以停止是读者可以去查的东西，而不是「没有输出」。",
  "The evidence does not distinguish, or the probe taken is not the probe that was declared.":
    "证据区分不开，或者取的不是当初声明的那个探针。",
  "The frozen release holds its learning counters at zero by construction, so two runs of it separated by a thousand others behave identically. The learning described on this page belongs to the sealed programme, which is a different artefact measured against itself with its learned volume detached.":
    "冻结版本按构造把它的学习计数器压在零上，所以它的两次运行哪怕中间隔着一千次别的运行，表现也一样。这一页讲的学习属于那套封存的程序——那是另一个物件，是把已学到的卷宗卸掉之后拿它自己来比出来的。",
  "The frozen release performs one step, and every value in it can be recomputed.":
    "冻结版本只走一步，而这一步里的每一个数值都可以被重新算出来。",
  "The interesting question about any decision-making system is what it carries forward, because that is what a later behaviour depends on. Two of the three carried registers hold something that was learned — which is why the second one can be detached and the same engine run without it.":
    "关于任何一套决策系统，有意思的问题都是：它把什么带到下一次去，因为后来的行为正是靠这个。三个被带走的寄存器里有两个装着学到的东西——所以第二个可以被卸下来，让同一个引擎在没有它的情况下跑。",
  "The laws, the candidate set, and the verifier's authority are frozen with respect to everything above. An episode may end up doing less work than the one before it; it may not end up being allowed more.":
    "法则、候选集合与校验器的权限，相对于上面这一切都是冻住的。一个回合可以做的活比上一个少；它不能变成「被允许做的事更多了」。",
  "The learned volume":
    "已学到的卷宗",
  "The outcome is disclosed from outside":
    "结果由外部揭示",
  "The outcome is typed, not scored":
    "结果是带类型的，不是打分打出来的",
  "The outcome of the action is disclosed by an external evaluator, and its record is required before the route may continue.":
    "这个动作的结果由一个外部评估者揭示，而且在路线能继续之前，必须先有它的记录。",
  "The policy snapshot the intent was formed against is no longer current.":
    "当初形成这个意图时所依据的策略快照，已经不是当前的了。",
  "The portfolio cannot be completed, or the space cannot be materialised within the declared limit.":
    "候选组合补不齐，或者这个空间在声明的上限之内铺不开。",
  "The route an episode travels, phase by phase.":
    "一次推理所走的路线，逐个阶段。",
  "The route drawn on this page is what the published results measured.":
    "这一页画出来的路线，就是已公布结果所测的东西。",
  "The route keeps going until it is satisfied.":
    "路线会一直走，直到它满意为止。",
  "The route may not confirm itself. Until an external evaluator discloses the outcome, no durable state may change, and an attempt to change it before that point is refused by name and written down.":
    "路线无权自己确认自己。在外部评估者揭示结果之前，任何持久状态都不能改；在那之前试图去改，会被按名拒绝并记录下来。",
  "The route ran lawfully and could not settle it":
    "路线走得合法，但没能把它定下来",
  "The run was not lawful, and is not repaired":
    "这次运行不合法，而且不予修补",
  "The set of probes and their cost are fixed before the episode begins. The policy may choose among them; it may not change them or reprice them. That is the rule which keeps a probe from turning into a way of justifying a conclusion already reached.":
    "探针的集合和它们的价钱在回合开始之前就定死了。策略可以在其中挑，但不能改动它们，也不能给它们重新定价。正是这条规则，让探针不至于变成给一个已经得出的结论找理由的手段。",
  "The seven phases of one GALO episode and its two lawful exits":
    "GALO 一个回合的七个阶段，以及它的两个合法出口",
  "The space could not be opened in full":
    "这个空间没能被完整打开",
  "The surviving maps are composed":
    "把活下来的局部图组合起来",
  "The surviving maps are composed into a single multi-place structure, and proven structures are applied again wherever they cover it.":
    "活下来的局部图被组合成一个多元结构，凡是已证明的结构能覆盖到的地方，就再一次被用上。",
  "The word names a written-out route with declared phases, a counted budget, and a typed outcome. No claim about cognition, understanding, or awareness is made here or anywhere else on this site.":
    "这个词指的是一条写明白的路线：阶段是声明好的，预算是数出来的，结果是带类型的。关于认知、理解或意识的任何主张，这里没有，这个网站别处也没有。",
  "The work budget is spent":
    "工作预算用完了",
  "There are no weights, and there is learning. What is learned is where to look and in what order, held in a volume that can be detached; what may never be learned is the verdict. The measured results, and the comparator they were measured against, are on the evidence page.":
    "没有权重，而学习是有的。学到的是「去哪里找、按什么次序找」，装在一个可以卸下来的卷宗里；永远学不到的是裁定。测出来的结果，以及它们是拿什么作比较测出来的，都在证据页上。",
  "This is not the route above; it is one bounded step of the frozen kernel release, which performs no policy update at all. It is here because it is the part of the system with the hardest numbers attached: the space is closed before the run starts, every cut is a rule anyone can read, and the ordering can be recomputed from the record alone.":
    "这不是上面那条路线；这是冻结内核版本的一个受限步骤，而它根本不做任何策略更新。它放在这里，是因为它是整套系统里数字最硬的一部分：空间在运行开始之前就已经封闭，每一次收窄都是一条谁都能读的规则，而次序光凭记录就能重新算出来。",
  "This is where knowledge gets used rather than merely stored. When a proven structure covers a signature the episode needs, the step is taken from that structure and the shortcut leaves its own record — so a reduction in work can always be pointed at, instead of appearing as an unexplained improvement.":
    "在这里，知识不是只被存着，而是被用上。当一条已证明的结构覆盖了这一回合需要的签名，这一步就从那条结构里取，而这个近路会留下它自己的记录——所以工作量的下降永远是能指出来的，而不是一个说不清的改善。",
  "Three registers are carried forward. Two familiar ones are still absent.":
    "三个寄存器被带到下一次去。两个人们熟悉的东西依然不在。",
  "Three registers survive an episode, and two familiar ones are still absent.":
    "有三个寄存器能挺过一个回合，而两个人们熟悉的东西依然不在。",
  "WHAT SURVIVES AN EPISODE":
    "一个回合之后留下什么",
  "WHY THIS IS A ROUTE AND NOT A SEARCH":
    "为什么这是路线，不是搜索",
  "What actually happened, according to somebody other than me?":
    "按我以外的人的说法，实际发生的是什么？",
  "What can somebody else replay from this?":
    "别人能凭这些重放出什么？",
  "What could lawfully happen here at all?":
    "在这里，究竟什么才可能是合法发生的？",
  "What is updated is where to look and in what order — never what counts as permitted. A policy snapshot that has gone stale is refused rather than merged, so two independent replays of the same episode land on the same state rather than on two nearly identical ones.":
    "被更新的是「去哪里找、按什么次序找」——而绝不是「什么算被允许」。过期的策略快照是被拒绝的，不是被合并的，所以同一个回合的两次独立重放会落到同一个状态上，而不是两个几乎一样的状态上。",
  "What may I keep from this, and what may I never keep?":
    "这里面哪些我可以留下来，哪些我永远不能留？",
  "What survives an episode":
    "一个回合之后留下什么",
  "What the counted work actually came to, and against which comparator":
    "数出来的工作量最后落到多少，又是对着什么比较基准",
  "What was checked, what was probed, what ran, what was refused, and how much work it cost.":
    "检查了什么、探了什么、跑了什么、拒了什么，以及这一切花掉多少工作量。",
  "What would tell these readings apart?":
    "什么东西能把这些读法分开？",
  "Where an episode is allowed to stop":
    "一个回合允许在哪里停下",
  "Which readings of this situation are lawful?":
    "对这个局面，哪些读法是合法的？",
  "Why this is a route and not a search":
    "为什么这是路线，不是搜索",
  "Why this step learns nothing":
    "为什么这一步什么也学不到",
  "Without an external reveal the route has no right to learn. This is the single rule that separates learning from self-confirmation: a system allowed to score its own outcomes can improve its numbers indefinitely without improving anything else.":
    "没有外部揭示，路线就没有学习的权利。这是把学习和自我确认分开的唯一一条规则：一个被允许给自己的结果打分的系统，可以无止境地把自己的数字做好看，而别的什么都没变好。",
  "Work goes down by consuming structures that were already proven, and each such consumption leaves its own record. A reduction nobody can point at is treated here as a defect rather than as a result.":
    "工作量的下降，靠的是取用已经被证明过的结构，而每一次这样的取用都会留下它自己的记录。一个谁也指不出来的下降，在这里被当作缺陷，而不是成果。",
  "Work is counted in units as it is spent, and exhausting the budget is a lawful outcome with a named cause rather than a quiet decline in quality. That is what makes the difference between two runs a quantity instead of an impression.":
    "工作量是边花边按单位数的，而预算用尽是一个带具体成因的合法结果，不是质量的悄悄下滑。正是这一点，让两次运行之间的差别成为一个量，而不是一种印象。",
  "absent by construction, not merely unused":
    "按构造就不在，而不只是没被用上",
  "carried into the next episode":
    "带进下一个回合",
  "dashed: a lawful exit, reachable from any phase":
    "虚线：合法出口，从任何阶段都能到达",
  "detach the volume and the same engine runs without it":
    "把卷宗卸掉，同一个引擎照样跑",
  "lawful, unsettled":
    "合法，未定",
  "solid: a phase of the route":
    "实线：路线的一个阶段",
  "unlawful, refused":
    "不合法，已拒绝",
};

export const reasoningRouteAr: TranslationDictionary = {
  "CLOSED SET":
    "مجموعة مغلقة",
  "ONE EPISODE · SEVEN PHASES":
    "حلقة واحدة · سبع مراحل",
  "One episode of GALO reasoning, drawn from opening to seal":
    "حلقةُ استدلالٍ واحدة في GALO، مرسومةً من الفتح إلى الختم",
  "One episode of reasoning, and the receipt it leaves":
    "حلقةُ استدلالٍ واحدة والإيصال الذي تتركه",
  "Seven phases stacked top to bottom, from opening the candidate space to sealing the episode, each joined to the next by an arrow. A dashed rail runs down the right of all seven and ends in two boxes marked BOUNDARY and REJECT, so either exit is reachable from any phase.":
    "سبع مراحل مرصوفة من الأعلى إلى الأسفل، من فتح فضاء المرشحين إلى ختم الحلقة، كلٌّ منها موصولةٌ بالتالية بسهم. وعلى اليمين يمتدّ بمحاذاة السبع جميعًا قضيبٌ متقطّع ينتهي إلى مربّعين مكتوبٍ عليهما BOUNDARY وREJECT، فكلا المخرجين يُبلَغ من أي مرحلة.",
  "Work is counted as it is spent, and either exit is reachable from any phase. A stop is a recorded outcome with a named cause, not a missing answer.":
    "يُحسَب العمل وهو يُنفَق، وكلا المخرجين يُبلَغ من أي مرحلة. والتوقّف نتيجةٌ مسجَّلة بسببٍ مسمّى لا جوابًا غائبًا.",
  "candidates opened in full":
    "المرشحون مفتوحون كاملًا",
  "maps built, structures reused":
    "خرائط تُبنى وبنى تُعاد",
  "one distinguishing probe":
    "مسبارٌ فارقٌ واحد",
  "one lawful whole, or none":
    "كلٌّ مشروعٌ واحد أو لا شيء",
  "sealed, and replayable by others":
    "مختومٌ ويُعيد تشغيله غيرك",
  "the order changes, not the verdict":
    "يتغيّر الترتيب لا الحكم",
  "the outcome comes from outside":
    "النتيجة تأتي من الخارج",
  "A STOP IS A RESULT":
    "التوقف نتيجة",
  "A boundary is returned naming what could not be separated, rather than the reading the route happens to find most plausible.":
    "يُعاد حدٌّ يسمّي ما تعذّر الفصل بينه، لا القراءة التي يصادف أن يجدها المسار أرجح.",
  "A boundary is returned with the budget as its named cause, so running out is never confused with having answered poorly.":
    "يُعاد حدٌّ سببه المسمّى هو الميزانية، فلا يُخلط نفادها يومًا بجوابٍ رديء.",
  "A broken invariant, refused by name rather than corrected in flight.":
    "ثابتٌ انكسر، فيُرفض بالاسم بدل أن يُصلَح أثناء الجريان.",
  "A distinguishing probe is chosen and executed, the observation is recorded, attributed to the assumption it bears on, and the affected map is revised locally.":
    "يُختار مسبارٌ فارق ويُنفَّذ، وتُسجَّل الملاحظة وتُنسَب إلى الافتراض الذي تمسّه، وتُنقَّح الخريطة المتأثِّرة محليًا.",
  "A learning intent is formed and applied: the ordering and the durable Atlas state change, and the laws, the candidate set, and the verdict do not.":
    "يُصاغ قصدُ تعلُّمٍ ويُطبَّق: يتغيَّر الترتيب وحالة الأطلس الدائمة، ولا تتغيَّر القوانين ولا مجموعة المرشحين ولا الحكم.",
  "A probe set changed under the policy, a stale snapshot submitted, a phase outside the declared set requested. The episode is rejected rather than salvaged, because a run that repaired its own violations would be a run nobody could reason about afterwards.":
    "غُيِّرت مجموعة المسابر تحت السياسة، أو قُدِّمت لقطةٌ قديمة، أو طُلبت مرحلةٌ خارج المجموعة المعلنة. تُرفض الحلقة ولا تُنقَذ، لأن تشغيلًا يُصلح مخالفاته بنفسه تشغيلٌ لا يستطيع أحدٌ أن يحاجّ فيه بعد ذلك.",
  "A probe set or its price was changed under the policy, a stale snapshot was submitted, or an undeclared phase was requested.":
    "غيّرت السياسة مجموعة المسابر أو ثمنها، أو قُدِّمت لقطةٌ قديمة، أو طُلبت مرحلةٌ غير معلنة.",
  "A search wanders an open space and reports the best thing it turned up. Each of the four below is a rule the engine enforces, so what comes out is either something that was settled or a named reason it could not be.":
    "البحث يجول في فضاءٍ مفتوح ويبلّغ بأفضل ما عثر عليه. وكلٌّ من الأربعة أدناه قاعدةٌ يفرضها المحرك، فما يخرج إما شيءٌ حُسم وإما سببٌ مسمّى لتعذُّر حسمه.",
  "A structure is weakened by a counterexample rather than deleted quietly, and everything derived from it loses force with it. So a structure that turns out to be wrong leaves a trail instead of disappearing from the story.":
    "تضعُف البنية بمثالٍ مضادّ لا بحذفٍ صامت، ويسقط معها كلُّ ما اشتُقَّ منها. فالبنية التي تتبيَّن خطأها تترك أثرًا بدل أن تختفي من الحكاية.",
  "A written-out route with declared phases, a counted budget, and a typed outcome at the end of it.":
    "مسارٌ مكتوبٌ بمراحل معلنة، وميزانيةٍ محسوبة، ونتيجةٍ مصنَّفة في نهايته.",
  "An invariant was broken":
    "انكسر ثابت",
  "An upper band with three solid boxes labelled receipts, learned volume, and proven structures, and a lower band drawn with a dashed border containing two boxes labelled weights and wider verdict, each marked with a cross.":
    "شريطٌ علويّ فيه ثلاثة مربّعاتٍ صُلبة: الإيصالات، والمجلَّد المُتعلَّم، والبنى المُثبَتة؛ وشريطٌ سفليّ مرسومٌ بإطارٍ متقطّع يضمّ مربّعين معلَّمين بعلامة شطب: الأوزان والحكم الأوسع.",
  "Any change to what is permitted":
    "أيّ تغييرٍ لما هو مسموح به",
  "Append-only and linked back to the observation it came from, so what was learned cannot be shown without the episodes that produced it. A record is read by people and by replay tooling, never by the decision path of a later episode.":
    "لا يُكتب إلا إضافةً، ومربوطٌ بالملاحظة التي جاء منها، فلا يمكن إظهار ما تُعلِّم دون الحلقات التي أنتجته. يقرأ السجلَّ البشرُ وأدواتُ إعادة التشغيل، ولا يقرأه أبدًا مسارُ قرارِ حلقةٍ لاحقة.",
  "Both are reported as boundaries. The second is the interesting one: holding two answers is stated outright rather than resolved by preference.":
    "كلتا الحالتين تُبلَّغ حدًّا. والثانية هي الطريفة: أن تكون بيدك إجابتان أمرٌ يُقال صراحةً لا يُحسَم بالتفضيل.",
  "Candidates are enumerated from the declared laws rather than proposed by a model. Because completeness is checked instead of assumed, an incomplete portfolio is itself a recorded outcome: the route stops and names the part it could not open, rather than continuing over a space it cannot vouch for.":
    "يُعدَّد المرشحون من القوانين المعلنة لا يقترحهم نموذج. والاكتمال يُفحص ولا يُفترض، فالمحفظة الناقصة نتيجةٌ مسجَّلة بذاتها: يتوقّف المسار ويسمّي الجزء الذي تعذّر عليه فتحه، بدل أن يمضي فوق فضاءٍ لا يضمنه.",
  "Counters and learned orders over what to try first, held in a volume that can be detached.":
    "عدّادات وترتيباتٌ مُتعلَّمة لما يُجرَّب أولًا، محفوظةٌ في مجلَّدٍ يمكن فصله.",
  "Detachable is the operative word. The same engine runs with the volume mounted and with it removed, and the difference between those two runs is what every published learning number measures. Nothing in the volume is a weight, and nothing in it can widen what is permitted.":
    "الكلمة المفتاح هي «قابل للفصل». يعمل المحرك نفسه والمجلَّد مركَّب ويعمل وقد نُزع، والفرق بين هذين التشغيلين هو ما يقيسه كلُّ رقمِ تعلُّمٍ منشور. وليس في المجلَّد وزنٌ واحد، ولا فيه ما يستطيع توسيع ما هو مسموح به.",
  "Does one lawful whole come out of what survived?":
    "هل يخرج من الباقي كلٌّ مشروعٌ واحد؟",
  "Durable state is updated, and only durable state":
    "تُحدَّث الحالة الدائمة، ولا شيء سواها",
  "Each phase answers one question and hands one object to the next. The phase set is closed, so there is no unnamed state to fall into: an episode is either in one of the seven or on one of the two exits, and the exits are reachable from any phase rather than only from the end.":
    "كلُّ مرحلةٍ تجيب عن سؤالٍ واحد وتسلّم التاليةَ شيئًا واحدًا. ومجموعة المراحل مغلقة، فلا حالةَ بلا اسمٍ يُسقَط فيها: الحلقة إما في واحدةٍ من السبع وإما على أحد المخرجين، والمخرجان يُبلغان من أي مرحلةٍ لا من النهاية وحدها.",
  "Either nothing composes lawfully, or two inequivalent lawful compositions both stand.":
    "إما ألّا يتركّب شيءٌ بصورةٍ مشروعة، وإما أن يقوم تركيبان مشروعان غير متكافئين.",
  "Every phase seals its state on the way out, which is why an interrupted episode continues instead of restarting, and why a mismatch of environment or Atlas on resumption is refused by name instead of quietly producing different numbers.":
    "كلُّ مرحلةٍ تختم حالتها وهي تغادر، ولهذا تُستأنَف الحلقةُ المقطوعة ولا تبدأ من جديد، ولهذا يُرفض اختلافُ البيئة أو الأطلس عند الاستئناف بالاسم بدل أن يُعطي أرقامًا أخرى في صمت.",
  "Every shortcut has to be presentable":
    "كلُّ اختصارٍ يجب أن يكون قابلًا للإبراز",
  "Every step has a price, and the budget is finite":
    "لكلِّ خطوةٍ ثمن، والميزانية منتهية",
  "Everything an episode leaves behind can be listed. That is what makes a later disagreement resolvable: two runs can be compared register by register instead of being argued about — and the learned volume can simply be removed, which is how every published learning number was measured.":
    "كلُّ ما تتركه الحلقة وراءها يمكن تعداده. وهذا ما يجعل الخلاف اللاحق قابلًا للحسم: يمكن مقارنة تشغيلين سجلًا بسجلّ بدل التنازع فيهما — والمجلَّد المُتعلَّم يمكن نزعه ببساطة، وهكذا قِيس كلُّ رقمِ تعلُّمٍ منشور.",
  "Executable local maps are built":
    "تُبنى خرائط محلية قابلة للتنفيذ",
  "Four constraints do the work, and none of them is an intention.":
    "أربعة قيودٍ هي التي تؤدّي العمل، وليس أيٌّ منها نيّة.",
  "Four of the five below end in a boundary and one in a rejection, and the record says which. The difference matters: a boundary is a lawful run that could not settle the question, a rejection is a run that was not lawful at all. Collapsing the two would make every stop look the same.":
    "أربعةٌ من الخمسة أدناه تنتهي بحدّ وواحدٌ برفض، والسجل يقول أيّهما. والفرق مهم: الحدُّ تشغيلٌ مشروع لم يستطع حسم المسألة، والرفض تشغيلٌ لم يكن مشروعًا أصلًا. ودمجهما يجعل كلَّ توقُّفٍ يبدو كسواه.",
  "GALO works out which candidate is best.":
    "يستنتج GALO أيُّ المرشحين أفضل.",
  "How GALO Thinks — The Route an Episode Travels":
    "كيف يفكّر GALO — المسار الذي تسلكه الحلقة",
  "INSIDE ONE BOUNDED STEP":
    "داخل خطوةٍ واحدة محدودة",
  "Inside one bounded step":
    "داخل خطوةٍ واحدة محدودة",
  "It cannot. The budget is finite and counted as it is spent, and exhausting it is a lawful outcome with a named cause. An episode ends on a settled answer or on a boundary, never on having tried for long enough.":
    "لا يستطيع. الميزانية منتهية وتُحسب وهي تُنفَق، ونفادها نتيجةٌ مشروعة بسببٍ مسمّى. تنتهي الحلقة بجوابٍ محسوم أو بحدّ، ولا تنتهي أبدًا بأنها حاولت طويلًا بما يكفي.",
  "It is not, and the gap is published rather than glossed. The measuring path of the sealed campaigns is a counting ranker reading a learned volume; the tower, the typed routes, and the verifier are not in that path, so their joint contribution is not established. An end-to-end run that would settle it is the next registered step.":
    "ليس كذلك، والفجوة منشورةٌ لا مطموسة. فمسار القياس في الحملات المختومة مرتِّبٌ عدَّاديّ يقرأ مجلَّدًا مُتعلَّمًا؛ أما البرج والمسارات المصنَّفة والمدقّق فليست في ذلك المسار، ولذلك لم يثبت إسهامها المشترك. والتشغيل الشامل الذي يحسم ذلك هو الخطوة المسجَّلة التالية.",
  "Lawful models become executable local maps, and any already-proven structure whose signature matches is consumed instead of being rebuilt.":
    "تصير النماذج المشروعة خرائط محلية قابلة للتنفيذ، وكلُّ بنيةٍ مُثبَتة سلفًا يطابق توقيعُها تُستهلَك بدل أن تُبنى من جديد.",
  "Learning opens only after an outside disclosure":
    "لا يُفتح التعلُّم إلا بعد كشفٍ من الخارج",
  "No available probe would tell the surviving readings apart.":
    "لا مسبار متاح يفرّق بين القراءات الباقية.",
  "No external reveal is available, or the outcome it reports is not verified.":
    "لا يتوفّر كشفٌ خارجي، أو أن النتيجة التي أبلغ عنها غير مُتحقَّق منها.",
  "No lawful composition exists, or several inequivalent ones do.":
    "لا وجود لتركيبٍ مشروع، أو أن هناك عدةَ تراكيب مشروعة غير متكافئة.",
  "No parameter is fitted, adjusted, or accumulated. What differs between two runs is the order candidates are tried in and which proven structures are already available — never what counts as a lawful answer.":
    "لا يُضبَط بارامتر ولا يُعدَّل ولا يُراكَم. والذي يختلف بين تشغيلين هو ترتيبُ تجريب المرشحين وأيُّ البنى المُثبَتة متاحٌ سلفًا — لا ما يُعَدُّ جوابًا مشروعًا.",
  "No single lawful composition":
    "لا تركيب مشروع واحد",
  "Nothing is chosen for being most plausible. When there is nothing to tell the alternatives apart, the route must take a probe or return a boundary. The one thing it may not do is hand back the likeliest reading as though it had been established.":
    "لا شيء يُختار لكونه الأرجح. وحين لا يوجد ما يفرّق بين البدائل، وجب على المسار أن يأخذ مسبارًا أو يعيد حدًّا. والشيء الوحيد الذي لا يحقّ له هو أن يعيد القراءة الأرجح وكأنها ثبتت.",
  "Nothing is learned here, since there are no weights.":
    "ما دامت لا أوزان، فلا تعلُّمَ إذن.",
  "Nothing is scored. When the alternatives cannot be told apart, the route takes a probe or returns a boundary — it never hands back the most plausible one as though it had been established.":
    "لا شيء يُسجَّل بدرجة. وحين يتعذّر التمييز بين البدائل، يأخذ المسار مسبارًا أو يعيد حدًّا — ولا يعيد الأرجح قطُّ وكأنه ثبت.",
  "Nothing left to distinguish with":
    "لم يبقَ ما يُفرَّق به",
  "Nothing. Learning cannot reach the verdict.":
    "لا شيء. لا يبلغ التعلُّمُ الحكمَ.",
  "ONE EPISODE, FROM OPENING TO SEAL":
    "حلقةٌ واحدة، من الفتح إلى الختم",
  "One accepted observation carried through one bounded step":
    "ملاحظةٌ واحدة مقبولة تُساق عبر خطوةٍ واحدة محدودة",
  "One bounded step with concrete values":
    "خطوةٌ واحدة محدودة بقيمٍ محدَّدة",
  "One distinguishing probe is taken":
    "يُؤخذ مسبارٌ فارقٌ واحد",
  "One episode, phase by phase":
    "حلقةٌ واحدة، مرحلةً مرحلة",
  "One episode in seven phases, with two lawful ways out of it":
    "حلقةٌ واحدة في سبع مراحل، ولها مخرجان مشروعان",
  "One turn of the cycle":
    "دورةٌ واحدة",
  "Proven structures and their lifecycle":
    "البنى المُثبَتة ودورة حياتها",
  "Reachable from any phase, and a legitimate way for an episode to end.":
    "يُبلَغ من أي مرحلة، وهو طريقةٌ مشروعة لانتهاء الحلقة.",
  "Reaching a decision here is not a hidden chain of reasoning. It is a closed set of phases with two lawful ways out, a budget counted in units as it is spent, and a learning phase that opens only after somebody outside the system discloses what actually happened. This page walks the whole of it, then shows the one bounded step of the frozen kernel release inside it — and ends with the part of the route the published results did not measure.":
    "الوصول إلى قرارٍ هنا ليس سلسلة استدلالٍ خفيّة. إنه مجموعة مراحل مغلقة بمخرجين مشروعين، وميزانيةٌ تُحسب وهي تُنفَق، ومرحلةُ تعلُّمٍ لا تُفتح إلا بعد أن يكشف أحدٌ من خارج النظام ما جرى فعلًا. تسير هذه الصفحة فيه كلِّه، ثم تُظهر داخله الخطوةَ المحدودة الواحدة للإصدار المجمَّد — وتنتهي بذلك الجزء من المسار الذي لم تقسه النتائج المنشورة.",
  "Read the diagram once for the shape and then the cards below it for the substance. Each card states the question the phase answers, what it does with the answer, and the condition under which the episode stops there instead of continuing. There is no unnamed state to fall into: a request for a phase outside this set is refused rather than improvised.":
    "اقرأ الرسم مرةً للشكل، ثم البطاقات تحته للمضمون. كلُّ بطاقةٍ تذكر السؤال الذي تجيب عنه المرحلة، وما تفعله بالجواب، والشرط الذي تتوقّف عنده الحلقة هنا بدل أن تمضي. ولا حالةَ بلا اسمٍ يُسقَط فيها: طلبُ مرحلةٍ خارج هذه المجموعة يُرفض ولا يُرتجَل.",
  "Seven numbered boxes laid out in three rows and joined by arrows in reading order, from opening the candidate space through to sealing the episode. Below them sit two wider boxes marked BOUNDARY and REJECT, drawn dashed, reachable from any of the seven.":
    "سبعة مربّعات مرقَّمة موزَّعة في ثلاثة صفوف وموصولةٌ بأسهمٍ بترتيب القراءة، من فتح فضاء المرشحين إلى ختم الحلقة. وتحتها مربّعان أعرض معلَّمان BOUNDARY وREJECT، مرسومان بخطٍّ متقطّع، ويُبلغان من أيٍّ من السبعة.",
  "Seven phases, and the set is closed.":
    "سبع مراحل، والمجموعة مغلقة.",
  "Seven phases, and two ways out that are not the seventh.":
    "سبع مراحل، ومخرجان ليسا المرحلة الثامنة.",
  "Several readings survive and no available probe would separate them.":
    "تبقى عدة قراءات ولا مسبار متاح يفصل بينها.",
  "Step":
    "الخطوة",
  "Structures that passed the formation checks, each standing as active, weakened, or retired.":
    "بنى اجتازت فحوص التكوُّن، كلٌّ منها قائمةٌ بوصفها فعّالة أو مُضعَفة أو مُتقاعِدة.",
  "THE WHOLE ROUTE ON ONE SCREEN":
    "المسار كلّه في شاشةٍ واحدة",
  "The GALO reasoning route: seven phases and two lawful exits, where an episode is allowed to stop, one bounded step of the frozen release with its exact values, what survives an episode, and what the published results did not measure.":
    "مسار الاستدلال في GALO: سبع مراحل ومخرجان مشروعان، وأين يُسمح للحلقة بالتوقف، وخطوة واحدة محدودة من الإصدار المجمَّد بقيمها الدقيقة، وما يبقى بعد الحلقة، وما لم تقسه النتائج المنشورة.",
  "The candidate portfolio cannot be completed, or materialising it would exceed the declared limit.":
    "تعذّر إكمال محفظة المرشحين، أو أن تجسيدها يتجاوز الحدَّ المعلن.",
  "The candidate space is opened":
    "يُفتح فضاء المرشحين",
  "The composition has to be unique up to lawful equivalence. Two inequivalent lawful compositions are not settled by preference: the route reports that it holds two of them and stops, because choosing between them would be exactly the unrecorded judgement this design exists to avoid.":
    "يجب أن يكون التركيب وحيدًا حتى التكافؤ المشروع. ولا يُحسم تركيبان مشروعان غير متكافئين بالتفضيل: يبلّغ المسار أنه يحمل اثنين ثم يتوقّف — لأن الاختيار بينهما هو بالضبط ذلك الحكم غير المدوَّن الذي وُجد هذا التصميم لتجنُّبه.",
  "The counted work for the episode reaches its declared budget before the route completes.":
    "يبلغ العملُ المحسوب للحلقة ميزانيتَها المعلنة قبل أن يكتمل المسار.",
  "The environment or the Atlas does not match the checkpoint being resumed.":
    "لا تطابق البيئةُ أو الأطلسُ نقطةَ التفتيش التي يجري استئنافها.",
  "The episode closes on a typed terminal, and its state and checkpoint are sealed so the route can be resumed with an identical result.":
    "تُغلَق الحلقة على طرفٍ مصنَّف، وتُختَم حالتُها ونقطةُ تفتيشها ليُستأنَف المسار بنتيجةٍ مطابقة.",
  "The episode is rejected rather than repaired. A rejection says the run was not lawful at all, which is a different statement from a boundary and is kept separate in the record.":
    "تُرفض الحلقة ولا تُصلَح. والرفض يقول إن التشغيل لم يكن مشروعًا أصلًا، وهذه عبارةٌ غير عبارة الحدّ، وتُحفظ منفصلةً عنها في السجل.",
  "The episode is sealed":
    "تُختَم الحلقة",
  "The episode opens, the space of lawful candidates is materialised, and the portfolio is checked for completeness before anything is chosen.":
    "تُفتَح الحلقة، ويُجسَّد فضاء المرشحين المشروعين، وتُفحَص المحفظة من حيث الاكتمال قبل اختيار أي شيء.",
  "The episode stops before anything is chosen, because a choice out of a space nobody can vouch for is not a lawful choice.":
    "تتوقّف الحلقة قبل اختيار أي شيء، لأن الاختيار من فضاءٍ لا يضمنه أحدٌ ليس اختيارًا مشروعًا.",
  "The episode's record":
    "سجلّ الحلقة",
  "The evidence did not distinguish, no lawful composition was unique, no external reveal was available, or the counted budget ran out. In each case the cause is named in the record, so a stop is something a reader can examine rather than an absence of output.":
    "لم تفرّق الأدلة، أو لم يكن تركيبٌ مشروعٌ وحيدًا، أو لم يتوفّر كشفٌ خارجي، أو نفدت الميزانية المحسوبة. وفي كل حالةٍ يُسمّى السبب في السجل، فالتوقّف شيءٌ يستطيع القارئ فحصه لا غيابًا للمُخرَج.",
  "The evidence does not distinguish, or the probe taken is not the probe that was declared.":
    "لا تفرّق الأدلة، أو أن المسبار المأخوذ ليس المسبار المعلن.",
  "The frozen release holds its learning counters at zero by construction, so two runs of it separated by a thousand others behave identically. The learning described on this page belongs to the sealed programme, which is a different artefact measured against itself with its learned volume detached.":
    "يُبقي الإصدار المجمَّد عدّادات تعلُّمه عند الصفر بحكم البناء، فتشغيلان له يفصل بينهما ألفُ تشغيلٍ آخر يسلكان السلوك نفسه. أما التعلُّم الموصوف في هذه الصفحة فينتمي إلى البرنامج المختوم، وهو قطعةٌ أخرى قِيست في مقابل نفسها وقد نُزع مجلَّدها المُتعلَّم.",
  "The frozen release performs one step, and every value in it can be recomputed.":
    "يؤدّي الإصدار المجمَّد خطوةً واحدة، وكلُّ قيمةٍ فيها يمكن إعادة حسابها.",
  "The interesting question about any decision-making system is what it carries forward, because that is what a later behaviour depends on. Two of the three carried registers hold something that was learned — which is why the second one can be detached and the same engine run without it.":
    "السؤال الطريف عن أي نظام قرارٍ هو ما الذي يحمله إلى ما بعد، لأن السلوك اللاحق يتوقّف عليه. واثنان من السجلات الثلاثة المحمولة يحملان شيئًا مُتعلَّمًا — ولهذا يمكن فصل الثاني وتشغيل المحرك نفسه من دونه.",
  "The laws, the candidate set, and the verifier's authority are frozen with respect to everything above. An episode may end up doing less work than the one before it; it may not end up being allowed more.":
    "القوانين ومجموعة المرشحين وصلاحية المدقّق مجمَّدةٌ تجاه كل ما سبق. قد تنتهي الحلقة بعملٍ أقلَّ من سابقتها؛ ولا يمكن أن تنتهي بأن يُسمح لها بأكثر.",
  "The learned volume":
    "المجلَّد المُتعلَّم",
  "The outcome is disclosed from outside":
    "تُكشَف النتيجة من الخارج",
  "The outcome is typed, not scored":
    "النتيجة مصنَّفة لا مُسجَّلة بدرجة",
  "The outcome of the action is disclosed by an external evaluator, and its record is required before the route may continue.":
    "يكشف مُقيِّمٌ خارجي نتيجةَ الفعل، ويُشترط سجلُّه قبل أن يستطيع المسار المضيّ.",
  "The policy snapshot the intent was formed against is no longer current.":
    "لقطةُ السياسة التي صيغ القصدُ في مقابلها لم تعد الحالية.",
  "The portfolio cannot be completed, or the space cannot be materialised within the declared limit.":
    "تعذّر إكمال المحفظة، أو تعذّر تجسيد الفضاء ضمن الحدّ المعلن.",
  "The route an episode travels, phase by phase.":
    "المسار الذي تسلكه الحلقة، مرحلةً مرحلة.",
  "The route drawn on this page is what the published results measured.":
    "المسار المرسوم في هذه الصفحة هو ما قاسته النتائج المنشورة.",
  "The route keeps going until it is satisfied.":
    "يمضي المسار حتى يرضى.",
  "The route may not confirm itself. Until an external evaluator discloses the outcome, no durable state may change, and an attempt to change it before that point is refused by name and written down.":
    "لا يحقّ للمسار أن يصدّق نفسه. فحتى يكشف مُقيِّمٌ خارجي النتيجة، لا يجوز أن تتغيّر حالةٌ دائمة، ومحاولةُ تغييرها قبل تلك اللحظة تُرفض بالاسم وتُدوَّن.",
  "The route ran lawfully and could not settle it":
    "جرى المسار مشروعًا ولم يستطع حسمه",
  "The run was not lawful, and is not repaired":
    "لم يكن التشغيل مشروعًا، ولا يُصلَح",
  "The set of probes and their cost are fixed before the episode begins. The policy may choose among them; it may not change them or reprice them. That is the rule which keeps a probe from turning into a way of justifying a conclusion already reached.":
    "تُثبَّت مجموعة المسابر وثمنها قبل بدء الحلقة. وللسياسة أن تختار بينها، وليس لها أن تغيّرها أو تعيد تسعيرها. وهذه هي القاعدة التي تمنع المسبار من أن يصير وسيلةً لتبرير نتيجةٍ بُلغت سلفًا.",
  "The seven phases of one GALO episode and its two lawful exits":
    "المراحل السبع لحلقة GALO ومخرجاها المشروعان",
  "The space could not be opened in full":
    "تعذّر فتح الفضاء كاملًا",
  "The surviving maps are composed":
    "تُركَّب الخرائط الباقية",
  "The surviving maps are composed into a single multi-place structure, and proven structures are applied again wherever they cover it.":
    "تُركَّب الخرائط الباقية في بنيةٍ واحدة متعدّدة المواضع، وتُطبَّق البنى المُثبَتة ثانيةً حيثما غطّتها.",
  "The word names a written-out route with declared phases, a counted budget, and a typed outcome. No claim about cognition, understanding, or awareness is made here or anywhere else on this site.":
    "تسمّي الكلمةُ مسارًا مكتوبًا بمراحل معلنة وميزانيةٍ محسوبة ونتيجةٍ مصنَّفة. ولا يُقدَّم أي ادعاءٍ عن الإدراك أو الفهم أو الوعي، لا هنا ولا في أي موضعٍ آخر من هذا الموقع.",
  "The work budget is spent":
    "نفدت ميزانية العمل",
  "There are no weights, and there is learning. What is learned is where to look and in what order, held in a volume that can be detached; what may never be learned is the verdict. The measured results, and the comparator they were measured against, are on the evidence page.":
    "لا أوزان، وثمّة تعلُّم. المُتعلَّم هو أين يُبحَث وبأي ترتيب، محفوظًا في مجلَّدٍ يمكن فصله؛ وما لا يُتعلَّم أبدًا هو الحكم. أما النتائج المقيسة والمُقارِن الذي قِيست في مقابله فعلى صفحة الأدلة.",
  "This is not the route above; it is one bounded step of the frozen kernel release, which performs no policy update at all. It is here because it is the part of the system with the hardest numbers attached: the space is closed before the run starts, every cut is a rule anyone can read, and the ordering can be recomputed from the record alone.":
    "هذا ليس المسار أعلاه؛ إنه خطوةٌ واحدة محدودة من إصدار النواة المجمَّد، وهو لا يُحدِّث السياسة البتّة. وهو هنا لأنه الجزء الذي تتعلّق به أصلب الأرقام: الفضاء مغلقٌ قبل أن يبدأ التشغيل، وكلُّ قطعٍ قاعدةٌ يستطيع أي أحدٍ قراءتها، والترتيب يُعاد حسابه من السجل وحده.",
  "This is where knowledge gets used rather than merely stored. When a proven structure covers a signature the episode needs, the step is taken from that structure and the shortcut leaves its own record — so a reduction in work can always be pointed at, instead of appearing as an unexplained improvement.":
    "هنا تُستعمَل المعرفة لا تُخزَّن فحسب. فحين تغطّي بنيةٌ مُثبَتة توقيعًا تحتاجه الحلقة، تُؤخذ الخطوة من تلك البنية، ويترك الاختصار سجلَّه الخاص — فيبقى انخفاضُ العمل شيئًا يُشار إليه دائمًا لا تحسُّنًا بلا تفسير.",
  "Three registers are carried forward. Two familiar ones are still absent.":
    "ثلاثة سجلات تُحمَل إلى ما بعد. واثنان مألوفان لا يزالان غائبين.",
  "Three registers survive an episode, and two familiar ones are still absent.":
    "ثلاثة سجلات تبقى بعد الحلقة، واثنان مألوفان لا يزالان غائبين.",
  "WHAT SURVIVES AN EPISODE":
    "ما الذي يبقى بعد الحلقة",
  "WHY THIS IS A ROUTE AND NOT A SEARCH":
    "لماذا هذا مسارٌ لا بحث",
  "What actually happened, according to somebody other than me?":
    "ما الذي حدث فعلًا، بحسب أحدٍ غيري؟",
  "What can somebody else replay from this?":
    "ما الذي يستطيع غيري أن يُعيد تشغيله من هذا؟",
  "What could lawfully happen here at all?":
    "ما الذي يمكن أن يحدث هنا مشروعًا أصلًا؟",
  "What is updated is where to look and in what order — never what counts as permitted. A policy snapshot that has gone stale is refused rather than merged, so two independent replays of the same episode land on the same state rather than on two nearly identical ones.":
    "المُحدَّث هو أين يُبحَث وبأي ترتيب — لا ما يُعَدُّ مسموحًا به أبدًا. ولقطةُ السياسة التي قدُمت تُرفض ولا تُدمَج، فيصل تشغيلان مستقلان لإعادة الحلقة نفسها إلى الحالة ذاتها لا إلى حالتين تكادان تتطابقان.",
  "What may I keep from this, and what may I never keep?":
    "ما الذي يجوز لي الاحتفاظ به من هذا، وما الذي لا يجوز لي أبدًا؟",
  "What survives an episode":
    "ما الذي يبقى بعد الحلقة",
  "What the counted work actually came to, and against which comparator":
    "إلى ماذا آل العملُ المحسوب فعلًا، وفي مقابل أيّ مُقارِن",
  "What was checked, what was probed, what ran, what was refused, and how much work it cost.":
    "ما فُحص، وما سُبِر، وما نُفِّذ، وما رُفض، وكم كلّف ذلك من عمل.",
  "What would tell these readings apart?":
    "ما الذي يفرّق بين هذه القراءات؟",
  "Where an episode is allowed to stop":
    "أين يُسمح للحلقة بالتوقف",
  "Which readings of this situation are lawful?":
    "أيُّ قراءاتِ هذا الموقف مشروعة؟",
  "Why this is a route and not a search":
    "لماذا هذا مسارٌ لا بحث",
  "Why this step learns nothing":
    "لماذا لا تتعلّم هذه الخطوة شيئًا",
  "Without an external reveal the route has no right to learn. This is the single rule that separates learning from self-confirmation: a system allowed to score its own outcomes can improve its numbers indefinitely without improving anything else.":
    "من دون كشفٍ خارجي لا يملك المسار حقَّ التعلُّم. وهذه هي القاعدة الوحيدة التي تفصل التعلُّم عن تصديق الذات: نظامٌ يُسمح له بتسجيل نتائجه بنفسه يستطيع تحسين أرقامه بلا نهاية دون أن يحسّن شيئًا آخر.",
  "Work goes down by consuming structures that were already proven, and each such consumption leaves its own record. A reduction nobody can point at is treated here as a defect rather than as a result.":
    "ينخفض العمل باستهلاك بنى سبق إثباتها، ويترك كلُّ استهلاكٍ منها سجلَّه الخاص. أما انخفاضٌ لا يستطيع أحدٌ الإشارة إليه فيُعَدُّ هنا عيبًا لا نتيجة.",
  "Work is counted in units as it is spent, and exhausting the budget is a lawful outcome with a named cause rather than a quiet decline in quality. That is what makes the difference between two runs a quantity instead of an impression.":
    "يُحسَب العمل بوحداتٍ وهو يُنفَق، ونفادُ الميزانية نتيجةٌ مشروعة بسببٍ مسمّى لا تدهورًا صامتًا في الجودة. وهذا بالذات ما يجعل الفرق بين تشغيلين كمًّا لا انطباعًا.",
  "absent by construction, not merely unused":
    "غائبان بحكم البناء لا لكونهما غير مستعملين",
  "carried into the next episode":
    "يُحمَل إلى الحلقة التالية",
  "dashed: a lawful exit, reachable from any phase":
    "متقطّع: مخرجٌ مشروع يُبلَغ من أي مرحلة",
  "detach the volume and the same engine runs without it":
    "انزع المجلَّد ويعمل المحرك نفسه من دونه",
  "lawful, unsettled":
    "مشروع، غير محسوم",
  "solid: a phase of the route":
    "متّصل: مرحلة من المسار",
  "unlawful, refused":
    "غير مشروع، مرفوض",
};
