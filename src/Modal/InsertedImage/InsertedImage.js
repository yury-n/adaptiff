import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";

import s from "./InsertedImage.module.css";

export default ({
  imageUrl,
  isDraggable = true,
  isActive,
  initialPosition,
  onClick
}) => {
  const renderImageBlock = () => (
    <div
      className={classnames(
        s["root"],
        isActive && s["active"],
        isDraggable && s["draggable"],
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
        <img
          className={classnames(s["image"], s["content"])}
          alt=""
          src={imageUrl}
          draggable="false"
        />
      </div>
    </div>
  );
  return isDraggable ? (
    <Draggable bounds="parent" cancel="span">
      {renderImageBlock()}
    </Draggable>
  ) : (
    renderImageBlock()
  );
};
