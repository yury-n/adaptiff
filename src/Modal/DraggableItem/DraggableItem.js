import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";

import s from "./DraggableItem.module.css";

export const MARGIN_LEFT = -9;
export const MARGIN_TOP = -9;

export default function DraggableItem({
  isActive,
  isHighlighted,
  initialPosition,
  onClick,
  onDragStart,
  onDragStop,
  className,
  withOuterFrame,
  children
}) {
  return (
    <Draggable cancel="span" onStart={onDragStart} onStop={onDragStop}>
      <div
        className={classnames(
          s["root"],
          isActive && s["active"],
          isHighlighted && s["highlighted"],
          withOuterFrame && s["with-outer-frame"],
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
