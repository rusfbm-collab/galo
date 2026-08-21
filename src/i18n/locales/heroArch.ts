import type { TranslationDictionary } from "../translations";

export const heroArchRu: TranslationDictionary = {
  "AI that has to show why it was allowed to decide.":
    "Искусственный интеллект, обязанный показать, почему он имел право так решить.",
  "BUILT FOR DECISIONS THAT GET AUDITED": "ДЛЯ РЕШЕНИЙ, КОТОРЫЕ ПОТОМ ПРОВЕРЯЮТ",
  "A plan written as a tree of steps rather than a single move, so the whole plan can be inspected before any of it runs. Not built.":
    "План, записанный деревом шагов, а не одним ходом: всё дерево можно осмотреть до того, как хоть что-то запустится. Не построено.",
  "An explicit, readable picture of what the system currently believes about the world. No trained Atlas exists in this release.":
    "Явная, читаемая картина того, что система на данный момент считает верным о мире. В этом выпуске обученного Atlas нет.",
  "Before anything runs, the complete list of actions the engine is allowed to take is fixed. Nothing joins it later, and nothing outside it can be executed.":
    "До запуска зафиксирован полный список действий, которые движку разрешены. Позже в него ничего не добавляется, а всё, чего в нём нет, исполнить нельзя.",
  "Carrying what was learned from one run into the next. Learning writes are held at zero, and this stage is published as not started.":
    "Перенос выученного из одного запуска в следующий. Записи обучения держатся на нуле, и этот этап опубликован как не начатый.",
  "Changing one belief without retraining everything around it. This is the loop the architecture is designed around, and it does not run today.":
    "Изменить одно убеждение, не переучивая всё вокруг него. Ради этой петли и придумана архитектура — и сегодня она не работает.",
  "Every unit of work is counted and numbered, so the total can be checked against its parts rather than taken on trust.":
    "Каждая единица работы посчитана и пронумерована, так что итог сверяется со слагаемыми, а не принимается на веру.",
  "Five stages that run in the release you can download today. Open any of them for what it means.":
    "Пять этапов, которые работают в выпуске, доступном сегодня. Разверните любой — там сказано, что это значит.",
  "Input would arrive with proof of where it came from. Today the engine accepts two fixed patterns and nothing else, so this stage does not run.":
    "Вход приходил бы с доказательством происхождения. Сегодня движок принимает два фиксированных шаблона и больше ничего, поэтому этап не работает.",
  "One entry from that list is picked and tied to a single use. Trying to use it a second time is refused and recorded, not quietly allowed.":
    "Одна строчка из списка выбирается и привязывается к единственному использованию. Попытка воспользоваться ею второй раз отклоняется и записывается, а не проходит молча.",
  "Six stages that are written down and not built. None of them runs in the current release.":
    "Шесть этапов, которые записаны, но не построены. Ни один из них в текущем выпуске не работает.",
  "In most AI systems the explanation is written after the decision, by the same machinery that made it. GALO is built the other way round: the list of permitted actions closes before anything runs, the choice comes only from that list, and what is left afterwards is a record a stranger can replay to the same result — what was open, what was taken, what was refused. Today that runs inside one small declared scope: no learning, and no measured advantage outside the project.":
    "В большинстве систем искусственного интеллекта объяснение пишется уже после решения — и тем же механизмом, который это решение принял. GALO устроен наоборот: список разрешённых действий закрывается до запуска, выбор идёт только из него, а после остаётся запись, по которой посторонний человек повторит шаг и получит тот же результат: что было доступно, что выбрано, что отклонено. Пока всё это работает внутри одной небольшой объявленной области: без обучения и без измеренного преимущества за пределами проекта.",
  "Splitting one goal into smaller steps that can be checked separately. Written down, not built.":
    "Разбить одну цель на шаги поменьше, каждый из которых можно проверить отдельно. Записано, но не построено.",
  "The action runs once, inside a limit set in advance. There is no second attempt and no way to spend more than was budgeted.":
    "Действие выполняется один раз и в пределах заранее заданного лимита. Второй попытки нет, и потратить больше отведённого невозможно.",
  "The step leaves a written record: what was checked, what ran, what came out. It is what you would hand to somebody who asks.":
    "После шага остаётся запись: что проверили, что выполнили, что вышло. Именно её вы и протянете тому, кто спрашивает.",
};

