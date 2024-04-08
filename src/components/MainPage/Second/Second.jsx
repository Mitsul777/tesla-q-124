import React from "react";
import classes from "./Second.module.scss";

import { Trans, useTranslation } from "react-i18next";

const Second = () => {
  const { t } = useTranslation("");
  return (
    <div className={classes.second}>
      <div className={classes.secondBody}>
        <div className={"container"}>
          <div className={classes.secondRow}>
            <div className={classes.secondRowRight}>
              <p className={[classes.secondRowRightText, "font-20"].join(" ")}>
                {t("first_sub_text2")}
              </p>
              <p className={[classes.secondRowRightText, "font-20"].join(" ")}>
                {t("first_sub_text3")}
              </p>
            </div>
            <div className={classes.secondRowRight}>
              <p className={[classes.secondRowRightText, "font-20"].join(" ")}>
                {t("first_sub_text4")}
              </p>
              <p className={[classes.secondRowRightText, "font-20"].join(" ")}>
                {t("first_sub_text5")}
              </p>
              <p className={[classes.secondRowRightText, "font-20"].join(" ")}>
                {t("first_sub_text6")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
