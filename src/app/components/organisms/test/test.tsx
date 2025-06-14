"use client";
import styles from "./test.module.css";
import { JSX, useState } from "react";
import { clsx } from "clsx";
import { TCareerPathTest } from "@/app/questions/questions";
import { ProgressBar } from "../../atoms/progress-bar/progress-bar";
import { TestQuestion } from "../../molecules/test-question/test-question";

export type TTest = {
  careerTest: TCareerPathTest;
};
type TAnsweredQuestion = {
  id: string;
  answer: number;
};

export const Test = ({ careerTest }: TTest): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    TAnsweredQuestion[]
  >([]);

  const onQuestionAnswer = (answer: number, id: string) => {
    setCurrentQuestion(currentQuestion + 1);
    const answeredId = careerTest?.questions[currentQuestion].id;
    const answeredQuestion: TAnsweredQuestion = {
      id: id,
      answer: answer,
    };

    // If I had more time, I would make sure that if the array of answered questions already contained
    // the id of the answered question, it would replace that answer instead of adding a new item to the array
    setAnsweredQuestions([...answeredQuestions, answeredQuestion]);
  };

  const percentage = careerTest
    ? Math.floor((currentQuestion / careerTest?.questions.length) * 100)
    : 0;

  return (
    <section
      className={clsx(styles.base, "container")}
      aria-label="Career path test"
    >
      <div className={styles.wrapper}>
        <div className={styles.progressBar}>
          <ProgressBar percentage={percentage} />
        </div>
        <div className={styles.mainTest}>
          <ul className={styles.list}>
            {careerTest?.questions.map((question, i) => (
              <li
                key={question.id}
                id={question.id}
                className={styles.question}
              >
                <TestQuestion
                  question={question.text}
                  questionNumber={(i + 1).toString()}
                  totalQuestions={careerTest.questions.length.toString()}
                  id={question.id}
                  onQuestionAnswer={onQuestionAnswer}
                  currentQuestion={
                    currentQuestion < careerTest.questions.length
                      ? `#${careerTest.questions[currentQuestion].id}`
                      : "#"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
