import { Column, Grid } from "@/app/components/carbon-wrapper";
import bgImgUrl from "../../public/images/writing/connect-bw.jpg";
import bgImgHoverUrl from "../../public/images/writing/connect.jpg";
import sunsetImg from "../../public/images/writing/sunset.jpeg";
import sunsetImgBw from "../../public/images/writing/sunset-bw.jpeg";
import FeatureCard from "@/app/components/FeatureCard";
import rebrandImg from "../../public/images/writing/rebranding.jpeg";
import hiddenPowersImg from "../../public/images/writing/hidden-powers.jpeg";
import styles from "./writing-feature.module.scss";
import { ArrowUpRight } from "@carbon/icons-react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <FeatureCard
        title="Creating Authentic Human Connections"
        variant="secondary"
        url="https://www.smashingmagazine.com/2019/08/creating-authentic-human-connections-remote-team/"
        backgroundImage={bgImgUrl.src}
        backgroundImageHover={bgImgHoverUrl.src}
        subtitle="Published by Smashing Magazine"
      />
      <Grid className={styles["writing-feature__tile-group"]}>
        <Column
          sm={4}
          md={8}
          lg={8}
          className={styles["writing-feature__tile"]}
          style={{
            backgroundImage: `url(${hiddenPowersImg.src})`,
          }}
        >
          <Link
            href={
              "https://medium.com/swlh/the-hidden-powers-in-admitting-i-dont-know-a9bd467ad30b"
            }
            className={styles["writing-feature__tile-link"]}
            target="_blank"
          >
            <ArrowUpRight
              size={24}
              className={styles["writing-feature__tile-icon"]}
            />
            <h3 className={styles["writing-feature__tile-title"]}>
              The Hidden Powers in Admitting “I Don’t Know”
            </h3>
            <p className={styles["writing-feature__tile-byline"]}>
              Published on The Startup
            </p>
          </Link>
        </Column>
        <Column
          sm={4}
          md={8}
          lg={8}
          className={styles["writing-feature__tile--dark"]}
          style={{
            backgroundImage: `url(${rebrandImg.src})`,
          }}
        >
          <Link
            href={
              "https://bettermarketing.pub/how-to-design-your-own-rebrand-for-free-fcd1d5b22977"
            }
            className={styles["writing-feature__tile-link"]}
            target="_blank"
          >
            <ArrowUpRight
              size={24}
              className={styles["writing-feature__tile-icon"]}
            />
            <h3 className={styles["writing-feature__tile-title"]}>
              How to design your own rebrand for free
            </h3>
            <p className={styles["writing-feature__tile-byline"]}>
              Published on Better Marketing
            </p>
          </Link>
        </Column>
      </Grid>
      <FeatureCard
        title="Book of Ran"
        variant="secondary"
        url="https://bookofran.substack.com"
        backgroundImage={sunsetImgBw.src}
        backgroundImageHover={sunsetImg.src}
        subtitle="Personal blog on substack.com"
      />
    </>
  );
}
