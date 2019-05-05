import React from "react";

import s from "./InsertedImage.module.css";

export default React.memo(
  React.forwardRef(function InsertedImage({ imageUrl }, ref) {
    return (
      <img
        ref={ref}
        className={s["image"]}
        alt=""
        src={imageUrl}
        draggable="false"
      />
    );
  })
);
