import React from "react";
import styles from './rating.module.css'
import { getTexts } from "../../utils/textUtils";

const Rating = () => {
    const t = getTexts();

  return (
    <>
    <section className={styles.rating}>
        <div className={styles.title}></div>
        <div className={styles.subtitle}></div>
        <div className={styles.gridContainer}></div>
        <div className={styles.button}>
            <p className={styles.buttonText}>{t.rating.buttonText}</p>
        </div>


    </section>
      
    </>
  );
};

export default Rating;
