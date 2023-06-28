import React from "react";
import styles from "./courses.module.css";
import data from "../../server/courses.json";
import { getTexts } from "../../utils/textUtils";

const Courses = () => {
  const t = getTexts();
  return (
    <>
      <section className={styles.courses}>
        <h3 className={styles.title}>{t.courses.title}</h3>
        <div className={styles.gridContainer}>
          {data.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className={styles.gridItem}
              style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${item.imageUrl})`,
            }}
            >
              <h4 className={styles.courseSpeaker}>{item.speaker}</h4>
              <p className={styles.courseTitle}
               dangerouslySetInnerHTML={{ __html: item.title }}/>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
