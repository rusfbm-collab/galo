import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteContent } from "../../content/site";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="shell site-header__inner">
        <a className="site-header__brand" href="/" aria-label="GALO AI home">
          <Logo inverted />
        </a>
        <nav className="site-header__desktop" aria-label="Primary navigation">
          {siteContent.navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button--small button--light site-header__cta" href="/#evaluation">
          Request evaluation <ArrowRight size={16} aria-hidden="true" />
        </a>
        <button
          className="icon-button site-header__menu"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}>
        <nav className="shell" aria-label="Mobile navigation">
          {siteContent.navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--primary" href="/#evaluation" onClick={() => setIsOpen(false)}>
            Request evaluation <ArrowRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
