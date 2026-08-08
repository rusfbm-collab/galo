import { ArrowUpRight } from "lucide-react";
import { publicContact } from "../../content/contact";
import { releaseEvidence } from "../../content/evidence";
import { siteMap } from "../../content/navigation";
import { siteContent } from "../../content/site";
import { useI18n } from "../../i18n/I18nContext";
import { Logo } from "./Logo";

export function Footer() {
  const { href, t } = useI18n();

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__identity">
          <Logo inverted />
          <p className="footer__statement">
            {t(
              "Research architecture for decisions that have to be defensible afterwards: what was permitted, what was chosen, and a record anyone can replay.",
            )}
          </p>
          <a className="email-link" href={`mailto:${publicContact.evaluationEmail}`}>
            <bdi dir="ltr">{publicContact.evaluationEmail}</bdi>
          </a>
          {siteContent.founder.linkedin && (
            <a href={siteContent.founder.linkedin} rel="noreferrer" target="_blank">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>

        {/* The full site map, because the header has room for nine links and the
            site has more pages than that. */}
        <nav className="footer__map" aria-label={t("Footer links")}>
          {siteMap.map((group) => (
            <div key={group.title}>
              <h2>{t(group.title)}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={href(link.href)}>{t(link.label)}</a>
                    <span>{t(link.hint)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="shell footer__bottom">
        <p>© {new Date().getFullYear()} GALO AI</p>
        <p>
          {t(
            "Working bounded prototype. Persistent learning, external operational gain, General AI, commercial traction, and programme selection are not claimed.",
          )}
        </p>
        <p className="footer__record">
          <span>{t("Release of record")}</span>
          <bdi dir="ltr">{releaseEvidence.release}</bdi>
          <span>{t("Affiliation")}</span>
          <bdi dir="ltr">NONE</bdi>
          <a href={href("/privacy")}>{t("Privacy")}</a>
        </p>
      </div>
    </footer>
  );
}