export const heroArchZh: TranslationDictionary = {
  "AI that has to show why it was allowed to decide.": "必须说明自己凭什么有权作出该决定的人工智能。",
  "BUILT FOR DECISIONS THAT GET AUDITED": "为事后要被审计的决策而建",
  "A plan written as a tree of steps rather than a single move, so the whole plan can be inspected before any of it runs. Not built.":
    "把计划写成一棵步骤树，而不是单独一步：整棵树在任何一步开跑之前都可以先看一遍。尚未建成。",
  "An explicit, readable picture of what the system currently believes about the world. No trained Atlas exists in this release.":
    "关于系统当下对世界持何种判断的一幅明确、可读的图景。本版本中不存在已训练的 Atlas。",
  "Before anything runs, the complete list of actions the engine is allowed to take is fixed. Nothing joins it later, and nothing outside it can be executed.":
    "在运行之前，引擎被允许采取的全部动作已经定死。此后不再添加，凡不在其中的都无法执行。",
  "Carrying what was learned from one run into the next. Learning writes are held at zero, and this stage is published as not started.":
    "把一次运行中学到的东西带到下一次。学习写入保持为零，该阶段被标注为尚未开始。",
  "Changing one belief without retraining everything around it. This is the loop the architecture is designed around, and it does not run today.":
    "改变一条判断，而不必把它周围的一切重新训练一遍。整套架构就是围绕这个回路设计的，而它今天并不运行。",
  "Every unit of work is counted and numbered, so the total can be checked against its parts rather than taken on trust.":
    "每一个工作单元都被计数并编号，因此总数可以与各项对账，而不必凭信任接受。",
  "Five stages that run in the release you can download today. Open any of them for what it means.":
    "五个阶段，在今天就能拿到的版本中确实在运行。任意展开一个，里面写着它是什么意思。",
  "Input would arrive with proof of where it came from. Today the engine accepts two fixed patterns and nothing else, so this stage does not run.":
    "输入会附带来源证明。今天引擎只接受两种固定模式，别的一概不收，所以这个阶段并不运行。",
  "One entry from that list is picked and tied to a single use. Trying to use it a second time is refused and recorded, not quietly allowed.":
    "从清单中选出一条，并把它绑定到一次使用上。想再用第二次会被拒绝并记录在案，不会悄悄通过。",
  "Six stages that are written down and not built. None of them runs in the current release.":
    "六个阶段，写下来了，但尚未建成。它们在当前版本中一个也不运行。",
  "In most AI systems the explanation is written after the decision, by the same machinery that made it. GALO is built the other way round: the list of permitted actions closes before anything runs, the choice comes only from that list, and what is left afterwards is a record a stranger can replay to the same result — what was open, what was taken, what was refused. Today that runs inside one small declared scope: no learning, and no measured advantage outside the project.":
    "在大多数人工智能系统里，解释是在决定作出之后，由作出该决定的同一套机制补写出来的。GALO 反着来：允许执行的动作清单在运行之前就已封闭，选择只能从这份清单里作出，事后留下的是一份记录——当时有哪些选项、选了哪一项、拒掉了哪些——陌生人照着重跑一遍就能得到同样的结果。目前这一切只在一个很小的、已声明的范围内运行：不学习，项目之外也没有任何测得的优势。",
  "Splitting one goal into smaller steps that can be checked separately. Written down, not built.":
    "把一个目标拆成若干更小、可以分别核查的步骤。写下来了，但尚未建成。",
  "The action runs once, inside a limit set in advance. There is no second attempt and no way to spend more than was budgeted.":
    "动作只执行一次，并且在事先设定的额度之内。没有第二次机会，也无法超支。",
  "The step leaves a written record: what was checked, what ran, what came out. It is what you would hand to somebody who asks.":
    "这一步之后留下一份记录：核查了什么、执行了什么、结果如何。有人问起时，你递出去的就是它。",
};

