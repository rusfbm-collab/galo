import { ArrowUpRight } from "lucide-react";
import { publicContact } from "../../content/contact";
import { siteContent } from "../../content/site";
import { useI18n } from "../../i18n/I18nContext";
import { Logo } from "./Logo";

export function Footer() {
  const { href, t } = useI18n();

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <Logo inverted />
          <p className="footer__statement">
            {t("Standalone research architecture for explicit world state and bounded, replayable execution.")}
          </p>
        </div>
        <div className="footer__links" aria-label={t("Footer links")}>
          <a href={href("/#architecture")}>{t("Architecture")}</a>
          <a href={href("/theory")}>{t("Theory · start here")}</a>
          <a href={href("/math")}>{t("Mathematics")}</a>
          <a href={href("/symmetry")}>{t("Symmetry")}</a>
          <a href={href("/evidence")}>{t("Evidence")}</a>
          <a href={href("/#evaluation")}>{t("Evaluation")}</a>
          <a href={href("/privacy")}>{t("Privacy")}</a>
          <a className="email-link" href={`mailto:${publicContact.evaluationEmail}`}>
            <bdi dir="ltr">{publicContact.evaluationEmail}</bdi>
          </a>
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
          {t(
            "Working bounded prototype. Persistent learning, external operational gain, General AI, commercial traction, and programme selection are not claimed.",
          )}
        </p>
      </div>
    </footer>
  );
}
