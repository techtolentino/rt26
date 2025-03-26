"use client";

import PageSection from "@/app/components/PageSection";
import { Grid, Column } from "@carbon/react";
import styles from "../work-page.module.scss";
import Image from "next/image";
import slackImg from "../../public/images/work/whitewater/seg.png";
import githubImg from "../../public/images/work/whitewater/ghe.png";
import whitewaterImg from "../../public/images/work/whitewater/whitewater.png";
import toolsImg from "../../public/images/work/whitewater/tools.png";

import Link from "next/link";
import ConnectSection from "@/app/components/ConnectSection";
import WhitewaterHero from "./WhitewaterHero";

export default function Page() {
  return (
    <>
      <PageSection>
        <WhitewaterHero />
      </PageSection>
      <PageSection variant="sm">
        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>The opportunity</h3>
            <p className={styles["work-page__p"]}>
              Imagine your company has thousands of product teams worldwide, and
              each of them use their own toolchains and code version control
              systems.
            </p>
            <p className={styles["work-page__p"]}>Do you see the problem?</p>
            <p className={styles["work-page__p"]}>
              At scale, consider the countless missed opportunities at
              cross-collaboration, reusability, and knowledge sharing, just
              because teams didn’t have a solid, unified set of tools and
              practices.
            </p>
            <p className={styles["work-page__p"]}>
              This is what we set out to solve. With this in mind, our team
              worked endlessly to ask and answer the following questions:
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                How might we enable teams to improve their workflows?
              </li>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                What can we do to help business units communicate and
                collaborate better?
              </li>
              <li>
                <span className={styles["work-page__custom-list__issue"]}>
                  &#9744;
                </span>
                How can we ignite a culture of sharing, reusability, and best
                practices, that would benefit the company as a whole?
              </li>
            </ul>
            <br />
          </Column>
          <Column sm={0} md={0} lg={1}></Column>
          <Column sm={4} md={8} lg={7}>
            <p className={styles["work-page__img-caption"]}>
              Having different tools and workflows for each team created silos
              and hindered company-wide collaboration.
            </p>
            <Image
              src={toolsImg}
              alt="Slack care package with socks and stickers"
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section--alt"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Roles & contributions</h3>
            <p className={styles["work-page__p"]}>
              This was the first real product team I joined. My role as a{" "}
              <strong>Front-end developer</strong> was to build the UI and
              contribute to our team design system, support best practices
              learning sessions, and capture user needs in our backlog.
            </p>
            <p className={styles["work-page__p"]}>
              However, since I was fresh out of Design Camp, I loved taking
              assignments that allowed me to make significant contributions to a
              variety of design thinking activities, especially with user
              interviews and testing.
            </p>
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3}>
            <h5>Contributions</h5>
            <ul className={styles["work-page__list"]}>
              <li>Front end development</li>
              <li>User testing</li>
              <li>Hills workshop</li>
              <li>Rapid prototyping</li>
              <li>Sponsor user interviews</li>
              <li>Story writing</li>
            </ul>
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Solution</h3>
            <p className={styles["work-page__p"]}>
              The Whitewater platform started as a web application that served
              as a one stop shop for tools and practices. In the end, the
              project turned into a full ecosystem centered around tool adoption
              and empowering workflows.
            </p>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                Teams were able to access and modernize toolchains through
                simplified licensing workstreams
              </li>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                We delivered a field-guide catalog around best practices
              </li>
              <li>
                <span className={styles["work-page__custom-list__check"]}>
                  &#9745;
                </span>
                Provided workshops to teams around the world to boost
                collaboration
              </li>
            </ul>
            <br />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              The Whitewater Platform gave teams access to modernized tools with
              best practices.
            </p>
          </Column>
          <Column
            sm={4}
            md={8}
            lg={8}
            className={styles["work-page__img-container"]}
          >
            <Image src={slackImg} alt="" className={styles["work-page__img"]} />
          </Column>
          <Column
            sm={4}
            md={8}
            lg={8}
            className={styles["work-page__img-container"]}
          >
            <Image
              src={githubImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={8} lg={16}>
            <p className={styles["work-page__img-caption"]}>
              A preview of the Whitewater tools catalog.
            </p>
          </Column>
          <Column sm={4} md={8} lg={16}>
            <Image
              src={whitewaterImg}
              alt=""
              className={styles["work-page__img"]}
            />
          </Column>
        </Grid>

        <Grid className={styles["work-page__section"]}>
          <Column sm={4} md={6} lg={8}>
            <h3>Impact</h3>
            <ul className={styles["work-page__custom-list"]}>
              <li>
                <span className={styles["work-page__custom-list__plus"]}>
                  +
                </span>
                Improved communication and productivity by onboarding teams onto
                Slack Enterprise Grid
              </li>
              <li>
                <span className={styles["work-page__custom-list__plus"]}>
                  +
                </span>
                Engineering teams across the org migrated onto GitHub
                Enterprise, creating a culture of inner-source
              </li>
            </ul>
          </Column>
          <Column sm={0} md={0} lg={5}></Column>
          <Column sm={4} md={8} lg={3} className={styles["work-page__aside"]}>
            <h5 className={styles["work-page__aside-title"]}>
              Influencing Slack Enterprise
            </h5>
            <p>
              Check out this{" "}
              <Link
                href="https://medium.com/design-ibm/listen-to-the-wild-ducks-how-ibm-adopted-slack-2bcfd3732680"
                target="_blank"
                className="text-link"
              >
                Medium story
              </Link>{" "}
              written by our Executive sponsor, Bill Higgins, who tells the
              story of Whitewater’s strong partnership with Slack.
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
