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
  lawfulExits,
  memoryRegisters,
  refusalGates,
  routePhases,
  routeProperties,
  thinkingMisreadings,
  thinkingWalkthrough,
} from "../content/thinking";
import { boundaryCauses } from "../content/verdictLaw";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#route", label: "One episode, phase by phase" },
  { href: "#not-search", label: "Why this is a route and not a search" },
  { href: "#stop", label: "Where an episode is allowed to stop" },
  { href: "#step", label: "Inside one bounded step" },
  { href: "#loop", label: "One turn of the cycle" },
  { href: "#memory", label: "What survives an episode" },
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
          <h1>{t("The route an episode travels, phase by phase.")}</h1>
          <p>
            {t(
              "Reaching a decision here is not a hidden chain of reasoning. It is a closed set of phases with two lawful ways out, a budget counted in units as it is spent, and a learning phase that opens only after somebody outside the system discloses what actually happened. This page walks the whole of it, then shows the one bounded step of the frozen kernel release inside it — and ends with the part of the route the published results did not measure.",
            )}
          </p>
          <div className="thinking-hero__pair">
            <div>
              <Route size={20} aria-hidden="true" />
              <strong>{t("What thinking means on this page")}</strong>
              <span>
                {t("A written-out route with declared phases, a counted budget, and a typed outcome at the end of it.")}
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

      <section id="route" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE WHOLE ROUTE ON ONE SCREEN")}
            title={t("Seven phases, and the set is closed.")}
            text={t(
              "Read the diagram once for the shape and then the cards below it for the substance. Each card states the question the phase answers, what it does with the answer, and the condition under which the episode stops there instead of continuing. There is no unnamed state to fall into: a request for a phase outside this set is refused rather than improvised.",
            )}
          />
          <ThoughtPipelineFigure />

          <div className="thinking-stages">
            {routePhases.map((phase) => (
              <article key={phase.number}>
                <div className="thinking-stages__head">
                  <span className="thinking-stages__index" dir="ltr">
                    {phase.number}
                  </span>
                  <span className="thinking-stages__status is-current">
                    <bdi dir="ltr">{phase.name}</bdi>
                  </span>
                </div>
                <h3>{t(phase.title)}</h3>
                <p className="thinking-stages__question">{t(phase.question)}</p>
                <p className="thinking-stages__happens">{t(phase.happens)}</p>
                <p className="thinking-stages__detail">{t(phase.detail)}</p>
                <p className="thinking-stages__stop">
                  <b>{t("Stops here when")}</b> {t(phase.stopsWhen)}
                </p>
              </article>
            ))}
          </div>

          <div className="thinking-exits">
            {lawfulExits.map((exit) => (
              <article key={exit.terminal} className={exit.terminal === "REJECT" ? "is-reject" : undefined}>
                <span className="thinking-exits__terminal" dir="ltr">
                  {exit.terminal}
                </span>
                <h3>{t(exit.title)}</h3>
                <p className="thinking-exits__meaning">{t(exit.meaning)}</p>
                <p>{t(exit.detail)}</p>
              </article>
            ))}
          </div>

          <TermChips terms={["Source state", "Typed coordinate", "Receipt", "Boundary"]} />
        </div>
      </section>

      <section id="not-search" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHY THIS IS A ROUTE AND NOT A SEARCH")}
            title={t("Four constraints do the work, and none of them is an intention.")}
            text={t(
              "A search wanders an open space and reports the best thing it turned up. Each of the four below is a rule the engine enforces, so what comes out is either something that was settled or a named reason it could not be.",
            )}
          />
          <div className="thinking-properties">
            {routeProperties.map((entry) => (
              <article key={entry.number}>
                <span dir="ltr">{entry.number}</span>
                <h3>{t(entry.title)}</h3>
                <p>{t(entry.text)}</p>
              </article>
            ))}
          </div>
          <p className="section-followup">
            <a className="text-link" href={href("/evidence#learning")}>
              {t("What the counted work actually came to, and against which comparator")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <section id="stop" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("A STOP IS A RESULT")}
            title={t("A procedure that can stop is more useful than one that always answers.")}
            text={t(
              "Four of the five below end in a boundary and one in a rejection, and the record says which. The difference matters: a boundary is a lawful run that could not settle the question, a rejection is a run that was not lawful at all. Collapsing the two would make every stop look the same.",
            )}
          />
          <RefusalGateFigure />
          <div className="thinking-gates">
            {refusalGates.map((gate) => (
              <article key={gate.code}>
                <div className="thinking-gates__head">
                  <span className="thinking-gates__code" dir="ltr">
                    {gate.code}
                  </span>
                  <span
                    className={`thinking-gates__terminal${gate.terminal === "REJECT" ? " is-reject" : ""}`}
                    dir="ltr"
                  >
                    {gate.terminal}
                  </span>
                </div>
                <h3>{t(gate.gate)}</h3>
                <p>{t(gate.refusesWhen)}</p>
                <p className="thinking-gates__instead">{t(gate.instead)}</p>
              </article>
            ))}
          </div>

          <div className="thinking-verdict">
            <p className="eyebrow">{t("AND ONE MORE FAMILY, BELOW THE ROUTE")}</p>
            <h3>{t("Even a route that finished can still end without a published answer.")}</h3>
            <p className="thinking-verdict__lead">
              {t(
                "The five gates above are about the route: what it could not separate, could not open, could not compose, or could not afford. Underneath them sits a second test, applied to the answer itself. Three conditions have to hold together, and any one of them missing is also a boundary with a named cause.",
              )}
            </p>
            <ul className="thinking-verdict__causes">
              {boundaryCauses.map((entry) => (
                <li key={entry.cause}>
                  <strong>{t(entry.cause)}</strong>
                  <span>{t(entry.detail)}</span>
                </li>
              ))}
            </ul>
            <a className="text-link" href={href("/theory#verdict-law")}>
              {t("The three conditions, and what each one prevents")}{" "}
              <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="step" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("INSIDE ONE BOUNDED STEP")}
            title={t("The frozen release performs one step, and every value in it can be recomputed.")}
            text={t(
              "This is not the route above; it is one bounded step of the frozen kernel release, which performs no policy update at all. It is here because it is the part of the system with the hardest numbers attached: the space is closed before the run starts, every cut is a rule anyone can read, and the ordering can be recomputed from the record alone.",
            )}
          />
          <SelectorFunnelFigure />
          <div
            className="thinking-table-wrap"
            role="region"
            aria-label={t("One bounded step with concrete values")}
            tabIndex={0}
          >
            <table className="thinking-table">
              <caption>{t("One accepted observation carried through one bounded step")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Step")}</th>
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
          <div className="thinking-notes">
            <article>
              <h3>{t("Why the universe is fixed in advance")}</h3>
              <p>
                {t(
                  "If the set of possible answers could grow while a question was being evaluated, no enumeration would ever be complete and no reviewer could check the whole of it. Closing that set from the training data, and digesting it before the evaluated split is read, is what turns checking from sampling into exhaustion.",
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
              <h3>{t("Why a hash and not a preference")}</h3>
              <p>
                {t(
                  "A preference would have to be learned, stored, and trusted. A hash over recorded values needs none of those: it can be recomputed from the receipt alone, by someone who has no access to the machine and no reason to trust its operator.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Why this step learns nothing")}</h3>
              <p>
                {t(
                  "The frozen release holds its learning counters at zero by construction, so two runs of it separated by a thousand others behave identically. The learning described on this page belongs to the sealed programme, which is a different artefact measured against itself with its learned volume detached.",
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
            title={t("Three registers survive an episode, and two familiar ones are still absent.")}
            text={t(
              "The interesting question about any decision-making system is what it carries forward, because that is what a later behaviour depends on. Two of the three carried registers hold something that was learned — which is why the second one can be detached and the same engine run without it.",
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
          <TermChips terms={["Carrier", "Pole", "Level", "One evaluated row, step by step"]} />
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
