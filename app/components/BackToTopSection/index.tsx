"use client";

import { ArrowUp } from "@carbon/icons-react";
import { Button } from "@carbon/react";

import styles from "./back-to-top.module.scss";

interface Props {
  className?: string;
}

export default function index({ className }: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={className}>
      <Button
        renderIcon={ArrowUp}
        size="sm"
        hasIconOnly
        kind="secondary"
        iconDescription="Back to top"
        onClick={() => scrollToTop()}
        tooltipAlignment="end"
        tooltipPosition="left"
        className={styles["back-to-top"]}
      />
    </div>
  );
}
