import { ArrowLeft, ArrowRight, BookMarked, Compass, Eye, Sparkles } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { TermTablePanel } from "../components/theory/TermTablePanel";
import { termChapterLabel, termDeepDiveByTerm, termLessonByTerm } from "../content/termDeepDives";
import { termAcademics, termBySlug, termPages, termSlug, termSlugs } from "../content/termPages";
import { conceptLessonRequiredFields } from "../content/theory";
import { useI18n } from "../i18n/I18nContext";
import { NotFoundPage } from "./NotFoundPage";

const fieldLabels: Record<(typeof conceptLessonRequiredFields)[number], string> = {
  analogy: "Intuition / analogy",
  exactDefinition: "Exact definition",
  workedExample: "Worked small-level example",
  whyTrue: "Why it is true",
  commonMistake: "Common mistake or boundary",
  tableCheck: "Table channel",
  formulaCheck: "Formula channel",
};

const mathematicalFragment =
  /[0-9_={}()[\]★⊕≠≡≤≥→↦⇒⇔∈∉∅∀∃∋∣∤⊆≅⋊ΣφχΔσμθδω]|^(?:PLUS|STAR|LEFT|RIGHT|BOUNDARY|PASS|FAIL|FORMAL|CURRENT|TARGET|Aut|End|Hom|Emb|Fix|Orb|Stab|Im|rank|ord|gcd|binom|exp|mod|id)(?:\W|$)/;

function isolateMath(text: string) {
  return text.split(/(\s+)/).map((part, index) =>
    part.trim().length > 0 && mathematicalFragment.test(part) ? (
      <bdi key={`${part}-${index}`} dir="ltr">
        {part}
      </bdi>
    ) : (
      part
    ),
  );
}

