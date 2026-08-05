import { Check } from "lucide-react";
import { releaseEvidence, workTrackMilestones } from "../../content/evidence";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The four tracks of work with the milestone each one has actually reached.
 * Discrete named milestones only — no percentage bar, because a percentage would
 * imply a measurement nobody has taken.
 */
export function TrackStatusFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--tracks">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("FOUR TRACKS, FOUR DIFFERENT STAGES")}</span>
        <strong>{t("Each track states the last milestone it actually reached.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The milestones are named stages, not a percentage. A track is marked only where a concrete artefact exists: a derivation, a running module, a re-run check, or an outside result.",
          )}
        </span>
      </figcaption>

      <ol className="galo-tracks">
        {releaseEvidence.tracks.map((track, index) => (
          <li key={track.name} className="galo-tracks__row">
            <div className="galo-tracks__head">
              <span className="galo-tracks__index" dir="ltr">
                0{index + 1}
              </span>
              <div>
                <h3>{t(track.name)}</h3>
                <p className="galo-tracks__state">{t(track.state)}</p>
              </div>
            </div>

            <ol className="galo-tracks__milestones" aria-label={t("Milestones reached on this track")}>
              {workTrackMilestones.map((milestone, milestoneIndex) => {
                const reached = milestoneIndex < track.reached;
                return (
                  <li key={milestone} className={reached ? "is-reached" : "is-pending"}>
                    <span className="galo-tracks__marker" aria-hidden="true">
                      {reached ? <Check size={13} /> : <i />}
                    </span>
                    <span className="galo-tracks__milestone-label">{t(milestone)}</span>
                    <span className="sr-only">{reached ? t("reached") : t("not reached yet")}</span>
                  </li>
                );
              })}
            </ol>

            <p className="galo-tracks__detail">{t(track.detail)}</p>
            <p className="galo-tracks__next">
              <span>{t("Work in progress")}</span>
              {t(track.next)}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
