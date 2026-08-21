import { ChevronDown, RotateCcw } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

type Stage = {
  label: string;
  /** What the stage is, said without project vocabulary. */
  plain: string;
};

const current: readonly Stage[] = [
  {
    label: "Committed finite universe",
    plain:
      "Before anything runs, the complete list of actions the engine is allowed to take is fixed. Nothing joins it later, and nothing outside it can be executed.",
  },
  {
    label: "Bound executable handle",
    plain:
      "One entry from that list is picked and tied to a single use. Trying to use it a second time is refused and recorded, not quietly allowed.",
  },
  {
    label: "Budgeted one-shot action",
    plain:
      "The action runs once, inside a limit set in advance. There is no second attempt and no way to spend more than was budgeted.",
  },
  {
    label: "Execution receipts",
    plain:
      "The step leaves a written record: what was checked, what ran, what came out. It is what you would hand to somebody who asks.",
  },
  {
    label: "Work ledger",
    plain:
      "Every unit of work is counted and numbered, so the total can be checked against its parts rather than taken on trust.",
  },
] as const;

const target: readonly Stage[] = [
  {
    label: "Authenticated observation",
    plain:
      "Input would arrive with proof of where it came from. Today the engine accepts two fixed patterns and nothing else, so this stage does not run.",
  },
  {
    label: "World Atlas state",
    plain:
      "An explicit, readable picture of what the system currently believes about the world. No trained Atlas exists in this release.",
  },
  {
    label: "Task decomposition",
    plain:
      "Splitting one goal into smaller steps that can be checked separately. Written down, and not in the shipped release.",
  },
  {
    label: "Multi-level ProgramIR",
    plain:
      "A plan written as a tree of steps rather than a single move, so the whole plan can be inspected before any of it runs. It runs in the sealed prototype, and not in the shipped release.",
  },
  {
    label: "Local revision",
    plain:
      "Changing one belief without retraining everything around it. This is the loop the architecture is designed around, and it does not run in the shipped release.",
  },
  {
    label: "Persistent policy",
    plain:
      "Carrying what was learned from one run into the next. Learning writes are held at zero in the shipped release; in the sealed prototype line this stage is exactly what was measured.",
  },
] as const;

function StageList({ stages, tone }: { stages: readonly Stage[]; tone: "current" | "target" }) {
  const { t } = useI18n();

  return (
    <ol className="architecture-lane__steps">
      {stages.map((stage, index) => (
        <li key={stage.label}>
          <details>
            <summary>
              <span className="architecture-lane__number" dir="ltr">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{t(stage.label)}</strong>
              {tone === "target" && index === 4 ? (
                <RotateCcw className="architecture-lane__loop" size={16} aria-label={t("Revision loop")} />
              ) : (
                <ChevronDown className="architecture-lane__chevron" size={16} aria-hidden="true" />
              )}
            </summary>
            <p>{t(stage.plain)}</p>
          </details>
        </li>
      ))}
    </ol>
  );
}

/**
 * Two lanes, each a list of stages that actually open. The rows used to carry a
 * downward chevron and no behaviour, which read as a broken accordion; and the
 * labels alone — "bound executable handle" — mean nothing outside this project.
 */
export function ArchitectureFlow() {
  const { t } = useI18n();

  return (
    <div className="architecture-split">
      <section className="architecture-lane architecture-lane--current" aria-labelledby="current-lane-title">
        <div className="architecture-lane__header">
          <span className="status status--pass">{t("CURRENT VERIFIED SLICE")}</span>
          <h3 id="current-lane-title">{t("Finite, typed, receipt-backed execution")}</h3>
          <p>{t("Five stages that run in the release you can download today. Open any of them for what it means.")}</p>
        </div>
        <StageList stages={current} tone="current" />
      </section>
      <section className="architecture-lane architecture-lane--target" aria-labelledby="target-lane-title">
        <div className="architecture-lane__header">
          <span className="status status--development">{t("TARGET ARCHITECTURE · IN DEVELOPMENT")}</span>
          <h3 id="target-lane-title">{t("Explicit state, local revision, adaptive search")}</h3>
          <p>
            {t(
              "Six stages the architecture is built around. None of them runs in the shipped release, and several of them run in a separate sealed prototype.",
            )}
          </p>
        </div>
        <StageList stages={target} tone="target" />
        <p className="architecture-lane__note">
          {t(
            "None of this is in the shipped release: it carries no trained Atlas, and neither observation-conditioned structural reasoning nor persistent learning is implemented there. The sealed prototype line has trained Atlases of its own, and is a different artefact.",
          )}
        </p>
      </section>
    </div>
  );
}
