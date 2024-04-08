import React, { useRef, useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import logo from "../../../assets/img/1/logo.png";
import logo1 from "../../../assets/img/1/logo1.png";
import i18next from "i18next";

const Header = () => {
  let location = useLocation();
  const params = useParams();
  const { t } = useTranslation("");
  const [pdfPage, setPdfPage] = useState("index");
  const [assest, setAssets] = useState(false);
  const [assestLang, setAssetsLang] = useState(false);
  const [width, setWidth] = useState();
  const [burger, setBurger] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  useEffect(() => {
    if ($("body").hasClass("lock")) {
      $("body").removeClass("lock");
    }
  }, []);
  // cimode;
  useEffect(() => {
    console.log("::" + params.lang);
    console.log(i18n.language, i18n.languages, i18n.options.supportedLngs);

    if (params.lang === undefined) {
      i18n.changeLanguage("en");
      setCurrentLang("en");
    } else {
      if (i18n.options.supportedLngs.includes(params.lang)) {
        i18n.changeLanguage(params.lang);
        setCurrentLang(params.lang);
      } else {
        i18n.changeLanguage("en");
        setCurrentLang("en");
      }
    }
  }, [t("lang")]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", (event) => {
      setWidth(window.innerWidth);
    });
  }, [t("lang")]);

  useEffect(() => {
    $(function ($) {
      $(document).mouseup(function (e) {
        // событие клика по веб-документу
        var div = $("#popup"); // тут указываем ID элемента
        if (
          !div.is(e.target) && // если клик был не по нашему блоку
          div.has(e.target).length === 0
        ) {
          // и не по его дочерним элементам
          setAssets(false);
        }
      });
      $(document).mouseup(function (e) {
        // событие клика по веб-документу
        var div = $("#popup-lang"); // тут указываем ID элемента
        if (
          !div.is(e.target) && // если клик был не по нашему блоку
          div.has(e.target).length === 0
        ) {
          // и не по его дочерним элементам
          setAssetsLang(false);
        }
      });
    });
    let arrLocation = location.pathname.split("/");
    let currentPage = arrLocation[arrLocation.length - 1];
    if (currentPage === "30") {
      setPdfPage("30");
    } else if (currentPage === "50") {
      setPdfPage("50");
    } else if (currentPage === "100") {
      setPdfPage("100");
    } else {
      setPdfPage("index");
    }
  }, [t("lang")]);

  useEffect(() => {
    setBurger(false);

    setAssetsLang(false);
  }, [currentLang]);
  return (
    <div className={classes.header}>
      <div className={classes.headerBody}>
        <div className={"container"}>
          <div className={classes.headerRow}>
            <div className={classes.headerRowLeft}>
              <Link
                to={`/${currentLang}/`}
                className={classes.headerRowLeftLogo}
                onClick={() => {
                  setPdfPage("index");
                }}
              >
                <img alt="" src={width > 768 ? logo : logo1} />
              </Link>
            </div>
            <div className={classes.headerRowRight}>
              <div className={classes.headerRowRightWrapper}>
                <div className={[classes.assets, ""].join(" ")} id="popup">
                  <div
                    className={[classes.assetsTitle, "font-20"].join(" ")}
                    onClick={() => {
                      setAssets(!assest);
                    }}
                  >
                    {t("first_item1")}
                    <span></span>
                  </div>
                  <div
                    className={
                      assest
                        ? [classes.assetsContent, classes.active, ""].join(" ")
                        : [classes.assetsContent, ""].join(" ")
                    }
                    onClick={() => {
                      setAssets(false);
                    }}
                  >
                    <Link className="font-20" to={`/${currentLang}/`}>
                      {t("first_item1")} 10 000$
                    </Link>
                    <Link className="font-20" to={`/${currentLang}/30`}>
                      {t("first_item1")} 30 000$
                    </Link>
                    <Link className="font-20" to={`/${currentLang}/50`}>
                      {t("first_item1")} 50 000$
                    </Link>
                    <Link className="font-20" to={`/${currentLang}/100`}>
                      {t("first_item1")} 100 000$
                    </Link>
                  </div>
                </div>
                <div className={[classes.assets, ""].join(" ")} id="popup-lang">
                  <div
                    className={[
                      classes.assetsTitle,
                      "font-20",
                      "uppercase",
                    ].join(" ")}
                    onClick={() => {
                      setAssetsLang(!assestLang);
                    }}
                  >
                    {currentLang}
                    <span></span>
                  </div>
                  <div
                    className={
                      assestLang
                        ? [
                          classes.assetsContent,
                          classes.assetsContentLang,
                          classes.active,
                          ,
                          "uppercase",
                          "",
                        ].join(" ")
                        : [
                          classes.assetsContent,
                          classes.assetsContentLang,

                          "uppercase",
                          "",
                        ].join(" ")
                    }
                  >
                    {i18next.options.supportedLngs.map((i) => {
                      if (i !== "cimode") {
                        let curPath = pdfPage === "index" ? "" : pdfPage;
                        return (
                          <Link
                            onClick={() => {
                              i18n.changeLanguage(i);
                            }}
                            className={["font-20", "uppercase"].join(" ")}
                            to={`/${i}/${curPath}`}
                          >
                            {i}
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
                <a
                  href={`/pdf/${pdfPage}/${t("lang")}.pdf`}
                  // href={`/assets/docs/${pdfPage}_${locale}.pdf`}
                  download
                  className={[classes.headerRowRightDownload, "font-20"].join(
                    " "
                  )}
                >
                  <Trans>{t("header_download")}</Trans>
                </a>
                <div className={classes.headerRowRightLangs}>
                  <div className={classes.langs}>
                    {/* <Dropdown
                      options={locales}
                      onChange={(e) =>
                        router.push(pathname, asPath, { locale: e.value })
                      }
                      value={locale}
                      placeholder="EN"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                burger
                  ? [classes.headerMobileBurger, classes.active, ""].join(" ")
                  : [classes.headerMobileBurger, ""].join(" ")
              }
              onClick={() => {
                if (burger === false) {
                  $("body").addClass("lock");
                } else {
                  $("body").removeClass("lock");
                }
                setBurger(!burger);
              }}
            >
              <div className={[classes.headerMobileBurgerWrap, ""].join(" ")}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div
              className={
                burger
                  ? [classes.headerMobile, classes.active, ""].join(" ")
                  : [classes.headerMobile, ""].join(" ")
              }
            >
              <div className={[classes.headerMobileBody, ""].join(" ")}>
                <div className={[classes.headerMobileBodyWrap, ""].join(" ")}>
                  <div
                    className={[classes.headerMobileBodyWrap1, ""].join(" ")}
                  >
                    <div className={classes.headerRowRightLangs}>
                      <div className={classes.langs}>
                        <div
                          className={[classes.assets, ""].join(" ")}
                          id="popup-lang"
                        >
                          <div
                            className={[
                              classes.assetsTitle,
                              "font-20",
                              "uppercase",
                            ].join(" ")}
                            onClick={() => {
                              setAssetsLang(!assestLang);
                            }}
                          >
                            {currentLang}
                            <span></span>
                          </div>
                          <div
                            className={
                              assestLang
                                ? [
                                  classes.assetsContent,
                                  classes.assetsContentLang,
                                  classes.active,
                                  ,
                                  "uppercase",
                                  "",
                                ].join(" ")
                                : [
                                  classes.assetsContent,
                                  classes.assetsContentLang,

                                  "uppercase",
                                  "",
                                ].join(" ")
                            }
                          >
                            {i18next.options.supportedLngs.map((i) => {
                              if (i !== "cimode") {
                                let curPath =
                                  pdfPage === "index" ? "" : pdfPage;
                                return (
                                  <Link
                                    onClick={() => {
                                      i18n.changeLanguage(i);
                                    }}
                                    className={["font-20", "uppercase"].join(
                                      " "
                                    )}
                                    to={`/${i}/${curPath}`}
                                  >
                                    {i}
                                  </Link>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={[classes.headerMobileTitle, "font-20"].join(
                        " "
                      )}
                    >
                      {t("first_item1")}
                    </div>
                    <Link
                      onClick={() => {
                        setAssets(false);
                      }}
                      className={[classes.headerMobileLink, "font-20"].join(
                        " "
                      )}
                      to={`/${currentLang}/`}
                    >
                      {t("first_item1")} 10 000$
                    </Link>
                    <Link
                      onClick={() => {
                        setAssets(false);
                      }}
                      className={[classes.headerMobileLink, "font-20"].join(
                        " "
                      )}
                      to={`/${currentLang}/30`}
                    >
                      {t("first_item1")} 30 000$
                    </Link>
                    <Link
                      onClick={() => {
                        setAssets(false);
                      }}
                      className={[classes.headerMobileLink, "font-20"].join(
                        " "
                      )}
                      to={`/${currentLang}/50`}
                    >
                      {t("first_item1")} 50 000$
                    </Link>
                    <Link
                      onClick={() => {
                        setAssets(false);
                      }}
                      className={[classes.headerMobileLink, "font-20"].join(
                        " "
                      )}
                      to={`/${currentLang}/100`}
                    >
                      {t("first_item1")} 100 000$
                    </Link>
                    <a
                      href={`/pdf/${pdfPage}/${t("lang")}.pdf`}
                      // href={`/assets/docs/${pdfPage}_${locale}.pdf`}
                      download
                      className={[
                        "headerRowRightDownload",
                        classes.headerMobileDownload,
                        "font-20",
                      ].join(" ")}
                    >
                      <Trans>{t("header_download")}</Trans>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
