import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { colorObjToString } from "../../_utils";
import WebFont from "webfontloader";

import s from "./InsertedText.module.css";

export default React.memo(
  React.forwardRef(function InsertedText(
    {
      initialValue,
      isEditable,
      onFocus,
      onBlur,
      setHasCyrillic,
      config,
      scale
    },
    ref
  ) {
    const [isFocused, setIsFocused] = useState(isEditable);
    let prevHasCyrillic = /[а-яА-ЯЁё]/.test(initialValue);
    const initialValueParts = initialValue ? initialValue.split(/\n/) : [];
    const initialValuePartsWithBRs = [];
    initialValueParts.forEach((part, index) => {
      initialValuePartsWithBRs.push(part);
      initialValuePartsWithBRs.push(<br key={index} />);
    });
    initialValuePartsWithBRs.pop();

    useEffect(() => {
      if (isEditable) {
        setIsFocused(true);
      }
    }, [isEditable]);

    if (config.fontFamily !== "Helvetica") {
      WebFont.load({
        google: {
          families: [`${config.fontFamily}:latin,cyrillic`]
        }
      });
    }

    const isFocusedAndEditable = isEditable && isFocused;

    return (
      <span
        ref={ref}
        contentEditable={isFocusedAndEditable}
        onClick={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          onBlur();
          setIsFocused(false);
        }}
        onKeyUp={e => {
          const hasCyrillic = /[а-яА-ЯЁё]/.test(e.target.innerText);
          console.log({ hasCyrillic });
          if (prevHasCyrillic !== hasCyrillic) {
            setHasCyrillic(hasCyrillic);
          }
        }}
        suppressContentEditableWarning={true}
        className={classnames(s["text"], isFocusedAndEditable && s["editable"])}
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
