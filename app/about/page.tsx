import PageSection from "../components/PageSection";
import type { Metadata } from "next";
import AboutStory from "./AboutStory";
import ConnectSection from "../components/ConnectSection";
import AboutHero from "./AboutHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "A faithful believer, husband, dad, designer, developer, creative, and husky owner.",
};

export default function About() {
  return (
    <>
      <PageSection>
        <AboutHero />
      </PageSection>
      <AboutStory />
      <PageSection variant="md">
        <ConnectSection />
      </PageSection>
    </>
  );
}
