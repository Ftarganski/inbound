import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import IconBook from "../../public/images/icon-book-open.svg";
import IconFilm from "../../public/images/icon-film.svg";
import data from "../../server/courses.json";
import { getTexts } from "../../utils/textUtils";
import { useWindowResize } from "../../hooks/useWindowResize";

const Hero = () => {
  const t = getTexts();
  const isMobile = useWindowResize();

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

        {isMobile ? (
          <>
          
          <button className={styles.heroButton}>
            <p className={styles.heroButtonText}>{t.hero.ButtonTextInfo}</p>
          </button>

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

          
        </div>

        <h3 className={styles.heroCitation}>{t.hero.citation}</h3>
             
        <button className={styles.ButtonQuestion}>
            <p className={styles.ButtonTextQuestion}>{t.hero.ButtonTextQuestion}</p>
          </button>

          <h3 className={styles.heroCitation}>{t.hero.goal}</h3>
        
        <p className={styles.heroInspiration}>{t.hero.inspiration}</p>
          
          </>
        ) : (
          <>
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
                <p className={styles.heroButtonText}>{t.hero.ButtonText}</p>
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Hero;
