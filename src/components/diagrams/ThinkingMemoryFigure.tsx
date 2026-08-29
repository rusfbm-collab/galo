import { useI18n } from "../../i18n/I18nContext";

/**
 * What survives an episode. Three registers do; two things a reader will assume
 * are there deliberately are not.
 *
 * This was an SVG of five labelled boxes, which meant every label had to be one
 * unwrappable line: the register names could not be glossed, and a longer
 * translation had nowhere to go. There is no geometry here worth keeping — no
 * arrows, no scale, no position that means anything — so it is HTML, and each
 * register can now say what it actually holds in whatever length the language
 * needs.
 */
const bands = [
  {
    id: "carried",
    tag: "carried into the next episode",
    entries: [
      {
        value: "receipts",
        gloss: "What was checked, what was probed, what was refused, and what the episode cost to run.",
      },
      {
        value: "learned volume",
        gloss:
          "Counters and learned orders over what to try first, held apart from the engine so they can be replaced without touching what may be concluded.",
      },
      {
        value: "proven structures",
        gloss: "Structures that passed the formation checks, each standing as active, weakened, or retired.",
      },
    ],
  },
  {
    id: "dropped",
    tag: "absent by construction, not merely unused",
    entries: [
      {
        value: "weights",
        gloss: "No parameter is fitted, adjusted, or accumulated — not during a run, and not between runs.",
      },
      {
        value: "wider verdict",
        gloss: "Learning cannot reach what counts as a lawful answer. It changes the order, never the permission.",
      },
    ],
  },
] as const;

export function ThinkingMemoryFigure() {
  const { t } = useI18n();

  return (
    <figure className="galo-figure galo-figure--memory">
      <figcaption className="galo-figure__caption">
        <span className="galo-figure__eyebrow">{t("WHAT SURVIVES AN EPISODE")}</span>
        <strong>{t("Three registers are carried forward. Two familiar ones are still absent.")}</strong>
        <span className="galo-figure__note">
          {t(
            "Everything an episode leaves behind can be listed. That is what makes a later disagreement resolvable: two runs are compared register by register instead of being argued about, and a register that is absent is absent by construction rather than by omission.",
          )}
        </span>
      </figcaption>

      <div className="memory-bands">
        {bands.map((band) => (
          <section key={band.id} className={`memory-bands__band is-${band.id}`}>
            <span className="memory-bands__tag">{t(band.tag)}</span>
            <ul>
              {band.entries.map((entry) => (
                <li key={entry.value}>
                  {/* The mark is decorative: "absent" is already carried by the band's own tag. */}
                  <span className="memory-bands__mark" aria-hidden="true">
                    {band.id === "dropped" ? "✗" : "•"}
                  </span>
                  <bdi dir="ltr">{entry.value}</bdi>
                  <span>{t(entry.gloss)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="galo-figure__foot">
        {t(
          "Remove the learned volume and the same engine still runs. It reaches an answer more slowly, and it is never allowed a different one.",
        )}
      </p>
    </figure>
  );
}
