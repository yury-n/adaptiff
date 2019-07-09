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
      defaultSize={{
        width,
        height
      }}
      lockAspectRatio={lockAspectRatio}
      enable={
        lockAspectRatio
          ? {
              top: false,
              right: false,
              bottom: false,
              left: false,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true
            }
          : undefined
      }
      onResizeStart={onResizeStart}
      onResize={onResize}
      onResizeStop={onResizeStop}
      handleStyles={{
        top: { top: -7, height: 14, zIndex: 100 },
        bottom: { bottom: -7, height: 14, zIndex: 100 },
        left: { left: -7, width: 14, zIndex: 100 },
        right: { right: -7, width: 14, zIndex: 100 },
        topRight: { top: -7, width: 14, height: 14, right: -7, zIndex: 100 },
        bottomRight: {
          bottom: -7,
          width: 14,
          height: 14,
          right: -7,
          zIndex: 100
        },
        bottomLeft: {
          bottom: -7,
          width: 14,
          height: 14,
          left: -7,
          zIndex: 100
        },
        topLeft: { top: -7, width: 14, height: 14, left: -7, zIndex: 100 }
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
      {!lockAspectRatio && (
        <>
          <div
            className={classnames(s["handle"], s["top"], resizeHandleClassName)}
          />
          <div
            className={classnames(
              s["handle"],
              s["bottom"],
              resizeHandleClassName
            )}
          />
          <div
            className={classnames(
              s["handle"],
              s["left"],
              resizeHandleClassName
            )}
          />
          <div
            className={classnames(
              s["handle"],
              s["right"],
              resizeHandleClassName
            )}
          />
        </>
      )}
      {children}
    </Resizable>
  );
};
