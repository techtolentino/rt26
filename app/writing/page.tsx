import PageSection from "../components/PageSection";
import WritingFeature from "./WritingFeature";
import type { Metadata } from "next";
import ConnectSection from "../components/ConnectSection";
import WritingHero from "./WritingHero";

export const metadata: Metadata = {
  title: "Written by",
  description: "A collection of published articles, blogs, and stories.",
};

export default function Writing() {
  return (
    <>
      <PageSection>
        <ConnectSection />
      </PageSection>
    </>
  );
}
