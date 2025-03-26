import QuoteCard from "../QuoteCard";
import slackImg from "../../public/images/logos/slack.png";
import { Column, Grid } from "../carbon-wrapper";
import styles from "./connect-section.module.scss";
import Link from "next/link";
import BackToTopSection from "../BackToTopSection";

const copy =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo quae quod mollitia animi? Laborum nemo perspiciatis, dignissimos quo nihil at excepturi expedita dicta quidem ipsum aspernatur quasi doloribus quas?";

export default function index() {
  return (
    <>
      <Grid className={styles["connect-section"]}>
        <Column sm={4} md={6} lg={6}>
          <h3>I’m here to help</h3>
          <p>
            My inbox is open for anyone looking to explore potential
            collaborations. Whether you’re interested in discussing design or
            development, have speaking or writing opportunities, or are looking
            for mentorship, feel free to{" "}
            <Link
              href="mailto:randytolentino@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["connect-section__link"]}
            >
              message me
            </Link>
            .
          </p>
          <BackToTopSection className="back-to-top" />
        </Column>
      </Grid>
    </>
  );
}
