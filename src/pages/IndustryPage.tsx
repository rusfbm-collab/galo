import { ArrowLeft, ArrowRight, Ban, CircleAlert, Factory, Layers3, ShieldCheck } from "lucide-react";
import { PageShell } from "../components/layout/PageShell";
import { PageContents } from "../components/ui/PageContents";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  autonomyLadder,
  evaluationArms,
  industrialWorkflow,
  integrationStack,
  offerLadder,
  partnerFit,
  promotionGates,
  stopRule,
  wedgeSeparation,
} from "../content/industrial";
import { useI18n } from "../i18n/I18nContext";

const contents = [
  { href: "#wedge", label: "Platform and product, kept apart" },
  { href: "#stack", label: "Where GALO sits, and what it never touches" },
  { href: "#workflow", label: "One evaluated decision, in seven steps" },
  { href: "#ladder", label: "Advisory to robot missions, with the gates" },
  { href: "#evaluation", label: "Seven arms and eight gates" },
  { href: "#offer", label: "What it would cost, as a hypothesis" },
  { href: "#fit", label: "Who this is not for" },
] as const;

export function IndustryPage() {
  const { href, t } = useI18n();

  return (
    <PageShell>
      <section className="page-hero page-hero--industry">
        <div className="shell">
          <a className="back-link" href={href("/")}>
            <ArrowLeft className="directional-icon" size={16} aria-hidden="true" /> {t("Home")}
          </a>
          <p className="eyebrow eyebrow--cyan">{t("THE FIRST MARKET, AND THE REASON IT IS THE FIRST")}</p>
          <h1>{t("Decision assurance around the digital twins a plant already runs.")}</h1>
          <p>
            {t(
              "The architecture is meant to be general, and it is weight-free: nothing it learns is a hidden number, so an affected decision can be named rather than inferred. The first product is deliberately narrow — one industrial workflow, read only, advisory, with a frozen baseline and a decision package somebody else can replay. Industry is where the cost of ambiguity is already counted, which is why an architecture is worth testing there first.",
            )}
          </p>
          <div className="industry-hero__strip">
            <span>
              <Factory size={15} aria-hidden="true" /> {t("Read-only adapters")}
            </span>
            <span>{t("Advisory and simulation first")}</span>
            <span>{t("No customer, no pilot, no revenue")}</span>
            <span>{t("Production autonomy not authorised")}</span>
          </div>
        </div>
      </section>

      <PageContents label="On this page" ariaLabel="Industrial chapter navigation" items={contents} />

      <section id="wedge" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("PLATFORM AND PRODUCT, KEPT APART")}
            title={t("A general architecture and a narrow first product are two different sentences.")}
            text={t(
              "Collapsing them is the quickest way to say something untrue in either direction — either the product sounds like general intelligence, or the architecture sounds like a maintenance tool. They are stated separately here and everywhere else on the site.",
            )}
          />
          <div className="wedge-grid">
            {wedgeSeparation.map((row) => (
              <article key={row.label}>
                <span>{t(row.label)}</span>
                <strong>{t(row.value)}</strong>
                <p>{t(row.detail)}</p>
              </article>
            ))}
          </div>
          <p className="wedge-guard">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>
              <bdi dir="ltr">GENERAL-PURPOSE ARCHITECTURE = YES</bdi>
              {" · "}
              <bdi dir="ltr">GENERAL INTELLIGENCE = NOT PROVEN</bdi>
            </span>
          </p>
        </div>
      </section>

      <section id="stack" className="section section--navy math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHERE GALO SITS")}
            title={t("Above the systems that run the plant, and never inside them.")}
            text={t(
              "GALO does not replace a digital twin, a SCADA system, a PLC, a robot controller or a safety interlock, and no proposed version writes to any of them directly. It reads what they publish and hands its conclusion to a person, a simulation or an approval gateway.",
            )}
          />
          <ol className="integration-stack">
            {integrationStack.map((tier, index) => (
              <li key={tier.tier} className={`is-${tier.owner}`}>
                <span className="integration-stack__index" dir="ltr">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{t(tier.tier)}</strong>
                  <p>{t(tier.detail)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="galo-figure__legend">
            <span>
              <i className="galo-swatch galo-swatch--muted" aria-hidden="true" />
              {t("the partner's systems, untouched")}
            </span>
            <span>
              <i className="galo-swatch galo-swatch--series-1" aria-hidden="true" />
              {t("what GALO would add")}
            </span>
            <span>
              <i className="galo-swatch galo-swatch--series-2" aria-hidden="true" />
              {t("the authority boundary")}
            </span>
          </div>
        </div>
      </section>

      <section id="workflow" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("ONE EVALUATED DECISION")}
            title={t("An alarm arrives. Seven steps later there is a package somebody else can replay.")}
            text={t(
              "Each step names the partner system it reads, the artefact GALO produces, and the control that stops the step from being gamed. The controls are the point: without them a work-reduction number means nothing.",
            )}
          />
          <ol className="industrial-workflow">
            {industrialWorkflow.map((step) => (
              <li key={step.number}>
                <span className="industrial-workflow__index" dir="ltr">
                  {step.number}
                </span>
                <div>
                  <h3>{t(step.title)}</h3>
                  <dl>
                    <div>
                      <dt>{t("Partner system")}</dt>
                      <dd>{t(step.partnerSystem)}</dd>
                    </div>
                    <div>
                      <dt>{t("GALO artefact")}</dt>
                      <dd>{t(step.galoArtifact)}</dd>
                    </div>
                    <div className="is-control">
                      <dt>{t("Control")}</dt>
                      <dd>{t(step.control)}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ladder" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("THE AUTONOMY LADDER")}
            title={t("Five rungs, and the evidence that would open each one.")}
            text={t(
              "None of these rungs runs today. They are listed with their gates so that a reader can see what would have to be true before GALO went anywhere near a physical command — and so that nobody has to take the word 'roadmap' on trust.",
            )}
          />
          <ol className="autonomy-ladder">
            {autonomyLadder.map((stage) => (
              <li key={stage.code}>
                <span className="autonomy-ladder__code" dir="ltr">
                  {stage.code}
                </span>
                <div>
                  <h3>
                    {t(stage.title)}{" "}
                    <em className={`autonomy-ladder__status is-${stage.status.replace(/\s/g, "-")}`}>
                      {t(stage.status)}
                    </em>
                  </h3>
                  <p>{t(stage.role)}</p>
                  <p className="autonomy-ladder__gate">
                    <ShieldCheck size={15} aria-hidden="true" /> {t(stage.gate)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="section-followup">
            <Ban size={16} aria-hidden="true" />{" "}
            {t(
              "GALO is not a PLC, a motion controller or a safety system, and it does not aim to become one. In robotics its long-term place is mission reasoning, constraints, exception handling and recovery planning above a controller somebody else certified.",
            )}
          </p>
        </div>
      </section>

      <section id="evaluation" className="section section--paper math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("SEVEN ARMS AND EIGHT GATES")}
            title={t("The evaluation is designed to be able to fail, and to say so.")}
            text={t(
              "A single arm proves nothing: any improvement can be explained by a weaker comparator, a leak, or the order of the data. Seven arms remove those explanations one at a time, and the promotion gates are written down before the sealed set is opened.",
            )}
          />
          <div className="evaluation-arms">
            {evaluationArms.map((arm) => (
              <article key={arm.code}>
                <code dir="ltr">{arm.code}</code>
                <strong>{t(arm.definition)}</strong>
                <p>{t(arm.isolates)}</p>
              </article>
            ))}
          </div>

          <div className="promotion-gates">
            <h3>{t("What has to be true before anything is promoted")}</h3>
            <ul>
              {promotionGates.map((gate) => (
                <li key={gate.metric}>
                  <strong>{t(gate.metric)}</strong>
                  <span>{t(gate.condition)}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="galo-figure__note galo-figure__note--boundary">
            <CircleAlert size={16} aria-hidden="true" /> {t(stopRule)}
          </p>
        </div>
      </section>

      <section id="offer" className="section section--white math-anchor-section">
        <div className="shell">
          <SectionHeading
            eyebrow={t("WHAT IT WOULD COST")}
            title={t("Planning hypotheses for a design-partner conversation, and nothing more.")}
            text={t(
              "These are the numbers we would open a conversation with. They are not a price list, not a signed pipeline and not revenue — no partner has agreed to any of them, because there is no partner yet.",
            )}
          />
          <div className="offer-ladder-wrap" role="region" aria-label={t("Planning price hypotheses")} tabIndex={0}>
            <table className="offer-ladder">
              <caption>{t("Design-partner planning hypotheses · not current prices")}</caption>
              <thead>
                <tr>
                  <th scope="col">{t("Offer")}</th>
                  <th scope="col">{t("Planning hypothesis")}</th>
                  <th scope="col">{t("Duration")}</th>
                  <th scope="col">{t("What would have to be proved")}</th>
                </tr>
              </thead>
              <tbody>
                {offerLadder.map((rung) => (
                  <tr key={rung.offer}>
                    <th scope="row">{t(rung.offer)}</th>
                    <td className="is-price" dir="ltr">
                      {t(rung.price)}
                    </td>
                    <td>{t(rung.duration)}</td>
                    <td>{t(rung.proof)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="fit" className="section section--dark math-anchor-section">
        <div className="shell">
          <SectionHeading
            light
            eyebrow={t("WHO THIS IS NOT FOR")}
            title={t("Most plants are not suitable, and saying so early is part of the product.")}
            text={t(
              "An evaluation run on the wrong site produces an uninterpretable result and burns a quarter for both sides. Each line below has a disqualifier attached; any one of them is enough to stop before a contract.",
            )}
          />
          <div className="partner-fit">
            {partnerFit.map((line) => (
              <article key={line.criterion}>
                <Layers3 size={18} aria-hidden="true" />
                <h3>{t(line.criterion)}</h3>
                <p>{t(line.why)}</p>
                <p className="partner-fit__stop">
                  <Ban size={15} aria-hidden="true" /> {t(line.disqualifier)}
                </p>
              </article>
            ))}
          </div>
          <div className="theory-next__links comparison-next">
            <a href={href("/evidence#learning")}>
              <span>{t("The evidence behind the offer")}</span>
              <strong>{t("Sealed results, and the one the system refused")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/vs-llm#landscape")}>
              <span>{t("Who else is in this market")}</span>
              <strong>{t("Twins, rule engines, ontology platforms and robotics stacks")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
            <a href={href("/engine")}>
              <span>{t("If you want the mechanism itself")}</span>
              <strong>{t("How the engine works")}</strong>
              <ArrowRight className="directional-icon" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
