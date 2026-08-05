import { termSlug } from "../../content/termPages";
import { useI18n } from "../../i18n/I18nContext";

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

/**
 * A term chip is a link to that term's own page. It used to open a dialog, which
 * made the explanation unshareable, invisible to search, and unavailable without
 * JavaScript — and the explanation is the part people actually needed.
 */
export function TermButton({ term, className }: { term: string; className?: string }) {
  const { href, t } = useI18n();

  return (
    <a className={className ?? "term-chip"} href={href(`/term/${termSlug(term)}`)} title={t("Detailed explanation")}>
      {isolateMath(t(term))}
    </a>
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
      <small className="term-chips__hint">{t("Every term opens a page with a worked table.")}</small>
    </div>
  );
}
