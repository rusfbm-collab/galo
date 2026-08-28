# GALO AI design system

## Character

Precise, calm, high-trust, sovereign-grade, inspectable, and non-hype. The interface uses typography, layered frames, receipt stacks, and local-change diagrams rather than brains, robots, node graphs, or generic AI particles.

## Tokens

```css
--navy-950: #061724;
--navy-900: #0b2235;
--navy-800: #123047;
--ink: #12212e;
--paper: #f7f9fc;
--white: #ffffff;
--teal: #16b8a6;
--cyan: #41c8e8;
--amber: #e8a93a;
--red: #d85b61;
--line: #d7e0e8;
--muted: #66788a;
```

Status is never communicated by color alone: `PASS`, `BOUNDARY`, `REJECT`, and `IN DEVELOPMENT` are always visible as text.

## Type

- Display/body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Data: `"IBM Plex Mono", "SFMono-Regular", Consolas, monospace`
- No remote font requests

## Layout

- Maximum content width: 1,240px
- Desktop: 12-column conceptual grid
- Tablet/mobile: stacked reading order
- Section rhythm: 88–136px desktop, 72–96px mobile
- Card radius: 20–28px; quiet one-pixel borders
- Hero and evidence: deep navy; explanatory body: paper/white

## Signature components

1. **Resolution ladder:** neutral L2–L7 frames explain target resolution without implying that the current V4 runtime has selected a level; “higher is automatically better” is explicitly rejected.
2. **Receipt stack:** observation envelope, committed universe, bound handle, execution receipt, and work ledger.
3. **Local revision:** one local hypothesis changes while neighbouring cards stay unchanged.
4. **Current / Target split:** mechanically verified slice and in-development architecture never share an undifferentiated status surface.
5. **Architecture lanes:** two lists of stages that actually open. Each row is a `<details>` whose summary carries the stage name and whose body explains it without project vocabulary, because a row with a chevron and no behaviour reads as a broken accordion — which is exactly how the earlier version was reported. The six target stages each state in their own body that they do not run today.
6. **Theory from zero:** a dedicated long-form route starts with an L3 dial, introduces one object class at a time, and provides optional depth through tables, exact records, glossary disclosures, and links to the academic chapters.

## Reading order for non-specialists

The home route opens with three named reader routes — decide, verify, understand — each with exactly three stops, because a reader handed nine links follows none of them. Behind those routes the site has three deliberate entry points, and each one is complete on its own.

1. **Plain-language briefing** (home). Six questions a non-technical reader asks first, answered without mathematics or acronyms, followed by the single technical fact worth carrying away: everything below rests on a finite Cayley table.
2. **Start with the table** (theory). The familiar multiplication table placed beside the L3 PLUS table, the six-step chain from that table up to a replayable record, and the four properties a finite table has that a trained model does not.
3. **Academic reference** (mathematics). Six numbered definitions and eleven numbered propositions with complete proofs, in the form a referee expects. Statements and proof prose are translated; every formal expression stays canonical and left-to-right in all four locales.

The Cayley table is named as the foundation in all three, so a reader who arrives at any of them learns the same thing about what the project is made of.

## Surfaces inside inverted sections

`.section--navy` and `.section--dark` set `color: var(--white)` on everything inside them. Any card that keeps its own light background inside such a section must therefore set its own text colour as well; inheriting produces white text on a white card, which is invisible without being detectably broken. The corrected-misreading cards are the canonical case, and the rule applies to every future component that carries a light surface into an inverted section. The reverse holds too: the next-step link row was authored for inverted sections, so on a light one it has to invert its own colours back. Both directions are checked by a contrast sweep over every route in every locale.

## Illustration layer

Diagrams are drawn as inline SVG or as real tables, never as bitmaps, so they stay sharp, translatable, and readable by assistive technology. Every figure carries a caption, an `<svg><title>` and `<desc>` pair or a table caption, a direct text label on every mark, and — where the drawing could be over-read — an explicit boundary line.

Chart colour uses its own validated tokens rather than the brand accents, because the brand teal and cyan sit too close together to separate a series:

