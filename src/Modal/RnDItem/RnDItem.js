import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Moveable from "react-moveable";
import { Frame } from "scenejs";

import "./global.overrides.css";
import s from "./RnDItem.module.css";
import { macify } from "../../_utils";

const frames = [];
const wrapperRefs = [];
let hoveredItemId = null;
let activeItemId = null;
let ctrlKeyDown = false;
let isWheeling = false;

const onKeyDown = e => {
  const ctrlKey = 17;
  const cmdKey = 91;
  if (e.target.tagName === "INPUT") {
    return;
  }
  if (e.keyCode === ctrlKey || e.keyCode === cmdKey) {
    ctrlKeyDown = true;
  }
};

const onKeyUp = e => {
  ctrlKeyDown = false;
};

export default React.memo(
  React.forwardRef(function(
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
      onBecomeInactive,
      onDragStart,
      onDragEnd,
      onResizeStart,
      onResizeEnd,
      onRotateStart,
      onRotateEnd,
      onWheelInteractionStart,
      onWheelInteractionEnd
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
    const wrapperRefCallback = node => {
      if (node) {
        wrapperRefs[id] = node;
      }
    };
    const width = initWidth * (scale || 1);
    const height = initHeight * (scale || 1);
    const initLeft = initialPosition ? initialPosition.left : 0;
    const initTop = initialPosition ? initialPosition.top : 0;
    useEffect(() => {
      frames[id] = new Frame({
        width: `${initWidth * (scale || 1)}px`,
        height: `${initHeight * (scale || 1)}px`,
        left: initLeft,
        top: initTop,
        transform: {
          rotate: `${initRotation}deg`,
          scaleX: 1,
          scaleY: 1,
          matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      });
    }, [initWidth, initHeight, scale, initRotation, initLeft, initTop]);
    useEffect(() => {
      window.addEventListener("wheel", onWheel);
      window.addEventListener("keyup", onKeyUp);
      window.addEventListener("keydown", onKeyDown);
      wrapperRefs[id].addEventListener("mouseover", onMouseOver);
      wrapperRefs[id].addEventListener("mouseleave", onMouseLeave);
      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("keyup", onKeyUp);
        window.removeEventListener("keydown", onKeyDown);
        wrapperRefs[id].removeEventListener("mouseover", onMouseOver);
        wrapperRefs[id].removeEventListener("mouseleave", onMouseLeave);
      };
    }, []);
    useEffect(() => {
      if (isActive) {
        const moveableControl = window.document.querySelector(
          ".moveable-control"
        );
        if (moveableControl) {
          moveableControl.setAttribute(
            "aria-label",
            macify("Rotate (Ctrl + Scroll)")
          );
          moveableControl.setAttribute("data-balloon-pos", "up");
        }
        activeItemId = id;
      } else {
        if (activeItemId === id) {
          activeItemId = null;
        }
      }
    }, [isActive]);
    const onMouseOver = () => {
      hoveredItemId = id;
    };
    const onMouseLeave = () => {
      hoveredItemId = null;
    };
    let onWheelEndTimer;
    const onWheel = event => {
      if (!ctrlKeyDown) {
        return;
      }
      event.preventDefault();
      if (!isWheeling) {
        onWheelInteractionStart();
      }
      isWheeling = true;
      clearTimeout(onWheelEndTimer);
      onWheelEndTimer = setTimeout(() => {
        isWheeling = false;
        onWheelInteractionEnd();
      }, 50);
      if (hoveredItemId === activeItemId) {
        onBecomeInactive();
      }
      window.requestAnimationFrame(() => {
        const currentFrame = frames[hoveredItemId];
        const currentWrapperRef = wrapperRefs[hoveredItemId];
        const deg =
          parseFloat(currentFrame.get("transform", "rotate")) -
          event.deltaY / 2;
        currentFrame.set("transform", "rotate", `${deg}deg`);
        const top = parseInt(currentFrame.get("top"));
        const left = parseInt(currentFrame.get("left"));
        currentFrame.set("left", `${left}px`);
        currentFrame.set("top", `${top}px`);
        currentWrapperRef.style.cssText = currentFrame.toCSS();
      });
    };
    const onDrag = ({ target, top, left }) => {
      frames[id].set("left", `${left}px`);
      frames[id].set("top", `${top}px`);
      const deg = parseFloat(frames[id].get("transform", "rotate"));
      frames[id].set("transform", "rotate", `${deg}deg`);
      setTransform(target);
    };
    const onResize = ({ target, delta, width, height, direction }) => {
      frames[id].set("width", `${width}px`);
      frames[id].set("height", `${height}px`);
      const top = parseInt(frames[id].get("top"));
      const left = parseInt(frames[id].get("left"));
      const deg = parseFloat(frames[id].get("transform", "rotate"));
      if (deg === 0) {
        frames[id].set("left", `${left}px`);
        frames[id].set("top", `${top}px`);
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
      const deg =
        parseFloat(frames[id].get("transform", "rotate")) + beforeDelta;
      const top = parseInt(frames[id].get("top"));
      const left = parseInt(frames[id].get("left"));
      frames[id].set("left", `${left}px`);
      frames[id].set("top", `${top}px`);
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
            key={`moveable-${id}-${width}-${height}-${initLeft}-${initTop}`}
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
          onClick={() => onClick(id)}
          ref={wrapperRefCallback}
        >
          {React.cloneElement(children, {
            ref: refCallback
          })}
        </div>
      </>
    );
  })
);
