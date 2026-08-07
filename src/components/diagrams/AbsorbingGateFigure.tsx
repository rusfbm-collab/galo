import { useId } from "react";
import { applyGaloOperation } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL = 3;

/** Three chains of four STAR steps, differing only in where they start. */
const chains = [
  { start: 1, inputs: [1, 2, 1, 2], label: "starts away from the reset row" },
  { start: 2, inputs: [2, 2, 1, 2], label: "reaches the reset row at step two" },
  { start: 0, inputs: [2, 1, 2, 1], label: "starts on the reset row" },
] as const;

function runChain(start: number, inputs: readonly number[]) {
  const states = [start];
  let current = start;
  for (const input of inputs) {
    current = applyGaloOperation("STAR", LEVEL, current, input);
    states.push(current);
  }
  return states;
}

const NODE = 34;
const STEP = 118;
const ROW = 76;
const LEFT = 46;
const WIDTH = LEFT + STEP * 4 + NODE + 24;
const HEIGHT = ROW * chains.length + 36;

/**
 * The absorbing property, drawn as three histories rather than stated as a law.
 * Once a chain is on P0 no later input takes it off, which is the difference
 * between a rule and a preference that a later step can outweigh.
 */
export function AbsorbingGateFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();
  const arrowId = useId();

  return (
    <figure className="galo-figure galo-figure--gate">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT AN ABSORBING STATE BUYS")}</span>
        <strong>{t("Once a chain lands on P0, no later step takes it off.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Three histories, four STAR steps each, differing only in where they start. Every node below is recomputed from the law when the page renders. The commercial reading is the plain one: a stop stays a stop, and it cannot be quietly outweighed by whatever arrives next.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Three chains of STAR steps at level three")}</title>
          <desc id={descriptionId}>
            {t(
              "Three rows of five linked nodes. The first row never reaches P0. The second row reaches P0 at its second step and stays on P0 for the rest of the row. The third row starts on P0 and stays there. Each link is labelled with the input applied at that step.",
            )}
          </desc>
          <defs>
            <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--chart-neutral-strong)" />
            </marker>
          </defs>

          {chains.map((chain, chainIndex) => {
            const states = runChain(chain.start, chain.inputs);
            const y = 34 + chainIndex * ROW;
            return (
              <g key={chain.label} className="galo-gate__chain">
                <text className="galo-gate__rowlabel" x="0" y={y + NODE / 2 + 5} direction="ltr">
                  {String(chainIndex + 1).padStart(2, "0")}
                </text>
                {states.map((state, stepIndex) => {
                  const x = LEFT + stepIndex * STEP;
                  const absorbed = state === 0;
                  return (
                    <g key={`${chainIndex}-${stepIndex}`}>
                      {stepIndex > 0 && (
                        <>
                          <path
                            className="galo-gate__link"
                            d={`M${x - STEP + NODE} ${y + NODE / 2} H ${x - 6}`}
                            markerEnd={`url(#${arrowId})`}
                          />
                          <text
                            className="galo-gate__input"
                            x={x - STEP / 2 + NODE / 2}
                            y={y + NODE / 2 - 10}
                            textAnchor="middle"
                            direction="ltr"
                          >
                            ★ P{chain.inputs[stepIndex - 1]}
                          </text>
                        </>
                      )}
                      <rect
                        className={absorbed ? "galo-gate__node is-absorbed" : "galo-gate__node"}
                        x={x}
                        y={y}
                        width={NODE}
                        height={NODE}
                        rx="10"
                      />
                      <text
                        className={absorbed ? "galo-gate__state is-absorbed" : "galo-gate__state"}
                        x={x + NODE / 2}
                        y={y + NODE / 2 + 5}
                        textAnchor="middle"
                        direction="ltr"
                      >
                        P{state}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <ol className="galo-figure__stage-notes">
        {chains.map((chain, index) => {
          const states = runChain(chain.start, chain.inputs);
          return (
            <li key={chain.label}>
              <strong dir="ltr">{String(index + 1).padStart(2, "0")}</strong>
              <span>
                <b>{t(chain.label)}</b>
                <bdi dir="ltr">{states.map((state) => `P${state}`).join(" → ")}</bdi>
              </span>
            </li>
          );
        })}
      </ol>

      <div className="galo-figure__pair">
        <p>
          <strong>{t("What this is")}</strong>
          <span>
            {t(
              "A property of the law itself: P0 is the unique left zero of STAR, so any step taken from P0 lands on P0 again.",
            )}
          </span>
        </p>
        <p>
          <strong>{t("What this is not")}</strong>
          <span>
            {t(
              "A guarantee about a real approval process. It says that if a system encodes its stop as this position, the stop survives the rest of the chain — not that any system has been built that way.",
            )}
          </span>
        </p>
      </div>
    </figure>
  );
}
