import { ArrowRight } from "lucide-react";
import { readerPaths } from "../../content/plainLanguage";
import { useI18n } from "../../i18n/I18nContext";

/**
 * Three reading routes through the site, one per kind of reader. Each route names
 * exactly three stops, because a reader who is given nine links reads none of
 * them.
 */
export function ReaderPaths() {
  const { href, t } = useI18n();

  return (
    <div className="reader-paths">
      {readerPaths.map((path) => (
        <article key={path.audience}>
          <div className="reader-paths__head">
            <span className="reader-paths__time" dir="ltr">
              {path.minutes}
            </span>
            <h3>{t(path.audience)}</h3>
          </div>
          <p>{t(path.goal)}</p>
          <ol>
            {path.stops.map((stop, index) => (
              <li key={stop.href}>
                <span className="reader-paths__index" dir="ltr">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <a href={href(stop.href)}>
                  {t(stop.label)} <ArrowRight className="directional-icon" size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}
