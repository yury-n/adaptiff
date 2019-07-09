import React from "react";
import classnames from "classnames";
import { colorObjToString } from "../../_utils";
import WebFont from "webfontloader";

import s from "./InsertedText.module.css";

export default React.memo(
  React.forwardRef(function InsertedText(
    { initialValue, isEditable, config, scale },
    ref
  ) {
    const initialValueParts = initialValue ? initialValue.split(/\n/) : [];
    const initialValuePartsWithBRs = [];
    initialValueParts.forEach((part, index) => {
      initialValuePartsWithBRs.push(part);
      initialValuePartsWithBRs.push(<br key={index} />);
    });
    initialValuePartsWithBRs.pop();

    if (config.fontFamily !== "Helvetica") {
      WebFont.load({
        google: {
          families: [`${config.fontFamily}:latin,cyrillic`]
        }
      });
    }

    return (
      <span
        ref={ref}
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        className={classnames(s["text"], isEditable && s["editable"])}
        style={{
          fontSize: `${config.fontSize * (scale || 1)}px`,
          fontFamily: config.fontFamily,
          color: config.color,
          backgroundColor: colorObjToString(config.backgroundColor),
          padding: `${config.padding * (scale || 1)}px`,
          fontWeight: config.isBold ? "bold" : "normal",
          textDecoration: config.isUnderlined ? "underline" : "none",
          fontStyle: config.isItalic ? "italic" : undefined,
          letterSpacing: `${config.letterSpacing * (scale || 1)}px`,
          borderWidth: `${config.borderWidth * (scale || 1)}px`,
          borderStyle: "solid",
          borderColor: config.color
        }}
      >
        {initialValuePartsWithBRs}
      </span>
    );
  })
);
