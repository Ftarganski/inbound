import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo-unycos.svg";
import LogoBlack from "../../public/images/logo-unycos-black.svg";
import Arrow from "../../public/images/chevron-down.svg";
import Menu from "../../public/images/bx-menu.svg";
import Whatsapp from "../../public/images/bxl-whatsapp.svg";
import Notification from "../../public/images/bell-outline-on.svg";
import { getTexts } from "../../utils/textUtils";
import { useWindowResize } from "../../hooks/useWindowResize";

const Navbar = () => {
  const t = getTexts();
  const isMobile = useWindowResize();
  const [isLogged, setIsLogged] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Novo estado para exibir o login

  const handleMenuClick = () => {
    setShowDropdown(!showDropdown);
  };

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

          {isMobile ? (
            <>
              <div className={styles.navbarItem}>
                <Image
                  className={styles.menu}
                  src={Menu}
                  alt={t.navbar.altMenu}
                  onClick={handleMenuClick}
                />
              </div>

              {showDropdown && (
                <div className={styles.dropdownMobile}>
                  <div className={styles.stripe}></div>
                  <ul>
                    <li>
                      <Image
                        className={styles.logoBlack}
                        src={LogoBlack}
                        alt={t.navbar.altLogoUnycos}
                      />
                    </li>
                    <li className={styles.dropdownLinkUser}>
                      {t.navbar.hello}
                      {t.navbar.user}
                      <Image
                        className={styles.iconNotification}
                        src={Notification}
                        alt={t.navbar.altNotification}
                      />
                    </li>
                    <li className={styles.dropdownLink}>
                      {t.navbar.lkcontrolpanel}
                    </li>
                    <li className={styles.dropdownLink}>{t.navbar.lkcourse}</li>
                    <li className={styles.dropdownLink}>
                      {t.navbar.lkprofile}
                    </li>
                    <li className={styles.dropdownLink}>
                      {t.navbar.lkaccount}
                    </li>
                    <li className={styles.dropdownLink}>
                      {t.navbar.lkallaccount}
                    </li>
                    <li className={styles.dropdownLink}>
                      <p className={styles.dropdownSubtitle}>
                        {t.navbar.subtitle}
                      </p>
                      <p className={styles.dropdownPhone}>
                        <Image
                          className={styles.iconWhats}
                          src={Whatsapp}
                          alt={t.navbar.altIconWhats}
                        />

                        {t.footer.contactButtonText}
                      </p>
                    </li>
                    <li
                      onClick={() => {
                        setIsLogged(false);
                        setShowLogin(true); // Exibe o login ao fazer logout
                      }}
                      className={styles.dropdownLink}
                    >
                      {t.navbar.lklogout}
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <div className={styles.navbarItem}>
                <ul>
                  <li className={styles.navbarLink}>{t.navbar.courses}</li>
                  {!isLogged && (
                    <li className={styles.navbarLink}>{t.navbar.register}</li>
                  )}

                  {!isLogged && (
                    <li
                      className={styles.navbarLink}
                      onClick={handleLoginClick}
                    >
                      {t.navbar.login}
                    </li>
                  )}

                  {isLogged && (
                    <li
                      className={styles.navbarLinkDrop}
                      onClick={handleDropdownClick}
                    >
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
                              <li className={styles.dropdownLink}>
                                {t.navbar.lkcontrolpanel}
                              </li>
                              <li className={styles.dropdownLink}>
                                {t.navbar.lkcourse}
                              </li>
                              <li className={styles.dropdownLink}>
                                {t.navbar.lkprofile}
                              </li>
                              <li className={styles.dropdownLink}>
                                {t.navbar.lkaccount}
                              </li>
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
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;
