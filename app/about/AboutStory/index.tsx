"use client";

import FeatureImage from "@/app/components/FeatureImage";
import { Grid, Column } from "../../components/carbon-wrapper";
import styles from "./about-story.module.scss";
import cityImg from "../../public/images/city.jpg";
import penImg from "../../public/images/pen.jpeg";
import dogImg from "../../public/images/dog.jpeg";
import famImg from "../../public/images/fam.jpeg";
import famAtWork from "../../public/images/fam-at-work.jpeg";
import breadImg from "../../public/images/bread.jpeg";
import trainImg from "../../public/images/train.jpeg";
import churchImg from "../../public/images/church.jpeg";

export default function index() {
  return (
    <>
      <Grid>
        <Column sm={4} md={8} lg={8}>
          <p className={styles["about-story__copy"]}>
            I grew up all over the map.
          </p>
          <p className={styles["about-story__copy"]}>
            As a military kid, I’ve had the privilege to call many places home
            throughout my life. Last time I counted, it was well over 16 cities
            that we lived in since childhood. The constant movement gave me
            perspective and a deep appreciation for people, cultures, and
            different environments.
          </p>
          <p className={styles["about-story__copy"]}>
            I met my wife in December of ’06 and my world changed for the
            better. We started our family in San Diego. The earlier chapters of
            my career were written in the non-profit education sector. Then as
            our family grew, I heard the calling to make a career pivot and
            transition into a whole new industry.
          </p>
        </Column>
      </Grid>
      <Grid className={styles["about-story"]}>
        <Column sm={4} md={8} lg={8}>
          <p className={styles["about-story__copy"]}>
            In 2014, I applied to a software engineering bootcamp in Austin.
            After getting accepted, my wife and I uprooted our family from
            California and headed to Texas. There, I learned to code and
            established a whole new career. It was there that I discovered the
            world of software design and my interest piqued.
          </p>{" "}
          <p className={styles["about-story__copy"]}>
            Since then, I’ve held various roles such as Front-end Developer, UX
            Engineer, Design Lead, Tech Lead, and mentor. It’s been a humbling
            and incredible ride; Still, I’m motivated by new technologies and
            continuing to help people through digital solutions.
          </p>
          <p className={styles["about-story__copy"]}>
            Today, I live in New York with my wife, our two sons, and our
            constantly shedding husky.
          </p>
          <br />
        </Column>
        <Column sm={0} md={1} lg={5}></Column>
        <Column sm={4} md={8} lg={3}>
          <h5>Industry skillset</h5>
          <ul className={styles["about-story__list"]}>
            <li>Front end development</li>
            <li>UX / Visual design</li>
            <li>Agile methodologies</li>
            <li>Design thinking</li>
            <li>Workshop facilitation</li>
            <li>Project management</li>
            <li>Mentorship and leadership</li>
          </ul>
        </Column>
      </Grid>

      <Grid condensed className={styles["about-story__img-grid"]}>
        <Column sm={4} md={8} lg={8}>
          <FeatureImage imgData={famAtWork} />
        </Column>
        <Column sm={4} md={8} lg={8}>
          <FeatureImage imgData={dogImg} />
        </Column>
        <Column sm={4} md={8} lg={4}>
          <FeatureImage imgData={churchImg} />
        </Column>
        <Column sm={4} md={8} lg={4}>
          <FeatureImage imgData={penImg} />
        </Column>
        <Column sm={4} md={8} lg={4}>
          <FeatureImage imgData={trainImg} />
        </Column>
        <Column sm={4} md={8} lg={4}>
          <FeatureImage imgData={breadImg} />
        </Column>
        <Column sm={4} md={8} lg={8}>
          <FeatureImage imgData={cityImg} />
        </Column>
        <Column sm={4} md={8} lg={8}>
          <FeatureImage imgData={famImg} />
        </Column>
      </Grid>
    </>
  );
}
