import type { TranslationDictionary } from "../translations";

export const automorphismsRu: TranslationDictionary = {
  "560 coordinates, 224 of them genuinely different.": "560 координат, и по-настоящему разных среди них 224.",
  "A check at one coordinate is a check at every coordinate in its orbit":
    "Проверка в одной координате — это проверка в каждой координате её орбиты",
  "A renaming fixes a pair exactly when it fixes both of its poles, so the count of fixed pairs is the square of the count of fixed poles. That is the only step of the script that is not a lookup.":
    "Переобозначение оставляет пару на месте ровно тогда, когда оставляет на месте оба её полюса, поэтому число неподвижных пар — это квадрат числа неподвижных полюсов. Это единственный шаг скрипта, который не является обращением к таблице.",
  "Add the fixed-pair counts across every renaming.": "Сложите счёт неподвижных пар по всем переобозначениям.",
  "Add the per-level orbit counts in the table and multiply by the four typed families. The result is the number of coordinates that have to be settled separately, and it does not move.":
    "Сложите поуровневые счёты орбит в таблице и умножьте на четыре типизированных семейства. Результат — число координат, которые надо решать по отдельности, и оно не сдвигается.",
  "All seven": "Все семь",
  "An automorphism preserves shape and says nothing about meaning. Two poles in the same orbit are indistinguishable to the laws; that they refer to the same thing in the world does not follow, and this site never argues that it does.":
    "Автоморфизм сохраняет форму и ничего не говорит о смысле. Два полюса в одной орбите неразличимы для законов; из этого не следует, что они указывают на одно и то же в мире, и этот сайт нигде такого не утверждает.",
  "And again for the second law.": "И то же самое для второго закона.",
  "And it is the number the enumeration reached by walking the orbits, which shares none of this working.":
    "И это то же число, к которому перечисление пришло обходом орбит, — а оно не делит с этим ни одной выкладки.",
  "Apply every renaming to one pair and see where it lands.":
    "Примените к одной паре каждое переобозначение и посмотрите, куда она попадает.",
  "At level 5 every non-zero pole is in one orbit. Any claim that P1 and P3 behave differently under the laws is therefore false, and can be refuted by exhibiting the renaming that swaps them.":
    "На уровне 5 все ненулевые полюсы лежат в одной орбите. Значит утверждение, что P1 и P3 ведут себя под законами по-разному, ложно — и опровергается предъявлением переобозначения, которое их меняет местами.",
  "Automorphisms at each level": "Автоморфизмы на каждом уровне",
  "Average what each renaming leaves untouched, and the orbit count falls out.":
    "Усредните то, что каждое переобозначение оставляет нетронутым, — и число орбит выпадет само.",
  "Checking 224 things settles all 560.": "Проверка 224 вещей решает все 560.",
  "Combine first, then rename.": "Сначала соединить, потом переобозначить.",
  "Combine then rename, or rename then combine. If it makes no difference, it is an automorphism.":
    "Сначала соединить, потом переобозначить — или сначала переобозначить, потом соединить. Если разницы нет, это автоморфизм.",
  "Coordinates against orbits": "Координаты против орбит",
  "Counting orbits by walking them is straightforward and easy to get subtly wrong. Burnside's lemma counts the same thing without walking anything: for each renaming, count the pairs it leaves exactly where they are, then take the average over all renamings. The two methods share no code and no reasoning, so agreement between them is evidence rather than a restatement.":
    "Считать орбиты обходом просто — и легко ошибиться незаметно. Лемма Бёрнсайда считает то же самое, ничего не обходя: для каждого переобозначения посчитайте пары, которые оно оставляет ровно на месте, и возьмите среднее по всем переобозначениям. Два метода не делят ни кода, ни рассуждения, поэтому их согласие — свидетельство, а не пересказ.",
  "Divide by how many renamings there are. That average is Burnside's lemma.":
    "Разделите на число переобозначений. Это среднее и есть лемма Бёрнсайда.",
  "Divisible, so any multiplier sharing a factor with the level sends two poles to one name and is ruled out.":
    "Составное, поэтому любой множитель, имеющий общий делитель с уровнем, отправляет два полюса в одно имя и отбрасывается.",
  "Every cell of both tables lands back where it was.": "Каждая ячейка обеих таблиц оказывается там, где была.",
  "Every count in the table is computed on each build, twice: once by walking the pairs and collecting orbits, and once by Burnside's lemma. Two channels that disagree would fail the build rather than reach this page.":
    "Каждый счёт в таблице вычисляется при каждой сборке дважды: один раз обходом пар со сбором орбит, другой — по лемме Бёрнсайда. Два канала, которые разошлись бы, обрушили бы сборку, а не дошли бы до этой страницы.",
  "Every renaming these tables admit, and there are no others to find.":
    "Все переобозначения, какие эти таблицы допускают, — других не найдётся.",
  "Exactly the multipliers that share no factor with the level.":
    "Ровно те множители, у которых нет общего делителя с уровнем.",
  "Five is prime, so doubling hits every pole once and the renaming is a genuine reshuffle. Redraw both tables under it and every cell is back where it started: all fifty checks pass, and this multiplier is an automorphism.":
    "Пять — простое, поэтому удвоение попадает в каждый полюс ровно один раз, и переобозначение оказывается настоящей перетасовкой. Перерисуйте обе таблицы под ним — и каждая ячейка вернётся туда, где была: все пятьдесят проверок проходят, и этот множитель — автоморфизм.",
  "Group the ordered pairs so that two pairs sit together whenever a renaming carries one to the other. Nothing inside a group can be told apart by the laws, so a property established at one member holds at every member without being checked there. That is the whole practical content of symmetry here: the number of things that have to be checked separately, and it is smaller than the number of things.":
    "Сгруппируйте упорядоченные пары так, чтобы две пары попадали в одну группу всякий раз, когда переобозначение переводит одну в другую. Внутри группы законы ничего не различают, поэтому свойство, установленное на одном члене, держится на каждом, не будучи там проверенным. В этом и состоит всё практическое содержание симметрии здесь: сколько вещей надо проверять по отдельности — и это число меньше числа вещей.",
  "How many": "Сколько",
  "If a renaming carries one coordinate to another and leaves both laws exactly as they were, then any statement about the first that is expressed in terms of the laws transfers to the second unchanged. Nothing is being assumed here: the transfer is the renaming, applied to the argument instead of to the table.":
    "Если переобозначение переносит одну координату в другую и оставляет оба закона ровно такими, какими они были, то любое утверждение о первой, выраженное через законы, переносится на вторую без изменений. Здесь ничего не предполагается: перенос — это и есть переобозначение, применённое к доводу вместо таблицы.",
  "It is a second channel on the counts, not a restatement of them": "Это второй канал на счёты, а не их пересказ",
  "It puts a floor under how much of the catalogue can be redundant":
    "Она кладёт нижнюю границу под то, какая часть каталога может быть избыточной",
  "It tells you which distinctions the algebra cannot be making":
    "Она говорит, каких различений алгебра проводить не может",
  "Left to check": "Осталось проверить",
  "Level {level}, one row per renaming": "Уровень {level}, по строке на каждое переобозначение",
  "Multipliers that survive the test": "Множители, прошедшие проверку",
  "None of this makes the engine right about anything. It makes a specific class of mistake impossible to hide: a claim that holds at one coordinate and fails at another in the same orbit is not a subtle empirical finding, it is an arithmetic error, and it can be caught by a script rather than by an argument.":
    "Ничто из этого не делает движок правым хоть в чём-то. Оно делает определённый класс ошибок невозможным спрятать: утверждение, которое держится в одной координате и падает в другой из той же орбиты, — не тонкая эмпирическая находка, а арифметическая ошибка, и её ловит скрипт, а не спор.",
  "ONE ORBIT, WALKED": "ОДНА ОРБИТА, ПРОЙДЕННАЯ ЦЕЛИКОМ",
  "One pole, so the only renaming is the one that does nothing.":
    "Один полюс, поэтому единственное переобозначение — то, которое ничего не делает.",
  "Orbit size times stabiliser size is the number of renamings — a check that holds at every pair, not only this one.":
    "Размер орбиты, умноженный на размер стабилизатора, равен числу переобозначений — и эта проверка держится на каждой паре, а не только на этой.",
  "Orbits, by Burnside": "Орбит, по Бёрнсайду",
  "Orbits, by enumeration": "Орбит, перечислением",
  "Pairs it leaves alone": "Пар оставляет на месте",
  "Poles it leaves alone": "Полюсов оставляет на месте",
  "Prime, so no multiplier can collapse two poles together and every one survives.":
    "Простое, поэтому ни один множитель не может схлопнуть два полюса вместе, и выживают все.",
  "RENAMINGS THAT CHANGE NOTHING": "ПЕРЕОБОЗНАЧЕНИЯ, КОТОРЫЕ НИЧЕГО НЕ МЕНЯЮТ",
  "Rename every pole at once, redraw the table, and look at what moved. Most renamings wreck the table; a few leave it exactly as it was, and those few are the automorphisms. This is not an aesthetic observation. Two coordinates related by an automorphism are the same coordinate as far as the laws can tell, so a property checked at one of them holds at the other by construction rather than by luck — and the whole catalogue collapses from 560 addresses to 224 that have to be checked separately. Everything below is a script: relabel, redraw, compare.":
    "Переобозначьте все полюсы разом, перерисуйте таблицу и посмотрите, что сдвинулось. Большинство переобозначений таблицу ломает; немногие оставляют её ровно такой, какой она была, — и эти немногие и есть автоморфизмы. Это не эстетическое наблюдение. Две координаты, связанные автоморфизмом, суть одна и та же координата с точки зрения законов, поэтому свойство, проверенное в одной, держится в другой по построению, а не по везению, — и весь каталог сжимается с 560 адресов до 224, которые надо проверять по отдельности. Всё, что ниже, — это скрипт: переобозначить, перерисовать, сравнить.",
  "Rename first, then combine. The two routes disagree, and the pair is named.":
    "Сначала переобозначить, потом соединить. Два пути расходятся, и пара названа.",
  Renaming: "Переобозначение",
  "Run the test at every level for every multiplier and a pattern comes out that nobody chose: the survivors are the numbers coprime to the level. Prime levels keep almost everything, even levels keep almost nothing, and level 6 — the richest level for structure — is one of the poorest for symmetry, because it is divisible twice over.":
    "Прогоните проверку на каждом уровне для каждого множителя — и выйдет закономерность, которую никто не выбирал: выживают числа, взаимно простые с уровнем. Простые уровни сохраняют почти всё, чётные — почти ничего, а уровень 6, самый богатый по структуре, — один из беднейших по симметрии, потому что делится дважды.",
  "Shape, not meaning:": "Форма, а не смысл:",
  "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this is not a renaming at all — and the test finds the first pair it breaks on rather than reporting a near miss.":
    "Шесть — чётное, поэтому удвоение отправляет P0 и P3 в одно и то же место. Два полюса не могут делить одно имя, значит это вовсе не переобозначение, — и проверка находит первую пару, на которой оно ломается, а не сообщает о «почти получилось».",
  "THE SAME NUMBER, COUNTED A SECOND WAY": "ТО ЖЕ ЧИСЛО, ПОСЧИТАННОЕ ВТОРЫМ СПОСОБОМ",
  "THE TEST, IN ONE LINE": "ПРОВЕРКА В ОДНУ СТРОКУ",
  "Take a renaming φ that sends each pole somewhere. It is an automorphism when φ(a ⊕ b) = φ(a) ⊕ φ(b) holds for every pair, and the same for ★. That is n² checks per law, all of them table lookups, and a level small enough to print is a level small enough to check exhaustively. The two lanes below run exactly that test — one on a renaming that passes and one on a map that fails at its first collision.":
    "Возьмите переобозначение φ, которое отправляет каждый полюс куда-то. Оно является автоморфизмом, когда φ(a ⊕ b) = φ(a) ⊕ φ(b) выполняется для каждой пары, и то же самое для ★. Это n² проверок на закон, и все они — обращения к таблице; уровень, который умещается на печать, — это уровень, который можно проверить исчерпывающе. Две дорожки ниже исполняют ровно эту проверку: одна на переобозначении, которое проходит, другая на отображении, которое ломается на первом же совпадении.",
  "Take a single coordinate and hit it with each automorphism in turn. The distinct results are its orbit — the set of coordinates that are the same coordinate as far as the laws are concerned. The renamings that leave it exactly where it was are its stabiliser, and the size of the orbit times the size of the stabiliser is the number of renamings, every time.":
    "Возьмите одну координату и приложите к ней по очереди каждый автоморфизм. Различные результаты и составляют её орбиту — множество координат, которые для законов суть одна и та же координата. Переобозначения, оставляющие её ровно на месте, — это её стабилизатор, и размер орбиты, умноженный на размер стабилизатора, всякий раз равен числу переобозначений.",
  "The Burnside script below prints its own working: the fixed poles of each renaming, the squares, the sum, and the average. Compare its result to the enumerated column in the table above it.":
    "Скрипт Бёрнсайда ниже печатает собственные выкладки: неподвижные полюсы каждого переобозначения, квадраты, сумму и среднее. Сравните его результат со столбцом перечисления в таблице выше.",
  "The distinct places the pair can be carried to. All of them are the same coordinate to the laws.":
    "Различные места, куда пару можно перенести. Для законов все они — одна и та же координата.",
  "The orbit counts are computed twice on every build — once by enumeration and once by Burnside's lemma — and the two share no reasoning. A count that survives both has been checked, not asserted. This is the same discipline the concept cards use when they demand a table channel and a formula channel that agree.":
    "Счёты орбит вычисляются при каждой сборке дважды — перечислением и по лемме Бёрнсайда, — и эти два способа не делят ни одного рассуждения. Счёт, переживший оба, проверен, а не заявлен. Это та же дисциплина, что и в карточках понятий, где требуются согласующиеся табличный и формульный каналы.",
  "The renamings that leave it exactly where it was.": "Переобозначения, оставляющие её ровно там, где она была.",
  "The test, for every pair of poles.": "Проверка — для каждой пары полюсов.",
  "The two facts are the same fact from opposite ends. A level with many divisors has many ways for a multiplier to collapse poles together, so it has few automorphisms; a prime level has none, so it has as many as it can.":
    "Эти два факта — один и тот же факт с двух сторон. У уровня со многими делителями много способов, которыми множитель может схлопнуть полюсы вместе, поэтому автоморфизмов у него мало; у простого уровня делителей нет, поэтому их у него столько, сколько может быть.",
  "This is what the compression above is made of, one coordinate at a time. Establish something at the pair below and it holds at every other member of its orbit, because a renaming that carried the pair there also carried the argument.":
    "Именно из этого и сложено сжатие выше — по одной координате за раз. Установите что-то на паре ниже, и это будет держаться на каждом другом члене её орбиты, потому что переобозначение, перенёсшее туда пару, перенесло туда и довод.",
  "Two coordinates in every five have to be settled separately, and no fewer. That is a real number rather than a hope: the compression is exactly the orbit count, and there is no further renaming to find, because the survivors of the test are already all of them. Symmetry buys a factor, not an escape.":
    "Две координаты из каждых пяти приходится решать по отдельности — и меньше не выйдет. Это настоящее число, а не надежда: сжатие в точности равно числу орбит, и другого переобозначения не найти, потому что прошедшие проверку — это уже все. Симметрия покупает множитель, а не побег.",
  "Two poles are sent to one name, so this is not a bijection of the carrier.":
    "Два полюса отправлены в одно имя, значит это не биекция носителя.",
  "Two poles in the same orbit are indistinguishable to the laws. So an argument that treats them differently is not using the algebra — it is smuggling in something from outside it. Symmetry is how that smuggling becomes visible, because it names exactly the distinctions that have no formal content.":
    "Два полюса в одной орбите неразличимы для законов. Значит довод, обращающийся с ними по-разному, использует не алгебру — он протаскивает что-то извне неё. Симметрия — это то, что делает такое протаскивание видимым, потому что она называет ровно те различения, у которых нет формального содержания.",
  "Two poles, and P0 is pinned, so nothing is left to move.":
    "Два полюса, а P0 закреплён, поэтому двигать больше нечего.",
  "WHICH RENAMINGS SURVIVE": "КАКИЕ ПЕРЕОБОЗНАЧЕНИЯ ВЫЖИВАЮТ",
  "WHY THIS IS WORTH ANYTHING": "ПОЧЕМУ ЭТО ВООБЩЕ ЧЕГО-ТО СТОИТ",
  "Walk the orbit of one pair below, then take any property the tables settle — which cell it lands on, whether it meets the absorbing pole — and confirm it holds at every member.":
    "Пройдите ниже орбиту одной пары, затем возьмите любое свойство, которое решают таблицы, — на какую ячейку она попадает, встречает ли поглощающий полюс, — и убедитесь, что оно держится на каждом члене.",
  "Why that many": "Почему именно столько",
  "an automorphism": "автоморфизм",
  "not even a renaming": "даже не переобозначение",
  "× four typed families": "× четыре типизированных семейства",
  "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this fails the first condition outright. It then fails the second as well, and the STAR table above shows exactly where: the marked cells are the pairs the two routes disagree on. PLUS is not drawn here because multiplying by a constant preserves PLUS whatever the constant is — a PLUS table would look untouched and prove nothing.":
    "Шесть — чётное, поэтому удвоение отправляет P0 и P3 в одно и то же место. Два полюса не могут делить одно имя, значит первое условие нарушено сразу. Второе тоже нарушается, и таблица STAR выше показывает, где именно: отмеченные ячейки — это пары, на которых два пути расходятся. PLUS здесь не нарисован, потому что умножение на константу сохраняет PLUS при любой константе — таблица PLUS выглядела бы нетронутой и ничего бы не доказала.",
  "Take a map φ that sends each pole somewhere. It is an automorphism when two things hold: it is a renaming, meaning no two poles are sent to one name, and it preserves both laws, meaning φ(a ⊕ b) = φ(a) ⊕ φ(b) for every pair and the same for ★. Both conditions are needed. The map that sends everything to P0 preserves both laws perfectly and is not a renaming of anything, which is why the first check below is for collisions and the second is the law. That is n² lookups per law, and a level small enough to print is a level small enough to check exhaustively.":
    "Возьмите отображение φ, которое отправляет каждый полюс куда-то. Оно является автоморфизмом, когда выполняются две вещи: это переобозначение, то есть никакие два полюса не отправлены в одно имя, и оно сохраняет оба закона, то есть φ(a ⊕ b) = φ(a) ⊕ φ(b) для каждой пары и то же самое для ★. Нужны оба условия. Отображение, отправляющее всё в P0, сохраняет оба закона безупречно и не переобозначает ничего, — поэтому первая проверка ниже ищет совпадения имён, а вторая проверяет закон. Это n² обращений к таблице на закон, и уровень, который умещается на печать, — это уровень, который можно проверить исчерпывающе.",
  "{operation} at level {level}, redrawn under the renaming":
    "{operation} на уровне {level}, перерисованный под переобозначением",
  "A catalogue, a route, and a count of questions actually asked.":
    "Каталог, маршрут и счёт реально заданных вопросов.",
  "EVERY ROW, ANSWERED OR REFUSED": "КАЖДАЯ СТРОКА — ОТВЕЧЕНА ИЛИ ОТКЛОНЕНА",
  "Every test row leaves a record, whichever way it went.":
    "Каждая тестовая строка оставляет запись — чем бы дело ни кончилось.",
  "Three public corpora, one receipt per row. A row is answered only where all three conditions of the admission law held; where one did not, the row is a boundary and the missing condition is named in its record. Every corpus file is pinned by hash to an upstream commit, so a reviewer reproduces the inputs rather than trusting a description of them.":
    "Три публичных корпуса, по одному протоколу на строку. Строка получает ответ только там, где выполнились все три условия закона допуска; где одно не выполнилось, строка становится границей, и недостающее условие названо в её записи. Каждый файл корпуса закреплён хешем за коммитом источника, поэтому рецензент воспроизводит входные данные, а не доверяет их описанию.",
};