```css
--chart-1: #0f9c88; /* light surfaces */
--chart-2: #b8790a;
--chart-3: #2b7fd6;
--chart-1: #1faa8c; /* navy and dark surfaces */
--chart-2: #bd8526;
--chart-3: #6e8ce2;
```

Both sets pass a colour-vision-deficiency separation check and a 3:1 contrast check against their own surface. Diagram geometry is authored left-to-right and the SVG keeps that flow in every locale, with each label bidi-isolated so Arabic text still renders in its own direction without escaping its box. Magnitude uses a single seven-step teal ramp (`--ramp-0` … `--ramp-6`), light to dark; colour is never the only encoding, and every coloured cell also prints its exact label.

The figures are: the cyclic dial, the PLUS/STAR branch comparison, the coloured Cayley fields, the per-level coordinate chart, the narrowing funnel, the work-unit ledger, the L3 orbit map, the level-transfer matrix, the four-track status board, the familiar-table bridge, the layer stack, the two-machine anatomy, the question-by-question table, the composition loop, the commuting square, the two evaluation trees, the four role orientations, the resolution-loss map, the annotated receipt, the per-level automorphism chart, the nine-stage thought pipeline, the five refusal gates, the one-step state cycle, the three converging runs, the carried-state bands, the three-layer stack placement, the two decision lanes, the four verification tiers, the five-slot claim anatomy, and the four open evidence gates. The status board deliberately uses named milestones — Specified, Implemented, Independently re-checked, Externally validated — instead of a percentage, because a percentage would imply a measurement nobody has taken.

## Comparison route

`/vs-llm` is the one page that puts GALO beside a language model. It is written on a single rule: compare mechanism and evidence, never output quality. Every row of the ten-property table states what each object _is_, the breadth row says plainly that a language model is vastly wider, and one of the five corrected misreadings exists solely to state that no head-to-head evaluation has been run. The composition diagram marks the two proposing stages as target architecture so the loop cannot be read as shipped.

## Plain-words route

`/simple` is the first item in the navigation and the primary call to action on the home route, because everything else on this site assumes vocabulary a first-time reader does not have.

Its register is a constraint, not a mood. Every sentence has to survive being read out loud on the first attempt — a test caps them at forty-two words — and no term appears without being explained in the same breath. The page opens with an ordinary situation rather than an architecture: a program decided something, six months later somebody asks why, and the person holding the log genuinely cannot answer. Then three sentences of mechanism, one everyday comparison, three consequences, five plainly-worded limitations, and a ten-row translator from the vocabulary used on the other pages back into ordinary language.

Friendliness never widens a claim. Every limitation on this page is the same limitation the evidence page publishes, and a test asserts that the five unwelcome facts are all present.

## For a reader who does not work with AI

The plain-words page dropped the mathematics but kept the field's vocabulary:
model, training, hallucination, deterministic, benchmark. A reader outside AI
still had nothing to stand on. Two sections at `/simple` fix that, and they are
the first and last things on the page.

`#not-ai` opens the page. Four cards state what a reader arriving from a chat
window reasonably assumes — another chatbot, a ChatGPT replacement, something
smarter or faster, something already in use — and answers each one flatly.
Three of the four answers begin with "No."; the fourth is the one where the
honest answer is that nothing was measured, and a test pins that split.

Below them, the same three steps drawn twice: how nearly every AI system is put
together, and how this one is. The left column describes construction and never
performance — a test rejects "worse", "unreliable", "is slower" and their
relatives — and the figure closes by saying plainly that the left column is not
a criticism.

`#ai-words` closes the page with twelve words from the industry, not from this
project: model, training, large language model, hallucination, deterministic,
reproducible, black box, audit trail, benchmark, agent, inference, open source.
Each gets one plain sentence and a note on why it turns up here at all. A test
rejects a gloss that reuses the word it defines, and the strings are folded into
the plain-page sentence-length check, so the register cannot drift back.

## Investor and audit routes

`/investors` and `/audit` exist because everything else on the site assumes a specialist. Neither page contains a formula.

