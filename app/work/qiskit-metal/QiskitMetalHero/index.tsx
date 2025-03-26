"use client";

import { Chip } from "@carbon/icons-react";
import { Grid, Column } from "@carbon/react";
import styles from "../../work-page.module.scss";
import Image from "next/image";
import metalGuides from "../../../public/images/work/metal/metal-guides.jpeg";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={6}
        className={styles["work-page__title-container"]}
      >
        <Chip size={32} />
        <h1>Qiskit Metal</h1>
        <h3>
          Using design thinking activities to find pain points and improve the
          experience for quantum chip designers.
        </h3>
      </Column>
      <Column lg={2}></Column>
      <Column sm={4} md={8} lg={8}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <Image
            src={metalGuides}
            alt={"A preview of the Qiskit Metal UX guides"}
            className={styles["work-page__hero-img"]}
            priority
          />
        </motion.div>
      </Column>
    </Grid>
  );
}
