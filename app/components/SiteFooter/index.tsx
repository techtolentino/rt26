"use client";

import { Grid, Column } from "../carbon-wrapper";
import styles from "./site-footer.module.scss";
import Link from "next/link";

export default function index() {
  return (
    <footer className={styles["site-footer"]}>
      <Grid>
        <Column sm={3} md={4} lg={4}>
          <Link href="/" className={styles["site-footer__link"]}>
            Randy Tolentino | © {new Date().getFullYear()}
          </Link>
          <p>UX Designer & Engineer</p>
        </Column>
      </Grid>
    </footer>
  );
}
