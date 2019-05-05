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
  return (
    <Draggable bounds="parent" cancel="span">
      <div
        className={classnames(
          s["root"],
          isActive && s["active"],
          initialPosition && s["with-initial-position"]
        )}
        onClick={onClick}
        style={
          initialPosition && {
            left: initialPosition.left,
            top: initialPosition.top
          }
        }
      >
        <div className={s["content-inner-wrapper"]}>
          <div className={s["content"]}>{children}</div>
        </div>
      </div>
    </Draggable>
  );
}
