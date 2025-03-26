import { Button } from "@carbon/react";
import styles from "./app-button.module.scss";
import { ArrowRight, ArrowUpRight } from "@carbon/icons-react";

interface Props {
  label?: string;
  variant?: "primary" | "secondary";
  url?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function AppButton({
  label,
  url,
  variant = "primary",
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const renderIcon = () => {
    if (!url?.startsWith("http")) {
      return ArrowRight;
    } else {
      return ArrowUpRight;
    }
  };

  return (
    <Button
      href={url}
      className={styles[`app-button--${variant}`]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      renderIcon={renderIcon()}
    >
      {label}
    </Button>
  );
}