export const automorphismsZh: TranslationDictionary = {
  "560 coordinates, 224 of them genuinely different.": "560 个坐标，其中真正不同的有 224 个。",
  "A check at one coordinate is a check at every coordinate in its orbit":
    "在一个坐标上的核对，就是在它轨道里每一个坐标上的核对",
  "A renaming fixes a pair exactly when it fixes both of its poles, so the count of fixed pairs is the square of the count of fixed poles. That is the only step of the script that is not a lookup.":
    "一个重新命名固定住一对，恰好就是它把这一对的两个极都固定住；所以被固定的对的个数，就是被固定的极的个数的平方。这是整个脚本里唯一不是查表的一步。",
  "Add the fixed-pair counts across every renaming.": "把所有重新命名的固定对个数加起来。",
  "Add the per-level orbit counts in the table and multiply by the four typed families. The result is the number of coordinates that have to be settled separately, and it does not move.":
    "把表里各层的轨道数加起来，再乘以四个类型化的族。得到的就是必须分别解决的坐标个数，而这个数不会动。",
  "All seven": "七层合计",
  "An automorphism preserves shape and says nothing about meaning. Two poles in the same orbit are indistinguishable to the laws; that they refer to the same thing in the world does not follow, and this site never argues that it does.":
    "自同构保住的是形状，对意义只字未提。同一条轨道里的两个极，在法则看来分辨不出；但由此并不能推出它们在世界上指的是同一件事，而本站也从不这样论证。",
  "And again for the second law.": "第二条法则再来一遍。",
  "And it is the number the enumeration reached by walking the orbits, which shares none of this working.":
    "而这正是枚举法靠走遍轨道得到的那个数，而枚举法与这里的演算毫无共享。",
  "Apply every renaming to one pair and see where it lands.": "把每一个重新命名都作用到同一对上，看看它落到哪儿。",
  "At level 5 every non-zero pole is in one orbit. Any claim that P1 and P3 behave differently under the laws is therefore false, and can be refuted by exhibiting the renaming that swaps them.":
    "在第 5 层，所有非零的极都在同一条轨道里。所以「P1 和 P3 在法则之下行为不同」这个说法是假的——只要举出那个把它们对调的重新命名，就把它驳倒了。",
  "Automorphisms at each level": "每一层上的自同构",
  "Average what each renaming leaves untouched, and the orbit count falls out.":
    "把每个重新命名原样留下的东西取个平均，轨道数就自己掉出来了。",
  "Checking 224 things settles all 560.": "核对 224 件事，就把全部 560 件都定下来了。",
  "Combine first, then rename.": "先合，再改名。",
  "Combine then rename, or rename then combine. If it makes no difference, it is an automorphism.":
    "先合再改名，还是先改名再合。如果没有区别，那就是一个自同构。",
  "Coordinates against orbits": "坐标对轨道",
  "Counting orbits by walking them is straightforward and easy to get subtly wrong. Burnside's lemma counts the same thing without walking anything: for each renaming, count the pairs it leaves exactly where they are, then take the average over all renamings. The two methods share no code and no reasoning, so agreement between them is evidence rather than a restatement.":
    "靠走一遍来数轨道，做法直白，也很容易在不易察觉处出错。伯恩赛德引理数的是同一样东西，却什么也不用走：对每一个重新命名，数出它原封不动留下的对，然后对所有重新命名取平均。两种方法不共享代码也不共享推理，所以它们一致是证据，不是复述。",
  "Divide by how many renamings there are. That average is Burnside's lemma.":
    "除以重新命名的个数。这个平均值就是伯恩赛德引理。",
  "Divisible, so any multiplier sharing a factor with the level sends two poles to one name and is ruled out.":
    "可整除，所以任何与层有公因子的乘数都会把两个极送到同一个名字上，因而被排除。",
  "Every cell of both tables lands back where it was.": "两张表的每一个格子都回到了原处。",
  "Every count in the table is computed on each build, twice: once by walking the pairs and collecting orbits, and once by Burnside's lemma. Two channels that disagree would fail the build rather than reach this page.":
    "表里的每一个计数在每次构建时都算两遍：一遍是走遍所有对、把轨道收集起来，另一遍用伯恩赛德引理。两条通道若是对不上，会让构建失败，而不是抵达这一页。",
  "Every renaming these tables admit, and there are no others to find.":
    "这些表所容许的全部重新命名；再也找不出别的了。",
  "Exactly the multipliers that share no factor with the level.": "恰好是那些与层没有公因子的乘数。",
  "Five is prime, so doubling hits every pole once and the renaming is a genuine reshuffle. Redraw both tables under it and every cell is back where it started: all fifty checks pass, and this multiplier is an automorphism.":
    "五是素数，所以翻倍恰好命中每个极一次，这个重新命名是一次真正的洗牌。在它之下把两张表都重画一遍，每个格子都回到原处：五十次核对全过，这个乘数是一个自同构。",
  "Group the ordered pairs so that two pairs sit together whenever a renaming carries one to the other. Nothing inside a group can be told apart by the laws, so a property established at one member holds at every member without being checked there. That is the whole practical content of symmetry here: the number of things that have to be checked separately, and it is smaller than the number of things.":
    "把有序对分组：只要有一个重新命名能把一对送到另一对，这两对就归到一起。组内的东西，法则分辨不出；所以在某一个成员上确立的性质，在每一个成员上都成立，而无需在那里核对。这就是对称性在这里的全部实用含义：需要分别核对的东西有多少——而这个数比东西的个数小。",
  "How many": "有几个",
  "If a renaming carries one coordinate to another and leaves both laws exactly as they were, then any statement about the first that is expressed in terms of the laws transfers to the second unchanged. Nothing is being assumed here: the transfer is the renaming, applied to the argument instead of to the table.":
    "如果一个重新命名把一个坐标搬到另一个坐标，同时让两条法则原封不动，那么关于前者的、用法则表述的任何陈述，都会原样转移到后者。这里没有任何假设：这个转移，就是把重新命名施加到论证上，而不是施加到表上。",
  "It is a second channel on the counts, not a restatement of them": "它是对这些计数的第二条通道，不是把它们复述一遍",
  "It puts a floor under how much of the catalogue can be redundant": "它给「目录里能有多少是冗余的」设了一个下限",
  "It tells you which distinctions the algebra cannot be making": "它告诉你：哪些区分是这套代数根本作不出来的",
  "Left to check": "还需核对",
  "Level {level}, one row per renaming": "第 {level} 层，每个重新命名一行",
  "Multipliers that survive the test": "通过检验的乘数",
  "None of this makes the engine right about anything. It makes a specific class of mistake impossible to hide: a claim that holds at one coordinate and fails at another in the same orbit is not a subtle empirical finding, it is an arithmetic error, and it can be caught by a script rather than by an argument.":
    "这一切都不会让引擎在任何事情上变得正确。它做到的是：让某一类错误藏不住。一个在某个坐标上成立、在同一轨道的另一个坐标上却不成立的主张，不是什么微妙的经验发现，而是一处算术错误；抓住它的是脚本，不是辩论。",
  "ONE ORBIT, WALKED": "把一条轨道走一遍",
  "One pole, so the only renaming is the one that does nothing.":
    "只有一个极，所以唯一的重新命名就是什么也不做的那个。",
  "Orbit size times stabiliser size is the number of renamings — a check that holds at every pair, not only this one.":
    "轨道的大小乘以稳定子的大小，等于重新命名的总数——而这项核对在每一对上都成立，不只是这一对。",
  "Orbits, by Burnside": "轨道，用伯恩赛德",
  "Orbits, by enumeration": "轨道，用枚举法",
  "Pairs it leaves alone": "它没动的对",
  "Poles it leaves alone": "它没动的极",
  "Prime, so no multiplier can collapse two poles together and every one survives.":
    "素数，所以没有哪个乘数能把两个极并到一起，于是全都活了下来。",
  "RENAMINGS THAT CHANGE NOTHING": "什么也不改变的重新命名",
  "Rename every pole at once, redraw the table, and look at what moved. Most renamings wreck the table; a few leave it exactly as it was, and those few are the automorphisms. This is not an aesthetic observation. Two coordinates related by an automorphism are the same coordinate as far as the laws can tell, so a property checked at one of them holds at the other by construction rather than by luck — and the whole catalogue collapses from 560 addresses to 224 that have to be checked separately. Everything below is a script: relabel, redraw, compare.":
    "把所有极一次性重新命名，把表重画一遍，看看什么动了。多数重新命名会把表毁掉；少数几个让它原封不动，而这少数几个就是自同构。这不是审美上的感想。被自同构联系起来的两个坐标，在法则看来就是同一个坐标；所以在其中一个上核对过的性质，在另一个上成立是构造使然，不是运气——而整个目录从 560 个地址压到 224 个需要分别核对的。下面的一切都是脚本：重新命名、重画、比对。",
  "Rename first, then combine. The two routes disagree, and the pair is named.":
    "先改名，再合。两条路径不一致，而那一对被点了名。",
  Renaming: "重新命名",
  "Run the test at every level for every multiplier and a pattern comes out that nobody chose: the survivors are the numbers coprime to the level. Prime levels keep almost everything, even levels keep almost nothing, and level 6 — the richest level for structure — is one of the poorest for symmetry, because it is divisible twice over.":
    "在每一层上对每一个乘数都跑一遍这项检验，就会冒出一个谁也没有挑选过的规律：活下来的是与层互素的那些数。素数层几乎全都留下，偶数层几乎什么都不留；而结构最丰富的第 6 层，在对称性上却是最贫瘠的之一，因为它被整除了两次。",
  "Shape, not meaning:": "形状，不是意义：",
  "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this is not a renaming at all — and the test finds the first pair it breaks on rather than reporting a near miss.":
    "六是偶数，所以翻倍把 P0 和 P3 送到同一个地方。两个极不能共用一个名字，所以这根本不是一次重新命名——而这项检验会找出它第一次失败的那一对，而不是报一句「差一点」。",
  "THE SAME NUMBER, COUNTED A SECOND WAY": "同一个数，用第二种方式数一遍",
  "THE TEST, IN ONE LINE": "一行就能写完的检验",
  "Take a renaming φ that sends each pole somewhere. It is an automorphism when φ(a ⊕ b) = φ(a) ⊕ φ(b) holds for every pair, and the same for ★. That is n² checks per law, all of them table lookups, and a level small enough to print is a level small enough to check exhaustively. The two lanes below run exactly that test — one on a renaming that passes and one on a map that fails at its first collision.":
    "取一个把每个极送到某处的重新命名 φ。当 φ(a ⊕ b) = φ(a) ⊕ φ(b) 对每一对都成立、且 ★ 也一样时，它就是一个自同构。每条法则 n² 次核对，全都是查表；一个印得下的层，就是一个可以被穷尽核对的层。下面两条泳道跑的正是这项检验——一条用的是通过的重新命名，一条用的是在第一次撞名时就失败的映射。",
  "Take a single coordinate and hit it with each automorphism in turn. The distinct results are its orbit — the set of coordinates that are the same coordinate as far as the laws are concerned. The renamings that leave it exactly where it was are its stabiliser, and the size of the orbit times the size of the stabiliser is the number of renamings, every time.":
    "取单独一个坐标，用每一个自同构轮流作用到它上面。得到的那些不同结果就是它的轨道——在法则看来是同一个坐标的那一批坐标。把它原封不动留下的那些重新命名，是它的稳定子；而轨道的大小乘以稳定子的大小，每一次都等于重新命名的总数。",
  "The Burnside script below prints its own working: the fixed poles of each renaming, the squares, the sum, and the average. Compare its result to the enumerated column in the table above it.":
    "下面的伯恩赛德脚本把自己的演算过程都打了出来：每个重新命名的固定极、平方、总和，以及平均值。把它的结果跟上面表里的枚举那一列比一比。",
  "The distinct places the pair can be carried to. All of them are the same coordinate to the laws.":
    "这一对能被搬到的那些不同位置。在法则看来，它们全是同一个坐标。",
  "The orbit counts are computed twice on every build — once by enumeration and once by Burnside's lemma — and the two share no reasoning. A count that survives both has been checked, not asserted. This is the same discipline the concept cards use when they demand a table channel and a formula channel that agree.":
    "轨道计数在每次构建时都算两遍——一遍枚举，一遍伯恩赛德——而这两种方式不共享任何推理。挺过两遍的计数是被核对过的，不是被断言的。这跟概念卡片要求表通道与公式通道必须对上，是同一套纪律。",
  "The renamings that leave it exactly where it was.": "把它原封不动留在原处的那些重新命名。",
  "The test, for every pair of poles.": "对每一对极做的检验。",
  "The two facts are the same fact from opposite ends. A level with many divisors has many ways for a multiplier to collapse poles together, so it has few automorphisms; a prime level has none, so it has as many as it can.":
    "这两个事实是同一个事实的两头。约数多的层，乘数把极并到一起的方式就多，所以自同构少；素数层没有约数，所以自同构多到不能再多。",
  "This is what the compression above is made of, one coordinate at a time. Establish something at the pair below and it holds at every other member of its orbit, because a renaming that carried the pair there also carried the argument.":
    "上面那份压缩，就是由这个一个坐标一个坐标地攒起来的。在下面这一对上确立了什么，它在这一对轨道里的每一个其他成员上都成立；因为那个把这一对搬过去的重新命名，也把论证搬了过去。",
  "Two coordinates in every five have to be settled separately, and no fewer. That is a real number rather than a hope: the compression is exactly the orbit count, and there is no further renaming to find, because the survivors of the test are already all of them. Symmetry buys a factor, not an escape.":
    "每五个坐标里有两个必须分别解决，一个也少不了。这是一个真实的数，不是一份指望：压缩恰好等于轨道数，而再也找不出别的重新命名，因为通过检验的那些已经是全部。对称性买来的是一个倍数，不是一条出路。",
  "Two poles are sent to one name, so this is not a bijection of the carrier.":
    "两个极被送到同一个名字上，所以这不是载体上的双射。",
  "Two poles in the same orbit are indistinguishable to the laws. So an argument that treats them differently is not using the algebra — it is smuggling in something from outside it. Symmetry is how that smuggling becomes visible, because it names exactly the distinctions that have no formal content.":
    "同一条轨道里的两个极，在法则看来分辨不出。所以一个把它们区别对待的论证，用的不是这套代数——它是在从外面夹带东西进来。对称性正是让这种夹带显形的东西，因为它恰好点出了那些没有形式内容的区分。",
  "Two poles, and P0 is pinned, so nothing is left to move.": "两个极，而 P0 是钉死的，所以再没有什么可动的了。",
  "WHICH RENAMINGS SURVIVE": "哪些重新命名活了下来",
  "WHY THIS IS WORTH ANYTHING": "这到底值什么",
  "Walk the orbit of one pair below, then take any property the tables settle — which cell it lands on, whether it meets the absorbing pole — and confirm it holds at every member.":
    "在下面把某一对的轨道走一遍，然后取任何一条由这些表判定的性质——它落在哪个格子上、有没有碰上吸收极——并确认它在每一个成员上都成立。",
  "Why that many": "为什么是这么多",
  "an automorphism": "一个自同构",
  "not even a renaming": "连重新命名都算不上",
  "× four typed families": "× 四个类型化的族",
  "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this fails the first condition outright. It then fails the second as well, and the STAR table above shows exactly where: the marked cells are the pairs the two routes disagree on. PLUS is not drawn here because multiplying by a constant preserves PLUS whatever the constant is — a PLUS table would look untouched and prove nothing.":
    "六是偶数，所以翻倍把 P0 和 P3 送到同一个地方。两个极不能共用一个名字，所以第一个条件当场就不成立。第二个条件也不成立，而上面那张 STAR 表恰好指出了在哪儿：标出来的格子就是两条路径不一致的那些对。这里不画 PLUS，是因为乘以一个常数无论常数是几都保住 PLUS——一张 PLUS 表会看起来毫发无损，什么也证明不了。",
  "Take a map φ that sends each pole somewhere. It is an automorphism when two things hold: it is a renaming, meaning no two poles are sent to one name, and it preserves both laws, meaning φ(a ⊕ b) = φ(a) ⊕ φ(b) for every pair and the same for ★. Both conditions are needed. The map that sends everything to P0 preserves both laws perfectly and is not a renaming of anything, which is why the first check below is for collisions and the second is the law. That is n² lookups per law, and a level small enough to print is a level small enough to check exhaustively.":
    "取一个把每个极送到某处的映射 φ。它是自同构，当且仅当两件事同时成立：它是一次重新命名，也就是没有两个极被送到同一个名字上；并且它保住两条法则，也就是对每一对都有 φ(a ⊕ b) = φ(a) ⊕ φ(b)，★ 也一样。两个条件缺一不可。那个把一切都送到 P0 的映射，把两条法则保得完美无缺，却什么也没重新命名——所以下面第一项检查是找撞名，第二项才是查法则。每条法则 n² 次查表；而一个印得下的层，就是一个可以被穷尽核对的层。",
  "{operation} at level {level}, redrawn under the renaming": "第 {level} 层的 {operation}，在这个重新命名之下重画",
  "A catalogue, a route, and a count of questions actually asked.": "一份目录、一条路线，以及真正被问过的问题的计数。",
  "EVERY ROW, ANSWERED OR REFUSED": "每一行，答了还是拒答",
  "Every test row leaves a record, whichever way it went.": "每一条测试行都留下一份记录，无论结果朝哪边去。",
  "Three public corpora, one receipt per row. A row is answered only where all three conditions of the admission law held; where one did not, the row is a boundary and the missing condition is named in its record. Every corpus file is pinned by hash to an upstream commit, so a reviewer reproduces the inputs rather than trusting a description of them.":
    "三个公开语料，每一行一份回执。只有在准入法则的三个条件都成立的地方，这一行才算答了；其中有一个不成立，这一行就是一条边界，而缺的那个条件会被写进它的记录里。每一个语料文件都用哈希钉在上游的某个提交上，所以审阅者复现的是输入本身，而不是去相信一段对输入的描述。",
};

