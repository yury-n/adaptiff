import React from "react";
import classnames from "classnames";
import throttle from "lodash.throttle";
import Draggable from "react-draggable";

import s from "./DraggableItem.module.css";

export const MARGIN_LEFT = -9;
export const MARGIN_TOP = -9;

let wasDragged = false;

const onDragThrottled = throttle(
  () => {
    wasDragged = true;
  },
  250,
  { leading: false, trailing: false }
);

export default function DraggableItem({
  isActive,
  isHighlighted,
  initialPosition,
  onClick,
  onDragStart,
  onDragStop,
  className,
  withOuterFrameWhenActive,
  children
}) {
  return (
    <Draggable
      cancel={isActive ? "span" : ""}
      onStart={onDragStart}
      onDrag={onDragThrottled}
      onStop={() => {
        onDragStop(wasDragged);
        wasDragged = false;
      }}
    >
      <div
        className={classnames(
          s["root"],
          isActive && s["active"],
          isHighlighted && s["highlighted"],
          withOuterFrameWhenActive && s["with-outer-frame-when-active"],
          initialPosition && s["with-initial-position"],
          className
        )}
        onClick={onClick}
        style={initialPosition}
      >
        <div className={s["content-inner-wrapper"]}>
          <div className={s["content"]}>{children}</div>
        </div>
      </div>
    </Draggable>
  );
}
