import { Qiskit } from "@carbon/icons-react";
import { Grid, Column } from "@carbon/react";
import styles from "../../work-page.module.scss";
import Image from "next/image";
import hummingbirdImg from "../../../public/images/work/1xp/hummingbird.jpg";
import { motion } from "framer-motion";

export default function QuantumWebHero() {
  return (
    <Grid>
      <Column
        sm={4}
        md={6}
        lg={6}
        className={styles["work-page__title-container"]}
      >
        <Qiskit size={32} />
        <h1>IBM Quantum Web</h1>
        <h3>
          A user-friendly landing page that allows visitors to explore IBM’s
          quantum offerings, stay updated on the roadmap, experiment with SDKs,
          register for industry events, and more.
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
            src={hummingbirdImg}
            alt={"A close up of the IBM Quantum Hummingbird chip"}
            className={styles["work-page__hero-img"]}
            priority
          />
        </motion.div>
      </Column>
    </Grid>
  );
}
