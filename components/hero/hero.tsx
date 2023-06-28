import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import IconBook from "../../public/images/icon-book-open.svg";
import IconFilm from "../../public/images/icon-film.svg";
import data from "../../server/courses.json";
import { getTexts } from "../../utils/textUtils";

const Hero = () => {
  const t = getTexts();

  return (
    <>
      <section className={styles.hero}>
        {data
          .filter((item) => item.id === 4)
          .map((item) => (
            <div
              key={item.id}
              className={styles.heroImage}
              style={{
                backgroundImage: `radial-gradient(82% 65% at 50% 50%, rgba(0, 0, 0, 0.00) 56%, #000 100%), url(${item.imageUrl})`,
              }}
            >
              <h2 className={styles.heroTitle}>{item.speaker}</h2>
              <p
                className={styles.heroSubtitle}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          ))}

        <div className={styles.heroData}>
          <div className={styles.heroInfo}>
            <div className={styles.heroBorder}>
              <Image
                className={styles.heroIcon}
                src={IconBook}
                alt={t.hero.altIconBook}
              />
            </div>
            <p className={styles.heroIconText}>{t.hero.iconBook}</p>
          </div>

          <div className={styles.heroInfo}>
            <div className={styles.heroBorder}>
              <Image
                className={styles.heroIcon}
                src={IconFilm}
                alt={t.hero.altIconFilm}
              />
            </div>
            <p className={styles.heroIconText}>{t.hero.iconFilm}</p>
          </div>

          <button className={styles.heroButton}>
            <p className={styles.heroButtonText}>{t.hero.heroButtonText}</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
