import React from "react";
import classnames from "classnames";
import DraggableItem, {
  MARGIN_LEFT,
  MARGIN_TOP
} from "../DraggableItem/DraggableItem";
import ResizableItem from "../ResizableItem/ResizableItem";

import s from "./RnDItem.module.css";

const initMarginsByItemId = {};
const defaultMargins = { top: MARGIN_LEFT, left: MARGIN_TOP };

let iframeNode;

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
    onClick,
    onDragStart,
    onDragStop,
    onResizeStart,
    onResizeStop
  },
  ref
) {
  const refCallback = node => {
    if (node) {
      iframeNode = node;
      ref(node);
    }
  };
  const draggableNode = iframeNode && iframeNode.closest(".react-draggable");
  return (
    <DraggableItem
      isActive={isActive}
      initialPosition={initialPosition}
      onClick={onClick}
      onDragStart={onDragStart}
      onDragStop={onDragStop}
      className={classnames(s["root"], isActive && s["active"], className)}
    >
      <ResizableItem
        width={width * (scale || 1)}
        height={height * (scale || 1)}
        lockAspectRatio={lockAspectRatio}
        resizeHandleClassName={s["resize-handle"]}
        onResizeStart={onResizeStart}
        onResize={(e, direction, ref, d) => {
          const margins = initMarginsByItemId[id] || defaultMargins;
          switch (direction) {
            case "top":
            case "topRight": {
              draggableNode.style.marginTop = `${margins.top - d.height}px`;
              break;
            }
            case "topLeft": {
              draggableNode.style.marginTop = `${margins.top - d.height}px`;
              draggableNode.style.marginLeft = `${margins.left - d.width}px`;
              break;
            }
            case "left":
            case "bottomLeft": {
              draggableNode.style.marginLeft = `${margins.left - d.width}px`;
              break;
            }
            default:
          }
        }}
        onResizeStop={(e, direction, ref, d) => {
          const margins = initMarginsByItemId[id] || defaultMargins;
          switch (direction) {
            case "topRight": {
              initMarginsByItemId[id] = {
                top: margins.top - d.height,
                left: margins.left
              };
              break;
            }
            case "topLeft": {
              initMarginsByItemId[id] = {
                top: margins.top - d.height,
                left: margins.left - d.width
              };
              break;
            }
            case "bottomLeft": {
              initMarginsByItemId[id] = {
                top: margins.top,
                left: margins.left - d.width
              };
              break;
            }
            default:
          }
          onResizeStop();
        }}
      >
        {React.cloneElement(children, {
          ref: refCallback
        })}
      </ResizableItem>
    </DraggableItem>
  );
});
