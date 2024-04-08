import { useEffect, useState, useRef } from "react";
import classes from "./Three.module.scss";
import img1 from "../../../assets/img/4/1.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Trans, useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const Three = ({ deskTables, mobTables }) => {
  const [width, setWidth] = useState();
  const col1 = useRef(null);
  const col2 = useRef(null);
  const { t } = useTranslation("");

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
      gsap.timeline().to(col2.current, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: col1.current,
          start: "top bottom",
          end: "top center",
          scrub: 5,
          id: "scrub",
        },
      });
    }
  }, [width]);

  return (
    <div className={classes.three}>
      <div className={classes.threeBody}>
        <div className={"container"}>
          <h3 className={[classes.threeTitle, "font-40"].join(" ")}>
            {t("three_title")}{" "}
          </h3>
          <div className={classes.table_custom}>
            <div className={classes.table_custom__row}>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                Asset
              </div>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                Direct
              </div>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                Volume
              </div>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                Margin
              </div>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                S/L
              </div>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                T/P
              </div>
              <div
                className={[
                  classes.table_custom__row__column,
                  classes.table_custom__row__column_bold,
                ].join(" ")}
              >
                Profit
              </div>
            </div>
            {deskTables.map((deskI) => {
              return (
                <div className={classes.table_custom__row} key={deskI.id}>
                  <div className={classes.table_custom__row__column}>
                    <img src={deskI.img} alt="" />
                    {!deskI.img.includes("data:image") && deskI.img}
                  </div>
                  <div className={classes.table_custom__row__column}>
                    {deskI.item1}
                  </div>
                  <div className={classes.table_custom__row__column}>
                    {deskI.item2}
                  </div>
                  <div className={classes.table_custom__row__column}>
                    {deskI.item3}
                  </div>
                  <div className={classes.table_custom__row__column}>
                    {deskI.item4}
                  </div>
                  <div className={classes.table_custom__row__column}>
                    {deskI.item5}
                  </div>
                  <div className={classes.table_custom__row__column}>
                    {deskI.item6}
                  </div>
                </div>
              );
            })}

            {/* <div className={classes.table_custom__row}>
              <div className={classes.table_custom__row__column}></div>
              <div className={classes.table_custom__row__column}></div>
              <div className={[classes.table_custom__row__column, classes.table_custom__row__column_bold].join(" ")}>
                Total:
              </div>
              <div className={[classes.table_custom__row__column, classes.table_custom__row__column_bold].join(" ")}>
                7 845,00
              </div>
              <div className={classes.table_custom__row__column}></div>
              <div className={[classes.table_custom__row__column, classes.table_custom__row__column_bold].join(" ")}>
                Total:
              </div>
              <div className={[classes.table_custom__row__column, classes.table_custom__row__column_bold].join(" ")}>
                22 400,00
              </div>
            </div> */}
          </div>
          <div className={classes.table_custom_mobile}>
            <div className={classes.table_custom_mobile__header}>Asset</div>
            <div className={classes.table_custom_row}>
              <div className={classes.table_custom_row__column}>
                <img src={img1} alt="" />
              </div>
            </div>

            {mobTables.map((mobI) => {
              return (
                <div key={mobI.id} className={classes.table_custom_row}>
                  <div className={classes.table_custom_mobile__header}>
                    {mobI.title}
                  </div>
                  <div className={classes.table_custom_row__column}>
                    {mobI.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