export const automorphismsAr: TranslationDictionary = {
  "560 coordinates, 224 of them genuinely different.": "560 إحداثيًّا، منها 224 مختلفةٌ حقًّا.",
  "A check at one coordinate is a check at every coordinate in its orbit":
    "فحصٌ عند إحداثيٍّ فحصٌ عند كلِّ إحداثيٍّ في مداره",
  "A renaming fixes a pair exactly when it fixes both of its poles, so the count of fixed pairs is the square of the count of fixed poles. That is the only step of the script that is not a lookup.":
    "تُثبِّت إعادةُ التسمية زوجًا تمامًا حين تُثبِّت قطبَيه كليهما، فعددُ الأزواج الثابتة مربَّعُ عدد الأقطاب الثابتة. وهذه هي الخطوةُ الوحيدة في السِّكربت التي ليست بحثًا في جدول.",
  "Add the fixed-pair counts across every renaming.": "اجمعْ أعدادَ الأزواج الثابتة عبر كلِّ إعادةِ تسمية.",
  "Add the per-level orbit counts in the table and multiply by the four typed families. The result is the number of coordinates that have to be settled separately, and it does not move.":
    "اجمعْ أعدادَ المدارات لكلِّ مستوًى في الجدول واضربْ في العائلات الأربع المحدَّدةِ النوع. والناتجُ عددُ الإحداثيّات التي يجب حسمُها منفردةً، وهو لا يتحرّك.",
  "All seven": "السبعةُ جميعًا",
  "An automorphism preserves shape and says nothing about meaning. Two poles in the same orbit are indistinguishable to the laws; that they refer to the same thing in the world does not follow, and this site never argues that it does.":
    "التشاكلُ الذاتيُّ يحفظ الشكلَ ولا يقول شيئًا عن المعنى. والقطبان في المدار الواحد لا يتمايزان لدى القوانين؛ ولا يلزم من ذلك أنّهما يشيران إلى الشيء نفسِه في العالم، وهذا الموقعُ لا يحتجُّ بذلك قطُّ.",
  "And again for the second law.": "ومرّةً أخرى للقانون الثاني.",
  "And it is the number the enumeration reached by walking the orbits, which shares none of this working.":
    "وهو العددُ نفسُه الذي بلغه التعدادُ بالمرور على المدارات، وهو لا يشارك هذا العملَ في شيء.",
  "Apply every renaming to one pair and see where it lands.": "طبِّق كلَّ إعادةِ تسميةٍ على زوجٍ واحدٍ وانظر أين يحطّ.",
  "At level 5 every non-zero pole is in one orbit. Any claim that P1 and P3 behave differently under the laws is therefore false, and can be refuted by exhibiting the renaming that swaps them.":
    "عند المستوى 5 تقع كلُّ الأقطاب غيرِ الصفريّة في مدارٍ واحد. فالدعوى أنّ P1 وP3 يتصرّفان تحت القوانين على نحوٍ مختلفٍ باطلة، وتُدحَض بإبراز إعادة التسمية التي تبادلهما.",
  "Automorphisms at each level": "التشاكلاتُ الذاتيّة عند كلِّ مستوى",
  "Average what each renaming leaves untouched, and the orbit count falls out.":
    "خُذ متوسّطَ ما تتركه كلُّ إعادةِ تسميةٍ على حاله يسقطْ عددُ المدارات من تلقائه.",
  "Checking 224 things settles all 560.": "فحصُ 224 شيئًا يحسم الـ560 كلَّها.",
  "Combine first, then rename.": "اجمعْ أوّلًا ثمّ أعِد التسمية.",
  "Combine then rename, or rename then combine. If it makes no difference, it is an automorphism.":
    "اجمعْ ثمّ أعِد التسمية، أو أعِد التسميةَ ثمّ اجمعْ. فإن لم يكن ثمّةَ فرق فهو تشاكلٌ ذاتيّ.",
  "Coordinates against orbits": "الإحداثيّاتُ في مقابل المدارات",
  "Counting orbits by walking them is straightforward and easy to get subtly wrong. Burnside's lemma counts the same thing without walking anything: for each renaming, count the pairs it leaves exactly where they are, then take the average over all renamings. The two methods share no code and no reasoning, so agreement between them is evidence rather than a restatement.":
    "عدُّ المدارات بالمرور عليها مباشرٌ وسهلُ الخطأ خطأً خفيًّا. ولمّةُ برنسايد تعدُّ الشيءَ نفسَه دون المرور على شيء: لكلِّ إعادةِ تسميةٍ عُدَّ الأزواجَ التي تتركها في مكانها تمامًا، ثمّ خُذِ المتوسّطَ عبر كلِّ إعادات التسمية. والطريقتان لا تتقاسمان شفرةً ولا استدلالًا، فاتّفاقُهما دليلٌ لا إعادةُ صياغة.",
  "Divide by how many renamings there are. That average is Burnside's lemma.":
    "اقسمْ على عدد إعادات التسمية. وهذا المتوسّطُ هو لمّةُ برنسايد.",
  "Divisible, so any multiplier sharing a factor with the level sends two poles to one name and is ruled out.":
    "قابلٌ للقسمة، فأيُّ مضاعِفٍ يشترك مع المستوى في عاملٍ يرسل قطبين إلى اسمٍ واحدٍ فيُستبعَد.",
  "Every cell of both tables lands back where it was.": "كلُّ خليةٍ من الجدولين تعود حيث كانت.",
  "Every count in the table is computed on each build, twice: once by walking the pairs and collecting orbits, and once by Burnside's lemma. Two channels that disagree would fail the build rather than reach this page.":
    "كلُّ عددٍ في الجدول يُحسَب عند كلِّ بناءٍ مرّتين: مرّةً بالمرور على الأزواج وجمعِ المدارات، ومرّةً بلمّة برنسايد. وقناتان تختلفان تُسقِطان البناءَ ولا تبلغان هذه الصفحة.",
  "Every renaming these tables admit, and there are no others to find.":
    "كلُّ إعادةِ تسميةٍ تقبلها هذه الجداول، ولا يوجد غيرُها لِيُوجَد.",
  "Exactly the multipliers that share no factor with the level.":
    "بالضبط المضاعِفاتُ التي لا تشترك مع المستوى في عامل.",
  "Five is prime, so doubling hits every pole once and the renaming is a genuine reshuffle. Redraw both tables under it and every cell is back where it started: all fifty checks pass, and this multiplier is an automorphism.":
    "الخمسةُ أوّليّ، فالمضاعفةُ تصيب كلَّ قطبٍ مرّةً واحدة، وتكون إعادةُ التسمية خلطًا حقيقيًّا. أعِد رسمَ الجدولين تحتها تعُدْ كلُّ خليةٍ حيث كانت: تجتاز الفحوصُ الخمسون كلُّها، وهذا المضاعِفُ تشاكلٌ ذاتيّ.",
  "Group the ordered pairs so that two pairs sit together whenever a renaming carries one to the other. Nothing inside a group can be told apart by the laws, so a property established at one member holds at every member without being checked there. That is the whole practical content of symmetry here: the number of things that have to be checked separately, and it is smaller than the number of things.":
    "اجمعِ الأزواجَ المرتَّبةَ بحيث يجتمع زوجان كلّما حملت إعادةُ تسميةٍ أحدَهما إلى الآخر. ولا تميّز القوانينُ بين ما في المجموعة الواحدة، فالخاصّيّةُ المُثبَتة عند عضوٍ تثبت عند كلِّ عضوٍ دون فحصها هناك. وهذا هو المحتوى العمليُّ للتناظر هنا بتمامه: كم شيئًا يجب فحصُه منفردًا — وهو عددٌ أصغرُ من عدد الأشياء.",
  "How many": "كم عددُها",
  "If a renaming carries one coordinate to another and leaves both laws exactly as they were, then any statement about the first that is expressed in terms of the laws transfers to the second unchanged. Nothing is being assumed here: the transfer is the renaming, applied to the argument instead of to the table.":
    "إذا حملت إعادةُ تسميةٍ إحداثيًّا إلى آخرَ وتركت القانونين كما كانا تمامًا، فإنّ أيَّ عبارةٍ عن الأوّل مصوغةٍ بلغة القوانين تنتقل إلى الثاني دون تغيير. ولا يُفترَض هنا شيء: النقلُ هو إعادةُ التسمية مطبَّقةً على الحجّة بدل الجدول.",
  "It is a second channel on the counts, not a restatement of them":
    "إنّه قناةٌ ثانيةٌ على الأعداد لا إعادةُ صياغةٍ لها",
  "It puts a floor under how much of the catalogue can be redundant":
    "يضع أرضيّةً تحت مقدار ما يمكن أن يكون زائدًا في الفهرس",
  "It tells you which distinctions the algebra cannot be making": "يخبرك أيَّ التمييزات لا يستطيع الجبرُ إجراءَها",
  "Left to check": "الباقي للفحص",
  "Level {level}, one row per renaming": "المستوى {level}، صفٌّ لكلِّ إعادةِ تسمية",
  "Multipliers that survive the test": "المضاعِفاتُ التي اجتازت الاختبار",
  "None of this makes the engine right about anything. It makes a specific class of mistake impossible to hide: a claim that holds at one coordinate and fails at another in the same orbit is not a subtle empirical finding, it is an arithmetic error, and it can be caught by a script rather than by an argument.":
    "لا شيءَ من هذا يجعل المحرّكَ محقًّا في شيء. إنّما يجعل صنفًا بعينه من الخطأ يتعذّر إخفاؤه: فالدعوى التي تثبت عند إحداثيٍّ وتسقط عند آخرَ في مداره ليست اكتشافًا تجريبيًّا دقيقًا، بل خطأٌ حسابيّ، ويلتقطه سِكربتٌ لا حِجاج.",
  "ONE ORBIT, WALKED": "مدارٌ واحدٌ، مقطوعًا",
  "One pole, so the only renaming is the one that does nothing.":
    "قطبٌ واحد، فإعادةُ التسمية الوحيدة هي التي لا تفعل شيئًا.",
  "Orbit size times stabiliser size is the number of renamings — a check that holds at every pair, not only this one.":
    "حجمُ المدار في حجم المُثبِّت هو عددُ إعادات التسمية — وهذا فحصٌ يثبت عند كلِّ زوجٍ لا عند هذا وحده.",
  "Orbits, by Burnside": "مداراتٌ، بلمّة برنسايد",
  "Orbits, by enumeration": "مداراتٌ، بالتعداد",
  "Pairs it leaves alone": "الأزواجُ التي تتركها",
  "Poles it leaves alone": "الأقطابُ التي تتركها",
  "Prime, so no multiplier can collapse two poles together and every one survives.":
    "أوّليّ، فلا يستطيع مضاعِفٌ أن يُطبِق قطبين معًا، وينجو كلُّها.",
  "RENAMINGS THAT CHANGE NOTHING": "إعاداتُ تسميةٍ لا تغيّر شيئًا",
  "Rename every pole at once, redraw the table, and look at what moved. Most renamings wreck the table; a few leave it exactly as it was, and those few are the automorphisms. This is not an aesthetic observation. Two coordinates related by an automorphism are the same coordinate as far as the laws can tell, so a property checked at one of them holds at the other by construction rather than by luck — and the whole catalogue collapses from 560 addresses to 224 that have to be checked separately. Everything below is a script: relabel, redraw, compare.":
    "أعِد تسميةَ كلِّ الأقطاب دفعةً واحدة، وأعِد رسمَ الجدول، وانظر ما الذي تحرّك. معظمُ إعادات التسمية تُخرِّب الجدول؛ وقليلٌ منها يتركه كما كان تمامًا، وذلك القليلُ هو التشاكلاتُ الذاتيّة. وليست هذه ملاحظةً جماليّة. فالإحداثيّان اللذان يربطهما تشاكلٌ ذاتيٌّ هما الإحداثيُّ نفسُه بقدر ما تستطيع القوانين أن تميّز، فالخاصّيّةُ المفحوصةُ عند أحدهما تثبت عند الآخر بحكم البناء لا بحكم الحظّ — وينكمش الفهرسُ كلُّه من 560 عنوانًا إلى 224 يجب فحصُها منفردةً. وكلُّ ما أدناه سِكربت: أعِد التسمية، وأعِد الرسم، وقارِن.",
  "Rename first, then combine. The two routes disagree, and the pair is named.":
    "أعِد التسميةَ أوّلًا ثمّ اجمعْ. الطريقان يختلفان، والزوجُ مُسمًّى.",
  Renaming: "إعادةُ تسمية",
  "Run the test at every level for every multiplier and a pattern comes out that nobody chose: the survivors are the numbers coprime to the level. Prime levels keep almost everything, even levels keep almost nothing, and level 6 — the richest level for structure — is one of the poorest for symmetry, because it is divisible twice over.":
    "أجرِ الاختبارَ عند كلِّ مستوًى لكلِّ مضاعِفٍ يظهرْ نمطٌ لم يخترْه أحد: الناجونَ هم الأعدادُ الأوّليّةُ نسبيًّا مع المستوى. المستوياتُ الأوّليّة تبقي كلَّ شيءٍ تقريبًا، والزوجيّةُ لا تبقي شيئًا تقريبًا، والمستوى 6 — أغنى المستويات بنيةً — من أفقرها تناظرًا، لأنّه يقبل القسمةَ مرّتين.",
  "Shape, not meaning:": "شكلٌ لا معنى:",
  "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this is not a renaming at all — and the test finds the first pair it breaks on rather than reporting a near miss.":
    "الستّةُ زوجيّ، فالمضاعفةُ ترسل P0 وP3 إلى المكان نفسِه. ولا يستطيع قطبان تقاسُمَ اسمٍ واحد، فليست هذه إعادةَ تسميةٍ أصلًا — والاختبارُ يجد أوّلَ زوجٍ يسقط عنده لا يُبلِّغ عن «كاد ينجح».",
  "THE SAME NUMBER, COUNTED A SECOND WAY": "العددُ نفسُه، معدودًا بطريقةٍ ثانية",
  "THE TEST, IN ONE LINE": "الاختبارُ في سطرٍ واحد",
  "Take a renaming φ that sends each pole somewhere. It is an automorphism when φ(a ⊕ b) = φ(a) ⊕ φ(b) holds for every pair, and the same for ★. That is n² checks per law, all of them table lookups, and a level small enough to print is a level small enough to check exhaustively. The two lanes below run exactly that test — one on a renaming that passes and one on a map that fails at its first collision.":
    "خذ إعادةَ تسميةٍ φ ترسل كلَّ قطبٍ إلى مكانٍ ما. تكون تشاكلًا ذاتيًّا حين تثبت φ(a ⊕ b) = φ(a) ⊕ φ(b) لكلِّ زوج، وكذلك لـ★. وهذا n² فحصًا لكلّ قانون، وكلُّها عمليّاتُ بحثٍ في جدول؛ والمستوى الذي يسع الطباعةَ مستوًى يسع الفحصَ الشامل. والمسربان أدناه يُجريان هذا الاختبارَ بعينه — أحدُهما على إعادة تسميةٍ تجتاز، والآخرُ على اقترانٍ يسقط عند أوّل تصادم.",
  "Take a single coordinate and hit it with each automorphism in turn. The distinct results are its orbit — the set of coordinates that are the same coordinate as far as the laws are concerned. The renamings that leave it exactly where it was are its stabiliser, and the size of the orbit times the size of the stabiliser is the number of renamings, every time.":
    "خذ إحداثيًّا واحدًا واضربه بكلِّ تشاكلٍ ذاتيٍّ بالتناوب. والنتائجُ المتمايزة هي مدارُه — مجموعةُ الإحداثيّات التي هي الإحداثيُّ نفسُه لدى القوانين. وإعاداتُ التسمية التي تتركه في مكانه تمامًا هي مُثبِّتُه، وحجمُ المدار في حجم المُثبِّت يساوي عددَ إعادات التسمية في كلِّ مرّة.",
  "The Burnside script below prints its own working: the fixed poles of each renaming, the squares, the sum, and the average. Compare its result to the enumerated column in the table above it.":
    "سِكربتُ برنسايد أدناه يطبع عملَه: الأقطابَ الثابتةَ لكلِّ إعادةِ تسمية، والمربَّعات، والمجموع، والمتوسّط. قارِن نتيجتَه بعمود التعداد في الجدول فوقه.",
  "The distinct places the pair can be carried to. All of them are the same coordinate to the laws.":
    "المواضعُ المتمايزةُ التي يمكن حملُ الزوج إليها. وكلُّها الإحداثيُّ نفسُه لدى القوانين.",
  "The orbit counts are computed twice on every build — once by enumeration and once by Burnside's lemma — and the two share no reasoning. A count that survives both has been checked, not asserted. This is the same discipline the concept cards use when they demand a table channel and a formula channel that agree.":
    "تُحسَب أعدادُ المدارات مرّتين عند كلِّ بناء — بالتعداد وبلمّة برنسايد — والطريقتان لا تتقاسمان استدلالًا. والعددُ الذي ينجو منهما مفحوصٌ لا مُدَّعًى. وهذه هي الانضباطُ نفسُه الذي تطلبه بطاقاتُ المفاهيم حين تشترط قناةَ جدولٍ وقناةَ صيغةٍ تتوافقان.",
  "The renamings that leave it exactly where it was.": "إعاداتُ التسمية التي تتركه حيث كان تمامًا.",
  "The test, for every pair of poles.": "الاختبارُ لكلِّ زوجٍ من الأقطاب.",
  "The two facts are the same fact from opposite ends. A level with many divisors has many ways for a multiplier to collapse poles together, so it has few automorphisms; a prime level has none, so it has as many as it can.":
    "الحقيقتان حقيقةٌ واحدةٌ من طرفين. فالمستوى كثيرُ القواسم لديه طرقٌ كثيرةٌ ليُطبِق مضاعِفٌ أقطابًا معًا، فتقلُّ تشاكلاتُه؛ والمستوى الأوّليُّ لا قواسمَ له، فتكثر إلى أقصى ما يمكن.",
  "This is what the compression above is made of, one coordinate at a time. Establish something at the pair below and it holds at every other member of its orbit, because a renaming that carried the pair there also carried the argument.":
    "من هذا يتكوّن الانكماشُ أعلاه، إحداثيًّا إحداثيًّا. أثبِتْ شيئًا عند الزوج أدناه يثبتْ عند كلِّ عضوٍ آخرَ من مداره، لأنّ إعادةَ التسمية التي حملت الزوجَ إلى هناك حملت الحجّةَ معه.",
  "Two coordinates in every five have to be settled separately, and no fewer. That is a real number rather than a hope: the compression is exactly the orbit count, and there is no further renaming to find, because the survivors of the test are already all of them. Symmetry buys a factor, not an escape.":
    "إحداثيّان من كلِّ خمسةٍ يجب حسمُهما منفردين، ولا أقلّ. وهذا عددٌ حقيقيٌّ لا أملٌ: الانكماشُ هو عددُ المدارات بالضبط، ولا إعادةَ تسميةٍ أخرى تُوجَد، لأنّ الناجينَ من الاختبار هم كلُّها سلفًا. والتناظرُ يشتري مضاعِفًا لا مهربًا.",
  "Two poles are sent to one name, so this is not a bijection of the carrier.":
    "قطبان يُرسَلان إلى اسمٍ واحد، فليس هذا تقابلًا على الحامل.",
  "Two poles in the same orbit are indistinguishable to the laws. So an argument that treats them differently is not using the algebra — it is smuggling in something from outside it. Symmetry is how that smuggling becomes visible, because it names exactly the distinctions that have no formal content.":
    "القطبان في المدار الواحد لا يتمايزان لدى القوانين. فالحجّةُ التي تعاملهما معاملةً مختلفةً لا تستعمل الجبر — بل تُهرِّب شيئًا من خارجه. والتناظرُ هو ما يجعل ذلك التهريبَ ظاهرًا، لأنّه يسمّي بالضبط التمييزاتِ التي لا محتوى صوريَّ لها.",
  "Two poles, and P0 is pinned, so nothing is left to move.": "قطبان، وP0 مُثبَّت، فلم يبقَ ما يُحرَّك.",
  "WHICH RENAMINGS SURVIVE": "أيُّ إعاداتِ التسمية تنجو",
  "WHY THIS IS WORTH ANYTHING": "لماذا يساوي هذا شيئًا",
  "Walk the orbit of one pair below, then take any property the tables settle — which cell it lands on, whether it meets the absorbing pole — and confirm it holds at every member.":
    "اقطع مدارَ زوجٍ أدناه، ثمّ خذ أيَّ خاصّيّةٍ تحسمها الجداول — أيَّ خليةٍ يحطُّ عليها، وهل يلاقي القطبَ الماصّ — وتأكّد أنّها تثبت عند كلِّ عضو.",
  "Why that many": "لماذا هذا العدد",
  "an automorphism": "تشاكلٌ ذاتيّ",
  "not even a renaming": "ليس حتّى إعادةَ تسمية",
  "× four typed families": "× أربعُ عائلاتٍ محدَّدةِ النوع",
  "Six is even, so doubling sends P0 and P3 to the same place. Two poles cannot share one name, so this fails the first condition outright. It then fails the second as well, and the STAR table above shows exactly where: the marked cells are the pairs the two routes disagree on. PLUS is not drawn here because multiplying by a constant preserves PLUS whatever the constant is — a PLUS table would look untouched and prove nothing.":
    "الستّةُ زوجيّ، فالمضاعفةُ ترسل P0 وP3 إلى المكان نفسِه. ولا يستطيع قطبان تقاسُمَ اسمٍ واحد، فيسقط الشرطُ الأوّل فورًا. ثمّ يسقط الثاني كذلك، وجدولُ STAR أعلاه يُري أين بالضبط: الخلايا المُعلَّمة هي الأزواجُ التي يختلف عندها الطريقان. ولم يُرسَم PLUS هنا لأنّ الضربَ في ثابتٍ يحفظ PLUS أيًّا كان الثابت — فجدولُ PLUS كان سيبدو سليمًا ولا يُثبِت شيئًا.",
  "Take a map φ that sends each pole somewhere. It is an automorphism when two things hold: it is a renaming, meaning no two poles are sent to one name, and it preserves both laws, meaning φ(a ⊕ b) = φ(a) ⊕ φ(b) for every pair and the same for ★. Both conditions are needed. The map that sends everything to P0 preserves both laws perfectly and is not a renaming of anything, which is why the first check below is for collisions and the second is the law. That is n² lookups per law, and a level small enough to print is a level small enough to check exhaustively.":
    "خذ اقترانًا φ يرسل كلَّ قطبٍ إلى مكانٍ ما. يكون تشاكلًا ذاتيًّا حين يثبت أمران: أن يكون إعادةَ تسمية، أي ألّا يُرسَل قطبان إلى اسمٍ واحد، وأن يحفظ القانونين، أي φ(a ⊕ b) = φ(a) ⊕ φ(b) لكلِّ زوجٍ وكذلك لـ★. والشرطان كلاهما لازم. فالاقترانُ الذي يرسل كلَّ شيءٍ إلى P0 يحفظ القانونين حفظًا تامًّا ولا يعيد تسميةَ شيء، ولهذا يكون الفحصُ الأوّلُ أدناه عن التصادمات والثاني عن القانون. وهذا n² عمليّةَ بحثٍ لكلّ قانون، والمستوى الذي يسع الطباعةَ مستوًى يسع الفحصَ الشامل.",
  "{operation} at level {level}, redrawn under the renaming":
    "{operation} عند المستوى {level}، مُعادَ رسمُه تحت إعادة التسمية",
  "A catalogue, a route, and a count of questions actually asked.": "فهرسٌ ومسارٌ وعددُ الأسئلة المطروحة فعلًا.",
  "EVERY ROW, ANSWERED OR REFUSED": "كلُّ سطرٍ، أُجيب عنه أم رُفض",
  "Every test row leaves a record, whichever way it went.": "كلُّ سطرِ اختبارٍ يترك سجلًّا، أيًّا كان ما آل إليه.",
  "Three public corpora, one receipt per row. A row is answered only where all three conditions of the admission law held; where one did not, the row is a boundary and the missing condition is named in its record. Every corpus file is pinned by hash to an upstream commit, so a reviewer reproduces the inputs rather than trusting a description of them.":
    "ثلاثةُ متونٍ عامّة، وإيصالٌ واحدٌ لكلّ سطر. ولا يُجاب عن السطر إلّا حيث ثبتت شروطُ قانون القبول الثلاثة جميعًا؛ وحيث سقط أحدُها كان السطرُ حدًّا وسُمِّي الشرطُ الغائبُ في سجلّه. وكلُّ ملفِّ متنٍ مُثبَّتٌ ببصمةٍ إلى التزامٍ منبعيّ، فيُعيد المراجِعُ إنتاجَ المدخلات بدل أن يثق بوصفٍ لها.",
};
