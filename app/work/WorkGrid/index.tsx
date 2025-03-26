"use client";

import ContentCard from "@/app/components/ContentCard";
import { Grid, Column } from "../../components/carbon-wrapper";
import { Chip, Qiskit, Workspace, Chat } from "@carbon/icons-react";
import Link from "next/link";
import styles from "./work-grid.module.scss";
import contentCardStyles from "../../components/ContentCard/content-card.module.scss";
import AppButton from "@/app/components/AppButton";

const workItems = [
  {
    icon: <Qiskit size={24} />,
    eyebrow: "Marketing",
    title: "IBM Quantum Web",
    description:
      "As a Senior UX Engineer for the IBM Quantum Web team, I helped create a centralized starting point for anyone interested in quantum computing. My role involved building a user-friendly experience that allows visitors to explore IBM’s offerings, stay updated on the roadmap, experiment with SDKs, and register for industry events.",
    url: "/work/ibm-quantum-web",
    label: "Learn about IBM Quantum Web",
  },
  {
    icon: <Workspace size={24} />,
    eyebrow: "Enablement",
    title: "Whitewater",
    description:
      "For the Whitewater Project, I used design thinking and front-end development to play a key role in IBM’s digital transformation initiative. Our platform focused on improving product team efficiency by prioritizing people, practices, and tooling. This experience allowed me to have meaningful change at the global level.",
    url: "/work/whitewater-project",
    label: "Learn about Whitewater",
  },
  {
    icon: <Chip size={24} />,
    eyebrow: "Hardware",
    title: "Qiskit Metal",
    description:
      "The Qiskit Metal team had created a powerful tool that enabled the open source community to design of superconducting quantum chips and devices. They approached our design team for UX consultation, and I was fortunate to take lead of the project.",
    url: "/work/qiskit-metal",
    label: "Learn about Qiskit Metal",
  },
];

export default function index() {
  return (
    <Grid className={styles["work-grid"]} condensed>
      {workItems.map((item) => (
        <Column sm={4} md={8} lg={8} key={item.title}>
          <ContentCard {...item} />
        </Column>
      ))}
      <Column sm={0} md={0} lg={8}>
        <Link
          href="mailto:randytolentino@protonmail.com"
          className={contentCardStyles["content-card--alt"]}
        >
          <Chat size={24} />
          <span className={contentCardStyles["content-card__eyebrow"]}>
            Let’s chat
          </span>
          <h3 className={contentCardStyles["content-card__title"]}>
            There’s more
          </h3>
          <p className={contentCardStyles["content-card__description"]}>
            Get in touch to discuss the following work experiences:
          </p>
          <ul>
            <li>
              How a design pairing strategy led to a $450k contract renewal
            </li>
            <li>
              User interviews that lead to an improved experience for professors
            </li>
            <li>
              Design thinking workshops I helped facilitate for Code2College
            </li>
            <li>The Design Lead role I had on the a security design team</li>
          </ul>
        </Link>
      </Column>
      <Column sm={4} md={8} lg={0}>
        <div className={contentCardStyles["content-card--alt"]}>
          <Chat size={24} />
          <span className={contentCardStyles["content-card__eyebrow"]}>
            Let’s chat
          </span>
          <h3 className={contentCardStyles["content-card__title"]}>
            There’s more
          </h3>
          <p className={contentCardStyles["content-card__description"]}>
            Get in touch to discuss the following work experiences:
          </p>
          <ul>
            <li>
              How a design pairing strategy led to a $450k contract renewal
            </li>
            <li>
              User interviews that lead to an improved experience for professors
            </li>
            <li>
              Design thinking workshops I helped facilitate for Code2College
            </li>
            <li>The Design Lead role I had on the a security design team</li>
          </ul>
          <br />
          <AppButton
            variant="secondary"
            url="mailto:randytolentino@protonmail.com"
            label="Contact me"
          />
        </div>
      </Column>
    </Grid>
  );
}
