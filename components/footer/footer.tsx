import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Facebook from "../../public/images/icon-facebook.svg";
import Instagram from "../../public/images/icon-instagram.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Youtube from "../../public/images/icon-youtube.svg";
import Logo from "../../public/images/logo-unycos.svg";
import { getTexts } from "../../utils/textUtils";

const Footer = () => {
  const t = getTexts();
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.icons}>
          <Image
            className={styles.icon}
            src={Facebook}
            alt={t.footer.altIconFacebook}
          />
          <Image
            className={styles.icon}
            src={Instagram}
            alt={t.footer.altIconInstagram}
          />
          <Image
            className={styles.icon}
            src={Twitter}
            alt={t.footer.altIconTwitter}
          />
          <Image
            className={styles.icon}
            src={Youtube}
            alt={t.footer.altIconYoutube}
          />
        </div>

        <div className={styles.line}></div>

        <div className={styles.base}>
          <Image
            className={styles.logo}
            src={Logo}
            alt={t.footer.altLogoUnycos}
          />

          <div className={styles.links}>
            <p className={styles.link}>{t.footer.conditions}</p>
            <p className={styles.link}>{t.footer.privacyPolicy} </p>
            <p className={styles.link}>{t.footer.termsOfService} </p>
          </div>

          <div className={styles.currencies}>
            <p className={styles.currency}>{t.footer.dolar}</p>
            <p className={styles.currency}>{t.footer.divider}</p>
            <p className={styles.currency}>{t.footer.euro}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
