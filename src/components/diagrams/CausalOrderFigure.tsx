import { useId } from "react";
import { causalLaws, causalSteps } from "../../content/verdictLaw";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The protocol order, with what each step is allowed to read.
 *
 * A benchmark number is only as good as the order that produced it, and the
 * order is the part nobody can see from the number. So the figure gives each
 * step two columns — what it reads and what it seals — because the whole claim
 * is that the answer space was closed before the test data was opened, and that
 * is a statement about reads.
 *
 * The seal marks are what carry the argument visually: they start empty, and
 * once a row has sealed something no later row is allowed to reopen it.
 */
export function CausalOrderFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = `${causalSteps
    .map(
      (step) => `${step.number}. ${t(step.step)}: ${t("reads")} ${t(step.reads)}; ${t("freezes")} ${t(step.freezes)}`,
    )
    .join(". ")}. ${causalLaws.map((law) => t(law)).join(" ")}`;

  return (
    <figure className="causal" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="causal__caption">
        <span className="causal__eyebrow">{t("WHAT EACH STEP MAY READ")}</span>
        <strong id={titleId}>{t("Seven steps, and the test split appears only in the last two.")}</strong>
      </figcaption>

      <div className="causal__grid" role="table" aria-label={t("Protocol order, with reads and seals")}>
        <div className="causal__head" role="row">
          <span role="columnheader">{t("Step")}</span>
          <span role="columnheader">{t("Reads")}</span>
          <span role="columnheader">{t("Freezes")}</span>
        </div>
        {causalSteps.map((step) => {
          const touchesTest = step.reads.toLowerCase().includes("test data");
          return (
            <div key={step.step} className={`causal__row${touchesTest ? " is-test" : ""}`} role="row">
              <span className="causal__step" role="cell">
                <span className="causal__number" dir="ltr">
                  {step.number}
                </span>
                {t(step.step)}
              </span>
              <span className="causal__reads" role="cell">
                <span className="causal__label" aria-hidden="true">
                  {t("Reads")}
                </span>
                {t(step.reads)}
              </span>
              <span className="causal__freezes" role="cell">
                <span className="causal__label" aria-hidden="true">
                  {t("Freezes")}
                </span>
                {t(step.freezes)}
              </span>
            </div>
          );
        })}
      </div>

      <ul className="causal__laws">
        {causalLaws.map((law) => (
          <li key={law}>{t(law)}</li>
        ))}
      </ul>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
