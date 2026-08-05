import { useI18n } from "../../i18n/I18nContext";

const questions = [
  {
    question: "Which exact rule produced this output?",
    model:
      "Not recoverable. Behaviour is distributed across the whole parameter set; any stated reason is reconstructed afterwards.",
    galo: "One coordinate, printed in the record: level, law family, source role, active role.",
  },
  {
    question: "Will the same input give the same output tomorrow?",
    model: "Usually, but not by construction. Sampling, precision, batching, and a version change can all move it.",
    galo: "Yes by construction. The step is a table lookup and the candidate ordering is hash-derived.",
  },
  {
    question: "Has every possible case been checked?",
    model: "No, and the question is not well posed. The input space is open, so evaluation covers a sample.",
    galo: "Yes for the declared universe. All 1,204 committed descriptors are enumerated on every build.",
  },
  {
    question: "Can somebody who distrusts you verify it?",
    model: "Only by re-running the same system and comparing aggregate behaviour.",
    galo: "Yes, from the record alone, on a different machine, cell by cell.",
  },
  {
    question: "What happens on an input outside the contract?",
    model: "It answers anyway. There is no built-in notion of being out of scope.",
    galo: "It refuses with a named boundary. Refusing is a recorded outcome, not a failure to respond.",
  },
  {
    question: "Can it read this sentence?",
    model: "Yes. This is the thing it is genuinely extraordinary at.",
    galo: "No. The current engine has no language understanding at all.",
  },
] as const;

/**
 * The same six questions asked of both systems. The last row exists so the
 * comparison cannot be mistaken for a claim that GALO is the stronger object.
 */
export function AnswerPathFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--answers">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("ASK BOTH THE SAME SIX QUESTIONS")}</span>
        <strong>{t("The difference shows up in what each one can answer about itself.")}</strong>
        <span className="galo-figure__note">
          {t(
            "These are questions about mechanism and evidence, not about quality of output. The final row is the one that matters most for reading the rest of this page honestly.",
          )}
        </span>
      </figcaption>

      <div className="galo-answers__wrap" role="region" aria-label={t("Question-by-question comparison")} tabIndex={0}>
        <table className="galo-answers">
          <caption>{t("The same question put to each system")}</caption>
          <thead>
            <tr>
              <th scope="col">{t("Question")}</th>
              <th scope="col">{t("A language model")}</th>
              <th scope="col">{t("The GALO engine today")}</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((row) => (
              <tr key={row.question}>
                <th scope="row">{t(row.question)}</th>
                <td>{t(row.model)}</td>
                <td className="is-galo">{t(row.galo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
