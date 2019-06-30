import React from "react";
import classnames from "classnames";
import { Resizable } from "re-resizable";

import s from "./ResizableItem.module.css";

export default ({
  width,
  height,
  children,
  resizeHandleClassName,
  onResizeStart,
  onResize,
  onResizeStop,
  lockAspectRatio = true
}) => {
  return (
    <Resizable
      className={s["resizable"]}
      width={width}
      height={height}
      lockAspectRatio={lockAspectRatio}
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
      {children}
    </Resizable>
  );
};
