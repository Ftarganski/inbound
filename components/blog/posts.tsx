import React from "react";
import styles from "./blog.module.css";
import data from "../../server/blog.json";
import { getTexts } from "../../utils/textUtils";

const Posts = () => {
  const t = getTexts();
  return (
    <>
     <section className={styles.posts}>
  <h3 className={styles.postsTitle}>{t.posts.title}</h3>
  <div className={styles.gridContainer}>
    {data.slice(0, 4).map((item, index) => (
      <div
        key={item.id}
        className={`${styles.gridItem} ${index === 3 ? styles.lastGridItem : ''}`}
      >
        <h4 className={styles.postsPostTitle}>{item.title}</h4>
        <p className={styles.postsPostDate}>{item.date}</p>
      </div>
    ))}
  </div>

  <button className={styles.postsButton}>
    <p className={styles.postsButtonText}>{t.posts.buttonText}</p>
  </button>
</section>
    </>
  );
};

export default Posts;
