import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";

import s from "./DraggableItem.module.css";

export default function DraggableItem({
  isActive,
  initialPosition,
  onClick,
  children
}) {
  console.log("initialPosition", initialPosition);
  return (
    <Draggable
      bounds="parent"
      cancel="span"
      positionOffset={
        initialPosition
          ? { x: initialPosition.left, y: initialPosition.top }
          : {}
      }
    >
      <div
        className={classnames(
          s["root"],
          isActive && s["active"],
          initialPosition && s["with-initial-position"]
        )}
        onClick={onClick}
      >
        <div className={s["content-inner-wrapper"]}>
          <div className={s["content"]}>{children}</div>
        </div>
      </div>
    </Draggable>
  );
}
