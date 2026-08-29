import { describe, expect, it } from "vitest";
import { siteMap } from "../src/content/navigation";
import { siteContent } from "../src/content/site";

/**
 * The header holds nine links and the site has more pages than that, so the
 * site map is what actually guarantees a route stays reachable. These tests
 * hold it to that job: every canonical page present, none listed twice, and a
 * hint on each one that says something a reader could choose on.
 */

const CANONICAL_ROUTES = [
  "/",
  "/simple",
  "/investors",
  "/audit",
  "/engine",
  "/industry",
  "/theory",
  "/thinking",
  "/vs-llm",
  "/math",
  "/cayley",
  "/symmetry",
  "/evidence",
] as const;

describe("the site map", () => {
  it("lists every canonical page exactly once", () => {
    const listed = siteMap.flatMap((group) => group.links.map((link) => link.href));
    expect([...listed].sort()).toEqual([...CANONICAL_ROUTES].sort());
    expect(new Set(listed).size).toBe(listed.length);
  });

  it("gives every entry a hint that distinguishes it from its neighbours", () => {
    const hints = siteMap.flatMap((group) => group.links.map((link) => link.hint));
    for (const hint of hints) {
      expect(hint.length).toBeGreaterThan(25);
      expect(hint.endsWith(".")).toBe(true);
    }
    expect(new Set(hints).size).toBe(hints.length);
  });

  it("groups the pages by the reason somebody would open them", () => {
    expect(siteMap).toHaveLength(3);
    for (const group of siteMap) {
      expect(group.links.length).toBeGreaterThanOrEqual(3);
      expect(group.title.length).toBeGreaterThan(4);
    }
  });

  it("keeps the header a strict subset of the map, so nothing is header-only", () => {
    const listed = new Set(siteMap.flatMap((group) => group.links.map((link) => link.href)));
    for (const item of siteContent.navigation) {
      expect(listed.has(item.href), `Header link ${item.href} is missing from the site map`).toBe(true);
    }
  });
});
