import { ArrowLeft, ArrowRight, CircleAlert, CircleCheck, Route, ShieldQuestion } from "lucide-react";
import { DeterministicChoiceFigure } from "../components/diagrams/DeterministicChoiceFigure";
import { RefusalGateFigure } from "../components/diagrams/RefusalGateFigure";
import { SelectorFunnelFigure } from "../components/diagrams/SelectorFunnelFigure";
import { ThinkingMemoryFigure } from "../components/diagrams/ThinkingMemoryFigure";
import { ThoughtLoopFigure } from "../components/diagrams/ThoughtLoopFigure";
import { ThoughtPipelineFigure } from "../components/diagrams/ThoughtPipelineFigure";
import { PageShell } from "../components/layout/PageShell";
import { TermChips } from "../components/theory/TermExplainer";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  memoryRegisters,
  refusalGates,
  thinkingMisreadings,
  thinkingWalkthrough,
  thoughtStages,
} from "../content/thinking";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#one-thought", label: "One thought, stage by stage" },
  { href: "#walkthrough", label: "The same thought with real values" },
  { href: "#gates", label: "Where a thought is allowed to stop" },
  { href: "#narrowing", label: "From 1,204 candidates down to one" },
  { href: "#loop", label: "What one step leaves behind" },
  { href: "#memory", label: "What crosses into the next thought" },
  { href: "#misreadings", label: "Five misreadings" },
] as const;

