import Image, { ImageProps } from "next/image";
import styles from "./test.module.css";
import { JSX } from "react";
import { clsx } from "clsx";
import { getCareerPathTestData } from "@/app/questions/questions";
import { ProgressBar } from "../../atoms/progress-bar/progress-bar";

export type TTest = {};

const careerTest = await getCareerPathTestData("stef");

export const Test = ({}: TTest): JSX.Element => {
  return (
    <section
      className={clsx(styles.base, "container")}
      aria-label="Career path test"
    >
      <div className={styles.wrapper}>
        <div className={styles.progressBar}>
          <ProgressBar percentage={38} />
        </div>
        <ul>
          {careerTest?.questions.map((question) => (
            <li key={question.id}>{question.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
