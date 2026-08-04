import { useI18n } from "../../i18n/I18nContext";

const levels = [
  { level: "L2", label: "2 local states" },
  { level: "L3", label: "3 local states" },
  { level: "L4", label: "4 local states" },
  { level: "L5", label: "5 local states" },
  { level: "L6", label: "6 local states" },
  { level: "L7", label: "7 local states" },
];

export function ResolutionLadder() {
  const { t } = useI18n();

  return (
    <figure className="resolution" aria-labelledby="resolution-title">
      <figcaption id="resolution-title">
        <span>{t("ILLUSTRATIVE TARGET RESOLUTION LADDER")}</span>
        {t("The target architecture proposes choosing only the level needed to preserve a task-relevant distinction.")}
      </figcaption>
      <div className="resolution__levels">
        {levels.map((item) => (
          <div key={item.level} className="resolution__level">
            <span>{item.level}</span>
            <small>{t(item.label)}</small>
          </div>
        ))}
      </div>
      <p className="resolution__note">
        {t(
          "More poles are not automatically better. Current V4 does not prove observation-conditioned level selection.",
        )}
      </p>
    </figure>
  );
}
