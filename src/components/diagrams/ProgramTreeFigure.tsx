import { useId } from "react";
import { useI18n } from "../../i18n/I18nContext";

const WIDTH = 660;
const HEIGHT = 250;

type Node = { x: number; y: number; label: string; result?: string };

function tree(offsetX: number, leftAssociated: boolean) {
  const cx = offsetX + 150;
  return {
    root: { x: cx, y: 56, label: "★", result: leftAssociated ? "P2" : "P1" } as Node,
    inner: leftAssociated
      ? ({ x: cx - 66, y: 132, label: "★", result: "P1" } as Node)
      : ({ x: cx + 66, y: 132, label: "★", result: "P0" } as Node),
    leaves: leftAssociated
      ? ([
          { x: cx - 112, y: 200, label: "P1" },
          { x: cx - 20, y: 200, label: "P0" },
          { x: cx + 66, y: 132, label: "P1" },
        ] as Node[])
      : ([
          { x: cx - 66, y: 132, label: "P1" },
          { x: cx + 20, y: 200, label: "P0" },
          { x: cx + 112, y: 200, label: "P1" },
        ] as Node[]),
  };
}

/**
 * The two bracketings of the same three operands, drawn as evaluation trees. The
 * roots disagree, which is the whole content of nonassociativity.
 */
export function ProgramTreeFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  const renderTree = (offsetX: number, leftAssociated: boolean) => {
    const { root, inner, leaves } = tree(offsetX, leftAssociated);
    const applyLeaves = leaves.filter((leaf) => leaf.y === 200);
    const passThrough = leaves.find((leaf) => leaf.y !== 200)!;

    return (
      <g className="galo-tree">
        <text className="galo-tree__title" x={offsetX + 150} y="26" textAnchor="middle">
          {leftAssociated ? t("brackets on the left") : t("brackets on the right")}
        </text>

        <path className="galo-tree__edge" d={`M${root.x} ${root.y + 14} L ${inner.x} ${inner.y - 14}`} />
        <path className="galo-tree__edge" d={`M${root.x} ${root.y + 14} L ${passThrough.x} ${passThrough.y - 14}`} />
        {applyLeaves.map((leaf) => (
          <path
            key={`e-${leaf.x}`}
            className="galo-tree__edge"
            d={`M${inner.x} ${inner.y + 14} L ${leaf.x} ${leaf.y - 14}`}
          />
        ))}

        {[root, inner].map((node, index) => (
          <g key={`apply-${index}`} className="galo-tree__apply">
            <circle cx={node.x} cy={node.y} r="19" />
            <text x={node.x} y={node.y} dominantBaseline="central" textAnchor="middle" direction="ltr">
              {node.label}
            </text>
            <text className="galo-tree__result" x={node.x + 28} y={node.y + 4} direction="ltr">
              = {node.result}
            </text>
          </g>
        ))}

        {[...applyLeaves, passThrough].map((leaf, index) => (
          <g key={`leaf-${index}`} className="galo-tree__leaf">
            <rect x={leaf.x - 20} y={leaf.y - 14} width="40" height="28" rx="8" />
            <text x={leaf.x} y={leaf.y} dominantBaseline="central" textAnchor="middle" direction="ltr">
              {leaf.label}
            </text>
          </g>
        ))}
      </g>
    );
  };

  return (
    <figure className="galo-figure galo-figure--tree">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("THE SAME THREE INPUTS, TWO PROGRAMS")}</span>
        <strong>{t("Moving the brackets changes the answer, so the brackets are part of the program.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Both trees consume P1, P0 and P1 in that order. Only the grouping differs, and the roots already disagree. That is why a plan has to be stored as a tree and not as a flat list of steps.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Two evaluation trees over the same three operands")}</title>
          <desc id={descriptionId}>
            {t(
              "The left tree groups the first two operands and evaluates to P2. The right tree groups the last two operands and evaluates to P1. The operands and their order are identical in both.",
            )}
          </desc>
          {renderTree(10, true)}
          <line className="galo-tree__split" x1={WIDTH / 2} y1="16" x2={WIDTH / 2} y2={HEIGHT - 16} />
          {renderTree(WIDTH / 2 + 10, false)}
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">(P1★P0)★P1 = P2</strong>
          <span>{t("Group the first two: the inner step returns P1, and one more step reaches P2.")}</span>
        </p>
        <p>
          <strong dir="ltr">P1★(P0★P1) = P1</strong>
          <span>{t("Group the last two: the inner step resets to P0, and the outer step returns P1.")}</span>
        </p>
      </div>
    </figure>
  );
}
