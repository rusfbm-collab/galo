import type { TranslationDictionary } from "../translations";

export const academicZh: TranslationDictionary = {
  "Cyclic-group proof": "循环群证明",
  "A PLUS automorphism is determined by the image of its generator P1; exactly the unit residues generate the whole cyclic carrier.":
    "PLUS 自同构由生成元 P1 的像唯一确定；恰好单位剩余类能够生成整个循环载体。",
  "STAR rigidity proof": "STAR 刚性证明",
  "A STAR automorphism fixes the unique left zero P0 and preserves addition through the nonzero rows, so it is the same unit multiplication map.":
    "STAR 自同构固定唯一的左零元 P0，并通过非零行保持加法，因此它正是同一个单位乘法映射。",
  "Canonical group isomorphism": "规范群同构",
  "The groups are canonically isomorphic under this map; writing them as literally equal would conflate residues with permutations.":
    "在此映射下两群规范同构；若写成字面相等，就会混淆剩余类与置换。",
  "Compatibility boundary:": "兼容性边界：",
  "The morphism receipts below belong to the compatibility and audit mathematics. The legacy morphism_v1 module is excluded from the current V4 runtime wheel; these examples are not current API capabilities.":
    "下列态射回执属于兼容性与审计数学。旧版 morphism_v1 模块已被排除在当前 V4 运行轮之外；这些示例并非当前 API 能力。",
  "legacy compatibility code": "旧版兼容性代码",
  "Across ordered pairs L1–L7 there are 70 full-algebra homomorphisms, including 28 embeddings. The compatibility replay lists 16 divisible level pairs and chooses one canonical embedding on each; it does not enumerate every homomorphism.":
    "在 L1–L7 的有序层级对上，共有 70 个完整代数同态，其中 28 个是嵌入。兼容性重放列出 16 个满足整除关系的层级对，并为每一对选择一个规范嵌入；它并未枚举所有同态。",
  "Exact CRT boundary at L6": "L6 上的精确中国剩余定理边界",
  "CRT decomposes cyclic addition, but STAR tests zero globally; a residue that is zero in only one CRT coordinate exposes the failure of coordinatewise preservation.":
    "中国剩余定理分解循环加法，但 STAR 对零作全局判定；仅在一个中国剩余坐标中为零的剩余类揭示了逐坐标保持的失败。",
  "Complete L1–L7 count": "L1–L7 的完整计数",
  "The compatibility replay chooses one canonical embedding on 16 divisible level pairs. Its legacy morphism module is excluded from the current V4 runtime wheel.":
    "兼容性重放在 16 个满足整除关系的层级对上各选择一个规范嵌入。其旧版态射模块已被排除在当前 V4 运行轮之外。",
  Symmetry: "对称性",
  "GALO Symmetry — Automorphisms, Orbits, and Burnside": "GALO 对称性 — 自同构、轨道与伯恩赛德引理",
  "Explore the distinct PLUS and STAR symmetry layers, unit automorphisms, affine boundaries, orbits, stabilizers, Burnside counts, and cross-level homomorphisms.":
    "分别探索 PLUS 与 STAR 的对称层、单位自同构、仿射边界、轨道、稳定子、伯恩赛德计数和跨层同态。",
  "Objects and notation": "对象与记号",
  "Translations and ranks": "平移映射与秩",
  "Stability and congruences": "稳定性与同余关系",
  "OBJECTS AND NOTATION": "对象与记号",
  "One carrier, two reducts, one full finite algebra.": "一个载体集、两个约化结构和一个完整有限代数。",
  "Project labels P_i are residue classes. The word tower is project terminology for the indexed family L1–L7; it is not an ascending chain unless connecting morphisms are specified.":
    "项目标签 P_i 对应剩余类。“塔”是对 L1–L7 指标族的项目术语；若未指定连接同态，它并不是一条递增链。",
  "Carrier correspondence": "载体对应",
  "The bijection sends P_i to the residue class i modulo n and P0 to 0.":
    "该双射把 P_i 送到模 n 的剩余类 i，并把 P0 送到 0。",
  "PLUS reduct": "PLUS 约化结构",
  "This is the cyclic group of order n. P0 is its two-sided neutral element.": "这是 n 阶循环群；P0 是其双侧中性元。",
  "STAR reduct": "STAR 约化结构",
  "This is a pointed finite magma: a set with one total binary operation and a named constant.":
    "这是带指定常元的有限原群：一个配有全定义二元运算和命名常元的集合。",
  "Full expansion": "完整扩张",
  "This finite algebra has signature (2,2,0): two binary operations and one constant.":
    "该有限代数的型为 (2,2,0)：两个二元运算和一个常元。",
  "STAR / POINTED FINITE MAGMA": "STAR / 带指定常元的有限原群",
  "For STAR and n≥2, P0 is the unique left zero and unique right-neutral element. There is no left-neutral element, right zero, or two-sided neutral element: STAR is noncommutative, nonassociative, and neither a group nor a monoid.":
    "对 STAR 而言，当 n≥2 时，P0 是唯一的左零元和唯一的右中性元。不存在左中性元、右零元或双侧中性元：STAR 不可交换、不满足结合律，既不是群也不是幺半群。",
  "all levels": "所有层级",
  "P0 is a two-sided neutral element for PLUS.": "P0 是 PLUS 的双侧中性元。",
  "P0 is neutral only on the right and absorbing only on the left; it is not a two-sided identity or zero.":
    "P0 仅在右侧为中性元、仅在左侧为吸收元；它既不是双侧中性元，也不是双侧零元。",
  "Degenerate exception: on the one-element carrier, P0 is simultaneously a two-sided neutral element and a two-sided zero.":
    "退化例外：在单元素载体上，P0 同时是双侧中性元和双侧零元。",
  "STANDARD TRANSLATIONS AND FINITE RANKS": "标准平移映射与有限秩",
  "A fixed active pole gives a column for LEFT and a row for RIGHT.": "固定活动极后，LEFT 对应一列，RIGHT 对应一行。",
  "Fixing the family and active pole turns source-to-target records into a unary map. ABI LEFT/RIGHT names encode operand placement; they are not the standard names of left and right algebraic translations.":
    "固定族与活动极会把源到目标的记录变成一元映射。ABI 中的 LEFT/RIGHT 编码操作数位置，并不是代数学中左、右平移映射的标准名称。",
  "fixed column · standard right translation": "固定列 · 标准右平移映射",
  "For a=0 this is the identity map; for a≠0 its image is Q_n without P_a.":
    "当 a=0 时它是恒等映射；当 a≠0 时，其像为去掉 P_a 的 Q_n。",
  "fixed row · standard left translation": "固定行 · 标准左平移映射",
  "For a=0 this is the constant P0 map; for a≠0 it is a cyclic bijection.":
    "当 a=0 时它是常值 P0 映射；当 a≠0 时，它是循环双射。",
  "A separate academic symmetry chapter": "独立的学术对称性章节",
  "These are sums of local quantities, not the order of one global group or the orbit count of one global action. The dedicated chapter defines automorphisms, affine actions, orbits, stabilizers, and Burnside's lemma.":
    "这些数是局部量之和，并非某个全局群的阶，也不是某个全局作用的轨道数。独立章节将定义自同构、仿射作用、轨道、稳定子和伯恩赛德引理。",
  "Open the symmetry chapter": "打开对称性章节",
  "Left-associated iteration at L6, a=P2": "L6、a=P2 的左结合迭代",
  "Once a prefix sum reaches P0, every later left-associated STAR product remains P0.":
    "一旦某个前缀和到达 P0，之后所有左结合 STAR 乘积都保持为 P0。",
  "Right-associated iteration at L6, a=P2": "L6、a=P2 的右结合迭代",
  "Right association repeatedly applies a nonzero left translation, so the additive cycle continues through P0.":
    "右结合会反复应用非零左平移映射，因此加法循环会穿过 P0 后继续。",
  "Zero-prefix theorem · L5 witness": "零前缀定理 · L5 例证",
  "The ordinary PLUS sum is P4, but the first zero prefix is captured by the left-associated STAR word.":
    "通常的 PLUS 和为 P4，但左结合 STAR 字会捕获首次出现的零前缀。",
  "STAR REDUCT: STABILITY AND CONGRUENCES": "STAR 约化结构：稳定性与同余关系",
  "One-sided closure is asymmetric; quotient structure is rigid.": "单侧闭合具有非对称性；商结构十分刚性。",
  "These are statements about the STAR reduct S_n. They use standard finite-algebra terminology and do not import ring ideals or ring multiplication.":
    "这些命题针对 STAR 约化结构 S_n，采用有限代数的标准术语，不把环理想或环乘法移植到这里。",
  "Right-stable subsets · n≥2": "右稳定子集 · n≥2",
  "The proper nonempty example is {P0}; it is closed when elements of the subset occupy the left operand.":
    "唯一的真非空例子是 {P0}；当子集元素位于左操作数位置时，它保持闭合。",
  "Left-stable and two-sided · n≥2": "左稳定与双侧稳定 · n≥2",
  "The subset {P0} fails because P1 ★ P0 = P1. There is no proper nonempty left-stable subset.":
    "子集 {P0} 不满足条件，因为 P1 ★ P0=P1。不存在真非空左稳定子集。",
  "Congruences · n≥2": "同余关系 · n≥2",
  "If P0 is identified with one nonzero element, compatibility forces every element into one class. If P0 stays alone, two distinct nonzero elements cannot be identified.":
    "若把 P0 与某个非零元素等同，相容性会迫使所有元素进入同一个类；若 P0 单独成类，则两个不同的非零元素不能被等同。",
  "The L1 exception": "L1 例外",
  "On a one-element carrier the identity and universal congruences coincide, and every subset classification degenerates accordingly.":
    "在单元素载体上，恒等同余与全同余重合，各种子集分类也相应退化。",
  "Canonical nonzero embedding": "典范非零嵌入",
  "canonical nontrivial scaled embeddings": "典范非平凡缩放嵌入",
  "Same-index candidate injection": "同指标候选单射",
  "Zero homomorphism exists between every pair of levels": "任意两个层级之间都存在零同态",
  "Therefore A3→A5 has a homomorphism, but no nonzero homomorphism and no embedding. For n≥2, a nonzero homomorphism A_n→A_m exists exactly when n divides m; every such map is injective. At n=1 the unique zero map is itself an embedding.":
    "因此 A3→A5 存在同态，但不存在非零同态，也不存在嵌入。当 n≥2 时，非零同态 A_n→A_m 当且仅当 n 整除 m 时存在，而且每个此类映射都是单射。当 n=1 时，唯一的零映射本身就是嵌入。",
  "A homomorphism is a mathematical preservation condition; an embedding is an injective homomorphism; a candidate injection is only a set map until preservation is proved. LevelAlignmentReceipt separately records whether an operational transfer is authorized.":
    "同态是数学上的保持条件；嵌入是单射同态；在证明保持性之前，候选单射只是集合映射。LevelAlignmentReceipt 另行记录某次运行迁移是否获准。",
  "Two indexed families": "两个指标族",
  "Symmetry vocabulary": "对称性术语",
  "Orbit and stabilizer lab": "轨道与稳定子实验室",
  "L1–L7 symmetry ledger": "L1–L7 对称性总表",
  "Affine and STAR boundary": "仿射层与 STAR 的边界",
  "Morphism comparison": "态射比较",
  "Interpretation boundaries": "解释边界",
  "ACADEMIC SYMMETRY CHAPTER": "学术对称性章节",
  "Symmetries of the PLUS and STAR families.": "PLUS 与 STAR 族的对称性。",
  "This chapter distinguishes group automorphisms, affine torsor symmetries, STAR automorphisms, orbits, stabilizers, and cross-level homomorphisms. Similar formulas are not treated as the same structure.":
    "本章区分群自同构、挠子的仿射对称性、STAR 自同构、轨道、稳定子和跨层同态；公式相似并不意味着结构相同。",
  "FIBREWISE, NOT GLOBAL": "逐纤维，而非全局",
  "Symmetry chapter navigation": "对称性章节导航",
  "OBJECT TYPES BEFORE SYMMETRIES": "先区分对象类型，再讨论对称性",
  "The same carrier supports different symmetry categories.": "同一载体集可以承载不同的对称性范畴。",
  "The project calls L1–L7 two towers. Academically they are indexed families until bonding maps are declared; divisibility supplies only some nonzero embeddings.":
    "项目把 L1–L7 称为两座“塔”。在学术意义上，在声明连接映射之前，它们只是指标族；整除关系只给出部分非零嵌入。",
  Object: "对象",
  "Preserved data": "保持的数据",
  Automorphisms: "自同构",
  "Additional symmetry layer": "附加对称层",
  "cyclic addition and P0": "循环加法与 P0",
  "STAR and the named point P0": "STAR 与指定点 P0",
  "both operations and P0": "两个运算与 P0",
  "No affine STAR layer": "不存在仿射 STAR 层",
  "Same unit maps; stronger preservation contract": "相同的单位映射；更强的保持契约",
  "STANDARD GROUP-ACTION VOCABULARY": "群作用的标准术语",
  "Automorphism, action, orbit, stabilizer, and Burnside are different notions.":
    "自同构、作用、轨道、稳定子和伯恩赛德引理是不同概念。",
  Automorphism: "自同构",
  "A bijection from a structure to itself that preserves every operation and named constant in the declared signature.":
    "从结构到自身的双射，并保持所声明型中的每个运算与命名常元。",
  "Group action": "群作用",
  "A rule assigning each group element a permutation, with the identity acting trivially and products acting by composition.":
    "给每个群元素指定一个置换的规则；单位元按恒等置换作用，乘积按复合作用。",
  Orbit: "轨道",
  "All points reachable from one point under the whole acting group. An orbit is a subset, not a new state or a probability class.":
    "由整个作用群从一点可达的全部点。轨道是子集，不是新状态，也不是概率类别。",
  Stabilizer: "稳定子",
  "The subgroup of transformations that leave one selected point fixed. Orbit–stabilizer relates local symmetry to orbit size.":
    "保持所选点不动的变换所组成的子群。轨道—稳定子定理把局部对称性与轨道大小联系起来。",
  "Burnside's lemma": "伯恩赛德引理",
  "The number of orbits equals the average number of points fixed by a group element. Here it independently checks pair-orbit enumeration.":
    "轨道数等于群元素固定点数的平均值。这里它独立核验有序对轨道的直接枚举。",
  "INTERACTIVE UNIT-ACTION LAB": "交互式单位群作用实验室",
  "Inspect cycles, orbits, stabilizers, and the Burnside ledger.": "查看循环、轨道、稳定子和伯恩赛德计算账本。",
  "Every result is recomputed from multiplication by units modulo n in this browser.":
    "每个结果都由浏览器依据模 n 的可逆剩余类乘法重新计算。",
  "Symmetry explorer controls": "对称性浏览器控制项",
  "Unit multiplier": "单位乘子",
  "Source pole": "源状态",
  "Active pole": "活动极",
  "Selected automorphism": "所选自同构",
  "Cycle notation lists every pole exactly once; one-cycles are fixed points.":
    "循环记号恰好列出每个极一次；一循环就是不动点。",
  "Carrier orbit": "载体元素轨道",
  "The orbit contains every image of the selected pole under all units, not only the selected unit.":
    "该轨道包含所选极在所有单位作用下的像，而不仅是当前所选单位的像。",
  "Ordered-pair orbit": "有序对轨道",
  "The same multiplier acts diagonally on source and active; level and family remain fixed.":
    "同一个乘子对源状态与活动极作对角作用；层级和族保持不变。",
  "Stabilizer and orbit–stabilizer": "稳定子与轨道—稳定子定理",
  "Group order equals orbit size times stabilizer order for this finite action.":
    "对该有限作用，群的阶等于轨道大小与稳定子阶的乘积。",
  "Burnside ledger for ordered pairs": "有序对的伯恩赛德计算账本",
  "Pair orbits": "有序对轨道",
  "Typed orbits at this level": "本层级的类型化轨道",
  "L1–L7 SYMMETRY LEDGER": "L1–L7 对称性总表",
  "Local groups first; aggregate sums second.": "先看局部群，再看汇总求和。",
  "Pair orbits are computed inside each fixed level. Multiplying by four keeps the action-family tag fixed; no orbit crosses a level or family boundary.":
    "有序对轨道在每个固定层级内计算。乘以四时，各动作族标签保持不变；任何轨道都不会跨越层级或族的边界。",
  "Aggregate automorphism-map count": "自同构映射总数",
  "Eighteen is a sum over seven local groups, not the order of a global automorphism group.":
    "18 是七个局部群阶的总和，不是某个全局自同构群的阶。",
  "Fibrewise typed-orbit count": "逐纤维类型化轨道数",
  "The four family tags stay separate. Direct traversal and Burnside's lemma must return the same total.":
    "四个族标签始终分离；直接遍历与伯恩赛德引理必须得到相同总数。",
  "Independent reconciliation": "独立核对",
  "Equality is a consistency witness for the finite action; it does not authorize semantic merging.":
    "该等式是有限作用的一致性见证，并不授权合并语义。",
  "POINTED AUTOMORPHISMS VS AFFINE TORSOR SYMMETRIES": "指定点自同构与挠子的仿射对称性",
  "Hol(C_n) belongs to the PLUS torsor, not to STAR automorphisms.":
    "Hol(C_n) 属于 PLUS 挠子的对称层，而不属于 STAR 自同构。",
  "Pointed automorphism": "指定点自同构",
  "It preserves PLUS, STAR, and P0 for every unit u.": "对每个单位 u，它都保持 PLUS、STAR 和 P0。",
  "Affine torsor map": "挠子的仿射映射",
  "For b≠0 it does not fix P0, so it is not an automorphism of the pointed cyclic group.":
    "当 b≠0 时它不固定 P0，因此不是指定点循环群的自同构。",
  "Exact STAR failure": "精确的 STAR 反例",
  "The inequality holds for every nonzero residue b, not merely in a generic case.":
    "该不等式对每个非零剩余类 b 都成立，而不只是一般情形。",
  "Inversion orbits, not physical mirrors": "反演轨道，而非物理镜像",
  "These are orbits of the involution on differences; they do not encode time, causality, or spatial reflection.":
    "这些是差值上的对合轨道；它们不编码时间、因果关系或空间反射。",
  "Quadratic-residue nuance": "二次剩余的细节",
  "The quadratic-residue subgroup preserves each block; the full unit group preserves only the unordered two-block partition and may swap its blocks.":
    "二次剩余子群保持每个块；完整单位群只保持无序的两块划分，并可能交换两个块。",
  "Characters and faithful phase labels": "特征标与忠实相位标记",
  "All s define characters of C_n; only unit s give faithful labels. In a phase model P0 maps to complex 1, not complex 0.":
    "每个 s 都定义 C_n 的特征标；只有可逆的 s 给出忠实标记。在相位模型中，P0 映到复数 1，而不是复数 0。",
  "CROSS-LEVEL HOMOMORPHISMS": "跨层同态",
  "PLUS and STAR have different homomorphism counts.": "PLUS 与 STAR 的同态数不同。",
  "Each cell shows PLUS homomorphisms / full-algebra homomorphisms. PLUS has gcd(n,m) maps. For n≥2, the full algebra has the zero map and φ(n) additional embeddings exactly when n divides m; at n=1 the zero map is the unique embedding.":
    "每个单元格显示 PLUS 同态数 / 完整代数同态数。PLUS 有 gcd(n,m) 个映射；当 n≥2 时，完整代数总有零映射，并且恰在 n 整除 m 时另有 φ(n) 个嵌入；当 n=1 时，零映射是唯一的嵌入。",
  Homomorphism: "同态",
  "A map preserving the declared operations and constant. It need not be injective; the zero map is the decisive example.":
    "保持所声明运算与常元的映射。它不必是单射；零映射是关键例子。",
  Embedding: "嵌入",
  "An injective homomorphism. For n≥2, a nonzero A_n→A_m homomorphism is automatically an embedding and exists exactly when n divides m; the L1 zero map is exceptionally injective.":
    "单射同态。当 n≥2 时，非零 A_n→A_m 同态自动成为嵌入，并且当且仅当 n 整除 m 时存在；L1 的零映射是例外的单射。",
  "Operational transfer": "运行迁移",
  "A runtime use that may require provenance, alignment, and loss checks beyond algebraic preservation. A homomorphism alone is not an authorization receipt.":
    "运行时使用除了代数保持性外还可能要求来源、对齐和损失检查；同态本身不是授权回执。",
  "INTERPRETATION FIREWALL": "解释防火墙",
  "Finite algebra does not imply physical or field-theoretic symmetry.": "有限代数并不蕴含物理对称性或域论对称性。",
  "Established here": "本页已确立",
  "Finite cyclic groups, pointed magmas, automorphism groups, and explicit group actions.":
    "有限循环群、带指定常元的原群、自同构群和显式群作用。",
  "Exact local orbit, stabilizer, Burnside, congruence, and homomorphism calculations for L1–L7.":
    "L1–L7 的局部轨道、稳定子、伯恩赛德计数、同余关系和同态的精确计算。",
  "PLUS affine symmetries and their failure to preserve STAR.": "PLUS 的仿射对称性及其不保持 STAR 的反例。",
  "Not implied": "不能由此推出",
  "A root-of-unity phase index is not automatically a Galois group of a field extension.":
    "单位根相位指标不会自动成为某个域扩张的伽罗瓦群。",
  "CRT decomposes the PLUS reduct; STAR's global zero test is not coordinatewise under that decomposition.":
    "中国剩余定理分解 PLUS 约化结构；STAR 的全局零判定在该分解下不是逐坐标的。",
  "Orbit equivalence does not merge provenance, semantics, authority, or real-world verdicts.":
    "轨道等价不会合并来源、语义、权限或现实世界结论。",
  "Return to the formal kernel chapter": "返回形式化内核章节",
  level: "层级",
  "carrier orbits": "载体轨道",
  "pair orbits": "有序对轨道",
  "typed orbits": "类型化轨道",
  "source / target": "源 / 目标",
  embeddings: "个嵌入",
};
