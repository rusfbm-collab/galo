import { X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { termChapterLabel, termDeepDiveByTerm, termLessonByTerm } from "../../content/termDeepDives";
import { conceptLessonRequiredFields } from "../../content/theory";
import { useI18n } from "../../i18n/I18nContext";

const TermExplainerContext = createContext<{ openTerm: (term: string) => void } | null>(null);

function useTermExplainer() {
  const value = useContext(TermExplainerContext);
  if (!value) throw new Error("useTermExplainer must be used within TermExplainerProvider");
  return value;
}

const lessonFieldLabels: Record<(typeof conceptLessonRequiredFields)[number], string> = {
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

function TermDialog({
  term,
  onClose,
  onNavigate,
}: {
  term: string;
  onClose: () => void;
  onNavigate: (next: string) => void;
}) {
  const { direction, t } = useI18n();
  const panelRef = useRef<HTMLDivElement>(null);
  const lesson = termLessonByTerm.get(term);
  const deepDive = termDeepDiveByTerm.get(term);

  useEffect(() => {
    panelRef.current?.focus();
  }, [term]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!lesson) return null;

  return (
    <div className="term-modal" role="presentation" onClick={onClose}>
      <div
        className="term-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${t("Detailed explanation")}: ${t(term)}`}
        dir={direction}
        tabIndex={-1}
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="term-modal__header">
          <div>
            <p className="eyebrow">{t(termChapterLabel[lesson.chapter])}</p>
            <h2>{isolateMath(t(term))}</h2>
          </div>
          <button type="button" className="term-modal__close" onClick={onClose} aria-label={t("Close the explanation")}>
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <div className="term-modal__body">
          {deepDive && (
            <div className="term-modal__plain">
              <section>
                <h3>{t("In one line")}</h3>
                <p className="term-modal__lead">{isolateMath(t(deepDive.inOneLine))}</p>
              </section>
              <section>
                <h3>{t("A picture you already know")}</h3>
                <p>{isolateMath(t(deepDive.picture))}</p>
              </section>
              <section>
                <h3>{t("Why GALO needs it")}</h3>
                <p>{isolateMath(t(deepDive.whyGalo))}</p>
              </section>
              <section>
                <h3>{t("Where you meet it on this site")}</h3>
                <p>{isolateMath(t(deepDive.whereYouMeetIt))}</p>
              </section>
            </div>
          )}

          <div className="term-modal__formal">
            <p className="eyebrow">{t("Complete definition and two independent checks")}</p>
            <dl>
              {conceptLessonRequiredFields.map((field) => (
                <div key={field} className={`term-modal__field term-modal__field--${field}`}>
                  <dt>{t(lessonFieldLabels[field])}</dt>
                  <dd>{isolateMath(t(lesson[field]))}</dd>
                </div>
              ))}
            </dl>
          </div>

          {deepDive && deepDive.related.length > 0 && (
            <div className="term-modal__related">
              <p className="eyebrow">{t("Related terms")}</p>
              <div>
                {deepDive.related.map((related) => (
                  <button key={related} type="button" onClick={() => onNavigate(related)}>
                    {isolateMath(t(related))}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TermExplainerProvider({ children }: { children: ReactNode }) {
  const [term, setTerm] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openTerm = useCallback((next: string) => {
    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setTerm(next);
  }, []);

  const close = useCallback(() => {
    setTerm(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, []);

  const value = useMemo(() => ({ openTerm }), [openTerm]);

  useEffect(() => {
    if (!term) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [term]);

  return (
    <TermExplainerContext.Provider value={value}>
      {children}
      {term && <TermDialog term={term} onClose={close} onNavigate={setTerm} />}
    </TermExplainerContext.Provider>
  );
}

export function TermButton({ term, className }: { term: string; className?: string }) {
  const { openTerm } = useTermExplainer();
  const { t } = useI18n();

  return (
    <button
      type="button"
      className={className ?? "term-chip"}
      onClick={() => openTerm(term)}
      title={t("Detailed explanation")}
    >
      {isolateMath(t(term))}
    </button>
  );
}

export function TermChips({ terms, label }: { terms: readonly string[]; label?: string }) {
  const { t } = useI18n();

  return (
    <div className="term-chips">
      <span className="term-chips__label">{t(label ?? "Key terms in this section")}</span>
      <div className="term-chips__row">
        {terms.map((term) => (
          <TermButton key={term} term={term} />
        ))}
      </div>
      <small className="term-chips__hint">{t("Every term opens a detailed explanation.")}</small>
    </div>
  );
}