The investor route is built around what would normally be omitted: a stage-facts block whose answers are `NO` and `NOT DISCLOSED` as often as `YES`, a fact chip whose value is `0` because no external result has been measured, six risks each carrying the observation that would settle it, and a six-step diligence path whose first five steps need nothing from the project. The four deployment scenarios are marked as hypothetical in the copy and enforced as hypothetical by a test.

The audit route is written against its own site. It sorts every published value into four tiers of verifiability, and the fourth tier — not verifiable from here — is stated as the honest answer rather than hidden. It gives the five slots every published claim has to fill, four rules for reading a status without being misled, eight reviewer questions with the operation that would break each answer, and a closing list of five things a reader cannot establish here, including the independence of the checking itself.

## Thinking route

`/thinking` draws the decision procedure itself. One thought is nine numbered stages, and the diagram, the stage cards, and the worked table all carry the same statuses: seven stages are marked `CURRENT V4` and drawn solid, the two that would follow are marked `TARGET` and drawn dashed. Every stage names the single condition that stops the thought there, and the five refusal gates are given codes that end up in the record, so a stop is a result with a cause rather than an absence of output. The worked walkthrough repeats the whole procedure with the release's own values — 1,204, 880, 440, the SHA-256 ordering input, arity 2, route depth 1 — and deliberately leaves the two target stages without a row, because they produce no value today.

## Assessment dossier

The `/engine` page ends with a folded appendix written for one reader: somebody
deciding whether the project is worth a meeting. It is built as a document
rather than a page, and three rules keep it one.

**No programme is described.** The dossier names no accelerator, fund or
assessor, and states nothing about anybody's criteria, tracks, incentives or
terms. Nothing in this project can verify those, and repeating them second-hand
would be exactly the unseriousness the appendix exists to avoid.

**No relationship is implied, and the build enforces it.** The statement — that
the dossier was prepared by the project itself and reports no decision, no
relationship and no outcome — is a required boundary in
`scripts/check-claims.mjs` in all four languages. A set of affiliation shapes
naming specific programmes stays on the forbidden list in the same file, so a
future edit cannot quietly claim backing that does not exist.

**Every commitment carries its failure condition.** The twelve-month table
states, next to each deliverable, the observation that would show it was missed
— including the two that could most easily be dropped quietly: an outside
re-derivation of the mathematics, and publishing the first external measurement
whichever way it comes out. A milestone without a failure condition is a wish,
and a test asserts all five have one.

The page's shape follows from that: twelve assessment lines with six of them
negative and the first negative one above the halfway point; four regional-fit
claims each followed by what it does not reach; the ask stated in both
directions, with the "not asked for" list the longer-lived half; six hard
questions answered as they stand; four facts a website is the wrong place for,
separated into withheld and non-existent; and a document-control block pinned to
the same release record as the evidence pages. Status is never colour alone —
`ESTABLISHED`, `PARTIAL`, `NONE`, `NOT ESTABLISHED`, `STATED, NOT DONE`, and
`NOT DISCLOSED` are printed as text on every row.

The home route's Abu Dhabi section shares the twelve-month data with this page
rather than restating it, so the plan cannot drift between the two.

## Theory chapter orientation

`/theory#orientation` is the first section of the chapter and the first of the
two hero buttons, because the chapter's own order — build the mathematics one
verified step at a time — is the right order for learning it and the wrong order
for somebody deciding whether to fund or approve it. The section answers four
things before the chapter starts, in this order:

1. **Why there is mathematics here at all.** Four steps from "why did it do
   that?" to a grid of letters, each forced by the one above it and each naming
   the ordinary-looking alternative it rules out — a longer log, a list
   reconstructed afterwards, a state described in a sentence. The mathematics
   arrives as a consequence rather than as a preference, and a reader who
   disagrees with a step has located the exact point where they disagree with
   the project. Its own boundary note says the steps establish the shape an
   answer must have, not that this table is the right one for any given job.
