import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, ChevronRight, Play, RotateCcw } from "lucide-react";
import replayData from "../../data/controlled-replay.json";

type ReplayTab = "current" | "target";

export function ReplayExplorer() {
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
      <div className="replay-explorer__tabs" role="tablist" aria-label="Receipt walkthrough modes">
        <button type="button" role="tab" aria-selected={tab === "current"} onClick={() => setTab("current")}>
          Recorded receipt
        </button>
        <button type="button" role="tab" aria-selected={tab === "target"} onClick={() => setTab("target")}>
          Target learning loop
        </button>
      </div>

      {tab === "current" ? (
        <div role="tabpanel" className="replay-explorer__panel">
          <div className="replay-explorer__rail" aria-label="Receipt steps">
            {replayData.steps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                className={`${index === activeIndex ? "is-active" : ""} ${index < activeIndex ? "is-complete" : ""}`}
                aria-label={`Show step ${index + 1}: ${step.label}`}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveIndex(index);
                }}
              >
                <span>{index < activeIndex ? <Check size={14} aria-hidden="true" /> : step.index}</span>
                <strong>{step.label}</strong>
              </button>
            ))}
          </div>

          <div className="receipt-card" aria-live="polite">
            <div className="receipt-card__topline">
              <span className="mono">STEP {activeStep?.index}</span>
              <span className={`status ${activeStep?.status === "PASS" ? "status--pass" : "status--boundary"}`}>
                {activeStep?.status}
              </span>
            </div>
            <h3>{activeStep?.label}</h3>
            <dl>
              <div>
                <dt>Receipt</dt>
                <dd className="mono">{receiptPreview}</dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd>deterministic / client-side</dd>
              </div>
            </dl>
            <pre aria-label="Sanitized receipt payload">{JSON.stringify(activeStep?.payload, null, 2)}</pre>
            <div className="receipt-card__controls">
              <button className="button button--primary" type="button" onClick={play} disabled={isPlaying}>
                <Play size={17} aria-hidden="true" />{" "}
                {isPlaying ? "Replaying…" : isComplete ? "Replay again" : "Replay receipt"}
              </button>
              <button
                className="button button--ghost"
                type="button"
                onClick={() => setActiveIndex((value) => Math.min(value + 1, replayData.steps.length - 1))}
                disabled={isComplete || isPlaying}
              >
                Next step <ChevronRight size={17} aria-hidden="true" />
              </button>
              <button className="text-button" type="button" onClick={reset}>
                <RotateCcw size={15} aria-hidden="true" /> Reset
              </button>
            </div>
          </div>
          <p className="replay-explorer__disclaimer">{replayData.disclaimer}</p>
        </div>
      ) : (
        <div role="tabpanel" className="target-loop">
          <div className="target-loop__intro">
            <span className="status status--development">IN DEVELOPMENT</span>
            <h3>From source custody to partner-owned evaluation</h3>
            <p>
              These components describe the next research contour. They are intentionally separated from the recorded
              current receipt.
            </p>
          </div>
          <ol>
            {replayData.target.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {index < replayData.target.length - 1 && <ArrowRight size={16} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
