import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./quote-card.module.scss";

interface Props {
  copy: string;
  author: string;
  logo: StaticImageData;
}

export default function index({ copy, author, logo }: Props) {
  return (
    <div className={styles["quote-card"]}>
      <h4 className={styles["quote-card__copy"]}>
        <span className={styles["quote-card__left-quote"]}>&ldquo;</span>
        {copy}&rdquo;
      </h4>
      <div className={styles["quote-card__byline"]}>
        <Image src={logo} alt="" className={styles["quote-card__logo"]} />
        <h5 className={styles["quote-card__author"]}>{author}</h5>
      </div>
    </div>
  );
}
