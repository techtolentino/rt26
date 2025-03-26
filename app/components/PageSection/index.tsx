import { PropsWithChildren } from "react";
import styles from "./page-section.module.scss";

type Props = {
  variant?: "lg" | "md" | "sm";
};

export default function PageSection({
  variant = "lg",
  children,
}: PropsWithChildren<Props>) {
  const variantClass =
    variant === "lg"
      ? styles["page-section--lg"]
      : variant === "md"
        ? styles["page-section--md"]
        : styles["page-section--sm"];

  return (
    <section className={`${variantClass}`}>{children}</section>
  );
}