2. **Two reading lanes.** The five stops of the chapter, once as what is proved
   and once as what the same fact decides for a buyer.
3. **Six words, explained once.** The entire vocabulary the chapter then uses
   without re-defining: Cayley table, pole, level, PLUS, STAR, boundary. Each
   card gives a plain sentence, says where the word will appear, and links to
   that word's own page with a real table from the tower.
4. **Four readers.** The question each audience arrives with, the section that
   answers it, and what that section cannot give them.
5. **What you will be able to say.** Four first-person claims, each with the
   check that settles it and a link straight to it. A chapter that leaves a
   reader impressed but unable to state anything precisely has failed, and this
   block is what the section is measured against.

Strings live in `src/content/orientation.ts` under the file's own rule: no
symbol, no operation, and no term that is not explained in the same sentence.
The claims are the same claims made elsewhere — only the vocabulary changes.

## Illustrations for a reader who will not do the algebra

The theory chapter is the part of the site most likely to lose somebody who is
deciding whether to fund, buy, or approve a system rather than to learn the
mathematics. Eight figures answer that reader in pictures, and each one is
attached to the section whose mathematics it restates:

| Figure                          | Section              | What it settles                                                                                              |
| ------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------ |
| Two reading lanes               | `#orientation`       | The five stops of the chapter, once as what is proved and once as what it decides                            |
| Four readers                    | `#orientation`       | The question each audience arrives with, the section that answers it, and what that section cannot give them |
| Cost of establishing a negative | `#cayley-first`      | Reading a declared list terminates; probing an undeclared space does not                                     |
| A sentence versus a name        | `#states`            | The same status as prose with three readings, and as one declared position with one                          |
| Absorbing chains                | `#p0`                | Three histories under STAR: once a chain lands on P0 no later step takes it off                              |
| One pair, four typed readings   | `#typed-actions`     | Why a record carries level, law, and orientation and not only the pair                                       |
| The whole index drawn in full   | `#count-560`         | 560 marks, banded by level, with a visible edge                                                              |
| Three shelves                   | `#evidence-language` | Proved, running today, and merely written down, with nothing carrying between them                           |

Two rules keep these honest. Anything computed — the chains, the four targets,
the 560 marks and their per-level bands — is regenerated from `mathematics.ts`
on render, so a figure cannot drift away from the law it illustrates, and tests
assert the rendered values. And every figure that states a business consequence
carries a boundary note in the same frame saying what it is not: no deployment
has happened, so none of them reports a result.

Prose-heavy figures are laid out in HTML rather than SVG. An SVG `<text>` node
does not wrap, so a Russian or Arabic label two or three times the length of the
English one escapes its box; only figures whose labels are short and fixed —
position names, family codes, numbers — are drawn as SVG.

Lucide icons inside a figure need `.galo-figure svg.lucide` to opt out of the
canvas rule that stretches diagram SVGs to the reading width, or a 20px glyph
renders three hundred pixels wide.

## One page per concept

Every one of the 59 concepts has its own route at `/term/<slug>`, prerendered in all four locales. Term chips are links to those pages rather than buttons that open a dialog: the explanation is the part readers needed most, and a dialog made it unshareable, invisible to search, and unavailable without JavaScript.

Each page answers the two questions the theory chapters left open. First, **where to look**: a real PLUS or STAR table from the tower, regenerated from the law on render, with the cells that concept lives in marked — so an illustration can never drift away from the mathematics it illustrates. Marked cells are teal when the concept is about what the law does and amber when it is about what the law refuses or loses. Second, **what the word means inside GALO** rather than in algebra generally; a test fails if any of the 59 meaning paragraphs forgets to say so.

Below that come the plain-language layer where one exists, the complete seven-part lesson, and the related concepts as links to their own pages.

## Academic layer

Above everything else on a term page sits the definition as a referee would state it, in `src/content/termPages.ts` under `termAcademics`. Every one of the 59 terms carries four fields:

