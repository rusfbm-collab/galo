import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Braces,
  CircleAlert,
  CircleCheck,
  Eye,
  FileCheck2,
  Layers3,
  Orbit,
  Route,
  ShieldCheck,
} from "lucide-react";
import { AbsorbingGateFigure } from "../components/diagrams/AbsorbingGateFigure";
import { CayleyHeatmapFigure } from "../components/diagrams/CayleyHeatmapFigure";
import { CheckCostFigure } from "../components/diagrams/CheckCostFigure";
import { CommutingSquareFigure } from "../components/diagrams/CommutingSquareFigure";
import { CoordinateCountFigure } from "../components/diagrams/CoordinateCountFigure";
import { CyclicDialFigure } from "../components/diagrams/CyclicDialFigure";
import { FoundationChainFigure } from "../components/diagrams/FoundationChainFigure";
import { NamedStateFigure } from "../components/diagrams/NamedStateFigure";
import { ObjectSizeFigure } from "../components/diagrams/ObjectSizeFigure";
import { LevelTransferFigure } from "../components/diagrams/LevelTransferFigure";
import { OrbitFigure } from "../components/diagrams/OrbitFigure";
import { ProgramTreeFigure } from "../components/diagrams/ProgramTreeFigure";
import { ReaderQuestionFigure } from "../components/diagrams/ReaderQuestionFigure";
import { ReadingLaneFigure } from "../components/diagrams/ReadingLaneFigure";
import { WhyMathematicsFigure } from "../components/diagrams/WhyMathematicsFigure";
import { ResolutionLossFigure } from "../components/diagrams/ResolutionLossFigure";
import { RoleOrientationFigure } from "../components/diagrams/RoleOrientationFigure";
import { SelectorFunnelFigure } from "../components/diagrams/SelectorFunnelFigure";
import { FamiliarTableBridgeFigure } from "../components/diagrams/FamiliarTableBridgeFigure";
import { StarResetFigure } from "../components/diagrams/StarResetFigure";
import { ThreeShelvesFigure } from "../components/diagrams/ThreeShelvesFigure";
import { TypedActionMeaningFigure } from "../components/diagrams/TypedActionMeaningFigure";
import { PageShell } from "../components/layout/PageShell";
import { ConceptLessonCard } from "../components/math/ConceptLessonCard";
import { TermButton, TermChips } from "../components/theory/TermExplainer";
import { TransitionTutor } from "../components/theory/TransitionTutor";
import { DifferenceMapFigure } from "../components/diagrams/DifferenceMapFigure";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  canonicalTypedCellCount,
  rawCellsPerOperator,
  rawLawCellCount,
  sameLevelAutomorphismCount,
  structuralOrbitCount,
  structuralOrbitCountByBurnside,
  symmetryLevelProfiles,
} from "../content/mathematics";
import {
  beginnerCountLedger,
  currentV4Flow,
  runtimeArithmeticRows,
  targetArchitectureFlow,
  theoryArchitectureLayers,
  theoryEvidenceLadder,
  theoryGlossary,
  theoryMisconceptions,
  theoryObjectClasses,
  theorySymbolLegend,
} from "../content/theory";
import { afterThisChapter, chapterVocabulary } from "../content/orientation";
import { cayleyFoundation, cayleyWhyFinite } from "../content/plainLanguage";
import { releaseEvidence } from "../content/evidence";
import { termSlug } from "../content/termPages";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#orientation", label: "If you are not a mathematician" },
  { href: "#cayley-first", label: "Start with the table" },
  { href: "#one-sentence", label: "The idea in one sentence" },
  { href: "#states", label: "States, levels, and wraparound" },
  { href: "#plus-star", label: "PLUS and STAR without jargon" },
  { href: "#p0", label: "Why P0 has two one-sided roles" },
  { href: "#typed-actions", label: "Source, active, LEFT, and RIGHT" },
  { href: "#guided-lab", label: "Guided transition laboratory" },
  { href: "#count-560", label: "Where the number 560 comes from" },
  { href: "#programs", label: "From cells to bracketed programs" },
  { href: "#symmetry-simple", label: "Symmetry in plain language" },
  { href: "#levels-maps", label: "Maps between levels" },
  { href: "#architecture-map", label: "How the mathematics fits the architecture" },
  { href: "#evidence-language", label: "How to read GALO evidence" },
  { href: "#glossary", label: "Plain-language glossary" },
] as const;

function isolateLtrTokens(text: string, tokens: readonly string[]) {
  const ordered = [...new Set(tokens)].filter(Boolean).sort((left, right) => right.length - left.length);
  if (ordered.length === 0) return text;
  const escaped = ordered.map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const tokenSet = new Set(ordered);
  return text
    .split(pattern)
    .filter((part) => part.length > 0)
    .map((part, index) =>
      tokenSet.has(part) ? (
        <bdi key={`${part}-${index}`} dir="ltr">
          {part}
        </bdi>
      ) : (
        part
      ),
    );
}

const firstPrinciples = [
  {
    icon: Layers3,
    title: "Make the possible states explicit",
    text: "Start by writing down every position the system can be in, by name. Nothing is hidden inside a vector nobody can read.",
  },
  {
    icon: Route,
    title: "Make every transition addressable",
    text: "Four things name one exact step and no other: the level, which law and which way round, the position you were in, and the one applied to it.",
  },
  {
    icon: FileCheck2,
    title: "Separate calculation from interpretation",
    text: "The law works out where you land, and nothing more. What it means, who may act on it, what counts as evidence, and whether anything happens in the world are separate questions with separate rules.",
  },
] as const;

const actionFamilies = [
  {
    family: "PLUS_LEFT",
    placement: "raw left = source · raw right = active",
    example: "PLUS_LEFT(P0,P2)=PLUS(P0,P2)=P2",
    plain: "Add and wrap around, with the position you started from taken as the row.",
  },
  {
    family: "PLUS_RIGHT",
    placement: "raw left = active · raw right = source",
    example: "PLUS_RIGHT(P0,P2)=PLUS(P2,P0)=P2",
    plain: "The same two inputs, swapped over. PLUS lands in the same place either way, because order does not matter to it.",
  },
  {
    family: "STAR_LEFT",
    placement: "raw left = source · raw right = active",
    example: "STAR_LEFT(P0,P2)=STAR(P0,P2)=P0",
    plain: "Here the position you started from is the one that decides whether STAR resets.",
  },
  {
    family: "STAR_RIGHT",
    placement: "raw left = active · raw right = source",
    example: "STAR_RIGHT(P0,P2)=STAR(P2,P0)=P2",
    plain: "Here the applied position goes on the left, so it is the one that decides whether STAR resets.",
  },
] as const;

const currentV4ReplayLesson = theoryGlossary.find(({ term }) => term === "Current V4 step-by-step replay")!;

