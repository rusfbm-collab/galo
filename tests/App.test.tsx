import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { App } from "../src/app/App";

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

  it("hides unconfirmed personal links and exposes contact status", () => {
    render(<App />);
    expect(screen.queryByRole("link", { name: /LinkedIn/i })).not.toBeInTheDocument();
    expect(
      screen.queryAllByRole("link").every((link) => !link.getAttribute("href")?.toLowerCase().startsWith("mailto:")),
    ).toBe(true);
    expect(screen.getByText(/Public evaluation contact is pending founder confirmation/i)).toBeInTheDocument();
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
});
