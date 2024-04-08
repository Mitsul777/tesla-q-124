import React, { useState, useRef, useEffect } from "react";
import img1 from "../../../assets/img/2/1_mob.png";
import { Trans, useTranslation } from "react-i18next";
import gsap from "gsap";
import classes from "./First.module.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const First = (props) => {
  const { t } = useTranslation("");
  const [width, setWidth] = useState();
  const phoneRef = useRef(null);
  const chartRef = useRef(null);
  const monet1Ref = useRef(null);
  const monet2Ref = useRef(null);
  const monet3Ref = useRef(null);
  const monet4Ref = useRef(null);

  const col1 = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", (event) => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (width > 1220) {
      gsap.timeline().to(phoneRef.current, {
        y: 0,
        delay: 0.3,
        duration: 1,
      });
      gsap.timeline().to(chartRef.current, {
        x: 0,
        duration: 2,
        delay: 0.3,
        opacity: 1,
      });
      gsap.timeline().to(monet1Ref.current, {
        y: 0,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        rotate: 0,
      });
      gsap.timeline().to(monet2Ref.current, {
        y: 0,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        rotate: 0,
      });
      gsap.timeline().to(monet3Ref.current, {
        y: 0,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        rotate: 0,
      });
      gsap.timeline().to(monet4Ref.current, {
        y: 0,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        rotate: 0,
      });
    }
  }, [width]);

  return (
    <div className={[classes.first]}>
      <div className={"container"}>
        <div className={classes.firstBody}>
          <div className={classes.firstWrapper}>
            <h1 className={[classes.firstTitle, "font-40"].join(" ")}>
              {t("first_title")}
            </h1>
            <p className={[classes.firstSubtitle, "font-20"].join(" ")}>
              {t("first_subtitle")}
            </p>
            <div className={classes.firstRow}>
              <div className={classes.firstRowItem}>
                <p
                  className={[classes.firstRowItemNumber, "font-30"].join(" ")}
                >
                  {props.ammount}
                </p>
                <p className={[classes.firstRowItemText, "font-18"].join(" ")}>
                  {t("first_item1")}
                </p>
              </div>
              <div className={classes.firstRowItem}>
                <p
                  className={[classes.firstRowItemNumber, "font-30"].join(" ")}
                >
                  {props.profit}
                </p>
                <p className={[classes.firstRowItemText, "font-18"].join(" ")}>
                  {t("first_item2")}
                </p>
              </div>
              <div className={classes.firstRowItem}>
                <p
                  className={[classes.firstRowItemNumber, "font-30"].join(" ")}
                >
                  {props.term} {t("first_item31")}
                </p>
                <p className={[classes.firstRowItemText, "font-18"].join(" ")}>
                  {t("first_item3")}
                </p>
              </div>
            </div>
            <div className={classes.firstSubBlock}>
              <h3 className={[classes.firstSubBlockTitle, "font-20"].join(" ")}>
                {t("first_sub_title")}
              </h3>
              <p className={[classes.firstSubBlockText, "font-20"].join(" ")}>
                {t("first_sub_text1")}
              </p>
              <p className={[classes.firstSubBlockText, "font-20"].join(" ")}>
                {t("first_sub_text11")}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.firstMobImg}>
          <img src={img1} alt="" />
          <img src="/assets/img/2/1_mob.png" alt="" />
        </div>
        <div className={"container1"}>
          <div className={[classes.firstSubBlock, classes.mob].join(" ")}>
            <h3 className={[classes.firstSubBlockTitle, "font-20"].join(" ")}>
              {t("first_sub_title")}
            </h3>
            <p className={[classes.firstSubBlockText, "font-20"].join(" ")}>
              {t("first_sub_text1")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
