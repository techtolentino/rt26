import bgImgUrl from "../../public/images/ny-x-rohit-tandon-bw.png";
import bgImgHoverUrl from "../../public/images/ny-x-rohit-tandon.png";
import FeatureCard from "@/app/components/FeatureCard";

export default function index() {
  const cardSubtitle =
    "I’m Randy, a creative artist who knows how to code. With a decade in tech, I thrive on delivering clean and thoughtful digital experiences.";
  return (
    <FeatureCard
      url={"/about"}
      backgroundImage={bgImgUrl.src}
      backgroundImageHover={bgImgHoverUrl.src}
      subtitle={cardSubtitle}
      ctaLabel="Learn about me"
    />
  );
}
