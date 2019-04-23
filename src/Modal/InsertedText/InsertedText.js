import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";
import { colorObjToString } from "../../_utils";

import s from "./InsertedText.module.css";

export default React.memo(
  React.forwardRef(
    (
      {
        isActive,
        initialValue,
        initialPosition,
        isDraggable = true,
        config,
        scale,
        onClick
      },
      ref
    ) => {
      const initialValueParts = initialValue ? initialValue.split(/\n/) : [];
      const initialValuePartsWithBRs = []; // with <br/>s in between
      initialValueParts.forEach(part => {
        initialValuePartsWithBRs.push(part);
        initialValuePartsWithBRs.push(<br />);
      });
      initialValuePartsWithBRs.pop();

      const renderTextBlock = () => (
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
          <div ref={ref} className={s["inserted-text-block"]}>
            <span
              contentEditable={true}
              suppressContentEditableWarning={true}
              className={s["inserted-text-block-inner"]}
              style={{
                fontSize: `${config.fontSize * (scale || 1)}px`,
                fontFamily: config.fontFamily,
                color: config.color,
                backgroundColor: colorObjToString(config.backgroundColor),
                padding: `${config.padding * (scale || 1)}px`,
                fontWeight: config.isBold ? "bold" : "normal",
                textDecoration: config.isUnderlined ? "underline" : "none",
                fontStyle: config.isItalic ? "italic" : undefined
                // transform: scale < 1 ? `scale(${scale})` : undefined,
              }}
            >
              {initialValuePartsWithBRs}
            </span>
          </div>
        </div>
      );
      return isDraggable ? (
        <Draggable
          defaultPosition={
            initialPosition
              ? {
                  x: initialPosition.left,
                  y: initialPosition.top
                }
              : undefined
          }
          bounds="parent"
          cancel="span"
        >
          {renderTextBlock()}
        </Draggable>
      ) : (
        renderTextBlock()
      );
    }
  )
);
