import { useI18n } from "../../i18n/I18nContext";

/**
 * One carrier, two laws, and what each one is — stated as properties rather
 * than as adjectives.
 *
 * The section this sits in says PLUS and STAR "are different algebraic
 * structures", which is true and unhelpful: the reader wants to know which
 * ordinary property each one has and which it fails. HTML rather than SVG,
 * because every line here is a sentence about a property and half of them are
 * negative statements that a box cannot hold.
 */
const reducts = [
  {
    name: "PLUS",
    reading: "Addition modulo the level",
    holds: [
      "Every pole has an inverse, so a step can always be undone.",
      "Fixing one operand gives a bijection of the carrier — a relabelling, never a collapse.",
      "The law is associative and commutative, so brackets do not change the result.",
    ],
    fails: ["Nothing is lost, which also means no step of PLUS can ever be a filter."],
  },
  {
    name: "STAR",
    reading: "A one-sided law with an absorbing pole",
    holds: [
      "P0 absorbs from the left: whatever it meets on that side, the result is P0.",
      "Fixing one operand can collapse the carrier onto fewer values, which is what makes a step informative.",
      "The two orientations give genuinely different maps, so which side a pole sits on matters.",
    ],
    fails: [
      "There is no two-sided identity at any level above the degenerate one.",
      "Brackets change the result, so a program has to say where they are.",
    ],
  },
] as const;

export function TwoReductsFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--reducts">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ONE CARRIER, TWO LAWS")}</span>
        <strong>{t("The same poles, read under two operators that behave nothing alike.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Both laws are total maps on the same finite set, and that is where the resemblance ends. One is reversible and therefore never narrows anything; the other loses information on purpose, which is what lets a step rule possibilities out. A system built on only the first could not decide, and one built on only the second could not be undone.",
          )}
        </span>
      </figcaption>

      <div className="reducts">
        {reducts.map((reduct) => (
          <section key={reduct.name} className={`reducts__card is-${reduct.name.toLowerCase()}`}>
            <header>
              <bdi dir="ltr">{reduct.name}</bdi>
              <span>{t(reduct.reading)}</span>
            </header>

            <p className="reducts__label">{t("What holds")}</p>
            <ul className="reducts__holds">
              {reduct.holds.map((line) => (
                <li key={line}>{t(line)}</li>
              ))}
            </ul>

            <p className="reducts__label is-fails">{t("What does not")}</p>
            <ul className="reducts__fails">
              {reduct.fails.map((line) => (
                <li key={line}>{t(line)}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="galo-figure__foot">
        {t(
          "Every line above is decided by the tables on this page rather than asserted. Open the explorer, fix one operand, and read the column off: under PLUS it is a permutation of the carrier, and under STAR it is not.",
        )}
      </p>
    </figure>
  );
}
