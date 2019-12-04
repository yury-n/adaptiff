import React from "react";
import InsertedText from "../../InsertedText/InsertedText";
import layouts from "../../../pages/layouts";

import s from "./Layout.module.css";

export default ({ width }) => (
  <div className={s["root"]} style={{ transform: `scale(${width / 1080})` }}>
    {layouts[0].items.map((item, index) => (
      <InsertedText
        key={index}
        config={item.configValues}
        initialValue={item.text}
      />
    ))}
  </div>
);
