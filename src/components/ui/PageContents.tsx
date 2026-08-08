import { useEffect, useRef } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { useActiveSection, type ContentsItem } from "./useActiveSection";

type PageContentsProps = {
  /** The bar's own heading, e.g. "On this page". */
  label: string;
  ariaLabel: string;
  items: readonly ContentsItem[];
  /** Extra class for pages that want a different rhythm. */
  className?: string;
};

/**
 * The chapter bar. It sticks under the header, scrolls sideways rather than
 * wrapping — a bar three rows deep would eat a fifth of the screen it is meant
 * to help you read — and marks the section in view, bringing that marker into
 * its own view as you go.
 */
export function PageContents({ label, ariaLabel, items, className }: PageContentsProps) {
  const { t } = useI18n();
  const active = useActiveSection(items);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === null) return;
    const marked = trackRef.current?.querySelector<HTMLAnchorElement>('a[aria-current="true"]');
    // Not implemented in jsdom, and not worth failing a render over.
    if (typeof marked?.scrollIntoView !== "function") return;
    marked.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <nav className={className ? `math-contents ${className}` : "math-contents"} aria-label={t(ariaLabel)}>
      <div className="shell">
        <span>{t(label)}</span>
        <div className="math-contents__track" ref={trackRef}>
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active !== null && item.href === `#${active}` ? "true" : undefined}
            >
              <bdi dir="ltr">{String(index + 1).padStart(2, "0")}</bdi> {t(item.label)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
