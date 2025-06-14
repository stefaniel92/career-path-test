import { Hero } from "./components/organisms/hero/hero";
import styles from "./page.module.css";
import { getCareerPathTestData } from "./questions/questions";

export default async function Home() {
  const careerTest = await getCareerPathTestData("stef");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero
          title="Career path test"
          image={{
            src: "/discover-journey-maze.svg",
            alt: "Person standing in a maze",
          }}
          id="pageHero"
          subtitle="Discover careers that match your skills and personality"
        />
        <ul>
          {careerTest?.questions.map((question) => (
            <li key={question.id}>{question.text}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
