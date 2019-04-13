import React from "react";
import classnames from "classnames";
import Draggable from "react-draggable";
import { colorObjToString } from "../../_utils";

import s from "./InsertedText.module.css";

export default ({ isActive, config, onClick }) => (
  <Draggable bounds="parent" cancel="span">
    <div
      className={classnames(s["root"], isActive && s["active"])}
      onClick={onClick}
    >
      <div className={s["inserted-text-block"]} style={{}}>
        <span
          contentEditable={true}
          suppressContentEditableWarning={true}
          className={s["inserted-text-block-inner"]}
          style={{
            fontSize: config.fontSize,
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
        </span>
      </div>
    </div>
  </Draggable>
);
