import { useI18n } from "../../i18n/I18nContext";

const readings = [
  "Approved, and the payment can be released today.",
  "Approved in principle, pending the second signature.",
  "Approved by the reviewer, but not yet by the committee.",
] as const;

const positions = [
  { label: "P0", meaning: "refused", tone: "warn" },
  { label: "P1", meaning: "waiting for a second signature", tone: "plain" },
  { label: "P2", meaning: "cleared for release", tone: "accent" },
] as const;

/**
 * Why the theory starts by naming states. The alternative is not a different
 * mathematics — it is a sentence, and a sentence has more than one reading.
 */
export function NamedStateFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--named">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHY THE THEORY BEGINS BY NAMING THINGS")}</span>
        <strong>{t("A sentence has several readings. A named position has one.")}</strong>
        <span className="galo-figure__note">
          {t(
            "This is the first substitution the theory makes, and every later property depends on it. Nothing is gained in expressive power — a great deal of it is given up. What is bought is that two readers, months apart, resolve the same record the same way.",
          )}
        </span>
      </figcaption>

      <div className="galo-named">
        <div className="galo-named__panel is-prose">
          <p className="galo-named__title">{t("The status as a sentence")}</p>
          <blockquote className="galo-named__quote">{t("“The request was approved.”")}</blockquote>
          <p className="galo-named__label">{t("Readings a later reviewer has to choose between")}</p>
          <ul>
            {readings.map((reading) => (
              <li key={reading}>{t(reading)}</li>
            ))}
          </ul>
          <p className="galo-named__verdict is-warn">
            {t("Three readings, and the record does not say which one was meant.")}
          </p>
        </div>

        <div className="galo-named__arrow" aria-hidden="true">
          <span>{t("declare the list first")}</span>
        </div>

        <div className="galo-named__panel is-named">
          <p className="galo-named__title">{t("The status as one of a declared list")}</p>
          <ul className="galo-named__positions">
            {positions.map((position) => (
              <li key={position.label} className={`is-${position.tone}`}>
                <code dir="ltr">{position.label}</code>
                <span>{t(position.meaning)}</span>
              </li>
            ))}
          </ul>
          <p className="galo-named__label">{t("What the record carries")}</p>
          <code className="galo-named__record" dir="ltr">
            state = P1
          </code>
          <p className="galo-named__verdict is-accent">
            {t("One reading, and it is the same reading for everyone who opens the record.")}
          </p>
        </div>
      </div>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "The three meanings attached to the names are an illustration, not part of the mathematics. GALO fixes how many positions exist and how they combine; what each one means in a given deployment is somebody else's declaration.",
        )}
      </p>
    </figure>
  );
}
