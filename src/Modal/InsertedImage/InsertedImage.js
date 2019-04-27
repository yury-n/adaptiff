import React from "react";
import Draggable from "react-draggable";

export default ({ imageUrl, isDraggable = true }) => {
  const renderImageBlock = () => <img src={imageUrl} />;
  return isDraggable ? (
    <Draggable bounds="parent" cancel="span">
      {renderImageBlock()}
    </Draggable>
  ) : (
    renderImageBlock()
  );
};
