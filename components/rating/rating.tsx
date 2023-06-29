import React from "react";
import styles from "./rating.module.css";
import data from "../../server/rating.json";
import Image from "next/image";
import ThumbsUp from "../../public/images/thumbs-up.svg";
import ThumbsUpGrey from "../../public/images/thumbs-up-grey.svg";
import Checkmark from"../../public/images/checkmark.svg";
import { getTexts } from "../../utils/textUtils";

const Rating = () => {
  const t = getTexts();

  const getInitials = (name:any) => {
    const names = name.split(" ");
    let initials = names.map((n:any) => n[0]);
    initials = initials.slice(0, 2);
    return initials.join("").toUpperCase();
  };

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
            <div
              key={item.id}
              className={`${styles.gridItem} ${
                index < 2 ? styles.hasBorder : ""
              }`}
            >
              {item.imageUrl ? (
                <Image
                className={styles.photoUser}
                  src={item.imageUrl}
                  alt={t.rating.altImage}
                  width={80}
                  height={80}
                />
              ) : (
                <div className={styles.initials}>
                  <p>{getInitials(item.name)}</p>
                  </div>
              )}
              <div>
                <div className={styles.testUser}>
                  <div className={styles.name}>{item.name}</div>
                    <Image
                      className={styles.thumbsRating}
                      src={ThumbsUpGrey}
                      alt={t.rating.altThumbs}
                    />
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
                {item.response && (
                    <Image
                      className={styles.checkmark}
                      src={Checkmark}
                      alt={t.rating.altCheckmark}
                    />
                  )}               
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