export function TheoryPage() {
  const { direction, href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--theory">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("START HERE · NO ADVANCED MATHEMATICS REQUIRED")}</p>
          <h1>{t("GALO theory, explained from the first state transition.")}</h1>
          <p>
            {t(
              "This guided chapter starts with a three-state dial and builds the theory one verified step at a time. Every key idea is shown in plain language, as a formula, as a finite table, and with an explicit limit on what it proves.",
            )}
          </p>
          <div className="theory-hero__path" aria-label={t("Learning path")}>
            <span>{t("named states")}</span>
            <ArrowRight size={16} aria-hidden="true" />
            <span>{t("exact transitions")}</span>
            <ArrowRight size={16} aria-hidden="true" />
            <span>{t("typed programs")}</span>
            <ArrowRight size={16} aria-hidden="true" />
            <span>{t("receipts and boundaries")}</span>
          </div>
          <div className="theory-hero__actions">
            <a className="button button--primary math-hero__action" href="#orientation">
              {t("Start here if you are not a mathematician")}{" "}
              <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
            </a>
            <a className="button button--outline-light math-hero__action" href="#cayley-first">
              {t("Begin with the mental model")}{" "}
              <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <PageContents
        label="Build the theory in this order"
        ariaLabel="Beginner theory chapter navigation"
        items={contents}
      />

      <section id="orientation" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("BEFORE ANY MATHEMATICS")}
            title={t("You can follow this chapter without doing any algebra.")}
            text={t(
              "This opening is written for somebody who has to decide whether this is worth funding, buying, or signing off on, and who is not going to work through the algebra to find out. It answers four things before the chapter starts: why there is mathematics here at all, what the six recurring words mean, which parts you can skip, and what you will be able to say once you are done.",
            )}
          />

          <WhyMathematicsFigure />
          <ReadingLaneFigure />

          <div className="orientation-block">
            <div className="orientation-block__head">
              <span>{t("SIX WORDS, EXPLAINED ONCE")}</span>
              <h3>{t("The chapter uses these constantly and never stops to define them again.")}</h3>
              <p>
                {t(
                  "This is the whole vocabulary. If a later section loses you, it is almost always one of these six words doing the work — open its page and the sentence usually resolves. Every word here has a page of its own with a real table from the tower and a worked example.",
                )}
              </p>
            </div>
            <div className="orientation-vocab">
              {chapterVocabulary.map((entry) => (
                <article key={entry.term}>
                  <h4>
                    <a href={href(`/term/${termSlug(entry.term)}`)}>
                      <span>{isolateLtrTokens(t(entry.term), ["PLUS", "STAR"])}</span>
                      <ArrowRight className="directional-icon" size={15} aria-hidden="true" />
                    </a>
                  </h4>
                  <p>{isolateLtrTokens(t(entry.plain), ["P0,", "P1,", "P2", "P1", "L1", "L7", "PLUS", "STAR"])}</p>
                  <p className="orientation-vocab__where">
                    <Eye size={14} aria-hidden="true" />
                    <span>{isolateLtrTokens(t(entry.whereYouMeetIt), ["L1", "L7"])}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>

          <ReaderQuestionFigure />

          <div className="orientation-block">
            <div className="orientation-block__head">
              <span>{t("WHAT YOU WILL BE ABLE TO SAY")}</span>
              <h3>{t("Four sentences, each with the check that settles it.")}</h3>
              <p>
                {t(
                  "A chapter that leaves you impressed but unable to state anything precisely has failed. These are the four claims this one is for, and next to each is the operation that settles it — all four are cheap enough to do while reading.",
                )}
              </p>
            </div>
            <ol className="orientation-takeaways">
              {afterThisChapter.map((entry, index) => (
                <li key={entry.claim}>
                  <span className="orientation-takeaways__number" dir="ltr">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="orientation-takeaways__claim">{t(entry.claim)}</p>
                    <p className="orientation-takeaways__check">
                      <CircleCheck size={15} aria-hidden="true" />
                      <span>{isolateLtrTokens(t(entry.check), ["560"])}</span>
                    </p>
                    <a href={href(entry.href)}>
                      {t("Go to the check")}
                      <ArrowRight className="directional-icon" size={14} aria-hidden="true" />
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="cayley-first" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("START WITH THE TABLE")}
            title={t("Everything on this site is built on one finite table.")}
            text={t(
              "Before any talk of architecture, agents, or evidence, there is a table of results for two inputs — the same object you already know as the multiplication table. If you follow only this section, you will still know what GALO is made of.",
            )}
          />
          <FamiliarTableBridgeFigure />

          <div className="theory-foundation-steps">
            {cayleyFoundation.map((step) => (
              <article key={step.number}>
                <span className="theory-foundation-steps__number" dir="ltr">
                  {step.number}
                </span>
                <h3>{t(step.title)}</h3>
                <p>{t(step.text)}</p>
                <code dir="ltr">{step.formal}</code>
              </article>
            ))}
          </div>

          <div className="theory-why-finite">
            <div className="theory-why-finite__heading">
              <span>{t("WHY A FINITE TABLE AND NOT A MODEL")}</span>
              <h3>{t("Four properties a table has and a trained model does not.")}</h3>
              <p>
                {t(
                  "This is the entire technical bet. A finite table is a weaker object than a learned model, and that weakness is exactly what makes each of the four properties below hold without exception.",
                )}
              </p>
            </div>
            <div className="theory-why-finite__grid">
              {cayleyWhyFinite.map((item) => (
                <article key={item.title}>
                  <CircleCheck size={19} aria-hidden="true" />
                  <h4>{t(item.title)}</h4>
                  <p>{t(item.text)}</p>
                </article>
              ))}
            </div>
          </div>

          <FoundationChainFigure />
          <CheckCostFigure />
          <TermChips terms={["Cayley table", "Binary operation", "Carrier", "Closure"]} />
        </div>
      </section>

      <section id="one-sentence" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE IDEA IN ONE SENTENCE")}
            title={t(
              "GALO writes out every move available at one spot, in full, so a move can be recalculated, checked, and run again.",
            )}
            text={t(
              "One position is not the whole picture a system holds. The wider design would use these coordinates inside an explicit World Atlas, but the mathematics on its own is not a language model, not a trained memory, not proof of intelligence, and not a certificate that anything is true.",
            )}
          />
          <div className="theory-first-principles">
            {firstPrinciples.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </article>
            ))}
          </div>
          <div
            className="theory-object-boundary-wrap"
            role="region"
            aria-label={t("Object boundary ledger")}
            tabIndex={0}
          >
            <table className="theory-object-boundary-table">
              <caption>{t("From a local pole to an execution witness: do not mix object classes.")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Object")}</th>
                  <th scope="col">{t("Layer / status")}</th>
                  <th scope="col">{t("Exact form")}</th>
                  <th scope="col">{t("What it is")}</th>
                  <th scope="col">{t("What it is not")}</th>
                </tr>
              </thead>
              <tbody>
                {theoryObjectClasses.map((item) => (
                  <tr key={item.object}>
                    <th scope="row">{t(item.object)}</th>
                    <td dir="ltr">{item.layer}</td>
                    <td>
                      <code dir="ltr">{item.exact}</code>
                    </td>
                    <td>{t(item.meaning)}</td>
                    <td>{t(item.boundary)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="theory-running-example">
            <div>
              <span>{t("Running example")}</span>
              <strong dir="ltr">L3 · Q_3={`{P0,P1,P2}`}</strong>
            </div>
            <p>
              {t(
                "Imagine a dial with exactly three labelled positions. P0, P1, and P2 are names for those positions. The labels may later receive domain meaning, but the mathematics initially knows only the finite positions and their transition rules.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section id="states" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("STATES, LEVELS, AND WRAPAROUND")}
            title={t("A level says how many situations you can tell apart at one spot.")}
            text={t(
              "Level n gives you n named positions. For the arithmetic, position P_i stands for the remainder i after dividing by n, and that is what keeps the sums exact. It does not make P_i mean the same thing everywhere it appears.",
            )}
          />
          <div className="theory-dial-grid">
            <article className="theory-dial-card">
              <span>{t("The L3 dial")}</span>
              <div className="theory-dial" aria-label={t("Three-state cyclic dial")}>
                <strong>P0</strong>
                <ArrowRight size={18} aria-hidden="true" />
                <strong>P1</strong>
                <ArrowRight size={18} aria-hidden="true" />
                <strong>P2</strong>
                <ArrowRight size={18} aria-hidden="true" />
                <strong>P0</strong>
              </div>
              <code dir="ltr">0 → 1 → 2 → 0 · mod 3</code>
              <p>{t("After P2, one more cyclic step returns to P0. That is all wraparound means here.")}</p>
            </article>
            <article className="theory-object-card">
              <span>{t("Three different object classes")}</span>
              <dl>
                <div>
                  <dt>{t("Label")}</dt>
                  <dd dir="ltr">P2</dd>
                </div>
                <div>
                  <dt>{t("Calculation index")}</dt>
                  <dd dir="ltr">2 mod 3</dd>
                </div>
                <div>
                  <dt>{t("Domain meaning")}</dt>
                  <dd>{t("Not supplied by the algebra; it must come from a separate typed map and evidence.")}</dd>
                </div>
              </dl>
            </article>
          </div>
          <NamedStateFigure />
          <CyclicDialFigure level={3} source={1} active={2} />
          <ResolutionLossFigure />
          <div className="theory-analogy-boundary">
            <CircleAlert size={20} aria-hidden="true" />
            <p>
              <strong>{t("Analogy boundary:")}</strong>{" "}
              {t(
                "The dial explains modular arithmetic, not the semantics of GALO. P0 is not automatically false, empty, bad, safe, or authorized; P1 and P2 are not quantities unless a separate model declares them to be.",
              )}
            </p>
          </div>
          <TermChips terms={["Carrier", "Pole", "Level", "Modulo n", "Residue class"]} />
        </div>
      </section>

      <section id="plus-star" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("PLUS AND STAR WITHOUT JARGON")}
            title={t("PLUS always moves around the dial. STAR first asks one exact reset question.")}
            text={t(
              "Both laws take two positions and hand back one position at the same level. You can work out everything either law does from the formula, or read it straight off the table, and the two always agree.",
            )}
          />
          <div className="theory-law-grid">
            <article>
              <div className="theory-law-card__symbol" aria-hidden="true">
                +
              </div>
              <span>{t("PLUS · cyclic addition")}</span>
              <h3>{t("Add the indices, then wrap around.")}</h3>
              <code dir="ltr">PLUS_n(P_i,P_j)=P_((i+j) mod n)</code>
              <div className="theory-worked-calculation" dir="ltr">
                <span>PLUS_3(P1,P2)</span>
                <b>=</b>
                <span>P_((1+2) mod 3)</span>
                <b>=</b>
                <strong>P0</strong>
              </div>
              <p>{t("At L3, moving two steps from index 1 lands on index 0 after wraparound.")}</p>
            </article>
            <article>
              <div className="theory-law-card__symbol" aria-hidden="true">
                ★
              </div>
              <span>{t("STAR · left-reset-sensitive addition")}</span>
              <h3>{t("Inspect the raw-left pole first.")}</h3>
              <code dir="ltr">STAR_n(P_i,P_j)=P0 (i=0); P_((i+j) mod n) (i≠0)</code>
              <div className="theory-worked-calculation" dir="ltr">
                <span>STAR_3(P0,P2)</span>
                <b>=</b>
                <span>i=0</span>
                <b>=</b>
                <strong>P0</strong>
              </div>
              <p>{t("The reset test examines only the raw-left input. A right P0 does not trigger it.")}</p>
            </article>
          </div>
          <StarResetFigure />
          <div className="theory-l3-tables">
            <table dir="ltr">
              <caption dir={direction}>{t("Complete L3 PLUS table")}</caption>
              <thead>
                <tr>
                  <th scope="col">+₃</th>
                  <th scope="col">P0</th>
                  <th scope="col">P1</th>
                  <th scope="col">P2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">P0</th>
                  <td>P0</td>
                  <td>P1</td>
                  <td>P2</td>
                </tr>
                <tr>
                  <th scope="row">P1</th>
                  <td>P1</td>
                  <td>P2</td>
                  <td>P0</td>
                </tr>
                <tr>
                  <th scope="row">P2</th>
                  <td>P2</td>
                  <td>P0</td>
                  <td>P1</td>
                </tr>
              </tbody>
            </table>
            <table dir="ltr">
              <caption dir={direction}>{t("Complete L3 STAR table")}</caption>
              <thead>
                <tr>
                  <th scope="col">★₃</th>
                  <th scope="col">P0</th>
                  <th scope="col">P1</th>
                  <th scope="col">P2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">P0</th>
                  <td className="is-reset">P0</td>
                  <td className="is-reset">P0</td>
                  <td className="is-reset">P0</td>
                </tr>
                <tr>
                  <th scope="row">P1</th>
                  <td>P1</td>
                  <td>P2</td>
                  <td>P0</td>
                </tr>
                <tr>
                  <th scope="row">P2</th>
                  <td>P2</td>
                  <td>P0</td>
                  <td>P1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="theory-table-reconciliation">
            <CircleCheck size={18} aria-hidden="true" />
            {t(
              "Consistency check: every displayed table cell is obtained by substituting its row and column indices into the displayed formula. The two channels agree for all nine L3 input pairs.",
            )}
          </p>
          <CayleyHeatmapFigure />
          <DifferenceMapFigure />
          <TermChips terms={["Binary operation", "Cayley table", "PLUS", "STAR", "Closure", "Commutativity"]} />
        </div>
      </section>

      <section id="p0" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHY P0 HAS TWO ONE-SIDED ROLES")}
            title={t("The side on which P0 appears changes the statement.")}
            text={t(
              "At every level with more than one position, STAR treats P0 differently depending on which side it sits. On the left it swallows the answer; on the right it leaves the other input untouched. Two separate one-sided facts, not one rule that works both ways.",
            )}
          />
          <div className="theory-p0-grid">
            <article>
              <span>{t("P0 on the left")}</span>
              <code dir="ltr">P0 ★ P_j = P0</code>
              <h3>{t("Left zero")}</h3>
              <p>{t("Whatever appears on the right, a raw-left P0 forces the result to P0.")}</p>
            </article>
            <article>
              <span>{t("P0 on the right")}</span>
              <code dir="ltr">P_i ★ P0 = P_i</code>
              <h3>{t("Right-neutral element")}</h3>
              <p>{t("Placing P0 on the right leaves the raw-left pole unchanged.")}</p>
            </article>
            <article className="theory-p0-grid__counterexample">
              <span>{t("Why P0 is not a two-sided identity")}</span>
              <code dir="ltr">P0 ★ P1 = P0 ≠ P1</code>
              <h3>{t("The left identity law fails")}</h3>
              <p>{t("A two-sided identity e would require e★x=x and x★e=x. P0 satisfies only the second equation.")}</p>
            </article>
          </div>
          <div className="theory-identity-proof">
            <span>{t("COMPLETE NONEXISTENCE PROOF · n≥2")}</span>
            <h3>{t("No other pole can secretly be a two-sided identity.")}</h3>
            <ol>
              <li>
                <code dir="ltr">P1 ★ e = P1</code>
                <p>
                  {t(
                    "If e were a two-sided identity, the right-identity equation would have to hold for the nonzero pole P1.",
                  )}
                </p>
              </li>
              <li>
                <code dir="ltr">e=P_k ∈ Q_n · P1★P_k=P_((1+k) mod n)=P1 ⇒ k≡0 (mod n) ⇒ e=P0</code>
                <p>{t("The STAR nonzero row follows cyclic addition, so this equation forces e to have index 0.")}</p>
              </li>
              <li>
                <code dir="ltr">e ★ P1 = P0 ★ P1 = P0 ≠ P1</code>
                <p>{t("The only possible candidate then fails the left-identity equation.")}</p>
              </li>
            </ol>
            <strong>{t("Conclusion: STAR has no two-sided identity at any level n≥2.")}</strong>
          </div>
          <div className="theory-exception-card">
            <strong>L1</strong>
            <p>
              {isolateLtrTokens(
                t(
                  "At the one-element level, P0★P0=P0, so left zero, right-neutral, two-sided zero, and two-sided identity collapse into the same single equation. Every statement for n≥2 must keep this degenerate exception separate.",
                ),
                ["P0★P0=P0", "n≥2"],
              )}
            </p>
          </div>
          <AbsorbingGateFigure />
          <details className="theory-check">
            <summary>{t("Check your understanding: does right-neutral mean commutative?")}</summary>
            <p>
              {isolateLtrTokens(
                t(
                  "No. At L3, P0★P1=P0 while P1★P0=P1. The different results directly prove that STAR is not commutative.",
                ),
                ["L3", "P0★P1=P0", "P1★P0=P1", "STAR"],
              )}
            </p>
          </details>
          <TermChips
            terms={["Left zero", "Right-neutral element", "Identity element", "Magma, semigroup, monoid, and group"]}
          />
        </div>
      </section>

      <section id="typed-actions" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHO ACTED ON WHOM")}
            title={t("Two records can reach the same answer and still be different records.")}
            text={isolateLtrTokens(
              t(
                "A table cell tells you the answer and nothing about how you arrived at it. But the record has to keep which position was the situation and which was the thing applied to it, because a review a year later asks who acted on whom, not merely what came out. Keeping that distinction is why one table of answers becomes four kinds of record, and why the count on this page is larger than the tables alone would suggest.",
              ),
              ["LEFT", "RIGHT", "World Atlas"],
            )}
          />
          <div
            className="theory-role-flow"
            role="region"
            aria-label={t("Source-active role placement flow")}
            tabIndex={0}
          >
            <div>
              <span>{t("semantic inputs")}</span>
              <strong>{t("source, active")}</strong>
            </div>
            <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            <div>
              <span>{t("orientation")}</span>
              <strong>{t("LEFT or RIGHT")}</strong>
            </div>
            <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            <div>
              <span>{t("raw operands")}</span>
              <strong>{t("row, column")}</strong>
            </div>
            <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            <div>
              <span>{t("law")}</span>
              <strong>{t("PLUS or STAR")}</strong>
            </div>
            <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            <div>
              <span>{t("output")}</span>
              <strong>{t("target")}</strong>
            </div>
          </div>
          <RoleOrientationFigure />
          <TypedActionMeaningFigure />
          <div
            className="theory-action-table-wrap"
            role="region"
            aria-label={t("The four typed action families at source P0 and active P2 on L3")}
            tabIndex={0}
          >
            <table className="theory-action-table">
              <caption>{t("The four typed action families at source P0 and active P2 on L3")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Family")}</th>
                  <th scope="col">{t("Operand placement")}</th>
                  <th scope="col">{t("Direct calculation")}</th>
                  <th scope="col">{t("Plain meaning")}</th>
                </tr>
              </thead>
              <tbody>
                {actionFamilies.map((row) => (
                  <tr key={row.family}>
                    <th scope="row" dir="ltr">
                      {row.family}
                    </th>
                    <td>{t(row.placement)}</td>
                    <td>
                      <code dir="ltr">{row.example}</code>
                    </td>
                    <td>{t(row.plain)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="theory-table-reconciliation theory-table-reconciliation--light">
            <CircleCheck size={18} aria-hidden="true" />
            {t(
              "Direct witness: PLUS_LEFT and PLUS_RIGHT reach the same P2 but remain different typed addresses. STAR_LEFT reaches P0 and STAR_RIGHT reaches P2 because the reset test follows the raw-left operand.",
            )}
          </p>
          <div className="theory-two-towers">
            <div className="theory-two-towers__heading">
              <span>{t("WHY THE PROJECT SPEAKS OF TWO TOWERS")}</span>
              <h3>{t("PLUS and STAR use the same poles but preserve different algebraic structure.")}</h3>
              <p>
                {t(
                  "Tower is project language for the indexed L1–L7 families. It does not mean that every neighboring level embeds into the next one.",
                )}
              </p>
            </div>
            <div className="theory-two-towers__grid">
              <article>
                <span>{t("PLUS family")}</span>
                <code dir="ltr">G_n=(Q_n,PLUS_n,P0) ≅ C_n</code>
                <p>
                  {isolateLtrTokens(
                    t(
                      "PLUS is associative and commutative, P0 is a two-sided identity, and every pole has an inverse. If the named origin is forgotten, affine maps form the larger torsor symmetry group Hol(C_n).",
                    ),
                    ["PLUS", "P0", "Hol(C_n)"],
                  )}
                </p>
              </article>
              <article>
                <span>{t("STAR family")}</span>
                <code dir="ltr">S_n=(Q_n,STAR_n,P0)</code>
                <p>
                  {isolateLtrTokens(
                    t(
                      "STAR is a pointed total magma with a left zero and right-neutral P0. At n≥2 it is noncommutative, nonassociative, and has no affine translation symmetry layer.",
                    ),
                    ["STAR", "P0", "n≥2"],
                  )}
                </p>
              </article>
              <article className="theory-two-towers__full">
                <span>{t("Full expansion")}</span>
                <code dir="ltr">A_n=(Q_n,PLUS_n,STAR_n,P0)</code>
                <p>{t("This finite algebra has signature (2,2,0): two binary operations and one constant.")}</p>
              </article>
            </div>
          </div>
          <div className="theory-translation-bridge">
            <div className="theory-translation-bridge__heading">
              <span>{t("STANDARD TRANSLATIONS AND RANK · L3 · active P2")}</span>
              <h3>{t("Fix the active pole and watch which outputs the source can reach.")}</h3>
              <p>
                {t(
                  "Rank means the number of distinct outputs. The ABI name and the standard algebraic translation name point in opposite directions because the fixed active pole occupies the other operand slot.",
                )}
              </p>
            </div>
            <div className="theory-translation-bridge__cards">
              <article>
                <span>
                  <bdi dir="ltr">STAR_LEFT</bdi> · {t("standard right translation")}
                </span>
                <code dir="ltr">s ↦ s★P2 = R_P2(s)</code>
                <code dir="ltr">P0→P0 · P1→P0 · P2→P1</code>
                <strong dir="ltr">Im={`{P0,P1}`} · rank=2</strong>
                <p>
                  {isolateLtrTokens(
                    t(
                      "P0 resets to P0, while P1 wraps to P0 because 1+2≡0 (mod 3); two sources therefore share P0 and the image has rank 2.",
                    ),
                    ["P0", "P1", "1+2≡0 (mod 3)"],
                  )}
                </p>
              </article>
              <article>
                <span>
                  <bdi dir="ltr">STAR_RIGHT</bdi> · {t("standard left translation")}
                </span>
                <code dir="ltr">s ↦ P2★s = L_P2(s)</code>
                <code dir="ltr">P0→P2 · P1→P0 · P2→P1</code>
                <strong dir="ltr">Im=Q_3 · rank=3</strong>
                <p>{t("A nonzero fixed left pole cycles through every L3 output, so no output is lost.")}</p>
              </article>
              <article className="theory-translation-bridge__failure">
                <span>{t("Why a PLUS affine shift is not a STAR symmetry")}</span>
                <code dir="ltr">T1(P_i)=P_((i+1) mod 3)</code>
                <code dir="ltr">T1(P0★P0)=P1 ≠ P2=T1(P0)★T1(P0)</code>
                <strong dir="ltr">preservation=FAIL</strong>
                <p>
                  {t(
                    "The shift moves the distinguished reset point P0. It is valid for the unpointed PLUS torsor but fails the STAR law.",
                  )}
                </p>
              </article>
            </div>
          </div>
          <TermChips
            terms={["Source state", "Active pole", "Typed coordinate", "Standard left and right translation", "Rank"]}
          />
        </div>
      </section>

      <section id="guided-lab" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("GUIDED TRANSITION LABORATORY")}
            title={t("Rebuild one step four ways: from the roles, the formula, the table, and the record.")}
            text={t(
              "Start with the L3 reset example, then change one control at a time. The explanation, formula channel, complete table, and record must continue to agree.",
            )}
          />
          <TransitionTutor />
        </div>
      </section>

      <section id="count-560" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHERE THE NUMBER 560 COMES FROM")}
            title={t("Count the addresses first, then the laws, then which input played which role.")}
            text={t(
              "No statistical estimate is involved. The count is a complete finite enumeration across L1–L7, and each multiplication in the derivation has a different object-level meaning.",
            )}
          />
          <CoordinateCountFigure />
          <ObjectSizeFigure />
          <div className="theory-count-equation" dir="ltr">
            <span>Σ_(n=1)^7 n²</span>
            <b>=</b>
            <strong>{rawCellsPerOperator}</strong>
            <span>2 × {rawCellsPerOperator}</span>
            <b>=</b>
            <strong>{rawLawCellCount}</strong>
            <span>2 × {rawLawCellCount}</span>
            <b>=</b>
            <strong>{canonicalTypedCellCount}</strong>
          </div>
          <div className="theory-count-table-wrap" role="region" aria-label={t("Complete count ledger")} tabIndex={0}>
            <table className="theory-count-table">
              <caption>{t("Complete count ledger")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Object counted")}</th>
                  <th scope="col">{t("Calculation")}</th>
                  <th scope="col">{t("Count")}</th>
                  <th scope="col">{t("What the number means")}</th>
                </tr>
              </thead>
              <tbody>
                {beginnerCountLedger.map((row) => (
                  <tr key={row.object}>
                    <th scope="row">{t(row.object)}</th>
                    <td dir="ltr">{row.calculation}</td>
                    <td dir="ltr">{row.count}</td>
                    <td>{t(row.meaning)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="theory-not-list">
            <strong>{t("560 is not")}</strong>
            <span>{t("560 neurons")}</span>
            <span>{t("560 concepts")}</span>
            <span>{t("560 learned skills")}</span>
            <span>{t("560 meanings")}</span>
            <span>{t("560 units of intelligence")}</span>
          </div>
          <details className="theory-check">
            <summary>{t("Why count LEFT and RIGHT separately when PLUS gives the same targets?")}</summary>
            <p>
              {t(
                "Because a typed coordinate records semantic roles, not only its numeric output. Two transitions may end at the same pole while carrying different source-active provenance and different compatibility obligations.",
              )}
            </p>
          </details>
          <TermChips terms={["Typed catalogue count", "Typed coordinate", "Signature, arity, and constant"]} />
        </div>
      </section>

      <section id="programs" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("FROM CELLS TO BRACKETED PROGRAMS")}
            title={t("One cell is one step. A program is an explicit tree of steps.")}
            text={t(
              "The target of one cell may feed another cell. For PLUS the grouping does not change the result; for STAR it can. Therefore a list of operands is not a complete STAR program—the brackets are executable structure.",
            )}
          />
          <ProgramTreeFigure />
          <div className="theory-program-grid">
            <article>
              <span>{t("Left-associated L3 program")}</span>
              <code dir="ltr">(P1★P0)★P1 = P1★P1 = P2</code>
              <div className="theory-program-tree" dir="ltr">
                <strong>★ → P2</strong>
                <div>
                  <span>★ → P1</span>
                  <span>P1</span>
                </div>
                <div>
                  <span>P1</span>
                  <span>P0</span>
                </div>
              </div>
            </article>
            <article>
              <span>{t("Right-associated L3 program")}</span>
              <code dir="ltr">P1★(P0★P1) = P1★P0 = P1</code>
              <div className="theory-program-tree" dir="ltr">
                <strong>★ → P1</strong>
                <div>
                  <span>P1</span>
                  <span>★ → P0</span>
                </div>
                <div>
                  <span>P0</span>
                  <span>P1</span>
                </div>
              </div>
            </article>
          </div>
          <div className="theory-definition-row">
            <Braces size={22} aria-hidden="true" />
            <div>
              <strong>{t("Nonassociative")}</strong>
              <p>
                {t(
                  "Changing the brackets can change the result. The L3 calculations above are an exact counterexample to associativity.",
                )}
              </p>
            </div>
          </div>
          <p className="theory-table-reconciliation theory-table-reconciliation--light">
            <CircleCheck size={18} aria-hidden="true" />
            {t(
              "Consistency check: direct table lookup gives P2 for the left tree and P1 for the right tree. The formula and tree evaluation agree.",
            )}
          </p>
          <TermChips
            terms={[
              "Composition",
              "Nonassociative",
              "Associativity",
              "Zero-prefix rule",
              "Catalan number and bracket recurrence",
            ]}
          />
        </div>
      </section>

      <section id="symmetry-simple" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("SYMMETRY IN PLAIN LANGUAGE")}
            title={t("A symmetry is a reversible relabelling that leaves the declared rules unchanged.")}
            text={t(
              "At L3, multiplying indices by 2 swaps P1 and P2 while fixing P0. Recompute every PLUS and STAR cell after the swap: the operation tables retain the same structure.",
            )}
          />
          <OrbitFigure />
          <div className="theory-symmetry-example">
            <article>
              <Orbit size={24} aria-hidden="true" />
              <span>{t("L3 relabelling")}</span>
              <code dir="ltr">σ(P0)=P0 · σ(P1)=P2 · σ(P2)=P1</code>
              <p>{t("This permutation is an automorphism because it is reversible and preserves both operations.")}</p>
            </article>
            <article>
              <span>{t("Orbit of one pole")}</span>
              <code dir="ltr">Orb(P1)={`{P1,P2}`}</code>
              <p>
                {t(
                  "P1 can be carried to P2 by an allowed symmetry. P0 forms its own orbit because every automorphism fixes it.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Stabilizer of P1")}</span>
              <code dir="ltr">Stab(P1)={`{id}`}</code>
              <p>{t("Only the identity relabelling leaves P1 exactly where it is.")}</p>
            </article>
          </div>
          <div className="theory-burnside-simple">
            <div>
              <span>{t("Identity fixes")}</span>
              <strong dir="ltr">3</strong>
            </div>
            <div>
              <span>{t("Swap fixes")}</span>
              <strong dir="ltr">1 · P0</strong>
            </div>
            <div>
              <span>{t("Average")}</span>
              <strong dir="ltr">(3+1)/2 = 2</strong>
            </div>
          </div>
          <p className="theory-table-reconciliation">
            <CircleCheck size={18} aria-hidden="true" />
            {isolateLtrTokens(
              t(
                "Local L3 carrier witness: direct inspection gives the two pole orbits {P0} and {P1,P2}; averaging fixed poles also gives two.",
              ),
              ["L3", "{P0}", "{P1,P2}"],
            )}
          </p>
          <div className="theory-orbit-bridge">
            <div className="theory-orbit-bridge__heading">
              <span>{t("FROM TWO L3 POLE ORBITS TO 224 TYPED ORBITS")}</span>
              <h3>{t("The counted set changes, so the number changes.")}</h3>
              <p>
                {t(
                  "The example above acts on three individual poles at L3. The whole-tower count acts on ordered source-active pairs, separately inside every level and every one of the four family fibres.",
                )}
              </p>
            </div>
            <div
              className="theory-orbit-ledger-wrap"
              role="region"
              aria-label={t("Fibrewise orbit ledger from L1 through L7")}
              tabIndex={0}
            >
              <table className="theory-orbit-ledger">
                <caption>{t("No orbit crosses a level or typed-family boundary")}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t("Level")}</th>
                    <th scope="col">{t("Pole orbits")}</th>
                    <th scope="col">{t("Ordered-pair orbits")}</th>
                    <th scope="col">{t("Four-family typed orbits")}</th>
                    <th scope="col">|Aut(A_n)|</th>
                  </tr>
                </thead>
                <tbody>
                  {symmetryLevelProfiles.map((profile) => (
                    <tr key={profile.level}>
                      <th scope="row">L{profile.level}</th>
                      <td>{profile.carrierOrbitCount}</td>
                      <td>{profile.pairOrbitCount}</td>
                      <td>{4 * profile.pairOrbitCount}</td>
                      <td>{profile.automorphismOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="theory-orbit-equations" dir="ltr">
              <code>Σ pair_orbits = 1+4+5+10+7+20+9 = 56</code>
              <code>4 family fibres × 56 = {structuralOrbitCount}</code>
              <code>Σ |Aut(A_n)| = 1+1+2+2+4+2+6 = {sameLevelAutomorphismCount}</code>
            </div>
            <p>
              {t(
                "At L3 specifically there are two pole orbits, five ordered-pair orbits, and therefore twenty typed orbits. The number 18 is only a sum of seven local group orders, not one global 18-element group.",
              )}
            </p>
          </div>
          <div className="theory-symmetry-receipt" dir="ltr">
            <span>check_id=FIBREWISE_TYPED_ORBIT_RECONCILIATION_L1_TO_L7</span>
            <strong>direct_enumeration={structuralOrbitCount}</strong>
            <strong>burnside_reconstruction={structuralOrbitCountByBurnside}</strong>
            <strong>status=PASS</strong>
          </div>
          <p className="theory-table-reconciliation">
            <CircleCheck size={18} aria-hidden="true" />
            {t(
              "Whole-tower consistency witness: independent direct pair-orbit traversal and the Burnside fixed-point formula both reconstruct 224 typed orbits.",
            )}
          </p>
          <div className="theory-symmetry-boundary">
            <strong>{t("What symmetry does not mean")}</strong>
            <p>
              {t(
                "Orbit membership does not make two records semantically identical and does not merge their provenance, permissions, evidence, or real-world consequences.",
              )}
            </p>
            <a className="button button--outline-light" href={href("/symmetry")}>
              {t("Continue to the complete symmetry chapter")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </div>
          <TermChips terms={["Automorphism", "Group action", "Orbit", "Stabilizer", "Burnside's lemma"]} />
        </div>
      </section>

      <section id="levels-maps" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("MOVING BETWEEN LEVELS")}
            title={t("Two levels using the same position names does not make the names mean the same thing.")}
            text={t(
              "Levels differ in how many cases they can tell apart, so carrying something from a coarse level to a finer one is a real question rather than a relabelling. There are three separate bars, each stricter than the last: the rules still have to hold, distinct things still have to stay distinct, and — before anything is done with the result — the transfer still has to be permitted. Clearing the first two is mathematics; the third is not, and this section marks where one stops.",
            )}
          />
          <CommutingSquareFigure />
          <LevelTransferFigure />
          <div className="theory-map-grid">
            <article className="theory-map-card theory-map-card--pass">
              <span>PASS · {t("nonzero embedding")}</span>
              <h3 dir="ltr">L2 → L4</h3>
              <code dir="ltr">h(P0)=P0 · h(P1)=P2</code>
              <div className="theory-map-checks" dir="ltr">
                <p>h(PLUS_2(P1,P1)) = h(P0) = P0</p>
                <p>PLUS_4(hP1,hP1) = PLUS_4(P2,P2) = P0</p>
                <p>h(STAR_2(P1,P1)) = P0 = STAR_4(P2,P2)</p>
              </div>
              <p>
                {t(
                  "Both laws agree on the shown pair, and exhaustive checking covers every source pair and all four typed families.",
                )}
              </p>
              <dl className="theory-exact-witness" dir="ltr">
                <div>
                  <dt>check_id</dt>
                  <dd>DIRECT_MORPHISM_REPLAY_L2_TO_L4</dd>
                </div>
                <div>
                  <dt>step_id</dt>
                  <dd>N/A — direct replay</dd>
                </div>
                <div>
                  <dt>rc / status</dt>
                  <dd>0 / PASS</dd>
                </div>
                <div>
                  <dt>mapping</dt>
                  <dd>h(P_i)=P_((2i) mod 4)</dd>
                </div>
                <div>
                  <dt>pairs_checked</dt>
                  <dd>4</dd>
                </div>
                <div>
                  <dt>families_checked</dt>
                  <dd>4</dd>
                </div>
                <div>
                  <dt>lawful_transfer_count</dt>
                  <dd>16</dd>
                </div>
                <div>
                  <dt>active_nontrivial</dt>
                  <dd>[L2→L4,L2→L6,L3→L6]</dd>
                </div>
                <div>
                  <dt>receipt_id</dt>
                  <dd>fc7946d5a85ec30ba495123bec2ba04288caca0c27b44fd0aace2ad8a5619f95</dd>
                </div>
                <div>
                  <dt>relpath</dt>
                  <dd>src/galo_next/route_execution/morphism_v1.py</dd>
                </div>
              </dl>
            </article>
            <article className="theory-map-card theory-map-card--boundary">
              <span>BOUNDARY · {t("same-name map fails")}</span>
              <h3 dir="ltr">L3 → L5</h3>
              <code dir="ltr">h(P_i)=P_i</code>
              <div className="theory-map-checks" dir="ltr">
                <p>h(PLUS_3(P1,P2)) = h(P0) = P0</p>
                <p>PLUS_5(hP1,hP2) = PLUS_5(P1,P2) = P3</p>
                <p>P0 ≠ P3 · FAIL</p>
              </div>
              <p>
                {t(
                  "The direct receipt rejects this same-index candidate. A separate order argument below rules out every nonzero full-algebra embedding L3→L5. The zero homomorphism still exists, so saying ‘no morphism exists’ would be false.",
                )}
              </p>
              <dl className="theory-exact-witness" dir="ltr">
                <div>
                  <dt>check_id</dt>
                  <dd>DIRECT_MORPHISM_REJECTION_L3_TO_L5</dd>
                </div>
                <div>
                  <dt>step_id</dt>
                  <dd>N/A — direct replay</dd>
                </div>
                <div>
                  <dt>rc / status</dt>
                  <dd>0 / EXPECTED_REJECTION</dd>
                </div>
                <div>
                  <dt>code</dt>
                  <dd>REJECT_R5B5F_NO_LAWFUL_LEVEL_TRANSFER</dd>
                </div>
                <div>
                  <dt>expected</dt>
                  <dd>
                    ((1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(2,2),(2,4),(2,6),(3,3),(3,6),(4,4),(5,5),(6,6),(7,7))
                  </dd>
                </div>
                <div>
                  <dt>got</dt>
                  <dd>[3,5]</dd>
                </div>
                <div>
                  <dt>where</dt>
                  <dd>transfer_level_v1</dd>
                </div>
                <div>
                  <dt>relpath</dt>
                  <dd>src/galo_next/route_execution/morphism_v1.py</dd>
                </div>
                <div>
                  <dt>json_path</dt>
                  <dd>$</dd>
                </div>
                <div>
                  <dt>boundary</dt>
                  <dd>BOUNDARY_LEVEL_ALIGNMENT_NOT_PROVEN</dd>
                </div>
                <div>
                  <dt>counterexample</dt>
                  <dd>φ(PLUS_3(P1,P2))=P0; PLUS_5(φP1,φP2)=P3</dd>
                </div>
                <div>
                  <dt>minimal_fix</dt>
                  <dd>explicit preservation-checked mapping or regenerate operands at a common level</dd>
                </div>
              </dl>
            </article>
          </div>
          <div className="theory-divisibility-proof">
            <span>{t("INDEPENDENT EMBEDDING THEOREM · n≥2")}</span>
            <h3>
              {isolateLtrTokens(t("A nonzero embedding A_n→A_m exists exactly when n divides m."), [
                "A_n→A_m",
                "n",
                "m",
              ])}
            </h3>
            <div>
              <article>
                <strong>01</strong>
                <code dir="ltr">f(P1)=P_k</code>
                <p>{t("PLUS preservation makes the image of the generator determine the entire map.")}</p>
              </article>
              <article>
                <strong>02</strong>
                <code dir="ltr">ord(P_k)=n</code>
                <p>{t("If the map is injective, the image of P1 must retain its exact cyclic order n.")}</p>
              </article>
              <article>
                <strong>03</strong>
                <code dir="ltr">∃x∈Z_m: ord(x)=n ⇔ n | m</code>
                <p>{t("A cyclic group of order m contains an element of order n exactly when n divides m.")}</p>
              </article>
              <article>
                <strong>04</strong>
                <code dir="ltr">3 ∤ 5 ⇒ Emb(A_3,A_5)=∅</code>
                <p>
                  {t(
                    "The failure is therefore structural. It is not that the same-index candidate happened to fall short.",
                  )}
                </p>
              </article>
            </div>
            <p>
              {isolateLtrTokens(
                t(
                  "Conversely, when n divides m, scaled maps h(P_i)=P_((u·m/n)i mod m) for unit u modulo n provide the nonzero embeddings; the archived replay selects one canonical scaling.",
                ),
                ["h(P_i)=P_((u·m/n)i mod m)", "n", "m", "u"],
              )}
            </p>
          </div>
          <p className="theory-compatibility-note">
            <strong>
              <bdi dir="ltr">COMPATIBILITY_ONLY:</bdi>
            </strong>{" "}
            {t(
              "These archived morphism receipts belong to the compatibility and audit layer. The legacy morphism_v1 module is excluded from the current V4 runtime wheel and is not a current public API capability.",
            )}
          </p>
          <div className="theory-map-types">
            <article>
              <strong>{t("Zero homomorphism")}</strong>
              <p>
                {t(
                  "Maps every pole to P0. It preserves the laws for every ordered level pair but collapses all distinctions.",
                )}
              </p>
            </article>
            <article>
              <strong>{t("Embedding")}</strong>
              <p>
                {t(
                  "Preserves the laws and keeps distinct poles distinct. For n≥2, nonzero A_n→A_m embeddings exist exactly when n divides m.",
                )}
              </p>
            </article>
            <article>
              <strong>{t("Operational transfer")}</strong>
              <p>
                {t(
                  "Requires an auditable alignment decision; a mathematical embedding alone does not authorize a real runtime transfer.",
                )}
              </p>
            </article>
          </div>
          <TermChips
            terms={["Homomorphism", "Zero homomorphism", "Embedding", "Divisibility and element order", "Boundary"]}
          />
        </div>
      </section>

      <section id="architecture-map" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("HOW THE MATHEMATICS FITS THE ARCHITECTURE")}
            title={t(
              "The formal alphabet, the current runtime, and the target learning system are three different layers.",
            )}
            text={t(
              "Three things are easy to hear as one, and most misreadings of this project start there. The mathematics is finished and is the smallest of the three. The released engine uses only a narrow slice of it. Everything else — the wider state, the learning loop — is written down and not built. Each row below says which of the three it belongs to.",
            )}
          />
          <div className="theory-architecture-stack">
            {theoryArchitectureLayers.map((layer, index) => (
              <article key={layer.number}>
                <span>{layer.number}</span>
                <div>
                  <small dir="ltr">{layer.status}</small>
                  <h3>{t(layer.title)}</h3>
                  <p>{t(layer.detail)}</p>
                </div>
                {index < theoryArchitectureLayers.length - 1 && (
                  <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
          <div className="theory-architecture-subheading">
            <span>{t("CURRENT V4 · EXACT REPLAYABLE PIPELINE")}</span>
            <h3>{t("A closed deterministic selector. Nothing about it was learned.")}</h3>
            <p>
              {t(
                "What the released engine does is narrow enough to describe in one sentence: it accepts two kinds of input, narrows a list that was fixed before it ran, and orders what is left by a rule that depends only on the inputs. Run it twice on the same input a year apart and it returns the same thing, because there is nothing inside it that carries over.",
              )}
            </p>
          </div>
          <SelectorFunnelFigure />
          <div
            className="theory-runtime-arithmetic-wrap"
            role="region"
            aria-label={t("Current V4 descriptor arithmetic")}
            tabIndex={0}
          >
            <table className="theory-runtime-arithmetic">
              <caption>{t("The four numbers this release is held to, and what each one counts")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Value")}</th>
                  <th scope="col">{t("Object counted")}</th>
                </tr>
              </thead>
              <tbody>
                {runtimeArithmeticRows.map((row) => (
                  <tr key={row.value}>
                    <th scope="row" dir="ltr">
                      {row.value}
                    </th>
                    <td>{t(row.meaning)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="theory-runtime-flow">
            {currentV4Flow.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.detail)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="theory-glossary">
            <ConceptLessonCard lesson={currentV4ReplayLesson} index={0} open direction={direction} translate={t} />
          </div>
          <div className="theory-current-contract">
            <p>
              <span>{t("Source-pattern rule")}</span>
              <code dir="ltr">alpha,beta → LEFT/even · gamma,delta → RIGHT/odd</code>
            </p>
            <p>
              <span>{t("Executable kinds")}</span>
              <code dir="ltr">FREE_FRAME · JOINT_COMPOSITION · PROBE · ROUTE</code>
            </p>
            <p>
              <span>{t("Atlas effects")}</span>
              <code dir="ltr">semantic_reads=0 · rank_effects=0 · learning_writes=0</code>
            </p>
          </div>
          <div
            className="theory-runtime-ledger"
            role="region"
            aria-label={t("Current V4 finite scope ledger")}
            tabIndex={0}
          >
            <table>
              <caption>{t("Current V4 finite scope ledger")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Object")}</th>
                  <th scope="col">{t("Exact value")}</th>
                  <th scope="col">{t("Interpretation")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{t("Formal typed catalogue")}</th>
                  <td dir="ltr">560</td>
                  <td>{t("L1–L7 mathematical coordinates")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Active typed catalogue")}</th>
                  <td dir="ltr">556</td>
                  <td>{t("L2–L7 active; L1 control-only")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Committed descriptors")}</th>
                  <td dir="ltr">1,204</td>
                  <td>{t("Declared finite candidate universe")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Executable descriptors")}</th>
                  <td dir="ltr">880</td>
                  <td>{t("Four allowed action kinds")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Frontier per source pattern")}</th>
                  <td dir="ltr">440</td>
                  <td>{t("Deterministically ordered candidates")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Accepted source patterns")}</th>
                  <td dir="ltr">2</td>
                  <td>{t("Fixed patterns, not arbitrary text")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Arity / route depth")}</th>
                  <td dir="ltr">2 / 1</td>
                  <td>{t("Binary, one-step current contour")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="theory-current-target">
            <article>
              <ShieldCheck size={22} aria-hidden="true" />
              <span>{t("Current V4 actually does")}</span>
              <ul>
                <li>{t("works inside a committed finite candidate universe")}</li>
                <li>{t("orders a 440-candidate frontier for each of two fixed source patterns")}</li>
                <li>{t("executes one bounded action and records receipts")}</li>
                <li>{t("performs zero Atlas semantic reads, rank effects, and learning writes")}</li>
              </ul>
            </article>
            <article>
              <CircleAlert size={22} aria-hidden="true" />
              <span>{t("Current V4 does not yet do")}</span>
              <ul>
                <li>{t("understand arbitrary natural-language observations")}</li>
                <li>{t("run a persistent learned policy")}</li>
                <li>{t("contain a trained World Atlas")}</li>
                <li>{t("prove external operational gain or General AI")}</li>
              </ul>
            </article>
          </div>
          <p className="theory-compatibility-note">
            <strong>{t("COMPATIBILITY HISTORY:")}</strong>{" "}
            {t(
              "A legacy relational-KG research artifact exists in compatibility history, but it is not the current V4 selector, has no proven strong-control advantage, and is not presented as a current trained Atlas.",
            )}
          </p>
          <p className="theory-architecture-boundary">
            {t(
              "The mathematical composition chapter describes a formal programming model. It must not be presented as a current multi-step runtime capability until the operational contracts and receipts exist.",
            )}
          </p>
          <div className="theory-target-heading">
            <span>{t("TARGET ARCHITECTURE · NOT CURRENT V4")}</span>
            <h3>{t("The intended learning loop begins only after stronger contracts exist.")}</h3>
            <p>
              {t(
                "Every stage below is architectural intent. It must not be read as a current runtime capability, trained system, external result, or authorized learning claim.",
              )}
            </p>
          </div>
          <ol className="theory-target-flow">
            {targetArchitectureFlow.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small dir="ltr">{step.status}</small>
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.detail)}</p>
                </div>
              </li>
            ))}
          </ol>
          <TermChips terms={["Formal, current, and target layers", "Current V4 step-by-step replay", "Receipt"]} />
        </div>
      </section>

      <section id="evidence-language" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("HOW TO READ GALO EVIDENCE")}
            title={t("A PASS on its own says nothing. It says something only with the exact scope it was checked in, and the result it ended on.")}
            text={t(
              "GALO separates mathematical derivation, executable tests, archive replay, operational evaluation, and open boundaries. Evidence from one layer does not automatically authorize a claim in another.",
            )}
          />
          <div className="theory-evidence-ladder">
            {theoryEvidenceLadder.map((item) => (
              <article key={item.status}>
                <span dir="ltr">{item.status}</span>
                <h3>{t(item.question)}</h3>
                <p>{t(item.example)}</p>
              </article>
            ))}
          </div>
          <ThreeShelvesFigure />
          <div className="theory-release-witness">
            <div>
              <span>{t("Current legal release status")}</span>
              <strong dir="ltr">{releaseEvidence.status}</strong>
            </div>
            <dl dir="ltr">
              <div>
                <dt>fresh STATIC</dt>
                <dd>{releaseEvidence.freshReplay.static}</dd>
              </div>
              <div>
                <dt>STATIC receipt</dt>
                <dd>{releaseEvidence.freshReplay.staticReceipt}</dd>
              </div>
              <div>
                <dt>fresh FAST</dt>
                <dd>{releaseEvidence.freshReplay.fast}</dd>
              </div>
              <div>
                <dt>FAST receipt</dt>
                <dd>{releaseEvidence.freshReplay.fastReceipt}</dd>
              </div>
              <div>
                <dt>fresh FULL</dt>
                <dd>{releaseEvidence.freshReplay.full}</dd>
              </div>
              <div>
                <dt>stored FULL</dt>
                <dd>1,366 / 1,366</dd>
              </div>
              <div>
                <dt>persistent_policy</dt>
                <dd>NOT_STARTED</dd>
              </div>
              <div>
                <dt>trained_current_atlas</dt>
                <dd>NOT_PRESENT</dd>
              </div>
              <div>
                <dt>external_operational_gain</dt>
                <dd>NOT_PROVEN</dd>
              </div>
              <div>
                <dt>general_ai</dt>
                <dd>NOT_CLAIMED</dd>
              </div>
            </dl>
            <p>
              {t(
                "Fresh STATIC and FAST are session replays. The FULL result is stored release evidence and was not freshly replayed in this review.",
              )}
            </p>
          </div>
          <TermChips terms={["Receipt", "Boundary", "Formal, current, and target layers"]} />
          <a className="button button--primary" href={href("/evidence")}>
            {t("Inspect the complete evidence matrix")}{" "}
            <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="glossary" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("PLAIN-LANGUAGE GLOSSARY")}
            title={t("Open a term for a complete seven-part explanation and two independent checks.")}
            text={t(
              "Every entry moves from analogy to exact definition, works a small example, explains why the claim is true, names a common mistake, and reconciles table and formula channels.",
            )}
          />
          <div className="term-index">
            <p className="eyebrow">{t("COMPLETE TERM INDEX")}</p>
            <h3>{t("Open any of the 59 terms and read it in full.")}</h3>
            <p className="term-index__text">
              {t(
                "Every entry is written the same way, so a term you already know teaches you how to read the ones you do not.",
              )}
            </p>
            <div className="term-index__row">
              {theoryGlossary.map((item) => (
                <TermButton key={item.term} term={item.term} />
              ))}
            </div>
          </div>
          <div
            className="theory-symbol-legend-wrap"
            role="region"
            aria-label={t("Mathematical symbol legend")}
            tabIndex={0}
          >
            <table className="theory-symbol-legend">
              <caption>{t("How to read the symbols used in this chapter")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Symbol")}</th>
                  <th scope="col">{t("Read aloud")}</th>
                  <th scope="col">{t("Meaning here")}</th>
                </tr>
              </thead>
              <tbody>
                {theorySymbolLegend.map((item) => (
                  <tr key={item.symbol}>
                    <th scope="row">
                      <code dir="ltr">{item.symbol}</code>
                    </th>
                    <td>{t(item.reading)}</td>
                    <td>{t(item.meaning)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="theory-glossary">
            {theoryGlossary
              .filter((item) => item.term !== currentV4ReplayLesson.term)
              .map((item, index) => (
                <ConceptLessonCard
                  key={item.term}
                  lesson={item}
                  index={index}
                  open={index < 3}
                  direction={direction}
                  translate={t}
                />
              ))}
          </div>
        </div>
      </section>

      <section id="misconceptions" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("COMMON MISCONCEPTIONS")}
            title={t("Six tempting shortcuts—and the exact correction for each one.")}
          />
          <div className="theory-misconceptions">
            {theoryMisconceptions.map((item) => (
              <article key={item.claim}>
                <div>
                  <CircleAlert size={18} aria-hidden="true" />
                  <strong>{t(item.claim)}</strong>
                </div>
                <p>
                  <CircleCheck size={17} aria-hidden="true" /> {t(item.correction)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy theory-next">
        <div className="shell">
          <BookOpenCheck size={30} aria-hidden="true" />
          <p className="eyebrow eyebrow--cyan">{t("CONTINUE AT YOUR DEPTH")}</p>
          <h2>{t("You now have the conceptual map. Choose the next verification layer.")}</h2>
          <div className="theory-next__links">
            <a href={href("/thinking")}>
              <span>{t("The decision procedure")}</span>
              <strong>{t("Nine stages of one thought, drawn as schemes")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/math")}>
              <span>{t("Exact formal kernel")}</span>
              <strong>{t("Tables, 560 coordinates, ranks, programs, and morphisms")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/symmetry")}>
              <span>{t("Academic symmetry")}</span>
              <strong>{t("Automorphisms, orbits, stabilizers, and Burnside")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/evidence")}>
              <span>{t("Release evidence")}</span>
              <strong>{t("Archive receipts, current runtime, and claim boundaries")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="theory-next__scope">
            {t(
              "End of beginner contour: finite mathematics is established and independently tested; persistent learning, a trained current Atlas, external operational gain, and General AI are not established.",
            )}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
