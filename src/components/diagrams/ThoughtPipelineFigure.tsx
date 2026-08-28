import { useId } from "react";
import { lawfulExits, routePhases } from "../../content/thinking";
import { useI18n } from "../../i18n/I18nContext";

/**
 * One episode, phase by phase, with both lawful exits hanging off a rail that
 * touches every phase rather than only the last.
 *
 * This was an SVG until the phase names stopped being codes. "Take the outcome
 * from outside" does not fit a fixed-width SVG box in English and fits none of
 * them in Russian, and SVG text does not wrap — so the labels ran out through
 * the sides of their own chips. It is HTML now for the same reason the
 * home-page figures are: these are phrases in four languages, and phrases wrap.
 *
 * The rail survives the move as a dashed border down the side of the whole
 * block. It carries the one thing the grid alone cannot: an episode may leave
 * onto either exit from any phase, not only from the seventh.
 */
export function ThoughtPipelineFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = `${routePhases
    .map((phase) => `${phase.number}. ${t(phase.publicName)} (${phase.name})`)
    .join(". ")}. ${lawfulExits.map((exit) => `${t(exit.plain)} (${exit.terminal})`).join(". ")}.`;

  return (
    <figure className="route-map" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="route-map__caption">
        <span className="route-map__eyebrow">{t("ONE EPISODE, FROM OPENING TO SEAL")}</span>
        <strong id={titleId}>{t("Seven phases, and two ways out that are not the seventh.")}</strong>
        <span className="route-map__note">
          {t(
            "Each phase answers one question and hands one object to the next. The phase set is closed, so there is no unnamed state to fall into: an episode is either in one of the seven or on one of the two exits, and the exits are reachable from any phase rather than only from the end.",
          )}
        </span>
      </figcaption>

      <div className="route-map__rail">
        <ol className="route-map__phases">
          {routePhases.map((phase) => (
            <li key={phase.number}>
              <span className="route-map__index" dir="ltr">
                {phase.number}
              </span>
              <div>
                <strong>{t(phase.publicName)}</strong>
                <span className="route-map__code" dir="ltr">
                  {phase.name}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="route-map__exits">
          {lawfulExits.map((exit, index) => (
            <article key={exit.terminal} className={index === 1 ? "is-reject" : undefined}>
              <div>
                <strong>{t(exit.plain)}</strong>
                <span className="route-map__code" dir="ltr">
                  {exit.terminal}
                </span>
              </div>
              <span className="route-map__exit-note">{t(index === 0 ? "lawful, unsettled" : "unlawful, refused")}</span>
            </article>
          ))}
        </div>
      </div>

      <p className="route-map__legend">
        {t(
          "The dashed rail touches every phase: either exit is reachable from any one of them, not only from the last.",
        )}
      </p>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
