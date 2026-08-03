import { ArrowLeft, LockKeyhole } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";

export function PrivacyPage() {
  return (
    <PageShell>
      <section className="simple-page">
        <div className="shell simple-page__inner">
          <a className="back-link back-link--dark" href="/">
            <ArrowLeft size={16} aria-hidden="true" /> Home
          </a>
          <LockKeyhole className="simple-page__icon" size={34} aria-hidden="true" />
          <p className="eyebrow">PRIVACY</p>
          <h1>A quiet, static website by default.</h1>
          <p>
            GALO does not intentionally collect personal data through forms, analytics, advertising trackers, or cookies
            on this website.
          </p>
          <p>
            The hosting provider may process technical request logs for security and service delivery. If you choose an
            external email, Telegram, or social link after one is published, you leave this website and the destination
            service’s terms and privacy practices apply.
          </p>
          <p>Please do not send sensitive information through public channels.</p>
          <div className="privacy-facts">
            <span>No analytics</span>
            <span>No cookies</span>
            <span>No forms</span>
            <span>No user accounts</span>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
