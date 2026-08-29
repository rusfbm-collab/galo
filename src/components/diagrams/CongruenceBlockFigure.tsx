import { useId } from "react";
import { applyGaloOperation } from "../../content/mathematics";
import { useI18n } from "../../i18n/I18nContext";

const LEVEL = 6;
const WIDTH = 660;
const HEIGHT = 190;

/**
 * What "the quotient is rigid" means, in one worked partition.
 *
 * A congruence is the property that lets a system reason about groups of states
 * instead of states. Either the law is well defined on the blocks — every choice
 * of representative gives an answer in the same block — or it is not, and the
 * abstraction silently depends on which member you happened to pick. This draws
 * one partition and checks it, rather than asserting rigidity.
 */
const blocks = [
  { name: "A", members: [0, 3] },
  { name: "B", members: [1, 4] },
  { name: "C", members: [2, 5] },
] as const;

function blockOf(value: number) {
  return blocks.find((block) => (block.members as readonly number[]).includes(value))!.name;
}

export function CongruenceBlockFigure() {
  const { t } = useI18n();
  const titleId = useId();
  const descriptionId = useId();

  // Combine one representative from each block with a fixed pole, and see whether
  // the block of the answer depends on which representative was taken.
  const active = 1;
  const probes = blocks.map((block) => {
    const images = block.members.map((member) => ({
      member,
      plus: applyGaloOperation("PLUS", LEVEL, member, active),
      star: applyGaloOperation("STAR", LEVEL, member, active),
    }));
    const plusBlocks = new Set(images.map((entry) => blockOf(entry.plus)));
    const starBlocks = new Set(images.map((entry) => blockOf(entry.star)));
    return { block, images, plusStable: plusBlocks.size === 1, starStable: starBlocks.size === 1 };
  });

  const plusHolds = probes.every((probe) => probe.plusStable);
  const starHolds = probes.every((probe) => probe.starStable);

  return (
    <figure className="galo-figure galo-figure--congruence">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHEN A GROUPING IS ALLOWED TO STAND IN FOR ITS MEMBERS")}</span>
        <strong>{t("Either every representative gives the same block, or the grouping is not one.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Reasoning about a group of states rather than about each state is only sound if the law cannot tell the members apart. Split the carrier into blocks, take one law and one fixed pole, and combine both members of a block with it: if the two answers land in different blocks, the grouping was an illusion and every conclusion drawn over it inherits the fault.",
          )}
        </span>
      </figcaption>

      <div className="galo-figure__canvas">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby={`${titleId} ${descriptionId}`}>
          <title id={titleId}>{t("Three blocks of the carrier, tested under both laws")}</title>
          <desc id={descriptionId}>
            {t(
              "The six poles of level six drawn as three blocks of two. Each block is combined with the same fixed pole under both laws, and the resulting block is shown for each member so that agreement or disagreement can be read directly.",
            )}
          </desc>

          {probes.map((probe, index) => {
            const x = 20 + index * 214;
            return (
              <g key={probe.block.name} className="galo-congruence__block">
                <rect x={x} y="18" width="196" height="146" rx="14" />
                <text className="galo-congruence__name" x={x + 16} y="42" direction="ltr">
                  {probe.block.name} = {"{"}
                  {probe.block.members.join(", ")}
                  {"}"}
                </text>

                {probe.images.map((image, row) => (
                  <g key={image.member}>
                    <text
                      className="galo-congruence__row"
                      x={x + 16}
                      y={72 + row * 24}
                      dominantBaseline="central"
                      direction="ltr"
                    >
                      {image.member} ⊕ {active} → {blockOf(image.plus)}
                    </text>
                    <text
                      className="galo-congruence__row is-star"
                      x={x + 108}
                      y={72 + row * 24}
                      dominantBaseline="central"
                      direction="ltr"
                    >
                      {image.member} ★ {active} → {blockOf(image.star)}
                    </text>
                  </g>
                ))}

                <text
                  className={probe.plusStable ? "galo-congruence__verdict" : "galo-congruence__verdict is-broken"}
                  x={x + 16}
                  y="140"
                  direction="ltr"
                >
                  ⊕ {probe.plusStable ? "one block" : "two blocks"}
                </text>
                <text
                  className={probe.starStable ? "galo-congruence__verdict" : "galo-congruence__verdict is-broken"}
                  x={x + 108}
                  y="140"
                  direction="ltr"
                >
                  ★ {probe.starStable ? "one block" : "two blocks"}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="galo-figure__pair">
        <p>
          <strong dir="ltr">⊕ {plusHolds ? "well defined" : "not well defined"}</strong>
          <span>
            {t(
              "Both members of every block answer into the same block, so the grouping can stand in for its members and the quotient is a structure in its own right.",
            )}
          </span>
        </p>
        <p>
          <strong dir="ltr">★ {starHolds ? "well defined" : "not well defined"}</strong>
          <span>
            {t(
              "The absorbing pole is what breaks it: a member that meets it answers into a block the other member never reaches. Any argument that treated this partition as sound under both laws would be wrong, and the failure is visible in one line rather than hidden in a proof.",
            )}
          </span>
        </p>
      </div>

      <p className="galo-figure__foot">
        {t(
          "Worked at level 6 on the residues modulo 3, with the active pole fixed at 1. The verdicts above are computed from the tables on every build, so this figure cannot drift out of agreement with the propositions it illustrates.",
        )}
      </p>
    </figure>
  );
}
