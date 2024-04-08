import React, { useEffect, useRef, useState } from "react";
import classes from "./Four.module.scss";
import img1 from "../../../assets/img/5/1.png";

const Four = ({ title }) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", (event) => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={classes.four}>
      <div className={classes.fourBody}>
        <div className={"container"}>
          <h2 className={[classes.fourTitle, "font-40"].join(" ")}>{title}</h2>
          <div className={classes.fourImg}>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
