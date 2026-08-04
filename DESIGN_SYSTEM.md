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
5. **Theory from zero:** a dedicated long-form route starts with an L3 dial, introduces one object class at a time, and provides optional depth through tables, exact records, glossary disclosures, and links to the academic chapters.

## Beginner learning pattern

Every substantial Theory section uses a consistent six-part explanation contract:

1. a plain-language mental model;
2. the exact mathematical definition;
3. one fully worked L3 example;
4. a complete finite table, tree, or replay where appropriate;
5. an independent consistency check;
6. a named misconception, counterexample, or evidence boundary.

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

Six pages — Home, Theory, Mathematics, Symmetry, Evidence, and Privacy — are prerendered in English, Russian, Simplified Chinese, and Arabic. That yields 24 localized HTML entry points with canonical and alternate metadata. Theory prose is independently translated per language; mathematical tokens and machine witnesses remain stable across locales.
