import React from "react";
import classnames from "classnames";
import InsertedImage from "./InsertedImage";
import DraggableItem, {
  MARGIN_LEFT,
  MARGIN_TOP
} from "../DraggableItem/DraggableItem";

import s from "./InsertedImageDraggable.module.css";

const marginsByItemId = {};
const defaultMargins = { top: MARGIN_LEFT, left: MARGIN_TOP };

export default React.memo(
  React.forwardRef(function InsertedImageDraggable(
    {
      id,
      isActive,
      initialPosition,
      width,
      height,
      scale,
      imageUrl,
      setActive
    },
    ref
  ) {
    let draggableNode;
    return (
      <DraggableItem
        isActive={isActive}
        initialPosition={initialPosition}
        onClick={setActive}
        className={classnames(s["root"], isActive && s["active"])}
      >
        <InsertedImage
          ref={node => {
            if (node) {
              draggableNode = node.closest(".react-draggable");
              ref(node);
            }
          }}
          width={width}
          height={height}
          scale={scale}
          imageUrl={imageUrl}
          resizeHandleClassName={s["resize-handle"]}
          onResizeStart={setActive}
          onResize={(e, direction, ref, d) => {
            const margins = marginsByItemId[id] || defaultMargins;
            switch (direction) {
              case "topRight": {
                draggableNode.style.marginTop = `${margins.top - d.height}px`;
                break;
              }
              case "topLeft": {
                draggableNode.style.marginTop = `${margins.top - d.height}px`;
                draggableNode.style.marginLeft = `${margins.left - d.width}px`;
                break;
              }
              case "bottomLeft": {
                draggableNode.style.marginLeft = `${margins.left - d.width}px`;
                break;
              }
              default:
            }
          }}
          onResizeStop={(e, direction, ref, d) => {
            const margins = marginsByItemId[id] || defaultMargins;
            switch (direction) {
              case "topRight": {
                marginsByItemId[id] = {
                  top: margins.top - d.height,
                  left: margins.left
                };
                break;
              }
              case "topLeft": {
                marginsByItemId[id] = {
                  top: margins.top - d.height,
                  left: margins.left - d.width
                };
                break;
              }
              case "bottomLeft": {
                marginsByItemId[id] = {
                  top: margins.top,
                  left: margins.left - d.width
                };
                break;
              }
              default:
            }
          }}
        />
      </DraggableItem>
    );
  })
);
