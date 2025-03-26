"use client";
import { Column, Grid } from "../../components/carbon-wrapper";
import { UserFeedback } from "@carbon/icons-react";
import styles from "../../(home)/HomeHero/hero.module.scss";
import Image from "next/image";
import famOutlineImg from "../../public/images/fam-outline.png";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <Grid>
      <Column sm={4} md={6} lg={6}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          <UserFeedback size={48} className="icon-header" />
        </motion.div>
        <h1>About</h1>
        <h3 className={styles["hero-subtitle"]}>
          A faithful believer, husband, dad, designer, developer, creative, and
          husky owner.
        </h3>
      </Column>
      <Column sm={0} md={0} lg={4}></Column>
      <Column sm={3} md={4} lg={6}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <Image
            src={famOutlineImg}
            alt={"A sketched outline of our family"}
            className={styles["hero__img"]}
            priority
          />
        </motion.div>
      </Column>
    </Grid>
  );
}
