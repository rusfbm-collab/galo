import type { TranslationDictionary } from "../translations";

export const weightFreeRu: TranslationDictionary = {
  "A neural model may be attached from outside as a proposal adapter — a parser or a sensor, in effect. It is not part of GALO, its weights are not GALO state, and it cannot create a frame, write to the Atlas, widen the candidate set, or authorise a verdict.":
    "Нейросетевую модель можно подключить снаружи как адаптер предложений — по сути, как разборщик входа или датчик. Она не является частью GALO, её веса не являются состоянием GALO, и она не может ни создать фрейм, ни записать что-либо в Атлас, ни расширить множество кандидатов, ни утвердить вердикт.",
  "A system is shown a great many examples, and while it looks at them it quietly adjusts millions of internal numbers until the answers come out about right. Those numbers are what it learned. None of them means anything on its own, so when you ask why, the honest reply is often that this is how it came out inside.":
    "Системе показывают очень много примеров, и, пока она их разглядывает, она потихоньку подкручивает миллионы внутренних чисел, пока ответы не начнут выходить примерно правильными. Эти числа и есть то, что она выучила. По отдельности ни одно из них ничего не значит, поэтому на вопрос «почему» честный ответ чаще всего такой: так вышло внутри.",
  "A weight-free decision layer for private and industrial AI.":
    "Слой решений без обучаемых весов — для частного и промышленного ИИ.",
  "An AI architecture with no learned model weights and no backpropagation. GALO learns explicit relations and verified structures in a versioned Atlas, so when something changes you can see what changed, trace what it affects, and re-check only what matters. First product: industrial decision assurance. Research prototype — partner-controlled validity is not proven and production autonomy is not authorised.":
    "Архитектура ИИ без выученных весов модели и без обратного распространения. GALO учит явные отношения и проверенные структуры в Атласе с версиями: когда что-то меняется, видно, что именно изменилось, что это затрагивает и что нужно перепроверить. Первый продукт — гарантия промышленных решений. Исследовательский прототип: валидность на данных партнёра не доказана, промышленная автономность не разрешена.",
  "An explicit, versioned Atlas of relations.": "Явный Атлас отношений, с версиями.",
  "Asking which of the two is better is like asking whether a measuring instrument beats a control loop. The useful question is what each one can be held to: what it accepts, what it produces, and what it lets an outsider verify afterwards. One difference runs under all the others on this page — a language model learns by changing hidden weights, and this engine has none to change.":
    "Спрашивать, что из двух лучше, — всё равно что спрашивать, кто сильнее: измерительный прибор или контур управления. Полезный вопрос другой: с чего можно спросить каждого из них — что он принимает, что выдаёт и что после этого может проверить посторонний. Под всеми остальными различиями на этой странице лежит одно: языковая модель учится, меняя скрытые веса, а этому движку менять нечего.",
  "By building, checking, reusing and locally revising explicit structures. There is no parameter tensor to adjust, no gradient step and no backpropagation anywhere in the engine.":
    "Строя, проверяя, переиспользуя и локально пересматривая явные структуры. Ни тензора параметров, который можно было бы подкрутить, ни шага градиента, ни обратного распространения в движке нет.",
  "By changing hidden numerical weights. A training step measures the error and adjusts millions to billions of parameters through backpropagation, and no single one of them stands for anything a person could name.":
    "Меняя скрытые числовые веса. Шаг обучения измеряет ошибку и через обратное распространение подправляет от миллионов до миллиардов параметров, и ни один из них по отдельности не обозначает ничего, что человек мог бы назвать.",
  Counters: "Счётчики",
  Data: "Данные",
  "GALO AI — Weight-Free AI for Provable Decisions": "GALO AI — ИИ без весов для доказуемых решений",
  "Hidden numerical weights": "Скрытые числовые веса",
  "How it learns": "Как оно учится",
  "Independent checking, and deterministic replay.": "Независимая проверка и детерминированное воспроизведение.",
  "It is a different category before it is a different product: there are no learned weights and no backpropagation anywhere in the engine, so what it learns is explicit and can be read, versioned and rolled back one item at a time. Four properties follow from that, and the bet is that they only work together: state written down rather than inferred, learning that may rank candidates and never admits the result, revision that touches the affected entry rather than the whole model, and a record somebody else can replay. Each exists separately elsewhere. The claim is about the combination, and it is a claim rather than a result.":
    "Сначала это другая категория, и только потом — другой продукт: обучаемых весов и обратного распространения в движке нет вовсе, поэтому выученное явно — его можно прочитать, версионировать и откатить по одному пункту. Отсюда следуют четыре свойства, и ставка в том, что они работают только вместе: состояние записано, а не выведено; обучение может ранжировать кандидатов и никогда не допускает результат; пересмотр трогает затронутую запись, а не всю модель; запись может воспроизвести кто-то другой. Каждое из них по отдельности где-то уже есть. Утверждение — о сочетании, и это утверждение, а не результат.",
  "Local learning, and local revision.": "Локальное обучение и локальный пересмотр.",
  "NEURAL AI": "НЕЙРОСЕТЕВОЙ ИИ",
  "Neither column is a verdict on the other. They are two ways of arriving at an answer, and the thing each one keeps along the way is what makes them different afterwards.":
    "Ни одна колонка не выносит приговор другой. Это два способа прийти к ответу, и различает их потом именно то, что каждый из них сохраняет по дороге.",
  "Neural AI learns weights. GALO learns structures.": "Нейросеть выучивает веса. GALO выучивает структуры.",
  "No learned weights and no backpropagation: what the engine learns is explicit and can be read, versioned and rolled back. The first product is intended for decision assurance around the systems industry already runs, and none of it is running at an industrial site today. This page is the investment case: why this could be a company, what a cheque buys, what would unlock the next round, and the point at which the thesis should be called dead.":
    "Обучаемых весов нет, обратного распространения нет: выученное движком явно — его можно прочитать, версионировать и откатить. Первый продукт предназначен для подтверждения решений вокруг систем, которые уже работают в промышленности, и ни на одной промышленной площадке он пока не работает. Эта страница — инвестиционный аргумент: почему из этого может выйти компания, что покупает чек, что откроет следующий раунд и в какой момент тезис следует считать мёртвым.",
  "No learned weights. No backpropagation.": "Ни обучаемых весов, ни обратного распространения ошибки.",
  "One learns by changing hidden numbers. This one has no numbers to change.":
    "Одно учится, меняя скрытые числа. Этому менять нечего.",
  "Ordinary AI learns by changing millions of hidden numbers. This one learns by changing things that are written down.":
    "Обычный ИИ учится, меняя миллионы скрытых чисел. Этот учится, меняя то, что записано.",
  "Proven structures": "Доказанные структуры",
  "Relation frames": "Фреймы отношений",
  "Static scan of the active import closure, run by the project":
    "Статический обход активного графа импортов, выполненный самим проектом",
  "The architecture is meant to be general, and it is weight-free: nothing it learns is a hidden number, so an affected decision can be named rather than inferred. The first product is deliberately narrow — one industrial workflow, read only, advisory, with a frozen baseline and a decision package somebody else can replay. Industry is where the cost of ambiguity is already counted, which is why an architecture is worth testing there first.":
    "Архитектура задумана как общая, и она без обучаемых весов: ничто из выученного не является скрытым числом, поэтому затронутое решение можно назвать, а не вывести догадкой. Первый продукт узок намеренно — один промышленный рабочий процесс, только чтение, консультативно, с замороженной базовой линией и пакетом решения, который может воспроизвести кто-то другой. В промышленности цену неоднозначности уже считают — поэтому архитектуру и стоит проверять сначала там.",
  "The engine holds no trainable parameter tensor and performs no gradient or backpropagation step. Its learned state is explicit: counters, discrete orders, relation frames, written-out routes, proven structures and receipts.":
    "В движке нет обучаемого тензора параметров и не выполняется ни шаг градиента, ни обратное распространение ошибки. Выученное состояние явное: счётчики, дискретные порядки, фреймы отношений, выписанные маршруты, доказанные структуры и протоколы.",
  "The same difference, dimension by dimension, against a language model":
    "То же различие, признак за признаком, в сравнении с языковой моделью",
  "There are no such numbers at all. What this system learns, it writes down: this thing is related to that one, this check is worth doing first, this structure held up and this one was contradicted. You can read the list, and you can cross one line out without disturbing the rest of it.":
    "Никаких таких чисел здесь нет вовсе. То, что эта система выучивает, она записывает: вот это связано вот с тем, эту проверку стоит делать первой, эта структура устояла, а этой нашли контрпример. Список можно прочитать, и одну строку в нём можно вычеркнуть, не потревожив остальные.",
  "There are no weights here for authority to sit in.": "Здесь нет весов, в которых могли бы сидеть полномочия.",
  "There is no parameter tensor to fit and no gradient step to take. Learned search reorders work; it cannot rewrite the admitted decision.":
    "Нет ни тензора параметров, который можно подогнать, ни шага градиента. Выученный поиск меняет порядок работы; переписать допущенное решение он не может.",
  "This is a statement about what the engine stores and how it changes, and it is checkable the way everything else here is. A static scan of the current release reaches 104 modules from the active entry points, imports no machine-learning framework, and calls no gradient or backpropagation interface. Like every other check on this site, it was run by the project on its own code, and no outside party has repeated it.":
    "Это утверждение о том, что движок хранит и как это меняется, и проверяется оно так же, как всё остальное здесь. Статический обход текущего выпуска доходит от активных точек входа до 104 модулей, не импортирует ни одного фреймворка машинного обучения и не вызывает ни градиентного, ни обратного распространения. Как и любая другая проверка на этом сайте, он выполнен самим проектом на своём коде, и снаружи его никто не повторял.",
  "WEIGHT-FREE AI · INDUSTRIAL DECISION ASSURANCE": "ИИ БЕЗ ОБУЧАЕМЫХ ВЕСОВ · ПОДТВЕРЖДЕНИЕ ПРОМЫШЛЕННЫХ РЕШЕНИЙ",
  "What kind of system this is": "Что это за система",
  "What was checked, what ran, what was refused, and what it cost.":
    "Что проверялось, что исполнилось, в чём отказано и во сколько это обошлось.",
};