export const heroArchAr: TranslationDictionary = {
  "AI that has to show why it was allowed to decide.": "ذكاء اصطناعي مُلزَم بأن يُبيّن لماذا كان له الحقّ في أن يقرّر.",
  "BUILT FOR DECISIONS THAT GET AUDITED": "مبنيّ لقرارات تخضع للتدقيق لاحقًا",
  "A plan written as a tree of steps rather than a single move, so the whole plan can be inspected before any of it runs. Not built.":
    "خطة مكتوبة على هيئة شجرة خطوات لا خطوة واحدة، بحيث يمكن فحص الخطة كلّها قبل أن ينطلق أي جزء منها. غير مبنيّ.",
  "An explicit, readable picture of what the system currently believes about the world. No trained Atlas exists in this release.":
    "صورة صريحة ومقروءة لما يعتقده النظام عن العالم في اللحظة الراهنة. ولا وجود لـAtlas مدرَّب في هذا الإصدار.",
  "Before anything runs, the complete list of actions the engine is allowed to take is fixed. Nothing joins it later, and nothing outside it can be executed.":
    "قبل أي تشغيل، تُثبَّت القائمة الكاملة للأفعال المسموح بها للمحرّك. ولا يُضاف إليها شيء لاحقًا، ولا يمكن تنفيذ ما ليس فيها.",
  "Carrying what was learned from one run into the next. Learning writes are held at zero, and this stage is published as not started.":
    "نقل ما تعلّمه النظام من تشغيل إلى الذي يليه. كتابات التعلّم مثبَّتة عند الصفر، وهذه المرحلة منشورة على أنّها لم تبدأ.",
  "Changing one belief without retraining everything around it. This is the loop the architecture is designed around, and it does not run today.":
    "تغيير اعتقاد واحد دون إعادة تدريب كل ما حوله. حول هذه الحلقة صُمِّمت البنية، وهي لا تعمل اليوم.",
  "Every unit of work is counted and numbered, so the total can be checked against its parts rather than taken on trust.":
    "كل وحدة عمل معدودة ومرقَّمة، فيُراجَع المجموع في ضوء حدوده بدل أن يُؤخذ على الثقة.",
  "Five stages that run in the release you can download today. Open any of them for what it means.":
    "خمس مراحل تعمل في الإصدار المتاح اليوم. افتح أيًّا منها لتجد ما تعنيه.",
  "Input would arrive with proof of where it came from. Today the engine accepts two fixed patterns and nothing else, so this stage does not run.":
    "كان المُدخَل سيصل مصحوبًا بإثبات مصدره. أمّا اليوم فالمحرّك لا يقبل سوى نمطين ثابتين، ولذلك لا تعمل هذه المرحلة.",
  "One entry from that list is picked and tied to a single use. Trying to use it a second time is refused and recorded, not quietly allowed.":
    "يُنتقى بند واحد من تلك القائمة ويُربط باستعمال وحيد. ومحاولة استعماله مرّة ثانية تُرفض وتُدوَّن، ولا تمرّ في صمت.",
  "Six stages that are written down and not built. None of them runs in the current release.":
    "ستّ مراحل مكتوبة وغير مبنيّة. ولا تعمل أيٌّ منها في الإصدار الحالي.",
  "In most AI systems the explanation is written after the decision, by the same machinery that made it. GALO is built the other way round: the list of permitted actions closes before anything runs, the choice comes only from that list, and what is left afterwards is a record a stranger can replay to the same result — what was open, what was taken, what was refused. Today that runs inside one small declared scope: no learning, and no measured advantage outside the project.":
    "في معظم أنظمة الذكاء الاصطناعي يُكتب التفسير بعد القرار، وبالآلية نفسها التي اتّخذته. أمّا GALO فمبنيّ على الترتيب المعاكس: قائمة الأفعال المسموح بها تُغلق قبل أي تشغيل، والاختيار لا يجري إلّا منها، ويبقى بعدها سجلّ يعيد به غريبٌ الخطوةَ فيبلغ النتيجة نفسها: ما الذي كان متاحًا، وما الذي اختير، وما الذي رُفض. وهذا كلّه يعمل اليوم داخل نطاق واحد صغير ومعلَن: بلا تعلّم، وبلا أي أفضلية مقيسة خارج المشروع.",
  "Splitting one goal into smaller steps that can be checked separately. Written down, not built.":
    "تقسيم هدف واحد إلى خطوات أصغر يمكن فحص كلٍّ منها على حدة. مكتوب وغير مبنيّ.",
  "The action runs once, inside a limit set in advance. There is no second attempt and no way to spend more than was budgeted.":
    "يُنفَّذ الفعل مرّة واحدة وضمن حدٍّ موضوع سلفًا. لا محاولة ثانية ولا سبيل إلى إنفاق أكثر ممّا خُصِّص.",
  "The step leaves a written record: what was checked, what ran, what came out. It is what you would hand to somebody who asks.":
    "تخلّف الخطوة سجلًا مكتوبًا: ما جرى فحصه، وما نُفِّذ، وما خرج. وهو ما تناوله لمن يسأل.",
};