- **discipline** — which branch the word belongs to: universal algebra, group theory, number theory, combinatorics, sets/maps/relations, or project convention. It is shown as a tag in the hero and pins the literature a reader should reach for.
- **standing** — whether the word is standard with its standard meaning, standard but narrowed to this setting, or a name the project coined. The fourteen coined words are listed in a test, so promoting one to "standard" has to be a deliberate edit rather than a slip. A coined word's tag is amber, not teal.
- **formal** — the definition in notation, rendered left-to-right in every locale and deliberately free of prose glue, so the same line serves the Russian, Chinese, and Arabic pages unchanged. A test rejects a formal line with no notation in it, and holds the handful of publication conventions — which have no notation to state — to a compact declaration instead.
- **academic** — the rigorous statement, translated into all four languages with the terminology each mathematical tradition actually uses: _носитель_, _обеднение и обогащение_, _конгруэнция_, _теорема об орбите и стабилизаторе_; 载体集, 约化与扩充, 同余关系, 轨道–稳定子定理; المجموعة الحاملة, الاختزال والتوسيع, علاقة التطابق, مبرهنة المدار والمثبِّت. Translating the register rather than the words is the point: a Russian reader should recognise the sentence from a textbook, not from a translation of one.

The order on the page is deliberate. The exact definition comes first for the reader who wants it, and the plain-language layers come after, so neither audience has to read the other's version to reach its own.

## Beginner learning pattern

The 59-entry concept notebook uses one consistent seven-part explanation contract across Theory, Mathematics, and Symmetry:

1. a plain-language analogy that is explicitly subordinate to the mathematics;
2. the exact mathematical definition;
3. one fully worked small-level example;
4. a short proof or reason explaining why the assertion follows;
5. a named misconception, counterexample, or evidence boundary;
6. a complete finite table, ledger, tree, or replay check;
7. an independent formula check that must agree with the tabular channel.

The seven fields are visually distinct: analogy spans the reading width, definitions and examples use ordinary prose with isolated mathematical tokens, warnings never rely on color alone, and the two independent checks sit side by side on wide screens and stack in reading order on narrow screens.

The interface visually separates labels, calculation indices, and domain meaning. Likewise, it never merges formal mathematics, current V4 runtime behavior, archived compatibility evidence, target architecture, or external operational outcomes.

The guided transition laboratory uses two independent result channels. The browser reconstructs the formula result directly and separately reads the complete Cayley-table cell. Its canonical record exposes `check_id=BEGINNER_TRANSITION_DUAL_CHANNEL`, typed cell ID, raw operands, expected table result, formula result, return code, and status. The lab explicitly states that it does not execute the release engine, interpret natural language, issue an operational receipt, or learn.

## Motion

- 180–260ms transitions
- Deterministic replay progression only
- No autoplay, parallax, looping attention traps, or random particles
- `prefers-reduced-motion: reduce` removes non-essential transition and smooth scrolling

## Accessibility

- WCAG 2.1 AA target
- Semantic landmarks, skip link, logical heading order
- Visible keyboard focus and 44px minimum interactive targets
- Accessible mobile navigation with Escape close
- `aria-live="polite"` on replay state
- Text alternatives for diagrams
- Comparison surfaces reflow into readable mobile cards
- Cayley-table cells use one roving tab stop with arrow-key movement instead of placing every cell in the tab order
- Complete tables include captions; horizontal overflow regions remain keyboard reachable where needed
- Beginner-route explanatory prose is never smaller than 14px; table and technical text is never smaller than 13px, with compact labels at least 12px
- Exact IDs, formulas, hashes, matrices, and receipt records stay LTR inside the Arabic RTL document
- Translated Arabic captions and prose inherit RTL even when the adjacent formula or table remains explicitly LTR
- Closed mobile navigation is removed from the accessibility tree rather than merely hidden visually

## Localized delivery

Seven pages — Home, Theory, GALO vs LLM, Mathematics, Symmetry, Evidence, and Privacy — are prerendered in English, Russian, Simplified Chinese, and Arabic. That yields 28 localized HTML entry points with canonical and alternate metadata. Theory prose is independently translated per language; mathematical tokens and machine witnesses remain stable across locales.
