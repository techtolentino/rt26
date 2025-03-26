import PageSection from "@/app/components/PageSection";
import { Grid, Column } from "../../components/carbon-wrapper";
import styles from "./hero.module.scss";
import { SatelliteRadar } from "@carbon/icons-react";

export default function HomeHero() {
  return (
    <PageSection>
      <Grid>
        <Column sm={4} md={4} lg={7}>
          <SatelliteRadar size={48} className="icon-header" />
          <h1>Greetings</h1>
          <h3 className={styles["hero-subtitle"]}>
            I’m Randy, an artist, maker, and creative who knows how to code.
          </h3>
        </Column>
      </Grid>
    </PageSection>
  );
}
