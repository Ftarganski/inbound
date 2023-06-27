import React from "react";
import styles from "./blog.module.css";
import { getTexts } from "../../utils/textUtils";

const Postblog = () => {
  const t = getTexts();
  return (
    <>
      <section className={styles.postblog}>
        <h4 className={styles.postblogTitle}>{t.postblog.title}</h4>
        <p className={styles.postblogSubtitle}>{t.postblog.subtitle}</p>
        <button className={styles.postblogButton}>
          <p className={styles.postblogButtonText}>{t.postblog.buttonText}</p>
        </button>
      </section>
    </>
  );
};

export default Postblog;
