import React from "react";
import classnames from "classnames";
import { Resizable } from "re-resizable";

import "./global.overrides.css";
import s from "./InsertedImage.module.css";

export default React.memo(
  React.forwardRef(function InsertedImage(
    {
      width,
      height,
      scale,
      imageUrl,
      onResizeStart,
      onResize,
      onResizeStop,
      resizeHandleClassName
    },
    ref
  ) {
    return (
      <Resizable
        className={s["resizable"]}
        width={width * (scale || 1)}
        height={height * (scale || 1)}
        lockAspectRatio={true}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true
        }}
        onResizeStart={onResizeStart}
        onResize={onResize}
        onResizeStop={onResizeStop}
        handleStyles={{
          topRight: { top: -20, right: -20 },
          bottomRight: { bottom: -20, right: -20 },
          bottomLeft: { bottom: -20, left: -20 },
          topLeft: { top: -20, left: -20 }
        }}
      >
        <div
          className={classnames(
            s["handle"],
            s["top-right"],
            resizeHandleClassName
          )}
        />
        <div
          className={classnames(
            s["handle"],
            s["top-left"],
            resizeHandleClassName
          )}
        />
        <div
          className={classnames(
            s["handle"],
            s["bottom-right"],
            resizeHandleClassName
          )}
        />
        <div
          className={classnames(
            s["handle"],
            s["bottom-left"],
            resizeHandleClassName
          )}
        />
        <img
          ref={ref}
          className={s["image"]}
          alt=""
          src={imageUrl}
          draggable="false"
        />
      </Resizable>
    );
  })
);