export const weightFreeZh: TranslationDictionary = {
  "A neural model may be attached from outside as a proposal adapter — a parser or a sensor, in effect. It is not part of GALO, its weights are not GALO state, and it cannot create a frame, write to the Atlas, widen the candidate set, or authorise a verdict.":
    "神经网络模型可以作为外部的候选建议适配器接入——实质上相当于一个解析器或一个传感器。它不是 GALO 的组成部分，它的权重不是 GALO 的状态，它不能创建框架、不能写入 Atlas、不能扩大候选集合，也不能批准裁决。",
  "A system is shown a great many examples, and while it looks at them it quietly adjusts millions of internal numbers until the answers come out about right. Those numbers are what it learned. None of them means anything on its own, so when you ask why, the honest reply is often that this is how it came out inside.":
    "人们给系统看非常多的例子，而它在看的过程中，悄悄地调整着几百万个内部数字，直到答案大致对为止。这些数字就是它学到的东西。单看其中任何一个都不表示什么，所以当你问「为什么」时，诚实的回答往往是：它在里面就是这么出来的。",
  "A weight-free decision layer for private and industrial AI.": "面向私有与工业人工智能的无权重决策层。",
  "An AI architecture with no learned model weights and no backpropagation. GALO learns explicit relations and verified structures in a versioned Atlas, so when something changes you can see what changed, trace what it affects, and re-check only what matters. First product: industrial decision assurance. Research prototype — partner-controlled validity is not proven and production autonomy is not authorised.":
    "一套没有学习权重、也没有反向传播的人工智能架构。GALO 把学到的东西写成带版本的图册里的显式关系与已证明的结构：一旦有什么发生变化，你能看清改了什么、波及了哪些结论，以及只需重新核验哪一部分。第一个产品是工业决策保障。研究原型：由合作方掌控的有效性尚未证明，工业自主性也未获授权。",
  "An explicit, versioned Atlas of relations.": "一个显式的、带版本的关系 Atlas。",
  "Asking which of the two is better is like asking whether a measuring instrument beats a control loop. The useful question is what each one can be held to: what it accepts, what it produces, and what it lets an outsider verify afterwards. One difference runs under all the others on this page — a language model learns by changing hidden weights, and this engine has none to change.":
    "问这两者哪个更好，就像问测量仪器能不能胜过控制回路。有用的问题是另一个：各自能被追问到什么程度——它接受什么、产出什么，以及事后允许局外人核验什么。本页其余所有差别之下还有一个差别：语言模型靠改变隐藏权重来学习，而这个引擎没有可改的权重。",
  "By building, checking, reusing and locally revising explicit structures. There is no parameter tensor to adjust, no gradient step and no backpropagation anywhere in the engine.":
    "靠构建、检查、复用并就地修订显式结构来学习。引擎里没有可调整的参数张量，没有梯度步骤，也没有反向传播。",
  "By changing hidden numerical weights. A training step measures the error and adjusts millions to billions of parameters through backpropagation, and no single one of them stands for anything a person could name.":
    "靠改变隐藏的数值权重来学习。一次训练步骤度量误差，再通过反向传播调整数百万到数十亿个参数，而其中没有任何一个单独代表人能叫得出名字的东西。",
  Counters: "计数器",
  Data: "数据",
  "GALO AI — Weight-Free AI for Provable Decisions": "GALO AI — 无权重的人工智能，面向可证明的决策",
  "Hidden numerical weights": "隐藏的数值权重",
  "How it learns": "它如何学习",
  "Independent checking, and deterministic replay.": "独立的检查，以及确定性的重放。",
  "It is a different category before it is a different product: there are no learned weights and no backpropagation anywhere in the engine, so what it learns is explicit and can be read, versioned and rolled back one item at a time. Four properties follow from that, and the bet is that they only work together: state written down rather than inferred, learning that may rank candidates and never admits the result, revision that touches the affected entry rather than the whole model, and a record somebody else can replay. Each exists separately elsewhere. The claim is about the combination, and it is a claim rather than a result.":
    "它首先是另一个类别，然后才是另一种产品：引擎里根本没有已学权重，也没有反向传播，所以它学到的东西是显式的，可以被读取、被版本化，并且可以一条一条地回滚。由此得出四个性质，而赌注在于它们只有合在一起才成立：状态是写下来的而不是推断出来的；学习可以给候选排序，但从不认可结果；修订只触及受影响的那一条，而不是整个模型；记录可以由别人重放。它们各自在别处都已经存在。这里的主张是关于这个组合的，而且它是一个主张，不是一个结果。",
  "Local learning, and local revision.": "就地学习，就地修订。",
  "NEURAL AI": "神经网络人工智能",
  "Neither column is a verdict on the other. They are two ways of arriving at an answer, and the thing each one keeps along the way is what makes them different afterwards.":
    "两栏都不是对另一栏的判决。它们是抵达答案的两种方式，而事后把它们区分开来的，正是各自一路上保留下来的东西。",
  "Neural AI learns weights. GALO learns structures.": "神经网络学的是权重。GALO 学的是结构。",
  "No learned weights and no backpropagation: what the engine learns is explicit and can be read, versioned and rolled back. The first product is intended for decision assurance around the systems industry already runs, and none of it is running at an industrial site today. This page is the investment case: why this could be a company, what a cheque buys, what would unlock the next round, and the point at which the thesis should be called dead.":
    "没有已学权重，也没有反向传播：引擎学到的东西是显式的，可以被读取、被版本化、被回滚。第一款产品拟用于决策保障，围绕工业界已经在运行的系统，而它目前还没有在任何一个工业现场运行。本页是投资论证：为什么这件事可能成为一家公司、一张支票买到的是什么、什么能打开下一轮，以及在哪个节点应当宣布这个论点已死。",
  "No learned weights. No backpropagation.": "没有已学权重。没有反向传播。",
  "One learns by changing hidden numbers. This one has no numbers to change.":
    "一种靠改变隐藏的数字来学习。这一种没有可改的数字。",
  "Ordinary AI learns by changing millions of hidden numbers. This one learns by changing things that are written down.":
    "普通的人工智能靠改变几百万个隐藏的数字来学习。这一种学习的方式，是改变那些写下来的东西。",
  "Proven structures": "已证明的结构",
  "Relation frames": "关系框架",
  "Static scan of the active import closure, run by the project": "对活跃导入闭包的静态扫描，由本项目自行执行",
  "The architecture is meant to be general, and it is weight-free: nothing it learns is a hidden number, so an affected decision can be named rather than inferred. The first product is deliberately narrow — one industrial workflow, read only, advisory, with a frozen baseline and a decision package somebody else can replay. Industry is where the cost of ambiguity is already counted, which is why an architecture is worth testing there first.":
    "这套架构本身是通用的，而且它是无权重的：它学到的东西没有一样是隐藏的数字，因此受影响的决策可以被指名，而不必靠推测。第一款产品则是刻意做窄的——一条工业工作流、只读、仅供参考，带一条冻结的基线，以及一份别人可以重放的决策包。工业界早就在计算含糊不清的代价，所以一套架构值得先在那里接受检验。",
  "The engine holds no trainable parameter tensor and performs no gradient or backpropagation step. Its learned state is explicit: counters, discrete orders, relation frames, written-out routes, proven structures and receipts.":
    "引擎中没有可训练的参数张量，也不执行梯度步骤或反向传播。它已学到的状态是显式的：计数器、离散的次序、关系框架、写出来的路线、已证明的结构，以及回执。",
  "The same difference, dimension by dimension, against a language model": "同一个差别，逐项与语言模型对照",
  "There are no such numbers at all. What this system learns, it writes down: this thing is related to that one, this check is worth doing first, this structure held up and this one was contradicted. You can read the list, and you can cross one line out without disturbing the rest of it.":
    "这里根本没有这样的数字。这套系统学到什么，就把它写下来：这个东西和那个东西有关系、这项检查值得先做、这个结构站住了脚而那个被反例推翻了。你可以读这份清单，也可以划掉其中一行，而不惊动其余的部分。",
  "There are no weights here for authority to sit in.": "这里没有权重可以让权威落在上面。",
  "There is no parameter tensor to fit and no gradient step to take. Learned search reorders work; it cannot rewrite the admitted decision.":
    "既没有可拟合的参数张量，也没有可走的梯度步骤。学出来的搜索会改变工作的次序，却改写不了已被认可的决定。",
  "This is a statement about what the engine stores and how it changes, and it is checkable the way everything else here is. A static scan of the current release reaches 104 modules from the active entry points, imports no machine-learning framework, and calls no gradient or backpropagation interface. Like every other check on this site, it was run by the project on its own code, and no outside party has repeated it.":
    "这是一个关于引擎存了什么、又如何改变的陈述，而且它和这里的其他一切一样可被核验。对当前发布版本的静态扫描从活跃入口出发共到达 104 个模块，没有导入任何机器学习框架，也没有调用任何梯度或反向传播接口。和本站其他每一项检查一样，它由本项目在自己的代码上执行，外部没有任何人重复过。",
  "WEIGHT-FREE AI · INDUSTRIAL DECISION ASSURANCE": "无权重人工智能 · 工业决策保障",
  "What kind of system this is": "这是哪一类系统",
  "What was checked, what ran, what was refused, and what it cost.": "检查了什么、跑了什么、拒了什么，以及花了多少。",
};

