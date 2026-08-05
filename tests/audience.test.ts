import { describe, expect, it } from "vitest";
import {
  auditLimits,
  auditorQuestions,
  auditTranslationKeys,
  evidenceChain,
  reproductionSteps,
  statusRules,
  verificationTiers,
} from "../src/content/audit";
import {
  businessProblem,
  diligenceSteps,
  investorNotClaimed,
  investorsTranslationKeys,
  oneMinute,
  oneMinuteFacts,
  riskRegister,
  stageFacts,
  whereItFits,
} from "../src/content/investors";
import { readerPaths } from "../src/content/plainLanguage";
import {
  honestAdmissions,
  jargonTranslations,
  openingStory,
  plainWordsTranslationKeys,
} from "../src/content/plainWords";
import { siteContent } from "../src/content/site";
import { termDeepDives } from "../src/content/termDeepDives";
import {
  termAcademics,
  termAcademicTranslationKeys,
  termBySlug,
  termPages,
  termSlug,
  termSlugs,
} from "../src/content/termPages";
import { conceptLessons } from "../src/content/theory";
import { galoLevels } from "../src/content/mathematics";

/**
 * The investor and audit routes are the two places where an over-claim would do
 * the most damage, because they are read by people who will not open the
 * mathematics and check it themselves. These tests pin the honesty properties
 * rather than the prose.
 */
describe("investor entry point", () => {
  it("opens with three sentences and four qualifying numbers", () => {
    expect(oneMinute.what.length).toBeGreaterThan(60);
    expect(oneMinute.forWhom.length).toBeGreaterThan(60);
    expect(oneMinute.whyNow.length).toBeGreaterThan(60);
    expect(oneMinuteFacts).toHaveLength(4);
    expect(oneMinuteFacts.map((fact) => fact.value)).toContain("0");
  });

  it("prints the zero-measurement fact rather than omitting it", () => {
    const zeroResults = oneMinuteFacts.find((fact) => fact.label.includes("measured external results"));
    expect(zeroResults).toBeDefined();
    expect(zeroResults!.value).toBe("0");
    expect(zeroResults!.note).toMatch(/no benchmark, customer outcome, or operational gain has been measured/i);
  });

  it("keeps the stage facts aligned with the empty fields in the site record", () => {
    expect(siteContent.company.revenue).toBeNull();
    expect(siteContent.company.fundsRaised).toBeNull();
    expect(siteContent.company.legalStatus).toBeNull();

    const stage = stageFacts.find((fact) => fact.question === "What stage is this?");
    expect(stage!.answer).toMatch(/no revenue, no funds raised, no customer, no pilot, and no letter of intent/i);

    const disclosure = stageFacts.filter((fact) => fact.marker === "NOT DISCLOSED");
    expect(disclosure.length).toBeGreaterThanOrEqual(2);
    for (const fact of disclosure) {
      expect(fact.answer).toMatch(/not disclosed/i);
    }
  });

  it("marks every deployment scenario as hypothetical rather than as a relationship", () => {
    expect(whereItFits).toHaveLength(4);
    const prose = whereItFits.flatMap((entry) => [entry.situation, entry.whatWouldChange]).join(" ");
    expect(prose).not.toMatch(/\b(our customer|our client|we deployed|in production with|pilot with)\b/i);
    for (const entry of whereItFits) {
      expect(entry.whatWouldChange).toMatch(/would|becomes|stops|keeps/i);
    }
  });

  it("gives every risk a test that could settle it in either direction", () => {
    expect(riskRegister).toHaveLength(6);
    expect(riskRegister.map((entry) => entry.code)).toEqual(["R1", "R2", "R3", "R4", "R5", "R6"]);
    for (const entry of riskRegister) {
      expect(entry.whyItMatters.length).toBeGreaterThan(80);
      expect(entry.settledBy.length).toBeGreaterThan(60);
    }
  });

  it("orders the diligence path by cost and ends at the missing measurement", () => {
    expect(diligenceSteps).toHaveLength(6);
    expect(diligenceSteps.map((step) => step.timeBox)).toEqual(["30m", "1h", "30m", "1h", "1d", "1w"]);
    expect(diligenceSteps.at(-1)!.outcome).toMatch(/this is the missing evidence/i);
  });

  it("publishes the four business problems and six non-claims", () => {
    expect(businessProblem).toHaveLength(4);
    expect(investorNotClaimed).toHaveLength(6);
    for (const line of investorNotClaimed) {
      expect(line).toMatch(/^No\b/);
    }
  });

  it("makes no performance, traction, or valuation claim in any investor string", () => {
    const prose = investorsTranslationKeys.join(" ");
    expect(prose).not.toMatch(/\b(revenue of|ARR|valuation|term sheet|signed|LOI secured|customers use)\b/i);
    expect(prose).not.toMatch(/\b(?:is|are|runs|performs|works)\s+(?:faster|cheaper|better)\s+than\b/i);
    expect(prose).not.toMatch(/\b(outperforms?|market leader|best[- ]in[- ]class)\b/i);
    expect(new Set(investorsTranslationKeys).size).toBe(investorsTranslationKeys.length);
  });
});

