import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo-unycos.svg";
import Arrow from "../../public/images/chevron-down.svg"
import { getTexts } from "../../utils/textUtils";

const Navbar = () => {
  const t = getTexts();

  const [isLogged, setIsLogged] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Novo estado para exibir o login

  const handleLoginClick = () => {
    setIsLogged(true);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    setShowLogin(false); // Oculta o login ao exibir o dropdown
  };

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
              <li className={styles.navbarLink}>{t.navbar.courses}</li>
              {!isLogged && <li className={styles.navbarLink}>{t.navbar.register}</li>}

              {!isLogged && (
                <li className={styles.navbarLink} onClick={handleLoginClick}>{t.navbar.login}</li>
              )}

              {isLogged && (
                <li className={styles.navbarLinkDrop} onClick={handleDropdownClick}>
                  {showLogin ? (
                    t.navbar.login
                  ) : (
                    <>
                      <div>
                      {t.navbar.hello}
                      {t.navbar.user}
                      <Image
                        className={styles.arrow}
                        src={Arrow}
                        alt={t.navbar.altArrow}
                      />
                      </div>
                      {showDropdown && (
                        <ul className={styles.dropdown}>
                          <li className={styles.dropdownLink}>{t.navbar.lkcontrolpanel}</li>
                          <li className={styles.dropdownLink}>{t.navbar.lkcourse}</li>
                          <li className={styles.dropdownLink}>{t.navbar.lkprofile}</li>
                          <li className={styles.dropdownLink}>{t.navbar.lkaccount}</li>
                          <li
                            className={styles.dropdownLink}
                            onClick={() => {
                              setIsLogged(false);
                              setShowLogin(true); // Exibe o login ao fazer logout
                            }}
                          >
                            {t.navbar.lklogout}
                          </li>
                        </ul>
                      )}
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Navbar;
