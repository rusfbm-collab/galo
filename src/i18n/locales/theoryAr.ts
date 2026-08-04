import type { TranslationDictionary } from "../translations";

export const theoryAr: TranslationDictionary = {
  Theory: "النظرية",
  Home: "الرئيسية",
  "GALO Theory for Beginners — From States to Verified Execution":
    "نظرية GALO للمبتدئين — من الحالات إلى التنفيذ المتحقَّق منه",
  "Understand GALO step by step: finite states, PLUS and STAR, typed transitions, 560 coordinates, programs, symmetries, level maps, runtime scope, and evidence boundaries.":
    "افهم GALO خطوةً خطوة: الحالات المنتهية، وPLUS وSTAR، والانتقالات محددة النوع، والإحداثيات الـ560، والبرامج، والتناظرات، والتطبيقات بين المستويات، ونطاق وقت التشغيل، وحدود الأدلة.",

  "The idea in one sentence": "الفكرة في جملة واحدة",
  "States, levels, and wraparound": "الحالات والمستويات والالتفاف الدوري",
  "PLUS and STAR without jargon": "PLUS وSTAR بلا مصطلحات معقدة",
  "Why P0 has two one-sided roles": "لماذا لـP0 دوران أحاديا الجانب",
  "Source, active, LEFT, and RIGHT": "المصدر والقطب النشط وLEFT وRIGHT",
  "Guided transition laboratory": "مختبر الانتقال الموجَّه",
  "Where the number 560 comes from": "من أين يأتي العدد 560",
  "From cells to bracketed programs": "من الخلايا إلى البرامج ذات الأقواس",
  "Symmetry in plain language": "التناظر بلغة مبسطة",
  "Maps between levels": "التطبيقات بين المستويات",
  "How the mathematics fits the architecture": "كيف تندرج الرياضيات في البنية المعمارية",
  "How to read GALO evidence": "كيف تقرأ أدلة GALO",
  "Plain-language glossary": "مسرد بلغة مبسطة",
  "semantic inputs": "المُدخلات الدلالية",
  "source, active": "حالة المصدر، القطب النشط",
  orientation: "الاتجاه",
  "LEFT or RIGHT": "LEFT أو RIGHT",
  "raw operands": "المُعاملان الخامان",
  "row, column": "الصف، العمود",
  "row = source · column = active": "الصف = حالة المصدر · العمود = القطب النشط",
  "row = active · column = source": "الصف = القطب النشط · العمود = حالة المصدر",
  law: "القانون",
  "PLUS or STAR": "PLUS أو STAR",
  output: "المُخرج",
  target: "الهدف",
  source: "حالة المصدر",
  family: "العائلة",
  active: "القطب النشط",

  "Make the possible states explicit": "اجعل الحالات الممكنة صريحة",
  "Instead of hiding every distinction in an opaque vector, begin with a declared finite set of local state labels.":
    "بدلًا من إخفاء كل تمييز داخل متجه معتم، ابدأ بمجموعة منتهية ومعلنة من تسميات الحالات المحلية.",
  "Make every transition addressable": "اجعل لكل انتقال عنوانًا محددًا",
  "A level, action family, source, and active pole identify one exact transition coordinate.":
    "يحدد المستوى وعائلة الإجراء وحالة المصدر والقطب النشط إحداثي انتقال واحدًا بعينه.",
  "Separate calculation from interpretation": "افصل الحساب عن التفسير",
  "The finite law computes a target. Meaning, authority, evidence, and real-world action require additional contracts.":
    "يحسب القانون المنتهي حالةً هدفًا، أما المعنى والسلطة والدليل والفعل في العالم الواقعي فتتطلب عقودًا إضافية.",

  "Apply cyclic addition with the source in the table row.": "طبّق الجمع الدوري مع وضع حالة المصدر في صف الجدول.",
  "Swap the semantic roles on the table axes. PLUS reaches the same target because PLUS is commutative.":
    "بدّل الدورين الدلاليين على محوري الجدول. تصل عملية PLUS إلى الهدف نفسه لأنها تبديلية.",
  "The source controls whether the STAR reset row is entered.": "تتحكم حالة المصدر في دخول صف إعادة الضبط في STAR.",
  "The active pole is placed on the left and therefore controls the STAR reset test.":
    "يوضع القطب النشط على اليسار، ولذلك يتحكم في اختبار إعادة الضبط في STAR.",

  "START HERE · NO ADVANCED MATHEMATICS REQUIRED": "ابدأ هنا · لا تُشترط رياضيات متقدمة",
  "GALO theory, explained from the first state transition.": "نظرية GALO مشروحة ابتداءً من أول انتقال حالة.",
  "This guided chapter starts with a three-state dial and builds the theory one verified step at a time. Every key idea is shown in plain language, as a formula, as a finite table, and with an explicit limit on what it proves.":
    "يبدأ هذا الفصل الموجَّه بقرص ذي ثلاث حالات، ثم يبني النظرية خطوةً متحقَّقًا منها في كل مرة. وتُعرض كل فكرة أساسية بلغة مبسطة، وبصيغة، وبجدول منتهٍ، مع حدّ صريح لما تثبته.",
  "Learning path": "مسار التعلّم",
  "named states": "حالات مسمّاة",
  "exact transitions": "انتقالات دقيقة",
  "typed programs": "برامج محددة النوع",
  "receipts and boundaries": "إيصالات وحدود",
  "Begin with the mental model": "ابدأ بالنموذج الذهني",
  "Beginner theory chapter navigation": "التنقل في فصل النظرية للمبتدئين",
  "Build the theory in this order": "ابنِ النظرية بهذا الترتيب",

  "THE IDEA IN ONE SENTENCE": "الفكرة في جملة واحدة",
  "GALO makes a finite reasoning state and its permitted changes explicit enough to calculate, inspect, and replay.":
    "يجعل GALO حالة الاستدلال المنتهية وتغييراتها المسموح بها صريحتين بما يكفي لحسابهما وفحصهما وإعادة تشغيلهما.",
  "The formal kernel is an exact alphabet for state transitions. It is not by itself a language model, a trained memory, a proof of intelligence, or a certificate that a statement about the world is true.":
    "النواة الشكلية أبجدية دقيقة لانتقالات الحالة. وهي ليست في ذاتها نموذجًا لغويًا، ولا ذاكرة مدرَّبة، ولا برهانًا على الذكاء، ولا شهادةً بأن عبارةً عن العالم صحيحة.",
  "Running example": "مثال ممتد",
  "Imagine a dial with exactly three labelled positions. P0, P1, and P2 are names for those positions. The labels may later receive domain meaning, but the mathematics initially knows only the finite positions and their transition rules.":
    "تخيّل قرصًا له ثلاثة مواضع مسمّاة بالضبط. P0 وP1 وP2 أسماء لهذه المواضع. قد تُسند إلى التسميات لاحقًا دلالة مجال، لكن الرياضيات لا تعرف في البداية إلا المواضع المنتهية وقواعد الانتقال بينها.",

  "STATES, LEVELS, AND WRAPAROUND": "الحالات والمستويات والالتفاف الدوري",
  "A level says how many local distinctions are available.": "يحدد المستوى عدد التمييزات المحلية المتاحة.",
  "L_n uses n labelled poles. For calculation, P_i corresponds to the remainder i modulo n. This correspondence supplies exact arithmetic without claiming that a pole has one universal meaning.":
    "يتكوّن L_n من n أقطاب مسمّاة. ولأغراض الحساب يقابل P_i فئة الباقي i بترديد n. يوفّر هذا التقابل حسابًا دقيقًا من دون الادعاء بأن للقطب معنى عالميًا واحدًا.",
  "The L3 dial": "قرص L3",
  "Three-state cyclic dial": "قرص دوري ذو ثلاث حالات",
  "After P2, one more cyclic step returns to P0. That is all wraparound means here.":
    "بعد P2 تعيد خطوة دورية أخرى إلى P0. هذا هو كل ما يعنيه الالتفاف الدوري هنا.",
  "Three different object classes": "ثلاث فئات مختلفة من الكائنات",
  Label: "التسمية",
  "Calculation index": "فهرس الحساب",
  "Domain meaning": "دلالة المجال",
  "Not supplied by the algebra; it must come from a separate typed map and evidence.":
    "لا يقدمه الجبر؛ بل يجب أن يأتي من تطبيق منفصل محدد النوع ومن دليل.",
  "Analogy boundary:": "حدّ التشبيه:",
  "The dial explains modular arithmetic, not the semantics of GALO. P0 is not automatically false, empty, bad, safe, or authorized; P1 and P2 are not quantities unless a separate model declares them to be.":
    "يشرح القرص الحساب بترديد عدد صحيح، لا دلالات GALO. لا يعني P0 تلقائيًا الخطأ أو الفراغ أو السوء أو الأمان أو التفويض، ولا يمثل P1 وP2 كميتين ما لم يصرّح نموذج منفصل بذلك.",

  "PLUS AND STAR WITHOUT JARGON": "PLUS وSTAR بلا مصطلحات معقدة",
  "PLUS always moves around the dial. STAR first asks one exact reset question.":
    "يتحرك PLUS دائمًا حول القرص، أما STAR فيطرح أولًا سؤالًا دقيقًا واحدًا عن إعادة الضبط.",
  "Both laws accept two poles and return one pole at the same level. Their complete behaviour can be reconstructed either from the formula or from the Cayley table.":
    "يقبل القانونان كلاهما قطبين ويعيدان قطبًا واحدًا في المستوى نفسه. ويمكن إعادة بناء سلوكهما الكامل إما من الصيغة وإما من جدول كايلي.",
  "PLUS · cyclic addition": "PLUS · جمع دوري",
  "Add the indices, then wrap around.": "اجمع الفهرسين ثم طبّق الالتفاف الدوري.",
  "At L3, moving two steps from index 1 lands on index 0 after wraparound.":
    "عند L3، يؤدي التحرك خطوتين من الفهرس 1 إلى الفهرس 0 بعد الالتفاف الدوري.",
  "STAR · left-reset-sensitive addition": "STAR · جمع حساس لإعادة الضبط من اليسار",
  "Inspect the raw-left pole first.": "افحص أولًا القطب الواقع في موضع المُعامل الأيسر الخام.",
  "The reset test examines only the raw-left input. A right P0 does not trigger it.":
    "يفحص اختبار إعادة الضبط المُدخل الأيسر الخام وحده. ولا يفعّله وجود P0 على اليمين.",
  "Complete L3 PLUS table": "جدول PLUS الكامل عند L3",
  "Complete L3 STAR table": "جدول STAR الكامل عند L3",
  "Consistency check: every displayed table cell is obtained by substituting its row and column indices into the displayed formula. The two channels agree for all nine L3 input pairs.":
    "فحص الاتساق: تُستخرج كل خلية معروضة في الجدول بالتعويض بفهرسي صفها وعمودها في الصيغة المعروضة. وتتفق القناتان في أزواج المُدخلات التسعة كلها عند L3.",

  "WHY P0 HAS TWO ONE-SIDED ROLES": "لماذا لـP0 دوران أحاديا الجانب",
  "The side on which P0 appears changes the statement.": "تتغير الخاصية باختلاف الجانب الذي يظهر فيه P0.",
  "For STAR at every nondegenerate level n≥2, P0 is a left zero and a right-neutral element. These are two precise one-sided properties, not a two-sided identity.":
    "في STAR، عند كل مستوى غير متدهور n≥2، يكون P0 صفرًا أيسر وعنصرًا محايدًا من اليمين. وهاتان خاصيتان دقيقتان أحاديتا الجانب، وليستا عنصرًا محايدًا ثنائي الجانب.",
  "P0 on the left": "P0 على اليسار",
  "Left zero": "صفر أيسر",
  "Whatever appears on the right, a raw-left P0 forces the result to P0.":
    "أيًا كان ما يظهر على اليمين، فإن وجود P0 في موضع المُعامل الأيسر الخام يفرض أن تكون النتيجة P0.",
  "P0 on the right": "P0 على اليمين",
  "Right-neutral element": "عنصر محايد من اليمين",
  "Placing P0 on the right leaves the raw-left pole unchanged.":
    "يترك وضع P0 على اليمين القطب الواقع في موضع المُعامل الأيسر الخام من دون تغيير.",
  "Why P0 is not a two-sided identity": "لماذا لا يكون P0 عنصرًا محايدًا ثنائي الجانب",
  "The left identity law fails": "يفشل قانون العنصر المحايد من اليسار",
  "A two-sided identity e would require e★x=x and x★e=x. P0 satisfies only the second equation.":
    "يتطلب العنصر المحايد ثنائي الجانب e تحقق e★x=x وx★e=x. ولا يحقق P0 إلا المعادلة الثانية.",
  "At the one-element level, P0★P0=P0, so left zero, right-neutral, two-sided zero, and two-sided identity collapse into the same single equation. Every statement for n≥2 must keep this degenerate exception separate.":
    "في المستوى ذي العنصر الواحد، P0★P0=P0؛ ولذلك تؤول خصائص الصفر الأيسر والعنصر المحايد من اليمين والصفر ثنائي الجانب والعنصر المحايد ثنائي الجانب كلها إلى المعادلة الواحدة نفسها. ويجب في كل عبارة تخص n≥2 فصل هذا الاستثناء المنحل على حدة.",
  "Check your understanding: does right-neutral mean commutative?":
    "تحقق من فهمك: هل يعني كون العنصر محايدًا من اليمين أن العملية تبديلية؟",
  "No. At L3, P0★P1=P0 while P1★P0=P1. The different results directly prove that STAR is not commutative.":
    "لا. عند L3،‏ P0★P1=P0 بينما P1★P0=P1. وتثبت النتيجتان المختلفتان مباشرةً أن STAR غير تبديلية.",

  "SOURCE, ACTIVE, LEFT, AND RIGHT": "المصدر والقطب النشط وLEFT وRIGHT",
  "The operation is fixed; the semantic roles decide where its inputs are placed.":
    "العملية ثابتة، والأدوار الدلالية هي التي تحدد موضع مُدخليها.",
  "Source means the state being transformed. Active means the pole applied to it. LEFT puts source on the raw left; RIGHT puts active on the raw left. The names describe the interface roles, not standard algebraic translation terminology.":
    "تعني حالة المصدر الحالة التي يجري تحويلها، ويعني القطب النشط القطب المطبَّق عليها. يضع LEFT حالة المصدر في موضع المُعامل الأيسر الخام، ويضع RIGHT القطب النشط في ذلك الموضع. يصف الاسمان دوري الواجهة، لا المصطلحين القياسيين للترجمات الجبرية.",
  "The four typed action families at source P0 and active P2 on L3":
    "عائلات الإجراءات الأربع محددة النوع عند حالة المصدر P0 والقطب النشط P2 في L3",
  Family: "العائلة",
  "Operand placement": "موضع المُعاملين",
  "Direct calculation": "الحساب المباشر",
  "Plain meaning": "المعنى المبسط",
  "Direct witness: PLUS_LEFT and PLUS_RIGHT reach the same P2 but remain different typed addresses. STAR_LEFT reaches P0 and STAR_RIGHT reaches P2 because the reset test follows the raw-left operand.":
    "شاهد مباشر: يصل PLUS_LEFT وPLUS_RIGHT إلى P2 نفسه، لكنهما يظلان عنوانين مختلفين محددي النوع. يصل STAR_LEFT إلى P0 ويصل STAR_RIGHT إلى P2 لأن اختبار إعادة الضبط يتبع المُعامل الأيسر الخام.",

  "GUIDED TRANSITION LABORATORY": "مختبر الانتقال الموجَّه",
  "Rebuild one transition from roles, formula, table, and canonical record.":
    "أعِد بناء انتقال واحد من الأدوار والصيغة والجدول والسجل المعياري.",
  "Start with the L3 reset example, then change one control at a time. The explanation, formula channel, complete table, and record must continue to agree.":
    "ابدأ بمثال إعادة الضبط عند L3، ثم غيّر عنصر تحكم واحدًا في كل مرة. ويجب أن يظل الشرح وقناة الصيغة والجدول الكامل والسجل متفقة.",
  "Change one input and watch every witness update.": "غيّر مُدخلًا واحدًا وراقب تحديث كل شاهد.",
  "FORMULA-DERIVED": "FORMULA-DERIVED",
  "Beginner transition controls": "عناصر تحكم انتقال المبتدئين",
  "1. Choose how many local states exist": "1. اختر عدد الحالات المحلية الموجودة",
  "2. Choose the transition family": "2. اختر عائلة الانتقال",
  "3. Choose the source state": "3. اختر حالة المصدر",
  "4. Choose the active pole": "4. اختر القطب النشط",
  "Plain-language replay": "إعادة تشغيل بلغة مبسطة",
  "Five small decisions produce one exact transition.": "خمسة قرارات صغيرة تنتج انتقالًا دقيقًا واحدًا.",
  "L{level} contains exactly {count} allowed state labels: {states}.":
    "يحتوي L{level} على {count} من تسميات الحالات المسموح بها بالضبط: {states}.",
  "LEFT places source P{source} on the raw left and active P{active} on the raw right.":
    "يضع LEFT حالة المصدر P{source} في موضع المُعامل الأيسر الخام، والقطب النشط P{active} في موضع المُعامل الأيمن الخام.",
  "RIGHT places active P{active} on the raw left and source P{source} on the raw right.":
    "يضع RIGHT القطب النشط P{active} في موضع المُعامل الأيسر الخام، وحالة المصدر P{source} في موضع المُعامل الأيمن الخام.",
  "PLUS always adds the two indices and wraps around modulo {level}.":
    "يجمع PLUS الفهرسين دائمًا ثم يطبّق الالتفاف بترديد {level}.",
  "STAR sees P0 on the raw left, so the reset clause returns P0 immediately.":
    "يرى STAR الرمز P0 في موضع المُعامل الأيسر الخام، ولذلك يعيد شرط إعادة الضبط P0 فورًا.",
  "STAR sees a nonzero raw-left pole, so this cell follows cyclic addition modulo {level}.":
    "يرى STAR قطبًا غير صفري في موضع المُعامل الأيسر الخام، ولذلك تتبع هذه الخلية الجمع الدوري بترديد {level}.",
  "The table address is row P{left}, column P{right}; that cell contains P{target}.":
    "عنوان الجدول هو الصف P{left} والعمود P{right}؛ وتحتوي تلك الخلية P{target}.",
  "The complete typed address is {cellId}. The target is stored as a result, not hidden in the ID.":
    "العنوان الكامل المحدد النوع هو {cellId}. ويُخزَّن الهدف بوصفه نتيجة، ولا يُخفى داخل المعرّف.",
  "Restore the L3 reset example": "أعِد مثال إعادة الضبط عند L3 إلى حالته الأصلية",
  "Two-channel witness": "شاهد ثنائي القناة",
  "Formula and complete table must agree": "يجب أن تتفق الصيغة والجدول الكامل",
  "Formula channel": "قناة الصيغة",
  "Complete {operation} table at L{level}": "جدول {operation} الكامل عند L{level}",
  "This browser lab recomputes finite mathematics. It does not run the release engine, interpret natural language, issue an operational receipt, or learn.":
    "يعيد مختبر المتصفح هذا حساب الرياضيات المنتهية. وهو لا يشغّل محرك الإصدار، ولا يفسر اللغة الطبيعية، ولا يُصدر إيصالًا تشغيليًا، ولا يجري أي تعلّم.",

  "WHERE THE NUMBER 560 COMES FROM": "من أين يأتي العدد 560",
  "Count addresses first, laws second, and semantic role placements third.":
    "عُدَّ العناوين أولًا، ثم القوانين، ثم مواضع الأدوار الدلالية.",
  "No statistical estimate is involved. The count is a complete finite enumeration across L1–L7, and each multiplication in the derivation has a different object-level meaning.":
    "لا يدخل أي تقدير إحصائي في هذا العدد. فهو تعداد منتهٍ كامل عبر L1–L7، ولكل عملية ضرب في الاشتقاق معنى مختلف على مستوى الكائنات.",
  "Complete count ledger": "سجل العدّ الكامل",
  "Object counted": "الكائن المعدود",
  Calculation: "الحساب",
  Count: "العدد",
  "What the number means": "ما الذي يعنيه العدد",
  "560 is not": "العدد 560 ليس",
  "560 neurons": "560 عصبونًا",
  "560 concepts": "560 مفهومًا",
  "560 learned skills": "560 مهارة متعلَّمة",
  "560 meanings": "560 معنى",
  "560 units of intelligence": "560 وحدة ذكاء",
  "Why count LEFT and RIGHT separately when PLUS gives the same targets?":
    "لماذا نعد LEFT وRIGHT منفصلين مع أن PLUS يعطي الأهداف نفسها؟",
  "Because a typed coordinate records semantic roles, not only its numeric output. Two transitions may end at the same pole while carrying different source-active provenance and different compatibility obligations.":
    "لأن الإحداثي المحدد النوع يسجل الأدوار الدلالية، لا ناتجه العددي وحده. قد ينتهي انتقالان عند القطب نفسه مع احتفاظ كل منهما بسجل منشأ مختلف لتوزيع دوري حالة المصدر والقطب النشط، وبالتزامات توافق مختلفة.",

  "Ordered input pairs for one law": "أزواج المُدخلات المرتبة لقانون واحد",
  "Every row-column address for one binary operation across L1–L7.": "كل عنوان صف وعمود لعملية ثنائية واحدة عبر L1–L7.",
  "Raw PLUS and STAR coordinates": "إحداثيات PLUS وSTAR الخام",
  "The same addresses are evaluated once under PLUS and once under STAR.":
    "تُقيَّم العناوين نفسها مرة تحت PLUS ومرة تحت STAR.",
  "Oriented typed coordinates": "إحداثيات موجهة محددة النوع",
  "Each raw law coordinate is recorded with LEFT or RIGHT source-active role placement.":
    "يُسجَّل كل إحداثي خام للقانون مع موضع دوري حالة المصدر والقطب النشط وفق LEFT أو RIGHT.",
  "Current active runtime coordinates": "إحداثيات وقت التشغيل النشطة حاليًا",
  "The mathematical catalogue includes L1; current V4 activates L2–L7 and keeps L1 as control-only.":
    "يتضمن الفهرس الرياضي L1؛ ويفعّل V4 الحالي المستويات L2–L7، بينما يبقي L1 للتحكم فقط.",

  "FROM CELLS TO BRACKETED PROGRAMS": "من الخلايا إلى البرامج ذات الأقواس",
  "One cell is one step. A program is an explicit tree of steps.":
    "الخلية الواحدة خطوة واحدة، والبرنامج شجرة صريحة من الخطوات.",
  "The target of one cell may feed another cell. For PLUS the grouping does not change the result; for STAR it can. Therefore a list of operands is not a complete STAR program—the brackets are executable structure.":
    "قد يصبح هدف خلية مُدخلًا لخلية أخرى. لا يغيّر التجميع نتيجة PLUS، لكنه قد يغيّر نتيجة STAR. ولذلك لا تمثل قائمة المُعاملات برنامج STAR كاملًا؛ فالأقواس بنية قابلة للتنفيذ.",
  "Left-associated L3 program": "برنامج L3 مقترن إلى اليسار",
  "Right-associated L3 program": "برنامج L3 مقترن إلى اليمين",
  Nonassociative: "عدم التجميعية",
  "Changing the brackets can change the result. The L3 calculations above are an exact counterexample to associativity.":
    "قد يؤدي تغيير الأقواس إلى تغيير النتيجة. وحسابا L3 أعلاه مثال مضاد دقيق للتجميعية.",
  "Consistency check: direct table lookup gives P2 for the left tree and P1 for the right tree. The formula and tree evaluation agree.":
    "فحص الاتساق: يعطي البحث المباشر في الجدول P2 للشجرة ذات التجميع الأيسر وP1 للشجرة ذات التجميع الأيمن. وتتفق الصيغة مع تقييم الشجرة.",

  "SYMMETRY IN PLAIN LANGUAGE": "التناظر بلغة مبسطة",
  "A symmetry is a reversible relabelling that leaves the declared rules unchanged.":
    "التناظر إعادة تسمية قابلة للعكس تُبقي القواعد المعلنة من دون تغيير.",
  "At L3, multiplying indices by 2 swaps P1 and P2 while fixing P0. Recompute every PLUS and STAR cell after the swap: the operation tables retain the same structure.":
    "عند L3، يبدّل ضرب الفهارس في 2 بين P1 وP2 مع تثبيت P0. وعند إعادة حساب كل خلية PLUS وSTAR بعد التبديل، تحتفظ جداول العمليتين بالبنية نفسها.",
  "L3 relabelling": "إعادة التسمية عند L3",
  "This permutation is an automorphism because it is reversible and preserves both operations.":
    "هذا التبديل تشاكل ذاتي لأنه قابل للعكس ويحفظ العمليتين.",
  "Orbit of one pole": "مدار قطب واحد",
  "P1 can be carried to P2 by an allowed symmetry. P0 forms its own orbit because every automorphism fixes it.":
    "يمكن نقل P1 إلى P2 بتناظر مسموح. ويكوّن P0 مداره الخاص لأن كل تشاكل ذاتي يثبته.",
  "Stabilizer of P1": "مثبّت P1",
  "Only the identity relabelling leaves P1 exactly where it is.":
    "لا تُبقي P1 في موضعه تمامًا إلا إعادة التسمية المطابقة.",
  "Identity fixes": "النقاط التي تثبّتها الهوية",
  "Swap fixes": "النقاط التي يثبّتها التبديل",
  Average: "المتوسط",
  "Burnside consistency witness: direct inspection gives the two carrier orbits {P0} and {P1,P2}; averaging fixed points also gives two.":
    "شاهد اتساق برنسايد: يعطي الفحص المباشر مداري الحامل {P0} و{P1,P2}؛ كما يعطي متوسط النقاط الثابتة مدارين.",
  "What symmetry does not mean": "ما لا يعنيه التناظر",
  "Orbit membership does not make two records semantically identical and does not merge their provenance, permissions, evidence, or real-world consequences.":
    "لا تجعل العضوية في المدار سجلين متطابقين دلاليًا، ولا تدمج سجلَّي منشئهما أو صلاحياتهما أو أدلتهما أو آثارهما في العالم الواقعي.",
  "Continue to the complete symmetry chapter": "تابع إلى فصل التناظر الكامل",

  "MAPS BETWEEN LEVELS": "التطبيقات بين المستويات",
  "A shared pole name is not enough to move information lawfully between levels.":
    "لا يكفي اشتراك قطبين في الاسم لنقل المعلومات بين المستويات نقلًا حافظًا للقوانين.",
  "A homomorphism must preserve the declared operations. An embedding must additionally keep distinct source poles distinct. Operational transfer can require still more: provenance, alignment, loss, and authorization checks.":
    "يجب أن يحفظ التشاكل العمليات المعلنة. ويجب فوق ذلك أن يُبقي التضمين أقطاب المصدر المختلفة متمايزة. وقد يتطلب النقل التشغيلي مزيدًا من فحوص المنشأ والمحاذاة والفقد والتفويض.",
  "nonzero embedding": "تضمين غير صفري",
  "Both laws agree on the shown pair, and exhaustive checking covers every source pair and all four typed families.":
    "يتفق القانونان على الزوج المعروض، ويغطي الفحص الاستنفادي كل زوج من أقطاب مستوى المصدر والعائلات الأربع محددة النوع.",
  "same-name map fails": "يفشل التطبيق المحافظ على الاسم",
  "There is no nonzero full-algebra embedding L3→L5. The zero homomorphism still exists, so saying ‘no morphism exists’ would be false.":
    "لا يوجد تضمين غير صفري للجبر الكامل L3→L5. ومع ذلك يظل التشاكل الصفري موجودًا؛ ولذلك تكون عبارة «لا يوجد تشاكل» خاطئة.",
  "Zero homomorphism": "التشاكل الصفري",
  "Maps every pole to P0. It preserves the laws for every ordered level pair but collapses all distinctions.":
    "يرسل كل قطب إلى P0. وهو يحفظ القوانين لكل زوج مرتب من المستويات، لكنه يطمس جميع التمييزات.",
  Embedding: "تضمين",
  "Preserves the laws and keeps distinct poles distinct. For n≥2, nonzero A_n→A_m embeddings exist exactly when n divides m.":
    "يحفظ القوانين ويُبقي الأقطاب المختلفة متمايزة. عند n≥2 توجد تضمينات غير صفرية A_n→A_m بالضبط عندما تقسم n العدد m.",
  "Operational transfer": "النقل التشغيلي",
  "Requires an auditable alignment decision; a mathematical embedding alone does not authorize a real runtime transfer.":
    "يتطلب قرار محاذاة قابلًا للتدقيق؛ فالتضمين الرياضي وحده لا يفوّض نقلًا حقيقيًا في وقت التشغيل.",
  "These archived morphism receipts belong to the compatibility and audit layer. The legacy morphism_v1 module is excluded from the current V4 runtime wheel and is not a current public API capability.":
    "تنتمي إيصالات التشاكل المؤرشفة هذه إلى طبقة التوافق والتدقيق. أما الوحدة القديمة morphism_v1 فمستبعدة من حزمة وقت التشغيل الحالية لـ V4، وليست قدرة متاحة حاليًا ضمن واجهة API العامة.",

  "HOW THE MATHEMATICS FITS THE ARCHITECTURE": "كيف تندرج الرياضيات في البنية المعمارية",
  "The formal alphabet, the current runtime, and the target learning system are three different layers.":
    "الأبجدية الشكلية ووقت التشغيل الحالي ونظام التعلّم المستهدف ثلاث طبقات مختلفة.",
  "The mathematics supplies exact finite structure. The current V4 release uses only a bounded deterministic execution slice. The wider World Atlas and persistent learning loop remain an architectural target.":
    "توفر الرياضيات بنية منتهية دقيقة. ولا يستخدم إصدار V4 الحالي إلا شريحة تنفيذ حتمية ومحدودة. أما World Atlas الأوسع وحلقة التعلّم المستديم فيظلان هدفًا معماريًا.",
  "Finite state alphabet": "أبجدية حالات منتهية",
  "L1–L7 provide named finite carriers. A pole is a local state label, not a word meaning or neuron.":
    "توفر L1–L7 حوامل منتهية مسمّاة. والقطب تسمية حالة محلية، لا معنى كلمة ولا عصبون.",
  "Frozen transition laws": "قوانين انتقال مجمّدة",
  "PLUS and STAR turn every ordered pair of poles into one exact target pole.":
    "يحوّل PLUS وSTAR كل زوج مرتب من الأقطاب إلى قطب هدف واحد دقيق.",
  "Typed role placement": "موضع الأدوار محددة النوع",
  "LEFT and RIGHT retain which input is the source and which input is active.":
    "يحتفظ LEFT وRIGHT بتحديد أي مُدخل هو حالة المصدر وأيهما القطب النشط.",
  "Bounded current selection": "الاختيار الحالي المحدود",
  "A deterministic selector orders a finite declared candidate frontier for exactly two fixed source patterns.":
    "يرتب محدِّد حتمي جبهة مرشحين منتهية ومعلنة لنمطي مصدر ثابتين بالضبط.",
  "Receipt-backed execution": "تنفيذ مدعوم بإيصالات",
  "Membership, one-shot execution, rollback, revocation, and work accounting are recorded within the current scope.":
    "تُسجَّل العضوية والتنفيذ أحادي الاستخدام والتراجع والإبطال ومحاسبة العمل ضمن النطاق الحالي.",
  "Adaptive World Atlas loop": "حلقة World Atlas تكيفية",
  "Persistent semantic state, partner-grounded evaluation, multi-step programs, and learning remain target architecture.":
    "تظل الحالة الدلالية المستديمة والتقييم المؤسس على شريك والبرامج متعددة الخطوات والتعلّم ضمن البنية المعمارية المستهدفة.",
  "Current V4 actually does": "ما يفعله V4 الحالي فعليًا",
  "works inside a committed finite candidate universe": "يعمل داخل كون مرشحين منتهٍ ومثبّت",
  "orders a 440-candidate frontier for each of two fixed source patterns":
    "يرتب جبهة من 440 مرشحًا لكل واحد من نمطي مصدر ثابتين",
  "executes one bounded action and records receipts": "ينفذ إجراءً واحدًا محدودًا ويسجل الإيصالات",
  "performs zero Atlas semantic reads, rank effects, and learning writes":
    "لا يجري أي قراءة دلالية من Atlas، ولا تأثيرات على الرتب، ولا كتابات تعلّم",
  "Current V4 does not yet do": "ما لا يفعله V4 الحالي بعد",
  "understand arbitrary natural-language observations": "يفهم ملاحظات اعتباطية باللغة الطبيعية",
  "run a persistent learned policy": "يشغّل سياسة متعلَّمة مستديمة",
  "contain a trained World Atlas": "يحتوي World Atlas مدرَّبًا",
  "prove external operational gain or General AI": "يثبت مكسبًا تشغيليًا خارجيًا أو ذكاءً اصطناعيًا عامًا",
  "The mathematical composition chapter describes a formal programming model. It must not be presented as a current multi-step runtime capability until the operational contracts and receipts exist.":
    "يصف فصل التركيب الرياضي نموذج برمجة شكليًا. ويجب ألا يُعرض بوصفه قدرة حالية متعددة الخطوات في وقت التشغيل إلى أن توجد العقود التشغيلية والإيصالات.",
  "Current V4 finite scope ledger": "سجل النطاق المنتهي الحالي لـ V4",
  Object: "الكائن",
  "Exact value": "القيمة الدقيقة",
  Interpretation: "التفسير",
  "Formal typed catalogue": "الفهرس الشكلي محدد النوع",
  "L1–L7 mathematical coordinates": "الإحداثيات الرياضية لـ L1–L7",
  "Active typed catalogue": "الفهرس النشط محدد النوع",
  "L2–L7 active; L1 control-only": "L2–L7 نشطة؛ وL1 للتحكم فقط",
  "Committed descriptors": "الواصفات المدرجة في الالتزام",
  "Declared finite candidate universe": "كون مرشحين منتهٍ ومعلن",
  "Executable descriptors": "الواصفات القابلة للتنفيذ",
  "Four allowed action kinds": "أربعة أنواع إجراءات مسموح بها",
  "Frontier per source pattern": "الجبهة لكل نمط مصدر",
  "Deterministically ordered candidates": "مرشحون مرتَّبون ترتيبًا حتميًا",
  "Accepted source patterns": "أنماط المصدر المقبولة",
  "Fixed patterns, not arbitrary text": "أنماط ثابتة، لا نص اعتباطي",
  "Arity / route depth": "عدد الوسائط / عمق المسار",
  "Binary, one-step current contour": "النطاق الحالي ثنائي المُدخلات وذو خطوة واحدة",

  "HOW TO READ GALO EVIDENCE": "كيف تقرأ أدلة GALO",
  "A PASS is meaningful only together with its exact contour and terminal witness.":
    "لا تكون حالة PASS ذات معنى إلا مع نطاقها الدقيق وشاهدها الطرفي.",
  "GALO separates mathematical derivation, executable tests, archive replay, operational evaluation, and open boundaries. Evidence from one layer does not automatically authorize a claim in another.":
    "يفصل GALO بين الاشتقاق الرياضي والاختبارات القابلة للتنفيذ وإعادة تشغيل الأرشيف والتقييم التشغيلي والحدود المفتوحة. ولا يجيز دليلٌ من طبقة واحدة تلقائيًا ادعاءً في طبقة أخرى.",
  "Does the statement follow from the declared finite laws?": "هل تلزم العبارة منطقيًا عن القوانين المنتهية المعلنة؟",
  "The 560-coordinate count and the role of P0 are exhaustively derivable.":
    "يمكن اشتقاق عدد الإحداثيات الـ560 ودور P0 استنفاديًا.",
  "Did independent executable checks reproduce the derivation?": "هل أعادت فحوص مستقلة قابلة للتنفيذ إنتاج الاشتقاق؟",
  "All finite tables, typed cells, automorphisms, and homomorphisms are enumerated in tests.":
    "تُجرى في الاختبارات عملية تعداد كامل لجميع الجداول المنتهية والخلايا محددة النوع والتشاكلات الذاتية والتشاكلات.",
  "Did the supplied archive pass the named replay contour?": "هل اجتاز الأرشيف المورَّد مسار إعادة التشغيل المسمّى؟",
  "Fresh STATIC and FAST passed; the stored FULL receipt reports 1,366/1,366.":
    "اجتاز مسارا STATIC وFAST في التشغيل الحديث؛ ويفيد إيصال FULL المخزّن بنتيجة 1,366/1,366.",
  "Is a required condition missing, blocked, or outside the tested scope?":
    "هل شرط مطلوب مفقود أو محجوب أو خارج النطاق المختبَر؟",
  "Fresh FULL was not run and CPython 3.13 was unavailable in the review session.":
    "لم يُنفَّذ مسار FULL تنفيذًا حديثًا، ولم يكن CPython 3.13 متاحًا في جلسة المراجعة.",
  "Would the claim require external data or a stronger evaluator?": "هل يتطلب الادعاء بيانات خارجية أو مقيّمًا أقوى؟",
  "External operational gain and arbitrary free-text reasoning are not proven.":
    "المكسب التشغيلي الخارجي والاستدلال الاعتباطي بالنص الحر غير مثبتين.",
  "Current legal release status": "الحالة المعتمدة حاليًا للإصدار",
  "Fresh STATIC and FAST are session replays. The FULL result is stored release evidence and was not freshly replayed in this review.":
    "نتيجتا STATIC وFAST الحديثتان ناتجتا إعادة تشغيل في هذه الجلسة. أما نتيجة FULL فهي دليل إصدار مخزّن، ولم تُعَد إعادة تشغيلها في هذه المراجعة.",
  "Inspect the complete evidence matrix": "افحص مصفوفة الأدلة الكاملة",

  "PLAIN-LANGUAGE GLOSSARY": "مسرد بلغة مبسطة",
  "Open a term for its intuitive meaning and exact mathematical contract.":
    "افتح مصطلحًا للاطلاع على معناه الحدسي وعقده الرياضي الدقيق.",
  "The plain explanation supports understanding; the formal line remains the authoritative definition.":
    "يدعم الشرح المبسط الفهم، بينما تظل الصياغة الشكلية هي التعريف المرجعي.",

  Carrier: "الحامل",
  "The complete finite set of allowed states at one level.":
    "المجموعة المنتهية الكاملة للحالات المسموح بها في مستوى واحد.",
  "Q_n={P0,…,P_(n−1)}.": "Q_n={P0,…,P_(n−1)}.",
  Pole: "القطب",
  "One named position inside a carrier.": "موضع مسمّى واحد داخل الحامل.",
  "P_i is identified with residue i modulo n for calculation.": "يُعرَّف P_i حسابيًا بفئة الباقي i بترديد n.",
  Level: "المستوى",
  "The choice of how many distinct local states are available.": "اختيار عدد الحالات المحلية المتمايزة المتاحة.",
  "L_n uses the n-element carrier Q_n; a larger n is not automatically better or more intelligent.":
    "يستخدم L_n الحامل Q_n المكوَّن من n عناصر؛ ولا تكون القيمة الأكبر لـn أفضل أو أكثر ذكاءً تلقائيًا.",
  "Binary operation": "عملية ثنائية",
  "A rule that accepts two allowed states and returns one allowed state.":
    "قاعدة تقبل حالتين مسموحًا بهما وتعيد حالة واحدة مسموحًا بها.",
  "f:Q_n×Q_n→Q_n.": "f:Q_n×Q_n→Q_n.",
  "Modulo n": "بترديد n",
  "Wrap around to P0 after reaching n, like a finite dial.": "الالتفاف إلى P0 بعد بلوغ n، كما في قرص منتهٍ.",
  "Indices differing by a multiple of n represent the same residue class.":
    "تمثل الفهارس التي يكون الفرق بينها مضاعفًا لـn فئة الباقي نفسها.",
  "Cayley table": "جدول كايلي",
  "A complete lookup table for a finite binary operation.": "جدول مرجعي كامل لعملية ثنائية منتهية.",
  "Row is the left operand, column is the right operand, and the cell is the result.":
    "الصف هو المُعامل الأيسر، والعمود هو المُعامل الأيمن، والخلية هي النتيجة.",
  PLUS: "PLUS",
  "Cyclic movement around the finite carrier.": "حركة دورية حول الحامل المنتهي.",
  "PLUS_n(P_i,P_j)=P_((i+j) mod n); it forms the cyclic group C_n.":
    "PLUS_n(P_i,P_j)=P_((i+j) mod n)؛ وهي تشكّل الزمرة الدورية C_n.",
  "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n) is isomorphic to the cyclic group C_n.":
    "PLUS_n(P_i,P_j)=P_((i+j) mod n)؛ و(Q_n,PLUS_n) متشاكل مع الزمرة الدورية C_n.",
  STAR: "STAR",
  "A reset-sensitive cyclic rule: a left P0 resets; otherwise it follows PLUS.":
    "قاعدة دورية حساسة لإعادة الضبط: يعيد P0 الواقع يسارًا الضبط؛ وفي غير ذلك تتبع PLUS.",
  "STAR_n(P_i,P_j)=P0 when i=0 and P_((i+j) mod n) otherwise.":
    "STAR_n(P_i,P_j)=P0 عندما i=0، وP_((i+j) mod n) خلاف ذلك.",
  "An element that forces the result when it is placed on the left.": "عنصر يفرض النتيجة عندما يوضع على اليسار.",
  "P0★x=P0 for every x.": "P0★x=P0 لكل x.",
  "An element that leaves the other input unchanged when placed on the right.":
    "عنصر يترك المُدخل الآخر من دون تغيير عندما يوضع على اليمين.",
  "x★P0=x; this does not make P0 a two-sided identity.": "x★P0=x؛ ولا يجعل ذلك P0 عنصرًا محايدًا ثنائي الجانب.",
  "Source state": "حالة المصدر",
  "The state from which a typed transition begins.": "الحالة التي يبدأ منها انتقال محدد النوع.",
  "The source role is retained even when operand swapping gives the same numeric target.":
    "يُحتفظ بدور المصدر حتى عندما يؤدي تبديل المُعاملين إلى الهدف العددي نفسه.",
  "Active pole": "القطب النشط",
  "The second semantic input applied to the source.": "المُدخل الدلالي الثاني المطبَّق على حالة المصدر.",
  "LEFT/RIGHT determines whether active occupies the raw right or left operand position.":
    "يحدد LEFT/RIGHT ما إذا كان القطب النشط يشغل موضع المُعامل الأيمن الخام أو الأيسر الخام.",
  "Typed coordinate": "إحداثي محدد النوع",
  "A complete address for one deterministic transition.": "عنوان كامل لانتقال حتمي واحد.",
  "level:family:source:active, with a separately computed target.":
    "level:family:source:active، مع هدف يُحسب على نحو منفصل.",
  Composition: "التركيب",
  "Using the output of one transition as an input to the next.":
    "استخدام مخرج انتقال واحد بوصفه مُدخلًا للانتقال التالي.",
  "For nonassociative STAR, the syntax tree or brackets are part of the program.":
    "في STAR غير التجميعية تكون شجرة الصياغة أو الأقواس جزءًا من البرنامج.",
  Automorphism: "تشاكل ذاتي",
  "A reversible relabelling that leaves every declared rule unchanged.":
    "إعادة تسمية قابلة للعكس تُبقي كل قاعدة معلنة من دون تغيير.",
  "A bijection from an algebra to itself preserving its operations and named constants.":
    "تطبيق تقابلي من جبر إلى نفسه يحفظ عملياته وثوابته المسمّاة.",
  Orbit: "مدار",
  "All coordinates reachable from one coordinate by allowed symmetries.":
    "كل الإحداثيات الممكن بلوغها من إحداثي واحد بالتناظرات المسموح بها.",
  "Orb(x)={g·x | g∈G}.": "Orb(x)={g·x | g∈G}.",
  Stabilizer: "مثبّت",
  "The symmetries that leave one selected coordinate unchanged.":
    "التناظرات التي تُبقي إحداثيًا مختارًا واحدًا من دون تغيير.",
  "Stab(x)={g∈G | g·x=x}.": "Stab(x)={g∈G | g·x=x}.",
  "Burnside's lemma": "لمّة برنسايد",
  "A second way to count symmetry classes by averaging fixed points.":
    "طريقة ثانية لعدّ فئات التناظر بأخذ متوسط النقاط الثابتة.",
  "|X/G|=(1/|G|)Σ_g |Fix(g)|.": "|X/G|=(1/|G|)Σ_g |Fix(g)|.",
  Homomorphism: "تشاكل",
  "A map between levels that preserves the declared operations.": "تطبيق بين المستويات يحفظ العمليات المعلنة.",
  "It need not be injective; the zero homomorphism exists for every ordered level pair.":
    "لا يلزم أن يكون حقنيًا؛ فالتشاكل الصفري موجود لكل زوج مرتب من المستويات.",
  "A structure-preserving map that keeps different source states different.":
    "تطبيق حافظ للبنية يُبقي حالات المصدر المختلفة متمايزة.",
  "An injective homomorphism; nonzero A_n→A_m embeddings for n≥2 exist exactly when n divides m.":
    "تشاكل حقني؛ توجد تضمينات غير صفرية A_n→A_m عند n≥2 بالضبط عندما تقسم n العدد m.",
  Receipt: "إيصال تنفيذ",
  "A machine-readable record of what a bounded execution checked and did.":
    "سجل قابل للقراءة الآلية لما فحصه التنفيذ المحدود وما فعله.",
  "A receipt is an operational witness, not a mathematical theorem or real-world truth certificate.":
    "إيصال التنفيذ شاهد تشغيلي، لا مبرهنة رياضية ولا شهادة حقيقة عن العالم الواقعي.",
  Boundary: "حدّ",
  "An explicit stop: the available evidence does not authorize the stronger conclusion.":
    "توقف صريح: الأدلة المتاحة لا تفوّض الاستنتاج الأقوى.",
  "BOUNDARY is a terminal status with a named missing condition or counterexample.":
    "BOUNDARY حالة نهائية ذات شرط مفقود مسمّى أو مثال مضاد.",

  "COMMON MISCONCEPTIONS": "مفاهيم خاطئة شائعة",
  "Six tempting shortcuts—and the exact correction for each one.": "ستة اختصارات مغرية، والتصحيح الدقيق لكل واحد منها.",
  "P0 is the identity of STAR.": "P0 هو العنصر المحايد في STAR.",
  "For n≥2, P0 is only right-neutral and only a left zero; STAR has no two-sided identity.":
    "عند n≥2 يكون P0 محايدًا من اليمين فقط وصفرًا أيسر فقط؛ ولا تملك STAR عنصرًا محايدًا ثنائي الجانب.",
  "L7 is more intelligent than L3.": "L7 أكثر ذكاءً من L3.",
  "A higher level only offers more local distinctions. Intelligence and task value require separate evidence.":
    "لا يقدم المستوى الأعلى إلا مزيدًا من التمييزات المحلية. ويتطلب الذكاء وقيمة المهمة دليلًا منفصلًا.",
  "The 560 cells are concepts or neurons.": "الخلايا الـ560 مفاهيم أو عصبونات.",
  "They are formal transition addresses. Semantics, memory, and learned parameters are separate object classes.":
    "إنها عناوين انتقال شكلية. أما الدلالات والذاكرة والمعاملات المتعلَّمة فهي فئات كائنات منفصلة.",
  "An orbit means several states are semantically identical.": "يعني المدار أن عدة حالات متطابقة دلاليًا.",
  "An orbit records equivalence under one declared symmetry action; it does not merge meaning, provenance, or authority.":
    "يسجل المدار تكافؤًا تحت فعل تناظر معلن واحد؛ ولا يدمج المعنى أو المصدر أو السلطة.",
  "There is no morphism from L3 to L5.": "لا يوجد تشاكل من L3 إلى L5.",
  "The zero homomorphism exists. What does not exist is a nonzero or injective full-algebra embedding.":
    "التشاكل الصفري موجود. وما لا يوجد هو تضمين غير صفري أو حقني للجبر الكامل.",
  "Verified finite mathematics proves learning or General AI.":
    "تثبت الرياضيات المنتهية المتحقَّق منها التعلّم أو الذكاء الاصطناعي العام.",
  "It proves only the finite claims inside its contract. Persistent learning and General AI remain unclaimed.":
    "لا تثبت إلا الادعاءات المتعلقة بالنطاق المنتهي داخل عقدها. ولا يزال التعلّم المستديم والذكاء الاصطناعي العام غير مدّعى بهما.",

  "CONTINUE AT YOUR DEPTH": "تابع بالمستوى الملائم لعمقك",
  "You now have the conceptual map. Choose the next verification layer.":
    "لديك الآن الخريطة المفاهيمية. اختر طبقة التحقق التالية.",
  "Exact formal kernel": "النواة الشكلية الدقيقة",
  "Tables, 560 coordinates, ranks, programs, and morphisms": "الجداول والإحداثيات الـ560 والرتب والبرامج والتشاكلات",
  "Academic symmetry": "التناظر الأكاديمي",
  "Automorphisms, orbits, stabilizers, and Burnside": "التشاكلات الذاتية والمدارات والمثبتات ولمّة برنسايد",
  "Release evidence": "أدلة الإصدار",
  "Archive receipts, current runtime, and claim boundaries": "إيصالات الأرشيف ووقت التشغيل الحالي وحدود الادعاءات",
  "End of beginner contour: finite mathematics is established and independently tested; persistent learning, a trained current Atlas, external operational gain, and General AI are not established.":
    "نهاية مسار المبتدئين: الرياضيات المنتهية مثبتة ومختبَرة على نحو مستقل؛ أما التعلّم المستديم وAtlas الحالي المدرَّب والمكسب التشغيلي الخارجي والذكاء الاصطناعي العام فغير مثبتة.",

  "GALO makes a finite local transition alphabet explicit enough to calculate, inspect, and replay.":
    "يجعل GALO أبجدية انتقالات محلية منتهية صريحة بما يكفي لحسابها وفحصها وإعادة تشغيلها.",
  "A local pole is not the agent's complete world state. The target architecture may use typed coordinates as components of an explicit World Atlas, but the formal kernel alone is not a language model, trained memory, proof of intelligence, or truth certificate.":
    "القطب المحلي ليس حالة العالم الكاملة للوكيل. قد تستخدم البنية المستهدفة إحداثيات محددة النوع بوصفها مكوّنات في World Atlas صريح، لكن النواة الشكلية وحدها ليست نموذجًا لغويًا، ولا ذاكرة مدرَّبة، ولا برهانًا على الذكاء، ولا شهادة حقيقة.",
  "Object boundary ledger": "سجل حدود فئات الكائنات",
  "From a local pole to an execution witness: do not mix object classes.":
    "من قطب محلي إلى شاهد تنفيذ: لا تخلط بين فئات الكائنات.",
  "Layer / status": "الطبقة / الحالة",
  "Exact form": "الصيغة الدقيقة",
  "What it is": "ما هو",
  "What it is not": "ما ليس هو",
  "Typed transition coordinate": "إحداثي انتقال محدد النوع",
  "Committed descriptor": "واصفة مدرجة في الالتزام",
  "Candidate frontier": "جبهة المرشحين",
  "One-shot handle": "مقبض أحادي الاستخدام",
  "Execution receipt": "إيصال التنفيذ",
  "One local state label inside one finite carrier.": "تسمية واحدة لحالة محلية داخل حامل منتهٍ واحد.",
  "One address that fixes a level, law family, and the semantic roles of both inputs.":
    "عنوان واحد يحدد المستوى وعائلة القانون والدور الدلالي لكل من المُدخلين.",
  "Its target is calculated; its domain meaning and permission are separate contracts.":
    "يُحسب هدفه، أما دلالته في المجال والإذن المتعلق به فعقدان منفصلان.",
  "One member of the finite candidate universe committed by the release.":
    "عنصر واحد من كون المرشحين المنتهي المدرج في التزام الإصدار.",
  "A descriptor may be non-executable and is not a learned concept or completed action.":
    "قد تكون الواصفة غير قابلة للتنفيذ، وهي ليست مفهومًا متعلَّمًا ولا فعلًا مكتملًا.",
  "The parity-filtered candidates that the deterministic selector is allowed to order.":
    "المرشحون المرشَّحون وفق الزوجية أو الفردية الذين يجوز للمحدِّد الحتمي ترتيبهم.",
  "The order is hash-derived, not a semantic judgment, probability, or learned preference.":
    "يُشتق الترتيب من قيمة التجزئة، وليس حكمًا دلاليًا ولا احتمالًا ولا تفضيلًا متعلَّمًا.",
  "A runtime capability bound to one admitted candidate and one bounded use.":
    "قدرة في وقت التشغيل مرتبطة بمرشح واحد مقبول وباستخدام واحد محدود.",
  "Current rollback, revocation, and sequencing are process-local; no persistent trusted head is implemented.":
    "التراجع والإبطال والتسلسل الحالي عمليات محلية ضمن العملية الحاسوبية؛ ولم يُنفَّذ رأس موثوق مستديم.",
  "The target architecture's explicit, revisable model of a domain and its alternatives.":
    "نموذج البنية المستهدفة الصريح والقابل للمراجعة لمجال وبدائله.",
  "A trained current Atlas is not present and Atlas state has no effect on current V4 ranking.":
    "لا يوجد Atlas حالي مدرَّب، ولا تؤثر حالة Atlas في ترتيب V4 الحالي.",
  "A machine-readable witness of what one bounded contour checked and executed.":
    "شاهد قابل للقراءة آليًا لما فحصه مسار محدود واحد وما نفّذه.",
  "Not a mathematical theorem, truth certificate, customer outcome, or proof of intelligence.":
    "ليس مبرهنة رياضية، ولا شهادة حقيقة، ولا نتيجة عميل، ولا برهانًا على الذكاء.",
  "Not a complete thought, world model, semantic concept, or global agent state.":
    "ليس فكرة مكتملة، ولا نموذجًا للعالم، ولا مفهومًا دلاليًا، ولا حالة شاملة للوكيل.",

  "Mathematical symbol legend": "دليل الرموز الرياضية",
  "How to read the symbols used in this chapter": "كيفية قراءة الرموز المستخدمة في هذا الفصل",
  Symbol: "الرمز",
  "Read aloud": "يُقرأ",
  "Meaning here": "معناه هنا",
  "Q sub n": "Q ذو المؤشر السفلي n",
  "P sub i": "P ذو المؤشر السفلي i",
  "the size of X": "عدد عناصر X",
  sum: "المجموع",
  "modulo n": "بترديد n",
  "f maps X to Y": "f تطبيق من X إلى Y",
  "is isomorphic to": "متشاكل مع",
  sigma: "سيغما",
  "units modulo n": "الوحدات بترديد n",
  "orbit of x": "مدار x",
  "stabilizer of x": "مثبّت x",
  "fixed points of g": "النقاط الثابتة لـ g",
  "X modulo the action of G": "X بترديد فعل G",
  "The complete n-element carrier at level L_n.": "الحامل الكامل المكوَّن من n عناصر عند المستوى L_n.",
  "The pole whose calculation index is i modulo n.": "القطب الذي فهرس حسابه i بترديد n.",
  "The number of elements in a finite set X.": "عدد العناصر في مجموعة منتهية X.",
  "Add the indicated quantity over every stated index.": "اجمع الكمية المشار إليها على جميع الفهارس المذكورة.",
  "Keep the remainder after division by n; this creates wraparound.":
    "احتفظ بالباقي بعد القسمة على n؛ فهذا ينشئ الالتفاف الدوري.",
  "A function assigning each input in X exactly one output in Y.":
    "دالة تُسنِد إلى كل مُدخل في X مخرجًا واحدًا بالضبط في Y.",
  "The structures have the same form under a reversible structure-preserving map.":
    "للبنيتين الصورة نفسها تحت تطبيق قابل للعكس وحافظ للبنية.",
  "A relabelling map; here it normally denotes an automorphism.":
    "تطبيق لإعادة التسمية؛ ويرمز هنا عادةً إلى تشاكل ذاتي.",
  "Indices u with gcd(u,n)=1; multiplication by u gives the allowed pointed relabellings.":
    "الفهارس u التي تحقق gcd(u,n)=1؛ ويعطي الضرب في u عمليات إعادة التسمية المدبَّبة المسموح بها.",
  "Every object reachable from x under the declared group action.": "كل كائن يمكن بلوغه من x تحت فعل الزمرة المعلن.",
  "Every group element that leaves x fixed.": "كل عنصر من الزمرة يثبّت x.",
  "The objects that the selected transformation g does not move.": "الكائنات التي لا يحركها التحويل المختار g.",
  "The set of orbits, not ordinary numeric division.": "مجموعة المدارات، لا قسمة عددية عادية.",

  "COMPLETE NONEXISTENCE PROOF · n≥2": "برهان كامل لعدم الوجود · n≥2",
  "No other pole can secretly be a two-sided identity.":
    "لا يمكن أن يكون أي قطب آخر عنصرًا محايدًا ثنائي الجانب على نحو خفي.",
  "If e were a two-sided identity, the right-identity equation would have to hold for the nonzero pole P1.":
    "لو كان e عنصرًا محايدًا ثنائي الجانب، للزم أن تتحقق معادلة المحايد من اليمين للقطب غير الصفري P1.",
  "The STAR nonzero row follows cyclic addition, so this equation forces e to have index 0.":
    "يتبع صف STAR غير الصفري الجمع الدوري، ولذلك تفرض هذه المعادلة أن يكون فهرس e مساويًا لـ0.",
  "The only possible candidate then fails the left-identity equation.":
    "وعندئذ يفشل المرشح الممكن الوحيد في معادلة المحايد من اليسار.",
  "Conclusion: STAR has no two-sided identity at any level n≥2.":
    "النتيجة: لا تملك STAR عنصرًا محايدًا ثنائي الجانب عند أي مستوى n≥2.",

  "Source is the local pole from which this typed transition begins. Active is the pole applied to that source. LEFT puts source on the raw left; RIGHT puts active on the raw left. These names describe interface roles, not a complete World Atlas state and not standard algebraic translation terminology.":
    "حالة المصدر هي القطب المحلي الذي يبدأ منه هذا الانتقال المحدد النوع، والقطب النشط هو القطب المطبَّق على حالة المصدر. يضع LEFT حالة المصدر في موضع المُعامل الأيسر الخام، ويضع RIGHT القطب النشط في ذلك الموضع. تصف هذه الأسماء أدوار الواجهة، لا حالة World Atlas كاملة، ولا مصطلحات الترجمة الجبرية القياسية.",
  "Source-active role placement flow": "مسار وضع دوري حالة المصدر والقطب النشط",
  "raw left = source · raw right = active": "المُعامل الأيسر الخام = حالة المصدر · المُعامل الأيمن الخام = القطب النشط",
  "raw left = active · raw right = source": "المُعامل الأيسر الخام = القطب النشط · المُعامل الأيمن الخام = حالة المصدر",
  "WHY THE PROJECT SPEAKS OF TWO TOWERS": "لماذا يتحدث المشروع عن برجين",
  "PLUS and STAR use the same poles but preserve different algebraic structure.":
    "تستخدم PLUS وSTAR الأقطاب نفسها، لكن كلًا منهما يحفظ بنية جبرية مختلفة.",
  "Tower is project language for the indexed L1–L7 families. It does not mean that every neighboring level embeds into the next one.":
    "البرج مصطلح خاص بالمشروع للعائلات المفهرسة L1–L7، ولا يعني إمكان تضمين كل مستوى في المستوى المجاور التالي له.",
  "PLUS family": "عائلة PLUS",
  "STAR family": "عائلة STAR",
  "PLUS is associative and commutative, P0 is a two-sided identity, and every pole has an inverse. If the named origin is forgotten, affine maps form the larger torsor symmetry group Hol(C_n).":
    "عملية PLUS تجميعية وتبديلية، وP0 عنصر محايد ثنائي الجانب، ولكل قطب معكوس. وإذا أُهمل الأصل المسمّى، كوّنت التطبيقات التآلفية زمرة التناظر الأوسع للفضاء المتجانس الرئيسي Hol(C_n).",
  "STAR is a pointed total magma with a left zero and right-neutral P0. At n≥2 it is noncommutative, nonassociative, and has no affine translation symmetry layer.":
    "STAR ماغما كلية مدبَّبة لها صفر أيسر وP0 محايد من اليمين. وعند n≥2 تكون غير تبديلية وغير تجميعية، ولا تملك طبقة تناظر للترجمات التآلفية.",
  "STANDARD TRANSLATIONS AND RANK · L3 · active P2": "الترجمات القياسية والرتبة · L3 · القطب النشط P2",
  "Fix the active pole and watch which outputs the source can reach.":
    "ثبّت القطب النشط، وراقب المخارج التي تستطيع حالة المصدر بلوغها.",
  "Rank means the number of distinct outputs. The ABI name and the standard algebraic translation name point in opposite directions because the fixed active pole occupies the other operand slot.":
    "تعني الرتبة عدد المخارج المتمايزة. يشير اسم ABI واسم الترجمة الجبرية القياسي إلى اتجاهين متعاكسين، لأن القطب النشط المثبّت يشغل موضع المُعامل الآخر.",
  "standard right translation": "الترجمة اليمنى القياسية",
  "standard left translation": "الترجمة اليسرى القياسية",
  "The reset row collapses two sources to P0, so one output is lost.":
    "يطوي صف إعادة الضبط حالتي مصدر إلى P0، ولذلك يُفقَد مخرج واحد.",
  "A nonzero fixed left pole cycles through every L3 output, so no output is lost.":
    "يدور قطب أيسر ثابت غير صفري عبر جميع مخارج L3، فلا يُفقَد أي مخرج.",
  "Why a PLUS affine shift is not a STAR symmetry": "لماذا لا تكون الإزاحة التآلفية لـ PLUS تناظرًا لـ STAR",
  "The shift moves the distinguished reset point P0. It is valid for the unpointed PLUS torsor but fails the STAR law.":
    "تنقل الإزاحة نقطة إعادة الضبط المميَّزة P0. وهي صحيحة للفضاء المتجانس الرئيسي غير المدبَّب لـ PLUS، لكنها لا تحفظ قانون STAR.",

  "Local L3 carrier witness: direct inspection gives the two pole orbits {P0} and {P1,P2}; averaging fixed poles also gives two.":
    "شاهد الحامل المحلي L3: يعطي الفحص المباشر مداري الأقطاب {P0} و{P1,P2}؛ كما يعطي متوسط الأقطاب الثابتة مدارين.",
  "FROM TWO L3 POLE ORBITS TO 224 TYPED ORBITS": "من مداري أقطاب L3 الاثنين إلى 224 مدارًا محدد النوع",
  "The counted set changes, so the number changes.": "تتغير المجموعة المعدودة، ولذلك يتغير العدد.",
  "The example above acts on three individual poles at L3. The whole-tower count acts on ordered source-active pairs, separately inside every level and every one of the four family fibres.":
    "يؤثر المثال أعلاه في 3 أقطاب منفردة عند L3. أما عدّ البرج كله فيؤثر في أزواج مرتبة من حالة المصدر والقطب النشط، كلٌّ على حدة داخل كل مستوى وكل واحدة من ليفات العائلات الأربع.",
  "Fibrewise orbit ledger from L1 through L7": "سجل المدارات ليفةً ليفة من L1 إلى L7",
  "No orbit crosses a level or typed-family boundary": "لا يتجاوز أي مدار حدود مستوى أو عائلة محددة النوع",
  "Pole orbits": "مدارات الأقطاب",
  "Ordered-pair orbits": "مدارات الأزواج المرتبة",
  "Four-family typed orbits": "المدارات محددة النوع للعائلات الأربع",
  "At L3 specifically there are two pole orbits, five ordered-pair orbits, and therefore twenty typed orbits. The number 18 is only a sum of seven local group orders, not one global 18-element group.":
    "عند L3 تحديدًا يوجد 2 من مدارات الأقطاب، و5 من مدارات الأزواج المرتبة، ومن ثم 20 مدارًا محدد النوع. والعدد 18 ليس إلا مجموع رتب 7 زمر محلية، لا رتبة زمرة عالمية واحدة من 18 عنصرًا.",
  "Whole-tower consistency witness: independent direct pair-orbit traversal and the Burnside fixed-point formula both reconstruct 224 typed orbits.":
    "شاهد اتساق البرج كله: يعيد كل من الاجتياز المباشر المستقل لمدارات الأزواج وصيغة برنسايد للنقاط الثابتة بناء 224 مدارًا محدد النوع.",
  "All acted-on objects reachable from one selected object by allowed symmetries.":
    "جميع الكائنات الخاضعة للفعل التي يمكن بلوغها من كائن مختار واحد بواسطة التناظرات المسموح بها.",
  "The symmetries that leave one selected acted-on object unchanged.":
    "التناظرات التي تُبقي كائنًا مختارًا واحدًا خاضعًا للفعل من دون تغيير.",

  "The direct receipt rejects this same-index candidate. A separate order argument below rules out every nonzero full-algebra embedding L3→L5. The zero homomorphism still exists, so saying ‘no morphism exists’ would be false.":
    "يرفض إيصال التنفيذ المباشر هذا التطبيق المرشح المحافظ على الفهرس. وتستبعد حجة مستقلة تعتمد على رتبة العناصر أدناه كل تضمين غير صفري للجبر الكامل L3→L5. ومع ذلك يظل التشاكل الصفري موجودًا، ولذلك تكون عبارة «لا يوجد تشاكل» خاطئة.",
  "INDEPENDENT EMBEDDING THEOREM · n≥2": "مبرهنة التضمين المستقلة · n≥2",
  "A nonzero embedding A_n→A_m exists exactly when n divides m.":
    "يوجد تضمين غير صفري A_n→A_m إذا وفقط إذا كانت n تقسم m.",
  "PLUS preservation makes the image of the generator determine the entire map.":
    "يجعل حفظ PLUS صورةَ المولِّد تحدد التطبيق كله.",
  "If the map is injective, the image of P1 must retain its exact cyclic order n.":
    "إذا كان التطبيق حقنيًا، وجب أن تحتفظ صورة P1 برتبتها الدورية الدقيقة n.",
  "A cyclic group of order m contains an element of order n exactly when n divides m.":
    "تحتوي زمرة دورية رتبتها m عنصرًا رتبته n إذا وفقط إذا كانت n تقسم m.",
  "Therefore the failure is structural, not merely a defect of the same-index candidate.":
    "لذلك فالفشل بنيوي، وليس مجرد عيب في التطبيق المرشح المحافظ على الفهرس.",
  "Conversely, when n divides m, scaled maps h(P_i)=P_((u·m/n)i mod m) for unit u modulo n provide the nonzero embeddings; the archived replay selects one canonical scaling.":
    "وبالعكس، عندما تقسم n العدد m، تعطي التطبيقات المحجَّمة h(P_i)=P_((u·m/n)i mod m)، حيث u وحدة بترديد n، التضمينات غير الصفرية؛ وتختار إعادة التشغيل المؤرشفة تحجيمًا معياريًا واحدًا.",
  "COMPATIBILITY_ONLY:": "COMPATIBILITY_ONLY: — للتوافق فقط",

  "CURRENT V4 · EXACT REPLAYABLE PIPELINE": "V4 الحالي · مسار دقيق قابل لإعادة التشغيل",
  "Current V4 descriptor arithmetic": "حساب واصفات V4 الحالي",
  "The release counts are derived in this order": "تُشتق أعداد الإصدار بهذا الترتيب",
  Value: "القيمة",
  "Independent arithmetic": "الحساب المستقل",
  "One release coverage quantum across four typed families and the active levels L2–L7.":
    "وحدة تغطية واحدة للإصدار عبر 4 عائلات محددة النوع والمستويات النشطة L2–L7.",
  "The complete committed descriptor universe in the current release.":
    "كون الواصفات الكامل المدرج في التزام الإصدار الحالي.",
  "The subset whose declared kinds are executable in current V4.":
    "المجموعة الجزئية التي تكون أنواعها المعلنة قابلة للتنفيذ في V4 الحالي.",
  "The even- or odd-parity frontier exposed by one of the two accepted source patterns.":
    "الجبهة الزوجية أو الفردية التي يكشفها أحد نمطي المصدر المقبولين.",
  "Match one fixed source pattern": "طابق نمط مصدر ثابتًا واحدًا",
  "Only two exact closed patterns are accepted; arbitrary free text is outside this selector contract.":
    "لا يُقبل إلا نمطان مغلقان ودقيقان؛ ويقع النص الحر الاعتباطي خارج عقد هذا المحدِّد.",
  "Enter the committed universe": "ادخل الكون المدرج في الالتزام",
  "Every candidate must already belong to the finite release commitment.":
    "يجب أن ينتمي كل مرشح سلفًا إلى المجموعة المنتهية المثبتة في التزام الإصدار.",
  "Filter executable kinds": "رشّح الأنواع القابلة للتنفيذ",
  "The executable ontology is limited to FREE_FRAME, JOINT_COMPOSITION, PROBE, and ROUTE.":
    "تقتصر الأنطولوجيا القابلة للتنفيذ على FREE_FRAME وJOINT_COMPOSITION وPROBE وROUTE.",
  "Choose a parity frontier": "اختر جبهة زوجية أو فردية",
  "The recognized source pattern selects one half of the executable enumeration.":
    "يختار نمط المصدر المتعرَّف إليه نصف التعداد القابل للتنفيذ.",
  "Derive a deterministic order": "اشتق ترتيبًا حتميًا",
  "The hash order is replayable; Atlas semantic reads, rank effects, and learning writes are all zero.":
    "ترتيب التجزئة قابل لإعادة التشغيل؛ أما قراءات Atlas الدلالية وتأثيرات الرتبة وكتابات التعلّم فكلها تساوي صفرًا.",
  "Bind a one-shot handle": "اربط مقبضًا أحادي الاستخدام",
  "The selected candidate is bound to one process-local execution contour.":
    "يُربط المرشح المختار بمسار تنفيذ واحد محلي ضمن العملية الحاسوبية.",
  "Execute one bounded action": "نفّذ فعلًا محدودًا واحدًا",
  "Current V4 does not execute the formal multi-step program trees described in the mathematics chapter.":
    "لا ينفذ V4 الحالي أشجار البرامج الشكلية متعددة الخطوات الموصوفة في الفصل الرياضي.",
  "Record the receipt": "سجّل إيصال التنفيذ",
  "The receipt supports bounded replay and accounting; it does not measure external gain or truth.":
    "يدعم إيصال التنفيذ إعادة التشغيل والمحاسبة المحدودتين؛ ولا يقيس مكسبًا خارجيًا ولا حقيقةً.",
  "Source-pattern rule": "قاعدة نمط المصدر",
  "Atlas effects": "تأثيرات Atlas",
  "Membership, one-shot execution, process-local rollback, process-local revocation, and work accounting are recorded within the current scope.":
    "تُسجَّل العضوية والتنفيذ أحادي الاستخدام والتراجع المحلي ضمن العملية والإبطال المحلي ضمن العملية ومحاسبة العمل داخل النطاق الحالي.",
  "COMPATIBILITY HISTORY:": "COMPATIBILITY HISTORY: — سجل التوافق",
  "Current sequencing, rollback, and revocation evidence is process-local; it does not establish durable trust state across restarts.":
    "أدلة التسلسل والتراجع والإبطال الحالية محلية ضمن العملية الحاسوبية؛ ولا تثبت حالة ثقة دائمة عبر عمليات إعادة التشغيل.",
  "The release checks typed admission and receipts, but they do not prove operating-system capability isolation for the Python process.":
    "يفحص الإصدار القبول محدد النوع وإيصالات التنفيذ، لكن هذه الفحوص لا تثبت عزل قدرات نظام التشغيل لعملية Python.",

  "TARGET ARCHITECTURE · NOT CURRENT V4": "البنية المستهدفة · ليست V4 الحالية",
  "The intended learning loop begins only after stronger contracts exist.":
    "لا تبدأ حلقة التعلّم المقصودة إلا بعد وجود عقود أقوى.",
  "Every stage below is architectural intent. It must not be read as a current runtime capability, trained system, external result, or authorized learning claim.":
    "كل مرحلة أدناه مقصد معماري. ويجب ألا تُفهم بوصفها قدرة حالية في وقت التشغيل، أو نظامًا مدرَّبًا، أو نتيجة خارجية، أو ادعاءً مفوَّضًا بالتعلّم.",
  "Accept externally grounded evidence with source custody, not only a bundled finite sample.":
    "اقبل دليلًا مستندًا إلى مرجع خارجي مع حفظ عهدة المصدر، لا مجرد عينة منتهية مضمَّنة.",
  "Typed domain map": "تطبيق مجال محدد النوع",
  "Declare how domain objects and alternatives map into local finite coordinates without assigning universal pole meanings.":
    "صرّح بكيفية إسناد كائنات المجال وبدائله إلى إحداثيات محلية منتهية من دون إسناد معانٍ عالمية للأقطاب.",
  "Persistent World Atlas": "World Atlas مستديم",
  "Maintain explicit objects, events, competing hypotheses, evidence, and local revisions across time.":
    "حافظ عبر الزمن على كائنات وأحداث وفرضيات متنافسة وأدلة ومراجعات محلية صريحة.",
  "Choose the smallest level that retains every task-relevant distinction for the current decision.":
    "اختر أصغر مستوى يحتفظ بكل تمييز ذي صلة بالمهمة من أجل القرار الحالي.",
  "Explicit ProgramIR": "ProgramIR صريح",
  "Compile a bracketed, typed, auditable multi-step program rather than an unstructured action list.":
    "أنشئ برنامجًا ذا أقواس، محدد النوع، قابلًا للتدقيق، ومتعدد الخطوات، بدلًا من قائمة أفعال غير مهيكلة.",
  "Authorized action": "فعل مفوَّض",
  "Require policy, provenance, capability, budget, and rollback contracts before real execution.":
    "اشترط عقودًا للسياسة والمنشأ والقدرة والميزانية والتراجع قبل التنفيذ الحقيقي.",
  "Externally grounded outcome": "نتيجة مستندة إلى مرجع خارجي",
  "Use a preregistered evaluator to measure whether the action helped outside the internal receipt ledger.":
    "استخدم مقيّمًا مسجلًا مسبقًا لقياس ما إذا كان الفعل قد أفاد خارج سجل إيصالات التنفيذ الداخلي.",
  "Local revision and policy update": "مراجعة محلية وتحديث للسياسة",
  "Revise only affected hypotheses and authorize learning only after the evidence and evaluation gates close.":
    "راجع الفرضيات المتأثرة وحدها، ولا تفوّض التعلّم إلا بعد استيفاء بوابات الأدلة والتقييم.",

  "The beginner chapter introduces the main symbols with a reading legend, reconstructs transitions independently from tables and formulas, and keeps the formal model separate from the current runtime and target learning architecture.":
    "يعرّف فصل المبتدئين الرموز الرئيسية بدليل لقراءتها، ويعيد بناء الانتقالات بصورة مستقلة من الجداول والصيغ، ويفصل النموذج الشكلي عن وقت التشغيل الحالي وعن بنية التعلّم المستهدفة.",

  "NEW TO THE MATHEMATICS?": "هل هذه الرياضيات جديدة عليك؟",
  "Build GALO from one three-state example before opening the academic reference.":
    "كوِّن فهمك لـ GALO انطلاقًا من مثال واحد ذي ثلاث حالات قبل فتح المرجع الأكاديمي.",
  "The beginner chapter explains every symbol, reconstructs transitions independently from tables and formulas, and keeps the formal model separate from the current runtime and target learning architecture.":
    "يشرح فصل المبتدئين كل رمز، ويعيد بناء الانتقالات بصورة مستقلة من الجداول والصيغ، ويفصل النموذج الشكلي عن وقت التشغيل الحالي وعن بنية التعلّم المستهدفة.",
  "Open the guided theory": "افتح فصل النظرية الموجَّه",
  "Name the finite states": "سمِّ الحالات المنتهية",
  "A level L_n declares exactly n local labels P0 through P_(n−1).":
    "يُعلن المستوى L_n بالضبط n تسمية محلية من P0 إلى P_(n−1).",
  "Apply one frozen law": "طبّق قانونًا مجمّدًا واحدًا",
  "PLUS performs cyclic addition; STAR adds a precise raw-left P0 reset clause.":
    "تنفّذ PLUS جمعًا دوريًا؛ وتضيف STAR شرطًا دقيقًا لإعادة الضبط عندما يكون P0 في موضع المُعامل الأيسر الخام.",
  "Preserve the input roles": "احتفظ بأدوار المُدخلات",
  "LEFT and RIGHT record how source and active are placed on the table axes.":
    "يسجّل الرمزان LEFT وRIGHT كيفية وضع حالة المصدر والقطب النشط على محوري الجدول.",
  "Stop at the evidence boundary": "توقّف عند حدود الأدلة",
  "A formal target is not yet world meaning, a useful action, a learned policy, or General AI.":
    "لا يمثل الهدف الشكلي بعدُ دلالةً في العالم، ولا فعلًا مفيدًا، ولا سياسةً متعلَّمة، ولا ذكاءً اصطناعيًا عامًا.",
  "ILLUSTRATIVE TARGET RESOLUTION LADDER": "سُلَّم توضيحي لدقة التمييز المستهدفة",
  "Illustrative target resolution ladder": "سُلَّم توضيحي لدقة التمييز المستهدفة",
  "The target architecture proposes choosing only the level needed to preserve a task-relevant distinction.":
    "تقترح البنية المستهدفة اختيار المستوى اللازم فقط للحفاظ على تمييز ذي صلة بالمهمة.",
  "More poles are not automatically better. Current V4 does not prove observation-conditioned level selection.":
    "لا تعني زيادة عدد الأقطاب تحسنًا تلقائيًا. ولا يثبت V4 الحالي اختيار المستوى المشروط بالملاحظة.",
  "2 local states": "2 من الحالات المحلية",
  "3 local states": "3 من الحالات المحلية",
  "4 local states": "4 من الحالات المحلية",
  "5 local states": "5 من الحالات المحلية",
  "6 local states": "6 من الحالات المحلية",
  "7 local states": "7 من الحالات المحلية",
  "Understand GALO step by step": "افهم GALO خطوةً خطوة",
  "Theory · start here": "النظرية · ابدأ هنا",
  "P0 resets to P0, while P1 wraps to P0 because 1+2≡0 (mod 3); two sources therefore share P0 and the image has rank 2.":
    "يُعاد ضبط P0 إلى P0، بينما يلتف P1 إلى P0 لأن 1+2≡0 (mod 3)؛ ولذلك تشترك حالتا مصدر في P0 وتساوي رتبة الصورة 2.",
  "Think of the labelled seats on one small carousel: the carrier is the complete list of seats that exist.":
    "تخيّل المقاعد المرقّمة في دوّامة صغيرة: الحامل هو القائمة الكاملة لكل المقاعد الموجودة.",
  "Q_n={P0,…,P_(n−1)} and |Q_n|=n.": "Q_n={P0,…,P_(n−1)} و|Q_n|=n.",
  "L3: Q_3={P0,P1,P2}; there are exactly three allowed poles.":
    "في L3: ‏Q_3={P0,P1,P2}؛ توجد ثلاثة أقطاب مسموح بها بالضبط.",
  "The level is declared by listing one label for each residue from 0 through n−1, so no extra pole is hidden outside the list.":
    "يُعرَّف المستوى بسرد تسمية واحدة لكل فئة باقية من 0 حتى n−1، لذلك لا يوجد قطب إضافي مخفي خارج القائمة.",
  "A carrier is not the set of everything the agent knows; it is one finite local state set.":
    "الحامل ليس مجموعة كل ما يعرفه الوكيل؛ بل هو مجموعة منتهية واحدة من الحالات المحلية.",
  "L3 row and column headers: P0 | P1 | P2.": "عناوين صفوف وأعمدة L3 هي: P0 | P1 | P2.",
  "|Q_3|=3.": "|Q_3|=3.",
  "A pole is one named seat on the carousel, not the whole carousel and not the passenger sitting there.":
    "القطب مقعد واحد مسمّى على الدوّامة، وليس الدوّامة كلها ولا الراكب الجالس عليه.",
  "P_i∈Q_n with 0≤i<n; calculation identifies P_i with residue i modulo n.":
    "P_i∈Q_n مع 0≤i<n؛ وفي الحساب يمثّل P_i فئة الباقي i بترديد n.",
  "L3: P2 is the label with calculation index 2; one further PLUS step reaches P0.":
    "في L3: ‏P2 هو التسمية ذات الفهرس الحسابي 2؛ وتصل خطوة PLUS إضافية إلى P0.",
  "The label-to-residue correspondence is a bijection, so every pole has one calculation index and every allowed index names one pole.":
    "المقابلة بين التسميات وفئات البواقي تقابلية؛ لذلك لكل قطب فهرس حسابي واحد، وكل فهرس مسموح يسمّي قطبًا واحدًا.",
  "P2 does not universally mean twice as much, better, later, or more intelligent than P1.":
    "لا يعني P2 على نحو عالمي مقدارًا يساوي ضعفي P1، ولا أنه أفضل أو أحدث أو أكثر ذكاءً منه.",
  "L3: row P2 and column P2 are addresses labelled by P2, not measured quantities.":
    "في L3، الصف P2 والعمود P2 عنوانان يحملان التسمية P2، وليسا كميتين مقاستين.",
  "P_(i+kn)=P_i for every integer k.": "P_(i+kn)=P_i لكل عدد صحيح k.",
  "Changing level is like choosing a dial with a different number of marked positions.":
    "تغيير المستوى يشبه اختيار قرص له عدد مختلف من المواضع المعلَّمة.",
  "L_n is the local frame whose carrier is Q_n and whose index arithmetic is modulo n.":
    "L_n هو الإطار المحلي الذي حامله Q_n وحساب فهارسه بترديد n.",
  "L2 has {P0,P1}; L3 has {P0,P1,P2}. P2 exists locally at L3 but not at L2.":
    "يحتوي L2 على {P0,P1}، ويحتوي L3 على {P0,P1,P2}. يوجد P2 محليًا في L3، ولا يوجد في L2.",
  "The subscript n fixes both the number of labels and the modulus used by every operation at that level.":
    "يثبّت الرمز السفلي n عدد التسميات ومعيار الترديد الذي تستخدمه كل عملية في ذلك المستوى.",
  "A larger level gives more distinctions, not automatically more knowledge, accuracy, or intelligence.":
    "يتيح المستوى الأكبر تمييزات أكثر، لكنه لا يعني تلقائيًا معرفة أو دقة أو ذكاءً أكبر.",
  "L2 laws have 2×2 tables; L3 laws have 3×3 tables.": "لقانوني L2 جدولان 2×2، ولقانوني L3 جدولان 3×3.",
  "|Q_n|=n and |Q_n×Q_n|=n².": "|Q_n|=n و|Q_n×Q_n|=n².",
  "It is a deterministic two-slot machine: insert a left state and a right state, then receive one state.":
    "هي آلة حتمية ذات خانتين: أدخل حالة يسرى وحالة يمنى، فتحصل على حالة واحدة.",
  "f:Q_n×Q_n→Q_n is a total function on ordered pairs.": "f:Q_n×Q_n→Q_n دالة كلية على الأزواج المرتبة.",
  "L2 has four inputs: (P0,P0), (P0,P1), (P1,P0), and (P1,P1).":
    "لـL2 أربعة مُدخلات: (P0,P0) و(P0,P1) و(P1,P0) و(P1,P1).",
  "A complete Cayley table contains one cell for every ordered pair and exactly one output in each cell.":
    "يحتوي جدول كايلي الكامل خليةً لكل زوج مرتب، ومخرجًا واحدًا بالضبط في كل خلية.",
  "Binary means two inputs, not a two-element carrier and not a probabilistic yes-or-no answer.":
    "تعني «ثنائية» أن للعملية مُدخلين، لا أن الحامل مكوّن من عنصرين، ولا أنها إجابة احتمالية بنعم أو لا.",
  "A 2×2 table has four filled body cells and no missing input pair.":
    "يحتوي جدول 2×2 على أربع خلايا ممتلئة في متنه، ولا ينقصه أي زوج مُدخلات.",
  "|Q_2×Q_2|=2²=4.": "|Q_2×Q_2|=2²=4.",
  "Modulo arithmetic is clock arithmetic: after the last mark, counting continues from the first mark.":
    "الحساب بترديد n يشبه حساب الساعة: بعد آخر علامة نتابع العد من العلامة الأولى.",
  "i≡j (mod n) exactly when n divides i−j; the remainder is chosen from 0,…,n−1.":
    "i≡j (mod n) بالضبط عندما تقسم n العدد i−j؛ ويُختار الباقي من 0,…,n−1.",
  "L3: 2+2=4 and 4 leaves remainder 1 after division by 3, so P2⊕P2=P1.":
    "في L3: ‏2+2=4، وباقي قسمة 4 على 3 هو 1، لذلك P2⊕P2=P1.",
  "The division algorithm gives one unique remainder between 0 and n−1 for every integer.":
    "تعطي خوارزمية القسمة لكل عدد صحيح باقيًا وحيدًا بين 0 وn−1.",
  "The statement 4≡1 (mod 3) does not claim that the ordinary integers 4 and 1 are equal.":
    "لا تزعم العبارة 4≡1 (mod 3) أن العددين الصحيحين العاديين 4 و1 متساويان.",
  "L3 PLUS: row P2, column P2, cell P1.": "في جدول PLUS لـL3: الصف P2، العمود P2، الخلية P1.",
  "(2+2) mod 3=1.": "(2+2) mod 3=1.",
  "It is the multiplication-table idea applied to any finite two-input rule.":
    "إنه فكرة جدول الضرب مطبَّقة على أي قاعدة منتهية ذات مُدخلين.",
  "The row names the raw-left operand, the column names the raw-right operand, and their intersection is f(row,column).":
    "يسمّي الصف المُعامل الأيسر الخام، ويسمّي العمود المُعامل الأيمن الخام، وتقاطعُهما هو f(row,column).",
  "L3 PLUS: select row P1 and column P2; the intersection is P0.":
    "في PLUS عند L3: اختر الصف P1 والعمود P2؛ فتجد P0 عند التقاطع.",
  "Rows and columns enumerate the full Cartesian product Q_n×Q_n, so the table is another complete representation of the function.":
    "تعدّد الصفوف والأعمدة حاصل الضرب الديكارتي الكامل Q_n×Q_n، لذلك يمثّل الجدول الدالة تمثيلًا كاملًا آخر.",
  "Swapping row and column is harmless only after commutativity has been proved for that operation.":
    "لا يكون تبديل الصف والعمود آمنًا إلا بعد إثبات تبديلية العملية.",
  "row P1 · column P2 → P0.": "row P1 · column P2 → P0.",
  "PLUS_3(P1,P2)=P_((1+2) mod 3)=P0.": "PLUS_3(P1,P2)=P_((1+2) mod 3)=P0.",
  "PLUS rotates a finite dial by the number of steps named by the second pole.":
    "تدير PLUS قرصًا منتهيًا بعدد الخطوات الذي يسمّيه القطب الثاني.",
  "PLUS_n(P_i,P_j)=P_((i+j) mod n); (Q_n,PLUS_n,P0)≅C_n.": "PLUS_n(P_i,P_j)=P_((i+j) mod n)؛ و(Q_n,PLUS_n,P0)≅C_n.",
  "L3: start at P1, move two steps, and wrap around: P1⊕P2=P0.":
    "في L3: ابدأ عند P1، وتحرك خطوتين، ثم التف حول القرص: P1⊕P2=P0.",
  "Addition of residues is closed, associative, and commutative; P0 is the identity and P_(n−i) is the inverse of P_i.":
    "جمع فئات البواقي مغلق وتجميعي وتبديلي؛ وP0 هو العنصر المحايد، وP_(n−i) هو معكوس P_i.",
  "PLUS is a finite cyclic law on labels, not ordinary addition of domain meanings or real quantities.":
    "PLUS قانون دوري منتهٍ على التسميات، وليست جمعًا عاديًا لمعاني المجال أو لكميات حقيقية.",
  "L3 PLUS: row P1, column P2, cell P0; row P2, column P1 gives the same cell value.":
    "في PLUS عند L3: الصف P1 والعمود P2 يعطيان P0؛ والصف P2 والعمود P1 يعطيان قيمة الخلية نفسها.",
  "(1+2) mod 3=0=(2+1) mod 3.": "(1+2) mod 3=0=(2+1) mod 3.",
  "STAR is a dial with a one-sided emergency latch: a raw-left P0 resets before any movement is calculated.":
    "STAR قرص ذو مزلاج طوارئ أحادي الجانب: إذا كان P0 في الموضع الأيسر الخام، تحدث إعادة الضبط قبل حساب أي حركة.",
  "STAR_n(P_i,P_j)=P0 if i=0; otherwise STAR_n(P_i,P_j)=P_((i+j) mod n).":
    "STAR_n(P_i,P_j)=P0 إذا كان i=0؛ وإلا فإن STAR_n(P_i,P_j)=P_((i+j) mod n).",
  "L3: P0★P2=P0, but P2★P0=P2 because only the raw-left input controls reset.":
    "في L3: ‏P0★P2=P0، لكن P2★P0=P2 لأن المُدخل الأيسر الخام وحده يتحكم في إعادة الضبط.",
  "The piecewise definition checks i=0 first; every nonzero row then agrees cell-for-cell with PLUS.":
    "يفحص التعريف التجزيئي الشرط i=0 أولًا؛ ثم يطابق كل صف غير صفري جدول PLUS خليةً بخلية.",
  "A P0 on the right does not trigger reset, and STAR is not commutative for n≥2.":
    "وجود P0 على اليمين لا يفعّل إعادة الضبط، وSTAR ليست تبديلية عندما n≥2.",
  "L3 STAR: the P0 row is P0,P0,P0; the P2 row is P2,P0,P1.": "في STAR عند L3: صف P0 هو P0,P0,P0؛ وصف P2 هو P2,P0,P1.",
  "STAR_3(P0,P2)=P0 while STAR_3(P2,P0)=P_((2+0) mod 3)=P2.":
    "STAR_3(P0,P2)=P0، بينما STAR_3(P2,P0)=P_((2+0) mod 3)=P2.",
  "A left zero is a one-sided stop button: once it is in the left slot, the other input cannot change the output.":
    "الصفر الأيسر زر إيقاف أحادي الجانب: ما إن يوضع في الخانة اليسرى حتى يعجز المُدخل الآخر عن تغيير المخرج.",
  "z is a left zero when z★x=z for every x; for STAR at n≥2, the unique left zero is z=P0.":
    "يكون z صفرًا أيسر عندما z★x=z لكل x؛ وفي STAR عند n≥2 يكون الصفر الأيسر الوحيد هو z=P0.",
  "L3: P0★P0=P0, P0★P1=P0, and P0★P2=P0.": "في L3: ‏P0★P0=P0 وP0★P1=P0 وP0★P2=P0.",
  "The first branch gives P0★x=P0. If z=P_k is nonzero, choose x=P_(n−k): then z★x=P0≠z, so no nonzero pole is a left zero.":
    "يعطي الفرع الأول P0★x=P0. وإذا كان z=P_k غير صفري، فاختر x=P_(n−k)؛ حينها z★x=P0≠z، ولذلك لا يكون أي قطب غير صفري صفرًا أيسر.",
  "Left zero does not mean two-sided zero: P1★P0=P1≠P0.": "الصفر الأيسر لا يعني صفرًا ثنائي الجانب: P1★P0=P1≠P0.",
  "The complete P0 row of every STAR table is constant P0.": "صف P0 الكامل في كل جدول STAR ثابت ويساوي P0.",
  "∀j, STAR_n(P0,P_j)=P0.": "∀j, STAR_n(P0,P_j)=P0.",
  "A right-neutral element is a do-nothing input only when placed in the right slot.":
    "العنصر المحايد من اليمين مُدخل لا يغيّر شيئًا، ولكن فقط عندما يوضع في الخانة اليمنى.",
  "e is right-neutral when x★e=x for every x; for STAR at n≥2, the unique right-neutral element is e=P0.":
    "يكون e محايدًا من اليمين عندما x★e=x لكل x؛ وفي STAR عند n≥2 يكون العنصر المحايد الوحيد من اليمين هو e=P0.",
  "L3: P0★P0=P0, P1★P0=P1, and P2★P0=P2.": "في L3: ‏P0★P0=P0 وP1★P0=P1 وP2★P0=P2.",
  "P_i★P0=P_i for every i. Conversely, if e=P_k were right-neutral, P1★P_k=P1 would force 1+k≡1 (mod n), hence k≡0 and e=P0.":
    "لدينا P_i★P0=P_i لكل i. وبالعكس، لو كان e=P_k محايدًا من اليمين، لفرضت P1★P_k=P1 أن 1+k≡1 (mod n)، ومن ثم k≡0 وe=P0.",
  "Right-neutral does not mean two-sided identity: P0★P1=P0≠P1.":
    "المحايد من اليمين ليس عنصرًا محايدًا ثنائي الجانب: P0★P1=P0≠P1.",
  "The P0 column of the L3 STAR table reads P0,P1,P2 from top to bottom.":
    "يُقرأ عمود P0 في جدول STAR لـL3 من الأعلى إلى الأسفل: P0,P1,P2.",
  "∀i, STAR_n(P_i,P0)=P_i.": "∀i, STAR_n(P_i,P0)=P_i.",
  "The source is the named starting role in a transition, like the person whose position is being updated.":
    "المصدر هو دور البداية المسمّى في الانتقال، مثل الشخص الذي نحدّث موضعه.",
  "source=P_s is a semantic role retained in level:family:source:active even when raw operand order changes.":
    "source=P_s دور دلالي يُحتفظ به في level:family:source:active حتى عندما يتغيّر ترتيب المُعاملين الخام.",
  "L3 with source P0 and active P2: LEFT places P0 in the row; RIGHT places P0 in the column.":
    "في L3، عندما يكون المصدر P0 والقطب النشط P2، يضع LEFT القيمة P0 في الصف، ويضع RIGHT القيمة P0 في العمود.",
  "The canonical record stores source separately from the left and right operand slots.":
    "يخزّن السجل المعياري المصدر منفصلًا عن خانتي المُعامل الأيسر والأيمن.",
  "Source does not always mean raw-left operand; it moves to the raw-right slot in a RIGHT family.":
    "لا يعني المصدر دائمًا المُعامل الأيسر الخام؛ ففي عائلة RIGHT ينتقل إلى خانة المُعامل الأيمن الخام.",
  "LEFT: row=source; RIGHT: column=source.": "LEFT: row=source؛ RIGHT: column=source.",
  "LEFT(P_s,P_a)=F(P_s,P_a); RIGHT(P_s,P_a)=F(P_a,P_s).": "LEFT(P_s,P_a)=F(P_s,P_a)؛ RIGHT(P_s,P_a)=F(P_a,P_s).",
  "The active pole is the second named role, like the instruction applied to the source.":
    "القطب النشط هو الدور المسمّى الثاني، كتعليمة تُطبّق على المصدر.",
  "active=P_a is retained as a semantic role; orientation determines whether it occupies the raw-right or raw-left slot.":
    "active=P_a دور دلالي محفوظ؛ ويحدد الاتجاه ما إذا كان يشغل خانة المُعامل الأيمن الخام أم الأيسر الخام.",
  "L3 with source P0 and active P2: STAR_LEFT resets to P0, while STAR_RIGHT places P2 left and returns P2.":
    "في L3، مع المصدر P0 والقطب النشط P2، تعيد STAR_LEFT الضبط إلى P0، بينما تضع STAR_RIGHT القيمة P2 يسارًا وتعيد P2.",
  "STAR tests the raw-left operand, so moving the active role between axes can change the result without changing the law.":
    "تفحص STAR المُعامل الأيسر الخام؛ لذلك قد يؤدي نقل الدور النشط بين المحورين إلى تغيير النتيجة من دون تغيير القانون.",
  "Active is not automatically an action command or a global World Atlas state; it is one local operand role.":
    "القطب النشط ليس تلقائيًا أمر تنفيذ ولا حالة World Atlas عالمية؛ بل هو دور مُعامل محلي واحد.",
  "STAR_LEFT uses column P2; STAR_RIGHT uses row P2.": "تستخدم STAR_LEFT العمود P2؛ وتستخدم STAR_RIGHT الصف P2.",
  "STAR_LEFT(P0,P2)=P0; STAR_RIGHT(P0,P2)=P2.": "STAR_LEFT(P0,P2)=P0؛ STAR_RIGHT(P0,P2)=P2.",
  "It is a postal address for one transition: removing any address field can send you to a different cell.":
    "هو عنوان بريدي لانتقال واحد: قد يوصلك حذف أي حقل من العنوان إلى خلية مختلفة.",
  "cell_id=L{n}:{family}:P{source}:P{active}; target is computed from the family law and orientation.":
    "cell_id=L{n}:{family}:P{source}:P{active}؛ ويُحسب target من قانون العائلة واتجاهها.",
  "L3:STAR_RIGHT:P0:P2 has raw operands (P2,P0) and target P2.":
    "للسجل L3:STAR_RIGHT:P0:P2 المُعاملان الخام (P2,P0)، وهدفه P2.",
  "Level, family, source, and active together determine one raw ordered pair and therefore one deterministic output.":
    "يحدد المستوى والعائلة والمصدر والقطب النشط معًا زوجًا مرتبًا خامًا واحدًا، ومن ثم مخرجًا حتميًا واحدًا.",
  "Two coordinates that share a target are not the same typed record and do not share provenance automatically.":
    "الإحداثيان اللذان يشتركان في الهدف ليسا السجل محدد النوع نفسه، ولا يشتركان تلقائيًا في المنشأ.",
  "L3 STAR: row P2, column P0 → P2.": "في STAR عند L3: الصف P2، العمود P0 → P2.",
  "STAR_RIGHT(P0,P2)=STAR_3(P2,P0)=P2.": "STAR_RIGHT(P0,P2)=STAR_3(P2,P0)=P2.",
  "Typed catalogue count": "عدد الفهرس محدد النوع",
  "Count an inventory by addresses: input squares first, rule books second, and role labels third.":
    "عُدَّ المخزون بالعناوين: مربعات المُدخلات أولًا، ثم كتابَي القوانين، ثم تسميات الأدوار.",
  "Σ_(n=1)^7 n²=140; 2 laws give 280 raw law cells; 2 orientations give 560 typed coordinates.":
    "Σ_(n=1)^7 n²=140؛ يعطي القانونان وعددهما 2 عدد 280 خلية قانون خام، ويعطي الاتجاهان وعددهما 2 عدد 560 إحداثيًا محدد النوع.",
  "L2 contributes 4·2·2=16 typed coordinates; L3 contributes 9·2·2=36.":
    "يسهم L2 بعدد 4·2·2=16 من الإحداثيات محددة النوع، ويسهم L3 بعدد 9·2·2=36.",
  "At level n there are n choices for source and n for active, independently, for each of four family tags.":
    "في المستوى n توجد n اختيارات للمصدر وn اختيارات للقطب النشط على نحو مستقل، لكل واحدة من علامات العائلات الأربع.",
  "The 560 records are not neurons, concepts, learned skills, meanings, or units of intelligence.":
    "السجلات الـ560 ليست عصبونات أو مفاهيم أو مهارات متعلَّمة أو معاني أو وحدات ذكاء.",
  "Per-level typed totals: 4,16,36,64,100,144,196.": "المجاميع محددة النوع حسب المستوى: 4,16,36,64,100,144,196.",
  "4Σ_(n=1)^7 n²=4·140=560; active L2–L7: 560−4=556.": "4Σ_(n=1)^7 n²=4·140=560؛ المستويات النشطة L2–L7: ‏560−4=556.",
  Rank: "الرتبة",
  "Rank counts how many different destinations a fixed one-input machine can actually reach.":
    "تعدّ الرتبة عدد الوجهات المختلفة التي تستطيع آلة ثابتة ذات مُدخل واحد بلوغها فعليًا.",
  "rank(T)=|Im(T)| for T:Q_n→Q_n obtained by fixing the family and active pole.":
    "rank(T)=|Im(T)| للدالة T:Q_n→Q_n الناتجة من تثبيت العائلة والقطب النشط.",
  "L3, active P2: STAR_LEFT maps P0,P1,P2 to P0,P0,P1, so its image is {P0,P1} and rank=2.":
    "في L3 مع القطب النشط P2، ترسل STAR_LEFT القيم P0,P1,P2 إلى P0,P0,P1؛ لذا صورتها {P0,P1} ورتبتها rank=2.",
  "A finite map's image is found by listing every output once and removing duplicates.":
    "نجد صورة دالة منتهية بسرد كل مخرج مرة ثم حذف القيم المكررة.",
  "This is finite transformation rank, not learned matrix rank; ABI LEFT is the standard right translation when active is fixed.":
    "هذه رتبة تحويل منتهٍ، لا رتبة مصفوفة متعلَّمة؛ وعند تثبيت القطب النشط تكون ABI LEFT هي الترجمة اليمنى القياسية.",
  "Read the fixed P2 column for STAR_LEFT and the fixed P2 row for STAR_RIGHT.":
    "اقرأ عمود P2 الثابت لـSTAR_LEFT وصف P2 الثابت لـSTAR_RIGHT.",
  "rank(STAR_LEFT(_,P2))=2; rank(STAR_RIGHT(_,P2))=3 at L3.":
    "rank(STAR_LEFT(_,P2))=2؛ rank(STAR_RIGHT(_,P2))=3 عند L3.",
  "Reduct and expansion": "البنية المختزلة والتوسعة",
  "The same game board can be studied with one rule book or with both rule books open.":
    "يمكن دراسة لوحة اللعب نفسها بكتاب قانون واحد أو بكتابَي القانونين معًا.",
  "G_n=(Q_n,PLUS_n,P0), S_n=(Q_n,STAR_n,P0), and A_n=(Q_n,PLUS_n,STAR_n,P0).":
    "G_n=(Q_n,PLUS_n,P0) وS_n=(Q_n,STAR_n,P0) وA_n=(Q_n,PLUS_n,STAR_n,P0).",
  "At L2 the carrier {P0,P1} is shared, but PLUS and STAR have different P0 rows and therefore define different reducts.":
    "في L2 يشترك القانونان في الحامل {P0,P1}، لكن لـPLUS وSTAR صفّي P0 مختلفين، ولذلك يعرّفان بنيتين مختزلتين مختلفتين.",
  "A reduct forgets named operations; an expansion names more operations on the same carrier.":
    "تنسى البنية المختزلة بعض العمليات المسمّاة؛ أما التوسعة فتسمّي عمليات أكثر على الحامل نفسه.",
  "Sharing the same set of poles does not make PLUS and STAR the same algebraic structure.":
    "اشتراك PLUS وSTAR في مجموعة الأقطاب نفسها لا يجعلهما البنية الجبرية نفسها.",
  "L2 PLUS P0 row: P0,P1; L2 STAR P0 row: P0,P0.": "صف P0 في PLUS عند L2: ‏P0,P1؛ وصف P0 في STAR عند L2: ‏P0,P0.",
  "signature(G_n)=(2,0); signature(S_n)=(2,0); signature(A_n)=(2,2,0).":
    "signature(G_n)=(2,0)؛ signature(S_n)=(2,0)؛ signature(A_n)=(2,2,0).",
  "Composition is a recipe in which the output of one two-input step becomes an ingredient in the next step.":
    "التركيب وصفة يصبح فيها مخرج خطوة ذات مُدخلين مكوّنًا في الخطوة التالية.",
  "A full binary tree with k leaves has k−1 apply nodes; its C_(k−1) possible shapes are counted by Catalan numbers.":
    "للشجرة الثنائية الكاملة ذات k أوراق عدد k−1 من عقد التطبيق؛ وتعدّ أعداد كاتالان أشكالها الممكنة البالغ عددها C_(k−1).",
  "Three inputs have two trees: (P1★P0)★P1=P2 and P1★(P0★P1)=P1 at L3.":
    "لثلاثة مُدخلات شجرتان: (P1★P0)★P1=P2 وP1★(P0★P1)=P1 عند L3.",
  "Every binary apply joins two existing subexpressions, reducing the number of separate pieces by one.":
    "يربط كل تطبيق ثنائي تعبيرين فرعيين موجودين، فينقص عدد الأجزاء المنفصلة بمقدار واحد.",
  "A list of operands is not a complete STAR program, and the formal tree is not a current V4 multi-step runtime claim.":
    "قائمة المُعاملات ليست برنامج STAR كاملًا، والشجرة الشكلية ليست ادعاءً بأن V4 الحالي ينفّذ برامج متعددة الخطوات.",
  "First tree lookups: P1★P0=P1, then P1★P1=P2; second tree: P0★P1=P0, then P1★P0=P1.":
    "مراجعات الشجرة الأولى: P1★P0=P1 ثم P1★P1=P2؛ والشجرة الثانية: P0★P1=P0 ثم P1★P0=P1.",
  "C_2=(1/3)binom(4,2)=2.": "C_2=(1/3)binom(4,2)=2.",
  "Parentheses are like recipe order: mixing the same ingredients in a different order can change the result.":
    "الأقواس تشبه ترتيب خطوات الوصفة: قد يغيّر مزج المكوّنات نفسها بترتيب مختلف النتيجة.",
  "An operation is nonassociative when some x,y,z satisfy (x★y)★z≠x★(y★z).":
    "تكون العملية غير تجميعية إذا وُجدت x,y,z تحقق (x★y)★z≠x★(y★z).",
  "L3: (P1★P0)★P1=P2, while P1★(P0★P1)=P1.": "في L3: ‏(P1★P0)★P1=P2، بينما P1★(P0★P1)=P1.",
  "One explicit unequal pair of bracketed evaluations is enough to disprove a universal associativity law.":
    "يكفي زوج صريح غير متساوٍ من التقييمات ذات الأقواس لدحض قانون التجميع الكلي.",
  "Commutativity and associativity are different properties; STAR has neither for n≥2.":
    "التبديلية والتجميعية خاصيتان مختلفتان؛ ولا تملك STAR أيًا منهما عندما n≥2.",
  "The four L3 table lookups in the two trees return final cells P2 and P1.":
    "تعيد عمليات البحث الأربع في جدول L3 للشجرتين الخليتين النهائيتين P2 وP1.",
  "P2≠P1 ⇒ STAR_3 is not associative.": "P2≠P1 ⇒ STAR_3 غير تجميعية.",
  "Zero-prefix rule": "قاعدة البادئة الصفرية",
  "In a left-to-right chain, reaching the reset state is like a latch: every later step stays reset.":
    "في سلسلة من اليسار إلى اليمين، يشبه بلوغ حالة إعادة الضبط إغلاق مزلاج: تبقى كل خطوة لاحقة في حالة إعادة الضبط.",
  "A left-associated STAR word follows modular prefix sums until a prefix equals P0; after that point every later value is P0.":
    "تتبع كلمة STAR المجمّعة من اليسار مجاميع البوادئ بترديد n إلى أن تساوي بادئة ما P0؛ وبعد ذلك تكون كل قيمة لاحقة P0.",
  "L5: (P2★P3)★P4=P0★P4=P0, although P2⊕P3⊕P4=P4.": "في L5: ‏(P2★P3)★P4=P0★P4=P0، مع أن P2⊕P3⊕P4=P4.",
  "Before reset, each nonzero left value uses addition; after reset, the left-zero law P0★x=P0 applies inductively.":
    "قبل إعادة الضبط تستخدم كل قيمة يسرى غير صفرية الجمع؛ وبعدها ينطبق قانون الصفر الأيسر P0★x=P0 استقرائيًا.",
  "The final ordinary PLUS sum does not reveal whether an earlier STAR prefix already hit P0.":
    "لا يكشف مجموع PLUS العادي النهائي ما إذا كانت بادئة STAR سابقة قد بلغت P0 بالفعل.",
  "L5 STAR: row P2, column P3 → P0; then row P0, column P4 → P0.":
    "في STAR عند L5: الصف P2 والعمود P3 → P0؛ ثم الصف P0 والعمود P4 → P0.",
  "2+3≡0 (mod 5) ⇒ (P2★P3)★P4=P0.": "2+3≡0 (mod 5) ⇒ (P2★P3)★P4=P0.",
  "Stable subset": "مجموعة جزئية مستقرة",
  "A subset is stable on one side if using one of its members in that slot never sends the result outside the subset.":
    "تكون المجموعة الجزئية مستقرة من أحد الجانبين إذا كان استعمال أي عنصر منها في تلك الخانة لا يرسل النتيجة خارجها.",
  "Right-stable means S★Q_n⊆S; left-stable means Q_n★S⊆S.":
    "الاستقرار من اليمين يعني S★Q_n⊆S؛ والاستقرار من اليسار يعني Q_n★S⊆S.",
  "L3: {P0} is right-stable because P0★x=P0, but not left-stable because P1★P0=P1.":
    "في L3، المجموعة {P0} مستقرة من اليمين لأن P0★x=P0، لكنها ليست مستقرة من اليسار لأن P1★P0=P1.",
  "Every nonzero STAR row cycles through all of Q_n, so a proper nonempty right-stable subset can contain only P0.":
    "يدور كل صف غير صفري في STAR عبر Q_n كلها، لذلك لا يمكن لمجموعة جزئية صحيحة غير خالية مستقرة من اليمين أن تحتوي إلا P0.",
  "These one-sided magma subsets are not automatically ring ideals, and left/right refer to operand slots.":
    "هذه المجموعات الجزئية أحادية الجانب في الماغما ليست تلقائيًا مثاليات حلقية، وتشير اليمين واليسار إلى خانتي المُعاملين.",
  "L3 P0 row stays inside {P0}; the P0 column contains P1 and P2 outside {P0}.":
    "يبقى صف P0 في L3 داخل {P0}؛ ويحتوي عمود P0 على P1 وP2 خارج {P0}.",
  "{P0}★Q_3={P0}, but Q_3★{P0}=Q_3.": "{P0}★Q_3={P0}، لكن Q_3★{P0}=Q_3.",
  Congruence: "علاقة التطابق",
  "A congruence allows labels to be merged only when every operation remains well-defined after the merge.":
    "تسمح علاقة التطابق بدمج التسميات فقط عندما تبقى كل عملية معرَّفة تعريفًا سليمًا بعد الدمج.",
  "An equivalence ∼ is a congruence when it is compatible with every named operation: x∼x' and y∼y' imply F(x,y)∼F(x',y') for each F; use STAR for S_n and both PLUS and STAR for A_n.":
    "يكون التكافؤ ∼ علاقة تطابق عندما يتوافق مع كل عملية مسمّاة: إذا كان x∼x' وy∼y' فإن F(x,y)∼F(x',y') لكل F؛ نستخدم STAR في S_n وكلًا من PLUS وSTAR في A_n.",
  "L3: if P0∼P1, then P0★P1=P0 and P1★P1=P2 force P0∼P2, so all poles merge.":
    "في L3، إذا افترضنا P0∼P1، فإن P0★P1=P0 وP1★P1=P2 يفرضان P0∼P2، فتندمج الأقطاب كلها.",
  "The reset row distinguishes P0 so strongly that any nontrivial identification propagates through compatibility to the universal relation.":
    "يميّز صف إعادة الضبط P0 بقوة، حتى إن أي مطابقة غير تافهة تنتشر عبر شرط التوافق إلى العلاقة الكلية.",
  "An arbitrary grouping of visually similar poles is not automatically a valid quotient.":
    "ليس كل تجميع اعتباطي لأقطاب تبدو متشابهة قسمةً جبرية صالحة تلقائيًا.",
  "Compare the L3 cells (P0,P1)→P0 and (P1,P1)→P2 after assuming P0∼P1.":
    "قارن خليتي L3: ‏(P0,P1)→P0 و(P1,P1)→P2 بعد افتراض P0∼P1.",
  "Con(S_n)={Δ_(Q_n),Q_n×Q_n} for n≥2.": "Con(S_n)={Δ_(Q_n),Q_n×Q_n} عندما n≥2.",
  "Rename every locker and key reversibly; if every instruction still works after renaming, the renaming is an automorphism.":
    "أعِد تسمية كل خزانة ومفتاح على نحو قابل للعكس؛ فإذا ظلت كل تعليمة تعمل بعد إعادة التسمية، فهذه إعادة التسمية تشاكل ذاتي.",
  "A bijection σ:A_n→A_n preserving PLUS, STAR, and P0; σ_u(P_i)=P_((ui) mod n) for u∈U(n).":
    "تقابل σ:A_n→A_n يحفظ PLUS وSTAR وP0؛ ويُعطى بـσ_u(P_i)=P_((ui) mod n) حيث u∈U(n).",
  "L3: u=2 fixes P0 and swaps P1 with P2.": "في L3: تثبّت u=2 القطب P0 وتبدّل P1 مع P2.",
  "A unit u is invertible modulo n, so multiplication by u is a permutation and distributes over modular addition without moving zero.":
    "للوحدة u معكوس بترديد n، لذلك فالضرب في u تبديل، ويتوزع على الجمع بترديد n من دون تحريك الصفر.",
  "A reversible permutation is not enough; it must preserve every declared operation and named constant.":
    "لا يكفي أن يكون التبديل قابلًا للعكس؛ بل يجب أن يحفظ كل عملية معلنة وكل ثابت مسمّى.",
  "L3 PLUS: σ(P1⊕P2)=σ(P0)=P0 and σ(P1)⊕σ(P2)=P2⊕P1=P0.": "في PLUS عند L3: ‏σ(P1⊕P2)=σ(P0)=P0 وσ(P1)⊕σ(P2)=P2⊕P1=P0.",
  "σ_u(F(x,y))=F(σ_u(x),σ_u(y)).": "σ_u(F(x,y))=F(σ_u(x),σ_u(y)).",
  "Group action": "فعل زمري",
  "A group action is a complete set of reversible buttons together with the rule for pressing buttons in sequence.":
    "الفعل الزمري مجموعة كاملة من الأزرار القابلة للعكس، ومعها قاعدة ضغط الأزرار واحدًا بعد الآخر.",
  "An action satisfies 1·x=x and (gh)·x=g·(h·x).": "يحقق الفعل 1·x=x و(gh)·x=g·(h·x).",
  "L3: U(3)={1,2}; button 1 does nothing and button 2 swaps P1,P2. Pressing button 2 twice returns every pole.":
    "في L3: ‏U(3)={1,2}؛ الزر 1 لا يغيّر شيئًا، والزر 2 يبدّل P1,P2. ويعيد ضغط الزر 2 مرتين كل قطب إلى موضعه.",
  "Multiplying unit indices corresponds exactly to composing their multiplication permutations.":
    "يطابق ضرب فهارس الوحدات تمامًا تركيب تبديلاتها الناتجة من الضرب.",
  "One chosen symmetry is a group element, not the whole acting group and not an orbit.":
    "التناظر المختار الواحد عنصر من الزمرة، وليس الزمرة الفاعلة كلها ولا مدارًا.",
  "L3 action rows: u=1 maps 0,1,2 to 0,1,2; u=2 maps them to 0,2,1.":
    "صفا فعل L3: ترسل u=1 القيم 0,1,2 إلى 0,1,2؛ وترسل u=2 القيم نفسها إلى 0,2,1.",
  "σ_2∘σ_2=σ_(4 mod 3)=σ_1=id.": "σ_2∘σ_2=σ_(4 mod 3)=σ_1=id.",
  "An orbit is the list of every place a marker can reach when every allowed symmetry button is tried.":
    "المدار قائمة بكل موضع يمكن أن يصل إليه مؤشر عند تجربة جميع أزرار التناظر المسموح بها.",
  "L3 under U(3): Orb(P0)={P0} and Orb(P1)={P1,P2}.": "في L3 تحت فعل U(3): ‏Orb(P0)={P0} وOrb(P1)={P1,P2}.",
  "Applying every group element produces exactly the reachable images, and the group axioms make reachability an equivalence relation.":
    "يعطي تطبيق كل عنصر زمري الصور الممكن بلوغها بالضبط، وتجعل بديهيات الزمرة قابليةَ البلوغ علاقةَ تكافؤ.",
  "Objects in one orbit are structurally related, not automatically equal in meaning, provenance, evidence, or authority.":
    "الكائنات في المدار نفسه مرتبطة بنيويًا، لكنها ليست تلقائيًا متساوية في المعنى أو المنشأ أو الدليل أو الصلاحية.",
  "Apply u=1 and u=2 to P1: the output list is P1,P2.": "طبّق u=1 وu=2 على P1: قائمة المخرجات هي P1,P2.",
  "Orb(P1)={P_(1·1 mod 3),P_(2·1 mod 3)}={P1,P2}.": "Orb(P1)={P_(1·1 mod 3),P_(2·1 mod 3)}={P1,P2}.",
  "The stabilizer contains exactly the symmetry buttons that leave a chosen marker in its original place.":
    "يحتوي المثبّت بالضبط أزرار التناظر التي تترك المؤشر المختار في موضعه الأصلي.",
  "Stab(x)={g∈G | g·x=x}; |G|=|Orb(x)|·|Stab(x)| for finite actions.":
    "Stab(x)={g∈G | g·x=x}؛ وللأفعال المنتهية |G|=|Orb(x)|·|Stab(x)|.",
  "L3: only u=1 fixes P1, so Stab(P1)={1}; 2=2·1 matches orbit–stabilizer.":
    "في L3، لا تثبّت P1 إلا u=1، لذلك Stab(P1)={1}؛ وتوافق 2=2·1 مبرهنة المدار–المثبّت.",
  "Group elements carrying x to the same orbit point form equal-sized cosets of the stabilizer.":
    "تكوّن عناصر الزمرة التي ترسل x إلى نقطة المدار نفسها مجموعاتَ مشاركة متساوية الحجم للمثبّت.",
  "The stabilizer is a subgroup of transformations, while the orbit is a set of acted-on objects.":
    "المثبّت زمرة جزئية من التحويلات، أما المدار فمجموعة من الكائنات التي يقع عليها الفعل.",
  "L3: u=1 sends P1→P1; u=2 sends P1→P2.": "في L3: ترسل u=1 القيمة P1→P1، وترسل u=2 القيمة P1→P2.",
  "|U(3)|=2=|Orb(P1)|·|Stab(P1)|=2·1.": "|U(3)|=2=|Orb(P1)|·|Stab(P1)|=2·1.",
  "Count symmetry classes by averaging how many objects each symmetry button leaves unmoved.":
    "عُدَّ فئات التناظر بأخذ متوسط عدد الكائنات التي يتركها كل زر تناظر ثابتة.",
  "|X/G|=(1/|G|)Σ_(g∈G)|Fix(g)|.": "|X/G|=(1/|G|)Σ_(g∈G)|Fix(g)|.",
  "L3 poles: identity fixes 3 and the swap fixes only P0, so (3+1)/2=2 orbits.":
    "لأقطاب L3، تثبّت الهوية 3 أقطاب ولا يثبّت التبديل إلا P0، لذلك (3+1)/2=2 من المدارات.",
  "Count pairs (g,x) with g·x=x in two ways: each orbit contributes exactly |G| such pairs.":
    "نعدّ الأزواج (g,x) التي تحقق g·x=x بطريقتين؛ فيسهم كل مدار بعدد |G| من هذه الأزواج بالضبط.",
  "Do not divide the number of objects by |G| unless every orbit happens to have full size.":
    "لا تقسم عدد الكائنات على |G| إلا إذا صادف أن كانت كل المدارات كاملة الحجم.",
  "L3 fixed-pole ledger: id→3, swap→1; direct orbit list: {P0}, {P1,P2}.":
    "سجل الأقطاب الثابتة في L3: ‏id→3، والتبديل→1؛ وقائمة المدارات المباشرة: {P0} و{P1,P2}.",
  "(3+1)/2=2; for ordered pairs, (9+1)/2=5.": "(3+1)/2=2؛ وللأزواج المرتبة (9+1)/2=5.",
  "Affine torsor symmetry": "التناظر الأفيني لفضاء متجانس رئيسي",
  "A marked dial can be relabelled around its fixed origin; an unmarked dial may also be rotated before relabelling.":
    "يمكن إعادة تسمية قرص ذي أصل معلَّم حول أصله الثابت؛ أما القرص غير المعلَّم فيمكن أيضًا تدويره قبل إعادة التسمية.",
  "F_(u,b)(x)=ux+b with u∈U(n); all such maps form Hol(C_n)=C_n⋊U(n).":
    "F_(u,b)(x)=ux+b مع u∈U(n)؛ وتكوّن هذه التطبيقات كلها Hol(C_n)=C_n⋊U(n).",
  "L3 shift T1(x)=x+1 preserves the unpointed affine torsor, but T1(P0★P0)=P1 while T1(P0)★T1(P0)=P2.":
    "إزاحة L3 المسماة T1(x)=x+1 تحفظ الفضاء المتجانس الرئيسي الأفيني غير المعيَّن، لكن T1(P0★P0)=P1 بينما T1(P0)★T1(P0)=P2.",
  "The translation term b moves the named origin; STAR's unique left zero must remain P0, forcing b=0 for a STAR automorphism.":
    "ينقل حد الإزاحة b الأصل المسمّى؛ ويجب أن يبقى الصفر الأيسر الوحيد في STAR هو P0، مما يفرض b=0 على أي تشاكل ذاتي لـSTAR.",
  "Hol(C_n) is not the STAR automorphism group and an affine torsor map need not be a pointed group automorphism.":
    "ليست Hol(C_n) زمرة تشاكلات STAR الذاتية، ولا يلزم أن يكون تطبيق الفضاء المتجانس الرئيسي الأفيني تشاكلًا ذاتيًا لزمرة ذات نقطة معينة.",
  "L3 STAR compares the original cell (P0,P0)→P0 with the shifted cell (P1,P1)→P2.":
    "في STAR عند L3 نقارن الخلية الأصلية (P0,P0)→P0 بالخلية المزاحة (P1,P1)→P2.",
  "T1(P0★P0)=P1≠P2=T1(P0)★T1(P0).": "T1(P0★P0)=P1≠P2=T1(P0)★T1(P0).",
  "Inversion orbit": "مدار الانعكاس الجمعي",
  "Inversion pairs a clockwise difference with the equally long counter-clockwise difference on the dial.":
    "يجمع الانعكاس الجمعي فرقًا باتجاه عقارب الساعة مع الفرق ذي الطول نفسه في الاتجاه المعاكس على القرص.",
  "ι(δ)=−δ mod n and ι²=id; its orbits contain δ and −δ.": "ι(δ)=−δ mod n وι²=id؛ وتحتوي مداراته δ و−δ.",
  "L3 inversion orbits are {0} and {1,2} because −1≡2 (mod 3).":
    "مدارا الانعكاس الجمعي في L3 هما {0} و{1,2} لأن −1≡2 (mod 3).",
  "Applying the minus sign twice returns the original residue, so every orbit has one or two elements.":
    "يعيد تطبيق إشارة السالب مرتين فئة الباقي الأصلية، لذلك يحتوي كل مدار عنصرًا واحدًا أو عنصرين.",
  "These are algebraic orbits of differences, not claims about physical mirrors, time reversal, or causality.":
    "هذه مدارات جبرية للفروق، وليست ادعاءات عن مرايا فيزيائية أو انعكاس الزمن أو السببية.",
  "L3 inversion lookup: 0→0, 1→2, 2→1.": "جدول الانعكاس الجمعي في L3: ‏0→0 و1→2 و2→1.",
  "−(−δ)≡δ (mod n).": "−(−δ)≡δ (mod n).",
  "Quadratic-residue block": "كتلة البواقي التربيعية",
  "Colour nonzero dial marks by whether they are a square; some symmetries keep each colour, while others swap the colours.":
    "لوّن علامات القرص غير الصفرية بحسب كونها مربعات؛ بعض التناظرات يحفظ كل لون، وبعضها يبدّل اللونين.",
  "QR(p)={u² mod p | u∈U(p)} for odd prime p; QR(p) is a subgroup of U(p).":
    "QR(p)={u² mod p | u∈U(p)} للعدد الأولي الفردي p؛ وQR(p) زمرة جزئية من U(p).",
  "L5: QR(5)={1,4} and the other unit block is {2,3}; multiplication by 2 swaps the two blocks.":
    "في L5: ‏QR(5)={1,4} وكتلة الوحدات الأخرى {2,3}؛ والضرب في 2 يبدّل الكتلتين.",
  "Multiplying by a square preserves square/non-square status, while multiplying by a non-square interchanges the two cosets.":
    "يحفظ الضرب في مربع حالةَ كون العنصر مربعًا أو غير مربع، بينما يبدّل الضرب في غير مربع مجموعتَي المشاركة.",
  "The full unit group preserves the unordered partition, but it does not fix each block separately.":
    "تحفظ زمرة الوحدات الكاملة التقسيم غير المرتب، لكنها لا تثبّت كل كتلة على حدة.",
  "L5 under u=2: 1→2 and 4→3, so {1,4}→{2,3}.": "في L5 تحت u=2: ‏1→2 و4→3، ومن ثم {1,4}→{2,3}.",
  "QR(5)={1²,2²,3²,4²} mod 5={1,4}.": "QR(5)={1²,2²,3²,4²} mod 5={1,4}.",
  "CRT boundary": "حد مبرهنة الباقي الصيني (CRT)",
  "A six-position addition dial can be viewed as a two-position dial and a three-position dial together, but STAR's reset watches global zero.":
    "يمكن رؤية قرص جمع ذي ستة مواضع بوصفه قرصًا من موضعين وقرصًا من ثلاثة مواضع معًا، لكن إعادة ضبط STAR تراقب الصفر الكلي.",
  "CRT gives Z/6Z≅Z/2Z×Z/3Z for addition; it is not a coordinatewise STAR isomorphism.":
    "تعطي مبرهنة الباقي الصيني CRT تماثلًا Z/6Z≅Z/2Z×Z/3Z للجمع؛ لكنها لا تعطي تماثل STAR مركّبيًا.",
  "L6: θ(3★1)=θ(4)=(0,1), but θ(3)★_coordθ(1)=(0,0).": "في L6: ‏θ(3★1)=θ(4)=(0,1)، لكن θ(3)★_coordθ(1)=(0,0).",
  "The residue 3 is zero modulo 3 but not globally zero modulo 6, so a coordinatewise reset fires when the original STAR reset does not.":
    "فئة الباقي 3 صفر بترديد 3، لكنها ليست صفرًا كليًا بترديد 6؛ لذلك تنطلق إعادة ضبط مركّبية حين لا تنطلق إعادة ضبط STAR الأصلية.",
  "A decomposition preserving PLUS does not automatically preserve every other operation on the same carrier.":
    "التفكيك الذي يحفظ PLUS لا يحفظ تلقائيًا كل عملية أخرى على الحامل نفسه.",
  "L6 STAR: row P3, column P1 → P4; coordinate STAR resets the modulo-3 component.":
    "في STAR عند L6: الصف P3 والعمود P1 → P4؛ أما STAR المركّبية فتعيد ضبط المركّبة بترديد 3.",
  "θ(3★_6 1)=(0,1)≠(0,0)=θ(3)★_coordθ(1).": "θ(3★_6 1)=(0,1)≠(0,0)=θ(3)★_coordθ(1).",
  Character: "المحرف الزمري",
  "A character labels dial positions by equally spaced arrows on the complex unit circle while respecting addition.":
    "يسمّي المحرف مواضع القرص بسهام متساوية التباعد على دائرة الوحدة العقدية مع احترام الجمع.",
  "A character is a group homomorphism C_n→C×; χ_s(k)=exp(2πisk/n), so χ_s(k+ℓ)=χ_s(k)χ_s(ℓ). It is faithful exactly when gcd(s,n)=1.":
    "المحرف تشاكل زمري C_n→C×؛ وتُعطى χ_s(k)=exp(2πisk/n)، ولذلك χ_s(k+ℓ)=χ_s(k)χ_s(ℓ). ويكون المحرف أمينًا بالضبط عندما gcd(s,n)=1.",
  "L3 with ω=exp(2πi/3): χ_1 maps P0→1, P1→ω, and P2→ω².": "في L3، مع ω=exp(2πi/3)، ترسل χ_1 القيم P0→1 وP1→ω وP2→ω².",
  "The exponential turns addition of angles into multiplication of complex phases.":
    "يحوّل التطبيق الأسي جمع الزوايا إلى ضرب الأطوار العقدية.",
  "P0 maps to complex 1, not complex 0; only unit s gives a faithful label with trivial kernel.":
    "يُرسل P0 إلى العدد العقدي 1، لا إلى العدد العقدي 0؛ ولا يعطي تسمية أمينة ذات نواة تافهة إلا s التي تكون وحدة.",
  "L3 PLUS P1⊕P2=P0 matches ω·ω²=1.": "في PLUS عند L3، توافق P1⊕P2=P0 المعادلة ω·ω²=1.",
  "χ_1(1+2)=exp(2πi)=1=χ_1(1)χ_1(2).": "χ_1(1+2)=exp(2πi)=1=χ_1(1)χ_1(2).",
  "Fibrewise aggregate": "المجموع بحسب الألياف",
  "Count objects inside labelled drawers first; adding drawer totals does not create one giant drawer.":
    "عُدَّ الكائنات داخل الأدراج المسمّاة أولًا؛ جمع مجاميع الأدراج لا يصنع درجًا عملاقًا واحدًا.",
  "Σ|Aut(A_n)|=18 and 4Σ pair_orbits(n)=224, with level and family tags fixed by the action.":
    "Σ|Aut(A_n)|=18 و4Σ pair_orbits(n)=224، مع تثبيت علامتي المستوى والعائلة تحت الفعل.",
  "L3 has 2 pole orbits, 5 ordered-pair orbits, and 4×5=20 typed orbits.":
    "في L3 يوجد 2 من مدارات الأقطاب و5 مدارات للأزواج المرتبة و4×5=20 مدارًا محدد النوع.",
  "The diagonal unit action is computed independently in each level and each of four family fibres before the finite totals are added.":
    "يُحسب فعل الوحدات القطري بصورة مستقلة في كل مستوى وفي كل واحد من ألياف العائلات الأربع قبل جمع المجاميع المنتهية.",
  "Eighteen is not one global group order, and 224 is not the orbit count of a cross-level action.":
    "ثمانية عشر ليست رتبة زمرة عالمية واحدة، والعدد 224 ليس عدد مدارات فعل بين المستويات.",
  "Pair-orbit row L1–L7: 1,4,5,10,7,20,9; sum=56.": "صف مدارات الأزواج من L1 إلى L7: ‏1,4,5,10,7,20,9؛ والمجموع=56.",
  "4×56=224; 1+1+2+2+4+2+6=18.": "4×56=224؛ 1+1+2+2+4+2+6=18.",
  "A homomorphism translates labels between two dials while making every operation commute with the translation.":
    "يترجم التشاكل التسميات بين قرصين مع جعل كل عملية تتوافق مع الترجمة.",
  "f:A_n→A_m is a homomorphism when f(P0)=P0 and f(F_n(x,y))=F_m(f(x),f(y)) for every x,y and each F∈{PLUS,STAR}.":
    "يكون f:A_n→A_m تشاكلًا عندما f(P0)=P0 وf(F_n(x,y))=F_m(f(x),f(y)) لكل x,y ولكل F∈{PLUS,STAR}.",
  "L2→L4 with f(P0)=P0 and f(P1)=P2 preserves P1⊕P1=P0 and P1★P1=P0.":
    "التطبيق L2→L4 الذي يحقق f(P0)=P0 وf(P1)=P2 يحفظ P1⊕P1=P0 وP1★P1=P0.",
  "The preservation equation is checked on every ordered source pair; finite tables make this exhaustive.":
    "يُفحص شرط الحفظ على كل زوج مصدر مرتب؛ وتجعل الجداول المنتهية هذا الفحص شاملًا.",
  "Matching pole names or being injective as a set map does not prove operation preservation.":
    "لا يثبت تطابق أسماء الأقطاب أو حقنية التطبيق بين المجموعات أنه يحفظ العمليات.",
  "L2 cell (P1,P1)→P0 maps to L4 cell (P2,P2)→P0 for both laws.":
    "تُرسل خلية L2 المسماة (P1,P1)→P0 إلى خلية L4 المسماة (P2,P2)→P0 في كلا القانونين.",
  "f(P1⊕_2P1)=P0=P2⊕_4P2.": "f(P1⊕_2P1)=P0=P2⊕_4P2.",
  "It is a translation that collapses every source label onto the target's P0.":
    "هو ترجمة تطوي كل تسمية مصدر على P0 في الهدف.",
  "z_(n,m)(P_i)=P0 for every P_i∈Q_n.": "z_(n,m)(P_i)=P0 لكل P_i∈Q_n.",
  "L3→L5: P0,P1,P2 all map to P0, and both sides of every preservation equation equal P0.":
    "في L3→L5 تُرسل P0,P1,P2 كلها إلى P0، ويساوي طرفا كل معادلة حفظ P0.",
  "PLUS_m(P0,P0)=P0 and STAR_m(P0,P0)=P0, so constant-P0 outputs preserve both operations.":
    "لدينا PLUS_m(P0,P0)=P0 وSTAR_m(P0,P0)=P0، لذلك تحفظ المخرجات الثابتة P0 العمليتين.",
  "Saying no morphism exists from L3 to L5 is false; what fails is every nonzero full-algebra homomorphism.":
    "القول إنه لا يوجد مورفزم من L3 إلى L5 خطأ؛ الذي يفشل هو كل تشاكل غير صفري للجبر الكامل.",
  "Every source table cell maps to target cell (P0,P0)→P0.": "تُرسل كل خلية من جدول المصدر إلى خلية الهدف (P0,P0)→P0.",
  "z(F_n(x,y))=P0=F_m(z(x),z(y)).": "z(F_n(x,y))=P0=F_m(z(x),z(y)).",
  "An embedding places the smaller dial inside the larger one without merging any of its marked positions.":
    "يضع التضمين القرص الأصغر داخل الأكبر من دون دمج أي موضع من مواضعه المعلَّمة.",
  "An embedding is an injective homomorphism; for n≥2, A_n embeds in A_m exactly when n divides m.":
    "التضمين تشاكل حقني؛ وعندما n≥2 يمكن تضمين A_n في A_m بالضبط عندما تقسم n العدد m.",
  "L2→L4 uses P0→P0 and P1→P2; L3→L5 is impossible because 3 does not divide 5.":
    "يستخدم L2→L4 التطبيق P0→P0 وP1→P2؛ ويستحيل L3→L5 لأن 3 لا تقسم 5.",
  "The image of generator P1 must have exact additive order n, and a cyclic group of order m has such an element exactly when n|m.":
    "يجب أن تكون لصورة المولّد P1 رتبة جمعية تساوي n بالضبط؛ ولا تحتوي زمرة دورية رتبتها m عنصرًا بهذه الرتبة إلا عندما n|m.",
  "The same-index candidate P_i→P_i can fail even when labels look compatible; operational transfer needs further authorization.":
    "قد يفشل المرشح ذو الفهرس نفسه P_i→P_i حتى إن بدت التسميات متوافقة؛ ويتطلب النقل التشغيلي تفويضًا إضافيًا.",
  "L3→L5 failure: source PLUS(P1,P2)→P0, target PLUS(P1,P2)→P3.":
    "فشل L3→L5: تُرسل PLUS(P1,P2) في المصدر إلى P0، بينما تُرسل PLUS(P1,P2) في الهدف إلى P3.",
  "h(P_i)=P_((u·m/n)i mod m), u∈U(n), when n|m.": "h(P_i)=P_((u·m/n)i mod m)، حيث u∈U(n)، عندما n|m.",
  "A receipt is like a laboratory log: it records which bounded check ran, on what scope, and what status ended it.":
    "يشبه إيصال التنفيذ سجل المختبر: يدوّن أي فحص محدود جرى، وعلى أي نطاق، وبأي حالة انتهى.",
  "receipt=(check_id,scope,inputs,status,work ledger,terminal witness).":
    "receipt=(check_id,scope,inputs,status,work ledger,terminal witness).",
  "DIRECT_MORPHISM_REPLAY_L2_TO_L4 records mapping, four checked pairs, four families, rc=0, and status=PASS.":
    "يسجّل DIRECT_MORPHISM_REPLAY_L2_TO_L4 التطبيق وأربعة أزواج مفحوصة وأربع عائلات وrc=0 وstatus=PASS.",
  "Machine-readable fields bind a claim to one replayable contour instead of leaving an unscoped success word.":
    "تربط الحقول القابلة للقراءة آليًا الادعاء بمسار واحد قابل لإعادة التشغيل، بدل ترك كلمة نجاح بلا نطاق.",
  "A receipt is not a mathematical theorem, truth certificate, customer outcome, or proof of intelligence.":
    "إيصال التنفيذ ليس مبرهنة رياضية ولا شهادة حقيقة ولا نتيجة عميل ولا برهانًا على الذكاء.",
  "Receipt ledger columns: check_id | scope | expected | got | status.":
    "أعمدة سجل الإيصال: check_id | scope | expected | got | status.",
  "PASS + disclosed scope ≠ proof outside that scope.": "PASS + disclosed scope ≠ إثبات خارج ذلك النطاق.",
  "A boundary is a clearly marked stop sign showing exactly why a stronger conclusion is not allowed.":
    "الحدّ علامة توقف واضحة تبيّن بدقة لماذا لا يُسمح باستنتاج أقوى.",
  "BOUNDARY is a terminal status paired with a missing condition, counterexample, or unavailable contour.":
    "BOUNDARY حالة نهائية مقترنة بشرط مفقود أو مثال مضاد أو مسار غير متاح.",
  "L3→L5 same-index transfer ends at the named level-alignment boundary with the P0≠P3 witness.":
    "ينتهي نقل الفهرس نفسه L3→L5 عند حد محاذاة المستويات المسمّى، مع الشاهد P0≠P3.",
  "An explicit failed preservation equation is sufficient to reject that candidate map without guessing a favourable interpretation.":
    "تكفي معادلة حفظ واحدة فاشلة صراحةً لرفض التطبيق المرشح من دون تخمين تفسير ملائم.",
  "A boundary is not a hidden pass, and an environment block must not be reported as a successful replay.":
    "الحدّ ليس نجاحًا مخفيًا، ولا يجوز الإبلاغ عن عائق بيئي بوصفه إعادة تشغيل ناجحة.",
  "Receipt fields: expected=the divisible-pair tuple; got=[3,5]; the separate preservation counterexample compares P0 with P3.":
    "حقول الإيصال: expected=قائمة أزواج القسمة؛ وgot=[3,5]؛ أما المثال المضاد المنفصل للحفظ فيقارن P0 بـP3.",
  "φ(PLUS_3(P1,P2))=P0≠P3=PLUS_5(φP1,φP2).": "φ(PLUS_3(P1,P2))=P0≠P3=PLUS_5(φP1,φP2).",
  "Formal, current, and target layers": "الطبقات الشكلية والحالية والمستهدفة",
  "Keep the proven blueprint, the machine running today, and the proposed future machine in three labelled folders.":
    "ضع المخطط المثبت والآلة العاملة اليوم والآلة المستقبلية المقترحة في ثلاثة مجلدات مسمّاة.",
  "FORMAL=finite laws; CURRENT V4=bounded deterministic selector; TARGET=unimplemented or unproven World Atlas learning architecture.":
    "FORMAL=قوانين منتهية؛ CURRENT V4=محدِّد حتمي محدود؛ TARGET=بنية تعلّم World Atlas غير منفّذة أو غير مثبتة.",
  "Formal: 560 coordinates. Current: 556 active, 1,204 committed, 880 executable, 440 per pattern. Target: persistent trained Atlas NOT_PRESENT.":
    "شكلي: 560 إحداثيًا. حالي: 556 نشطًا و1,204 ملتزمًا و880 قابلًا للتنفيذ و440 لكل نمط. مستهدف: Atlas مدرَّب مستديم NOT_PRESENT.",
  "Each layer has different objects and evidence, so conclusions are licensed only inside the layer whose contract was checked.":
    "لكل طبقة كائنات وأدلة مختلفة، لذلك لا تُجيز النتائج إلا داخل الطبقة التي فُحص عقدها.",
  "Verified finite tables do not prove persistent learning, external operational gain, a trained Atlas, or General AI.":
    "لا تثبت الجداول المنتهية المتحقَّق منها تعلّمًا مستديمًا أو مكسبًا تشغيليًا خارجيًا أو Atlas مدرَّبًا أو General AI.",
  "Layer ledger: FORMAL | CURRENT V4 | TARGET, with a separate status column.":
    "سجل الطبقات: FORMAL | CURRENT V4 | TARGET، مع عمود مستقل للحالة.",
  "1,204→880→440 is current selector arithmetic; it is not the 560-coordinate formal derivation.":
    "1,204→880→440 حساب المحدِّد الحالي؛ وليس اشتقاق الإحداثيات الشكلية الـ560.",
  "Symbol legend": "دليل الرموز",
  "Mathematical symbols are road signs: learn what each sign asks you to do before trying to read the whole proof.":
    "الرموز الرياضية مثل إشارات الطريق: تعلّم ما تطلبه كل إشارة قبل محاولة قراءة البرهان كله.",
  "∈ means belongs to; ⇒ implies; ⇔ if and only if; ∅ empty set; ∤ does not divide; ⊆ subset; Δ equality relation; ord order; Aut automorphisms; End endomorphisms; Hom homomorphisms; φ Euler totient or a named map by context; gcd greatest common divisor; binom binomial coefficient; ⋊ semidirect product; χ character; exp exponential.":
    "تعني ∈ «ينتمي إلى»؛ وتعني ⇒ «يستلزم»؛ وتعني ⇔ «إذا وفقط إذا»؛ و∅ المجموعة الخالية؛ و∤ لا يقسم؛ و⊆ مجموعة جزئية؛ وΔ علاقة المساواة؛ وord الرتبة؛ وAut التشاكلات الذاتية؛ وEnd التشاكلات الداخلية؛ وHom التشاكلات؛ وتدل φ بحسب السياق على دالة أو على دالة أويلر؛ وgcd القاسم المشترك الأكبر؛ وbinom معامل ثنائي الحدين؛ و⋊ جداء شبه مباشر؛ وχ محرف؛ وexp التطبيق الأسي.",
  "L3: P1∈Q_3 and ord(P1)=3 ⇒ P1 generates Q_3 under PLUS; 3∤5 ⇔ no element of order 3 exists in C_5.":
    "في L3: ‏P1∈Q_3 وord(P1)=3 ⇒ يولّد P1 الحامل Q_3 تحت PLUS؛ و3∤5 ⇔ لا يوجد عنصر رتبته 3 في C_5.",
  "Each symbol has a fixed local grammar, while overloaded letters such as φ receive their meaning from the definition immediately around them.":
    "لكل رمز قواعد استعمال محلية ثابتة، أما الحروف متعددة المعاني مثل φ فيحدد تعريفها المحيط بها مباشرةً معناها.",
  "Do not read ⇒ as equality, ⇔ as one-way implication, ∅ as P0, Δ as a numeric difference, or ⋊ as ordinary multiplication.":
    "لا تقرأ ⇒ كمساواة، ولا ⇔ كاستلزام في اتجاه واحد، ولا ∅ بوصفها P0، ولا Δ بوصفها فرقًا عدديًا، ولا ⋊ بوصفه ضربًا عاديًا.",
  "Legend lookup: symbol | read aloud | meaning in this chapter.":
    "البحث في الدليل: الرمز | قراءته بصوت عالٍ | معناه في هذا الفصل.",
  "n∤m is the negation of n|m; x∈∅ is always false; Δ_X={(x,x)|x∈X}.":
    "n∤m نفي n|m؛ والعبارة x∈∅ خاطئة دائمًا؛ وΔ_X={(x,x)|x∈X}.",
  "Residue class": "فئة الباقي",
  "A residue class is a basket holding all integers that land on the same dial mark.":
    "فئة الباقي سلة تضم كل الأعداد الصحيحة التي تصل إلى العلامة نفسها على القرص.",
  "[i]_n={i+kn | k∈Z}; P_i represents [i]_n in Q_n.": "[i]_n={i+kn | k∈Z}؛ ويمثّل P_i الفئة [i]_n في Q_n.",
  "L3: …,−5,−2,1,4,7,… all belong to [1]_3 and are represented by P1.":
    "في L3، تنتمي …,−5,−2,1,4,7,… كلها إلى [1]_3 ويمثّلها P1.",
  "Two integers land on the same mark exactly when their difference is a multiple of n.":
    "يصل عددان صحيحان إلى العلامة نفسها بالضبط عندما يكون الفرق بينهما مضاعفًا لـn.",
  "A residue class is an infinite set of integers; the selected remainder 0,…,n−1 is only its convenient representative.":
    "فئة الباقي مجموعة لا نهائية من الأعداد الصحيحة؛ أما الباقي المختار من 0,…,n−1 فمجرد ممثّل ملائم لها.",
  "L3 labels choose the representatives 0,1,2 for the three residue classes.":
    "تختار تسميات L3 الممثّلات 0,1,2 لفئات البواقي الثلاث.",
  "[4]_3=[1]_3 because 3|(4−1).": "[4]_3=[1]_3 لأن 3|(4−1).",
  "Signature, arity, and constant": "التوقيع، والأرية، والثابت",
  "A signature is the list of available machine buttons together with the number of input slots on each button.":
    "التوقيع قائمة بأزرار الآلة المتاحة، ومع كل زر عدد خانات مُدخلاته.",
  "arity(PLUS)=2, arity(STAR)=2, arity(P0)=0; the project shorthand for A_n is signature (2,2,0).":
    "arity(PLUS)=2 وarity(STAR)=2 وarity(P0)=0؛ والاختصار المشروعي لتوقيع A_n هو (2,2,0).",
  "At L2, PLUS(P1,P1) uses two inputs, while the symbol P0 names one fixed element and accepts no inputs.":
    "في L2 تستخدم PLUS(P1,P1) مُدخلين، بينما يسمّي الرمز P0 عنصرًا ثابتًا واحدًا ولا يقبل أي مُدخل.",
  "Arity counts argument places syntactically; a named constant is exactly a nullary operation.":
    "تعدّ الأرية مواضع الوسائط في الصياغة؛ والثابت المسمّى هو بالضبط عملية صفرية الأرية.",
  "The tuple (2,2,0) lists arities, not level sizes, tensor dimensions, or learned layer widths.":
    "تسرد الثلاثية (2,2,0) أريات العمليات، لا أحجام المستويات ولا أبعاد الموترات ولا عروض الطبقات المتعلَّمة.",
  "Operation ledger: PLUS | 2; STAR | 2; P0 | 0.": "سجل العمليات: PLUS | 2؛ STAR | 2؛ P0 | 0.",
  "A_n=(Q_n,PLUS_n,STAR_n,P0).": "A_n=(Q_n,PLUS_n,STAR_n,P0).",
  "Magma, semigroup, monoid, and group": "الماغما، ونصف الزمرة، والأحادية، والزمرة",
  "These names are levels of a checklist: each new level keeps every earlier requirement and adds another one.":
    "هذه الأسماء درجات في قائمة تحقق: تحتفظ كل درجة جديدة بكل الشروط السابقة وتضيف شرطًا آخر.",
  "magma=set with a closed total binary operation; semigroup=magma+associativity; monoid=semigroup+two-sided identity; group=monoid in which every element has a two-sided inverse.":
    "magma=مجموعة عليها عملية ثنائية كلية مغلقة؛ semigroup=magma+التجميعية؛ monoid=semigroup+عنصر محايد ثنائي الجانب؛ group=monoid لكل عنصر فيها معكوس ثنائي الجانب.",
  "For n≥2, PLUS is a group; STAR is a magma but fails associativity and therefore cannot be a semigroup, monoid, or group.":
    "عندما n≥2 تكون PLUS زمرة؛ أما STAR فماغما لكنها تفشل في التجميعية، ولذلك لا يمكن أن تكون نصف زمرة أو أحادية أو زمرة.",
  "The hierarchy follows directly from nested definitions, so failing an earlier requirement blocks every stronger class.":
    "يتبع التسلسل الهرمي مباشرةً من التعريفات المتداخلة؛ ومن ثم يمنع فشل شرط مبكر الانتماء إلى كل فئة أقوى.",
  "Having a right-neutral element is not enough for a monoid; the identity must work on both sides and associativity must hold.":
    "وجود عنصر محايد من اليمين لا يكفي لتكوين أحادية؛ يجب أن يعمل العنصر المحايد من الجانبين وأن تتحقق التجميعية.",
  "L3 STAR gives (P1★P0)★P1=P2 but P1★(P0★P1)=P1.": "في STAR عند L3 لدينا (P1★P0)★P1=P2، لكن P1★(P0★P1)=P1.",
  "group ⇒ monoid ⇒ semigroup ⇒ magma; the reverse implications need not hold.":
    "group ⇒ monoid ⇒ semigroup ⇒ magma؛ ولا يلزم أن تصح الاستلزامات العكسية.",
  Closure: "الانغلاق",
  "Closure means the operation never throws you outside the declared game board.":
    "يعني الانغلاق أن العملية لا ترميك أبدًا خارج لوحة اللعب المعلنة.",
  "F is closed on Q_n when F(x,y)∈Q_n for every x,y∈Q_n.": "تكون F مغلقة على Q_n عندما F(x,y)∈Q_n لكل x,y∈Q_n.",
  "L3: PLUS(P2,P2)=P1 and STAR(P0,P2)=P0; both outputs still belong to Q_3.":
    "في L3: ‏PLUS(P2,P2)=P1 وSTAR(P0,P2)=P0؛ وما زال المخرجان ينتميان إلى Q_3.",
  "Modulo n always returns an index 0,…,n−1, and the reset branch returns P0, which is already in Q_n.":
    "يعيد الحساب بترديد n دائمًا فهرسًا من 0,…,n−1، ويعيد فرع إعادة الضبط P0 الموجود أصلًا في Q_n.",
  "Closure does not imply associativity, commutativity, inverses, or meaningful real-world semantics.":
    "لا يستلزم الانغلاق التجميعية أو التبديلية أو المعكوسات أو دلالات مفيدة في العالم الواقعي.",
  "Every body cell of each L3 table contains one of P0,P1,P2 and no outside symbol.":
    "تحتوي كل خلية داخلية في جدولي L3 على واحد من P0,P1,P2، ولا تحتوي رمزًا خارجيًا.",
  "PLUS_n,STAR_n:Q_n×Q_n→Q_n.": "PLUS_n,STAR_n:Q_n×Q_n→Q_n.",
  Associativity: "التجميعية",
  "Associativity asks whether moving parentheses changes the answer while keeping operand order fixed.":
    "تسأل التجميعية هل يغيّر نقل الأقواس النتيجة مع إبقاء ترتيب المُعاملات ثابتًا.",
  "F is associative when F(F(x,y),z)=F(x,F(y,z)) for every x,y,z.":
    "تكون F تجميعية عندما F(F(x,y),z)=F(x,F(y,z)) لكل x,y,z.",
  "L3 PLUS is associative, but STAR fails on x=P1,y=P0,z=P1, producing P2 on the left and P1 on the right.":
    "PLUS تجميعية في L3، لكن STAR تفشل عند x=P1,y=P0,z=P1؛ إذ تعطي P2 في الطرف الأيسر وP1 في الطرف الأيمن.",
  "Residue addition inherits integer associativity; one unequal STAR triple disproves STAR associativity.":
    "يرث جمع فئات البواقي تجميعية الأعداد الصحيحة؛ ويكفي اختلاف ثلاثية واحدة في STAR لدحض تجميعية STAR.",
  "Associativity does not permit reordering operands; that separate permission is commutativity.":
    "لا تسمح التجميعية بإعادة ترتيب المُعاملات؛ ذلك إذن مختلف هو التبديلية.",
  "Replay two table lookups for each side of the L3 STAR counterexample.":
    "أعد عمليتَي بحث في الجدول لكل طرف من المثال المضاد في STAR عند L3.",
  "(i+j)+k≡i+(j+k) (mod n), but (P1★P0)★P1≠P1★(P0★P1).": "(i+j)+k≡i+(j+k) (mod n)، لكن (P1★P0)★P1≠P1★(P0★P1).",
  Commutativity: "التبديلية",
  "Commutativity asks whether swapping the two input seats leaves the result unchanged.":
    "تسأل التبديلية هل يبقى الناتج نفسه عند تبديل مقعدَي المُدخلين.",
  "F is commutative when F(x,y)=F(y,x) for every x,y.": "تكون F تبديلية عندما F(x,y)=F(y,x) لكل x,y.",
  "L3 PLUS(P1,P2)=P0=PLUS(P2,P1), while STAR(P0,P1)=P0≠P1=STAR(P1,P0).":
    "في L3: ‏PLUS(P1,P2)=P0=PLUS(P2,P1)، بينما STAR(P0,P1)=P0≠P1=STAR(P1,P0).",
  "Integer addition is commutative, but STAR's reset condition singles out the raw-left operand.":
    "جمع الأعداد الصحيحة تبديلي، لكن شرط إعادة الضبط في STAR يخص المُعامل الأيسر الخام.",
  "One symmetric-looking cell is not a proof; every reflected pair across the table diagonal must agree.":
    "خلية واحدة تبدو متناظرة ليست برهانًا؛ يجب أن يتساوى كل زوج منعكس حول قطر الجدول.",
  "The PLUS table is symmetric across its diagonal; the STAR table is not for n≥2.":
    "جدول PLUS متناظر حول قطره؛ أما جدول STAR فليس كذلك عندما n≥2.",
  "i+j≡j+i (mod n); STAR_n(P0,P1)≠STAR_n(P1,P0).": "i+j≡j+i (mod n)؛ STAR_n(P0,P1)≠STAR_n(P1,P0).",
  "Identity element": "العنصر المحايد",
  "An identity is a do-nothing input that works from both sides for every element.":
    "العنصر المحايد مُدخل لا يغيّر شيئًا من أي جانب ولكل عنصر.",
  "e is a two-sided identity when e∘x=x=x∘e for every x.": "يكون e عنصرًا محايدًا ثنائي الجانب عندما e∘x=x=x∘e لكل x.",
  "At L3, P0 is the PLUS identity; STAR has P_i★P0=P_i but P0★P1=P0≠P1, so it has no identity.":
    "في L3 يكون P0 عنصر PLUS المحايد؛ وفي STAR لدينا P_i★P0=P_i لكن P0★P1=P0≠P1، لذلك لا يوجد عنصر محايد.",
  "For STAR, a right-neutral candidate e=P_k must satisfy P1★P_k=P1, which forces k≡0 and e=P0; the remaining candidate fails on the left because P0★P1=P0≠P1. Thus no two-sided identity exists for n≥2.":
    "في STAR يجب أن يحقق المرشح المحايد من اليمين e=P_k المعادلة P1★P_k=P1، فتفرض k≡0 وe=P0؛ ثم يفشل المرشح الباقي من اليسار لأن P0★P1=P0≠P1. لذلك لا يوجد عنصر محايد ثنائي الجانب عندما n≥2.",
  "Do not shorten right-neutral to identity, and keep the degenerate L1 exception separate.":
    "لا تختصر «محايد من اليمين» إلى «عنصر محايد»، وافصل حالة L1 المتدهورة.",
  "An identity requires both its row and its column to reproduce the header sequence.":
    "يتطلب العنصر المحايد أن يعيد كل من صفه وعموده تسلسل العناوين.",
  "PLUS_n(P0,P_i)=P_i=PLUS_n(P_i,P0).": "PLUS_n(P0,P_i)=P_i=PLUS_n(P_i,P0).",
  "Inverse and generator": "المعكوس والمولّد",
  "An inverse walks back to the origin; a generator can reach every dial mark by repeated steps.":
    "يعيدك المعكوس إلى الأصل؛ ويستطيع المولّد بلوغ كل علامة على القرص بخطوات متكررة.",
  "In PLUS, P_i^(−1)=P_((n−i) mod n); P_k generates C_n exactly when gcd(k,n)=1.":
    "في PLUS، ‏P_i^(−1)=P_((n−i) mod n)؛ ويولّد P_k الزمرة C_n بالضبط عندما gcd(k,n)=1.",
  "L3: P1 and P2 are inverses because P1⊕P2=P0; repeated P1 visits P0,P1,P2.":
    "في L3، ‏P1 وP2 معكوسان لأن P1⊕P2=P0؛ وتزور تكرارات P1 القيم P0,P1,P2.",
  "The inverse index cancels i modulo n, and a step k visits n/gcd(k,n) distinct residues.":
    "يلغي فهرس المعكوس i بترديد n، وتزور الخطوة k عدد n/gcd(k,n) من فئات البواقي المختلفة.",
  "STAR lacks a two-sided identity for n≥2, so group-style inverses and generators do not transfer unchanged to STAR.":
    "لا تملك STAR عنصرًا محايدًا ثنائي الجانب عندما n≥2، لذلك لا تنتقل معكوسات الزمر ومولداتها بلا تغيير إلى STAR.",
  "L3 PLUS row P1 contains P0 under column P2; powers of P1 cycle through all three poles.":
    "يحتوي صف P1 في PLUS عند L3 على P0 تحت العمود P2؛ وتدور قوى P1 عبر الأقطاب الثلاثة كلها.",
  "i+(n−i)≡0 (mod n); ord(P_k)=n/gcd(k,n).": "i+(n−i)≡0 (mod n)؛ ord(P_k)=n/gcd(k,n).",
  "Standard left and right translation": "الترجمة القياسية اليسرى واليمنى",
  "Fix one operand of a two-input table; a fixed row or column becomes a one-input route through the outputs.":
    "ثبّت مُعاملًا واحدًا في جدول ذي مُدخلين؛ فيصبح صف أو عمود ثابت مسارًا ذا مُدخل واحد عبر المخرجات.",
  "L_a(x)=a★x is the standard left translation; R_a(x)=x★a is the standard right translation.":
    "L_a(x)=a★x هي الترجمة اليسرى القياسية؛ وR_a(x)=x★a هي الترجمة اليمنى القياسية.",
  "L3 with a=P2: L_P2 maps P0,P1,P2 to P2,P0,P1; R_P2 maps them to P0,P0,P1.":
    "في L3 مع a=P2، ترسل L_P2 القيم P0,P1,P2 إلى P2,P0,P1؛ وترسلها R_P2 إلى P0,P0,P1.",
  "The adjective left or right names the slot occupied by the fixed multiplier a.":
    "تسمّي صفة «يسرى» أو «يمنى» الخانة التي يشغلها المضروب الثابت a.",
  "ABI STAR_LEFT(s,a)=s★a is standard R_a; ABI STAR_RIGHT(s,a)=a★s is standard L_a.":
    "ABI STAR_LEFT(s,a)=s★a هي R_a القياسية؛ وABI STAR_RIGHT(s,a)=a★s هي L_a القياسية.",
  "L_a is row a; R_a is column a.": "L_a هو الصف a؛ وR_a هو العمود a.",
  "STAR_LEFT(_,a)=R_a and STAR_RIGHT(_,a)=L_a.": "STAR_LEFT(_,a)=R_a وSTAR_RIGHT(_,a)=L_a.",
  "Image of a function": "صورة الدالة",
  "The image is the set of destinations actually reached, not every destination that was available in principle.":
    "الصورة مجموعة الوجهات التي بُلِغت فعلًا، لا كل وجهة كانت متاحة من حيث المبدأ.",
  "Im(f)={f(x)|x∈X}; rank(f)=|Im(f)| for a finite transformation.":
    "Im(f)={f(x)|x∈X}؛ وللتحويل المنتهي rank(f)=|Im(f)|.",
  "L3 R_P2 has outputs P0,P0,P1, so Im(R_P2)={P0,P1} and rank=2.":
    "لـR_P2 في L3 المخرجات P0,P0,P1؛ لذلك Im(R_P2)={P0,P1} وrank=2.",
  "List all outputs and remove repetitions; the remaining distinct values are exactly the image.":
    "اسرد كل المخرجات واحذف التكرارات؛ فالقيم المتميزة الباقية هي الصورة بالضبط.",
  "Codomain Q_3 has three elements even when the image has only two; image and codomain are not synonyms.":
    "يحتوي المجال المقابل Q_3 ثلاثة عناصر حتى عندما تحتوي الصورة عنصرين فقط؛ فالصورة والمجال المقابل ليسا مترادفين.",
  "Fixed P2 STAR column: P0,P0,P1.": "عمود STAR الثابت P2 هو: P0,P0,P1.",
  "Im(R_P2)={P0,P1}⊂Q_3.": "Im(R_P2)={P0,P1}⊂Q_3.",
  "Function, injection, surjection, and bijection": "الدالة والحقن والشمول والتقابل",
  "A function gives every student one locker; injective forbids sharing, surjective leaves no locker unused, and bijective does both.":
    "تعطي الدالة كل طالب خزانة واحدة؛ ويمنع الحقن المشاركة، ولا يترك الشمول خزانة بلا مستخدم، ويجمع التقابل الشرطين.",
  "function: one output per input; injective: f(x)=f(y)⇒x=y; surjective: Im(f)=Y; bijective: injective and surjective.":
    "function: مخرج واحد لكل مُدخل؛ injective: ‏f(x)=f(y)⇒x=y؛ surjective: ‏Im(f)=Y؛ bijective: حقنية وشمولية معًا.",
  "L2→L4 map P0→P0,P1→P2 is injective but not surjective; L3 multiplication by 2 is bijective.":
    "التطبيق L2→L4 المعرّف بـP0→P0 وP1→P2 حقني لكنه غير شامل؛ والضرب في 2 تقابلي في L3.",
  "The definitions test collisions and coverage separately; on equal finite sets, injective and surjective are equivalent.":
    "تفحص التعريفات التصادمات والتغطية كلًا على حدة؛ وعلى مجموعتين منتهيتين متساويتي الحجم تتكافأ الحقنية والشمولية.",
  "A homomorphism need not be injective, and an injection is not an embedding until operation preservation is proved.":
    "لا يلزم أن يكون التشاكل حقنيًا، وليست الدالة الحقنية تضمينًا حتى يثبت حفظ العمليات.",
  "Mapping ledger L2→L4 uses two distinct targets but leaves P1 and P3 unused.":
    "يستخدم سجل التطبيق L2→L4 هدفين مختلفين، لكنه يترك P1 وP3 بلا استخدام.",
  "injective+surjective⇔bijective.": "injective+surjective⇔bijective.",
  "Divisibility and element order": "القابلية للقسمة ورتبة العنصر",
  "An n-step cycle fits evenly inside an m-step cycle only when m can be split into whole blocks of n steps.":
    "تلائم دورة من n خطوات دورةً من m خطوات بلا كسر فقط عندما يمكن تقسيم m إلى كتل كاملة من n خطوات.",
  "n|m means m=qn for an integer q; ord(x) is the least positive r with r·x=0 in an additive group.":
    "تعني n|m أن m=qn لعدد صحيح q؛ وord(x) أصغر عدد موجب r يحقق r·x=0 في زمرة جمعية.",
  "2|4 and P2∈C_4 has order 2; 3∤5 and no element of C_5 has order 3.":
    "لدينا 2|4 ورتبة P2∈C_4 تساوي 2؛ ولدينا 3∤5 ولا يوجد في C_5 عنصر رتبته 3.",
  "Every element order in a finite group divides the group order; in C_m an element of order n exists exactly when n|m.":
    "تقسم رتبة كل عنصر في زمرة منتهية رتبةَ الزمرة؛ وفي C_m يوجد عنصر رتبته n بالضبط عندما n|m.",
  "The symbol n|m does not mean a fraction, and a same-name pole does not preserve element order across levels.":
    "لا يعني الرمز n|m كسرًا، ولا يحفظ قطب يحمل الاسم نفسه رتبةَ العنصر عبر المستويات.",
  "L4 repeated PLUS of P2: P0→P2→P0; L5 every nonzero pole has order 5.":
    "تكرار PLUS لـP2 في L4: ‏P0→P2→P0؛ وفي L5 رتبة كل قطب غير صفري هي 5.",
  "ord(P_k in C_m)=m/gcd(k,m).": "ord(P_k in C_m)=m/gcd(k,m).",
  "Unit group and Euler totient": "زمرة الوحدات ودالة أويلر",
  "Units are exactly the step sizes that eventually visit every mark instead of getting trapped in a smaller loop.":
    "الوحدات هي بالضبط أحجام الخطوات التي تزور في النهاية كل علامة بدل الوقوع في حلقة أصغر.",
  "U(n)={u mod n | gcd(u,n)=1}; |U(n)|=φ(n).": "U(n)={u mod n | gcd(u,n)=1}؛ و|U(n)|=φ(n).",
  "U(3)={1,2} and φ(3)=2; U(4)={1,3} while step 2 is excluded because gcd(2,4)=2.":
    "U(3)={1,2} وφ(3)=2؛ أما U(4)={1,3} وتُستبعد الخطوة 2 لأن gcd(2,4)=2.",
  "A residue has a multiplicative inverse modulo n exactly when it is coprime to n.":
    "لفئة باقٍ معكوس ضربي بترديد n بالضبط عندما تكون أولية نسبيًا مع n.",
  "U(n) is a multiplicative group of indices, not the carrier Q_n under PLUS.":
    "U(n) زمرة ضرب لفهارس، وليست الحامل Q_n تحت PLUS.",
  "Unit ledger L1–L7 has sizes 1,1,2,2,4,2,6.": "أحجام زمرة الوحدات في سجل L1–L7 هي 1,1,2,2,4,2,6.",
  "u∈U(n)⇔gcd(u,n)=1⇔∃v:uv≡1 (mod n).": "u∈U(n)⇔gcd(u,n)=1⇔∃v:uv≡1 (mod n).",
  "Catalan number and bracket recurrence": "عدد كاتالان وعلاقة الأقواس العودية",
  "Catalan numbers count all ways to split an ordered row of operands into a left subtree and a right subtree.":
    "تعدّ أعداد كاتالان كل طرق تقسيم صف مرتب من المُعاملات إلى شجرة فرعية يسرى وأخرى يمنى.",
  "C_0=1 and C_r=Σ_(i=0)^(r−1) C_i C_(r−1−i); equivalently C_r=(1/(r+1))binom(2r,r).":
    "C_0=1 وC_r=Σ_(i=0)^(r−1) C_i C_(r−1−i)؛ وبصورة مكافئة C_r=(1/(r+1))binom(2r,r).",
  "Three operands use r=2 apply nodes: C_2=C_0C_1+C_1C_0=1+1=2 bracketings.":
    "تستخدم ثلاثة مُعاملات r=2 من عقد التطبيق: C_2=C_0C_1+C_1C_0=1+1=2 من طرق وضع الأقواس.",
  "Choose the root split; left and right subtree shapes are independent, so their counts multiply and all split positions add.":
    "اختر انقسام الجذر؛ فأشكال الشجرتين الفرعيتين اليسرى واليمنى مستقلة، لذلك تتضاعف أعدادها ثم تُجمع مواضع الانقسام كلها.",
  "Catalan counts tree shapes with fixed operand order; it does not count permutations of operands.":
    "تعدّ أعداد كاتالان أشكال الأشجار مع ثبات ترتيب المُعاملات؛ ولا تعدّ تبديلات المُعاملات.",
  "arity 2,3,4,5 → bracketings 1,2,5,14.": "الأرية 2,3,4,5 → أعداد طرق وضع الأقواس 1,2,5,14.",
  "C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5.": "C_3=C_0C_2+C_1C_1+C_2C_0=2+1+2=5.",
  "Equivalence relation and quotient": "علاقة التكافؤ والقسمة",
  "An equivalence relation sorts objects into non-overlapping boxes; a quotient treats each whole box as one new point.":
    "ترتب علاقة التكافؤ الكائنات في صناديق غير متداخلة؛ وتعامل القسمة كل صندوق كامل بوصفه نقطة جديدة واحدة.",
  "∼ is reflexive, symmetric, and transitive; X/∼ is the set of equivalence classes. An algebraic quotient requires ∼ to be a congruence.":
    "العلاقة ∼ انعكاسية وتناظرية ومتعدية؛ وX/∼ مجموعة أصناف التكافؤ. وتتطلب القسمة الجبرية أن تكون ∼ علاقة تطابق.",
  "L3 inversion gives classes {P0} and {P1,P2}, but these orbit classes are not automatically a STAR congruence quotient.":
    "يعطي الانعكاس الجمعي في L3 الصنفين {P0} و{P1,P2}، لكن أصناف المدار هذه ليست تلقائيًا قسمةً بعلاقة تطابق لـSTAR.",
  "The three axioms make every object belong to exactly one class; compatibility is the extra condition that makes operations independent of representatives.":
    "تجعل البديهيات الثلاثة كل كائن ينتمي إلى صنف واحد بالضبط؛ والتوافق هو الشرط الإضافي الذي يجعل العمليات مستقلة عن اختيار الممثّل.",
  "An orbit partition, semantic grouping, and congruence quotient are different constructions until compatibility is proved.":
    "تقسيم المدارات والتجميع الدلالي والقسمة بعلاقة تطابق إنشاءات مختلفة إلى أن يثبت التوافق.",
  "Test representatives P1 and P2 in the STAR table before trying to define an operation on their merged class.":
    "اختبر الممثّلين P1 وP2 في جدول STAR قبل محاولة تعريف عملية على صنفهما المدمج.",
  "[x]★[y]=[x★y] is well-defined only when ∼ is a congruence.":
    "[x]★[y]=[x★y] معرَّفة تعريفًا سليمًا فقط عندما تكون ∼ علاقة تطابق.",
  Endomorphism: "التشاكل الداخلي",
  "An endomorphism is a rule-preserving map that starts and ends on the same structure, even if it collapses states.":
    "التشاكل الداخلي تطبيق يحفظ القواعد ويبدأ وينتهي على البنية نفسها، حتى إن كان يطوي بعض الحالات.",
  "End(A_n)=Hom(A_n,A_n); automorphisms are exactly the bijective endomorphisms.":
    "End(A_n)=Hom(A_n,A_n)؛ والتشاكلات الذاتية هي بالضبط التشاكلات الداخلية التقابلية.",
  "At L3, the zero map and the two unit maps u=1,2 are the three full-algebra endomorphisms.":
    "في L3، التطبيق الصفري وتطبيقا الوحدتين u=1,2 هي التشاكلات الداخلية الثلاثة للجبر الكامل.",
  "Every nonzero full-algebra endomorphism at n≥2 is injective and hence bijective on the finite carrier; the zero map is the only collapsing case.":
    "كل تشاكل داخلي غير صفري للجبر الكامل عند n≥2 حقني، ولذلك هو تقابلي على الحامل المنتهي؛ والتطبيق الصفري هو حالة الطي الوحيدة.",
  "End(A_n) is not the same set as Aut(A_n): the zero endomorphism is not an automorphism when n≥2.":
    "End(A_n) ليست المجموعة نفسها Aut(A_n): التشاكل الداخلي الصفري ليس تشاكلًا ذاتيًا عندما n≥2.",
  "L3 endomorphism ledger: zero | identity | swap P1,P2.":
    "سجل التشاكلات الداخلية في L3: الصفر | الهوية | تبديل P1,P2.",
  "|End(A_3)|=1+|U(3)|=3; |Aut(A_3)|=2.": "|End(A_3)|=1+|U(3)|=3؛ |Aut(A_3)|=2.",
  "Isomorphism versus literal equality": "التماثل مقابل المساواة الحرفية",
  "Two maps can have the same route structure even when their labels and object types are different.":
    "قد يكون لتطبيقين بنية المسارات نفسها مع بقاء تسمياتهما وأنواع كائناتهما مختلفة.",
  "A≅B means a bijective structure-preserving map exists; it does not assert A=B as literal sets or typed objects.":
    "تعني A≅B وجود تطبيق تقابلي حافظ للبنية؛ ولا تزعم أن A=B كمجموعتين أو كائنين محددي النوع حرفيًا.",
  "U(3)={1,2} is canonically isomorphic to Aut(A_3)={id,σ_2} by u↦σ_u.":
    "U(3)={1,2} متماثلة معياريًا مع Aut(A_3)={id,σ_2} بواسطة u↦σ_u.",
  "The correspondence preserves multiplication as composition and has a unique inverse, while residues and permutations remain different kinds of objects.":
    "تحفظ المقابلة الضرب بوصفه تركيبًا ولها معكوس وحيد، بينما تظل فئات البواقي والتبديلات نوعين مختلفين من الكائنات.",
  "Writing U(n)=Aut(A_n) without declaring the identification can conflate indices with functions.":
    "قد تخلط كتابة U(n)=Aut(A_n) من دون إعلان المطابقة بين الفهارس والدوال.",
  "Correspondence table: 1→id; 2→(P1 P2).": "جدول المقابلة: 1→id؛ 2→(P1 P2).",
  "σ_u∘σ_v=σ_(uv mod n).": "σ_u∘σ_v=σ_(uv mod n).",
  "Torsor and holomorph": "الفضاء المتجانس الرئيسي (torsor) والهولومورف",
  "A torsor is a dial whose relative differences remain meaningful even after the absolute zero mark is erased.":
    "الفضاء المتجانس الرئيسي قرص تظل فروقه النسبية ذات معنى حتى بعد محو علامة الصفر المطلق.",
  "The cyclic torsor uses [x,y,z]=x−y+z; its affine symmetries x↦ux+b form Hol(C_n)=C_n⋊U(n).":
    "يستخدم الفضاء المتجانس الرئيسي الدوري [x,y,z]=x−y+z؛ وتكوّن تناظراته الأفينية x↦ux+b زمرة الهولومورف Hol(C_n)=C_n⋊U(n).",
  "L3 shift T1(x)=x+1 preserves [x,y,z] because every b cancels in (x+b)−(y+b)+(z+b).":
    "إزاحة L3 المسماة T1(x)=x+1 تحفظ [x,y,z] لأن كل b تُلغى في (x+b)−(y+b)+(z+b).",
  "Translations change the chosen origin but preserve all relative differences; unit multipliers preserve the cyclic group structure.":
    "تغيّر الترجمات الأصل المختار لكنها تحفظ كل الفروق النسبية؛ وتحفظ مضروبات الوحدات بنية الزمرة الدورية.",
  "A torsor is not a pointed group, and its translation symmetries do not preserve STAR's named reset point.":
    "الفضاء المتجانس الرئيسي ليس زمرة ذات نقطة معينة، وتناظرات ترجمته لا تحفظ نقطة إعادة الضبط المسمّاة في STAR.",
  "Check L3 triples before and after T1; corresponding ternary outputs differ by the same shift.":
    "افحص ثلاثيات L3 قبل T1 وبعدها؛ تختلف المخرجات الثلاثية المتناظرة بالإزاحة نفسها.",
  "[F(x),F(y),F(z)]=u(x−y+z)+b=F([x,y,z]).": "[F(x),F(y),F(z)]=u(x−y+z)+b=F([x,y,z]).",
  "Five L3 ordered-pair orbits": "المدارات الخمسة للأزواج المرتبة في L3",
  "Pair each point of the 3×3 source-active grid with the point obtained by swapping P1 and P2 in both coordinates.":
    "زاوج كل نقطة في شبكة المصدر–النشط 3×3 بالنقطة الناتجة من تبديل P1 وP2 في كلا الإحداثيين.",
  "U(3) acts diagonally by u·(P_s,P_a)=(P_(us),P_(ua)).": "تفعل U(3) قطريًا وفق u·(P_s,P_a)=(P_(us),P_(ua)).",
  "The five orbits are {(P0,P0)}, {(P0,P1),(P0,P2)}, {(P1,P0),(P2,P0)}, {(P1,P1),(P2,P2)}, and {(P1,P2),(P2,P1)}.":
    "المدارات الخمسة هي {(P0,P0)} و{(P0,P1),(P0,P2)} و{(P1,P0),(P2,P0)} و{(P1,P1),(P2,P2)} و{(P1,P2),(P2,P1)}.",
  "Identity fixes all nine pairs; u=2 fixes only (P0,P0), and every other pair is matched with one distinct partner.":
    "تثبّت الهوية الأزواج التسعة كلها؛ ولا تثبّت u=2 إلا (P0,P0)، ويُزاوَج كل زوج آخر مع شريك متميز واحد.",
  "These five pair orbits are not the two pole orbits and not the twenty typed orbits after four family tags are restored.":
    "مدارات الأزواج الخمسة هذه ليست مداري الأقطاب، وليست المدارات محددة النوع العشرين بعد استعادة علامات العائلات الأربع.",
  "Orbit sizes 1+2+2+2+2=9 exhaust the L3 ordered-pair table.":
    "تستنفد أحجام المدارات 1+2+2+2+2=9 جدول الأزواج المرتبة في L3.",
  "Burnside: (9+1)/2=5; typed at L3: 4×5=20.": "Burnside: (9+1)/2=5؛ ومحدد النوع في L3: ‏4×5=20.",
  "Current V4 school replay": "إعادة التشغيل المدرسية لـV4 الحالي",
  "Imagine a sealed card catalogue: recognize one of two exact request cards, discard forbidden card types, choose one parity shelf, sort reproducibly, and use one card once.":
    "تخيّل فهرس بطاقات مختومًا: تعرّف إحدى بطاقتي الطلب الدقيقتين، واستبعد أنواع البطاقات المحظورة، واختر رفًا وفق الزوجية أو الفردية، ورتّب ترتيبًا قابلًا للإعادة، ثم استخدم بطاقة واحدة مرة واحدة.",
  "alpha,beta→LEFT/even; gamma,delta→RIGHT/odd; committed=1,204; executable=880; frontier=440; order=SHA-256(observation,candidate_id,ordinal); arity=2; route_depth=1.":
    "alpha,beta→LEFT/even؛ gamma,delta→RIGHT/odd؛ committed=1,204؛ executable=880؛ frontier=440؛ order=SHA-256(observation,candidate_id,ordinal)؛ arity=2؛ route_depth=1.",
  "For alpha,beta, the selector accepts the fixed pattern, enters 1,204 committed descriptors, keeps 880 of four executable kinds, exposes the 440 even-parity candidates, derives a hash order, binds one process-local handle, executes one bounded action, and records a receipt.":
    "بالنسبة إلى alpha,beta، يقبل المحدِّد النمط الثابت، ويدخل 1,204 واصفة ملتزمًا بها، ويُبقي 880 من أربعة أنواع قابلة للتنفيذ، ويعرض 440 مرشحًا ذا فهرس زوجي، ويشتق ترتيب تجزئة، ويربط مقبضًا واحدًا محليًا ضمن العملية، وينفّذ فعلًا محدودًا واحدًا، ويسجّل إيصال تنفيذ.",
  "The current release contract fixes each filter and count; semantic_reads, rank_effects, and learning_writes are all zero, so Atlas state cannot change the order.":
    "يثبّت عقد الإصدار الحالي كل مرشح وعدد؛ وكل من semantic_reads وrank_effects وlearning_writes يساوي صفرًا، لذلك لا تستطيع حالة Atlas تغيير الترتيب.",
  "A pole is a formal P_i label; a source pattern is one accepted input string; rank is |Im(T)|; ranking is the hash-derived candidate order. The arithmetic shows six 108-descriptor increments, but the reviewed source does not disclose names for six generated strata, so no such names may be invented.":
    "القطب تسمية شكلية P_i؛ ونمط المصدر سلسلة مُدخلات واحدة مقبولة؛ والرتبة rank هي |Im(T)|؛ أما الترتيب ranking فهو ترتيب المرشحين المشتق من التجزئة. يُظهر الحساب ست زيادات من 108 واصفات، لكن المصدر المراجَع لا يكشف أسماء ست طبقات مولَّدة، لذلك لا يجوز اختراع هذه الأسماء.",
  "Replay ledger: fixed pattern | committed 1,204 | executable 880 | parity frontier 440 | one-shot handle | receipt.":
    "سجل إعادة التشغيل: نمط ثابت | committed 1,204 | executable 880 | parity frontier 440 | one-shot handle | receipt.",
  "108=4Σ_(n=2)^7n; 1,204=556+6·108; 880=556+3·108; 440=880/2.":
    "108=4Σ_(n=2)^7n؛ 1,204=556+6·108؛ 880=556+3·108؛ 440=880/2.",
  "x belongs to X": "x ينتمي إلى X",
  "The object x is an element of the set X.": "الكائن x عنصر من المجموعة X.",
  "A implies B": "A تستلزم B",
  "Whenever A is true, B must also be true.": "كلما كانت A صحيحة وجب أن تكون B صحيحة أيضًا.",
  "A if and only if B": "A إذا وفقط إذا B",
  "Both implications A⇒B and B⇒A hold.": "يصح الاستلزامان A⇒B وB⇒A معًا.",
  "the empty set": "المجموعة الخالية",
  "A set containing no elements; it is not the pole P0.": "مجموعة لا تحتوي أي عنصر؛ وليست القطب P0.",
  "n does not divide m": "n لا تقسم m",
  "There is no integer q with m=qn.": "لا يوجد عدد صحيح q يحقق m=qn.",
  "S is a subset of X": "S مجموعة جزئية من X",
  "Every element of S also belongs to X.": "كل عنصر في S ينتمي أيضًا إلى X.",
  "the equality relation on X": "علاقة المساواة على X",
  "The pairs (x,x) and no pairs of distinct elements.": "الأزواج (x,x) وحدها، ولا أزواج لعناصر مختلفة.",
  "the order of x": "رتبة x",
  "The first positive repeat length returning x to the identity.": "أول طول تكرار موجب يعيد x إلى العنصر المحايد.",
  "automorphisms of A": "التشاكلات الذاتية لـA",
  "All bijective structure-preserving self-maps of A.": "كل التطبيقات الذاتية التقابلية الحافظة لبنية A.",
  "endomorphisms of A": "التشاكلات الداخلية لـA",
  "All structure-preserving maps from A to itself.": "كل التطبيقات الحافظة للبنية من A إلى نفسها.",
  "homomorphisms from A to B": "التشاكلات من A إلى B",
  "All declared-structure-preserving maps A→B.": "كل التطبيقات A→B التي تحفظ البنية المعلنة.",
  phi: "فاي",
  "Either a named map or Euler's totient φ(n); the surrounding definition fixes which one.":
    "إما تطبيق مسمّى أو دالة أويلر φ(n)؛ ويحدد التعريف المحيط أيهما المقصود.",
  "greatest common divisor": "القاسم المشترك الأكبر",
  "The largest positive integer dividing both a and b.": "أكبر عدد صحيح موجب يقسم a وb كليهما.",
  "n choose k": "n اختيار k",
  "The number of k-element subsets of an n-element set.": "عدد المجموعات الجزئية ذات k عناصر من مجموعة ذات n عناصر.",
  "semidirect product": "الجداء شبه المباشر",
  "A group built from G and H together with a declared action of H on G.": "زمرة مبنية من G وH مع فعل معلن لـH على G.",
  "character chi sub s": "المحرف خي تحت s",
  "A group homomorphism from the cyclic group to nonzero complex phases.":
    "تشاكل زمري من الزمرة الدورية إلى أطوار عقدية غير صفرية.",
  "the exponential of z": "التطبيق الأسي لـz",
  "Here it produces unit-circle phases such as exp(2πisk/n).": "يُنتج هنا أطوارًا على دائرة الوحدة، مثل exp(2πisk/n).",
  "Intuition / analogy": "الحدس / التشبيه",
  "Exact definition": "التعريف الدقيق",
  "Worked small-level example": "مثال محلول على مستوى صغير",
  "Why it is true": "لماذا هذا صحيح",
  "Common mistake or boundary": "خطأ شائع أو حدّ",
  "Table channel": "قناة الجدول",
  "Open a term for a complete seven-part explanation and two independent checks.":
    "افتح مصطلحًا للحصول على شرح كامل من سبعة أجزاء وفحصين مستقلين.",
  "Every entry moves from analogy to exact definition, works a small example, explains why the claim is true, names a common mistake, and reconciles table and formula channels.":
    "ينتقل كل مدخل من التشبيه إلى التعريف الدقيق، ويحل مثالًا صغيرًا، ويشرح لماذا يصح الادعاء، ويسمّي خطأً شائعًا، ويوفّق بين قناتَي الجدول والصيغة.",
  "School proof notebook": "دفتر براهين مدرسي",
  "SCHOOL PROOF NOTEBOOK": "دفتر البراهين المدرسي",
  "Advanced words become manageable when every claim follows the same seven questions.":
    "تصبح الكلمات المتقدمة قابلة للفهم عندما يتبع كل ادعاء الأسئلة السبعة نفسها.",
  "Open a card in order: start with the analogy, read the exact definition, replay the small example, inspect the reason, reject the common mistake, and make the table and formula agree.":
    "افتح البطاقة بالترتيب: ابدأ بالتشبيه، واقرأ التعريف الدقيق، وأعد المثال الصغير، وافحص السبب، وارفض الخطأ الشائع، واجعل الجدول والصيغة متوافقين.",
  "School symmetry notebook": "دفتر تناظر مدرسي",
  "SCHOOL SYMMETRY NOTEBOOK": "دفتر التناظر المدرسي",
  "Treat a symmetry as a rule-preserving relabelling before counting anything.":
    "عامل التناظر بوصفه إعادة تسمية تحفظ القواعد قبل أن تعدّ أي شيء.",
  "Each card begins with a concrete dial picture, then states the academic definition, works a finite example, proves the claim, marks the interpretation boundary, and reconciles a lookup ledger with a formula.":
    "تبدأ كل بطاقة بصورة ملموسة لقرص، ثم تذكر التعريف الأكاديمي، وتحل مثالًا منتهيًا، وتثبت الادعاء، وتبيّن حدّ التفسير، وتوفّق بين سجل البحث والصيغة.",
};
