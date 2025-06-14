import styles from "./icon-card.module.css";
import { JSX } from "react";
import { clsx } from "clsx";
import { ColourIcon, TColourIcon } from "../../atoms/colour-icon/colour-icon";

export type TIconCard = {
  id: string;
  title: string;
  bodyCopy: string;
  icon: TColourIcon;
};

export const IconCard = ({
  id,
  title,
  bodyCopy,
  icon,
}: TIconCard): JSX.Element => {
  return (
    <article className={styles.base}>
      <ColourIcon {...icon} className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p>{bodyCopy}</p>
    </article>
  );
};
