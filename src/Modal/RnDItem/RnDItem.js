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
let lastHoveredItemId = null;
let activeItemId = null;
let ctrlKeyDown = false;
let altKeyDown = false;
let isWheeling = false;

const ctrlKey = 17;
const altKey = 18;
const cmdKey = 91;

const onKeyDown = e => {
  if (e.keyCode === ctrlKey || e.keyCode === cmdKey) {
    ctrlKeyDown = true;
  }
  if (e.keyCode === altKey) {
    altKeyDown = true;
  }
};

const onKeyUp = e => {
  if (e.keyCode === ctrlKey || e.keyCode === cmdKey) {
    ctrlKeyDown = false;
  }
  if (e.keyCode === altKey) {
    altKeyDown = false;
  }
};

export default React.memo(
  React.forwardRef(function(
    {
      id,
      isSvg,
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
        if (false && moveableControl) {
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
      lastHoveredItemId = id;
    };
    const onMouseLeave = () => {
      hoveredItemId = null;
    };
    let onWheelEndTimer;
    const onWheel = event => {
      if (hoveredItemId === null) {
        return;
      }
      if (!ctrlKeyDown && !altKeyDown) {
        return;
      }
      event.preventDefault();
      if (!isWheeling) {
        onWheelInteractionStart(hoveredItemId);
      }
      isWheeling = true;
      clearTimeout(onWheelEndTimer);
      onWheelEndTimer = setTimeout(() => {
        isWheeling = false;
        onWheelInteractionEnd(lastHoveredItemId);
      }, 50);
      if (hoveredItemId === activeItemId) {
        onBecomeInactive();
      }
      window.requestAnimationFrame(() => {
        const currentFrame = frames[hoveredItemId];
        if (!currentFrame) {
          return;
        }
        const currentWrapperRef = wrapperRefs[hoveredItemId];
        if (ctrlKeyDown) {
          const deg =
            parseFloat(currentFrame.get("transform", "rotate")) -
            event.deltaY / 3;
          currentFrame.set("transform", "rotate", `${deg}deg`);
          const top = parseInt(currentFrame.get("top"));
          const left = parseInt(currentFrame.get("left"));
          currentFrame.set("left", `${left}px`);
          currentFrame.set("top", `${top}px`);
        }
        if (altKeyDown) {
          const origWidth = parseInt(currentFrame.get("width"));
          const origHeight = parseInt(currentFrame.get("height"));
          const ratio = origWidth / origHeight;
          const width = parseInt(currentFrame.get("width")) - event.deltaY / 3;
          const height = width / ratio;
          currentFrame.set("width", `${width}px`);
          currentFrame.set("height", `${height}px`);
          const top = parseInt(currentFrame.get("top"));
          const left = parseInt(currentFrame.get("left"));
          currentFrame.set("left", `${left}px`);
          currentFrame.set("top", `${top}px`);
        }
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
    // const onScale = ({ target, delta, clientX, clientY, isPinch }) => {
    //   const frame = frames[id];
    //   const scaleX = frame.get("transform", "scaleX") * delta[0];
    //   const scaleY = frame.get("transform", "scaleY") * delta[1];
    //   frame.set("transform", "scaleX", scaleX);
    //   frame.set("transform", "scaleY", scaleY);
    //   setTransform(target);
    // };
    const setTransform = target => {
      target.style.cssText = frames[id].toCSS();
    };
    return (
      <>
        {targetId && (
          <Moveable
            key={`moveable-${id}-${width}-${height}-${initLeft}-${initTop}-${initRotation}`}
            target={document.getElementById(targetId)}
            container={document.querySelector(".canvas-wrapper")}
            draggable={true}
            resizable={resizable && isActive}
            // scalable={isSvg && isActive}
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
            // onScale={onScale}
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
          {!Array.isArray(children) ? (
            React.cloneElement(children, {
              ref: refCallback
            })
          ) : (
            <>
              {React.cloneElement(children[0], {
                ref: refCallback
              })}
              {children[1]}
              {children[2]}
            </>
          )}
        </div>
      </>
    );
  })
);
