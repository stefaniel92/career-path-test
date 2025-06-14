import Image, { ImageProps } from "next/image";
import styles from "./hero.module.css";
import { JSX } from "react";
import { clsx } from "clsx";
import { ColourIcon } from "../../atoms/colour-icon/colour-icon";

export type THero = {
  id: string;
  title: string;
  subtitle?: string;
  image: ImageProps;
};

export const Hero = ({ id, title, image, subtitle }: THero): JSX.Element => {
  return (
    <section aria-labelledby={id} className={styles.section}>
      <Image {...image} className={styles.image} width={1200} height={400} />
      <div className={clsx(styles.titleWrapper, "container")}>
        <h1 className={styles.title} id={id}>
          {title}
        </h1>

        <p>{subtitle}</p>
      </div>
    </section>
  );
};
