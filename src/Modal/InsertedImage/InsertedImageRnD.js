import React from "react";
import InsertedImage from "../InsertedImage/InsertedImage";
import RnDItem from "../RnDItem/RnDItem";

import s from "./InsertedImageRnD.module.css";

export default React.memo(
  React.forwardRef(function InsertedImageRnD({ imageUrl, ...restProps }, ref) {
    return (
      <RnDItem {...restProps} ref={ref}>
        <InsertedImage className={s["image"]} imageUrl={imageUrl} />
      </RnDItem>
    );
  })
);
