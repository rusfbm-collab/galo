import { ArrowLeft, Check, Copy, FileCheck2, Fingerprint, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { ReceiptAnatomyFigure } from "../components/diagrams/ReceiptAnatomyFigure";
import { TrackStatusFigure } from "../components/diagrams/TrackStatusFigure";
import { WorkLedgerFigure } from "../components/diagrams/WorkLedgerFigure";
import { PageShell } from "../components/layout/PageShell";
import { releaseEvidence } from "../content/evidence";
import { publicClaims } from "../content/publicClaims";
import { useI18n } from "../i18n/I18nContext";

export function EvidencePage() {
  const [copied, setCopied] = useState(false);
  const { href, t } = useI18n();

  const copyFingerprint = async () => {
    await navigator.clipboard.writeText(releaseEvidence.archiveFingerprint);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

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
          <div className="fingerprint-card">
            <div className="fingerprint-card__icon">
              <Fingerprint aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">{t("RELEASE FINGERPRINT")}</p>
              <h2>{t("Bound to one immutable research archive.")}</h2>
              <p>{t("Metrics on this page are not blended with historical releases.")}</p>
            </div>
            <button
              className="fingerprint-card__value"
              type="button"
              onClick={copyFingerprint}
              aria-label={t("Copy release fingerprint")}
            >
              <span className="mono" dir="ltr">
                {releaseEvidence.archiveFingerprint}
              </span>
              <Copy size={17} aria-hidden="true" />
              <small>{copied ? t("COPIED") : t("COPY")}</small>
            </button>
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
              <p>{t("The 1,366/1,366 FULL result is a stored release receipt, not a fresh replay result.")}</p>
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
              <h2>{t("A closed deterministic selector, not a learned reasoner.")}</h2>
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
