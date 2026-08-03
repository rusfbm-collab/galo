export type OptionalContact = {
  label: string;
  href: string;
};

export const siteContent = {
  canonicalUrl: "https://aigalo.com",
  company: {
    name: "GALO AI",
    stage: "Pre-seed",
    legalStatus: null as string | null,
    revenue: null as number | null,
    fundsRaised: null as number | null,
  },
  founder: {
    name: "Ruslan Abdullin",
    role: "Founder & Chief Architect",
    bio: "Ruslan originated the GALO multipolar architecture, designed its frozen PLUS/STAR kernel and graph-free World Atlas model, and directed a multi-stage experimental programme across explicit memory, adaptive resolution, local revision, candidate-universe control, and deterministic replay. He established a red-team discipline that requires over-stated claims to be withdrawn or downgraded when stronger controls fail.",
    currentLocation: null as string | null,
    relocation: "Plans to relocate to Abu Dhabi and build the operating team there if selected.",
    education: null as string | null,
    previousEmployment: null as string | null,
    ipOwnership: null as string | null,
    email: null as string | null,
    telegram: null as string | null,
    linkedin: null as string | null,
    photo: null as string | null,
  },
  assets: {
    deck: null as string | null,
    technicalBrief: null as string | null,
    releaseStatus: null as string | null,
  },
  navigation: [
    { label: "Why GALO", href: "/#why-galo" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Receipt", href: "/#receipt" },
    { label: "Evidence", href: "/evidence" },
    { label: "Evaluation", href: "/#evaluation" },
    { label: "Founder", href: "/#founder" },
    { label: "Abu Dhabi", href: "/#abu-dhabi" },
  ],
} as const;

export function getEvaluationContact(subject: string): OptionalContact | null {
  if (!siteContent.founder.email) return null;

  return {
    label: siteContent.founder.email,
    href: `mailto:${siteContent.founder.email}?subject=${encodeURIComponent(subject)}`,
  };
}
