import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { artefactScopes } from "../../content/homeNarrative";

/**
 * Three artefacts, kept apart on purpose.
 *
 * "The release", "the system", "today" and "current" were doing duty for three
 * different objects across this site: a public bounded verifier that learns
 * nothing, a sealed research line that does, and an industrial product that does
 * not exist yet. A sentence that borrows a result from one and a capability from
 * another is the single easiest way for this page to mislead somebody, and it
 * would do it without stating a single false fact.
 *
 * Each column answers the same four questions in the same order, so a reader can
 * read across rather than take our word for which column a number came from.
 */
export function ResearchScopeFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const rows = [
    { key: "exists", label: "What exists" },
    { key: "measured", label: "What was measured" },
    { key: "doesNotFollow", label: "What does not follow" },
    { key: "nextGate", label: "The next gate" },
  ] as const;

  const equivalent = artefactScopes
    .map((scope) => `${t(scope.tag)}. ${rows.map((row) => `${t(row.label)}: ${t(scope[row.key])}`).join(" ")}`)
    .join(" ");

  return (
    <figure className="scopes" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="scopes__caption">
        <span className="scopes__eyebrow">{t("THREE ARTEFACTS, NOT ONE")}</span>
        <strong id={titleId}>{t("Every number on this site belongs to exactly one of these.")}</strong>
      </figcaption>

      <div className="scopes__grid">
        {artefactScopes.map((scope) => (
          <article key={scope.tag} className="scopes__card">
            <p className="scopes__tag" dir="ltr">
              {t(scope.tag)}
            </p>
            <h3>{t(scope.name)}</h3>
            <dl>
              {rows.map((row) => (
                <div key={row.key}>
                  <dt>{t(row.label)}</dt>
                  <dd>{t(scope[row.key])}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
