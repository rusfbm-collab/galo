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
};
