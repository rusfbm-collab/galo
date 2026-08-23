import {
  ArrowRight,
  Braces,
  Building2,
  CircleAlert,
  Check,
  CircleDot,
  Database,
  FileCheck2,
  Gauge,
  Layers3,
  LockKeyhole,
  MapPinned,
  ScanSearch,
  ShieldCheck,
  SquareTerminal,
} from "lucide-react";
import { ArchitectureFlow } from "../components/diagrams/ArchitectureFlow";
import { HeroReasoningRoute } from "../components/diagrams/HeroReasoningRoute";
import { LocalRevision } from "../components/diagrams/LocalRevision";
import { ResolutionLadder } from "../components/diagrams/ResolutionLadder";
import { TwoTowersFigure } from "../components/diagrams/TwoTowersFigure";
import { WeightFreeContrast } from "../components/diagrams/WeightFreeContrast";
import { ReplayExplorer } from "../components/demo/ReplayExplorer";
import { PageShell } from "../components/layout/PageShell";
import { ReaderPaths } from "../components/ui/ReaderPaths";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  differentiationBoundary,
  heroDifferentiators,
  whatThisIs,
  whatThisIsNot,
} from "../content/differentiation";
import { releaseEvidence } from "../content/evidence";
import { getEvaluationContact } from "../content/contact";
import { headlineClaims } from "../content/headlineClaims";
import { twelveMonths } from "../content/programme";
import { investorBriefing } from "../content/plainLanguage";
import { siteContent } from "../content/site";
import {
  authorityLine,
  externalAdapterRule,
  learnedState,
  weightFreeBoundary,
} from "../content/weightFree";
import { useI18n } from "../i18n/I18nContext";

const problemCards = [
  {
    number: "01",
    title: "Implicit world state",
    text: "A system can answer without exposing the durable model behind the answer.",
  },
  {
    number: "02",
    title: "Memory drift",
    text: "Prompts, retrieved context, and memory updates can alter behaviour without a discrete, inspectable state transition.",
  },
  {
    number: "03",
    title: "Premature collapse",
    text: "Several plausible explanations can be compressed into one output before evidence warrants a unique decision.",
  },
  {
    number: "04",
    title: "Broad correction",
    text: "A local counterexample may require a broad prompt, memory, or model change that affects unrelated behaviour.",
  },
];

const beginnerBridge = [
  {
    number: "01",
    title: "Name the finite states",
    text: "A level L_n declares exactly n local labels P0 through P_(n−1).",
  },
  {
    number: "02",
    title: "Apply one frozen law",
    text: "PLUS performs cyclic addition; STAR adds a precise raw-left P0 reset clause.",
  },
  {
    number: "03",
    title: "Preserve the input roles",
    text: "LEFT and RIGHT record how source and active are placed on the table axes.",
  },
  {
    number: "04",
    title: "Stop at the evidence boundary",
    text: "A formal target is not yet world meaning, a useful action, a learned policy, or General AI.",
  },
] as const;

const verifiedSlice = [
  { icon: Layers3, title: "Finite universe", text: "1,204 descriptors / 880 executable" },
  { icon: LockKeyhole, title: "Pinned-key sample integrity", text: "Bundled finite sample / two source patterns" },
  { icon: Gauge, title: "Deterministic selector", text: "440-candidate frontier per source pattern" },
  { icon: FileCheck2, title: "Receipt ledger", text: "4,802 internal work-unit IDs reconciled" },
];

const architecturePrinciples = [
  {
    icon: Database,
    title: "Explicit World Atlas",
    text: "The architecture specifies objects, events, alternative hypotheses, evidence, and revisions as first-class state. A trained Atlas is not present.",
  },
  {
    icon: Layers3,
    title: "Minimal sufficient resolution",
    text: "Designed to increase reasoning resolution only when a lower-dimensional representation loses a task-relevant distinction.",
  },
  {
    icon: ScanSearch,
    title: "Localized revision",
    text: "Designed so a counterexample can invalidate an affected map or assumption without forcing a global reset.",
  },
  {
    icon: Braces,
    title: "Typed execution",
    text: "The current bounded slice admits actions through typed contracts and records their execution through receipts.",
  },
  {
    icon: ShieldCheck,
    title: "Constitutional verification",
    text: "The architectural proposal separates adaptive ordering from formal admission. Persistent adaptive ordering remains in development.",
  },
];

