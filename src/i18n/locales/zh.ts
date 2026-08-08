import type { TranslationDictionary } from "../translations";
import { mathZh } from "./math";
import { releaseZh } from "./releaseZh";
import { theoryZh } from "./theoryZh";
import { academicZhExtra } from "./academic";
import { comparisonZh } from "./comparison";
import { termsZh } from "./terms";
import { audienceZh } from "./audience";
import { plainZh } from "./plain";
import { termsPageZh } from "./termPages";
import { termAcademicZh } from "./termAcademic";
import { theoryFiguresZh } from "./theoryFigures";
import { orientationZh } from "./orientation";
import { programmeZh } from "./programme";
import { aiBasicsZh } from "./aiBasics";
import { heroArchZh } from "./heroArch";
import { thinkingZh } from "./thinking";
import { visualsZh } from "./visuals";

export const zh: TranslationDictionary = {
  ...mathZh,
  ...releaseZh,
  ...theoryZh,
  ...termsZh,
  ...academicZhExtra,
  ...comparisonZh,
  ...visualsZh,
  ...thinkingZh,
  ...audienceZh,
  ...plainZh,
  ...termsPageZh,
  ...termAcademicZh,
  ...theoryFiguresZh,
  ...orientationZh,
  ...programmeZh,
  ...aiBasicsZh,
  ...heroArchZh,
  Language: "语言",
  "Skip to content": "跳到正文",
  "GALO AI home": "GALO AI 首页",
  "Primary navigation": "主导航",
  "Mobile navigation": "移动端导航",
  "Open navigation": "打开导航",
  "Close navigation": "关闭导航",
  "Footer links": "页脚链接",
  "Request evaluation": "申请技术评估",
  "Why GALO": "为何选择 GALO",
  Architecture: "架构",
  Receipt: "执行回执",
  Evidence: "证据",
  Evaluation: "技术评估",
  Founder: "创始人",
  "Abu Dhabi": "阿布扎比",
  Privacy: "隐私",
  Home: "首页",
  "GALO technical evaluation": "GALO 技术评估申请",
  "Standalone research architecture for explicit world state and bounded, replayable execution.":
    "一套面向显式世界状态以及受限、可重放执行的独立研究架构。",
  "Working bounded prototype. Persistent learning, external operational gain, General AI, commercial traction, and programme selection are not claimed.":
    "可运行的有限范围原型。不声称已实现持续学习、外部运行增益、通用人工智能、商业进展或项目入选。",
  "Founder & Chief Architect": "创始人兼首席架构师",
  "Ruslan originated the GALO multipolar architecture, designed its frozen PLUS/STAR kernel and graph-free World Atlas model, and directed a multi-stage experimental programme across explicit memory, adaptive resolution, local revision, candidate-universe control, and deterministic replay. He established a red-team discipline that requires over-stated claims to be withdrawn or downgraded when stronger controls fail.":
    "Ruslan 提出了 GALO 多极架构，设计了其冻结的 PLUS/STAR 内核和无图 World Atlas 模型，并主导了一个多阶段实验计划，涵盖显式记忆、自适应分辨率、局部修正、候选全集控制和确定性重放。他建立了一套红队式声明约束：当更强控制测试失败时，任何表述过度的声明都必须撤回或降级。",
  "Plans to relocate to Abu Dhabi and build the operating team there if selected.":
    "如获选，计划迁往阿布扎比并在那里组建运营团队。",

  "RESEARCH ARCHITECTURE FOR INSPECTABLE AGENT STATE": "面向可检查智能体状态的研究架构",
  "AI agents need a world state they can inspect, revise, and replay.":
    "AI 智能体需要一种可检查、可修正、可重放的世界状态。",
  "GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed replay. Its current release verifies a finite execution layer; persistent learning and external performance remain unproven.":
    "GALO 是一套面向显式世界状态、类型化执行和回执支撑重放的独立研究架构。当前版本验证了有限执行层；持续学习和外部性能仍未得到证明。",
  "Current project status": "当前项目状态",
  "Working bounded prototype": "可运行的有限范围原型",
  "Pre-seed": "种子前轮",
  "Founder-led": "由创始人主导",
  "Abu Dhabi relocation planned": "计划迁往阿布扎比",
  "Inspect a verified receipt": "检查一份已验证回执",
  "Request a technical evaluation": "申请技术评估",
  "Formal replay within a declared scope. General AI and external capability superiority are not claimed.":
    "在已声明范围内进行形式化重放。不声称实现通用人工智能，也不声称拥有经外部验证的能力优势。",
  "Layered resolution and receipt visual": "分层分辨率与执行回执示意图",
  "WORLD STATE / RESOLUTION": "世界状态 / 分辨率",
  "DECLARED SCOPE": "已声明范围",
  "BOUND HANDLE": "已绑定句柄",
  "WORK LEDGER": "工作账本",
  "Minimum sufficient level selected": "已选择最小充分层级",
  "Receipt chain intact": "回执链完整",
  "Verified current mechanics": "当前已验证机制",
  "Finite universe": "有限全集",
  "1,204 commitments / 756 cells": "1,204 项已提交记录 / 756 个覆盖单元",
  "Bound execution": "受约束执行",
  "Membership proof + one-shot handle": "成员资格证明 + 一次性句柄",
  "Budget law": "预算规则",
  "Bounded action + atomic rollback": "受限动作 + 原子回滚",
  "Receipt ledger": "回执账本",
  "Work reconstructed from receipts": "根据回执重建工作量",

  "THE PROBLEM": "问题",
  "Agentic AI is moving faster than its reasoning state can be governed.":
    "智能体式 AI 的发展速度超过了其推理状态可被治理的速度。",
  "Models can produce increasingly capable outputs, while the authoritative state behind long-running decisions can remain implicit, transient, or difficult to revise locally.":
    "模型可以生成能力越来越强的输出，但长期决策所依据的权威状态仍可能是隐式、短暂的，或难以进行局部修正。",
  "Implicit world state": "隐式世界状态",
  "A system can answer without exposing the durable model behind the answer.":
    "系统可以给出答案，却不暴露该答案背后可持续存在的模型。",
  "Memory drift": "记忆漂移",
  "Prompts, retrieved context, and memory updates can alter behaviour without a discrete, inspectable state transition.":
    "提示词、检索上下文和记忆更新可能改变系统行为，却没有离散且可检查的状态转换。",
  "Premature collapse": "过早收敛",
  "Several plausible explanations can be compressed into one output before evidence warrants a unique decision.":
    "在证据尚不足以支持唯一判断之前，多个合理解释可能已被压缩成单一输出。",
  "Broad correction": "大范围修正",
  "A local counterexample may require a broad prompt, memory, or model change that affects unrelated behaviour.":
    "一个局部反例可能需要修改大范围的提示词、记忆或模型，并影响与该反例无关的行为。",

  ARCHITECTURE: "架构",
  "Separate the verified execution slice from the target world-model loop.":
    "将已验证的执行切片与目标世界模型回路明确分开。",
  "The current release verifies bounded local mechanics within the declared finite scope. The wider architecture specifies how explicit state, local revision, and adaptive search should connect once the open controls are closed.":
    "当前版本在已声明的有限范围内验证了受限的局部机制。更广泛的架构描述了在开放控制项关闭后，显式状态、局部修正与自适应搜索应如何衔接。",
  "Explicit World Atlas": "显式 World Atlas",
  "The architecture specifies objects, events, alternative hypotheses, evidence, and revisions as first-class state. A trained Atlas is not present.":
    "该架构将对象、事件、备选假设、证据和修正定义为一等状态。当前不存在已训练的 Atlas。",
  "Minimal sufficient resolution": "最小充分分辨率",
  "Designed to increase reasoning resolution only when a lower-dimensional representation loses a task-relevant distinction.":
    "其设计目标是：只有当低维表示丢失与任务相关的差异时，才提高推理分辨率。",
  "Localized revision": "局部修正",
  "Designed so a counterexample can invalidate an affected map or assumption without forcing a global reset.":
    "其设计目标是让反例只使受影响的映射或假设失效，而不必强制进行全局重置。",
  "Typed execution": "类型化执行",
  "The current bounded slice admits actions through typed contracts and records their execution through receipts.":
    "当前受限切片通过类型化契约准入动作，并用回执记录其执行。",
  "Constitutional verification": "宪制式验证",
  "The architectural proposal separates adaptive ordering from formal admission. Persistent adaptive ordering remains in development.":
    "架构方案将自适应排序与形式化准入分离。持续自适应排序仍在开发中。",
  "The verifier is not the whole product. It is the constitutional layer intended to protect the wider adaptive architecture.":
    "验证器并不是完整产品，而是用于保护更广泛自适应架构的宪制性约束层。",
  "CURRENT VERIFIED SLICE": "当前已验证切片（CURRENT VERIFIED SLICE）",
  "Finite, typed, receipt-backed execution": "有限、类型化且由回执支撑的执行",
  "Committed finite universe": "已提交并锁定的有限全集",
  "Bound executable handle": "与全集成员资格绑定的可执行句柄",
  "Budgeted one-shot action": "受预算约束的一次性动作",
  "Execution receipts": "执行回执",
  "Work ledger": "工作账本",
  "TARGET ARCHITECTURE · IN DEVELOPMENT": "目标架构 · 开发中（IN DEVELOPMENT）",
  "Explicit state, local revision, adaptive search": "显式状态、局部修正与自适应搜索",
  "Authenticated observation": "经认证的观测",
  "World Atlas state": "World Atlas 状态",
  "Task decomposition": "任务分解",
  "Multi-level ProgramIR": "多层级 ProgramIR",
  "Local revision": "局部修正",
  "Persistent policy": "持续策略",
  "Revision loop": "修正回路",
  "A trained Atlas is not present. Observation-conditioned structural reasoning and persistent learning are not implemented in the current release.":
    "当前不存在已训练的 Atlas。当前版本尚未实现以观测为条件的结构推理，也尚未实现持续学习。",
  "MINIMAL SUFFICIENT RESOLUTION": "最小充分分辨率",
  "Open only the level needed to preserve a task-relevant distinction.": "只开启保留任务相关差异所需的层级。",
  "binary distinction": "二元区分",
  "third alternative": "第三个备选项",
  "directional relation": "方向关系",
  "additional resolution": "进一步分辨率",
  "higher-order distinction": "高阶区分",
  "maximum current level": "当前最高层级",
  selected: "已选择",
  "More poles are not automatically better.": "极数更多并不自动意味着更好。",
  "ARCHITECTURE PRINCIPLE": "架构原则",
  "Local revision, not global reset": "局部修正，而非全局重置",
  "Map A": "映射 A",
  "Map B": "映射 B",
  "Map C": "映射 C",
  unchanged: "未改变",
  "counterexample applied": "已应用反例",
  "Designed behaviour. External validation remains a target milestone.": "这是设计行为；外部验证仍是目标里程碑。",

  "RECORDED RECEIPT": "已记录的执行回执",
  "Inspect the execution state, not a staged answer.": "检查执行状态，而不是预先编排的答案。",
  "This deterministic walkthrough uses sanitized identifiers from the current direct selfcheck. It does not generate a semantic answer and it does not adapt to the input observation.":
    "此确定性演示使用当前直接自检中的脱敏标识符。它不会生成语义答案，也不会根据输入观测进行自适应。",
  "STATIC JSON · NO BACKEND": "静态 JSON · 无后端",
  "Receipt walkthrough modes": "回执演示模式",
  "Recorded receipt": "已记录回执",
  "Target learning loop": "目标学习回路",
  "Receipt steps": "回执步骤",
  "Show step {number}: {label}": "显示步骤 {number}：{label}",
  STEP: "步骤",
  Mode: "模式",
  "deterministic / client-side": "确定性 / 客户端",
  "Sanitized receipt payload": "已脱敏的规范回执载荷，字段名保持原样",
  "Replaying…": "正在重放…",
  "Replay again": "再次重放",
  "Replay receipt": "重放回执",
  "Next step": "下一步",
  Reset: "重置",
  "IN DEVELOPMENT": "开发中（IN DEVELOPMENT）",
  "From source custody to partner-owned evaluation": "从来源保全到由合作伙伴掌控的评估",
  "These components describe the next research contour. They are intentionally separated from the recorded current receipt.":
    "这些组件描述下一阶段的研究轮廓，并有意与当前已记录回执分开呈现。",
  "Controlled architecture walkthrough — not a live model, grounded reasoning demo, or external benchmark.":
    "受控架构演示——不是实时模型、基于外部事实的推理演示或外部基准测试。",
  "Public observation envelope recorded": "已记录公开观测封装",
  "Finite candidate universe committed": "已提交有限候选全集",
  "Executable handle bound to universe membership": "可执行句柄已与全集成员资格绑定",
  "One-shot action executed under budget": "一次性动作已在预算约束下执行",
  "Receipt-derived work ledger resolved": "已解析由回执推导的工作账本",
  "Terminal result preserved with a boundary": "终止结果与边界一并保留",
  "Authenticated external source": "经认证的外部来源",
  "Observation-conditioned admissibility": "以观测为条件的准入判断",
  "Oracle-free action selection": "无预言机动作选择",
  "Multi-step proof state": "多步证明状态",
  "Persistent policy sidecar": "持续策略 sidecar",
  "Partner-grade evaluator": "达到合作伙伴评估要求的评估器",

  EVIDENCE: "证据",
  "Evidence, scoped precisely.": "严格限定范围的证据。",
  "The numbers below describe formal inventory and release reproducibility. None is presented as a measure of intelligence, customer value, or external operational gain.":
    "以下数字描述的是形式化清单和版本可复现性。它们均不作为智能水平、客户价值或外部运行增益的衡量指标。",
  "Open evidence page": "打开证据页面",
  "CURRENT RELEASE DEMONSTRATES": "当前版本展示",
  "A closed mechanical chain with explicit terminal boundaries.": "一条具有明确终止边界的闭合机械链。",
  "Formal transition records": "形式化转换记录",
  "Frozen L1–L7 kernel. An execution alphabet, not semantic concepts.":
    "冻结的 L1–L7 内核。它是执行字母表，而不是语义概念。",
  "Committed candidate records": "已提交候选记录",
  "Across 756 coverage cells in the declared binary, one-step scope.":
    "分布于已声明的二元、单步范围中的 756 个覆盖单元。",
  "Stored regression checks": "存档回归检查",
  "Passed in the declared release environment; not an intelligence metric.":
    "在已声明的发布环境中全部通过；这不是智能水平指标。",
  "Finite committed candidate universe": "有限且已提交的候选全集",
  "Universe-membership-bound executable handles": "与全集成员资格绑定的可执行句柄",
  "Single-use execution with bounded budget": "受有限预算约束的一次性执行",
  "Atomic candidate and budget rollback": "候选状态与预算的原子回滚",
  "Receipt-derived occurrence work accounting": "基于回执的发生实例工作量核算",
  "Deterministic replay within the declared formal scope": "在已声明形式化范围内进行确定性重放",
  "Authenticated external-source provenance": "经认证的外部来源保全链",
  "Observation-conditioned structural reasoning": "以观测为条件的结构推理",
  "External operational gain": "外部运行增益",
  "Persistent policy learning": "持续策略学习",
  "Trained World Atlas": "已训练的 World Atlas",
  "General AI": "通用人工智能",
  "CLAIM DISCIPLINE": "声明约束",
  "What is verified — and what is not.": "哪些已验证，哪些尚未验证。",
  "A useful research system must expose the edge of its evidence. GALO treats BOUNDARY and claim withdrawal as product behaviour, not footnotes.":
    "有价值的研究系统必须明确暴露其证据边界。GALO 将 BOUNDARY 状态和声明撤回视为产品行为，而非脚注。",
  CURRENT: "当前",
  "Verified within declared scope": "在已声明范围内得到验证",
  "OPEN BOUNDARIES": "开放边界",
  "Not implemented, started, or proven": "尚未实现、开始或证明",
  "Claim discipline is part of the product.": "声明约束是产品的一部分。",

  "DESIGN-PARTNER EVALUATION": "联合设计伙伴评估",
  "Test the architecture on a bounded sequential decision problem.": "在有限的序列决策问题上测试该架构。",
  "GALO is seeking partner-owned sequential data and a falsifiable evaluation environment where explicit state, late evidence, local revision, and deterministic replay matter.":
    "GALO 正在寻找由合作伙伴拥有的序列数据和可证伪的评估环境，以检验显式状态、延迟证据、局部修正和确定性重放。",
  "Request a 25-minute evaluation": "申请一次 25 分钟的评估沟通",
  "Review the founder plan": "查看创始人计划",
  "Review the evidence boundary": "查看证据边界",
  "Public evaluation contact is pending founder confirmation.": "公开评估联系方式正在等待创始人确认。",
  "PROPOSED EVALUATION INPUT": "建议的评估输入",
  "Partner-owned bounded event stream": "由合作伙伴拥有的有限事件流",
  "Late evidence and competing hypotheses": "延迟证据与相互竞争的假设",
  "Explicit action costs": "显式动作成本",
  "Local revision requirement": "局部修正要求",
  "Authenticated source custody": "经认证的来源保全链",
  "Preregistered evaluator and replay": "预注册的评估器与重放流程",
  "TERMINAL OUTPUT": "终止输出",
  "Evidence-backed result / portfolio / BOUNDARY": "由证据支撑的结果 / 候选集 / BOUNDARY",

  "COMMERCIAL WEDGE": "商业切入口",
  "A staged route from technical evaluation to private deployment.": "从技术评估到私有部署的分阶段路径。",
  "The commercial path is planned, not traction. No customers, revenue, pilots, or partner commitments are represented on this site.":
    "商业路径仍是规划，并不代表已有市场进展。本网站不表示 GALO 已拥有客户、收入、试点或合作伙伴承诺。",
  "Technical architecture evaluation": "技术架构评估",
  "Partner world-model pilot": "合作伙伴世界模型试点",
  "Private GALO Runtime deployment": "私有 GALO Runtime 部署",
  "Runtime, SDK, and domain Atlas licensing": "Runtime、SDK 与领域 Atlas 授权",
  "Sovereign and enterprise AI": "主权与企业 AI",
  "Long-running systems where the authoritative decision state must be inspected and replayed.":
    "适用于必须检查并重放权威决策状态的长期运行系统。",
  "Scientific and industrial workflows": "科学与工业工作流",
  "Bounded sequential evidence with competing hypotheses and expensive corrections.":
    "适用于存在竞争假设且修正成本较高的有限序列证据。",
  "Regulated decision support": "受监管的决策支持",
  "Private evaluation settings that require disclosed scope and explicit failure boundaries.":
    "适用于要求披露适用范围和明确失败边界的私有评估环境。",

  ROADMAP: "路线图",
  "From verified mechanics to externally grounded learning.": "从已验证机制走向由外部证据支撑的学习。",
  "Each milestone closes a dependency before the next capability is authorized.":
    "每个里程碑都必须先关闭一项依赖，才能授权下一项能力。",
  "Authenticate the source": "认证来源",
  "Signed source custody and a pinned external trust root.": "建立签名式来源保全链和固定的外部信任根。",
  "Close selection": "关闭选择控制项",
  "Oracle-free candidate selection with noninterference receipts.": "实现带有非干扰性回执的无预言机候选选择。",
  "Condition the structure": "使结构受观测约束",
  "Observation-derived admissibility and multi-step proof state.": "实现由观测推导的准入判断和多步证明状态。",
  "Evaluate externally": "开展外部评估",
  "Partner-owned data, preregistered outcomes, and private evaluation.":
    "使用合作伙伴拥有的数据、预注册结果和私有评估。",
  "Authorize learning": "授权学习",
  "Persistent policy sidecar with exact fallback only after prior controls close.":
    "只有在前置控制项关闭后，才启用带精确回退机制的持续策略 sidecar。",

  "WHY ABU DHABI": "为何选择阿布扎比",
  "Abu Dhabi is GALO’s planned operating base — not a satellite office.":
    "阿布扎比是 GALO 计划中的运营基地，而不是卫星办公室。",
  "The next stage needs technical evaluation partners, company formation, focused hiring, and access to a serious AI infrastructure ecosystem in one place.":
    "下一阶段需要在同一地点获得技术评估伙伴、公司设立、专注招聘以及成熟 AI 基础设施生态的支持。",
  "AI ecosystem": "AI 生态系统",
  "Access to research, compute, engineering, and infrastructure relationships relevant to a private technical evaluation.":
    "连接与私有技术评估相关的研究、算力、工程和基础设施资源。",
  "Market access": "市场接入",
  "Proximity to enterprise, government, and sovereign-AI teams able to define bounded partner-owned settings.":
    "接近能够定义有限、由合作伙伴掌控场景的企业、政府和主权 AI 团队。",
  "Company building": "公司建设",
  "A base for incorporation, relocation, hiring, legal operations, finance, and the next fundraising evidence.":
    "为公司注册、迁址、招聘、法律运营、财务和下一轮融资证据建立基地。",
  "12-MONTH CONTRIBUTION PLAN": "12 个月贡献计划",
  "Build the external-evidence layer from Abu Dhabi.": "从阿布扎比建设外部证据层。",
  "Relocate the founder and establish the operating company": "创始人迁往阿布扎比并设立运营公司",
  "Hire a founding systems engineer and research/evaluation engineer": "招聘一名创始系统工程师和一名研究/评估工程师",
  "Release a private Runtime and World Atlas alpha": "发布私有 Runtime 和 World Atlas alpha 版本",
  "Complete two partner-grade technical evaluations": "完成两项达到合作伙伴评估要求的技术评估",
  "Target one committed or paid pilot and prepare seed evidence": "以一个已承诺或付费试点为目标，并准备种子轮融资证据",
  "No programme selection, partnership, or endorsement is implied.":
    "本网站不暗示 GALO 已入选任何项目、建立任何合作关系或获得任何背书。",

  "FOUNDER / ARCHITECT": "创始人 / 架构师",
  FOUNDER: "创始人",
  "Founder-led research, built with adversarial claim discipline.": "由创始人主导的研究，以对抗式声明约束推进。",
  RELOCATION: "迁址计划",
  "FOUNDING TEAM PLAN": "创始团队计划",
  "Systems engineering · Research/evaluation · Abu Dhabi partnerships": "系统工程 · 研究/评估 · 阿布扎比合作伙伴关系",
  "NEXT CONVERSATION": "下一步沟通",
  "Evaluate the architecture on a bounded problem.": "在一个有限问题上评估该架构。",
  "Bring partner-owned sequential data, a falsifiable outcome, and a setting where explicit state and replay matter.":
    "请带来由合作伙伴拥有的序列数据、可证伪的结果，以及显式状态与重放真正重要的应用场景。",
  "Inspect the evidence first": "先检查证据",
  "Inspect the recorded receipt": "检查已记录回执",

  "PUBLIC EVIDENCE LAYER": "公开证据层",
  "This page separates implemented bounded mechanics from architectural targets and claims that remain unproven.":
    "本页面将已实现的有限机制，与架构目标及尚未得到证明的声明明确分开。",
  "CURRENT RELEASE STATUS": "当前发布状态",
  "RELEASE FINGERPRINT": "发布版本指纹",
  "Bound to one immutable research archive.": "绑定到一个不可变的研究档案。",
  "Metrics on this page are not blended with historical releases.": "本页指标不会与历史版本混合。",
  "Copy release fingerprint": "复制发布版本指纹",
  COPY: "复制",
  COPIED: "已复制",
  "Exact public scope:": "精确公开范围：",
  "finite, binary, one-step candidate execution across the declared L1–L7 tower. This is not the complete space of general reasoning.":
    "在已声明的 L1–L7 层级中，执行有限、二元、单步候选动作。这并不是通用推理的完整空间。",
  "CURRENT CAPABILITIES": "当前能力",
  "Implemented bounded mechanics": "已实现的有限机制",
  "CURRENT BOUNDARIES": "当前边界",
  "CLAIM MATRIX": "声明矩阵",
  "Every public claim has a status and a scope.": "每项公开声明都有明确状态和适用范围。",
  "Architecture statements describe the design. Implemented and bounded statements describe the current release. They are not interchangeable.":
    "架构类表述描述设计；已实现和有限范围类表述描述当前版本。两者不可互换。",
  "Public claim matrix": "公开声明矩阵",
  "Public claim": "公开声明",
  Status: "状态",
  "Source class": "来源类别",
  architecture: "架构说明",
  implemented: "已实现",
  bounded: "有限范围",
  "in-development": "开发中",
  "not-proven": "未证明",
  "not-started": "未开始",
  "not-present": "不存在",
  "not-claimed": "未声称",
  "GALO is a standalone research architecture for explicit world state and bounded, replayable execution.":
    "GALO 是一套面向显式世界状态以及受限、可重放执行的独立研究架构。",
  "The architecture specifies a versioned World Atlas; a trained Atlas is not present.":
    "该架构定义了带版本控制的 World Atlas；当前不存在已训练的 Atlas。",
  "Current bounded actions use typed execution contracts and receipts.": "当前有限范围动作使用类型化执行契约和回执。",
  "Executable handles are bound to membership in a committed finite universe and are single-use.":
    "可执行句柄与已提交有限全集的成员资格绑定，且仅可使用一次。",
  "Work accounting is reconstructed from execution receipts within the current occurrence scope.":
    "在当前发生实例范围内，工作量核算由执行回执重建。",
  "Persistent policy learning has not started.": "持续策略学习尚未开始。",
  "A trained Atlas is not present.": "当前不存在已训练的 Atlas。",
  "External operational gain is not proven.": "外部运行增益尚未得到证明。",
  "General AI is not claimed.": "不声称已实现通用人工智能。",
  "Current theory reference": "当前理论参考",
  "Frozen kernel capability registry": "冻结内核能力登记表",
  "Theory and current release status": "理论及当前发布状态",
  "Current capability registry": "当前能力登记表",
  "Direct machine selfcheck": "直接机器自检",
  "Current release status": "当前发布状态",
  "Current claim registry": "当前声明登记表",
  "Replay status": "重放状态",
  "Research archive policy": "研究档案政策",
  "Historical research materials may reflect earlier scopes, experiments, or metrics. They must not be combined with this release without an explicit provenance bridge.":
    "历史研究材料可能反映早期范围、实验或指标。在没有明确来源衔接的情况下，不得将其与当前版本合并。",
  "Public-data policy": "公开数据政策",
  "The raw engine, internal consolidate, private manifests, test fixtures, and source paths are not distributed through this website. Technical review material is sanitized before publication.":
    "本网站不分发原始引擎、内部 consolidate、私有清单、测试夹具或源代码路径。技术审阅材料会在发布前进行脱敏处理。",

  PRIVACY: "隐私",
  "A quiet, static website by default.": "一个默认保持安静的静态网站。",
  "GALO does not intentionally collect personal data through forms, analytics, advertising trackers, or cookies on this website.":
    "GALO 不会通过本网站的表单、分析工具、广告追踪器或 Cookie 主动收集个人数据。",
  "The hosting provider may process technical request logs for security and service delivery. If you choose an external email, Telegram, or social link after one is published, you leave this website and the destination service’s terms and privacy practices apply.":
    "托管服务提供商可能会为了安全和服务交付处理技术请求日志。如果您在外部电子邮件、Telegram 或社交链接发布后选择使用这些链接，您将离开本网站，并适用目标服务的条款和隐私政策。",
  "Please do not send sensitive information through public channels.": "请勿通过公开渠道发送敏感信息。",
  "No analytics": "无分析工具",
  "No cookies": "无 Cookie",
  "No forms": "无表单",
  "No user accounts": "无用户账户",
  "Page not found.": "未找到页面。",
  "The requested page is outside the current site boundary.": "您请求的页面超出了当前网站边界。",
  "Return home": "返回首页",
  "View evidence": "查看证据",

  "GALO AI — Explicit World State and Replayable Execution": "GALO AI — 显式世界状态与可重放执行",
  "GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed replay.":
    "GALO 是一套面向显式世界状态、类型化执行与回执支撑重放的独立研究架构。",
  "Evidence — GALO AI": "证据 — GALO AI",
  "Inspect GALO's implemented bounded mechanics, immutable release fingerprint, public claim matrix, and disclosed research boundaries.":
    "查看 GALO 已实现的有限机制、不可变发布指纹、公开声明矩阵及已披露的研究边界。",
  "Privacy — GALO AI": "隐私 — GALO AI",
  "How the static GALO AI website handles data, cookies, analytics, and external contact links.":
    "了解 GALO AI 静态网站如何处理数据、Cookie、分析工具和外部联系链接。",
  "Page not found — GALO AI": "未找到页面 — GALO AI",
  "The requested page is outside the current GALO AI site boundary.": "请求的页面超出了当前 GALO AI 网站边界。",
  "Founder-led research architecture for explicit world state and bounded, replayable execution.":
    "一套由创始人主导、面向显式世界状态以及受限、可重放执行的研究架构。",
};
