import { useI18n } from "../../i18n/I18nContext";

/**
 * Three nested scopes, drawn so the reader can see how small the innermost one
 * is.
 *
 * The boundary section lists what is established and what is not, side by side
 * as two columns of equal visual weight. Two equal columns quietly suggest two
 * comparable quantities. They are not comparable: what the tables settle is
 * exact and narrow, what the public runs add is real and narrower still than
 * people assume, and what nobody has established is the largest region of the
 * three. Nesting them says that; two columns did not.
 */
const scopes = [
  {
    id: "tables",
    tag: "Settled by these tables",
    holds: [
      "Total deterministic maps on every level from 1 to 7, closed under both operators.",
      "The exact count of typed coordinates, re-derived from the level set on every build.",
      "Which axis each operand role occupies, and what changes when they are exchanged.",
      "Which structural properties hold and which fail, with the failures named rather than omitted.",
    ],
    note: "This is mathematics. It is checkable on paper and it is true independently of anything the engine does.",
  },
  {
    id: "runs",
    tag: "Added by the public runs",
    holds: [
      "The typed route compiles and executes against these frozen tables on the path to every published prediction.",
      "A prediction that fails any step of that route is not published — it becomes a boundary with the cause named.",
    ],
    note: "This is the part people most often assume is missing. The algebra is not checked once at build time and then left aside; it runs on the measured path.",
  },
  {
    id: "open",
    tag: "Established by nobody",
    holds: [
      "That these tables carry any meaning about the world. They are addresses, not concepts.",
      "That the wider architecture the tables sit inside contributes anything measurable — that is declared and unmeasured.",
      "That any of it holds on a partner's data, under a partner's evaluator, at industrial scale.",
      "That persistent learning inside the shipped runtime works. It has not been started, and no trained Atlas is present.",
    ],
    note: "Each of these is a boundary published with a status, not an omission a reader has to notice for themselves.",
  },
] as const;

export function BoundaryScopeFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--scope">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THREE SCOPES, AND THEY ARE NOT THE SAME SIZE")}</span>
        <strong>{t("What the tables settle, what the runs add, and what nobody has established.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Listing the established and the unestablished as two equal columns suggests two comparable quantities, which would be a flattering way to be wrong. The three regions below are nested and deliberately unequal: the innermost is exact and small, the middle one is real and narrower than readers expect, and the outermost is the largest of the three.",
          )}
        </span>
      </figcaption>

      <div className="scope-rings">
        {scopes.map((scope, index) => (
          <section key={scope.id} className={`scope-rings__ring is-${scope.id}`}>
            <header>
              <span className="scope-rings__index" dir="ltr">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4>{t(scope.tag)}</h4>
            </header>
            <ul>
              {scope.holds.map((line) => (
                <li key={line}>{t(line)}</li>
              ))}
            </ul>
            <p>{t(scope.note)}</p>
          </section>
        ))}
      </div>

      <p className="galo-figure__foot">
        {t(
          "Nothing moves between these regions by argument. A statement leaves the outermost one when somebody outside this project runs the check that would settle it, and until then it stays where it is.",
        )}
      </p>
    </figure>
  );
}
