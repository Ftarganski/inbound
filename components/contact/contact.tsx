import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import phoneData from "../../server/phone.json";
import { Country } from "../../types/types";
import { getTexts } from "../../utils/textUtils";

const Contact = () => {
  const t = getTexts();

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    setCountries(phoneData.countries);
  }, []);

  return (
    <>
      <section className={styles.contact}>
        <h3 className={styles.title}>{t.contact.title}</h3>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t.contact.name}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t.contact.email}
            />
          </div>

          <div className={styles.formGroup}>
          <select id="country" name="country">
              <option value="">{t.contact.country}</option>
              {countries.map((country, index) => (
                <option key={index} value={country.country_code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t.contact.phone}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.check}
              type="checkbox"
              id="condition"
              name="condition"
            />
            <label htmlFor="condition">{t.contact.condition}</label>
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.check}
              type="checkbox"
              id="news"
              name="news"
            />
            <label htmlFor="news">{t.contact.news}</label>
          </div>

          <button type="submit" className={styles.button}>
            <p className={styles.buttonText}>{t.contact.sendButton}</p>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
