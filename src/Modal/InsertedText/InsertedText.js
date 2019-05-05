import React from "react";
import { colorObjToString } from "../../_utils";

import s from "./InsertedText.module.css";

export default React.memo(
  React.forwardRef(function InsertedText({ initialValue, config, scale }, ref) {
    const initialValueParts = initialValue ? initialValue.split(/\n/) : [];
    const initialValuePartsWithBRs = [];
    initialValueParts.forEach(part => {
      initialValuePartsWithBRs.push(part);
      initialValuePartsWithBRs.push(<br />);
    });
    initialValuePartsWithBRs.pop();

    return (
      <span
        ref={ref}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className={s["text"]}
        style={{
          fontSize: `${config.fontSize * (scale || 1)}px`,
          fontFamily: config.fontFamily,
          color: config.color,
          backgroundColor: colorObjToString(config.backgroundColor),
          padding: `${config.padding * (scale || 1)}px`,
          fontWeight: config.isBold ? "bold" : "normal",
          textDecoration: config.isUnderlined ? "underline" : "none",
          fontStyle: config.isItalic ? "italic" : undefined
        }}
      >
        {initialValuePartsWithBRs}
      </span>
    );
  })
);
