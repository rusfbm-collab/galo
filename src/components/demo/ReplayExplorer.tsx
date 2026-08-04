import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, ChevronRight, Play, RotateCcw } from "lucide-react";
import replayData from "../../data/controlled-replay.json";
import { useI18n } from "../../i18n/I18nContext";

type ReplayTab = "current" | "target";

export function ReplayExplorer() {
  const { t } = useI18n();
  const [tab, setTab] = useState<ReplayTab>("current");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeStep = replayData.steps[activeIndex] ?? replayData.steps[0];
  const isComplete = activeIndex === replayData.steps.length - 1;

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setTimeout(() => {
      if (isComplete) {
        setIsPlaying(false);
        return;
      }
      setActiveIndex((value) => value + 1);
    }, 650);
    return () => window.clearTimeout(timer);
  }, [isPlaying, isComplete]);

  const receiptPreview = useMemo(() => {
    if (!activeStep) return "";
    return `${activeStep.receipt.slice(0, 12)}…${activeStep.receipt.slice(-8)}`;
  }, [activeStep]);

  const reset = () => {
    setIsPlaying(false);
    setActiveIndex(0);
  };

  const play = () => {
    if (isComplete) setActiveIndex(0);
    setIsPlaying(true);
  };

  return (
    <div className="replay-explorer">
      <div className="replay-explorer__tabs" role="tablist" aria-label={t("Receipt walkthrough modes")}>
        <button type="button" role="tab" aria-selected={tab === "current"} onClick={() => setTab("current")}>
          {t("Recorded receipt")}
        </button>
        <button type="button" role="tab" aria-selected={tab === "target"} onClick={() => setTab("target")}>
          {t("Target learning loop")}
        </button>
      </div>

      {tab === "current" ? (
        <div role="tabpanel" className="replay-explorer__panel">
          <div className="replay-explorer__rail" aria-label={t("Receipt steps")}>
            {replayData.steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                className={`${index === activeIndex ? "is-active" : ""} ${index < activeIndex ? "is-complete" : ""}`}
                aria-label={t("Show step {number}: {label}", { number: index + 1, label: t(step.label) })}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex(index);
                }}
              >
                <span>{index < activeIndex ? <Check size={14} aria-hidden="true" /> : step.index}</span>
                <strong>{t(step.label)}</strong>
              </button>
            ))}
          </div>

          <div className="receipt-card" aria-live="polite">
            <div className="receipt-card__topline">
              <span className="mono" dir="ltr">
                {t("STEP")} {activeStep?.index}
              </span>
              <span className={`status ${activeStep?.status === "PASS" ? "status--pass" : "status--boundary"}`}>
                <bdi dir="ltr">{activeStep?.status}</bdi>
              </span>
            </div>
            <h3>{activeStep ? t(activeStep.label) : ""}</h3>
            <dl>
              <div>
                <dt>{t("Receipt")}</dt>
                <dd className="mono" dir="ltr">
                  {receiptPreview}
                </dd>
              </div>
              <div>
                <dt>{t("Mode")}</dt>
                <dd>{t("deterministic / client-side")}</dd>
              </div>
            </dl>
            <pre dir="ltr" aria-label={t("Sanitized receipt payload")}>
              {JSON.stringify(activeStep?.payload, null, 2)}
            </pre>
            <div className="receipt-card__controls">
              <button className="button button--primary" type="button" onClick={play} disabled={isPlaying}>
                <Play size={17} aria-hidden="true" />{" "}
                {isPlaying ? t("Replaying…") : isComplete ? t("Replay again") : t("Replay receipt")}
              </button>
              <button
                className="button button--ghost"
                type="button"
                onClick={() => setActiveIndex((value) => Math.min(value + 1, replayData.steps.length - 1))}
                disabled={isComplete || isPlaying}
              >
                {t("Next step")} <ChevronRight className="directional-icon" size={17} aria-hidden="true" />
              </button>
              <button className="text-button" type="button" onClick={reset}>
                <RotateCcw size={15} aria-hidden="true" /> {t("Reset")}
              </button>
            </div>
          </div>
          <p className="replay-explorer__disclaimer">{t(replayData.disclaimer)}</p>
        </div>
      ) : (
        <div role="tabpanel" className="target-loop">
          <div className="target-loop__intro">
            <span className="status status--development">{t("IN DEVELOPMENT")}</span>
            <h3>{t("From source custody to partner-owned evaluation")}</h3>
            <p>
              {t(
                "These components describe the next research contour. They are intentionally separated from the recorded current receipt.",
              )}
            </p>
          </div>
          <ol>
            {replayData.target.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{t(item)}</strong>
                {index < replayData.target.length - 1 && (
                  <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
