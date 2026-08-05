import type { ReactNode } from "react";
import { TermExplainerProvider } from "../theory/TermExplainer";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <TermExplainerProvider>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </TermExplainerProvider>
  );
}
