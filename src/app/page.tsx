import Image from "next/image";
import styles from "./page.module.css";
import { getCareerPathTestData } from "./questions/questions";

export default async function Home() {
  const careerTest = await getCareerPathTestData("stef");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {careerTest?.questions.map((question) => (
            <li key={question.id}>{question.text}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
