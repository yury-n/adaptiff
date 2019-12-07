import React from "react";
import InsertedText from "../../InsertedText/InsertedText";

import s from "./Layout.module.css";

export default ({ layout, width, textColor, textBackgroundColor }) => (
  <div className={s["root"]} style={{ transform: `scale(${width / 1080})` }}>
    {layout.items.map((layoutItem, index) => (
      <InsertedText
        key={index}
        config={{
          ...layoutItem.configValues,
          color: textColor,
          backgroundColor: layoutItem.configValues.withBackground
            ? textBackgroundColor || layoutItem.configValues.backgroundColor
            : undefined
        }}
        initialValue={layoutItem.text}
      />
    ))}
  </div>
);
