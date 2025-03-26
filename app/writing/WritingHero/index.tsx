"use client";
import { Column, Grid } from "../../components/carbon-wrapper";
import { Edit } from "@carbon/icons-react";
import styles from "../../(home)/HomeHero/hero.module.scss";
import { motion } from "framer-motion";

export default function WritingHero() {
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
          <Edit size={48} className="icon-header" />
        </motion.div>
        <h1>Writing</h1>
        <h3 className={styles["hero-subtitle"]}>
          A collection of published articles, blogs, and stories.
        </h3>
      </Column>
    </Grid>
  );
}
