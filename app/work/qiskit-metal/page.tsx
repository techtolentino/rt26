"use client";

import PageSection from "@/app/components/PageSection";
import { Grid, Column } from "@carbon/react";
import styles from "../work-page.module.scss";
import Image from "next/image";
import metalPageBefore from "../../public/images/work/metal/qiskit-metal_before.png";
import metalUiBefore from "../../public/images/work/metal/qiskit-metal_ui.png";
import metalPlanning from "../../public/images/work/metal/qiskit-metal_planning.png";
import designWorkshopImg from "../../public/images/work/metal/qiskit-metal-design-workshop.png";
import splitWorkflowImg from "../../public/images/work/metal/qiskit-metal-split-workflow.png";
import metalExplorationsImg from "../../public/images/work/metal/qiskit-metal-getting-started.png";
import metalFlowsImg from "../../public/images/work/metal/qiskit-metal-getting-started-flows.png";
import metalExplorationsTwoImg from "../../public/images/work/metal/qiskit-metal-getting-started-screens.png";
import uxGuidelinesGif from "../../public/images/work/metal/ux-guidelines.gif";

import Link from "next/link";
import ConnectSection from "@/app/components/ConnectSection";
import QiskitMetalHero from "./QiskitMetalHero";

export default function Page() {
  return (
    <>
      <PageSection>
        <QiskitMetalHero />
      </PageSection>
      <PageSection variant="sm">
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>The opportunity</h3>
            <p className={styles["work-page__p"]}>
              As the Qiskit Metal project began to gain adoption, the core team
              reached out to our digital experiences team for UX design
              consultation.
            </p>

            <p className={styles["work-page__p"]}>
              The user interface offered a lot of functionality, however the
              overall look and feel of the application needed a little love.
              This was the perfect opportunity for design to step in and help
              with the following areas:
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                The usage of color was vast, and the iconography lacked a
                cohesive system
              </li>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                Various elements in the UI competed with one another
              </li>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                Users had to split their workflow between two tools: Jupyter
                Notebooks and the Qiskit Metal UI
              </li>
            </ul>
            <br />
          </Column>
          {/* <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3}>
            <h5>Team overview</h5>
            <ul className={styles["work-page__list"]}>
              <li>4 Designers, only 20% dedicated</li>
              <li>Qiskit Metal had 1 UI Engineer</li>
              <li>3-month engagement</li>
              <li>Collaboration via Figma, Slack, and Mural</li>
            </ul>
          </Column> */}
        </Grid>
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              The Qiskit Metal user interface (before).
            </p>
          </Column>
          <Column sm={4} md={4} lg={8}>
            <Image
              src={metalPageBefore}
              alt={
                "Visualization of Qiskit Metal page before design improvements"
              }
              className={styles["work-page__img"]}
            />
          </Column>
          <Column sm={4} md={4} lg={8}>
            <Image
              src={metalUiBefore}
              alt={
                "Visualization of Qiskit Metal page before design improvements"
              }
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>
        <Grid className={styles["work-page__section--alt"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Roles & contributions</h3>
            <p className={styles["work-page__p"]}>
              Owning this engagement required me to step in as the
              representative for our design team. I relied on leadership from
              our Senior Design Lead, Russell Huffman, but was responsible for
              facilitating communication between the Metal team and ours.
            </p>
            <p className={styles["work-page__p"]}>
              I also asked to pull in two other helpful designers, Terra Banal
              and Tobi Lasisi. Together, we planned a design thinking workshop
              to identify pain points and gain team alignment.
            </p>
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3}>
            <h5>Activities</h5>
            <ul className={styles["work-page__list"]}>
              <li>Low / high fidelity designing</li>
              <li>User testing</li>
              <li>Hills workshop</li>
              <li>Rapid prototyping</li>
              <li>Sponsor user interviews</li>
              <li>Agile iterations</li>
            </ul>
          </Column>
        </Grid>
        {/* <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Process</h3>
            <h5>Design workshop</h5>
            <p className={styles["work-page__p"]}>
              Instead of just 'redesigning the UI', I wanted to ensure that the
              Metal team was aligned on their users’ pain points. This would
              guarantee that designs were influenced by user motivation.
            </p>

            <h5>Solving one challenge at a time</h5>
            <p className={styles["work-page__p"]}>
              Our design workshop was a success. We had 9 people meet over the
              course of 3 half-day sessions, including full participation by the
              Metal team. During that time, we were able to arrive at an
              improved user experience by exposing a few issues in user
              onboarding and the multi-tool workflow.
            </p>

            <h5>Screens and iterations</h5>
            <p className={styles["work-page__p"]}>
              Once we finished our workshop playbacks, I was ready for
              exploration and ideation. Using the Carbon Design System
              components, I proposed several ideas to our Senior Designer. After
              multiple iterations, we were ready to present our designs to the
              Metal team.
            </p>
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3}>
            <h5>Activities</h5>
            <ul className={styles["work-page__list"]}>
              <li>Low / high fidelity designing</li>
              <li>User testing</li>
              <li>Hills workshop</li>
              <li>Rapid prototyping</li>
              <li>Sponsor user interviews</li>
              <li>Agile iterations</li>
            </ul>
          </Column>
        </Grid> */}

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Solution</h3>
            <p className={styles["work-page__p"]}>
              Our design workshop was a success. We had 9 people meet over the
              course of 3 half-day sessions, including full participation by the
              Metal team. During that time, we were able to arrive at an
              improved user experience by exposing a few issues in user
              onboarding and the multi-tool workflow.
            </p>
          </Column>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              After an initial planning session, we facilitated a design
              thinking workshop.
            </p>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={5}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={metalPlanning}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
          <Column
            sm={4}
            md={8}
            lg={5}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={designWorkshopImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
          <Column
            sm={4}
            md={8}
            lg={5}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={splitWorkflowImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <h4>Explorations</h4>
          </Column>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              Started by bringing user flows into Figma and exploring first time
              user experience.
            </p>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={8}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={metalFlowsImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
          <Column
            sm={4}
            md={8}
            lg={8}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={metalExplorationsImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <h4>Screens</h4>
          </Column>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              An improved Getting Started design and a more cohesive user
              interface.
            </p>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={16}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={metalExplorationsTwoImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Deliverables</h3>
            <p className={styles["work-page__p"]}>
              By the end of our collaboration, we were able to provide the
              Qiskit Metal team with UX guidelines and a design system to
              continue building their application. The goal was to ensure that
              their UI engineer had all the necessary resources to implement the
              proposed designs.
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                The UI was cleaned up with improved typography, colors, and
                iconography
              </li>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                With the slideout code editor panel, users can stay within one
                application instead of splitting their workflow into two apps
              </li>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                The onboarding experience allowed users to get to where they
                needed to start, in a simpler experience
              </li>
            </ul>
            <br />
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3} className={styles["work-page__aside"]}>
            <h5 className={styles["work-page__aside-title"]}>Learn more</h5>
            <p>
              Read about the{" "}
              <Link
                href="https://qiskit-community.github.io/qiskit-metal/"
                target="_blank"
                className="text-link"
              >
                Qiskit Metal
              </Link>{" "}
              project by visiting their repository.
            </p>
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              A preview of the UX Guidelines delivered to the Qiskit Metal team.
            </p>
          </Column>
          <Column sm={4} md={8} lg={16}>
            <Image
              src={uxGuidelinesGif}
              alt=""
              className={styles["work-page__img"]}
              unoptimized
            />
          </Column>
        </Grid>
      </PageSection>
      <PageSection variant="md">
        <ConnectSection />
      </PageSection>
    </>
  );
}
