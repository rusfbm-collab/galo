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

1. **Resolution ladder:** L2–L7 frames with a mid-level highlighted to communicate minimal sufficient resolution rather than “higher is always better”.
2. **Receipt stack:** observation envelope, committed universe, bound handle, execution receipt, and work ledger.
3. **Local revision:** one local hypothesis changes while neighbouring cards stay unchanged.
4. **Current / Target split:** mechanically verified slice and in-development architecture never share an undifferentiated status surface.

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
