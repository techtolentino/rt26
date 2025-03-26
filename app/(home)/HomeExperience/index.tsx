"use client";

import { Column, Grid } from "@/app/components/carbon-wrapper";
import styles from "./home-experience.module.scss";
import Image from "next/image";
import logoIBM from "../../public/images/logos/logo-IBM.png";
import logoAHA from "../../public/images/logos/logo-AHA.png";
import logoBetterMarketing from "../../public/images/logos/logo-Better-Marketing.png";
import logoBostonsChildrens from "../../public/images/logos/logo-Bostons-Childrens.png";
import logoCareerVillage from "../../public/images/logos/logo-Career-Village.png";
import logoCityOfHope from "../../public/images/logos/logo-City-of-Hope.png";
import logoCode2College from "../../public/images/logos/logo-Code-2-College.png";
import logoCodebuddies from "../../public/images/logos/logo-Codebuddies.png";
import logoHoneypot from "../../public/images/logos/logo-Honeypot.png";
import logoParkinsonsFoundation from "../../public/images/logos/logo-Parkinsons-Foundation.png";
import logoSmashingMagazine from "../../public/images/logos/logo-Smashing-Magazine.png";
import logoTheStartup from "../../public/images/logos/logo-The-Startup.png";
import { useEffect, useState } from "react";

const logos = [
  { src: logoIBM, alt: "IBM", roles: ["development", "design", "strategy"] },
  {
    src: logoSmashingMagazine,
    alt: "Smashing Magazine",
    roles: ["writing"],
  },
  {
    src: logoCityOfHope,
    alt: "City of Hope",
    roles: ["development", "design", "strategy"],
  },
  { src: logoTheStartup, alt: "The Startup", roles: ["writing"] },
  { src: logoAHA, alt: "American Heart Association", roles: ["development"] },
  { src: logoCodebuddies, alt: "CodeBuddies", roles: ["writing"] },
  { src: logoCareerVillage, alt: "Career Village", roles: ["mentorship"] },
  {
    src: logoBetterMarketing,
    alt: "Better Marketing",
    roles: ["writing"],
  },
  {
    src: logoBostonsChildrens,
    alt: "Boston’s Children",
    roles: ["development"],
  },
  { src: logoHoneypot, alt: "Honeypot.io", roles: ["writing"] },
  {
    src: logoCode2College,
    alt: "Code2College",
    roles: ["design", "mentorship"],
  },
  {
    src: logoParkinsonsFoundation,
    alt: "Parkinson’s Foundation",
    roles: ["development"],
  },
];

export default function index() {
  const [activeTag, setActiveTag] = useState("");

  const filterByTag = (tag: string) => {
    setActiveTag(tag);
  };

  const getLinkClassName = (tag: string) => {
    if (activeTag === tag) {
      return `${styles["home-experience__cta--active"]}`;
    }

    return `${styles["home-experience__cta"]}`;
  };

  const getTagContainerClassName = (tags: string[]) => {
    if (activeTag !== "") {
      if (!tags.includes(activeTag)) {
        return `${styles["home-experience__img-tile--inactive"]}`;
      } else {
        return `${styles["home-experience__img-tile--active"]}`;
      }
    }

    return `${styles["home-experience__img-tile"]}`;
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!(target.tagName === "SPAN")) {
        setActiveTag("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className={styles["home-experience"]}>
      <Grid>
        <Column sm={4} md={5} lg={6}>
          <h2>Collaboration</h2>
          <h4>
            I’ve been fortunate to play significant roles on product and service
            teams from various industries. Through{" "}
            <span
              className={getLinkClassName("development")}
              data-attr="development"
              onClick={() => filterByTag("development")}
            >
              development
            </span>
            ,{" "}
            <span
              className={getLinkClassName("design")}
              onClick={() => filterByTag("design")}
            >
              design thinking,
            </span>{" "}
            <span
              className={getLinkClassName("strategy")}
              onClick={() => filterByTag("strategy")}
            >
              strategy,
            </span>{" "}
            <span
              className={getLinkClassName("writing")}
              onClick={() => filterByTag("writing")}
            >
              published articles,
            </span>{" "}
            and{" "}
            <span
              className={getLinkClassName("mentorship")}
              onClick={() => filterByTag("mentorship")}
            >
              mentorship,
            </span>{" "}
            working with these organizations has been a highlight of my career
            journey.
          </h4>
        </Column>
      </Grid>
      <Grid className={styles["home-experience__img-grid"]} condensed>
        {logos.map((item) => (
          <Column
            sm={2}
            md={2}
            lg={4}
            key={item.alt}
            className={getTagContainerClassName(item.roles)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              className={styles["home-experience__img"]}
            />
          </Column>
        ))}
      </Grid>
    </section>
  );
}
