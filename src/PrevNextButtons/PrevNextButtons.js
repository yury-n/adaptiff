import React from "react";
import classnames from "classnames";

import s from "./PrevNextButtons.module.css";

export const PrevNextButtons = ({ className, goToNext, goToPrev }) => {
  return (
    <div className={classnames(s["root"], className)}>
      <div
        className={classnames(s["paddle-button"], s["left"])}
        onClick={goToPrev}
      >
        &larr; prev
      </div>
      <div
        className={classnames(s["paddle-button"], s["right"])}
        onClick={goToNext}
      >
        next &rarr;
      </div>
    </div>
  );
};
PrevNextButtons.displayName = "PrevNextButtons";

export default PrevNextButtons;
