import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo-unycos.svg";
import { getTexts } from "../../utils/textUtils";

const Navbar = () => {
  const t = getTexts();

  return (
    <>
      <section className={styles.navbar}>
        <div className={styles.navbarGrid}>
          <div className={styles.navbarItem}></div>

          <div className={styles.navbarItem}>
            <Image
              className={styles.logo}
              src={Logo}
              alt={t.navbar.altLogoUnycos}
            />
          </div>

          <div className={styles.navbarItem}>
            <ul>
              <li>{t.navbar.courses}</li>
              <li>{t.navbar.register}</li>
              <li>{t.navbar.login}</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
