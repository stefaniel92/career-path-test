import { Hero } from "./components/organisms/hero/hero";
import { IconCardGrid } from "./components/organisms/icon-card-grid/icon-card-grid";
import { IconCardGridData } from "./components/organisms/icon-card-grid/icon-card-grid-data";
import { Test } from "./components/organisms/test/test";
import styles from "./page.module.css";

export default async function Home() {
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
        <IconCardGrid
          cards={IconCardGridData}
          bodyCopy="We've analysed data from thousands of our members who work in graduate roles across a range of sectors to understand which personalities, skills and values best fit each career path.
Take this test to understand what career path you might be suited to and how to get started."
        />
        <Test />
      </main>
    </div>
  );
}
