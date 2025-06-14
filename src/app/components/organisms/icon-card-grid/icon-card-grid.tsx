import styles from "./icon-card-grid.module.css";
import { JSX } from "react";
import { IconCard, TIconCard } from "../../molecules/icon-card/icon-card";
import clsx from "clsx";

export type TIconCardGrid = {
  cards: TIconCard[];
  bodyCopy: string;
};

export const IconCardGrid = ({
  cards,
  bodyCopy,
}: TIconCardGrid): JSX.Element => {
  return (
    <section className={clsx(styles.base, "container")}>
      <ul className={styles.list}>
        {cards.map((card, i) => (
          <li key={`icon-card-${i}`}>
            <IconCard {...card} />
          </li>
        ))}
      </ul>
      <p className={styles.bodyCopy}>{bodyCopy}</p>
    </section>
  );
};
