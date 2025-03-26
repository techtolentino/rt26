import Image, { StaticImageData } from "next/image";
import styles from "./feature-image.module.scss";

interface Props {
  imgData: StaticImageData;
}

export default function FeatureImage({ imgData }: Props) {
  return <Image className={styles["feature-image"]} src={imgData} alt={""} />;
}
