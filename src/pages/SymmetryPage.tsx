import { ArrowLeft, ArrowRight, CircleEqual, Orbit, ShieldAlert } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { UnitGroupFigure } from "../components/diagrams/UnitGroupFigure";
import { SchoolMathLessonCard } from "../components/math/SchoolMathLessonCard";
import { TermButton } from "../components/theory/TermExplainer";
import { SymmetryExplorer } from "../components/math/SymmetryExplorer";
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
import { schoolMathLessons } from "../content/theory";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#two-families", label: "Two indexed families" },
  { href: "#vocabulary", label: "Symmetry vocabulary" },
  { href: "#school-symmetry-notebook", label: "School symmetry notebook" },
  { href: "#orbit-lab", label: "Orbit and stabilizer lab" },
  { href: "#level-ledger", label: "L1–L7 symmetry ledger" },
  { href: "#affine-boundary", label: "Affine and STAR boundary" },
  { href: "#morphism-matrix", label: "Morphism comparison" },
  { href: "#interpretation", label: "Interpretation boundaries" },
] as const;

const symmetrySchoolLessons = schoolMathLessons.filter(({ chapter }) => chapter === "symmetry");

export function SymmetryPage() {
  const { direction, href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--symmetry">
        <div className="shell">
          <a className="back-link" href={href("/math")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Mathematics")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("ACADEMIC SYMMETRY CHAPTER")}</p>
          <h1>{t("Symmetries of the PLUS and STAR families.")}</h1>
          <p>
            {t(
              "This chapter distinguishes group automorphisms, affine torsor symmetries, STAR automorphisms, orbits, stabilizers, and cross-level homomorphisms. Similar formulas are not treated as the same structure.",
            )}
          </p>
          <div className="math-hero__status">
            <span dir="ltr">Aut(G_n) ≅ U(n)</span>
            <span dir="ltr">Aut(A_n) ≅ U(n)</span>
            <strong>{t("FIBREWISE, NOT GLOBAL")}</strong>
          </div>
        </div>
      </section>

      <nav className="math-contents" aria-label={t("Symmetry chapter navigation")}>
        <div className="shell">
          <span>{t("On this page")}</span>
          <div>
            {contents.map((item, index) => (
              <a key={item.href} href={item.href}>
                <bdi dir="ltr">{String(index + 1).padStart(2, "0")}</bdi> {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="two-families" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("OBJECT TYPES BEFORE SYMMETRIES")}
            title={t("The same carrier supports different symmetry categories.")}
            text={t(
              "The project calls L1–L7 two towers. Academically they are indexed families until bonding maps are declared; divisibility supplies only some nonzero embeddings.",
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
              <span>{t("Cyclic-group proof")}</span>
              <code dir="ltr">σ(P1)=P_u · σ bijective ⇔ gcd(u,n)=1</code>
              <p>
                {t(
                  "A PLUS automorphism is determined by the image of its generator P1; exactly the unit residues generate the whole cyclic carrier.",
                )}
              </p>
            </article>
            <article>
              <span>{t("STAR rigidity proof")}</span>
              <code dir="ltr">x≠0 ⇒ x★y=x+y</code>
              <p>
                {t(
                  "A STAR automorphism fixes the unique left zero P0 and preserves addition through the nonzero rows, so it is the same unit multiplication map.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Canonical group isomorphism")}</span>
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
            eyebrow={t("STANDARD GROUP-ACTION VOCABULARY")}
            title={t("Automorphism, action, orbit, stabilizer, and Burnside are different notions.")}
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
                  "All points reachable from one point under the whole acting group. An orbit is a subset, not a new state or a probability class.",
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

      <section id="school-symmetry-notebook" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("SCHOOL SYMMETRY NOTEBOOK")}
            title={t("Treat a symmetry as a rule-preserving relabelling before counting anything.")}
            text={t(
              "Each card begins with a concrete dial picture, then states the academic definition, works a finite example, proves the claim, marks the interpretation boundary, and reconciles a lookup ledger with a formula.",
            )}
          />
          <div className="term-index">
            <p className="eyebrow">{t("COMPLETE TERM INDEX")}</p>
            <h3>{t("Open any of the 59 terms and read it in full.")}</h3>
            <div className="term-index__row">
              {symmetrySchoolLessons.map((lesson) => (
                <TermButton key={lesson.term} term={lesson.term} />
              ))}
            </div>
          </div>
          <div className="theory-glossary">
            {symmetrySchoolLessons.map((lesson, index) => (
              <SchoolMathLessonCard
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
            eyebrow={t("INTERACTIVE UNIT-ACTION LAB")}
            title={t("Inspect cycles, orbits, stabilizers, and the Burnside ledger.")}
            text={t("Every result is recomputed from multiplication by units modulo n in this browser.")}
          />
          <SymmetryExplorer />
        </div>
      </section>

      <section id="level-ledger" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("L1–L7 SYMMETRY LEDGER")}
            title={t("Local groups first; aggregate sums second.")}
            text={t(
              "Pair orbits are computed inside each fixed level. Multiplying by four keeps the action-family tag fixed; no orbit crosses a level or family boundary.",
            )}
          />
          <UnitGroupFigure />
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
                  <th scope="col">U(n)</th>
                  <th scope="col">|Aut|</th>
                  <th scope="col">|Hol|</th>
                  <th scope="col">{t("carrier orbits")}</th>
                  <th scope="col">{t("pair orbits")}</th>
                  <th scope="col">{t("typed orbits")}</th>
                  <th scope="col">|End★|</th>
                </tr>
              </thead>
              <tbody>
                {symmetryLevelProfiles.map((profile) => (
                  <tr key={profile.level}>
                    <th scope="row">L{profile.level}</th>
                    <td>{`{${profile.units.join(",")}}`}</td>
                    <td>{profile.automorphismOrder}</td>
                    <td>{profile.holomorphOrder}</td>
                    <td>{profile.carrierOrbitCount}</td>
                    <td>{profile.pairOrbitCount}</td>
                    <td>{4 * profile.pairOrbitCount}</td>
                    <td>{profile.starEndomorphismCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="aggregate-proof-grid">
            <article>
              <span>{t("Aggregate automorphism-map count")}</span>
              <code dir="ltr">Σ_(n=1)^7 |Aut(A_n)| = 1+1+2+2+4+2+6 = {sameLevelAutomorphismCount}</code>
              <p>{t("Eighteen is a sum over seven local groups, not the order of a global automorphism group.")}</p>
            </article>
            <article>
              <span>{t("Fibrewise typed-orbit count")}</span>
              <code dir="ltr">4Σ O_n = 4(1+4+5+10+7+20+9) = {structuralOrbitCount}</code>
              <p>
                {t(
                  "The four family tags stay separate. Direct traversal and Burnside's lemma must return the same total.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Independent reconciliation")}</span>
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
            eyebrow={t("POINTED AUTOMORPHISMS VS AFFINE TORSOR SYMMETRIES")}
            title={t("Hol(C_n) belongs to the PLUS torsor, not to STAR automorphisms.")}
          />
          <div className="affine-boundary-grid">
            <article>
              <span>{t("Pointed automorphism")}</span>
              <code dir="ltr">σ_u(x)=ux · σ_u(0)=0</code>
              <p>{t("It preserves PLUS, STAR, and P0 for every unit u.")}</p>
            </article>
            <article>
              <span>{t("Affine torsor map")}</span>
              <code dir="ltr">F_(u,b)(x)=ux+b</code>
              <p>{t("For b≠0 it does not fix P0, so it is not an automorphism of the pointed cyclic group.")}</p>
            </article>
            <article>
              <span>{t("Exact STAR failure")}</span>
              <code dir="ltr">T_b(0★0)=b ≠ 2b=T_b(0)★T_b(0), b≠0</code>
              <p>{t("The inequality holds for every nonzero residue b, not merely in a generic case.")}</p>
            </article>
            <article>
              <span>{t("Inversion orbits, not physical mirrors")}</span>
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
            <article>
              <span>{t("Quadratic-residue nuance")}</span>
              <code dir="ltr">
                L5 · u=2: {`{1,4}`} → {`{2,3}`}
              </code>
              <p>
                {t(
                  "The quadratic-residue subgroup preserves each block; the full unit group preserves only the unordered two-block partition and may swap its blocks.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Exact CRT boundary at L6")}</span>
              <code dir="ltr">θ(3★_6 1)=θ(4)=(0,1) ≠ (0,0)=θ(3)★_coord θ(1)</code>
              <p>
                {t(
                  "CRT decomposes cyclic addition, but STAR tests zero globally; a residue that is zero in only one CRT coordinate exposes the failure of coordinatewise preservation.",
                )}
              </p>
            </article>
            <article>
              <span>{t("Characters and faithful phase labels")}</span>
              <code dir="ltr">χ_s(k)=exp(2πisk/n), s∈Z_n</code>
              <p>
                {t(
                  "All s define characters of C_n; only unit s give faithful labels. In a phase model P0 maps to complex 1, not complex 0.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="morphism-matrix" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("CROSS-LEVEL HOMOMORPHISMS")}
            title={t("PLUS and STAR have different homomorphism counts.")}
            text={t(
              "Each cell shows PLUS homomorphisms / full-algebra homomorphisms. PLUS has gcd(n,m) maps. For n≥2, the full algebra has the zero map and φ(n) additional embeddings exactly when n divides m; at n=1 the zero map is the unique embedding.",
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
            eyebrow={t("INTERPRETATION FIREWALL")}
            title={t("Finite algebra does not imply physical or field-theoretic symmetry.")}
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
