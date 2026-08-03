import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  aside?: ReactNode;
};

export function SectionHeading({ eyebrow, title, text, light = false, aside }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p className="section-heading__text">{text}</p>}
      </div>
      {aside && <div className="section-heading__aside">{aside}</div>}
    </div>
  );
}
