import React, { useEffect, useState } from "react";
import styles from "./lessons.module.css";
import data from "../../server/lessons.json";
import Image from "next/image";
import IconBook from "../../public/images/icon-book.svg";
import IconVideo from "../../public/images/icon-video.svg";
import IconTest from "../../public/images/icon-tests.svg";
import IconTask from "../../public/images/icon-tasks.svg";
import { Spotlight } from "../../types/types";
import { getTexts } from "../../utils/textUtils";

const Lessons = () => {
  const t = getTexts();
  const [courseData, setCourseData] = useState<Spotlight[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  return (
    <>
           <section className={styles.exclusive}>
        <h3 className={styles.title}>{t.content.exclusiveTitle}</h3>
        <div className={styles.exclusiveIcons}>
          <div className={styles.icons}>
            <Image
              className={styles.icon}
              src={IconBook}
              alt={t.content.altIconBook}
            />
            <p className={styles.iconText}>{t.content.iconBook} </p>
          </div>
          <div className={styles.icons}>
            <Image
              className={styles.icon}
              src={IconVideo}
              alt={t.content.altIconVideo}
            />
            <p className={styles.iconText}>{t.content.iconVideo} </p>
          </div>
          <div className={styles.icons}>
            <Image
              className={styles.icon}
              src={IconTest}
              alt={t.content.altIconTest}
            />
            <p className={styles.iconText}>{t.content.iconTest} </p>
          </div>
          <div className={styles.icons}>
            <Image
              className={styles.icon}
              src={IconTask}
              alt={t.content.altIconTask}
            />
            <p className={styles.iconText}>{t.content.iconTask} </p>
          </div>
        </div>
        <button className={styles.exclusiveButton}>
          <p className={styles.exclusiveButtonText}>
            {t.content.exclusiveButtonText}
          </p>
        </button>
      </section>

      <section className={styles.lessons}>
        <h3 className={styles.title}>{t.content.lessonsTittle}</h3>
        <div className={styles.gridContainer}>
          {data.slice(0, 5).map((item) => (
            <div key={item.id} className={styles.gridItem}>
              <p className={styles.lessonID}>
                {item.id.toString().padStart(2, "0")}
              </p>
              <div>
                <h4 className={styles.lessonTitle}>{item.title}</h4>
                <p className={styles.lessonResume}>{item.resume}</p>
              </div>
            </div>
          ))}
          <button className={styles.lessonButton}>
            <p className={styles.lessonButtonText}>
              {t.content.lessonsButtonText}
            </p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Lessons;
