import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import data from "../../server/lessons.json";
import Image from "next/image";
import IconBook from "../../public/images/icon-book.svg";
import IconVideo from "../../public/images/icon-video.svg";
import IconTest from "../../public/images/icon-tests.svg";
import IconTask from "../../public/images/icon-tasks.svg";
import { Spotlight } from "../../types/types";
import axios from "axios";
import { getTexts } from "../../utils/textUtils";

const Main = () => {
  const t = getTexts();
  const [courseData, setCourseData] = useState<Spotlight[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSpotlight, setSelectedSpotlight] = useState<Spotlight | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(''); // Adiciona o estado para a imagem selecionada
 
  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get("/api/api.js"); // Caminho da API proxy local

        setCourseData(response.data.spotlights);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData(); 
  }, []);



  const handleSliderItemClick = (index: number) => {
    if (courseData && courseData.length > 0) {
      const selectedSpotlight = courseData[index];

      const updatedCourseData = [...courseData];
      updatedCourseData[0] = selectedSpotlight;

      setSelectedSpotlight(selectedSpotlight);
      setSelectedImage(selectedSpotlight.image); // Atualiza a imagem selecionada
    }
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <p>{t.content.loading}</p>
        </div>
      ) : (
        <section className={styles.slider}>
          <div className={styles.sliderContainer}>
            {courseData && courseData.length > 0 && (
              <div className={styles.sliderItem}>
                <div
                  className={styles.sliderItemImage}
                  style={{ backgroundImage: `url(${selectedImage || courseData[0].image})` }} // Usa a imagem selecionada ou a primeira imagem do curso
                />

                <div className={styles.sliderCourses}>
                  <div className={styles.sliderCourseMain}>
                    <div className={styles.sliderCourseMainTitle}>
                      {selectedSpotlight
                        ? selectedSpotlight.title
                        : courseData[0].title}
                    </div>
                    <div className={styles.sliderCourseMainResume}>
                      {selectedSpotlight
                        ? selectedSpotlight.description
                        : courseData[0].description}
                    </div>
                  </div>

                  <div className={styles.sliderCourseOthers}>
                    {courseData
                      .slice(1)
                      .map((spotlight: Spotlight, index: number) => (
                        <div
                          key={spotlight.title}
                          className={styles.sliderCourseOthersBlock}
                          onClick={() => handleSliderItemClick(index + 1)}
                        >
                          <div
                            className={styles.sliderCourseImage}
                            style={{
                              backgroundImage: `url(${spotlight.image})`,
                            }}
                          />
                          <div className={styles.sliderCourseTitle}>
                            {spotlight.title}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

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

export default Main;
