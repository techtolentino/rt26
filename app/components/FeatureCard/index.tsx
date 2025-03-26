"use client";

import { useState, useEffect } from "react";
import AppButton from "@/app/components/AppButton";
import { Grid, Column } from "../../components/carbon-wrapper";
import styles from "./feature-card.module.scss";
import Link from "next/link";
import { ArrowUpRight, SatelliteRadar } from "@carbon/icons-react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  subtitle?: string;
  variant?: "primary" | "secondary";
  url: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  backgroundImage: string;
  backgroundImageHover: string;
  ctaLabel?: string;
}

export default function FeatureCard({
  title,
  subtitle,
  variant = "primary",
  onMouseEnter,
  onMouseLeave,
  backgroundImage,
  backgroundImageHover,
  url,
  ctaLabel,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(backgroundImage);
    preloadImage(backgroundImageHover);
  }, [backgroundImage, backgroundImageHover]);

  if (variant === "primary") {
    return (
      <Grid
        className={`${styles["feature-card__container"]} ${
          isHovered ? styles.hovered : ""
        }`}
        style={{
          backgroundImage: `url(${
            isHovered ? backgroundImageHover : backgroundImage
          })`,
        }}
      >
        <Column
          sm={4}
          md={7}
          lg={6}
          className={styles["feature-card__content"]}
        >
          <h2 className={styles["feature-card__title"]}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              <SatelliteRadar className="icon-white" size={48} />
            </motion.div>{" "}
            Greetings
          </h2>
          <h4 className={styles["feature-card__content-description"]}>
            {subtitle}
          </h4>
          <AppButton
            label={ctaLabel}
            url={url}
            variant="secondary"
            onMouseEnter={() => {
              setIsHovered(true);
              if (onMouseEnter) onMouseEnter();
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              if (onMouseLeave) onMouseLeave();
            }}
          />
        </Column>
      </Grid>
    );
  } else {
    return (
      <Grid
        className={`${styles["feature-card-secondary"]} ${
          isHovered ? styles.hovered : ""
        }`}
        style={{
          backgroundImage: `url(${
            isHovered ? backgroundImageHover : backgroundImage
          })`,
        }}
      >
        <Column
          sm={4}
          md={7}
          lg={8}
          className={styles["feature-card-secondary__col"]}
        >
          <Link
            className={styles["feature-card-secondary__link"]}
            href={url}
            target="_blank"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            rel="noopener noreferrer"
          >
            <h2 className={styles["feature-card-secondary__link-title"]}>
              <ArrowUpRight /> {title}
            </h2>
            <h4 className={styles["feature-card-secondary__link-subtitle"]}>
              {subtitle}
            </h4>
          </Link>
        </Column>
      </Grid>
    );
  }
}
