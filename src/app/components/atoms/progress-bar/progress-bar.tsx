import styles from "./progress-bar.module.css";
import { JSX } from "react";

export type TProgressBar = {
  percentage: number;
};

export const ProgressBar = ({ percentage }: TProgressBar): JSX.Element => {
  return (
    <div className={styles.base}>
      <p>Your progress – {percentage}%</p>
      <div
        className={styles.bar}
        style={{ "--percentage": `${percentage}%` } as React.CSSProperties}
      ></div>
    </div>
  );
};
