import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

/**
 * Several pages here run past ten screens, and on a phone the sticky chapter
 * bar is the only way back to the top short of a long scroll. The control
 * appears once the reader is well past the first screen and links to the main
 * landmark, so it works without JavaScript having to move the page.
 */
export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a className="back-to-top" href="#main-content" aria-label={t("Back to top")}>
      <ArrowUp size={18} aria-hidden="true" />
    </a>
  );
}