export const weightFreeAr: TranslationDictionary = {
  "A neural model may be attached from outside as a proposal adapter — a parser or a sensor, in effect. It is not part of GALO, its weights are not GALO state, and it cannot create a frame, write to the Atlas, widen the candidate set, or authorise a verdict.":
    "يجوز أن يُوصَل نموذجٌ عصبيّ من الخارج بوصفه مُهيِّئًا للاقتراحات — أي مُحلِّلًا للمدخل أو حسّاسًا في حقيقة الأمر. وهو ليس جزءًا من GALO، وأوزانه ليست حالةً لـ GALO، ولا يستطيع أن يُنشئ إطارًا، ولا أن يكتب في Atlas، ولا أن يوسّع مجموعة المرشّحين، ولا أن يأذن بحُكم.",
  "A system is shown a great many examples, and while it looks at them it quietly adjusts millions of internal numbers until the answers come out about right. Those numbers are what it learned. None of them means anything on its own, so when you ask why, the honest reply is often that this is how it came out inside.":
    "يُعرَض على النظام عددٌ هائل من الأمثلة، وهو أثناء نظره فيها يُعدِّل بهدوء ملايين الأرقام الداخلية حتى تخرج الأجوبة صحيحةً على وجه التقريب. وهذه الأرقام هي ما تعلَّمه. ولا يعني أيٌّ منها شيئًا بمفرده، فإذا سألت «لماذا» كان الجواب الأمين في الغالب: هكذا خرج الأمر في الداخل.",
  "A weight-free decision layer for private and industrial AI.":
    "طبقةُ قرارٍ بلا أوزان، للذكاء الاصطناعي الخاصّ والصناعي.",
  "An AI architecture with no learned model weights and no backpropagation. GALO learns explicit relations and verified structures in a versioned Atlas, so when something changes you can see what changed, trace what it affects, and re-check only what matters. First product: industrial decision assurance. Research prototype — partner-controlled validity is not proven and production autonomy is not authorised.":
    "بنية ذكاء اصطناعيّ بلا أوزان متعلَّمة وبلا انتشارٍ خلفيّ. تتعلّم GALO علاقاتٍ صريحة وبنًى مُثبَتة داخل أطلسٍ ذي إصدارات، فإذا تغيّر شيء رأيتَ ما الذي تغيّر، وما الذي يمسّه، وما الذي يحتاج إعادة تحقّقٍ وحده. أوّل منتَج: ضمان القرار الصناعي. نموذج بحثيّ أوّليّ: الصلاحية الخاضعة لسيطرة الشريك غير مُثبتة، والاستقلالية الإنتاجية غير مأذون بها.",
  "An explicit, versioned Atlas of relations.": "‏Atlas صريح للعلاقات، ذو إصدارات.",
  "Asking which of the two is better is like asking whether a measuring instrument beats a control loop. The useful question is what each one can be held to: what it accepts, what it produces, and what it lets an outsider verify afterwards. One difference runs under all the others on this page — a language model learns by changing hidden weights, and this engine has none to change.":
    "السؤال عن أيّهما أفضل كالسؤال عن أيّهما يغلب: أداةُ قياسٍ أم حلقةُ تحكّم. والسؤال النافع غيرُه: بمَ يُؤخَذ كلٌّ منهما — ما الذي يقبله، وما الذي يُنتجه، وما الذي يتيح لغريبٍ أن يتحقّق منه بعد ذلك. وتحت سائر الفروق في هذه الصفحة فرقٌ واحد: النموذج اللغوي يتعلَّم بتغيير أوزانٍ خفيّة، وهذا المحرّك لا أوزان لديه ليغيّرها.",
  "By building, checking, reusing and locally revising explicit structures. There is no parameter tensor to adjust, no gradient step and no backpropagation anywhere in the engine.":
    "ببناء بنًى صريحة وفحصها وإعادة استعمالها ومراجعتها موضعيًّا. فليس في المحرّك موتِّرُ معاملاتٍ يُعدَّل، ولا خطوةُ تدرُّج، ولا انتشارٌ عكسيّ.",
  "By changing hidden numerical weights. A training step measures the error and adjusts millions to billions of parameters through backpropagation, and no single one of them stands for anything a person could name.":
    "بتغيير أوزانٍ عددية خفيّة. تقيس خطوةُ التدريب الخطأ ثم تُعدِّل عبر الانتشار العكسيّ ملايينَ المعاملات إلى مليارات منها، وليس فيها معامِلٌ واحد يقوم بمفرده على شيءٍ يستطيع الإنسان تسميته.",
  Counters: "العدّادات",
  Data: "البيانات",
  "GALO AI — Weight-Free AI for Provable Decisions": "‏GALO AI — ذكاء اصطناعيّ بلا أوزان لقراراتٍ قابلة للإثبات",
  "Hidden numerical weights": "أوزانٌ عددية خفيّة",
  "How it learns": "كيف يتعلَّم",
  "Independent checking, and deterministic replay.": "فحصٌ مستقلّ، وإعادةُ تشغيلٍ حتمية.",
  "It is a different category before it is a different product: there are no learned weights and no backpropagation anywhere in the engine, so what it learns is explicit and can be read, versioned and rolled back one item at a time. Four properties follow from that, and the bet is that they only work together: state written down rather than inferred, learning that may rank candidates and never admits the result, revision that touches the affected entry rather than the whole model, and a record somebody else can replay. Each exists separately elsewhere. The claim is about the combination, and it is a claim rather than a result.":
    "هو صنفٌ مختلف قبل أن يكون منتجًا مختلفًا: فليس في المحرّك أوزانٌ متعلَّمة ولا انتشارٌ عكسيّ البتّة، ولذلك كان ما يتعلَّمه صريحًا يمكن قراءته وتأريخه بإصدارات والتراجع عنه بندًا بندًا. وعن ذلك تنشأ أربع خصائص، والرهان أنّها لا تعمل إلّا مجتمعة: حالةٌ مكتوبة لا مستنتَجة، وتعلُّمٌ له أن يرتّب المرشّحين وليس له أن يقبل النتيجة أبدًا، ومراجعةٌ تمسّ المدخل المتأثّر لا النموذج كلّه، وسجلٌّ يستطيع غيرُنا أن يعيد تشغيله. وكلٌّ منها موجودٌ وحده في مكانٍ ما. والدعوى عن التركيب، وهي دعوى لا نتيجة.",
  "Local learning, and local revision.": "تعلُّمٌ موضعيّ، ومراجعةٌ موضعية.",
  "NEURAL AI": "الذكاء الاصطناعي العصبيّ",
  "Neither column is a verdict on the other. They are two ways of arriving at an answer, and the thing each one keeps along the way is what makes them different afterwards.":
    "ليس أيٌّ من العمودين حُكمًا على الآخر. فهما طريقان إلى جواب، والذي يفرّق بينهما بعد ذلك هو ما يحتفظ به كلٌّ منهما في الطريق.",
  "Neural AI learns weights. GALO learns structures.": "الذكاء الاصطناعي العصبيّ يتعلَّم أوزانًا. وGALO يتعلَّم بنًى.",
  "No learned weights and no backpropagation: what the engine learns is explicit and can be read, versioned and rolled back. The first product is intended for decision assurance around the systems industry already runs, and none of it is running at an industrial site today. This page is the investment case: why this could be a company, what a cheque buys, what would unlock the next round, and the point at which the thesis should be called dead.":
    "لا أوزان متعلَّمة ولا انتشار عكسيّ: فما يتعلَّمه المحرّك صريحٌ يمكن قراءته وتأريخه بإصدارات والتراجع عنه. والمنتج الأوّل مُعَدٌّ لضمان القرار حول الأنظمة التي تعمل في الصناعة بالفعل، ولا يعمل منه شيءٌ في أيّ موقعٍ صناعيّ اليوم. وهذه الصفحة هي حجّة الاستثمار: لماذا قد يصير هذا شركة، وما الذي يشتريه الشيك، وما الذي يفتح الجولة التالية، وعند أيّ نقطةٍ تُعدّ الأطروحة ميتة.",
  "No learned weights. No backpropagation.": "لا أوزانٌ متعلَّمة، ولا انتشارٌ عكسيّ.",
  "One learns by changing hidden numbers. This one has no numbers to change.":
    "أحدهما يتعلَّم بتغيير أرقامٍ خفيّة. وهذا لا أرقام لديه ليغيّرها.",
  "Ordinary AI learns by changing millions of hidden numbers. This one learns by changing things that are written down.":
    "الذكاء الاصطناعي المعتاد يتعلَّم بتغيير ملايين الأرقام الخفيّة. وهذا يتعلَّم بتغيير أشياء مكتوبة.",
  "Proven structures": "البنى المُثبَتة",
  "Relation frames": "أُطُر العلاقات",
  "Static scan of the active import closure, run by the project":
    "مسحٌ ساكن لمُغلَق الاستيراد الفعّال، أجراه المشروع بنفسه",
  "The architecture is meant to be general, and it is weight-free: nothing it learns is a hidden number, so an affected decision can be named rather than inferred. The first product is deliberately narrow — one industrial workflow, read only, advisory, with a frozen baseline and a decision package somebody else can replay. Industry is where the cost of ambiguity is already counted, which is why an architecture is worth testing there first.":
    "البنية يُقصد بها أن تكون عامّة، وهي بلا أوزان: فليس فيما تتعلَّمه رقمٌ خفيّ، ولذلك يمكن تسميةُ القرار المتأثِّر لا استنتاجُه. أمّا المنتج الأوّل فضيّقٌ عن قصد — سير عمل صناعي واحد، بالقراءة فقط، استشاري، مع خطّ أساس مجمَّد وحزمة قرار يستطيع غيرنا إعادة تشغيلها. وفي الصناعة تُحسَب كلفة الالتباس أصلًا، ولذلك تستحقّ البنية أن تُختبَر هناك أوّلًا.",
  "The engine holds no trainable parameter tensor and performs no gradient or backpropagation step. Its learned state is explicit: counters, discrete orders, relation frames, written-out routes, proven structures and receipts.":
    "لا يحمل المحرّك موتِّرَ معاملاتٍ قابلًا للتدريب، ولا يُجري خطوةَ تدرُّجٍ ولا انتشارًا عكسيًّا. وحالتُه المتعلَّمة صريحة: عدّادات، وترتيبات منفصلة، وأُطُر علاقات، ومسارات مكتوبة، وبنًى مُثبَتة، وإيصالات.",
  "The same difference, dimension by dimension, against a language model":
    "الفرق نفسه، بُعدًا بُعدًا، في مقابل نموذج لغوي",
  "There are no such numbers at all. What this system learns, it writes down: this thing is related to that one, this check is worth doing first, this structure held up and this one was contradicted. You can read the list, and you can cross one line out without disturbing the rest of it.":
    "لا وجود لأرقامٍ كهذه البتّة. فما يتعلَّمه هذا النظام يكتبه: هذا الشيء متّصلٌ بذاك، وهذا الفحص جديرٌ بأن يُقدَّم، وهذه البنية صمدت وتلك نقضها مثالٌ مضادّ. تستطيع أن تقرأ القائمة، وأن تشطب سطرًا واحدًا منها دون أن تُقلق بقيّتها.",
  "There are no weights here for authority to sit in.": "لا أوزان هنا لتستقرّ فيها السلطة.",
  "There is no parameter tensor to fit and no gradient step to take. Learned search reorders work; it cannot rewrite the admitted decision.":
    "ليس ثمّة موتِّرُ معاملاتٍ يُلائَم ولا خطوةُ تدرُّجٍ تُتّخذ. فالبحث المتعلَّم يعيد ترتيب العمل، ولا يستطيع أن يعيد كتابة القرار المُجاز.",
  "This is a statement about what the engine stores and how it changes, and it is checkable the way everything else here is. A static scan of the current release reaches 104 modules from the active entry points, imports no machine-learning framework, and calls no gradient or backpropagation interface. Like every other check on this site, it was run by the project on its own code, and no outside party has repeated it.":
    "هذه عبارةٌ عمّا يخزّنه المحرّك وكيف يتغيَّر، وهي قابلة للفحص كسائر ما في هذا الموقع. فمسحٌ ساكن للإصدار الحالي يبلغ 104 وحدات انطلاقًا من مداخله الفعّالة، ولا يستورد أيَّ إطار عملٍ لتعلُّم الآلة، ولا يستدعي أيَّ واجهةِ تدرُّجٍ أو انتشارٍ عكسيّ. وكسائر الفحوص في هذا الموقع، أجراه المشروع على شفرته بنفسه، ولم يُعِده أيُّ طرفٍ من الخارج.",
  "WEIGHT-FREE AI · INDUSTRIAL DECISION ASSURANCE": "ذكاءٌ اصطناعيّ بلا أوزان · ضمان القرار الصناعي",
  "What kind of system this is": "أيُّ نوعٍ من الأنظمة هذا",
  "What was checked, what ran, what was refused, and what it cost.": "ما فُحص، وما نُفِّذ، وما رُفض، وكم كلّف.",
};
