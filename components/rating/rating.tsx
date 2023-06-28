import React from "react";
import styles from "./rating.module.css";
import data from "../../server/rating.json";
import Image from "next/image";
import ThumbsUp from "../../public/images/thumbs-up.svg";
import { getTexts } from "../../utils/textUtils";

const Rating = () => {
  const t = getTexts();

  return (
    <>
      <section className={styles.rating}>
        <h3 className={styles.title}>{t.rating.title}</h3>
        <div className={styles.subtitleBox}>
          <Image
            className={styles.thumbs}
            src={ThumbsUp}
            alt={t.rating.altThumbs}
          />
          <h4
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: t.rating.subtitle }}
          />
        </div>

        <div className={styles.gridContainer}>
        {data.slice(0, 3).map((item, index) => (
            <div key={item.id} className={`${styles.gridItem} ${
                index < 2 ? styles.hasBorder : ""
              }`}>
              <Image
                className={styles.logo}
                // src={item.imageUrl}
                src="/public/images/icon-facebook.svg"
                alt={t.rating.altImage}
                width={80}
                height={80}
              />
              <div>
                <div className={styles.testUser}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.date}>{item.date}</div>
                </div>

                <div className={styles.testimony}>{item.testimony}</div>

                <div
                  className={`${styles.response} ${
                    item.response ? styles.hasContent : ""
                  }`}
                >
                  {item.response}
                </div>
                <div className={styles.equip}>
                  <div className={styles.user}>{item.user}</div>
                  <div className={styles.userRole}>{item.userRole}</div>
                  <div className={styles.responseDate}>{item.responseDate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.button}>
          <p className={styles.buttonText}>{t.rating.buttonText}</p>
        </button>
      </section>
    </>
  );
};

export default Rating;
