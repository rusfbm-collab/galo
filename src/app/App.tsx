import { EvidencePage } from "../pages/EvidencePage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivacyPage } from "../pages/PrivacyPage";

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return <HomePage />;
  if (path === "/evidence") return <EvidencePage />;
  if (path === "/privacy") return <PrivacyPage />;
  return <NotFoundPage />;
}
