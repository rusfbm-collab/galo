import type { TranslationDictionary } from "../translations";

/**
 * The plain-language path through the theory chapter, after it was rewritten
 * to stop speaking to a specialist in the slots a newcomer reads first. The
 * formal chapters below it keep their own register and their own modules.
 */

export const theoryPlainRu: TranslationDictionary = {
  "A PASS on its own says nothing. It says something only with the exact scope it was checked in, and the result it ended on.":
    "Сам по себе PASS не говорит ничего. Он что-то значит только вместе с точными рамками проверки и с тем, чем она закончилась.",
  "A level says how many situations you can tell apart at one spot.":
    "Уровень говорит, сколько ситуаций вы способны различить в одной точке.",
  "Add and wrap around, with the position you started from taken as the row.":
    "Сложить и завернуть по кругу, взяв за строку ту позицию, с которой вы начали.",
  "At every level with more than one position, STAR treats P0 differently depending on which side it sits. On the left it swallows the answer; on the right it leaves the other input untouched. Two separate one-sided facts, not one rule that works both ways.":
    "На каждом уровне, где позиций больше одной, STAR обходится с P0 по-разному в зависимости от того, с какой он стороны. Слева он проглатывает ответ; справа оставляет второй вход нетронутым. Это два отдельных односторонних факта, а не одно правило, работающее в обе стороны.",
  "Both laws take two positions and hand back one position at the same level. You can work out everything either law does from the formula, or read it straight off the table, and the two always agree.":
    "Оба закона берут две позиции и возвращают одну позицию того же уровня. Всё, что делает любой из них, можно либо вывести из формулы, либо прочитать прямо в таблице, — и эти два способа всегда сходятся.",
  "Count the addresses first, then the laws, then which input played which role.":
    "Сначала сосчитайте адреса, потом законы, потом — какой вход играл какую роль.",
  "Four things name one exact step and no other: the level, which law and which way round, the position you were in, and the one applied to it.":
    "Одну и только одну ступень называют четыре вещи: уровень, какой закон и в какую сторону, позиция, в которой вы были, и та, что к ней применили.",
  "GALO writes out every move available at one spot, in full, so a move can be recalculated, checked, and run again.":
    "GALO выписывает целиком все ходы, доступные в одной точке, — чтобы любой ход можно было пересчитать, проверить и повторить.",
  "Here the applied position goes on the left, so it is the one that decides whether STAR resets.":
    "Здесь слева оказывается приложенная позиция — значит, именно она решает, сработает ли сброс STAR.",
  "Here the position you started from is the one that decides whether STAR resets.":
    "Здесь решает, сработает ли сброс STAR, та позиция, с которой вы начали.",
  "Level n gives you n named positions. For the arithmetic, position P_i stands for the remainder i after dividing by n, and that is what keeps the sums exact. It does not make P_i mean the same thing everywhere it appears.":
    "Уровень n даёт вам n именованных позиций. Для арифметики позиция P_i означает остаток i от деления на n — именно это делает суммы точными. Но это не значит, что P_i везде означает одно и то же.",
  "One position is not the whole picture a system holds. The wider design would use these coordinates inside an explicit World Atlas, but the mathematics on its own is not a language model, not a trained memory, not proof of intelligence, and not a certificate that anything is true.":
    "Одна позиция — это не вся картина, которую держит система. В более широком замысле эти координаты вошли бы в явный World Atlas, но сама по себе математика — не языковая модель, не обученная память, не доказательство разумности и не свидетельство того, что что-то истинно.",
  "Rebuild one step four ways: from the roles, the formula, the table, and the record.":
    "Соберите один шаг четырьмя способами: из ролей, из формулы, из таблицы и из записи.",
  "Start by writing down every position the system can be in, by name. Nothing is hidden inside a vector nobody can read.":
    "Начните с того, что выпишете по именам все позиции, в которых система может оказаться. Ничто не спрятано внутри вектора, который никто не прочтёт.",
  "The law works out where you land, and nothing more. What it means, who may act on it, what counts as evidence, and whether anything happens in the world are separate questions with separate rules.":
    "Закон вычисляет, куда вы попадаете, и не более того. Что это значит, кому позволено на этом действовать, что считается доказательством и произойдёт ли что-нибудь в мире — отдельные вопросы с отдельными правилами.",
  "The same two inputs, swapped over. PLUS lands in the same place either way, because order does not matter to it.":
    "Те же два входа, но поменянные местами. PLUS попадает туда же в любом случае, потому что порядок для него не важен.",
};

