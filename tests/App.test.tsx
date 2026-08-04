import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";
import {
  getMissingTranslations,
  localizedPath,
  parseLocalizedPath,
  resetMissingTranslations,
  switchLocalePath,
} from "../src/i18n/I18nContext";

function setPath(path: string) {
  window.history.replaceState({}, "", path);
}

describe("GALO public site", () => {
  beforeEach(() => setPath("/"));
  afterEach(cleanup);

  it("renders the problem-led hero and bounded status", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /AI agents need a world state/i })).toBeInTheDocument();
    expect(screen.getByText("Working bounded prototype")).toBeInTheDocument();
    expect(screen.getByText(/General AI and external capability superiority are not claimed/i)).toBeInTheDocument();
  });

  it("shows exact evidence numbers with scope captions", () => {
    render(<App />);
    expect(screen.getByText("560")).toBeInTheDocument();
    expect(screen.getByText("1,204")).toBeInTheDocument();
    expect(screen.getByText("1,277 / 1,277")).toBeInTheDocument();
    expect(screen.getByText(/not semantic concepts/i)).toBeInTheDocument();
    expect(screen.getByText(/not an intelligence metric/i)).toBeInTheDocument();
  });

  it("keeps current and target architecture visibly separate", () => {
    render(<App />);
    expect(screen.getByText("CURRENT VERIFIED SLICE")).toBeInTheDocument();
    expect(screen.getByText(/TARGET ARCHITECTURE · IN DEVELOPMENT/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Observation-conditioned structural reasoning and persistent learning are not implemented/i),
    ).toBeInTheDocument();
  });

  it("replays the receipt deterministically", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByRole("heading", { name: "Public observation envelope recorded" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Show step 6/i }));
    expect(screen.getByRole("heading", { name: "Terminal result preserved with a boundary" })).toBeInTheDocument();
    expect(screen.getAllByText("BOUNDARY").length).toBeGreaterThan(0);
    await user.click(screen.getByRole("button", { name: /Reset/i }));
    expect(screen.getByRole("heading", { name: "Public observation envelope recorded" })).toBeInTheDocument();
  });

  it("discloses all critical boundaries", () => {
    render(<App />);
    expect(screen.getByText("Authenticated external-source provenance")).toBeInTheDocument();
    expect(screen.getByText("Oracle-free action selection")).toBeInTheDocument();
    expect(screen.getByText("Persistent policy learning")).toBeInTheDocument();
    expect(screen.getByText("General AI")).toBeInTheDocument();
  });

  it("publishes the confirmed evaluation email without inventing social links", () => {
    render(<App />);
    expect(screen.queryByRole("link", { name: /LinkedIn/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "rusfbm@gmail.com" })).toHaveAttribute("href", "mailto:rusfbm@gmail.com");
    expect(
      screen
        .getByRole("link", { name: /Request a 25-minute evaluation/i })
        .getAttribute("href")
        ?.startsWith("mailto:rusfbm@gmail.com?subject="),
    ).toBe(true);
    expect(screen.queryByText(/Public evaluation contact is pending founder confirmation/i)).not.toBeInTheDocument();
  });

  it("provides semantic landmarks and mobile navigation control", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    const menu = screen.getByRole("button", { name: /Open navigation/i });
    fireEvent.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
  });

  it("keeps every same-page navigation target resolvable", () => {
    render(<App />);
    const samePageLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]'));
    expect(samePageLinks.length).toBeGreaterThan(0);

    for (const link of samePageLinks) {
      const target = link.getAttribute("href")?.split("#")[1];
      expect(target, "Missing fragment in " + link.href).toBeTruthy();
      expect(document.getElementById(target ?? ""), "Missing target for #" + target).toBeInTheDocument();
    }
  });

  it("renders the evidence route", () => {
    setPath("/evidence");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Evidence, scoped precisely." })).toBeInTheDocument();
    expect(screen.getByText("READY_NOT_TRAINED_WITH_DISCLOSED_BOUNDARIES")).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Public claim matrix" })).toBeInTheDocument();
    expect(screen.getByText("NOT PRESENT")).toBeInTheDocument();
    expect(screen.getByText("NOT CLAIMED")).toBeInTheDocument();
  });

  it("renders the mathematics route and computes selectable Cayley cells", async () => {
    const user = userEvent.setup();
    setPath("/math");
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "The mathematics beneath GALO AI." })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "PLUS Cayley table at L3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PLUS at L3: P1 with P2 equals P0" })).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: /^STAR$/ }));
    await user.click(screen.getByRole("button", { name: "STAR at L3: P0 with P2 equals P0" }));

    expect(screen.getByRole("table", { name: "STAR Cayley table at L3" })).toBeInTheDocument();
    expect(document.querySelector(".cayley-result__equation")).toHaveTextContent("STAR3(P0, P2) = P0");
    expect(screen.getByText("RESET ROW")).toBeInTheDocument();

    expect(document.querySelector(".typed-cell-record > code")).toHaveTextContent("L3:STAR_LEFT:P0:P2");
    await user.click(screen.getByRole("button", { name: "STAR_RIGHT" }));
    expect(document.querySelector(".typed-cell-record > code")).toHaveTextContent("L3:STAR_RIGHT:P0:P2");
    expect(screen.getByText("224")).toBeInTheDocument();
    expect(document.querySelector(".symmetry-card__counts")).toHaveTextContent("18");

    for (const link of Array.from(document.querySelectorAll<HTMLAnchorElement>('.math-contents a[href^="#"]'))) {
      const target = link.getAttribute("href")?.slice(1) ?? "";
      expect(document.getElementById(target), `Missing mathematics target #${target}`).toBeInTheDocument();
    }
  });

  it("renders privacy and the custom 404", () => {
    setPath("/privacy");
    const privacy = render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /quiet, static website/i })).toBeInTheDocument();
    privacy.unmount();
    setPath("/outside-scope");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Page not found." })).toBeInTheDocument();
    expect(screen.getByText(/outside the current site boundary/i)).toBeInTheDocument();
  });

  it("renders a complete Russian home route with localized navigation and contact", () => {
    setPath("/ru");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ru");
    expect(document.documentElement).toHaveAttribute("dir", "ltr");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "ИИ-агентам необходимо состояние мира, которое можно проверять, пересматривать и воспроизводить.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Основная навигация" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Доказательства" })[0]).toHaveAttribute("href", "/ru/evidence");
    expect(screen.getByRole("combobox", { name: "Язык" })).toHaveValue("ru");
  });

  it("renders the Chinese evidence route while preserving exact release tokens", () => {
    setPath("/zh/evidence");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "zh-CN");
    expect(screen.getByRole("heading", { level: 1, name: "严格限定范围的证据。" })).toBeInTheDocument();
    expect(screen.getByText("READY_NOT_TRAINED_WITH_DISCLOSED_BOUNDARIES")).toBeInTheDocument();
    expect(screen.getByText("通用人工智能")).toBeInTheDocument();
    expect(screen.getByText("NOT CLAIMED")).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/zh/evidence");
  });

  it("renders Arabic in RTL while leaving recorded payload fields canonical", () => {
    setPath("/ar");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "تحتاج وكلاء الذكاء الاصطناعي إلى حالة عالم يمكنها فحصها ومراجعتها وإعادة تشغيلها.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("حمولة إيصال منقحة")).toHaveTextContent('"hiddenTargetAccess": 0');
    expect(screen.getByRole("link", { name: "rusfbm@gmail.com" })).toBeInTheDocument();
  });

  it("renders the Arabic mathematics route in RTL while keeping tables left-to-right", () => {
    setPath("/ar/math");
    render(<App />);
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(document.querySelector(".cayley-table-wrap")).toHaveAttribute("dir", "ltr");
    expect(document.querySelector(".typed-cell-record > code")).toHaveAttribute("dir", "ltr");
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://aigalo.com/ar/math");
  });

  it("localizes privacy and 404 pages without losing the locale prefix", () => {
    setPath("/ru/privacy");
    const privacy = render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /По умолчанию/i })).toBeInTheDocument();
    privacy.unmount();
    setPath("/ar/outside-scope");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "الصفحة غير موجودة." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /العودة إلى الرئيسية/ })).toHaveAttribute("href", "/ar");
  });

  it("builds stable localized URLs and parses prefixed routes", () => {
    expect(localizedPath("en", "/evidence")).toBe("/evidence");
    expect(localizedPath("ru", "/#receipt")).toBe("/ru#receipt");
    expect(localizedPath("zh", "/privacy")).toBe("/zh/privacy");
    expect(localizedPath("ar", "/math#cayley-tables")).toBe("/ar/math#cayley-tables");
    expect(parseLocalizedPath("/ar/evidence/")).toEqual({ locale: "ar", route: "/evidence", rawRoute: "/evidence" });
    expect(parseLocalizedPath("/ru/math/")).toEqual({ locale: "ru", route: "/math", rawRoute: "/math" });
    expect(parseLocalizedPath("/ru/not-real")).toEqual({ locale: "ru", route: "/404", rawRoute: "/not-real" });
    expect(switchLocalePath("zh", "/ar/math", "#cayley-tables")).toBe("/zh/math#cayley-tables");
  });

  it("has translation coverage for every rendered string in every localized route", () => {
    resetMissingTranslations();
    for (const locale of ["ru", "zh", "ar"]) {
      for (const route of ["", "/math", "/evidence", "/privacy", "/not-found"]) {
        setPath(`/${locale}${route}`);
        const view = render(<App />);
        view.unmount();
      }
    }
    expect(getMissingTranslations()).toEqual({});
  });
});
