import { ArrowDown, RotateCcw } from "lucide-react";

const current = [
  "Committed finite universe",
  "Bound executable handle",
  "Budgeted one-shot action",
  "Execution receipts",
  "Work ledger",
];

const target = [
  "Authenticated observation",
  "World Atlas state",
  "Task decomposition",
  "Multi-level ProgramIR",
  "Local revision",
  "Persistent policy",
];

export function ArchitectureFlow() {
  return (
    <div className="architecture-split">
      <section className="architecture-lane architecture-lane--current" aria-labelledby="current-lane-title">
        <div className="architecture-lane__header">
          <span className="status status--pass">CURRENT VERIFIED SLICE</span>
          <h3 id="current-lane-title">Finite, typed, receipt-backed execution</h3>
        </div>
        <ol>
          {current.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
              {index < current.length - 1 && <ArrowDown size={16} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </section>
      <section className="architecture-lane architecture-lane--target" aria-labelledby="target-lane-title">
        <div className="architecture-lane__header">
          <span className="status status--development">TARGET ARCHITECTURE · IN DEVELOPMENT</span>
          <h3 id="target-lane-title">Explicit state, local revision, adaptive search</h3>
        </div>
        <ol>
          {target.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
              {index === 4 ? (
                <RotateCcw size={16} aria-label="Revision loop" />
              ) : (
                index < target.length - 1 && <ArrowDown size={16} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <p>
          A trained Atlas is not present. Observation-conditioned structural reasoning and persistent learning are not
          implemented in the current release.
        </p>
      </section>
    </div>
  );
}