export const theoryPlainZh: TranslationDictionary = {
  "A PASS on its own says nothing. It says something only with the exact scope it was checked in, and the result it ended on.":
    "PASS 本身什么也不说。它只有连同「在什么确切范围里查的」和「最后落在什么结果上」才有意义。",
  "A level says how many situations you can tell apart at one spot.":
    "层级说的是：在一个位置上，你能分辨出多少种情形。",
  "Add and wrap around, with the position you started from taken as the row.":
    "相加并绕回，把你出发时所在的位置当作行。",
  "At every level with more than one position, STAR treats P0 differently depending on which side it sits. On the left it swallows the answer; on the right it leaves the other input untouched. Two separate one-sided facts, not one rule that works both ways.":
    "在位置多于一个的每一层上，STAR 对 P0 的处理取决于它在哪一边。在左边，它把答案吞掉；在右边，它让另一个输入原样通过。这是两个各自单边的事实，不是一条两边都成立的规则。",
  "Both laws take two positions and hand back one position at the same level. You can work out everything either law does from the formula, or read it straight off the table, and the two always agree.":
    "两条法则都吃进两个位置，交回同一层上的一个位置。任何一条法则做的事，你既可以从公式算出来，也可以直接在表里读到——两条路永远对得上。",
  "Count the addresses first, then the laws, then which input played which role.":
    "先数地址，再数法则，最后数哪个输入担了哪个角色。",
  "Four things name one exact step and no other: the level, which law and which way round, the position you were in, and the one applied to it.":
    "四样东西唯一地点出一步：层级、用哪条法则以及朝哪个方向、你原本所在的位置，以及施加到它上面的那个位置。",
  "GALO writes out every move available at one spot, in full, so a move can be recalculated, checked, and run again.":
    "GALO 把一个位置上所有可走的步子完整写出来，好让任何一步都能重算、能核对、能再跑一遍。",
  "Here the applied position goes on the left, so it is the one that decides whether STAR resets.":
    "这里放在左边的是被施加的那个位置，所以由它来决定 STAR 会不会重置。",
  "Here the position you started from is the one that decides whether STAR resets.":
    "这里决定 STAR 会不会重置的，是你出发时所在的位置。",
  "Level n gives you n named positions. For the arithmetic, position P_i stands for the remainder i after dividing by n, and that is what keeps the sums exact. It does not make P_i mean the same thing everywhere it appears.":
    "第 n 层给你 n 个具名位置。做算术时，位置 P_i 代表除以 n 之后的余数 i，正是这一点让加法算得准。但它并不意味着 P_i 在哪儿都是同一个意思。",
  "One position is not the whole picture a system holds. The wider design would use these coordinates inside an explicit World Atlas, but the mathematics on its own is not a language model, not a trained memory, not proof of intelligence, and not a certificate that anything is true.":
    "一个位置不等于系统持有的整幅图景。在更大的设计里，这些坐标会放进一个显式的 World Atlas；但数学本身不是语言模型，不是训练出来的记忆，不是智能的证明，也不是任何东西为真的凭证。",
  "Rebuild one step four ways: from the roles, the formula, the table, and the record.":
    "把同一步用四种方式重建：从角色、从公式、从表格、从记录。",
  "Start by writing down every position the system can be in, by name. Nothing is hidden inside a vector nobody can read.":
    "先把系统可能处在的每一个位置按名字写出来。没有任何东西藏在一个谁也读不了的向量里。",
  "The law works out where you land, and nothing more. What it means, who may act on it, what counts as evidence, and whether anything happens in the world are separate questions with separate rules.":
    "法则算出你落在哪里，仅此而已。它是什么意思、谁有权照着做、什么算证据、以及世界上会不会真的发生什么——都是各有各规矩的另外几个问题。",
  "The same two inputs, swapped over. PLUS lands in the same place either way, because order does not matter to it.":
    "同样这两个输入，位置对调。PLUS 两种摆法落点相同，因为顺序对它无所谓。",
};

