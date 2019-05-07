import React from "react";
import { ResizableBox } from "react-resizable";

import "./global.overrides.css";
import s from "./InsertedImage.module.css";

export default React.memo(
  React.forwardRef(function InsertedImage({ width, height, imageUrl, onResize }, ref) {
    console.log(width, height);

    const resize = (evt, data) => {
      onResize(data);
    };

    return (
      <ResizableBox width={width} height={height} lockAspectRatio={true} onResize={resize}>
        <img
          ref={ref}
          className={s["image"]}
          alt=""
          src={imageUrl}
          draggable="false"
        />
      </ResizableBox>
    );
  })
);
