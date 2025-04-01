import { Column, Grid } from "../components/carbon-wrapper";
import PageSection from "../components/PageSection";
import { Metadata } from "next";
import WorkGrid from "./WorkGrid";
import ConnectSection from "../components/ConnectSection";
import { Portfolio } from "@carbon/icons-react";
import styles from "../(home)/HomeHero/hero.module.scss";
import Image from "next/image";
import latestWorkImg from "../public/images/latest-work.jpg";
import WorkHero from "./WorkHero";

export const metadata: Metadata = {
  title: "Work by",
  description:
    "My experience includes working in digital agencies, global enterprise, and open-source projects.",
};

export default function Work() {
  return (
    <>
      <PageSection>
        <ConnectSection />
      </PageSection>
    </>
  );
}
