import { ArrowLeft, ArrowRight, CircleAlert, CircleCheck, CircleEqual, Orbit, ShieldAlert } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { UnitGroupFigure } from "../components/diagrams/UnitGroupFigure";
import { ConceptLessonCard } from "../components/math/ConceptLessonCard";
import { TermButton } from "../components/theory/TermExplainer";
import { SymmetryExplorer } from "../components/math/SymmetryExplorer";
import { BurnsideCheckFigure } from "../components/diagrams/BurnsideCheckFigure";
import { ElementOrderFigure } from "../components/diagrams/ElementOrderFigure";
import { SubgroupLatticeFigure } from "../components/diagrams/SubgroupLatticeFigure";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  enumerateStarHomomorphisms,
  galoLevels,
  greatestCommonDivisor,
  inversionOrbits,
  sameLevelAutomorphismCount,
  structuralOrbitCount,
  structuralOrbitCountByBurnside,
  symmetryLevelProfiles,
} from "../content/mathematics";
import { conceptLessons } from "../content/theory";
import { symmetryBasics, symmetryLimits, symmetryWorkedChecks } from "../content/symmetryOrientation";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#what-is-symmetry", label: "What a symmetry is" },
  { href: "#two-families", label: "What is being renamed" },
  { href: "#vocabulary", label: "Five words" },
  { href: "#symmetry-notebook", label: "Every term, in full" },
  { href: "#orbit-lab", label: "Try it yourself" },
  { href: "#level-ledger", label: "Level by level" },
  { href: "#affine-boundary", label: "The renaming that almost works" },
  { href: "#morphism-matrix", label: "Between levels" },
  { href: "#interpretation", label: "What this does not imply" },
] as const;

const symmetryLessons = conceptLessons.filter(({ chapter }) => chapter === "symmetry");