export const theoryPlainAr: TranslationDictionary = {
  "A PASS on its own says nothing. It says something only with the exact scope it was checked in, and the result it ended on.":
    "لا يقول PASS وحده شيئًا. وإنّما يقول شيئًا مع النطاق الدقيق الذي فُحص فيه، ومع النتيجة التي انتهى إليها.",
  "A level says how many situations you can tell apart at one spot.":
    "يقول المستوى كم موقفًا تستطيع أن تميّزه في موضعٍ واحد.",
  "Add and wrap around, with the position you started from taken as the row.":
    "اجمع والتفّ، مع أخذ الموضع الذي بدأت منه صفًّا.",
  "At every level with more than one position, STAR treats P0 differently depending on which side it sits. On the left it swallows the answer; on the right it leaves the other input untouched. Two separate one-sided facts, not one rule that works both ways.":
    "في كلّ مستوى فيه أكثر من موضع، يعامل STAR الموضع P0 معاملةً تختلف باختلاف الجهة التي يقع فيها. فإن كان يسارًا ابتلع الجواب، وإن كان يمينًا ترك المُدخل الآخر كما هو. حقيقتان أُحاديّتا الجهة، لا قاعدةٌ واحدة تعمل في الجهتين.",
  "Both laws take two positions and hand back one position at the same level. You can work out everything either law does from the formula, or read it straight off the table, and the two always agree.":
    "يأخذ القانونان موضعين ويردّان موضعًا واحدًا في المستوى نفسه. وكلّ ما يفعله أيٌّ منهما يمكن استخراجه من الصيغة أو قراءته من الجدول مباشرةً، والطريقان يتّفقان دائمًا.",
  "Count the addresses first, then the laws, then which input played which role.":
    "عُدَّ العناوين أوّلًا، ثمّ القوانين، ثمّ أيُّ مُدخل أدّى أيّ دور.",
  "Four things name one exact step and no other: the level, which law and which way round, the position you were in, and the one applied to it.":
    "أربعة أشياء تسمّي خطوةً واحدة لا غيرها: المستوى، وأيّ قانون وبأيّ اتجاه، والموضع الذي كنت فيه، والموضع المطبَّق عليه.",
  "GALO writes out every move available at one spot, in full, so a move can be recalculated, checked, and run again.":
    "يكتب GALO كلّ حركةٍ متاحة في موضعٍ واحد كتابةً تامّة، حتى يمكن إعادة حساب الحركة وفحصها وتشغيلها من جديد.",
  "Here the applied position goes on the left, so it is the one that decides whether STAR resets.":
    "هنا يقع الموضع المطبَّق يسارًا، فهو الذي يقرّر أيقع إعادة ضبط STAR أم لا.",
  "Here the position you started from is the one that decides whether STAR resets.":
    "هنا يقرّر الموضعُ الذي بدأت منه أيقع إعادة ضبط STAR أم لا.",
  "Level n gives you n named positions. For the arithmetic, position P_i stands for the remainder i after dividing by n, and that is what keeps the sums exact. It does not make P_i mean the same thing everywhere it appears.":
    "يعطيك المستوى n عددَ n من المواضع المسمّاة. وفي الحساب يقوم الموضع P_i مقام الباقي i بعد القسمة على n، وهذا ما يجعل الجمع دقيقًا. لكنّه لا يجعل P_i يعني الشيء نفسه في كلّ موضع يرد فيه.",
  "One position is not the whole picture a system holds. The wider design would use these coordinates inside an explicit World Atlas, but the mathematics on its own is not a language model, not a trained memory, not proof of intelligence, and not a certificate that anything is true.":
    "الموضع الواحد ليس كلّ الصورة التي يحملها النظام. وفي التصميم الأوسع تدخل هذه الإحداثيات في World Atlas صريح؛ أمّا الرياضيات وحدها فليست نموذج لغة، ولا ذاكرةً مدرَّبة، ولا برهانًا على الذكاء، ولا شهادةً بأنّ شيئًا ما صحيح.",
  "Rebuild one step four ways: from the roles, the formula, the table, and the record.":
    "أعِد بناء خطوةٍ واحدة بأربع طرق: من الأدوار، ومن الصيغة، ومن الجدول، ومن السجلّ.",
  "Start by writing down every position the system can be in, by name. Nothing is hidden inside a vector nobody can read.":
    "ابدأ بأن تكتب بالاسم كلّ موضعٍ يمكن للنظام أن يكون فيه. ولا شيء مخبَّأ داخل متجهٍ لا يقرؤه أحد.",
  "The law works out where you land, and nothing more. What it means, who may act on it, what counts as evidence, and whether anything happens in the world are separate questions with separate rules.":
    "يحسب القانون أين تقع، وليس أكثر. أمّا ما تعنيه النتيجة، ومَن يجوز له أن يتصرّف بها، وما الذي يُعدّ دليلًا، وهل يقع في العالم شيء — فأسئلةٌ منفصلة لكلٍّ منها قواعده.",
  "The same two inputs, swapped over. PLUS lands in the same place either way, because order does not matter to it.":
    "المُدخلان نفسهما، مقلوبَي الترتيب. ويصل PLUS إلى الموضع نفسه في الحالتين، لأنّ الترتيب لا يعنيه.",
};
