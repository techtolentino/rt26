"use client";

import PageSection from "@/app/components/PageSection";
import { Grid, Column } from "@carbon/react";
import styles from "../work-page.module.scss";
import Image from "next/image";
import qiskitTextbookImg from "../../public/images/work/1xp/qiskit-textbook.png";
import quantumHomepageImg from "../../public/images/work/1xp/ibm-quantum-homepage.png";
import qiskitDocsImg from "../../public/images/work/1xp/qiskit-docs.png";
import qiskitSummerSchoolImg from "../../public/images/work/1xp/qiskit-global-summer-school.png";
import buttonsGif from "../../public/images/work/1xp/1xp-buttons.gif";
import componentsGif from "../../public/images/work/1xp/1xp-components.gif";
import oneXPWebGif from "../../public/images/work/1xp/1xp.gif";

import Link from "next/link";
import ConnectSection from "@/app/components/ConnectSection";
import QuantumWebHero from "./QuantumWebHero";

export default function Page() {
  return (
    <>
      <PageSection>
        <QuantumWebHero />
      </PageSection>
      <PageSection variant="sm">
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>The opportunity</h3>
            <p className={styles["work-page__p"]}>
              A common challenge that many large businesses face is having one
              mission, but multiple teams building out their own unique
              experiences.
            </p>
            <p className={styles["work-page__p"]}>
              In 2022, IBM Quantum had numerous projects in flight, which
              inadvertently led to a disjointed user journey. Through user and
              stakeholder feedback, the following pain points were identified:
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                The quantum web presence was overwhelming, with a lot of pieces
                in various places online
              </li>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                The community was confused about what was considered IBM Quantum
                'business' versus 'open source'
              </li>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                Users, clients, and partners experienced disconnected user
                journeys
              </li>
            </ul>
            <br />
          </Column>
        </Grid>
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              Having different user interfaces created a confusing user
              experience.
            </p>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <Link
              href={qiskitDocsImg.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["work-page__img-tile"]}
            >
              <Image
                src={qiskitDocsImg}
                alt={"The landing page of the Qiskit Docs project"}
                className={styles["work-page__img"]}
              />
            </Link>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <Link
              href={quantumHomepageImg.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["work-page__img-tile"]}
            >
              <Image
                src={quantumHomepageImg}
                alt={"A unique theme and layout from our Marketing site"}
                className={styles["work-page__img"]}
              />
            </Link>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <Link
              href={qiskitTextbookImg.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["work-page__img-tile"]}
            >
              <Image
                src={qiskitTextbookImg}
                alt={"The Qiskit Textbook had different typography treatments"}
                className={styles["work-page__img"]}
              />
            </Link>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <Link
              href={qiskitSummerSchoolImg.src}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["work-page__img-tile"]}
            >
              <Image
                src={qiskitSummerSchoolImg}
                alt={"Qiskit Summer School page in its own style and layout"}
                className={styles["work-page__img"]}
              />
            </Link>
          </Column>
        </Grid>
        <Grid className={styles["work-page__section--alt"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>My roles</h3>
            <p className={styles["work-page__p"]}>
              My responsibilities as a <strong>technical lead</strong> involve
              taking requirements from stakeholders, evaluating feasiblity, then
              transforming requests into development tasks in our backlog. With
              limited engineering resources, I collaborate directly with our
              product owner to ensure the proper prioritization is given to each
              workstream.
            </p>
            <p className={styles["work-page__p"]}>
              As an <strong>UX Engineer</strong>, my goal is to work in lockstep
              with our senior designers to come up with scalable, elegant
              solutions. In this capacity, I aim to leverage our design system
              through reusability and componentization. Once designs are
              finalized, I work with one other developer to implement new
              features, coordinate releases, and maintain the overall health of
              our codebase.
            </p>
            <br />
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3}>
            <h5>Contributions</h5>
            <ul className={styles["work-page__list"]}>
              <li>Front end development</li>
              <li>Rapid prototyping</li>
              <li>Design thinking workshop</li>
              <li>Journey mapping</li>
              <li>User stories</li>
              <li>A/B testing</li>
              <li>Pair designing</li>
              <li>Continuous delivery</li>
            </ul>
          </Column>
        </Grid>
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              Building Figma designs into real interactive components allowed us
              to test early on and gain team alignment.
            </p>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={8}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={buttonsGif}
              alt="Animation showing how we built components in the browser to test and interact with"
              className={styles["work-page__img"]}
              unoptimized
            />
          </Column>
          <Column
            sm={4}
            md={8}
            lg={8}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={componentsGif}
              alt="Animation showing more components displayed in the browser"
              className={styles["work-page__img"]}
              unoptimized
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Solution</h3>
            <p className={styles["work-page__p"]}>
              Our approach to having the new web experience ready by December
              involved a lot of prioritization and delivering MVP experiences.
              This meant that we had to release only the most critical parts of
              the new experience, at first, then once we launched, we could
              freely release updates and enhancements.
            </p>
            <p className={styles["work-page__p"]}>
              The new IBM Quantum presented a unified experience across several
              user touchpoints: the landing page, our Learning site, our
              Platform, and the documentation site.
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                Consolidated a lot of duplicate content, resulting in a more
                streamlined experience
              </li>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                Clarified distinction between IBM Quantum offerings and our open
                source offerings
              </li>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                Created a more cohesive user journey, where clients and partners
                felt connected to the brand
              </li>
            </ul>
            <br />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              After 6 months, the team released the all new IBM Quantum website.
            </p>
          </Column>
          <Column sm={4} md={8} lg={16}>
            <Image
              src={oneXPWebGif}
              alt="A screen capture of the all new IBM Quantum landing site"
              className={styles["work-page__img"]}
              unoptimized
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Impact</h3>
            <p>
              The success of the new experience is evident in a variety of ways:
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__plus"]}>
                  +
                </span>
                An increase in conversions from unique website visits to logins
                or signups
              </li>
              <li>
                <span className={styles["work-page__custom-list__plus"]}>
                  +
                </span>
                Improved monthly average of usage for our Platform
              </li>
              <li>
                <span className={styles["work-page__custom-list__plus"]}>
                  +
                </span>
                Red Dot Design Award for Brands & Communication Design
              </li>
            </ul>
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3} className={styles["work-page__aside"]}>
            <h5 className={styles["work-page__aside-title"]}>Check it out</h5>
            <p>
              Visit the{" "}
              <Link
                href="https://ibm.com/quantum"
                target="_blank"
                className="text-link"
              >
                IBM Quantum
              </Link>{" "}
              website to see what we’ve built.
            </p>
          </Column>
        </Grid>
      </PageSection>
      <PageSection variant="md">
        <ConnectSection />
      </PageSection>
    </>
  );
}
