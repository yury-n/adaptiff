import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";
import { colorObjToString } from "../../_utils";

import s from "./InsertedText.module.css";

export default React.memo(
  React.forwardRef(
    (
      { isActive, initialPosition, isDraggable = true, config, onClick, setValue },
      ref
    ) => {
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
            <textarea
              onChange={setValue}
              value={config.typedText}
              className={s["inserted-text-block-inner"]}
              style={{
                fontSize: config.fontSize,
                fontFamily: "sans-serif",
                color: config.color,
                backgroundColor: colorObjToString(config.backgroundColor),
                padding: config.padding,
                fontWeight: config.isBold ? "bold" : "normal",
                textDecoration: config.isUnderlined ? "underline" : "none",
                fontStyle: config.isItalic ? "italic" : undefined
              }}
            />
          </div>
        </div>
      );
      return isDraggable ? (
        <Draggable
          defaultPosition={
            initialPosition && {
              x: initialPosition.left,
              y: initialPosition.top
            }
          }
          bounds="parent"
          cancel="textarea"
        >
          {renderTextBlock()}
        </Draggable>
      ) : (
        renderTextBlock()
      );
    }
  )
);
