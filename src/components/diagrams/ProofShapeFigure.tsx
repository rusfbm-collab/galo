import { useI18n } from "../../i18n/I18nContext";

/**
 * The seven questions every card below answers, and why that order.
 *
 * The notebook has fifty-nine cards with identical structure, which is the
 * feature and is invisible until somebody points at it. The order is not
 * decorative: intuition first so the reader has something to hang the
 * definition on, the definition before the example so the example is checkable,
 * and the two independent verifications last, because a claim that survives
 * only one of them has not been checked twice.
 *
 * HTML, not SVG: seven questions with a reason each is seven paragraphs, and a
 * paragraph does not fit in a box that cannot wrap.
 */
const questions = [
  {
    step: "01",
    field: "Intuition / analogy",
    asks: "What is this like, in something I already know?",
    why: "An analogy carries no weight in a proof. It is here so the definition that follows has somewhere to land, and it is kept first so it can never be mistaken for the argument.",
  },
  {
    step: "02",
    field: "Exact definition",
    asks: "What exactly is being claimed?",
    why: "Stated in ordinary mathematical language, with quantifiers where quantifiers belong. Everything below this line either follows from it or is a counterexample to it.",
  },
  {
    step: "03",
    field: "Worked small-level example",
    asks: "What does it look like at a level I can check by hand?",
    why: "Small enough to verify on paper. If the reader's arithmetic disagrees with the card, one of the two is wrong and the disagreement is concrete rather than a matter of interpretation.",
  },
  {
    step: "04",
    field: "Why it is true",
    asks: "What is the reason, not the restatement?",
    why: "The argument itself. A card that could only repeat the definition here would be describing a convention rather than establishing anything.",
  },
  {
    step: "05",
    field: "Common mistake or boundary",
    asks: "What do people take from this that it does not say?",
    why: "Every claim has a neighbouring claim that sounds the same and is false. Naming it is cheaper than answering it later, and it marks where the statement stops.",
  },
  {
    step: "06",
    field: "Table check",
    asks: "Does the table agree?",
    why: "Read straight off the Cayley tables, independently of any formula.",
  },
  {
    step: "07",
    field: "Formula check",
    asks: "Does the formula agree?",
    why: "Recomputed from the closed form. This is a second channel rather than a restatement of the first, and the two are required to meet — a claim that passes one and fails the other has not been checked, it has been half checked.",
  },
] as const;

export function ProofShapeFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--proofshape">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE SHAPE EVERY CARD BELOW SHARES")}</span>
        <strong>{t("Seven questions, in an order chosen so no answer can lean on the next one.")}</strong>
        <span className="galo-figure__note">
          {t(
            "The cards are uniform on purpose. A reader who learns the shape once can go to the part they want in any of them, and — more importantly — can see at a glance when a part is thin. A missing worked example or a formula check that only repeats the table is visible in a layout like this, and invisible in prose.",
          )}
        </span>
      </figcaption>

      <ol className="proof-shape">
        {questions.map((question) => (
          <li key={question.step} className={question.step >= "06" ? "is-check" : undefined}>
            <span className="proof-shape__step" dir="ltr">
              {question.step}
            </span>
            <div>
              <h4>{t(question.field)}</h4>
              <p className="proof-shape__asks">{t(question.asks)}</p>
              <p>{t(question.why)}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="galo-figure__foot">
        {t(
          "The last two are the ones that make the rest checkable. Everything above them is explanation; those two are the independent channels, and the build fails if they disagree.",
        )}
      </p>
    </figure>
  );
}