describe("audit entry point", () => {
  it("ends its verification ladder in a tier that establishes nothing", () => {
    expect(verificationTiers.map((tier) => tier.code)).toEqual(["T1", "T2", "T3", "T4"]);
    expect(verificationTiers.at(-1)!.label).toMatch(/not verifiable from this site/i);
    expect(verificationTiers.at(-1)!.means).toMatch(/listed rather than quietly omitted/i);
  });

  it("keeps the five claim slots in the order a reviewer would walk them", () => {
    expect(evidenceChain.map((step) => step.field)).toEqual(["claim", "scope", "artifact", "check", "status"]);
    expect(evidenceChain.at(-1)!.detail).toMatch(/NOT PROVEN/);
  });

  it("states the four status rules including the boundary rule", () => {
    expect(statusRules.map((rule) => rule.code)).toEqual(["S1", "S2", "S3", "S4"]);
    expect(statusRules[2]!.rule).toMatch(/BOUNDARY is not a softer PASS/i);
    expect(statusRules[3]!.rule).toMatch(/NOT PROVEN is a statement about evidence/i);
  });

  it("answers eight reviewer questions and gives each one a check", () => {
    expect(auditorQuestions).toHaveLength(8);
    for (const entry of auditorQuestions) {
      expect(entry.question.endsWith("?")).toBe(true);
      expect(entry.answerToday.length).toBeGreaterThan(60);
      expect(entry.howToCheck.length).toBeGreaterThan(60);
    }
  });

  it("gives every reproduction step an expected result", () => {
    expect(reproductionSteps).toHaveLength(5);
    const expected = reproductionSteps.map((step) => step.expected).join(" ");
    expect(expected).toContain("560");
    expect(expected).toContain("1,204");
    expect(expected).toContain("880");
    expect(expected).toContain("440");
  });

  it("publishes five limits, all of them phrased as things the reader cannot establish", () => {
    expect(auditLimits).toHaveLength(5);
    for (const limit of auditLimits) {
      expect(limit).toMatch(/^You cannot establish/);
    }
    expect(auditLimits.join(" ")).toMatch(/independence of the checking/i);
  });

  it("never implies that any check published here is independent", () => {
    const prose = auditTranslationKeys.join(" ");
    expect(prose).not.toMatch(/\b(independently audited|third-party verified|externally certified)\b/i);
    expect(new Set(auditTranslationKeys).size).toBe(auditTranslationKeys.length);
  });
});

describe("reader paths", () => {
  it("gives each audience exactly three stops that resolve to real routes", () => {
    expect(readerPaths).toHaveLength(4);
    const routes = new Set<string>(siteContent.navigation.map((item) => item.href));
    routes.add("/");
    for (const path of readerPaths) {
      expect(path.stops).toHaveLength(3);
      expect(path.minutes).toMatch(/^\d+m$/);
      for (const stop of path.stops) {
        const [route] = stop.href.split("#", 1);
        expect(routes.has(route!), `Unknown reader-path route ${route}`).toBe(true);
      }
    }
  });
});

