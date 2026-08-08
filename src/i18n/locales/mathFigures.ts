import type { TranslationDictionary } from "../translations";

export const mathFiguresRu: TranslationDictionary = {
  "A four-node diagram. At the bottom the single position P0. Above it two rings: P0 with P3, and P0 with P2 and P4. Both rise to the whole level at the top. L6 has four divisors and therefore four rings; a prime level such as L7 has only two.":
    "Диаграмма из четырёх узлов. Внизу — единственная позиция P0. Над ней два кольца: P0 с P3 и P0 с P2 и P4. Оба поднимаются к уровню целиком. У L6 четыре делителя и, значит, четыре кольца; у простого уровня вроде L7 их всего два.",
  "A prime level has nothing between P0 and the whole ring, which is why L5 and L7 have two sub-collections while the smaller L6 has four. Size is not the same as structure, and this is the clearest place that shows it.":
    "У простого уровня между P0 и всем кольцом нет ничего — поэтому у L5 и L7 по два подсобрания, а у меньшего L6 их четыре. Размер и структура — не одно и то же, и нагляднее всего это видно здесь.",
  "A single counterexample settles this permanently: no later result can make STAR associative. What it does not settle is anything about PLUS, which is associative at every level and is checked separately.":
    "Одного контрпримера достаточно навсегда: никакой последующий результат не сделает STAR ассоциативным. Чего он не решает — так это ничего про PLUS, который ассоциативен на каждом уровне и проверяется отдельно.",
  "Add the same position repeatedly and count the steps back to P0.":
    "Прибавляйте одну и ту же позицию раз за разом и считайте шаги до возвращения в P0.",
  "Agreement between two methods is a check on the arithmetic, not evidence about anything outside it. It says the counting is right; it says nothing about what the orbits are for.":
    "Согласие двух методов — проверка арифметики, а не свидетельство о чём-то вне её. Оно говорит, что счёт верен, и ничего не говорит о том, зачем нужны орбиты.",
  "Both methods agree at every level.": "Оба метода совпадают на каждом уровне.",
  "Cells where PLUS and STAR return different positions": "Ячейки, в которых PLUS и STAR возвращают разные позиции",
  "Count the distinct results along each row and each column. A tick means all five appeared; a number means how few did. The whole failure of STAR is one row, and it drags four of the five columns down with it.":
    "Посчитайте различные результаты вдоль каждой строки и каждого столбца. Галочка означает, что встретились все пять; число — сколько их оказалось. Весь провал STAR — это одна строка, и она тянет за собой четыре столбца из пяти.",
  "Count the orbits by walking them, or never look at an orbit and average instead.":
    "Считайте орбиты обходом или вообще не смотрите на орбиты и возьмите среднее.",
  "Each square below is one level: rows are the left input, columns the right. A filled cell is a pair where PLUS and STAR return different positions. They sit in the first row only, and P0 combined with itself is not among them.":
    "Каждый квадрат ниже — один уровень: строки это левый вход, столбцы — правый. Закрашенная ячейка — пара, на которой PLUS и STAR возвращают разные позиции. Они лежат только в первой строке, и P0 с самим собой в их число не входит.",
  "Every position exactly once in every row and column — PLUS passes, STAR does not.":
    "Каждая позиция ровно один раз в каждой строке и каждом столбце: PLUS проходит, STAR — нет.",
  "HOW LONG EACH POSITION TAKES TO COME HOME": "СКОЛЬКО КАЖДОЙ ПОЗИЦИИ ИДТИ ДОМОЙ",
  "Move the brackets and STAR gives a different position.": "Переставьте скобки — и STAR даёт другую позицию.",
  "ONE TRIPLE, TWO ANSWERS": "ОДНА ТРОЙКА, ДВА ОТВЕТА",
  "One row wide, at every level, and nowhere else.": "Шириной в одну строку, на каждом уровне и больше нигде.",
  "Orbit counts by enumeration and by averaging, level by level":
    "Число орбит обходом и усреднением, уровень за уровнем",
  "P0, already home": "P0, уже дома",
  "PLUS at L5": "PLUS на L5",
  "Repeat one step from P0 and you land in a smaller closed ring — one for each divisor.":
    "Повторяйте один шаг от P0 — и попадёте в кольцо поменьше, по одному на каждый делитель.",
  "STAR at L5": "STAR на L5",
  "Seven pairs of columns, one pair per level. In each pair the left column is the count from walking the orbits and the right column is the count from averaging fixed pairs. The two columns are the same height at every level: 1, 4, 5, 10, 7, 20 and 9.":
    "Семь пар столбцов, по паре на уровень. В каждой паре левый столбец — счёт обходом орбит, правый — счёт усреднением неподвижных пар. На каждом уровне столбцы одной высоты: 1, 4, 5, 10, 7, 20 и 9.",
  "Seven square grids, one per level from L1 to L7. In each grid the only filled cells lie along the top row, and there are n−1 of them at level n: none at L1, one at L2, and six at L7. Twenty-one filled cells out of one hundred and forty.":
    "Семь квадратных сеток, по одной на уровень от L1 до L7. В каждой закрашены только клетки верхней строки, и на уровне n их n−1: ни одной на L1, одна на L2 и шесть на L7. Двадцать одна закрашенная клетка из ста сорока.",
  "Start at P0 and keep adding the same position. At L6, adding P2 each time visits P0, P2, P4 and returns; adding P3 visits P0 and P3. Those closed rings are the sub-collections, and a line joins one to another when the smaller sits inside the larger.":
    "Начните с P0 и прибавляйте одну и ту же позицию. На L6 прибавление P2 обходит P0, P2, P4 и возвращается; прибавление P3 обходит P0 и P3. Эти замкнутые кольца и есть подсобрания, а линия соединяет одно с другим, когда меньшее лежит внутри большего.",
  "Steps back to P0 for every position at L6 and at L7": "Шаги до возвращения в P0 для каждой позиции на L6 и на L7",
  "THE OLDEST TEST FOR A GROUP TABLE": "СТАРЕЙШАЯ ПРОВЕРКА ГРУППОВОЙ ТАБЛИЦЫ",
  "THE RINGS INSIDE A RING": "КОЛЬЦА ВНУТРИ КОЛЬЦА",
  "THE SAME NUMBER, REACHED TWO DIFFERENT WAYS": "ОДНО И ТО ЖЕ ЧИСЛО, ПОЛУЧЕННОЕ ДВУМЯ ПУТЯМИ",
  "Take the same three inputs in the same order and only change which pair is combined first. Under PLUS the answer would not move. Under STAR it does, and that single fact is what stops STAR from being a semigroup.":
    "Возьмите те же три входа в том же порядке и поменяйте только то, какую пару соединяют первой. Под PLUS ответ не сдвинулся бы. Под STAR он сдвигается — и именно это мешает STAR быть полугруппой.",
  "The Latin-square test applied to both laws at L5": "Проверка на латинский квадрат для обоих законов на L5",
  "The first method goes pair by pair and crosses off everything each orbit touches. The second asks each lawful relabelling how many pairs it leaves exactly where they were, and takes the average. They are unrelated procedures and they agree at every level.":
    "Первый метод идёт пара за парой и вычёркивает всё, чего касается очередная орбита. Второй спрашивает у каждой допустимой перемаркировки, сколько пар она оставляет ровно на месте, и берёт среднее. Это несвязанные процедуры, и они совпадают на каждом уровне.",
  "The four closed sub-collections of L6 and how they nest": "Четыре замкнутых подсобрания L6 и как они вложены",
  "The number on each tile is how many additions of that position return you to P0. It is the level divided by whatever factor the two share, so at a prime level every position but P0 takes the full lap.":
    "Число на плитке — сколько раз надо прибавить эту позицию, чтобы вернуться в P0. Это уровень, делённый на общий множитель, поэтому на простом уровне каждая позиция, кроме P0, проходит полный круг.",
  "The same three inputs bracketed two ways at L3": "Одни и те же три входа с двумя расстановками скобок на L3",
  "This is the standard test and it is decisive in one direction only: failing it rules a table out of being a group table, while passing it does not by itself make one. The rest of the group properties are checked separately.":
    "Это стандартная проверка, и решает она только в одну сторону: провал исключает таблицу из групповых, а прохождение само по себе групповой её не делает. Остальные свойства группы проверяются отдельно.",
  "Two five-by-five tables. In the PLUS table every row and every column contains each of P0 to P4 exactly once, and every margin carries a tick. In the STAR table the first row is P0 five times, so that row is marked 1, and four of the five columns are marked 4.":
    "Две таблицы пять на пять. В таблице PLUS в каждой строке и каждом столбце каждая из P0–P4 встречается ровно один раз, и на полях всюду галочки. В таблице STAR первая строка — это P0 пять раз, поэтому эта строка помечена как 1, а четыре столбца из пяти — как 4.",
  "Two rows of tiles. At L6 the counts read one, six, three, two, three, six. At L7 they read one followed by six sevens. The composite level splits into several different answers; the prime level does not.":
    "Два ряда плиток. На L6 счётчики читаются как один, шесть, три, два, три, шесть. На L7 — единица и следом шесть семёрок. Составной уровень распадается на несколько разных ответов, простой — нет.",
  "Two rows. The upper row combines P1 with P0 first, giving P1, and then combines that with P1 to reach P2. The lower row combines P0 with P1 first, giving P0, and then combines P1 with that to reach P1. The two rows end on different positions.":
    "Два ряда. Верхний сначала соединяет P1 с P0 и получает P1, затем соединяет это с P1 и приходит в P2. Нижний сначала соединяет P0 с P1 и получает P0, затем соединяет P1 с этим и приходит в P1. Ряды заканчиваются в разных позициях.",
  "WHERE THE TWO LAWS ACTUALLY DISAGREE": "ГДЕ ДВА ЗАКОНА ДЕЙСТВИТЕЛЬНО РАСХОДЯТСЯ",
  "at L6, adding P2 three times returns to P0 through P2 and P4":
    "на L6 прибавление P2 трижды возвращает в P0 через P2 и P4",
  "at a prime level nothing shares a factor, so every position takes the full lap":
    "на простом уровне ни у кого нет общего множителя, поэтому каждая позиция проходит полный круг",
  "comes home early, on a shorter ring": "возвращается раньше, по более короткому кольцу",
  "counted by averaging what each relabelling leaves fixed":
    "посчитано усреднением того, что каждая перемаркировка оставляет на месте",
  "counted by walking every orbit": "посчитано обходом каждой орбиты",
  "disagreeing pairs at level n, all of them in the first row":
    "расходящихся пар на уровне n, и все они в первой строке",
  "here the left input is P0, so the clause fires and the right input is discarded":
    "здесь левый вход — P0, поэтому оговорка срабатывает и правый вход отбрасывается",
  "ordered pairs across the tower on which the laws disagree":
    "упорядоченных пар по всей башне, на которых законы расходятся",
  rings: "кольца",
  "steps back to P0 for the position k at level n": "шагов до возвращения в P0 для позиции k на уровне n",
  "takes the full lap of the level": "проходит полный круг уровня",
  "the average is the orbit count, and walking the orbits at L6 gives the same number":
    "среднее и есть число орбит, и обход орбит на L6 даёт то же самое число",
  "the left input is not P0, so the reset clause does not fire and the two are added":
    "левый вход не P0, поэтому оговорка о сбросе не срабатывает и входы складываются",
  "the one cell of the reset row where the two laws still agree":
    "единственная ячейка строки сброса, где два закона всё же совпадают",
  "the only other lawful relabelling at L6 leaves just two positions where they were":
    "единственная другая допустимая перемаркировка на L6 оставляет на месте лишь две позиции",
  "the relabelling that changes nothing leaves every pair fixed":
    "перемаркировка, которая ничего не меняет, оставляет на месте каждую пару",
  "the same three inputs, two bracketings, two positions": "те же три входа, две расстановки скобок, две позиции",
  "the two laws agree": "два закона совпадают",
  "the two laws return different positions": "два закона возвращают разные позиции",
};

