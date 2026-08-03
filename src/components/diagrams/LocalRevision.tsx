import { Check, RefreshCw } from "lucide-react";

export function LocalRevision() {
  return (
    <figure className="local-revision" aria-labelledby="local-revision-title">
      <figcaption id="local-revision-title">
        <span>ARCHITECTURE PRINCIPLE</span>
        Local revision, not global reset
      </figcaption>
      <div className="local-revision__cards">
        <div className="hypothesis-card hypothesis-card--stable">
          <Check size={16} aria-hidden="true" />
          <span>Map A</span>
          <strong>unchanged</strong>
        </div>
        <div className="hypothesis-card hypothesis-card--revised">
          <RefreshCw size={16} aria-hidden="true" />
          <span>Map B</span>
          <strong>counterexample applied</strong>
        </div>
        <div className="hypothesis-card hypothesis-card--stable">
          <Check size={16} aria-hidden="true" />
          <span>Map C</span>
          <strong>unchanged</strong>
        </div>
      </div>
      <p>Designed behaviour. External validation remains a target milestone.</p>
    </figure>
  );
}