describe("plain words", () => {
  it("keeps every sentence short enough to read out loud", () => {
    // The whole point of this page is that a newcomer never has to re-read a
    // sentence. Anything much past forty words is a sign the register slipped
    // back into the specification voice used elsewhere on the site.
    for (const line of plainWordsTranslationKeys) {
      for (const sentence of line.split(/(?<=[.?!])\s+/)) {
        const words = sentence.trim().split(/\s+/).length;
        expect(words, `Too long for the plain page: ${sentence}`).toBeLessThanOrEqual(42);
      }
    }
  });

  it("tells the four unwelcome facts in the reader's own language", () => {
    expect(honestAdmissions).toHaveLength(5);
    const prose = honestAdmissions.map((entry) => `${entry.line} ${entry.detail}`).join(" ");
    expect(prose).toMatch(/no revenue, no investment raised, no pilot/i);
    expect(prose).toMatch(/nobody outside the project has checked it/i);
    expect(prose).toMatch(/does not replace the chatbots/i);
    expect(prose).toMatch(/we have not measured that it helps anyone/i);
  });

  it("translates the jargon a reader will meet on the other pages", () => {
    expect(jargonTranslations).toHaveLength(10);
    const words = jargonTranslations.map((entry) => entry.jargon);
    expect(words).toContain("Cayley table");
    expect(words).toContain("Receipt");
    expect(words).toContain("Boundary");
    expect(words).toContain("PASS / NOT PROVEN");
    for (const entry of jargonTranslations) {
      // A plain-language gloss that reuses the jargon has explained nothing.
      expect(entry.plain.toLowerCase()).not.toContain(entry.jargon.toLowerCase());
    }
  });

  it("walks the opening story from the decision to the unanswerable question", () => {
    expect(openingStory).toHaveLength(4);
    expect(openingStory.map((beat) => beat.number)).toEqual(["01", "02", "03", "04"]);
    expect(openingStory.at(-1)!.line).toMatch(/nobody can answer/i);
  });
});

