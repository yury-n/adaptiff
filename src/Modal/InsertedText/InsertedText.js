import React from "react";
import classnames from "classnames";
import { colorObjToString } from "../../_utils";
import WebFont from "webfontloader";

import s from "./InsertedText.module.css";

export default React.memo(
  React.forwardRef(function InsertedText(
    {
      id,
      initialValue,
      setHasCyrillic,
      config,
      scale,
      isActive,
      isEditable = true,
      onClick
    },
    ref
  ) {
    let spanNode;
    let prevHasCyrillic = /[а-яА-ЯЁё]/.test(initialValue);
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
        ref={node => {
          spanNode = node;
          ref && ref(node);
        }}
        contentEditable={isEditable}
        onKeyUp={e => {
          const hasCyrillic = /[а-яА-ЯЁё]/.test(e.target.innerText);
          if (prevHasCyrillic !== hasCyrillic) {
            setHasCyrillic(hasCyrillic);
          }
        }}
        suppressContentEditableWarning={true}
        className={classnames(s["text"], isActive && s["active"])}
        onClick={e => {
          if (isActive) {
            e.stopPropagation();
          }
          const valueToLower = spanNode.innerText.toLowerCase();
          if (
            valueToLower.includes("sample") &&
            valueToLower.includes("text")
          ) {
            document.execCommand("selectAll", false, null);
          }
          onClick && onClick(id);
        }}
        style={{
          position: "relative",
          zIndex: "1000", // as RnDItem_moveable
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
          borderRadius: `${config.borderRadius || 0}px`,
          textAlign: config.textAlign || "left",
          borderStyle: "solid",
          borderColor: config.color,
          display: config.isInline ? "inline" : "block",
          lineHeight:
            config.lineHeight !== undefined ? config.lineHeight / 10 : 1.1
        }}
      >
        {initialValuePartsWithBRs}
      </span>
    );
  })
);
