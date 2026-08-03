import { ArrowLeft, FileSearch } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";

export function NotFoundPage() {
  return (
    <PageShell>
      <section className="simple-page simple-page--404">
        <div className="shell simple-page__inner">
          <FileSearch className="simple-page__icon" size={38} aria-hidden="true" />
          <p className="eyebrow">404 / BOUNDARY</p>
          <h1>Page not found.</h1>
          <p>The requested page is outside the current site boundary.</p>
          <div className="simple-page__actions">
            <a className="button button--primary" href="/">
              <ArrowLeft size={17} aria-hidden="true" /> Return home
            </a>
            <a className="button button--ghost" href="/evidence">
              View evidence
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
