import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Moveable from "react-moveable";
import { Frame } from "scenejs";

import "./global.overrides.css";
import s from "./RnDItem.module.css";

let frame;

export default React.forwardRef(function(
  {
    id,
    width: initWidth,
    height: initHeight,
    children,
    className,
    isActive,
    isHighlighted,
    initialPosition,
    lockAspectRatio,
    scale,
    onClick,
    onDragStart,
    onDragEnd,
    onResizeStart,
    onResizeEnd,
    onRotateStart,
    onRotateEnd
  },
  ref
) {
  const [targetId, setTargetId] = useState(null);
  const refCallback = node => {
    if (node) {
      ref(node);
      setTargetId(id);
    }
  };
  const width = initWidth; // initWidth * (scale || 1);
  const height = initHeight; //initHeight * (scale || 1);
  useEffect(() => {
    frame = new Frame({
      width: `${width}px`,
      height: `${height}px`,
      left: "0px",
      top: "0px",
      transform: {
        rotate: "0deg",
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }
    });
  }, []);
  const onDrag = ({ target, top, left }) => {
    frame.set("left", `${left}px`);
    frame.set("top", `${top}px`);
    setTransform(target);
  };
  const onResize = ({ target, width, height }) => {
    frame.set("width", `${width}px`);
    frame.set("height", `${height}px`);
    setTransform(target);
  };
  const onRotate = ({ target, beforeDelta }) => {
    const deg = parseFloat(frame.get("transform", "rotate")) + beforeDelta;
    frame.set("transform", "rotate", `${deg}deg`);
    setTransform(target);
  };
  const setTransform = target => {
    target.style.cssText = frame.toCSS();
  };
  return (
    <>
      {targetId && (
        <Moveable
          key={`moveable-${id}`}
          target={document.getElementById(targetId)}
          container={document.querySelector(".canvas-wrapper")}
          draggable={true}
          resizable={isActive}
          rotatable={isActive}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleResize={1}
          origin={false}
          onDrag={onDrag}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onResize={onResize}
          onResizeStart={onResizeStart}
          onResizeEnd={onResizeEnd}
          onRotate={onRotate}
          onRotateStart={onRotateStart}
          onRotateEnd={onRotateEnd}
          keepRatio={false}
        />
      )}
      <div
        id={id}
        className={classnames(
          s["moveable"],
          isActive && s["active"],
          className
        )}
        style={{ width, height }}
        onClick={onClick}
      >
        {React.cloneElement(children, {
          ref: refCallback
        })}
      </div>
    </>
  );
});
