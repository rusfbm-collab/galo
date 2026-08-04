export type PublicContact = {
  label: string;
  href: string;
};

export const publicContact = {
  evaluationEmail: "rusfbm@gmail.com",
} as const;

export function getEvaluationContact(subject: string): PublicContact {
  return {
    label: publicContact.evaluationEmail,
    href: `mailto:${publicContact.evaluationEmail}?subject=${encodeURIComponent(subject)}`,
  };
}
