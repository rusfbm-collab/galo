import { ArrowLeft, Check, FileCheck2, Fingerprint, Lock, ShieldAlert } from "lucide-react";
import { ReceiptAnatomyFigure } from "../components/diagrams/ReceiptAnatomyFigure";
import { TrackStatusFigure } from "../components/diagrams/TrackStatusFigure";
import { WorkLedgerFigure } from "../components/diagrams/WorkLedgerFigure";
import { PageShell } from "../components/layout/PageShell";
import { releaseEvidence } from "../content/evidence";
import {
  learningBoundaries,
  learningContract,
  learningResults,
  sealedArchive,
  sealedReplay,
} from "../content/learningEvidence";
import { publicClaims } from "../content/publicClaims";
import { useI18n } from "../i18n/I18nContext";

export function EvidencePage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--evidence">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("PUBLIC EVIDENCE LAYER")}</p>
          <h1>{t("What already works, and what is being built next.")}</h1>
          <p>
            {t(
              "Work on GALO runs on four tracks at once. This page says plainly how far each track has come, what is running today, and which questions are still open.",
            )}
          </p>
          <div className="release-status">
            <FileCheck2 size={19} aria-hidden="true" />
            <span>
              {t("CURRENT RELEASE STATUS")} · {releaseEvidence.release}
            </span>
            <strong dir="ltr">{releaseEvidence.status}</strong>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <div className="fingerprint-card fingerprint-card--plain">
            <div className="fingerprint-card__icon">
              <Fingerprint aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">{t("TWO CARRIERS, KEPT APART")}</p>
              <h2>{t("Each set of numbers on this page comes from one carrier, and never from both.")}</h2>
              <p>
                {t(
                  "The release counts immediately below are the frozen kernel release. The sealed learning line further down runs from a separate carrier of its own. Neither set is blended with the other, and no figure here comes from an artefact that is out of circulation. Digests and file names are handed to a reviewer rather than published.",
                )}
              </p>
            </div>
          </div>

          <div className="metric-grid metric-grid--evidence">
            {releaseEvidence.metrics.map((metric) => (
              <article key={metric.value} className="metric-card">
                <strong dir="ltr">{metric.value}</strong>
                <h3>{t(metric.label)}</h3>
                <p>{t(metric.detail)}</p>
              </article>
            ))}
          </div>
          <p className="scope-callout">
            <strong>{t("Exact public scope:")}</strong>{" "}
            {t(
              "finite, binary, one-step candidate execution across active L2–L7; L1 is control-only. This is not the complete space of general reasoning.",
            )}
          </p>

          <div className="replay-status-grid">
            <article>
              <span>{t("Fresh STATIC")}</span>
              <strong>{releaseEvidence.freshReplay.static}</strong>
              <code dir="ltr">{releaseEvidence.freshReplay.staticReceipt}</code>
            </article>
            <article>
              <span>{t("Fresh FAST")}</span>
              <strong>{releaseEvidence.freshReplay.fast}</strong>
              <code dir="ltr">{releaseEvidence.freshReplay.fastReceipt}</code>
            </article>
            <article>
              <span>{t("Fresh FULL")}</span>
              <strong>{releaseEvidence.freshReplay.full}</strong>
              <p>{t("The 1,366/1,366 FULL result is a stored release receipt. No fresh replay stands behind it.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("FOUR TRACKS OF WORK")}</p>
              <h2>{t("Work runs on four tracks, and each one is at a different stage.")}</h2>
              <p className="section-heading__text">
                {t(
                  "The mathematical foundation, the compatibility layer, the engine running today, and the target world-model loop advance separately. Each track below states the milestone it has actually reached and what is being worked on next, so progress on one track is never presented as progress on another.",
                )}
              </p>
            </div>
          </div>
          <TrackStatusFigure />
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">{t("CURRENT V4 SELECTOR")}</p>
              <h2>{t("A closed deterministic selector. Nothing about it was learned.")}</h2>
              <p className="section-heading__text">
                {t(
                  "The selector recognizes exactly two source patterns, filters a committed finite universe by parity, and hashes observation, candidate ID, and ordinal to produce a deterministic order. Atlas state does not affect the result.",
                )}
              </p>
            </div>
          </div>
          <div className="selector-pipeline">
            {releaseEvidence.selector.map((stage) => (
              <article key={stage.label}>
                <strong dir="ltr">{stage.value}</strong>
                <h3>{t(stage.label)}</h3>
                <p>{t(stage.detail)}</p>
              </article>
            ))}
          </div>
          <div className="selector-contract-grid">
            <article>
              <span>{t("Source ontology")}</span>
              <code dir="ltr">alpha,beta → LEFT/even</code>
              <code dir="ltr">gamma,delta → RIGHT/odd</code>
            </article>
            <article>
              <span>{t("Executable kinds")}</span>
              <code dir="ltr">FREE_FRAME · JOINT_COMPOSITION · PROBE · ROUTE</code>
            </article>
            <article>
              <span>{t("Atlas influence")}</span>
              <code dir="ltr">semantic reads=0 · rank effects=0 · learning writes=0</code>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("RECEIPT-DERIVED WORK LEDGER")}</p>
              <h2>{t("Every counted work unit belongs to one checked phase.")}</h2>
              <p className="section-heading__text">
                {t(
                  "The physical total is an internal count of receipt work-unit IDs. It is not elapsed time, FLOPS, energy, cost saving, speedup, causal outcome, or external operational gain.",
                )}
              </p>
            </div>
          </div>
          <ReceiptAnatomyFigure />
          <WorkLedgerFigure />
          <p className="scope-callout">
            {t("Outcome evaluation and policy update each contribute zero work units in this release.")}
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="shell evidence-columns">
          <div>
            <p className="eyebrow">{t("CURRENT CAPABILITIES")}</p>
            <h2>{t("Implemented bounded mechanics")}</h2>
            <ul className="evidence-list evidence-list--pass">
              {releaseEvidence.current.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t("CURRENT BOUNDARIES")}</p>
            <h2>{t("Not implemented, started, or proven")}</h2>
            <ul className="evidence-list evidence-list--boundary">
              {releaseEvidence.boundaries.map((item) => (
                <li key={item.label}>
                  <ShieldAlert size={17} aria-hidden="true" />
                  <span>
                    <small dir="ltr">{item.status}</small>
                    {t(item.label)}
                    <em>{t(item.detail)}</em>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="learning" className="section section--paper math-anchor-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("THE SEALED LEARNING LINE")}</p>
              <h2>{t("Every number below is the same engine measured against itself, with the learning switched off.")}</h2>
              <p className="section-heading__text">
                {t(
                  "That comparator is the whole point: same engine, same schema, same candidate universe, same budget, with only the learned volume detached. A saving measured that way is a statement about learning rather than about search size. This is separate from the frozen release above, which still performs no learning at all — both statements are true at once, and neither is allowed to imply the other.",
                )}
              </p>
            </div>
          </div>

          <div className="sealed-archive">
            <p className="eyebrow">{t(sealedArchive.label)}</p>
            <p>{t(sealedArchive.note)}</p>
          </div>

          <div className="sealed-replay">
            {sealedReplay.map((row) => (
              <article key={row.label}>
                <strong dir="ltr">{row.value}</strong>
                <h3>{t(row.label)}</h3>
                <p>{t(row.detail)}</p>
              </article>
            ))}
          </div>

          <div className="learning-results">
            {learningResults.map((row) => (
              <article
                key={row.task}
                className={row.status === "TYPED REFUSAL, SEALED" ? "is-negative" : undefined}
              >
                <span className="learning-results__status" dir="ltr">
                  {row.status}
                </span>
                <h3 dir="ltr">{row.task}</h3>
                <strong>{t(row.headline)}</strong>
                <p>{t(row.establishes)}</p>
                <p className="learning-results__boundary">
                  <ShieldAlert size={15} aria-hidden="true" /> {t(row.boundary)}
                </p>
              </article>
            ))}
          </div>

          <div className="learning-contract">
            <div className="learning-contract__head">
              <Lock size={20} aria-hidden="true" />
              <div>
                <strong>{t("The eight conditions a work-reduction claim has to meet before it is made")}</strong>
                <p>
                  {t(
                    "Drop any one of these and the number above becomes unreadable rather than merely weaker. They are listed so a reviewer can check which one they think we got wrong.",
                  )}
                </p>
              </div>
            </div>
            <ol>
              {learningContract.map((line, index) => (
                <li key={line}>
                  <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                  {t(line)}
                </li>
              ))}
            </ol>
          </div>

          <ul className="evidence-list evidence-list--boundary learning-boundaries">
            {learningBoundaries.map((item) => (
              <li key={item.label}>
                <ShieldAlert size={17} aria-hidden="true" />
                <span>
                  <small dir="ltr">{item.status}</small>
                  {t(item.label)}
                  <em>{t(item.detail)}</em>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark claim-table-section">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow">{t("CLAIM MATRIX")}</p>
              <h2>{t("Every public claim has a status and a scope.")}</h2>
              <p className="section-heading__text">
                {t(
                  "Architecture statements describe the design. Implemented and bounded statements describe the current release. They are not interchangeable.",
                )}
              </p>
            </div>
          </div>
          <div className="claim-table" role="table" aria-label={t("Public claim matrix")}>
            <div className="claim-table__header" role="row">
              <span role="columnheader">ID</span>
              <span role="columnheader">{t("Public claim")}</span>
              <span role="columnheader">{t("Status")}</span>
              <span role="columnheader">{t("Source class")}</span>
            </div>
            {publicClaims.map((claim) => (
              <div className="claim-table__row" role="row" key={claim.id}>
                <span className="mono" role="cell">
                  {claim.id.split("_").slice(0, 1)}
                </span>
                <strong role="cell">{t(claim.publicCopy)}</strong>
                <span role="cell" className={`claim-status claim-status--${claim.status}`}>
                  {t(claim.status)}
                </span>
                <span role="cell">{t(claim.source)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell evidence-notes">
          <article>
            <h3>{t("Replay status")}</h3>
            <p>
              {t(
                "Fresh STATIC and FAST verification passed in the current review session. The stored release receipt records 1,366/1,366 checks across 131 modules. Fresh FULL was not run, and CPython 3.13 replay was blocked by runtime availability.",
              )}
            </p>
          </article>
          <article>
            <h3>{t("Source-integrity boundary")}</h3>
            <p>
              {t(
                "The bundled finite sample verifies against a release-pinned public key. That proves integrity relative to the shipped key; it does not prove independent external origin or truth.",
              )}
            </p>
          </article>
          <article>
            <h3>{t("Historical-learning boundary")}</h3>
            <p>
              {t(
                "A legacy relational-KG research artifact exists in compatibility history, but it is not the current V4 selector, has no proven strong-control advantage, and is not presented as a current trained Atlas.",
              )}
            </p>
          </article>
          <article>
            <h3>{t("How older material is handled")}</h3>
            <p>
              {t(
                "Older research material can reflect earlier scopes, experiments, or metrics. Building an explicit provenance bridge is open work on the compatibility track; until that bridge exists, older numbers are never merged into this release.",
              )}
            </p>
          </article>
          <article>
            <h3>{t("Public-data policy")}</h3>
            <p>
              {t(
                "The raw engine, internal consolidate, private manifests, test fixtures, and source paths are not distributed through this website. Technical review material is sanitized before publication.",
              )}
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
