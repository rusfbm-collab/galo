const levels = [
  { level: "L2", label: "binary distinction" },
  { level: "L3", label: "third alternative" },
  { level: "L4", label: "directional relation" },
  { level: "L5", label: "additional resolution" },
  { level: "L6", label: "higher-order distinction" },
  { level: "L7", label: "maximum current level" },
];

export function ResolutionLadder() {
  const { t } = useI18n();

  return (
    <figure className="resolution" aria-labelledby="resolution-title">
      <figcaption id="resolution-title">
        <span>{t("MINIMAL SUFFICIENT RESOLUTION")}</span>
        {t("Open only the level needed to preserve a task-relevant distinction.")}
      </figcaption>
      <div className="resolution__levels">
        {levels.map((item, index) => (
          <div key={item.level} className={`resolution__level ${index === 2 ? "resolution__level--active" : ""}`}>
            <span>{item.level}</span>
            <small>{t(item.label)}</small>
            {index === 2 && <strong>{t("selected")}</strong>}
          </div>
        ))}
      </div>
      <p className="resolution__note">{t("More poles are not automatically better.")}</p>
    </figure>
  );
}
import { useI18n } from "../../i18n/I18nContext";
