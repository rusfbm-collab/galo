import { academicDefinitions, academicPropositions } from "../../content/academicAnalysis";
import { useI18n } from "../../i18n/I18nContext";

/**
 * Numbered definitions and propositions in ordinary academic form. Statements and
 * prose are translated; every formal expression stays canonical and left-to-right.
 */
export function AcademicAnalysis() {
  const { t } = useI18n();

  return (
    <div className="academic">
      <section className="academic__block" aria-labelledby="academic-definitions-title">
        <h3 className="academic__block-title" id="academic-definitions-title">
          {t("Definitions")}
        </h3>
        <ol className="academic__list">
          {academicDefinitions.map((entry) => (
            <li key={entry.id} className="academic__item academic__item--definition">
              <p className="academic__label">
                <span className="academic__id" dir="ltr">
                  {entry.id}
                </span>
                <strong>{t("Definition")}</strong>
                <em>{t(entry.title)}</em>
              </p>
              <code className="academic__formal" dir="ltr">
                {entry.formal}
              </code>
              <p className="academic__prose">{t(entry.prose)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="academic__block" aria-labelledby="academic-propositions-title">
        <h3 className="academic__block-title" id="academic-propositions-title">
          {t("Propositions and proofs")}
        </h3>
        <ol className="academic__list">
          {academicPropositions.map((entry) => (
            <li key={entry.id} className="academic__item">
              <p className="academic__label">
                <span className="academic__id" dir="ltr">
                  {entry.id}
                </span>
                <strong>{t(entry.kind)}</strong>
                <em>{t(entry.title)}</em>
              </p>
              <p className="academic__statement">{t(entry.statement)}</p>
              <code className="academic__formal" dir="ltr">
                {entry.formal}
              </code>

              <div className="academic__proof">
                <p className="academic__proof-label">{t("Proof")}</p>
                <ol>
                  {entry.proof.map((step, index) => (
                    <li key={`${entry.id}-${index}`}>
                      <span>{t(step.text)}</span>
                      {step.formal && <code dir="ltr">{step.formal}</code>}
                    </li>
                  ))}
                </ol>
                <span className="academic__qed" aria-label={t("End of proof")}>
                  ∎
                </span>
              </div>

              {entry.boundary && (
                <p className="academic__boundary">
                  <strong>{t("Scope of this result:")}</strong> {t(entry.boundary)}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
