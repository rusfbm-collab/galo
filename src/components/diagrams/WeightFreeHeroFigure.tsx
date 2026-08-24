import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";
import {
  galoLane,
  heroFigureEquivalent,
  heroFigureEyebrow,
  heroFigureFoot,
  learnedStateHeadline,
  neuralLane,
} from "../../content/homeNarrative";

/**
 * The first picture on the site, and the only one a reader meets before they
 * know what GALO is.
 *
 * It replaced a seven-phase engine route, which put SEARCH, HYPOTHESES, PROBING,
 * COMPOSITION, REVEAL, LEARNING, COMPLETE, two terminal codes, a bound handle
 * and a work ledger in front of somebody who had not yet been told the category.
 * That figure is still on the site; it belongs after the explanation rather than
 * before it.
 *
 * Built from HTML rather than SVG on purpose. Labels are the whole content here,
 * and in HTML they wrap, inherit the page's type scale instead of shrinking with
 * a viewBox, stay selectable and translatable, and reverse correctly under RTL
 * without the figure having to know which side it is on.
 */
export function WeightFreeHeroFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  // Neural first in DOM order, so RTL puts it on the right and the familiar lane
  // is still the one a reader meets first.
  const lanes = [
    { key: "neural", lane: neuralLane, isGalo: false },
    { key: "galo", lane: galoLane, isGalo: true },
  ] as const;

  return (
    <figure className="wf-hero" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="wf-hero__caption">
        <span className="wf-hero__eyebrow">{t(heroFigureEyebrow)}</span>
        <strong id={titleId}>{t(learnedStateHeadline)}</strong>
      </figcaption>

      <div className="wf-hero__lanes">
        {lanes.map(({ key, lane, isGalo }) => (
          <div key={key} className={isGalo ? "wf-hero__lane is-galo" : "wf-hero__lane"}>
            <p className="wf-hero__lane-head">{t(lane.head)}</p>
            <ol className="wf-hero__stages">
              {lane.stages.map((stage, index) => (
                <li key={stage} className={index === 1 ? "wf-hero__stage is-pivot" : "wf-hero__stage"}>
                  <span>{t(stage)}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <p className="wf-hero__foot">{t(heroFigureFoot)}</p>
      <p className="sr-only" id={descriptionId}>
        {t(heroFigureEquivalent)}
      </p>
    </figure>
  );
}