const evaluationShape = [
  "Partner-owned bounded event stream",
  "Late evidence and competing hypotheses",
  "Explicit action costs",
  "Local revision requirement",
  "Authenticated source custody",
  "Preregistered evaluator and replay",
];

const businessSteps = [
  "Technical architecture evaluation",
  "Partner world-model pilot",
  "Private GALO Runtime deployment",
  "Runtime, SDK, and domain Atlas licensing",
];

const roadmap = [
  {
    number: "01",
    title: "Expand semantic closure",
    text: "Preregistered rules beyond the current two fixed source patterns.",
  },
  {
    number: "02",
    title: "Add multi-step execution",
    text: "Trajectories, real CORE/QUASI/BOUNDARY actions, and a probe-response loop.",
  },
  {
    number: "03",
    title: "Evaluate before learning",
    text: "Partner-owned data and preregistered outcomes before any persistent policy is authorized.",
  },
];

export function HomePage() {
  const { href, t } = useI18n();
  const evaluationContact = getEvaluationContact(t("GALO technical evaluation"));

  return (
    <PageShell>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__content">
            <p className="eyebrow eyebrow--cyan">{t("WEIGHT-FREE AI · INDUSTRIAL DECISION ASSURANCE")}</p>
            <h1>{t("A different kind of AI, for decisions that have to stay provable.")}</h1>
            <p className="hero__lead">
              {t(
                "Neural AI learns by changing hidden numerical weights. GALO has no learned weights and uses no backpropagation. It learns by building, checking, reusing and locally revising explicit objects, relations, competing explanations and evidence in a versioned Atlas, so every learned change can be read, versioned and replayed. The first product is intended to apply that architecture to decision assurance around the digital twins and operational systems industry already runs. None of it is running at an industrial site today.",
              )}
            </p>
            <p className="hero__result">
              {t("Know what changed, what it affects, and why the decision still stands.")}
            </p>
            <ul className="hero__diff" aria-label={t("What kind of system this is")}>
              {heroDifferentiators.map((line) => (
                <li key={line}>{t(line)}</li>
              ))}
            </ul>
            <div className="hero__status" aria-label={t("Current project status")}>
              <span>
                <CircleDot size={14} aria-hidden="true" /> {t("Working research prototype")}
              </span>
              <span>{t("Pre-seed")}</span>
              <span>{t("Founder-led")}</span>
              <span>{t("No capital raised")}</span>
            </div>
            <div className="hero__actions">
              <a className="button button--primary" href={href("/industry")}>
                {t("Request a bounded industrial evaluation")}{" "}
                <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
              </a>
              <a className="button button--outline-light" href={href("/evidence#learning")}>
                {t("Review the technical evidence")}
              </a>
            </div>
            <p className="hero__boundary">
              {t(
                "General-purpose architecture, not general intelligence. Partner-controlled validity is not proven, production autonomy is not authorised, and there is no customer, letter of intent or revenue. Every figure on this site was produced by the project on its own data, and nothing here authorises a command to a plant.",
              )}
            </p>
          </div>

          <div className="hero-visual" aria-label={t("One episode of reasoning, and the receipt it leaves")}>
            <div className="hero-visual__topline">
              <span>{t("ONE EPISODE · SEVEN PHASES")}</span>
              <strong>{t("CLOSED SET")}</strong>
            </div>
            <div className="hero-visual__figure">
              <HeroReasoningRoute />
            </div>
            <div className="hero-visual__receipt">
              <span className="status status--pass" dir="ltr">
                PASS
              </span>
              <div>
                <small>{t("BOUND HANDLE")}</small>
                <strong className="mono" dir="ltr">
                  59e097da…dde3ab
                </strong>
              </div>
              <div>
                <small>{t("WORK LEDGER")}</small>
                <strong className="mono" dir="ltr">
                  df8920b9…0a406b
                </strong>
              </div>
            </div>
            <div className="hero-visual__caption">
              <span>
                {t(
                  "Work is counted as it is spent, and either exit is reachable from any phase. A stop is a recorded outcome with a named cause, not a missing answer.",
                )}
              </span>
              <span>{t("Receipt chain intact")}</span>
            </div>
          </div>
        </div>

        <div className="shell proof-strip" aria-label={t("Verified current mechanics")}>
          {verifiedSlice.map(({ icon: Icon, title, text }) => (
            <div key={title} className="proof-strip__item">
              <Icon size={19} aria-hidden="true" />
              <div>
                <strong>{t(title)}</strong>
                <span>{t(text)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="weight-free" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE DIFFERENCE, BEFORE ANY NUMBERS")}
            title={t("Ordinary AI learns by changing hidden weights. This one has none to change.")}
            text={t(
              "Everything further down this page — the percentages, the receipts, the seven phases, the tables — is evidence about a kind of object. This section says what the object is, because the evidence does not mean much until that is clear.",
            )}
          />

          <WeightFreeContrast />

          <div className="weight-free__state">
            <div className="weight-free__state-head">
              <p className="eyebrow">{t("WHAT AN EPISODE MAY LEAVE BEHIND")}</p>
              <h3>{t("If learning is not weights, here is the whole of what it is instead.")}</h3>
              <p>
                {t(
                  "Six kinds of thing, and the list is complete rather than illustrative. Each one can be printed, compared with the same item from an earlier run, and rolled back on its own without touching the rest.",
                )}
              </p>
            </div>
            <dl>
              {learnedState.map((entry) => (
                <div key={entry.name}>
                  <dt>{t(entry.name)}</dt>
                  <dd>{t(entry.holds)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="weight-free__authority">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>{t(authorityLine)}</span>
          </p>

          <div className="weight-free__limits">
            <p>
              <CircleAlert size={16} aria-hidden="true" /> {t(weightFreeBoundary)}
            </p>
            <p>
              <CircleAlert size={16} aria-hidden="true" /> {t(externalAdapterRule)}
            </p>
          </div>

          <a className="text-link" href={href("/vs-llm#dimensions")}>
            {t("The same difference, dimension by dimension, against a language model")}{" "}
            <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="not-this" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT THIS IS NOT")}
            title={t("Taken for four other things. One line separates it from all four.")}
            text={t(
              "Each row names an assumption a specialist arrives with, and the reason it does not hold. The reason is the same one every time: the learned part may propose and rank, and never admits the result.",
            )}
          />
          <dl className="not-this">
            {whatThisIsNot.map((row) => (
              <div key={row.taken} className="not-this__row">
                <dt>{t(row.taken)}</dt>
                <dd>{t(row.answer)}</dd>
              </div>
            ))}
            <div className="not-this__row not-this__row--is">
              <dt>{t("What it is instead")}</dt>
              <dd>{t(whatThisIs)}</dd>
            </div>
          </dl>
          <p className="not-this__boundary">
            <CircleAlert size={16} aria-hidden="true" /> {t(differentiationBoundary)}
          </p>
          <a className="text-link" href={href("/vs-llm#classes")}>
            {t("Nine classes of alternative approach, compared on authority, change and replay")}{" "}
            <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="the-claim" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE HEADLINE, TAKEN APART")}
            title={t("A headline is a claim. Here is what backs each word of it, and where it stops.")}
            text={t(
              "Allowed, decide, show — three promises, and a reader is entitled to ask what stands behind each one. Each card names the mechanism that exists today, the page where you can check it yourself, and the part that is not yet earned. The limits are in the same card as the claim, not in a footnote.",
            )}
          />
          <div className="headline-claims">
            {headlineClaims.map((claim) => (
              <article key={claim.word} className="headline-claim">
                <span className="headline-claim__word">{t(claim.word)}</span>
                <p className="headline-claim__claim">{t(claim.claim)}</p>
                <p className="headline-claim__mechanism">{t(claim.mechanism)}</p>
                <p className="headline-claim__limit">
                  <CircleAlert size={16} aria-hidden="true" /> {t(claim.limit)}
                </p>
                <a className="text-link" href={href(claim.href)}>
                  {t(claim.hrefLabel)} <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-read" className="section section--paper home-paths">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHERE SHOULD I START?")}
            title={t("You do not need the mathematics unless you want it.")}
            text={t(
              "Most of this site was written for specialists, which was not much help to anyone else. So here are four short routes through it. Pick whichever one sounds like you, follow its three stops in order, and stop as soon as your question is answered — nobody is keeping score.",
            )}
          />
          <ReaderPaths />
        </div>
      </section>

      <section id="plain-language" className="section section--white home-plain">
        <div className="shell">
          <SectionHeading
            eyebrow={t("IN PLAIN LANGUAGE")}
            title={t("If you read one section on this site, read this one.")}
            text={t(
              "No mathematics, no acronyms. Six questions a non-technical reader asks first, answered in the order they are usually asked.",
            )}
            aside={
              <a className="text-link" href={href("/theory#cayley-first")}>
                {t("See the table everything is built on")}{" "}
                <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
              </a>
            }
          />
          <div className="home-plain__grid">
            {investorBriefing.map((item, index) => (
              <article key={item.question}>
                <span className="home-plain__index" dir="ltr">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{t(item.question)}</h3>
                <p className="home-plain__answer">{t(item.answer)}</p>
                <p className="home-plain__detail">{t(item.detail)}</p>
              </article>
            ))}
          </div>
          <div className="home-plain__foundation">
            <Layers3 size={22} aria-hidden="true" />
            <div>
              <strong>{t("The one technical fact worth carrying away")}</strong>
              <p>
                {t(
                  "Underneath every diagram, number, and record on this site there is a finite table of results for two inputs — a Cayley table. It is written out completely in advance, so it can be checked entry by entry rather than trusted.",
                )}
              </p>
              <a className="text-link" href={href("/thinking")}>
                {t("Follow one decision from the input to the record")}{" "}
                <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why-galo" className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE PROBLEM")}
            title={t("Agentic AI is moving faster than its reasoning state can be governed.")}
            text={t(
              "Models can produce increasingly capable outputs, while the authoritative state behind long-running decisions can remain implicit, transient, or difficult to revise locally.",
            )}
          />
          <div className="problem-grid">
            {problemCards.map((card) => (
              <article key={card.number} className="problem-card">
                <span className="problem-card__number">{card.number}</span>
                <h3>{t(card.title)}</h3>
                <p>{t(card.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="theory-introduction" className="section section--white home-theory-bridge">
        <div className="shell">
          <SectionHeading
            eyebrow={t("NEW TO THE MATHEMATICS?")}
            title={t("Build GALO from one three-state example before opening the academic reference.")}
            text={t(
              "The beginner chapter introduces the main symbols with a reading legend, reconstructs transitions independently from tables and formulas, and keeps the formal model separate from the current runtime and target learning architecture.",
            )}
            aside={
              <a className="text-link" href={href("/theory")}>
                {t("Open the guided theory")} <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
              </a>
            }
          />
          <div className="home-theory-bridge__steps">
            {beginnerBridge.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="two-towers" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT IS IN THE CORE")}
            title={t("Two towers of frozen tables, and everything else is a lookup in them.")}
            text={t(
              "People expect the core of an AI system to be a model. Here it is two families of Cayley tables over seven finite levels, written before anything runs and never edited afterwards. The kernel carries them byte for byte, and the same 560 typed cells serve every domain the engine works in — the language contour and the graph contours are not separate copies.",
            )}
            aside={
              <a className="text-link" href={href("/theory#plus-star")}>
                {t("Read the two laws in full")}{" "}
                <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
              </a>
            }
          />
          <TwoTowersFigure />
          <div className="tower-notes">
            <article>
              <h3>{t("Why two and not one")}</h3>
              <p>
                {t(
                  "PLUS is a cyclic group: it composes in any order and every step can be undone. STAR is not — it inspects one operand first, and past two positions it is neither commutative nor associative. A system with only PLUS cannot express a reset; a system with only STAR loses the arithmetic underneath it.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Why seven levels and not one")}</h3>
              <p>
                {t(
                  "Because the upper ones are not redundant, and that is checked rather than assumed. Across every downward pair of levels the only map that commutes with all four action families glues every pole onto P0 and preserves nothing. So a higher level can draw distinctions no lower level reproduces, and enumerating it is not padding.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("What this does not establish")}</h3>
              <p>
                {t(
                  "That the towers are what produced the published learning results. They are not in the measured path of those campaigns, and their contribution to it is unproven — it is written on the evidence page as an open boundary rather than left for a reader to discover.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="architecture" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow={t("ARCHITECTURE")}
            title={t("Separate the verified execution slice from the target world-model loop.")}
            text={t(
              "The current release verifies bounded local mechanics within the declared finite scope. The wider architecture specifies how explicit state, local revision, and adaptive search should connect once the open controls are closed.",
            )}
          />
          <ArchitectureFlow />
          <div className="principles-grid">
            {architecturePrinciples.map(({ icon: Icon, title, text }) => (
              <article key={title} className="principle-card">
                <span className="principle-card__icon">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
          <div className="architecture-visuals">
            <ResolutionLadder />
            <LocalRevision />
          </div>
          <p className="architecture-note">
            {t(
              "The verifier is not the whole product. It is the constitutional layer intended to protect the wider adaptive architecture.",
            )}
          </p>
        </div>
      </section>

      <section id="receipt" className="section section--dark">
        <div className="shell">
          <SectionHeading
            eyebrow={t("RECORDED RECEIPT")}
            title={t("Inspect the execution state, not a staged answer.")}
            text={t(
              "This deterministic walkthrough uses sanitized identifiers from the current V4 direct selfcheck. It distinguishes two fixed source patterns, but it does not accept arbitrary observations, generate a semantic answer, or learn.",
            )}
            light
            aside={
              <span className="scope-chip">
                <LockKeyhole size={16} aria-hidden="true" /> {t("STATIC JSON · NO BACKEND")}
              </span>
            }
          />
          <ReplayExplorer />
        </div>
      </section>

      <section id="evidence" className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow={t("EVIDENCE")}
            title={t("What the current numbers actually measure.")}
            text={t(
              "The numbers below describe formal inventory and release reproducibility. None is presented as a measure of intelligence, customer value, or external operational gain.",
            )}
            aside={
              <a className="text-link" href={href("/evidence")}>
                {t("Open evidence page")} <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
              </a>
            }
          />
          <div className="metric-grid">
            {releaseEvidence.metrics.map((metric) => (
              <article key={metric.value} className="metric-card">
                <strong dir="ltr">{metric.value}</strong>
                <h3>{t(metric.label)}</h3>
                <p>{t(metric.detail)}</p>
              </article>
            ))}
          </div>
          <div className="current-proof">
            <div>
              <p className="eyebrow">{t("CURRENT RELEASE DEMONSTRATES")}</p>
              <h3>{t("A closed mechanical chain with explicit terminal boundaries.")}</h3>
            </div>
            <ul>
              {releaseEvidence.current.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="boundaries" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow={t("CLAIM DISCIPLINE")}
            title={t("What is verified — and what is not.")}
            text={t(
              "A useful research system must expose the edge of its evidence. GALO treats BOUNDARY and claim withdrawal as product behaviour, not footnotes.",
            )}
          />
          <div className="boundary-grid">
            <div className="boundary-column boundary-column--current">
              <div className="boundary-column__header">
                <ShieldCheck size={22} aria-hidden="true" />
                <div>
                  <span>{t("CURRENT")}</span>
                  <h3>{t("Verified within declared scope")}</h3>
                </div>
              </div>
              <ul>
                {releaseEvidence.current.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="boundary-column boundary-column--open">
              <div className="boundary-column__header">
                <ScanSearch size={22} aria-hidden="true" />
                <div>
                  <span>{t("OPEN BOUNDARIES")}</span>
                  <h3>{t("Not implemented, started, or proven")}</h3>
                </div>
              </div>
              <ul>
                {releaseEvidence.boundaries.map((item) => (
                  <li key={item.label}>
                    <span dir="ltr">{item.status}</span>
                    {t(item.label)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="claim-discipline">{t("Claim discipline is part of the product.")}</p>
        </div>
      </section>

      <section id="evaluation" className="section section--navy">
        <div className="shell evaluation-grid">
          <div className="evaluation-copy">
            <p className="eyebrow eyebrow--cyan">{t("DESIGN-PARTNER EVALUATION")}</p>
            <h2>{t("Test the architecture on a bounded sequential decision problem.")}</h2>
            <p>
              {t(
                "GALO is seeking partner-owned sequential data and a falsifiable evaluation environment where explicit state, late evidence, local revision, and deterministic replay matter.",
              )}
            </p>
            <div className="evaluation-actions">
              {evaluationContact ? (
                <a className="button button--primary" href={evaluationContact.href}>
                  {t("Request a 25-minute evaluation")}{" "}
                  <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
                </a>
              ) : (
                <a className="button button--primary" href="#founder">
                  {t("Review the founder plan")}{" "}
                  <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
                </a>
              )}
              <a className="button button--outline-light" href={href("/evidence")}>
                {t("Review the evidence boundary")}
              </a>
            </div>
            {!evaluationContact && (
              <p className="contact-pending">{t("Public evaluation contact is pending founder confirmation.")}</p>
            )}
          </div>
          <div className="evaluation-spec">
            <div className="evaluation-spec__top">
              <SquareTerminal size={22} aria-hidden="true" />
              <span>{t("PROPOSED EVALUATION INPUT")}</span>
            </div>
            <ul>
              {evaluationShape.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {t(item)}
                </li>
              ))}
            </ul>
            <div className="evaluation-spec__output">
              <small>{t("TERMINAL OUTPUT")}</small>
              <strong>{t("Evidence-backed result / portfolio / BOUNDARY")}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow={t("COMMERCIAL WEDGE")}
            title={t("A staged route from technical evaluation to private deployment.")}
            text={t(
              "The commercial path is planned, not traction. No customers, revenue, pilots, or partner commitments are represented on this site.",
            )}
          />
          <div className="business-path">
            {businessSteps.map((step, index) => (
              <div key={step} className="business-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{t(step)}</strong>
                {index < businessSteps.length - 1 && (
                  <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="use-case-grid">
            <article>
              <Building2 size={21} aria-hidden="true" />
              <h3>{t("Sovereign and enterprise AI")}</h3>
              <p>{t("Long-running systems where the authoritative decision state must be inspected and replayed.")}</p>
            </article>
            <article>
              <Database size={21} aria-hidden="true" />
              <h3>{t("Scientific and industrial workflows")}</h3>
              <p>{t("Bounded sequential evidence with competing hypotheses and expensive corrections.")}</p>
            </article>
            <article>
              <MapPinned size={21} aria-hidden="true" />
              <h3>{t("Regulated decision support")}</h3>
              <p>{t("Private evaluation settings that require disclosed scope and explicit failure boundaries.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow={t("ROADMAP")}
            title={t("From verified mechanics to externally grounded learning.")}
            text={t("Each milestone closes a dependency before the next capability is authorized.")}
          />
          <div className="roadmap">
            {roadmap.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <small>{t("IN DEVELOPMENT")}</small>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="next-twelve-months" className="section section--commitments">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE NEXT TWELVE MONTHS")}
            title={t("What is not true yet, and the plan written so somebody else can mark it.")}
            text={t(
              "The next stage needs an entity, two technical hires, evaluation partners willing to bring their own data, and reviewers with an interest in attacking the mathematics. Below is what would be built in the first twelve months, with the observation that would show each commitment was missed.",
            )}
          />
          <div className="commitment-grid">
            <article>
              <span>01</span>
              <h3>{t("Not yet incorporated")}</h3>
              <p>
                {t(
                  "There is no operating company today, so there is nothing to contract with. Incorporation is the first milestone below rather than a completed step.",
                )}
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>{t("Founder only")}</h3>
              <p>
                {t(
                  "Every engineering statement on this site is the work of one person. Two first hires are named in the plan and neither has been made.",
                )}
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>{t("Arabic already shipped")}</h3>
              <p>
                {t(
                  "The site ships in Arabic with right-to-left layout, and the build fails if one rendered string lacks a translation. It is a website. Nobody has deployed anything, and we claim nothing beyond that.",
                )}
              </p>
            </article>
          </div>
          <div className="twelve-month-plan">
            <div>
              <p className="eyebrow">{t("12-MONTH PLAN, WRITTEN TO BE MARKED")}</p>
              <h3>{t("Each commitment carries the observation that would show it was missed.")}</h3>
            </div>
            <ol>
              {twelveMonths.map((milestone, index) => (
                <li key={milestone.window}>
                  <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{t(milestone.deliverable)}</strong>
                    <small>
                      <b>{t("Missed if")}</b> {t(milestone.wouldFailIf)}
                    </small>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="endorsement-note">{t("No programme selection, partnership, or endorsement is implied.")}</p>
          <a className="button button--ghost dossier-link" href={href("/hub71")}>
            {t("Read how the engine works, then where to attack it")}{" "}
            <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="founder" className="section section--founder">
        <div className="shell founder-grid">
          <div className="founder-monogram" aria-hidden="true">
            <span>RA</span>
            <small>{t("FOUNDER / ARCHITECT")}</small>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">{t("FOUNDER")}</p>
            <h2>{t("Founder-led research, built with adversarial claim discipline.")}</h2>
            <div className="founder-name">
              <h3>{siteContent.founder.name}</h3>
              <span>{t(siteContent.founder.role)}</span>
            </div>
            <p>{t(siteContent.founder.bio)}</p>
            <div className="founder-facts">
              <div>
                <small>{t("TEAM TODAY")}</small>
                <strong>{t("One person. Neither of the two first hires has been made.")}</strong>
              </div>
              <div>
                <small>{t("FOUNDING TEAM PLAN")}</small>
                <strong>{t("Systems engineering · Research/evaluation · Industrial partnerships")}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="shell final-cta__inner">
          <div>
            <p className="eyebrow eyebrow--cyan">{t("NEXT CONVERSATION")}</p>
            <h2>{t("Evaluate the architecture on a bounded problem.")}</h2>
            <p>
              {t(
                "Bring partner-owned sequential data, a falsifiable outcome, and a setting where explicit state and replay matter.",
              )}
            </p>
          </div>
          <div className="final-cta__actions">
            <a className="button button--primary" href={evaluationContact?.href ?? href("/evidence")}>
              {evaluationContact ? t("Request a technical evaluation") : t("Inspect the evidence first")}
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a className="button button--outline-light" href={href("/#receipt")}>
              {t("Inspect the recorded receipt")}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
