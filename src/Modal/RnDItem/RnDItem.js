import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Moveable from "react-moveable";
import { Frame } from "scenejs";

import "./global.overrides.css";
import s from "./RnDItem.module.css";

const frames = [];

export default React.forwardRef(function(
  {
    id,
    width: initWidth,
    height: initHeight,
    rotation: initRotation = 0,
    children,
    className,
    isActive,
    isHighlighted,
    initialPosition = {},
    lockAspectRatio,
    scale,
    resizable = true,
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
  const width = initWidth * (scale || 1);
  const height = initHeight * (scale || 1);
  useEffect(() => {
    frames[id] = new Frame({
      width: `${width}px`,
      height: `${height}px`,
      left: `${initialPosition && initialPosition.left}`,
      top: `${initialPosition && initialPosition.top}`,
      transform: {
        rotate: `${initRotation}deg`,
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }
    });
  }, [initWidth, initHeight, scale]);
  const onDrag = ({ target, top, left }) => {
    frames[id].set("left", `${left}px`);
    frames[id].set("top", `${top}px`);
    setTransform(target);
  };
  const onResize = ({ target, delta, width, height, direction }) => {
    frames[id].set("width", `${width}px`);
    frames[id].set("height", `${height}px`);
    const top = parseInt(frames[id].get("top"));
    const left = parseInt(frames[id].get("left"));
    const deg = parseFloat(frames[id].get("transform", "rotate"));
    if (deg === 0) {
      if (direction[0] === -1) {
        frames[id].set("left", `${left - delta[0]}px`);
      }
      if (direction[1] === -1) {
        frames[id].set("top", `${top - delta[1]}px`);
      }
    }
    setTransform(target);
  };
  const onRotate = ({ target, beforeDelta }) => {
    const deg = parseFloat(frames[id].get("transform", "rotate")) + beforeDelta;
    frames[id].set("transform", "rotate", `${deg}deg`);
    setTransform(target);
  };
  const setTransform = target => {
    target.style.cssText = frames[id].toCSS();
  };
  return (
    <>
      {targetId && (
        <Moveable
          key={`moveable-${id}`}
          target={document.getElementById(targetId)}
          container={document.querySelector(".canvas-wrapper")}
          draggable={true}
          resizable={resizable && isActive}
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
          ["moveable"],
          s["moveable"],
          isActive && s["active"],
          className
        )}
        style={{
          width,
          height,
          left: initialPosition && initialPosition.left,
          top: initialPosition && initialPosition.top,
          transform: `rotate(${initRotation}deg)`
        }}
        onClick={onClick}
      >
        {React.cloneElement(children, {
          ref: refCallback
        })}
      </div>
    </>
  );
});
