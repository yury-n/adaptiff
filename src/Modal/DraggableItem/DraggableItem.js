import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";

import s from "./DraggableItem.module.css";

export const MARGIN_LEFT = -8;
export const MARGIN_TOP = -8;

export default function DraggableItem({
  isActive,
  initialPosition,
  onClick,
  onDragStart,
  onDragStop,
  className,
  children
}) {
  return (
    <Draggable
      cancel={isActive && "span"}
      onStart={onDragStart}
      onStop={onDragStop}
    >
      <div
        className={classnames(
          s["root"],
          isActive && s["active"],
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
