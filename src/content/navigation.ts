/**
 * Every page on the site, grouped by the reason somebody would open it.
 *
 * The header carries nine links and no room for more, so this is the complete
 * list: the footer renders it, the mobile menu renders it, and the 404 page
 * renders it instead of apologising and offering two buttons. One source means
 * a route cannot quietly stop being reachable.
 *
 * Each hint says what the page settles, not what it is about — a reader
 * choosing between four pages needs the difference, not the subject.
 */

export type SiteMapLink = {
  label: string;
  href: string;
  hint: string;
};

export type SiteMapGroup = {
  title: string;
  links: readonly SiteMapLink[];
};

export const siteMap: readonly SiteMapGroup[] = [
  {
    title: "Start here",
    links: [
      { label: "Home", href: "/", hint: "The claim, and where each part of it is checked." },
      { label: "In plain words", href: "/simple", hint: "The whole thing with no formula and no jargon." },
      { label: "Comparison", href: "/vs-llm", hint: "How this differs from a chatbot, and who else is in the field." },
    ],
  },
  {
    title: "If you have to decide",
    links: [
      {
        label: "For industry",
        href: "/industry",
        hint: "The first product, its autonomy ladder and its price hypotheses.",
      },
      {
        label: "For investors",
        href: "/investors",
        hint: "What exists, what does not, and what would tell you to walk away.",
      },
      { label: "For auditors", href: "/audit", hint: "What a sceptic can establish here, and what nobody can." },
      { label: "How the engine works", href: "/hub71", hint: "The mechanism in ten minutes, then where to attack it." },
      { label: "Evidence", href: "/evidence", hint: "Four tracks, and how far each one has actually come." },
    ],
  },
  {
    title: "The mathematics",
    links: [
      { label: "Theory · start here", href: "/theory", hint: "Built up from the first state transition." },
      { label: "How it thinks", href: "/thinking", hint: "One decision followed from the input to the record." },
      { label: "Mathematics", href: "/math", hint: "The PLUS and STAR Cayley tables, in full." },
      { label: "Symmetry", href: "/symmetry", hint: "Automorphisms, orbits, and the Burnside counts." },
    ],
  },
] as const;

export const siteMapTranslationKeys = siteMap.flatMap((group) => [
  group.title,
  ...group.links.flatMap((link) => [link.label, link.hint]),
]);
