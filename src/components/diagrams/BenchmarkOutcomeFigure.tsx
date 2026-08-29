import { useId } from "react";
import { benchmarkOutcomes, benchmarkTaskNote, benchmarkTotals } from "../../content/publicRun";
import { useI18n } from "../../i18n/I18nContext";

/**
 * The three public runs, with every denominator on the same row.
 *
 * The temptation is a bar chart of accuracies, which would put a benchmark that
 * answered nothing at zero beside one that answered almost everything at ninety-
 * seven and invite the reader to average them. They are not comparable that way:
 * one of the numbers is over answered rows and the other over all rows, and the
 * gap between them is the whole point.
 *
 * So this is a table, and every row carries both — plus the sentence a reader
 * should take away from it, because a row of six numbers does not defend itself.
 * HTML rather than SVG: these are sentences in four languages.
 */
export function BenchmarkOutcomeFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const equivalent = benchmarkOutcomes
    .map(
      (row) =>
        `${t(row.corpus)}, ${t(row.task)}: ${row.testRows} ${t("test rows")}, ${row.answered} ${t("answered")}, ${row.refused} ${t("refused")}, ${row.correct} ${t("correct")}. ${t("Coverage")} ${row.coverage}. ${t("Overall accuracy")} ${row.overall}.`,
    )
    .join(" ");

  return (
    <figure className="runs" aria-labelledby={titleId} aria-describedby={descriptionId}>
      <figcaption className="runs__caption">
        <span className="runs__eyebrow">{t("EVERY DENOMINATOR ON THE SAME ROW")}</span>
        <strong id={titleId}>
          {t("How much was answered, and how much of that was right — both on the same card, for each run.")}
        </strong>
      </figcaption>

      <div className="runs__grid">
        {benchmarkOutcomes.map((row) => (
          <article key={row.corpus}>
            <header>
              <h4>{t(row.corpus)}</h4>
              <span className="runs__task">{t(row.task)}</span>
            </header>

            <dl className="runs__counts">
              <div>
                <dt>{t("Test rows")}</dt>
                <dd dir="ltr">{row.testRows}</dd>
              </div>
              <div>
                <dt>{t("Answered")}</dt>
                <dd dir="ltr">{row.answered}</dd>
              </div>
              <div>
                <dt>{t("Refused")}</dt>
                <dd dir="ltr">{row.refused}</dd>
              </div>
              <div>
                <dt>{t("Correct")}</dt>
                <dd dir="ltr">{row.correct}</dd>
              </div>
            </dl>

            <dl className="runs__rates">
              <div>
                <dt>{t("Coverage")}</dt>
                <dd dir="ltr">{row.coverage}</dd>
              </div>
              <div>
                <dt>{t("Overall accuracy")}</dt>
                <dd dir="ltr">{row.overall}</dd>
              </div>
              <div>
                <dt>{t("Among answers")}</dt>
                {/* No average exists over nothing, and a dash says so better than a zero. */}
                <dd dir="ltr">{row.selective ?? t("none to average")}</dd>
              </div>
            </dl>

            <p className="runs__candidates">{t(row.candidates)}</p>
            <p className="runs__reading">{t(row.reading)}</p>
          </article>
        ))}
      </div>

      <p className="runs__totals">
        <span dir="ltr">{benchmarkTotals.testRows}</span> {t("test rows across the three, and")}{" "}
        <span dir="ltr">{benchmarkTotals.receipts}</span> {t("receipts — answered or refused, every row leaves one.")}
      </p>
      <p className="runs__task-note">{t(benchmarkTaskNote)}</p>

      <p className="sr-only" id={descriptionId}>
        {equivalent}
      </p>
    </figure>
  );
}
