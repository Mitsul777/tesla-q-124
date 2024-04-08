import React, { useState, useEffect, useRef } from "react";
import classes from "./Header.module.scss";
import logo from "../../../assets/img/header/logo.png";
import arrow from "../../../assets/img/header/arrow.svg";
import { headerRoutes } from "../../../router/index";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import "./Header.scss";
import { useTranslation, locales } from "react-i18next";
import i18n from "i18next";
import Cookies from "js-cookie";

const Header = () => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next");
  global.text = t;
  const languages = [
    { value: "ru", label: "Ru" },
    { value: "en", label: "En" },
    { value: "es", label: "Es" },
    { value: "it", label: "It" },
    { value: "de", label: "De" },
    { value: "pl", label: "Pl" },
  ];
  const [localA, setLocalA] = useState(false);
  const [burgerA, setBurgerA] = useState(false);
  const params = useParams();
  useEffect(() => {
    console.log(params);
    // console.log(i18n.language, i18n.languages, i18n.options.supportedLngs);
    i18n.changeLanguage(params.lang);
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.headerBody}>
        <div className="container">
          <div className={classes.headerRow}>
            <div
              className={
                burgerA
                  ? [classes.headerRowLogo, classes.active].join(" ")
                  : classes.headerRowLogo
              }
            >
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className={classes.headerRowRight}>
              <div
                className={
                  burgerA
                    ? [classes.headerRowCenterWrapper, classes.active].join(" ")
                    : classes.headerRowCenterWrapper
                }
              ></div>

              <div
                className={classes.headerRowRightLocalization}
                onClick={() => {
                  setLocalA(!localA);
                }}
              >
                <div
                  className={
                    localA
                      ? burgerA
                        ? [
                            classes.headerRowRightLocalizationTitle,
                            classes.active,
                            classes.white,
                          ].join(" ")
                        : [
                            classes.headerRowRightLocalizationTitle,
                            classes.active,
                          ].join(" ")
                      : burgerA
                      ? [
                          classes.headerRowRightLocalizationTitle,
                          classes.white,
                        ].join(" ")
                      : classes.headerRowRightLocalizationTitle
                  }
                >
                  <img src={arrow} alt="" />
                </div>
              </div>

              <a
                href={`https://user.goldman-group.org/login?lang=${lang}`}
                className={classes.headerRowRightSignBtn}
              >
                {t("btn_login")}
              </a>

              <div
                className={
                  burgerA
                    ? [classes.headerRowRightBurger, classes.active].join(" ")
                    : classes.headerRowRightBurger
                }
                onClick={() => {
                  setBurgerA(!burgerA);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