export function ThinkingPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--thinking">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("HOW GALO REACHES A DECISION")}</p>
          <h1>{t("The thinking schemes, drawn stage by stage.")}</h1>
          <p>
            {t(
              "This page opens the decision procedure and shows every stage of it: what arrives, what is checked, what narrows, what executes, and what is written down. It is deliberately mechanical, because the whole point of the design is that a reader can follow the same path the engine followed and arrive at the same place.",
            )}
          </p>
          <div className="thinking-hero__pair">
            <div>
              <Route size={20} aria-hidden="true" />
              <strong>{t("What thinking means on this page")}</strong>
              <span>
                {t("A written-out procedure with declared stages, declared limits, and a record at the end of it.")}
              </span>
            </div>
            <div className="is-boundary">
              <ShieldQuestion size={20} aria-hidden="true" />
              <strong>{t("What it does not mean")}</strong>
              <span>
                {t(
                  "No claim about understanding, awareness, judgement, or autonomy is made here or anywhere else on this site.",
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Thinking chapter navigation" items={contents} />

      <section id="one-thought" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE WHOLE PROCEDURE ON ONE SCREEN")}
            title={t("A thought is nine stages, and each one hands a named object to the next.")}
            text={t(
              "Read the diagram once for the shape and then read the cards below it for the substance. Each card states the question the stage answers, what it does with the answer, and the single condition under which the thought stops there instead of continuing.",
            )}
          />
          <ThoughtPipelineFigure />

          <div className="thinking-stages">
            {thoughtStages.map((stage) => (
              <article key={stage.number} className={stage.status === "TARGET" ? "is-target" : undefined}>
                <div className="thinking-stages__head">
                  <span className="thinking-stages__index" dir="ltr">
                    {stage.number}
                  </span>
                  <span className={`thinking-stages__status is-${stage.status === "TARGET" ? "target" : "current"}`}>
                    <bdi dir="ltr">{stage.status}</bdi>
                  </span>
                </div>
                <h3>{t(stage.name)}</h3>
                <p className="thinking-stages__question">{t(stage.question)}</p>
                <p className="thinking-stages__happens">{t(stage.happens)}</p>
                <p className="thinking-stages__detail">{t(stage.detail)}</p>
                <p className="thinking-stages__stop">
                  <b>{t("Stops here when")}</b> {t(stage.stopsWhen)}
                </p>
              </article>
            ))}
          </div>

          <TermChips terms={["Source state", "Typed coordinate", "Receipt", "Boundary"]} />
        </div>
      </section>

      <section id="walkthrough" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE SAME THOUGHT, WITH REAL VALUES")}
            title={t("Nothing in the previous section is a metaphor, so here it is with the numbers filled in.")}
            text={t(
              "One run, one accepted input, one bounded action. Every value in the right-hand column is either fixed by the release or recomputed on this site from the laws, so a reader who disagrees with a number has a specific place to point at.",
            )}
          />
          <div
            className="thinking-table-wrap"
            role="region"
            aria-label={t("One thought with concrete values")}
            tabIndex={0}
          >
            <table className="thinking-table">
              <caption>{t("One accepted observation carried through all nine stages")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Stage")}</th>
                  <th scope="col">{t("The question it answers")}</th>
                  <th scope="col">{t("Exact value")}</th>
                  <th scope="col">{t("What that means")}</th>
                </tr>
              </thead>
              <tbody>
                {thinkingWalkthrough.map((row) => (
                  <tr key={row.step}>
                    <th scope="row">
                      <bdi dir="ltr">{row.step}</bdi>
                    </th>
                    <td>{t(row.asks)}</td>
                    <td>
                      <code dir="ltr">{row.value}</code>
                    </td>
                    <td>{t(row.note)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="thinking-aside">
            {t(
              "The two stages that would follow — revising an explicit world model and reconsidering the working resolution — have no row here, because they produce no value in the current release. That absence is the honest form of the answer.",
            )}
          </p>
        </div>
      </section>

      <section id="gates" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("REFUSAL IS A RESULT")}
            title={t("A procedure that can stop is more useful than one that always answers.")}
            text={t(
              "Each gate below is a condition written into the release, not a runtime judgement. When a gate holds, the thought continues; when it does not, the run stops and the gate's code goes into the record, so the stop can be examined afterwards by someone who was not there.",
            )}
          />
          <RefusalGateFigure />
          <div className="thinking-gates">
            {refusalGates.map((gate) => (
              <article key={gate.code}>
                <span className="thinking-gates__code" dir="ltr">
                  {gate.code}
                </span>
                <h3>{t(gate.gate)}</h3>
                <p>{t(gate.refusesWhen)}</p>
                <p className="thinking-gates__instead">{t(gate.instead)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="narrowing" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("NARROWING, NOT SEARCHING")}
            title={t("The candidate is not found. It is what remains after four declared cuts.")}
            text={t(
              "A search wanders an open space and reports the best thing it turned up. Here the space is closed before the run starts, every cut is a rule anyone can read, and the last step is an ordering that can be recomputed. So the outcome can be argued with, not merely found plausible.",
            )}
          />
          <SelectorFunnelFigure />
          <div className="thinking-notes">
            <article>
              <h3>{t("Why the universe is fixed in advance")}</h3>
              <p>
                {t(
                  "If the set of possible actions could grow during a run, no enumeration would ever be complete and no reviewer could check the whole of it. Fixing 1,204 descriptors at release time is what turns checking from sampling into exhaustion.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Why only four kinds execute")}</h3>
              <p>
                {t(
                  "Membership in the universe and permission to run are kept apart on purpose. A descriptor can be a legitimate member and still be inert, which means the executable surface can be widened later as an explicit, reviewable change rather than as a side effect.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Why a parity half, of all things")}</h3>
              <p>
                {t(
                  "The two accepted patterns each select one enumeration parity, so the exposed frontier is exactly half the executable set. The choice of parity is not meaningful in itself; what matters is that it is fixed by the matched pattern and therefore reproduced by anyone replaying the run.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Why a hash and not a preference")}</h3>
              <p>
                {t(
                  "A preference would have to be learned, stored, and trusted. A hash over recorded values needs none of those: it can be recomputed from the receipt alone, by someone who has no access to the machine and no reason to trust its operator.",
                )}
              </p>
            </article>
          </div>
          <TermChips terms={["Rank", "Image of a function", "Formal, current, and target layers"]} />
        </div>
      </section>

      <section id="loop" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("ONE TURN OF THE CYCLE")}
            title={t("Two positions address one cell, and the cell names where the run ends.")}
            text={t(
              "This is the smallest complete picture of GALO acting. It is worth reading twice, because everything else on the site — the counts, the symmetries, the receipts — exists to make this one turn checkable.",
            )}
          />
          <ThoughtLoopFigure />
          <DeterministicChoiceFigure />
          <TermChips terms={["Cayley table", "PLUS", "STAR", "Composition"]} />
        </div>
      </section>

      <section id="memory" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("MEMORY, STATED EXACTLY")}
            title={t("Everything the engine still holds after a run can be printed out in full.")}
            text={t(
              "The interesting question about any decision-making system is what it carries forward, because that is what a later behaviour depends on. Here the answer is short enough to list, and two of the entries on the list are deliberately empty.",
            )}
          />
          <ThinkingMemoryFigure />
          <div className="thinking-registers">
            {memoryRegisters.map((entry) => (
              <article key={entry.register} className={entry.carried ? "is-kept" : "is-dropped"}>
                <span>{t(entry.carried ? "carried" : "not carried")}</span>
                <h3>{t(entry.register)}</h3>
                <p className="thinking-registers__holds">{t(entry.holds)}</p>
                <p>{t(entry.detail)}</p>
              </article>
            ))}
          </div>
          <TermChips terms={["Carrier", "Pole", "Level", "Current V4 step-by-step replay"]} />
        </div>
      </section>

      <section id="misreadings" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("FIVE MISREADINGS")}
            title={t("The five things a page about thinking is most likely to be taken to mean.")}
            text={t("Each one is written in the strongest form somebody might repeat it, and then corrected.")}
          />
          <div className="theory-misconceptions">
            {thinkingMisreadings.map((item) => (
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
          <div className="theory-next__links comparison-next">
            <a href={href("/theory#cayley-first")}>
              <span>{t("Where the table comes from")}</span>
              <strong>{t("Start with the multiplication table you already know")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/vs-llm")}>
              <span>{t("The other kind of machine")}</span>
              <strong>{t("How this differs from a language model")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/evidence")}>
              <span>{t("What is actually proven")}</span>
              <strong>{t("Four tracks and their current milestones")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
