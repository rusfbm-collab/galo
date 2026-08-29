import type { ConceptLesson } from "../../content/theory";
import { TermFigure } from "./TermFigure";

function isolateBidiMathFragments(text: string) {
  const mathematicalFragment =
    /[0-9_={}()[\]★⊕≠≡≤≥→↦⇒⇔∈∉∅∀∃∋∣∤⊆≅⋊ΣφχΔσμθδω]|^(?:PLUS|STAR|LEFT|RIGHT|BOUNDARY|PASS|FAIL|FORMAL|CURRENT|TARGET|Aut|End|Hom|Emb|Fix|Orb|Stab|Im|rank|ord|gcd|binom|exp|mod|id)(?:\W|$)/;

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

export function ConceptLessonCard({
  lesson,
  index,
  open,
  direction,
  translate,
}: {
  lesson: ConceptLesson;
  index: number;
  open: boolean;
  direction: "ltr" | "rtl";
  translate: (source: string) => string;
}) {
  const bilingualLine = (source: string) => isolateBidiMathFragments(translate(source));

  return (
    <details className="concept-lesson-card" open={open}>
      <summary>
        <span dir="ltr">{String(index + 1).padStart(2, "0")}</span>
        <strong>{bilingualLine(lesson.term)}</strong>
      </summary>
      <div className="concept-lesson" dir={direction}>
        <div className="concept-lesson__field concept-lesson__field--analogy">
          <strong className="concept-lesson__label">{translate("Intuition / analogy")}</strong>
          <p>{bilingualLine(lesson.analogy)}</p>
        </div>
        <TermFigure term={lesson.term} />
        <div className="concept-lesson__field">
          <strong className="concept-lesson__label">{translate("Exact definition")}</strong>
          <p className="concept-lesson__formal">{bilingualLine(lesson.exactDefinition)}</p>
        </div>
        <div className="concept-lesson__field">
          <strong className="concept-lesson__label">{translate("Worked small-level example")}</strong>
          <p className="concept-lesson__formal">{bilingualLine(lesson.workedExample)}</p>
        </div>
        <div className="concept-lesson__field">
          <strong className="concept-lesson__label">{translate("Why it is true")}</strong>
          <p>{bilingualLine(lesson.whyTrue)}</p>
        </div>
        <div className="concept-lesson__field concept-lesson__field--mistake">
          <strong className="concept-lesson__label">{translate("Common mistake or boundary")}</strong>
          <p>{bilingualLine(lesson.commonMistake)}</p>
        </div>
        <div className="concept-lesson__field concept-lesson__field--check">
          <strong className="concept-lesson__label">{translate("Table channel")}</strong>
          <p className="concept-lesson__formal">{bilingualLine(lesson.tableCheck)}</p>
        </div>
        <div className="concept-lesson__field concept-lesson__field--check">
          <strong className="concept-lesson__label">{translate("Formula channel")}</strong>
          <p className="concept-lesson__formal">{bilingualLine(lesson.formulaCheck)}</p>
        </div>
      </div>
    </details>
  );
}
