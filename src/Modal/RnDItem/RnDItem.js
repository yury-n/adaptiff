import React from "react";
import classnames from "classnames";
import DraggableItem, {
  MARGIN_LEFT,
  MARGIN_TOP
} from "../DraggableItem/DraggableItem";
import ResizableItem from "../ResizableItem/ResizableItem";

import s from "./RnDItem.module.css";

const marginsByItemId = {};
const defaultMargins = { top: MARGIN_LEFT, left: MARGIN_TOP };

export default React.forwardRef(function(
  {
    id,
    width,
    height,
    children,
    className,
    isActive,
    initialPosition,
    lockAspectRatio,
    scale,
    setActive,
    onDragStart,
    onDragStop
  },
  ref
) {
  let draggableNode;
  const refCallback = node => {
    if (node) {
      draggableNode = node.closest(".react-draggable");
      ref(node);
    }
  };
  return (
    <DraggableItem
      isActive={isActive}
      initialPosition={initialPosition}
      onClick={setActive}
      onDragStart={onDragStart}
      onDragStop={onDragStop}
      className={classnames(s["root"], isActive && s["active"], className)}
    >
      <ResizableItem
        width={width * (scale || 1)}
        height={height * (scale || 1)}
        lockAspectRatio={lockAspectRatio}
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
      >
        {React.cloneElement(children, {
          ref: refCallback
        })}
      </ResizableItem>
    </DraggableItem>
  );
});