export function TermPage({ term }: { term: string | null }) {
  const { href, t } = useI18n();
  const lesson = term ? termLessonByTerm.get(term) : undefined;
  const page = term ? termPages[term] : undefined;
  const academic = term ? termAcademics[term] : undefined;

  if (!term || !lesson || !page || !academic) return <NotFoundPage />;

  const deepDive = termDeepDiveByTerm.get(term);

  // Fifty-nine terms in a fixed order: a reader working through them should not
  // have to go back to the glossary between every two.
  const slug = termSlug(term);
  const position = termSlugs.indexOf(slug);
  const previousTerm = position > 0 ? termBySlug.get(termSlugs[position - 1]!) : undefined;
  const nextTerm =
    position >= 0 && position < termSlugs.length - 1 ? termBySlug.get(termSlugs[position + 1]!) : undefined;

  return (
    <PageShell>
      <section className="page-hero page-hero--term">
        <div className="shell">
          <a className="back-link" href={href("/theory#glossary")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("All terms")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t(termChapterLabel[lesson.chapter])}</p>
          <h1>{isolateMath(t(term))}</h1>
          <p>{isolateMath(t(deepDive ? deepDive.inOneLine : lesson.analogy))}</p>
          <div className="term-hero__tags">
            <span>{t(academic.discipline)}</span>
            <span className={academic.standing === "Project term, not standard mathematics" ? "is-project" : undefined}>
              {t(academic.standing)}
            </span>
          </div>
        </div>
      </section>

      <section id="academic" className="section section--paper math-anchor-section">
        <div className="shell">
          <p className="eyebrow">{t("THE DEFINITION AS A MATHEMATICIAN WOULD STATE IT")}</p>
          <h2 className="term-page__heading">
            {t("What the word means in mathematics, before it means anything here.")}
          </h2>
          <div className="term-academic">
            <BookMarked size={22} aria-hidden="true" />
            <div>
              <code className="term-academic__formal" dir="ltr">
                {academic.formal}
              </code>
              <p>{isolateMath(t(academic.academic))}</p>
              <p className="term-academic__standing">
                <b>{t("Standing of the word")}:</b> {t(academic.standing)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="in-the-table" className="section section--white math-anchor-section">
        <div className="shell">
          <p className="eyebrow">{t("WHERE TO LOOK IN THE TABLE")}</p>
          <h2 className="term-page__heading">{isolateMath(t(page.reading))}</h2>
          <div className="term-tables">
            {page.panels.map((panel, index) => (
              <TermTablePanel key={`${panel.law}-${panel.level}-${index}`} panel={panel} />
            ))}
          </div>
          <div className="term-galo">
            <Compass size={22} aria-hidden="true" />
            <div>
              <h3>{t("What the word means inside GALO")}</h3>
              <p>{isolateMath(t(page.inGalo))}</p>
            </div>
          </div>
        </div>
      </section>

      {deepDive && (
        <section id="plain" className="section section--white math-anchor-section">
          <div className="shell">
            <p className="eyebrow">{t("BEFORE THE EXACT DEFINITION")}</p>
            <h2 className="term-page__heading">{t("The same thing, without the mathematics.")}</h2>
            <div className="term-plain">
              <article>
                <Sparkles size={19} aria-hidden="true" />
                <h3>{t("A picture you already know")}</h3>
                <p>{isolateMath(t(deepDive.picture))}</p>
              </article>
              <article>
                <Compass size={19} aria-hidden="true" />
                <h3>{t("Why GALO needs it")}</h3>
                <p>{isolateMath(t(deepDive.whyGalo))}</p>
              </article>
              <article>
                <Eye size={19} aria-hidden="true" />
                <h3>{t("Where you meet it on this site")}</h3>
                <p>{isolateMath(t(deepDive.whereYouMeetIt))}</p>
              </article>
            </div>
          </div>
        </section>
      )}

      <section id="exact" className="section section--paper math-anchor-section">
        <div className="shell">
          <p className="eyebrow">{t("COMPLETE DEFINITION AND TWO INDEPENDENT CHECKS")}</p>
          <h2 className="term-page__heading">{t("Seven questions, answered in the same order for every term.")}</h2>
          <dl className="term-lesson">
            {conceptLessonRequiredFields.map((field) => (
              <div key={field} className={`term-lesson__field term-lesson__field--${field}`}>
                <dt>{t(fieldLabels[field])}</dt>
                <dd>{isolateMath(t(lesson[field]))}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="related" className="section section--white math-anchor-section">
        <div className="shell">
          <p className="eyebrow">{t("KEEP GOING")}</p>
          <h2 className="term-page__heading">{t("Terms that only make sense next to this one.")}</h2>
          <div className="term-related">
            {(deepDive?.related ?? []).map((related) => (
              <a key={related} href={href(`/term/${termSlug(related)}`)}>
                {isolateMath(t(related))}
                <ArrowRight className="directional-icon" size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
          <nav className="term-steps" aria-label={t("Term navigation")}>
            {previousTerm ? (
              <a className="term-steps__link" href={href(`/term/${termSlug(previousTerm)}`)} rel="prev">
                <ArrowLeft className="directional-icon" size={16} aria-hidden="true" />
                <span>
                  <small>{t("Previous term")}</small>
                  <strong>{isolateMath(t(previousTerm))}</strong>
                </span>
              </a>
            ) : (
              <span />
            )}
            <span className="term-steps__position" dir="ltr">
              {`${position + 1} / ${termSlugs.length}`}
            </span>
            {nextTerm ? (
              <a className="term-steps__link is-next" href={href(`/term/${termSlug(nextTerm)}`)} rel="next">
                <span>
                  <small>{t("Next term")}</small>
                  <strong>{isolateMath(t(nextTerm))}</strong>
                </span>
                <ArrowRight className="directional-icon" size={16} aria-hidden="true" />
              </a>
            ) : (
              <span />
            )}
          </nav>

          <div className="theory-next__links comparison-next">
            <a href={href("/theory#glossary")}>
              <span>{t("The full list")}</span>
              <strong>{t("All 59 terms in one place")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/simple#jargon")}>
              <span>{t("If this is still too technical")}</span>
              <strong>{t("The words, translated")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/math#cayley-tables")}>
              <span>{t("The tables themselves")}</span>
              <strong>{t("Browse the whole tower")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
