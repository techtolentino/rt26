"use client";

import { Workspace } from "@carbon/icons-react";
import { Grid, Column } from "@carbon/react";
import styles from "../../work-page.module.scss";
import Image from "next/image";
import teamBlock from "../../../public/images/work/whitewater/team_block.jpg";
import { motion } from "framer-motion";

export default function WhitewaterHero() {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={6}
        className={styles["work-page__title-container"]}
      >
        <Workspace size={32} />
        <h1>Whitewater Project</h1>
        <h3>
          A platform focused on improving product team efficiency by
          prioritizing people, practices, and tooling.
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
            src={teamBlock}
            alt={"A team of laptops at a block wooden table"}
            className={styles["work-page__hero-img"]}
            priority
          />
        </motion.div>
      </Column>
    </Grid>
  );
}