describe("term pages", () => {
  it("gives every concept a page whose panels use real levels and laws", () => {
    const terms = conceptLessons.map((lesson) => lesson.term);
    expect(Object.keys(termPages).sort()).toEqual([...terms].sort());

    for (const [term, page] of Object.entries(termPages)) {
      expect(page.panels.length, term).toBeGreaterThan(0);
      for (const panel of page.panels) {
        expect(galoLevels, `${term} uses a level outside the tower`).toContain(panel.level);
        // Marked cells and headers have to exist at that level, or the page would
        // silently illustrate nothing.
        for (const [rowIndex, columnIndex] of panel.cells ?? []) {
          expect(rowIndex, term).toBeLessThan(panel.level);
          expect(columnIndex, term).toBeLessThan(panel.level);
        }
        for (const header of panel.headers ?? []) {
          expect(header, term).toBeLessThan(panel.level);
        }
      }
    }
  });

  it("names GALO in the meaning paragraph rather than staying generic", () => {
    // The complaint these pages answer is that the theory explains algebra and
    // leaves the reader to guess what it has to do with this project.
    const generic = Object.entries(termPages).filter(([, page]) => !/GALO/.test(page.inGalo));
    expect(generic.map(([term]) => term)).toEqual([]);
  });

  it("keeps slugs unique, lowercase, and url-safe", () => {
    expect(termSlugs).toHaveLength(conceptLessons.length);
    expect(new Set(termSlugs).size).toBe(termSlugs.length);
    for (const slug of termSlugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("resolves every related-term link to a page that exists", () => {
    for (const entry of termDeepDives) {
      for (const related of entry.related) {
        expect(termBySlug.get(termSlug(related)), `${entry.term} → ${related}`).toBe(related);
      }
    }
  });
});

/**
 * Each term page carries a definition stated the way a referee would state it,
 * on top of the plain-language one. These tests pin the properties that make
 * that layer trustworthy: it covers every term, it declares which branch of
 * mathematics the word belongs to, it never lets a project coinage pass as a
 * standard one, and it always shows the formal statement next to the prose.
 */
describe("academic register", () => {
  it("states a rigorous definition for every concept in the glossary", () => {
    const terms = conceptLessons.map((lesson) => lesson.term);
    expect(Object.keys(termAcademics).sort()).toEqual([...terms].sort());
  });

  it("files every term under a named discipline and declares its standing", () => {
    const disciplines = new Set<string>([
      "Universal algebra",
      "Group theory",
      "Number theory",
      "Combinatorics",
      "Sets, maps, and relations",
      "Project convention",
    ]);
    const standings = new Set<string>([
      "Standard term, standard meaning",
      "Standard term, narrowed to this setting",
      "Project term, not standard mathematics",
    ]);

    for (const [term, entry] of Object.entries(termAcademics)) {
      expect(disciplines.has(entry.discipline), `${term}: unknown discipline`).toBe(true);
      expect(standings.has(entry.standing), `${term}: unknown standing`).toBe(true);
    }

    // Every discipline and every standing has to be used, or the label is dead
    // weight in the type rather than a distinction a reader can rely on.
    const usedDisciplines = new Set<string>(Object.values(termAcademics).map((entry) => entry.discipline));
    const usedStandings = new Set<string>(Object.values(termAcademics).map((entry) => entry.standing));
    expect([...disciplines].filter((name) => !usedDisciplines.has(name))).toEqual([]);
    expect([...standings].filter((name) => !usedStandings.has(name))).toEqual([]);
  });

  it("marks the project's own coinages instead of dressing them as standard names", () => {
    // These words are ours. Presenting any of them as received mathematical
    // vocabulary would be the easiest way on this site to mislead a reviewer,
    // so the list is pinned: promoting one to "standard" has to be deliberate.
    const coined = Object.entries(termAcademics)
      .filter(([, entry]) => entry.standing === "Project term, not standard mathematics")
      .map(([term]) => term)
      .sort();

    expect(coined).toEqual([
      "Active pole",
      "Boundary",
      "Current V4 step-by-step replay",
      "Formal, current, and target layers",
      "Level",
      "PLUS",
      "Pole",
      "Receipt",
      "STAR",
      "Source state",
      "Symbol legend",
      "Typed catalogue count",
      "Typed coordinate",
      "Zero-prefix rule",
    ]);

    for (const term of coined) {
      // A coinage may not open by borrowing the authority of the literature.
      expect(termAcademics[term]!.academic, term).not.toMatch(/^(In mathematics|The standard|By convention in algebra)/i);
    }
  });

  it("shows a formal statement beside the prose for every term", () => {
    const symbolic = /[⊕★=∈≅→↦⇒⊃⊇⊆|{}()×⊬]|Q_n|P_0|Aut|Hom|Z\/nZ/;
    for (const [term, entry] of Object.entries(termAcademics)) {
      expect(entry.formal.length, `${term}: no formal statement`).toBeGreaterThan(8);
      // Mathematical entries state the definition in notation. The handful of
      // publication conventions have no notation to state, so they declare the
      // shape of the artefact instead, and are held to being compact.
      if (entry.discipline === "Project convention") {
        expect(entry.formal.length, `${term}: declaration should stay compact`).toBeLessThan(90);
      } else {
        expect(entry.formal, `${term}: formal line carries no notation`).toMatch(symbolic);
      }
      // Prose short enough to be a gloss is not a definition a referee would accept.
      expect(entry.academic.length, `${term}: definition too thin`).toBeGreaterThan(180);
      expect(entry.academic.trim().endsWith("."), `${term}: unfinished sentence`).toBe(true);
    }
  });

  it("keeps the academic layer in the register of a definition, not of a pitch", () => {
    const prose = termAcademicTranslationKeys.join(" ");
    expect(prose).not.toMatch(/\b(revolutionary|breakthrough|state[- ]of[- ]the[- ]art|world[- ]class)\b/i);
    expect(prose).not.toMatch(/\b(obviously|clearly it follows|trivially true|everyone knows)\b/i);
    expect(new Set(termAcademicTranslationKeys).size).toBe(termAcademicTranslationKeys.length);
  });
});
