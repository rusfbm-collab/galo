import { ArrowLeft, Check, Copy, FileCheck2, Fingerprint, ShieldAlert } from "lucide-react";
import { useState } from "react";
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
          <h1>{t("Evidence, scoped precisely.")}</h1>
          <p>
            {t(
              "This page separates implemented bounded mechanics from architectural targets and claims that remain unproven.",
            )}
          </p>
          <div className="release-status">
            <FileCheck2 size={19} aria-hidden="true" />
            <span>{t("CURRENT RELEASE STATUS")}</span>
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
              "finite, binary, one-step candidate execution across the declared L1–L7 tower. This is not the complete space of general reasoning.",
            )}
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
                "Fresh STATIC and FAST verification passed in the current review session. The stored release receipt records 1,277/1,277 checks passing. The final report distinguishes stored evidence from any fresh heavy replay result.",
              )}
            </p>
          </article>
          <article>
            <h3>{t("Research archive policy")}</h3>
            <p>
              {t(
                "Historical research materials may reflect earlier scopes, experiments, or metrics. They must not be combined with this release without an explicit provenance bridge.",
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
