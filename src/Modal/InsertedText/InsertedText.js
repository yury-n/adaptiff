import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";
import { colorObjToString } from "../../_utils";

import s from "./InsertedText.module.css";

export default React.forwardRef(
  ({ isActive, initialPosition, isDraggable = true, config, onClick }, ref) => {
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
          <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            className={s["inserted-text-block-inner"]}
            style={{
              fontSize: config.fontSize,
              lineHeight: "18px",
              color: config.color,
              backgroundColor: colorObjToString(config.backgroundColor),
              padding: config.padding,
              fontWeight: config.isBold ? "bold" : "normal",
              textDecoration: config.isUnderlined ? "underline" : "none",
              fontStyle: config.isItalic ? "italic" : undefined
            }}
          >
            Sample text goes here
            <br />
            more text
          </div>
        </div>
      </div>
    );
    return isDraggable ? (
      <Draggable
        defaultPosition={
          initialPosition && { x: initialPosition.left, y: initialPosition.top }
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
);
