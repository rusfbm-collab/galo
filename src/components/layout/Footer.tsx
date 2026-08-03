import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../../content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <Logo inverted />
          <p className="footer__statement">
            Standalone research architecture for explicit world state and bounded, replayable execution.
          </p>
        </div>
        <div className="footer__links" aria-label="Footer links">
          <a href="/#architecture">Architecture</a>
          <a href="/evidence">Evidence</a>
          <a href="/#evaluation">Evaluation</a>
          <a href="/privacy">Privacy</a>
          {siteContent.founder.linkedin && (
            <a href={siteContent.founder.linkedin} rel="noreferrer" target="_blank">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      <div className="shell footer__bottom">
        <p>© {new Date().getFullYear()} GALO AI</p>
        <p>
          Working bounded prototype. Persistent learning, external operational gain, General AI, commercial traction,
          and programme selection are not claimed.
        </p>
      </div>
    </footer>
  );
}