export const mathFiguresZh: TranslationDictionary = {
  "A four-node diagram. At the bottom the single position P0. Above it two rings: P0 with P3, and P0 with P2 and P4. Both rise to the whole level at the top. L6 has four divisors and therefore four rings; a prime level such as L7 has only two.":
    "一张四节点图。底部是单独的位置 P0。它上面是两个环：P0 与 P3，以及 P0 与 P2、P4。两者都通向顶部的整个层级。L6 有四个约数，因此有四个环；像 L7 这样的素数层级只有两个。",
  "A prime level has nothing between P0 and the whole ring, which is why L5 and L7 have two sub-collections while the smaller L6 has four. Size is not the same as structure, and this is the clearest place that shows it.":
    "素数层级在 P0 和整个环之间没有任何东西，所以 L5 和 L7 各有两个子集合，而更小的 L6 却有四个。大小不等于结构，这里把这一点显示得最清楚。",
  "A single counterexample settles this permanently: no later result can make STAR associative. What it does not settle is anything about PLUS, which is associative at every level and is checked separately.":
    "一个反例就永久了结了这件事：以后的任何结果都不能让 STAR 变成结合的。它没有了结的是关于 PLUS 的任何事——PLUS 在每一层都满足结合律，那是单独核验的。",
  "Add the same position repeatedly and count the steps back to P0.": "反复加上同一个位置，数一数走几步回到 P0。",
  "Agreement between two methods is a check on the arithmetic, not evidence about anything outside it. It says the counting is right; it says nothing about what the orbits are for.":
    "两种方法一致，是对算术的核验，而不是关于算术之外任何事情的证据。它说明数得没错，却完全没说这些轨道是干什么用的。",
  "Both methods agree at every level.": "两种方法在每一层都一致。",
  "Cells where PLUS and STAR return different positions": "PLUS 与 STAR 返回不同位置的那些单元格",
  "Count the distinct results along each row and each column. A tick means all five appeared; a number means how few did. The whole failure of STAR is one row, and it drags four of the five columns down with it.":
    "沿每一行、每一列数一数出现了多少个不同的结果。对勾表示五个全都出现了；数字表示只出现了几个。STAR 的全部失败就在于一行，而它把五列中的四列一起拖了下去。",
  "Count the orbits by walking them, or never look at an orbit and average instead.":
    "要么把轨道一个个走一遍来数，要么根本不看轨道，改用取平均。",
  "Each square below is one level: rows are the left input, columns the right. A filled cell is a pair where PLUS and STAR return different positions. They sit in the first row only, and P0 combined with itself is not among them.":
    "下面每个方阵是一个层级：行是左输入，列是右输入。填色的格子表示 PLUS 与 STAR 在这一对上返回了不同的位置。它们只落在第一行，而 P0 与自身那一格不在其中。",
  "Every position exactly once in every row and column — PLUS passes, STAR does not.":
    "每一行、每一列都恰好出现每个位置一次：PLUS 通过，STAR 不通过。",
  "HOW LONG EACH POSITION TAKES TO COME HOME": "每个位置要走多久才回家",
  "Move the brackets and STAR gives a different position.": "把括号挪一下，STAR 就给出另一个位置。",
  "ONE TRIPLE, TWO ANSWERS": "同一组三个输入，两个答案",
  "One row wide, at every level, and nowhere else.": "宽度就是一行，每一层都如此，别处没有。",
  "Orbit counts by enumeration and by averaging, level by level": "逐层给出的轨道数：一种靠遍历，一种靠取平均",
  "P0, already home": "P0，本来就在家",
  "PLUS at L5": "L5 上的 PLUS",
  "Repeat one step from P0 and you land in a smaller closed ring — one for each divisor.":
    "从 P0 出发反复走同一步，你会落进一个更小的闭环——每个约数对应一个。",
  "STAR at L5": "L5 上的 STAR",
  "Seven pairs of columns, one pair per level. In each pair the left column is the count from walking the orbits and the right column is the count from averaging fixed pairs. The two columns are the same height at every level: 1, 4, 5, 10, 7, 20 and 9.":
    "七对柱子，每层一对。每对中左边一根是遍历轨道数出来的，右边一根是对不动对取平均得到的。每一层两根柱子等高：1、4、5、10、7、20 和 9。",
  "Seven square grids, one per level from L1 to L7. In each grid the only filled cells lie along the top row, and there are n−1 of them at level n: none at L1, one at L2, and six at L7. Twenty-one filled cells out of one hundred and forty.":
    "七个方形网格，从 L1 到 L7 各一个。每个网格里被填色的格子都只在最上面一行，第 n 层有 n−1 个：L1 一个也没有，L2 一个，L7 六个。总共一百四十格中填了二十一格。",
  "Start at P0 and keep adding the same position. At L6, adding P2 each time visits P0, P2, P4 and returns; adding P3 visits P0 and P3. Those closed rings are the sub-collections, and a line joins one to another when the smaller sits inside the larger.":
    "从 P0 开始，一直加同一个位置。在 L6 上，每次加 P2 会经过 P0、P2、P4 再回来；每次加 P3 则经过 P0 和 P3。这些闭合的环就是子集合，而当小的那个包含在大的里面时，两者之间画一条线。",
  "Steps back to P0 for every position at L6 and at L7": "L6 与 L7 上每个位置回到 P0 所需的步数",
  "THE OLDEST TEST FOR A GROUP TABLE": "检验群表最老的办法",
  "THE RINGS INSIDE A RING": "环里面的环",
  "THE SAME NUMBER, REACHED TWO DIFFERENT WAYS": "同一个数字，两条路走出来",
  "Take the same three inputs in the same order and only change which pair is combined first. Under PLUS the answer would not move. Under STAR it does, and that single fact is what stops STAR from being a semigroup.":
    "拿同样三个输入、同样的顺序，只改一件事：先把哪一对合并。在 PLUS 下答案不会变；在 STAR 下它变了——正是这一点让 STAR 当不成半群。",
  "The Latin-square test applied to both laws at L5": "对 L5 上两条运算律做的拉丁方检验",
  "The first method goes pair by pair and crosses off everything each orbit touches. The second asks each lawful relabelling how many pairs it leaves exactly where they were, and takes the average. They are unrelated procedures and they agree at every level.":
    "第一种方法一对一对地走，把每条轨道碰到的都划掉。第二种方法则问每一种合法重标记：它让多少对原地不动，然后取平均。这是两套毫不相干的程序，而它们在每一层都一致。",
  "The four closed sub-collections of L6 and how they nest": "L6 的四个闭合子集合，以及它们如何相互嵌套",
  "The number on each tile is how many additions of that position return you to P0. It is the level divided by whatever factor the two share, so at a prime level every position but P0 takes the full lap.":
    "每块方砖上的数字，是把这个位置加上多少次才回到 P0。它等于层级除以两者的公因数，所以在素数层级上，除 P0 之外每个位置都要走满一圈。",
  "The same three inputs bracketed two ways at L3": "L3 上同样三个输入的两种括号方式",
  "This is the standard test and it is decisive in one direction only: failing it rules a table out of being a group table, while passing it does not by itself make one. The rest of the group properties are checked separately.":
    "这是标准检验，而且只在一个方向上是决定性的：没通过就排除了它是群表的可能，通过了却并不因此就是群表。群的其余性质要另行核验。",
  "Two five-by-five tables. In the PLUS table every row and every column contains each of P0 to P4 exactly once, and every margin carries a tick. In the STAR table the first row is P0 five times, so that row is marked 1, and four of the five columns are marked 4.":
    "两张五乘五的表。在 PLUS 表里，每一行、每一列都恰好包含 P0 到 P4 各一次，边上全是对勾。在 STAR 表里，第一行是五个 P0，所以那一行标着 1，而五列中有四列标着 4。",
  "Two rows of tiles. At L6 the counts read one, six, three, two, three, six. At L7 they read one followed by six sevens. The composite level splits into several different answers; the prime level does not.":
    "两排方砖。L6 上的数字依次是一、六、三、二、三、六。L7 上则是一，后面跟着六个七。合数层级会分出好几种不同的答案，素数层级不会。",
  "Two rows. The upper row combines P1 with P0 first, giving P1, and then combines that with P1 to reach P2. The lower row combines P0 with P1 first, giving P0, and then combines P1 with that to reach P1. The two rows end on different positions.":
    "两行。上面一行先把 P1 与 P0 合并得到 P1，再把它与 P1 合并，到达 P2。下面一行先把 P0 与 P1 合并得到 P0，再把 P1 与它合并，到达 P1。两行落在不同的位置上。",
  "WHERE THE TWO LAWS ACTUALLY DISAGREE": "两条运算律究竟在哪里分道扬镳",
  "at L6, adding P2 three times returns to P0 through P2 and P4": "在 L6 上，加三次 P2 会经 P2、P4 回到 P0",
  "at a prime level nothing shares a factor, so every position takes the full lap":
    "在素数层级上没有谁与之有公因数，所以每个位置都要走满一圈",
  "comes home early, on a shorter ring": "提前回家，走的是更短的环",
  "counted by averaging what each relabelling leaves fixed": "靠「每种重标记让多少东西原地不动」取平均数出来的",
  "counted by walking every orbit": "靠把每条轨道走一遍数出来的",
  "disagreeing pairs at level n, all of them in the first row": "第 n 层上不一致的对数，而且全在第一行",
  "here the left input is P0, so the clause fires and the right input is discarded":
    "这里左输入是 P0，于是那条子句生效，右输入被丢掉",
  "ordered pairs across the tower on which the laws disagree": "整座塔中两条运算律不一致的有序对",
  rings: "环",
  "steps back to P0 for the position k at level n": "第 n 层上位置 k 回到 P0 所需的步数",
  "takes the full lap of the level": "要走满这一层的一圈",
  "the average is the orbit count, and walking the orbits at L6 gives the same number":
    "这个平均值就是轨道数，而在 L6 上把轨道走一遍得到的也是同一个数",
  "the left input is not P0, so the reset clause does not fire and the two are added":
    "左输入不是 P0，于是重置子句不触发，两者相加",
  "the one cell of the reset row where the two laws still agree": "重置那一行里两条运算律仍然一致的唯一一格",
  "the only other lawful relabelling at L6 leaves just two positions where they were":
    "L6 上另一种合法重标记只让两个位置原地不动",
  "the relabelling that changes nothing leaves every pair fixed": "什么都不改的那种重标记，让每一对都原地不动",
  "the same three inputs, two bracketings, two positions": "同样三个输入，两种括号，两个位置",
  "the two laws agree": "两条运算律一致",
  "the two laws return different positions": "两条运算律返回不同的位置",
};

