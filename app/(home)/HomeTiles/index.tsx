import { Grid, Column } from "../../components/carbon-wrapper";
import Link from "next/link";
import styles from "./home-tiles.module.scss";
import { Portfolio, Edit } from "@carbon/icons-react";

export default function index() {
  return (
    <Grid className={styles["home-tiles"]}>
      <Column sm={4} md={4} lg={8} className={styles["home-tiles__item"]}>
        <Link href="/work" className={styles["home-tiles__link"]}>
          <Portfolio size={24} />
          <h3 className={styles["home-tiles__link-title"]}>Work</h3>
        </Link>
      </Column>
      <Column sm={4} md={4} lg={8} className={styles["home-tiles__item"]}>
        <Link href="/writing" className={styles["home-tiles__link"]}>
          <Edit size={24} />
          <h3>Writing</h3>
        </Link>
      </Column>
    </Grid>
  );
}
