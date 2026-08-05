import { useI18n } from "../../i18n/I18nContext";

const fields = [
  {
    field: "check_id",
    value: "DIRECT_MORPHISM_REPLAY_L2_TO_L4",
    meaning: "Which check ran. The name is fixed in the release, so two runs of the same check are comparable.",
  },
  {
    field: "scope",
    value: "L2 → L4 · 4 pairs · 4 families",
    meaning: "Exactly what was covered. A pass outside this scope is not implied and must not be quoted as one.",
  },
  {
    field: "expected / got",
    value: "P0 / P0",
    meaning:
      "The two independent channels. A receipt is only a pass when the derived value and the looked-up value agree.",
  },
  {
    field: "rc / status",
    value: "0 / PASS",
    meaning: "The terminal outcome. BOUNDARY and EXPECTED_REJECTION are outcomes too, not failures to report.",
  },
  {
    field: "work ledger",
    value: "1,902 + 2,852 + 24 + 24",
    meaning: "Internal work-unit counts per phase. Not time, energy, cost, or any external measure.",
  },
  {
    field: "receipt_id",
    value: "fc7946d5a85ec30b…5619f95",
    meaning: "The digest that lets somebody else confirm they are looking at this exact record and not a similar one.",
  },
] as const;

/**
 * An annotated receipt. Each field is named alongside the question it answers,
 * because a receipt is only useful to a reader who knows what each line commits to.
 */
export function ReceiptAnatomyFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--receipt">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT A RECEIPT ACTUALLY COMMITS TO")}</span>
        <strong>{t("Six fields, and what each one lets a reader conclude.")}</strong>
        <span className="galo-figure__note">
          {t(
            "A receipt is not a certificate that something is true about the world. It is a statement that one named check ran over one named scope and ended in one named status.",
          )}
        </span>
      </figcaption>

      <ol className="galo-receipt">
        {fields.map((entry, index) => (
          <li key={entry.field}>
            <span className="galo-receipt__index" dir="ltr">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="galo-receipt__body">
              <code className="galo-receipt__field" dir="ltr">
                {entry.field}
              </code>
              <code className="galo-receipt__value" dir="ltr">
                {entry.value}
              </code>
              <p>{t(entry.meaning)}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="galo-figure__note galo-figure__note--boundary">
        {t(
          "A PASS is meaningful only together with its scope. Quoting the status without the scope is the single most common way to overstate what a record shows.",
        )}
      </p>
    </figure>
  );
}
