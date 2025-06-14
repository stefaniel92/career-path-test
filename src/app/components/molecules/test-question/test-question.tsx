"useClient";
import { clsx } from "clsx";
import styles from "./test-question.module.css";
import { JSX, useState } from "react";

export type TTestQuestion = {
  id: string;
  questionNumber: string;
  totalQuestions: string;
  question: string;
  onQuestionAnswer: (answer: number, id: string) => void;
  currentQuestion: string;
};

export const TestQuestion = ({
  id,
  question,
  questionNumber,
  totalQuestions,
  onQuestionAnswer,
  currentQuestion,
}: TTestQuestion): JSX.Element => {
  const responses = [...Array(8)];
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();

  const handleQuestionAnswer = (answer: number) => {
    onQuestionAnswer(answer, id);
    setSelectedAnswer(answer);
  };

  return (
    <div className={styles.base}>
      <div className={styles.questionWrapper}>
        <p className={styles.questionNumber}>
          Q{questionNumber}/{totalQuestions}
        </p>

        <p>
          <span className={styles.intro}>
            In a job, I would be motivated by
          </span>

          <span className={styles.question}>{question}</span>
        </p>
      </div>
      <ul className={styles.answers}>
        {responses.map((_, i) => (
          <li key={`answer-${i}`} className={styles.answer}>
            <a
              href={currentQuestion}
              onClick={() => handleQuestionAnswer(i + 1)}
              className={clsx(
                styles.answerButton,
                selectedAnswer === i + 1 ? styles.selected : ""
              )}
            >
              <p className={styles.answerText}>
                {i + 1}/{responses.length}
              </p>
            </a>
          </li>
        ))}
      </ul>
      {Number(questionNumber) > 1 ? (
        <p>
          To review your previous answers, scroll back before selecting "Finish"
        </p>
      ) : null}
    </div>
  );
};
