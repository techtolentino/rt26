import HomeAbout from "./HomeAbout";
import HomeTiles from "./HomeTiles";
import type { Metadata } from "next";
import HomeExperience from "./HomeExperience";
import ConnectSection from "../components/ConnectSection";
import PageSection from "../components/PageSection";

export const metadata: Metadata = {
  title: "The Portfolio of",
  description: "Welcome to the portfolio of Randy Tolentino.",
};

export default function Page() {
  return (
    <>
      <PageSection variant="md"></PageSection>
    </>
  );
}