export function SymmetryPage() {
  const { direction, href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--symmetry">
        <div className="shell">
          <a className="back-link" href={href("/math")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Mathematics")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("SYMMETRY CHAPTER")}</p>
          <h1>{t("Which renamings leave every rule exactly where it was.")}</h1>
          <p>
            {t(
              "Rename all the positions at once, redo the tables, and see whether anything moved. The renamings that change nothing are the symmetries, and this chapter finds all of them, counts the shapes they group things into, and marks where that grouping stops being allowed to mean anything.",
            )}
          </p>
          <div className="math-hero__status">
            <span>{t("Starts with no notation")}</span>
            <span>{t("Formal statements from the second section")}</span>
            <strong>{t("SHAPE, NOT MEANING")}</strong>
          </div>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Symmetry chapter navigation" items={contents} />

      <section id="what-is-symmetry" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("BEFORE ANY NOTATION")}
            title={t("A symmetry is a renaming that leaves every rule exactly where it was.")}
            text={t(
              "The sections after this one are written in the notation these things are normally written in, which is right for somebody checking the work and no use to anybody else. So the idea comes first, in words, with one renaming that works and one that does not. It is the same idea the rest of the chapter uses; only the vocabulary changes.",
            )}
          />

          <ol className="orientation-takeaways symmetry-basics">
            {symmetryBasics.map((step) => (
              <li key={step.number}>
                <span className="orientation-takeaways__number" dir="ltr">
                  {step.number}
                </span>
                <div>
                  <p className="orientation-takeaways__claim">{t(step.title)}</p>
                  <p>{t(step.plain)}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="orientation-block">
            <div className="orientation-block__head">
              <span>{t("ONE THAT WORKS, ONE THAT DOES NOT")}</span>
              <h3>{t("Both are worked on a real cell rather than described.")}</h3>
              <p>
                {t(
                  "A renaming either survives the comparison or it does not, and the second example fails on a specific cell you can point at. That is the whole method: no argument settles it, and no amount of it being nearly true helps.",
                )}
              </p>
            </div>
            <div className="symmetry-checks">
              {symmetryWorkedChecks.map((check) => (
                <article key={check.rule} className={check.isSymmetry ? "is-symmetry" : "is-not-symmetry"}>
                  <span className="symmetry-checks__verdict">
                    {check.isSymmetry ? (
                      <CircleCheck size={16} aria-hidden="true" />
                    ) : (
                      <CircleAlert size={16} aria-hidden="true" />
                    )}
                    {check.isSymmetry ? t("A symmetry") : t("Not a symmetry")}
                  </span>
                  <p className="symmetry-checks__rule">{t(check.rule)}</p>
                  <p>{t(check.before)}</p>
                  <p>{t(check.after)}</p>
                  <p className="symmetry-checks__result">{t(check.verdict)}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="orientation-block">
            <div className="orientation-block__head">
              <span>{t("WHAT IT NEVER MEANS")}</span>
              <h3>{t("Three readings this chapter does not support.")}</h3>
              <p>
                {t(
                  "Symmetry is a word that invites more than it says, and the three sentences below are the ones a reader is most likely to leave with. Each is stated in the strongest form somebody might repeat it, and then corrected.",
                )}
              </p>
            </div>
            <div className="theory-misconceptions">
              {symmetryLimits.map((limit) => (
                <article key={limit.claim}>
                  <div>
                    <CircleAlert size={18} aria-hidden="true" />
                    <strong>{t(limit.claim)}</strong>
                  </div>
                  <p>
                    <CircleCheck size={17} aria-hidden="true" /> {t(limit.correction)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="two-families" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT IS BEING RENAMED")}
            title={t("The same positions, studied under one rule, the other rule, and both at once.")}
            text={t(
              "Which renamings survive depends on how much you are asking them to preserve. Ask only that the first rule holds and more of them get through; ask that both rules and the starting point hold and fewer do. The three rows below are those three questions, and the answer turns out to be the same set of renamings in all three cases.",
            )}
          />
          <div
            className="two-family-table-wrap"
            role="region"
            aria-label={t("The same carrier supports different symmetry categories.")}
            tabIndex={0}
          >
            <table className="two-family-table">
              <caption className="sr-only">{t("The same carrier supports different symmetry categories.")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Object")}</th>
                  <th scope="col">{t("Preserved data")}</th>
                  <th scope="col">{t("Automorphisms")}</th>
                  <th scope="col">{t("Additional symmetry layer")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" dir="ltr">
                    G_n=(Q_n,PLUS,P0)
                  </th>
                  <td>{t("cyclic addition and P0")}</td>
                  <td dir="ltr">Aut(G_n) ≅ U(n)</td>
                  <td dir="ltr">Hol(C_n)=C_n⋊U(n)</td>
                </tr>
                <tr>
                  <th scope="row" dir="ltr">
                    S_n=(Q_n,STAR,P0)
                  </th>
                  <td>{t("STAR and the named point P0")}</td>
                  <td dir="ltr">Aut(S_n) ≅ U(n)</td>
                  <td>{t("No affine STAR layer")}</td>
                </tr>
                <tr>
                  <th scope="row" dir="ltr">
                    A_n=(Q_n,PLUS,STAR,P0)
                  </th>
                  <td>{t("both operations and P0")}</td>
                  <td dir="ltr">Aut(A_n) ≅ U(n)</td>
                  <td>{t("Same unit maps; stronger preservation contract")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="aggregate-proof-grid">
            <article>
              <span>{t("Why only some renamings work")}</span>
              <code dir="ltr">σ(P1)=P_u · σ bijective ⇔ gcd(u,n)=1</code>
              <p>
                {t(
                  "A PLUS automorphism is determined by the image of its generator P1; exactly the unit residues generate the whole cyclic carrier.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Why the second rule allows no more")}</span>
              <code dir="ltr">x≠0 ⇒ x★y=x+y</code>
              <p>
                {t(
                  "A STAR automorphism fixes the unique left zero P0 and preserves addition through the nonzero rows, so it is the same unit multiplication map.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Why these are matched rather than equal")}</span>
              <code dir="ltr">U(n) → Aut(A_n), u ↦ σ_u</code>
              <p>
                {t(
                  "The groups are canonically isomorphic under this map; writing them as literally equal would conflate residues with permutations.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="vocabulary" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("FIVE WORDS THE REST OF THE CHAPTER USES")}
            title={t("Each of these means one specific thing, and they are easy to run together.")}
            text={t(
              "The plain sentence is the definition; the line of notation under it is the same sentence written the way a reviewer would expect to see it. Nothing below needs the notation to be followed.",
            )}
          />
          <div className="symmetry-vocabulary-grid">
            <article>
              <CircleEqual size={22} aria-hidden="true" />
              <h3>{t("Automorphism")}</h3>
              <p>
                {t(
                  "A bijection from a structure to itself that preserves every operation and named constant in the declared signature.",
                )}
              </p>
              <code dir="ltr">σ_u(P_i)=P_((ui) mod n), u∈U(n)</code>
            </article>
            <article>
              <Orbit size={22} aria-hidden="true" />
              <h3>{t("Group action")}</h3>
              <p>
                {t(
                  "A rule assigning each group element a permutation, with the identity acting trivially and products acting by composition.",
                )}
              </p>
              <code dir="ltr">u·(P_s,P_a)=(P_(us),P_(ua))</code>
            </article>
            <article>
              <h3>{t("Orbit")}</h3>
              <p>
                {t(
                  "All the points one point can reach under the whole acting group. An orbit is a subset — neither a new state nor a probability class.",
                )}
              </p>
              <code dir="ltr">Orb(x)={`{g·x | g∈G}`}</code>
            </article>
            <article>
              <h3>{t("Stabilizer")}</h3>
              <p>
                {t(
                  "The subgroup of transformations that leave one selected point fixed. Orbit–stabilizer relates local symmetry to orbit size.",
                )}
              </p>
              <code dir="ltr">|G|=|Orb(x)|·|Stab(x)|</code>
            </article>
            <article>
              <h3>{t("Burnside's lemma")}</h3>
              <p>
                {t(
                  "The number of orbits equals the average number of points fixed by a group element. Here it independently checks pair-orbit enumeration.",
                )}
              </p>
              <code dir="ltr">|X/G|=(1/|G|)Σ_g |Fix(g)|</code>
            </article>
          </div>
        </div>
      </section>

      <section id="symmetry-notebook" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("EVERY TERM, IN FULL")}
            title={t("If a word above lost you, its own page picks it up from the beginning.")}
            text={t(
              "Each card starts with a picture, gives the definition, works one finite example by hand, proves the claim, and marks what the claim does not extend to. They are here for the reader who wants one term properly rather than the chapter quickly.",
            )}
          />
          <div className="term-index">
            <p className="eyebrow">{t("COMPLETE TERM INDEX")}</p>
            <h3>{t("Open any of the 59 terms and read it in full.")}</h3>
            <div className="term-index__row">
              {symmetryLessons.map((lesson) => (
                <TermButton key={lesson.term} term={lesson.term} />
              ))}
            </div>
          </div>
          <div className="theory-glossary">
            {symmetryLessons.map((lesson, index) => (
              <ConceptLessonCard
                key={lesson.term}
                lesson={lesson}
                index={index}
                open={index < 2}
                direction={direction}
                translate={t}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="orbit-lab" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("TRY IT")}
            title={t("Pick a level and a renaming, and watch which positions it groups together.")}
            text={t(
              "Choosing a renaming shows the cycle it moves the positions around in, the groups it collapses them into, and which positions it leaves alone. The count underneath is then checked a second way, by a standard averaging argument, and the two have to agree.",
            )}
          />
          <SymmetryExplorer />
          <BurnsideCheckFigure />
        </div>
      </section>

      <section id="level-ledger" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("LEVEL BY LEVEL")}
            title={t("Each level is counted on its own, and the totals are sums rather than a single larger object.")}
            text={t(
              "Every count below is taken inside one level. Nothing groups across levels, and the totals at the bottom are additions of seven separate results — there is no single symmetry group of the whole tower, and this is the section that says so.",
            )}
          />
          <UnitGroupFigure />
          <ElementOrderFigure />
          <SubgroupLatticeFigure />
          <div
            className="symmetry-level-table-wrap"
            dir="ltr"
            role="region"
            aria-label={t("Local groups first; aggregate sums second.")}
            tabIndex={0}
          >
            <table className="symmetry-level-table">
              <caption className="sr-only">{t("Local groups first; aggregate sums second.")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("level")}</th>
                  <th scope="col">{t("renamings that work")}</th>
                  <th scope="col">{t("how many")}</th>
                  <th scope="col">{t("shapes of one position")}</th>
                  <th scope="col">{t("shapes of a pair")}</th>
                  <th scope="col">{t("shapes once the role is kept")}</th>
                </tr>
              </thead>
              <tbody>
                {symmetryLevelProfiles.map((profile) => (
                  <tr key={profile.level}>
                    <th scope="row">L{profile.level}</th>
                    <td dir="ltr">{`{${profile.units.join(",")}}`}</td>
                    <td>{profile.automorphismOrder}</td>
                    <td>{profile.carrierOrbitCount}</td>
                    <td>{profile.pairOrbitCount}</td>
                    <td>{4 * profile.pairOrbitCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="aggregate-proof-grid">
            <article>
              <span>{t("Adding the seven levels up")}</span>
              <code dir="ltr">Σ_(n=1)^7 |Aut(A_n)| = 1+1+2+2+4+2+6 = {sameLevelAutomorphismCount}</code>
              <p>
                {t(
                  "Eighteen is seven separate answers added together. Nothing in the tower has eighteen symmetries; seven things have one, one, two, two, four, two and six of them.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Why the total is multiplied by four")}</span>
              <code dir="ltr">4Σ O_n = 4(1+4+5+10+7+20+9) = {structuralOrbitCount}</code>
              <p>
                {t(
                  "The four family tags stay separate. Direct traversal and Burnside's lemma must return the same total.",
                )}
              </p>
            </article>
            <article>
              <span>{t("The same total, counted a second way")}</span>
              <code dir="ltr">O_n=(1/φ(n))Σ_(u∈U(n)) gcd(u−1,n)²</code>
              <code dir="ltr">
                enumeration={structuralOrbitCount} · Burnside={structuralOrbitCountByBurnside}
              </code>
              <p>
                {t("Equality is a consistency witness for the finite action; it does not authorize semantic merging.")}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="affine-boundary" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE RENAMING THAT ALMOST WORKS")}
            title={t("Shifting every position by a fixed amount preserves the first rule and breaks the second.")}
            text={t(
              "This is the near miss worth understanding, because it is the one people expect to work. A shift keeps addition intact — that is why it looks like a symmetry — but it moves the starting position, and the second rule has a clause that applies only to whatever is sitting there. One clause is enough to fail the whole thing.",
            )}
          />
          <div className="affine-boundary-grid">
            <article>
              <span>{t("A renaming that keeps the starting point")}</span>
              <code dir="ltr">σ_u(x)=ux · σ_u(0)=0</code>
              <p>{t("It preserves PLUS, STAR, and P0 for every unit u.")}</p>
            </article>
            <article>
              <span>{t("A shift, which moves it")}</span>
              <code dir="ltr">F_(u,b)(x)=ux+b</code>
              <p>{t("For b≠0 it does not fix P0, so it is not an automorphism of the pointed cyclic group.")}</p>
            </article>
            <article>
              <span>{t("The exact cell where the shift fails")}</span>
              <code dir="ltr">T_b(0★0)=b ≠ 2b=T_b(0)★T_b(0), b≠0</code>
              <p>{t("The inequality holds for every nonzero residue b, and not just in a generic case.")}</p>
            </article>
            <article>
              <span>{t("Groups that look like mirrors and are not")}</span>
              <code dir="ltr">
                δ ↦ −δ · L7:{" "}
                {inversionOrbits(7)
                  .map((orbit) => `{${orbit.join(",")}}`)
                  .join(" ")}
              </code>
              <p>
                {t(
                  "These are orbits of the involution on differences; they do not encode time, causality, or spatial reflection.",
                )}
              </p>
            </article>
          </div>
          <p className="section-followup">
            <ShieldAlert size={16} aria-hidden="true" />{" "}
            {t(
              "Three further boundary cases — how the shapes behave under the square residues, where the level-six decomposition stops applying, and what a phase label does and does not mean — are stated in the formal kernel chapter rather than here, because each needs vocabulary this page has deliberately not introduced.",
            )}{" "}
            <a href={href("/math#academic-analysis")}>{t("Read them in the formal chapter")}</a>
          </p>
        </div>
      </section>

      <section id="morphism-matrix" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("BETWEEN LEVELS")}
            title={t("A level fits inside a larger one only when it divides it.")}
            text={t(
              "The grid asks, for every pair of levels, how many rule-preserving ways there are to carry the smaller into the larger. Under the first rule alone there are always some. Under both rules together there are almost none — and the pattern is exactly divisibility, which is why level three sits inside level six and nothing sits inside level five. Each cell reads first rule / both rules.",
            )}
          />
          <div
            className="hom-matrix-wrap"
            dir="ltr"
            role="region"
            aria-label={t("PLUS and STAR have different homomorphism counts.")}
            tabIndex={0}
          >
            <table className="hom-matrix">
              <caption className="sr-only">{t("PLUS and STAR have different homomorphism counts.")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("source / target")}</th>
                  {galoLevels.map((target) => (
                    <th scope="col" key={target}>
                      L{target}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {galoLevels.map((source) => (
                  <tr key={source}>
                    <th scope="row">L{source}</th>
                    {galoLevels.map((target) => (
                      <td key={target}>
                        {greatestCommonDivisor(source, target)} / {enumerateStarHomomorphisms(source, target).length}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="morphism-definition-grid">
            <article>
              <h3>{t("Homomorphism")}</h3>
              <p>
                {t(
                  "A map preserving the declared operations and constant. It need not be injective; the zero map is the decisive example.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Embedding")}</h3>
              <p>
                {t(
                  "An injective homomorphism. For n≥2, a nonzero A_n→A_m homomorphism is automatically an embedding and exists exactly when n divides m; the L1 zero map is exceptionally injective.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Operational transfer")}</h3>
              <p>
                {t(
                  "A runtime use that may require provenance, alignment, and loss checks beyond algebraic preservation. A homomorphism alone is not an authorization receipt.",
                )}
              </p>
            </article>
            <article>
              <h3>{t("Complete L1–L7 count")}</h3>
              <code dir="ltr">
                70 Hom(A_n,A_m) · 28 <bdi>{t("embeddings")}</bdi>
              </code>
              <p>
                {t(
                  "The compatibility replay chooses one canonical embedding on 16 divisible level pairs. Its legacy morphism module is excluded from the current V4 runtime wheel.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="interpretation" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHAT THIS DOES NOT IMPLY")}
            title={t("A statement about a finite table is not a statement about the world.")}
            text={t(
              "The left column is what the chapter establishes and the right is what it is repeatedly taken to establish and does not. Nothing in the right column is disproved here — it is simply not what these calculations are about.",
            )}
          />
          <div className="math-boundary-grid">
            <article className="math-boundary-card math-boundary-card--established">
              <h3>{t("Established here")}</h3>
              <ul>
                <li>{t("Finite cyclic groups, pointed magmas, automorphism groups, and explicit group actions.")}</li>
                <li>
                  {t("Exact local orbit, stabilizer, Burnside, congruence, and homomorphism calculations for L1–L7.")}
                </li>
                <li>{t("PLUS affine symmetries and their failure to preserve STAR.")}</li>
              </ul>
            </article>
            <article className="math-boundary-card math-boundary-card--open">
              <ShieldAlert size={20} aria-hidden="true" />
              <h3>{t("Not implied")}</h3>
              <ul>
                <li>{t("A root-of-unity phase index is not automatically a Galois group of a field extension.")}</li>
                <li>
                  {t(
                    "CRT decomposes the PLUS reduct; STAR's global zero test is not coordinatewise under that decomposition.",
                  )}
                </li>
                <li>
                  {t("Orbit equivalence does not merge provenance, semantics, authority, or real-world verdicts.")}
                </li>
              </ul>
            </article>
          </div>
          <a className="button button--light" href={href("/math#mathematical-boundary")}>
            {t("Return to the formal kernel chapter")}{" "}
            <ArrowRight className="directional-icon" size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
