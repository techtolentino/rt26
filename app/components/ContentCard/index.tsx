"use client";

import styles from "./content-card.module.scss";
import Link from "next/link";
import { ReactElement } from "react";
import AppButton from "../AppButton";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  url: string;
  icon: ReactElement;
  label?: string;
}

export default function index({
  eyebrow,
  title,
  description,
  url,
  icon,
  label,
}: Props) {
  return (
    <>
      <Link href={url} className={styles["content-card"]}>
        {icon}
        <span className={styles["content-card__eyebrow"]}>{eyebrow}</span>
        <h3 className={styles["content-card__title"]}>{title}</h3>
        <p className={styles["content-card__description"]}>{description}</p>
      </Link>
      <div className={styles["content-card--mobile"]}>
        {icon}
        <span className={styles["content-card__eyebrow"]}>{eyebrow}</span>
        <h3 className={styles["content-card__title"]}>{title}</h3>
        <p className={styles["content-card__description"]}>{description}</p>
        <br />
        <AppButton label={label} url={url} />
      </div>
    </>
  );
}
