import React from "react";
import classnames from "classnames";

import s from "./PrevNextButtons.module.css";

export const PrevNextButtons = ({ goToNext, goToPrev }) => {
  return (
    <div className={s["root"]}>
      <div
        className={classnames(s["paddle-button"], s["left"])}
        onClick={goToNext}
      >
        &larr; Prev
      </div>
      <div
        className={classnames(s["paddle-button"], s["right"])}
        onClick={goToPrev}
      >
        Next &rarr;
      </div>
    </div>
  );
};
PrevNextButtons.displayName = "PrevNextButtons";

export default PrevNextButtons;
