import React from "react";
import InsertedText from "../../InsertedText/InsertedText";

import s from "./Layout.module.css";

export default ({ layout, width, textColor }) => (
  <div className={s["root"]} style={{ transform: `scale(${width / 1080})` }}>
    {layout.items.map((item, index) => (
      <InsertedText
        key={index}
        config={{ ...item.configValues, color: textColor }}
        initialValue={item.text}
      />
    ))}
  </div>
);
