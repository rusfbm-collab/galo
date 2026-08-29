import { applyGaloOperation, type GaloOperation } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL = 6;
const OPERANDS = [4, 2, 3] as const;

/**
 * Why brackets are part of the program and not part of its formatting.
 *
 * One worked triple, bracketed both ways, with every number computed from the
 * tables rather than written down. Under PLUS the two bracketings agree and the
 * brackets are decoration. Under STAR they disagree, and a program that did not
 * say where its brackets were would not have named a single answer — which is
 * the whole reason the syntax tree is carried in the record.
 *
 * The triple is chosen so the left bracketing passes through the absorbing pole
 * and the right one does not. That is the mechanism, in one row of arithmetic.
 *
 * This was drawn as four small syntax trees. It should not have been: two
 * levels of nesting is not enough geometry to be worth a viewBox, the boxes
 * could not hold their own labels once the section's dark palette flipped the
 * text colour, and what a reader actually wants is the order the two evaluations
 * happen in. That is a list, so it is a list.
 */
function evaluate(operation: GaloOperation, association: "LEFT" | "RIGHT") {
  const [a, b, c] = OPERANDS;
  const inner =
    association === "LEFT" ? applyGaloOperation(operation, LEVEL, a, b) : applyGaloOperation(operation, LEVEL, b, c);
  const result =
    association === "LEFT"
      ? applyGaloOperation(operation, LEVEL, inner, c)
      : applyGaloOperation(operation, LEVEL, a, inner);
  return { inner, result };
}

export function BracketTreeFigure() {
  const { t } = useI18n();

  const [a, b, c] = OPERANDS;
  const lanes = (["STAR", "PLUS"] as const).map((operation) => {
    const symbol = operation === "STAR" ? "★" : "⊕";
    const left = evaluate(operation, "LEFT");
    const right = evaluate(operation, "RIGHT");
    return {
      operation,
      symbol,
      agrees: left.result === right.result,
      verdict: left.result === right.result ? "the brackets change nothing" : "the brackets change the answer",
      trees: [
        {
          id: "left",
          shape: `(${a} ${symbol} ${b}) ${symbol} ${c}`,
          steps: [`${a} ${symbol} ${b} = ${left.inner}`, `${left.inner} ${symbol} ${c} = ${left.result}`],
          result: left.result,
        },
        {
          id: "right",
          shape: `${a} ${symbol} (${b} ${symbol} ${c})`,
          steps: [`${b} ${symbol} ${c} = ${right.inner}`, `${a} ${symbol} ${right.inner} = ${right.result}`],
          result: right.result,
        },
      ],
      reading:
        operation === "STAR"
          ? "The left bracketing reaches the absorbing pole at its first step and can never leave it; the right one never meets it. Two lawful readings of the same three operands, and they are not the same answer."
          : "Both bracketings reach the same pole, because this law is associative. Here the brackets carry no information — which is exactly why they cannot be assumed to carry none in general.",
    };
  });

  return (
    <figure className="galo-figure galo-figure--brackets">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE SAME THREE OPERANDS, BRACKETED TWO WAYS")}</span>
        <strong>{t("Under one law the brackets are decoration. Under the other they are the answer.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Take three poles and combine them. There are two ways to bracket that, and whether they agree is a property of the law rather than of the notation. Because one of the two laws here is not associative, a program that left its brackets implicit would not have named one result — so the tree is carried in the record, and a reader can rebuild the arithmetic from it.",
          )}
        </span>
      </figcaption>

      <div className="brackets">
        {lanes.map((lane) => (
          <section key={lane.operation} className={`brackets__lane is-${lane.operation.toLowerCase()}`}>
            <header>
              <bdi dir="ltr">{lane.operation}</bdi>
              <span className={lane.agrees ? "brackets__verdict" : "brackets__verdict is-diff"}>{t(lane.verdict)}</span>
            </header>

            <div className="brackets__trees">
              {lane.trees.map((tree) => (
                <article key={tree.id}>
                  <p className="brackets__shape">
                    <bdi dir="ltr">{tree.shape}</bdi>
                  </p>
                  <ol className="brackets__steps">
                    {tree.steps.map((step) => (
                      <li key={step}>
                        <bdi dir="ltr">{step}</bdi>
                      </li>
                    ))}
                  </ol>
                  <p className="brackets__result">
                    <bdi dir="ltr">= {tree.result}</bdi>
                  </p>
                </article>
              ))}
            </div>

            <p className="brackets__reading">{t(lane.reading)}</p>
          </section>
        ))}
      </div>

      <p className="galo-figure__foot">
        {t(
          "Worked at level 6. Every number above is computed from the same formulas the explorer uses, so a reader can reproduce both evaluations by hand and disagree with them concretely rather than in principle.",
        )}
      </p>
    </figure>
  );
}
