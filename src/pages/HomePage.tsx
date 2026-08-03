import {
  ArrowRight,
  Braces,
  Building2,
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
import { LocalRevision } from "../components/diagrams/LocalRevision";
import { ResolutionLadder } from "../components/diagrams/ResolutionLadder";
import { ReplayExplorer } from "../components/demo/ReplayExplorer";
import { PageShell } from "../components/layout/PageShell";
import { SectionHeading } from "../components/ui/SectionHeading";
import { releaseEvidence } from "../content/evidence";
import { getEvaluationContact, siteContent } from "../content/site";

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

const verifiedSlice = [
  { icon: Layers3, title: "Finite universe", text: "1,204 commitments / 756 cells" },
  { icon: LockKeyhole, title: "Bound execution", text: "Membership proof + one-shot handle" },
  { icon: Gauge, title: "Budget law", text: "Bounded action + atomic rollback" },
  { icon: FileCheck2, title: "Receipt ledger", text: "Work reconstructed from receipts" },
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
  { number: "01", title: "Authenticate the source", text: "Signed source custody and a pinned external trust root." },
  { number: "02", title: "Close selection", text: "Oracle-free candidate selection with noninterference receipts." },
  {
    number: "03",
    title: "Condition the structure",
    text: "Observation-derived admissibility and multi-step proof state.",
  },
  {
    number: "04",
    title: "Evaluate externally",
    text: "Partner-owned data, preregistered outcomes, and private evaluation.",
  },
  {
    number: "05",
    title: "Authorize learning",
    text: "Persistent policy sidecar with exact fallback only after prior controls close.",
  },
];

export function HomePage() {
  const evaluationContact = getEvaluationContact("GALO technical evaluation");

  return (
    <PageShell>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__content">
            <p className="eyebrow eyebrow--cyan">RESEARCH ARCHITECTURE FOR INSPECTABLE AGENT STATE</p>
            <h1>AI agents need a world state they can inspect, revise, and replay.</h1>
            <p className="hero__lead">
              GALO is a standalone research architecture for explicit world state, typed execution, and receipt-backed
              replay. Its current release verifies a finite execution layer; persistent learning and external
              performance remain unproven.
            </p>
            <div className="hero__status" aria-label="Current project status">
              <span>
                <CircleDot size={14} aria-hidden="true" /> Working bounded prototype
              </span>
              <span>Pre-seed</span>
              <span>Founder-led</span>
              <span>Abu Dhabi relocation planned</span>
            </div>
            <div className="hero__actions">
              <a className="button button--primary" href="#receipt">
                Inspect a verified receipt <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--outline-light" href="#evaluation">
                Request a technical evaluation
              </a>
            </div>
            <p className="hero__boundary">
              Formal replay within a declared scope. General AI and external capability superiority are not claimed.
            </p>
          </div>

          <div className="hero-visual" aria-label="Layered resolution and receipt visual">
            <div className="hero-visual__topline">
              <span>WORLD STATE / RESOLUTION</span>
              <strong>DECLARED SCOPE</strong>
            </div>
            <div className="hero-visual__frames" aria-hidden="true">
              {["L7", "L6", "L5", "L4", "L3", "L2"].map((level, index) => (
                <div key={level} className={`hero-frame hero-frame--${index}`}>
                  <span>{level}</span>
                </div>
              ))}
            </div>
            <div className="hero-visual__receipt">
              <span className="status status--pass">PASS</span>
              <div>
                <small>BOUND HANDLE</small>
                <strong className="mono">59e097da…dde3ab</strong>
              </div>
              <div>
                <small>WORK LEDGER</small>
                <strong className="mono">df8920b9…0a406b</strong>
              </div>
            </div>
            <div className="hero-visual__caption">
              <span>Minimum sufficient level selected</span>
              <span>Receipt chain intact</span>
            </div>
          </div>
        </div>

        <div className="shell proof-strip" aria-label="Verified current mechanics">
          {verifiedSlice.map(({ icon: Icon, title, text }) => (
            <div key={title} className="proof-strip__item">
              <Icon size={19} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why-galo" className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow="THE PROBLEM"
            title="Agentic AI is moving faster than its reasoning state can be governed."
            text="Models can produce increasingly capable outputs, while the authoritative state behind long-running decisions can remain implicit, transient, or difficult to revise locally."
          />
          <div className="problem-grid">
            {problemCards.map((card) => (
              <article key={card.number} className="problem-card">
                <span className="problem-card__number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="ARCHITECTURE"
            title="Separate the verified execution slice from the target world-model loop."
            text="The current release verifies bounded local mechanics within the declared finite scope. The wider architecture specifies how explicit state, local revision, and adaptive search should connect once the open controls are closed."
          />
          <ArchitectureFlow />
          <div className="principles-grid">
            {architecturePrinciples.map(({ icon: Icon, title, text }) => (
              <article key={title} className="principle-card">
                <span className="principle-card__icon">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="architecture-visuals">
            <ResolutionLadder />
            <LocalRevision />
          </div>
          <p className="architecture-note">
            The verifier is not the whole product. It is the constitutional layer intended to protect the wider adaptive
            architecture.
          </p>
        </div>
      </section>

      <section id="receipt" className="section section--dark">
        <div className="shell">
          <SectionHeading
            eyebrow="RECORDED RECEIPT"
            title="Inspect the execution state, not a staged answer."
            text="This deterministic walkthrough uses sanitized identifiers from the current direct selfcheck. It does not generate a semantic answer and it does not adapt to the input observation."
            light
            aside={
              <span className="scope-chip">
                <LockKeyhole size={16} aria-hidden="true" /> STATIC JSON · NO BACKEND
              </span>
            }
          />
          <ReplayExplorer />
        </div>
      </section>

      <section id="evidence" className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow="EVIDENCE"
            title="Evidence, scoped precisely."
            text="The numbers below describe formal inventory and release reproducibility. None is presented as a measure of intelligence, customer value, or external operational gain."
            aside={
              <a className="text-link" href="/evidence">
                Open evidence page <ArrowRight size={16} aria-hidden="true" />
              </a>
            }
          />
          <div className="metric-grid">
            {releaseEvidence.metrics.map((metric) => (
              <article key={metric.value} className="metric-card">
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
          <div className="current-proof">
            <div>
              <p className="eyebrow">CURRENT RELEASE DEMONSTRATES</p>
              <h3>A closed mechanical chain with explicit terminal boundaries.</h3>
            </div>
            <ul>
              {releaseEvidence.current.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="boundaries" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="CLAIM DISCIPLINE"
            title="What is verified — and what is not."
            text="A useful research system must expose the edge of its evidence. GALO treats BOUNDARY and claim withdrawal as product behaviour, not footnotes."
          />
          <div className="boundary-grid">
            <div className="boundary-column boundary-column--current">
              <div className="boundary-column__header">
                <ShieldCheck size={22} aria-hidden="true" />
                <div>
                  <span>CURRENT</span>
                  <h3>Verified within declared scope</h3>
                </div>
              </div>
              <ul>
                {releaseEvidence.current.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="boundary-column boundary-column--open">
              <div className="boundary-column__header">
                <ScanSearch size={22} aria-hidden="true" />
                <div>
                  <span>OPEN BOUNDARIES</span>
                  <h3>Not implemented, started, or proven</h3>
                </div>
              </div>
              <ul>
                {releaseEvidence.boundaries.map((item) => (
                  <li key={item.label}>
                    <span>{item.status}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="claim-discipline">Claim discipline is part of the product.</p>
        </div>
      </section>

      <section id="evaluation" className="section section--navy">
        <div className="shell evaluation-grid">
          <div className="evaluation-copy">
            <p className="eyebrow eyebrow--cyan">DESIGN-PARTNER EVALUATION</p>
            <h2>Test the architecture on a bounded sequential decision problem.</h2>
            <p>
              GALO is seeking partner-owned sequential data and a falsifiable evaluation environment where explicit
              state, late evidence, local revision, and deterministic replay matter.
            </p>
            <div className="evaluation-actions">
              {evaluationContact ? (
                <a className="button button--primary" href={evaluationContact.href}>
                  Request a 25-minute evaluation <ArrowRight size={18} aria-hidden="true" />
                </a>
              ) : (
                <a className="button button--primary" href="#founder">
                  Review the founder plan <ArrowRight size={18} aria-hidden="true" />
                </a>
              )}
              <a className="button button--outline-light" href="/evidence">
                Review the evidence boundary
              </a>
            </div>
            {!evaluationContact && (
              <p className="contact-pending">Public evaluation contact is pending founder confirmation.</p>
            )}
          </div>
          <div className="evaluation-spec">
            <div className="evaluation-spec__top">
              <SquareTerminal size={22} aria-hidden="true" />
              <span>PROPOSED EVALUATION INPUT</span>
            </div>
            <ul>
              {evaluationShape.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="evaluation-spec__output">
              <small>TERMINAL OUTPUT</small>
              <strong>Evidence-backed result / portfolio / BOUNDARY</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="section section--paper">
        <div className="shell">
          <SectionHeading
            eyebrow="COMMERCIAL WEDGE"
            title="A staged route from technical evaluation to private deployment."
            text="The commercial path is planned, not traction. No customers, revenue, pilots, or partner commitments are represented on this site."
          />
          <div className="business-path">
            {businessSteps.map((step, index) => (
              <div key={step} className="business-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < businessSteps.length - 1 && <ArrowRight size={18} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="use-case-grid">
            <article>
              <Building2 size={21} aria-hidden="true" />
              <h3>Sovereign and enterprise AI</h3>
              <p>Long-running systems where the authoritative decision state must be inspected and replayed.</p>
            </article>
            <article>
              <Database size={21} aria-hidden="true" />
              <h3>Scientific and industrial workflows</h3>
              <p>Bounded sequential evidence with competing hypotheses and expensive corrections.</p>
            </article>
            <article>
              <MapPinned size={21} aria-hidden="true" />
              <h3>Regulated decision support</h3>
              <p>Private evaluation settings that require disclosed scope and explicit failure boundaries.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section section--white">
        <div className="shell">
          <SectionHeading
            eyebrow="ROADMAP"
            title="From verified mechanics to externally grounded learning."
            text="Each milestone closes a dependency before the next capability is authorized."
          />
          <div className="roadmap">
            {roadmap.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <small>IN DEVELOPMENT</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="abu-dhabi" className="section section--abu-dhabi">
        <div className="shell">
          <SectionHeading
            eyebrow="WHY ABU DHABI"
            title="Abu Dhabi is GALO’s planned operating base — not a satellite office."
            text="The next stage needs technical evaluation partners, company formation, focused hiring, and access to a serious AI infrastructure ecosystem in one place."
          />
          <div className="abu-grid">
            <article>
              <span>01</span>
              <h3>AI ecosystem</h3>
              <p>
                Access to research, compute, engineering, and infrastructure relationships relevant to a private
                technical evaluation.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Market access</h3>
              <p>
                Proximity to enterprise, government, and sovereign-AI teams able to define bounded partner-owned
                settings.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Company building</h3>
              <p>
                A base for incorporation, relocation, hiring, legal operations, finance, and the next fundraising
                evidence.
              </p>
            </article>
          </div>
          <div className="twelve-month-plan">
            <div>
              <p className="eyebrow">12-MONTH CONTRIBUTION PLAN</p>
              <h3>Build the external-evidence layer from Abu Dhabi.</h3>
            </div>
            <ol>
              <li>
                <span>01</span>Relocate the founder and establish the operating company
              </li>
              <li>
                <span>02</span>Hire a founding systems engineer and research/evaluation engineer
              </li>
              <li>
                <span>03</span>Release a private Runtime and World Atlas alpha
              </li>
              <li>
                <span>04</span>Complete two partner-grade technical evaluations
              </li>
              <li>
                <span>05</span>Target one committed or paid pilot and prepare seed evidence
              </li>
            </ol>
          </div>
          <p className="endorsement-note">No programme selection, partnership, or endorsement is implied.</p>
        </div>
      </section>

      <section id="founder" className="section section--founder">
        <div className="shell founder-grid">
          <div className="founder-monogram" aria-hidden="true">
            <span>RA</span>
            <small>FOUNDER / ARCHITECT</small>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">FOUNDER</p>
            <h2>Founder-led research, built with adversarial claim discipline.</h2>
            <div className="founder-name">
              <h3>{siteContent.founder.name}</h3>
              <span>{siteContent.founder.role}</span>
            </div>
            <p>{siteContent.founder.bio}</p>
            <div className="founder-facts">
              <div>
                <small>RELOCATION</small>
                <strong>{siteContent.founder.relocation}</strong>
              </div>
              <div>
                <small>FOUNDING TEAM PLAN</small>
                <strong>Systems engineering · Research/evaluation · Abu Dhabi partnerships</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="shell final-cta__inner">
          <div>
            <p className="eyebrow eyebrow--cyan">NEXT CONVERSATION</p>
            <h2>Evaluate the architecture on a bounded problem.</h2>
            <p>
              Bring partner-owned sequential data, a falsifiable outcome, and a setting where explicit state and replay
              matter.
            </p>
          </div>
          <div className="final-cta__actions">
            <a className="button button--primary" href={evaluationContact?.href ?? "/evidence"}>
              {evaluationContact ? "Request a technical evaluation" : "Inspect the evidence first"}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--outline-light" href="/#receipt">
              Inspect the recorded receipt
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
