import type { ReactNode } from "react";
import { BackToTop } from "../ui/BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <BackToTop />
      <Footer />
    </>
  );
}
