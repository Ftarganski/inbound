import React, { useEffect, useState } from "react";
import styles from "./slider.module.css";
import { Spotlight } from "../../types/types";
import axios from "axios";
import { getTexts } from "../../utils/textUtils";
import { useWindowResize } from "../../hooks/useWindowResize";

const Slider = () => {
  const t = getTexts();
  const isMobile = useWindowResize();
  const [courseData, setCourseData] = useState<Spotlight[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSpotlight, setSelectedSpotlight] = useState<Spotlight | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(''); // Adiciona o estado para a imagem selecionada

  const handleSliderItemClick = (index: number) => {
    if (courseData && courseData.length > 0) {
      const selectedSpotlight = courseData[index];

      const updatedCourseData = [...courseData];
      updatedCourseData[0] = selectedSpotlight;

      setSelectedSpotlight(selectedSpotlight);
      setSelectedImage(selectedSpotlight.image); // Atualiza a imagem selecionada
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/u/courses/spotlights/natacion');
        setCourseData(response.data.spotlights);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //API COM ERRO DE CORS
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.beta.unycos.com/u/courses/spotlights/natacion",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             "x-mejor-key": "unycos",
  //           },
  //         }
  //       );
  //       setCourseData(response.data.spotlights);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <p>{t.content.loading}</p>
        </div>
      ) : (
        <>
          <section className={styles.slider}>
            {isMobile ? (
              <>
                <div className={styles.sliderContainer}>
                  {courseData && courseData.length > 0 && (
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
                  )}
                </div>
              </>
            ) : (
              <>
                <div className={styles.sliderContainer}>
                  {courseData && courseData.length > 0 && (
                    <div className={styles.sliderItem}>
                      <div
                        className={styles.sliderItemImage}
                        style={{
                          backgroundImage: `url(${
                            selectedImage || courseData[0].image
                          })`,
                        }} // Usa a imagem selecionada ou a primeira imagem do curso
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
              </>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Slider;
