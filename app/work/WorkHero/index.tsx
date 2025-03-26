"use client";
import { Column, Grid } from "../../components/carbon-wrapper";
import { Portfolio } from "@carbon/icons-react";
import styles from "../../(home)/HomeHero/hero.module.scss";
import Image from "next/image";
import latestWorkImg from "../../public/images/latest-work.jpg";
import { motion } from "framer-motion";

export default function WorkHero() {
  return (
    <Grid>
      <Column sm={4} md={8} lg={6}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          <Portfolio size={48} className="icon-header" />
        </motion.div>
        <h1>Work</h1>
        <h3 className={styles["hero-subtitle"]}>
          My experience includes working in digital agencies, global enterprise,
          and open-source projects.
        </h3>
      </Column>
      <Column lg={2}></Column>
      <Column sm={4} md={8} lg={8}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <Image
            src={latestWorkImg}
            alt={"A user interface wireframe from an old idea sketch pad"}
            className={styles["hero__img"]}
            priority
          />
        </motion.div>
      </Column>
    </Grid>
  );
}