export const mathFiguresAr: TranslationDictionary = {
  "A four-node diagram. At the bottom the single position P0. Above it two rings: P0 with P3, and P0 with P2 and P4. Both rise to the whole level at the top. L6 has four divisors and therefore four rings; a prime level such as L7 has only two.":
    "مخطّط من أربع عقد. في الأسفل الموضع الوحيد P0. وفوقه حلقتان: P0 مع P3، وP0 مع P2 وP4. وكلتاهما تصعدان إلى المستوى بأكمله في الأعلى. لـL6 أربعة قواسم ومن ثمّ أربع حلقات؛ أمّا مستوى أوّليّ مثل L7 فله حلقتان فقط.",
  "A prime level has nothing between P0 and the whole ring, which is why L5 and L7 have two sub-collections while the smaller L6 has four. Size is not the same as structure, and this is the clearest place that shows it.":
    "المستوى الأوّليّ لا شيء بين P0 والحلقة كلّها، ولذلك لـL5 وL7 مجموعتان فرعيتان لكلٍّ منهما، بينما لـL6 الأصغر أربع. الحجم ليس هو البنية، وهذا أوضح موضع يُظهر ذلك.",
  "A single counterexample settles this permanently: no later result can make STAR associative. What it does not settle is anything about PLUS, which is associative at every level and is checked separately.":
    "مثال مضاد واحد يحسم هذا نهائياً: لا نتيجة لاحقة تجعل STAR تجميعياً. أمّا ما لا يحسمه فهو أي شيء عن PLUS، فهو تجميعي في كل مستوى ويُفحص على حدة.",
  "Add the same position repeatedly and count the steps back to P0.":
    "أضِف الموضع نفسه مرّة بعد مرّة، وعُدّ الخطوات حتى العودة إلى P0.",
  "Agreement between two methods is a check on the arithmetic, not evidence about anything outside it. It says the counting is right; it says nothing about what the orbits are for.":
    "اتّفاق الطريقتين تحقّقٌ من الحساب لا دليلٌ على شيء خارجه. يقول إنّ العدّ صحيح، ولا يقول شيئاً عمّا تصلح له المدارات.",
  "Both methods agree at every level.": "تتّفق الطريقتان في كل مستوى.",
  "Cells where PLUS and STAR return different positions": "الخلايا التي يعيد فيها PLUS وSTAR مواضع مختلفة",
  "Count the distinct results along each row and each column. A tick means all five appeared; a number means how few did. The whole failure of STAR is one row, and it drags four of the five columns down with it.":
    "عُدّ النتائج المختلفة في كل صفّ وكل عمود. علامة الصحّ تعني أنّ الخمسة كلّها ظهرت، والرقم يقول كم ظهر منها. وإخفاق STAR كلّه صفٌّ واحد، وهو يجرّ معه أربعة أعمدة من خمسة.",
  "Count the orbits by walking them, or never look at an orbit and average instead.":
    "عُدّ المدارات بالمرور عليها، أو لا تنظر إلى مدار أصلاً وخُذ المتوسّط بدلاً من ذلك.",
  "Each square below is one level: rows are the left input, columns the right. A filled cell is a pair where PLUS and STAR return different positions. They sit in the first row only, and P0 combined with itself is not among them.":
    "كل مربّع أدناه مستوى واحد: الصفوف هي المُدخَل الأيسر والأعمدة هي الأيمن. والخلية المملوءة زوجٌ يعيد فيه PLUS وSTAR موضعين مختلفين. وهي في الصفّ الأول وحده، وP0 مع نفسه ليس منها.",
  "Every position exactly once in every row and column — PLUS passes, STAR does not.":
    "كل موضع مرّة واحدة بالضبط في كل صفّ وكل عمود: PLUS ينجح وSTAR لا.",
  "HOW LONG EACH POSITION TAKES TO COME HOME": "كم يستغرق كل موضع ليعود إلى بيته",
  "Move the brackets and STAR gives a different position.": "حرِّك الأقواس فيعطي STAR موضعاً آخر.",
  "ONE TRIPLE, TWO ANSWERS": "ثلاثة مُدخَلات، جوابان",
  "One row wide, at every level, and nowhere else.": "بعرض صفٍّ واحد، في كل مستوى، ولا في أي موضع آخر.",
  "Orbit counts by enumeration and by averaging, level by level": "أعداد المدارات بالمرور وبالمتوسّط، مستوى بعد مستوى",
  "P0, already home": "P0، وهو في بيته أصلاً",
  "PLUS at L5": "PLUS عند L5",
  "Repeat one step from P0 and you land in a smaller closed ring — one for each divisor.":
    "كرِّر خطوة واحدة من P0 فتقع في حلقة أصغر مغلقة — واحدة لكل قاسم.",
  "STAR at L5": "STAR عند L5",
  "Seven pairs of columns, one pair per level. In each pair the left column is the count from walking the orbits and the right column is the count from averaging fixed pairs. The two columns are the same height at every level: 1, 4, 5, 10, 7, 20 and 9.":
    "سبعة أزواج من الأعمدة، زوج لكل مستوى. في كل زوج العمود الأيسر هو العدّ بالمرور على المدارات، والأيمن هو العدّ بمتوسّط الأزواج الثابتة. والعمودان متساويا الارتفاع في كل مستوى: ١، ٤، ٥، ١٠، ٧، ٢٠ و٩.",
  "Seven square grids, one per level from L1 to L7. In each grid the only filled cells lie along the top row, and there are n−1 of them at level n: none at L1, one at L2, and six at L7. Twenty-one filled cells out of one hundred and forty.":
    "سبع شبكات مربّعة، واحدة لكل مستوى من L1 إلى L7. في كل شبكة تقع الخلايا المملوءة في الصفّ العلوي وحده، وعددها n−1 عند المستوى n: لا شيء عند L1، وواحدة عند L2، وستّ عند L7. إحدى وعشرون خلية مملوءة من أصل مئة وأربعين.",
  "Start at P0 and keep adding the same position. At L6, adding P2 each time visits P0, P2, P4 and returns; adding P3 visits P0 and P3. Those closed rings are the sub-collections, and a line joins one to another when the smaller sits inside the larger.":
    "ابدأ من P0 وواصِل إضافة الموضع نفسه. عند L6، إضافة P2 في كل مرّة تمرّ بـP0 وP2 وP4 ثم تعود؛ وإضافة P3 تمرّ بـP0 وP3. تلك الحلقات المغلقة هي المجموعات الفرعية، ويصل خطٌّ بين واحدة وأخرى حين تقع الأصغر داخل الأكبر.",
  "Steps back to P0 for every position at L6 and at L7": "الخطوات حتى العودة إلى P0 لكل موضع عند L6 وعند L7",
  "THE OLDEST TEST FOR A GROUP TABLE": "أقدم اختبار لجدول زمرة",
  "THE RINGS INSIDE A RING": "حلقات داخل حلقة",
  "THE SAME NUMBER, REACHED TWO DIFFERENT WAYS": "العدد نفسه، بطريقتين مختلفتين",
  "Take the same three inputs in the same order and only change which pair is combined first. Under PLUS the answer would not move. Under STAR it does, and that single fact is what stops STAR from being a semigroup.":
    "خذ المُدخَلات الثلاثة نفسها بالترتيب نفسه، ولا تغيّر إلّا أيّ زوج يُدمج أوّلاً. تحت PLUS لا يتزحزح الجواب؛ وتحت STAR يتزحزح، وهذه الحقيقة وحدها تمنع STAR من أن تكون شبه زمرة.",
  "The Latin-square test applied to both laws at L5": "اختبار المربّع اللاتيني مطبَّقاً على القانونين عند L5",
  "The first method goes pair by pair and crosses off everything each orbit touches. The second asks each lawful relabelling how many pairs it leaves exactly where they were, and takes the average. They are unrelated procedures and they agree at every level.":
    "الطريقة الأولى تمضي زوجاً بعد زوج وتشطب كل ما يمسّه كل مدار. والثانية تسأل كل إعادة تسمية مشروعة: كم زوجاً تتركه في مكانه تماماً؟ ثم تأخذ المتوسّط. إجراءان لا صلة بينهما، ويتّفقان في كل مستوى.",
  "The four closed sub-collections of L6 and how they nest": "المجموعات الفرعية المغلقة الأربع لـL6 وكيف تتداخل",
  "The number on each tile is how many additions of that position return you to P0. It is the level divided by whatever factor the two share, so at a prime level every position but P0 takes the full lap.":
    "الرقم على كل مربّع هو كم مرّة تُضاف هذا الموضع حتى تعود إلى P0. وهو المستوى مقسوماً على العامل المشترك بينهما، ولذلك يقطع كل موضع عدا P0 دورة كاملة عند مستوى أوّليّ.",
  "The same three inputs bracketed two ways at L3": "المُدخَلات الثلاثة نفسها بترتيبَي أقواس عند L3",
  "This is the standard test and it is decisive in one direction only: failing it rules a table out of being a group table, while passing it does not by itself make one. The rest of the group properties are checked separately.":
    "هذا الاختبار المعياريّ، وهو حاسم في اتجاه واحد فقط: الإخفاق فيه يُخرج الجدول من كونه جدول زمرة، أمّا النجاح فلا يجعله كذلك بذاته. وبقيّة خصائص الزمرة تُفحص على حدة.",
  "Two five-by-five tables. In the PLUS table every row and every column contains each of P0 to P4 exactly once, and every margin carries a tick. In the STAR table the first row is P0 five times, so that row is marked 1, and four of the five columns are marked 4.":
    "جدولان خمسة في خمسة. في جدول PLUS يحوي كل صفّ وكل عمود كلّاً من P0 إلى P4 مرّة واحدة بالضبط، وعلى الهوامش علامات صحّ في كل موضع. أمّا في جدول STAR فالصفّ الأول هو P0 خمس مرّات، فيُعلَّم ذلك الصفّ بـ1، وتُعلَّم أربعة أعمدة من خمسة بـ4.",
  "Two rows of tiles. At L6 the counts read one, six, three, two, three, six. At L7 they read one followed by six sevens. The composite level splits into several different answers; the prime level does not.":
    "صفّان من المربّعات. عند L6 تُقرأ الأعداد: واحد، ستّة، ثلاثة، اثنان، ثلاثة، ستّة. وعند L7: واحد يتبعه ستّة أعداد قيمتها سبعة. المستوى المؤلَّف ينقسم إلى أجوبة مختلفة، والمستوى الأوّليّ لا.",
  "Two rows. The upper row combines P1 with P0 first, giving P1, and then combines that with P1 to reach P2. The lower row combines P0 with P1 first, giving P0, and then combines P1 with that to reach P1. The two rows end on different positions.":
    "صفّان. يدمج الصفّ العلوي P1 مع P0 أوّلاً فينتج P1، ثم يدمج ذلك مع P1 فيبلغ P2. ويدمج الصفّ السفلي P0 مع P1 أوّلاً فينتج P0، ثم يدمج P1 مع ذلك فيبلغ P1. وينتهي الصفّان عند موضعين مختلفين.",
  "WHERE THE TWO LAWS ACTUALLY DISAGREE": "أين يفترق القانونان فعلاً",
  "at L6, adding P2 three times returns to P0 through P2 and P4":
    "عند L6، إضافة P2 ثلاث مرّات تعيدك إلى P0 مروراً بـP2 وP4",
  "at a prime level nothing shares a factor, so every position takes the full lap":
    "عند مستوى أوّليّ لا يشترك شيء في عامل، فيقطع كل موضع دورة كاملة",
  "comes home early, on a shorter ring": "يعود مبكّراً، على حلقة أقصر",
  "counted by averaging what each relabelling leaves fixed": "معدود بمتوسّط ما تتركه كل إعادة تسمية في مكانه",
  "counted by walking every orbit": "معدود بالمرور على كل مدار",
  "disagreeing pairs at level n, all of them in the first row":
    "الأزواج المختلِفة عند المستوى n، وكلّها في الصفّ الأول",
  "here the left input is P0, so the clause fires and the right input is discarded":
    "هنا المُدخَل الأيسر هو P0، فتنطلق الفقرة ويُطرح المُدخَل الأيمن",
  "ordered pairs across the tower on which the laws disagree":
    "الأزواج المرتَّبة في البرج كلّه التي يختلف عليها القانونان",
  rings: "حلقات",
  "steps back to P0 for the position k at level n": "الخطوات حتى العودة إلى P0 للموضع k عند المستوى n",
  "takes the full lap of the level": "يقطع دورة المستوى كاملة",
  "the average is the orbit count, and walking the orbits at L6 gives the same number":
    "المتوسّط هو عدد المدارات، والمرور على مدارات L6 يعطي العدد نفسه",
  "the left input is not P0, so the reset clause does not fire and the two are added":
    "المُدخَل الأيسر ليس P0، فلا تنطلق فقرة التصفير ويُجمع الاثنان",
  "the one cell of the reset row where the two laws still agree":
    "الخلية الوحيدة في صفّ التصفير التي يتّفق عليها القانونان",
  "the only other lawful relabelling at L6 leaves just two positions where they were":
    "إعادة التسمية المشروعة الأخرى الوحيدة عند L6 لا تُبقي في مكانه سوى موضعين",
  "the relabelling that changes nothing leaves every pair fixed":
    "إعادة التسمية التي لا تغيّر شيئاً تترك كل زوج في مكانه",
  "the same three inputs, two bracketings, two positions": "المُدخَلات الثلاثة نفسها، ترتيبا أقواس، وموضعان",
  "the two laws agree": "يتّفق القانونان",
  "the two laws return different positions": "يعيد القانونان موضعين مختلفين",
};
