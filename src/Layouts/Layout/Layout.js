import React from "react";
import InsertedText from "../../Modal/InsertedText/InsertedText";
import { useSelector } from "react-redux";
import {
  getSelectedLayout,
  getQuickFormFieldValues
} from "../../selectors/page";
import layouts from "../../pages/layouts";

import s from "./Layout.module.css";

export default ({ layout, width, textColor, textBackgroundColor }) => {
  const selectedLayout = useSelector(getSelectedLayout);
  const quickFormFieldValues = useSelector(getQuickFormFieldValues);
  const thisLayoutIndex = layouts.indexOf(layout);
  return (
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
          initialValue={
            thisLayoutIndex === selectedLayout &&
            quickFormFieldValues[layoutItem.layoutItemType]
              ? quickFormFieldValues[layoutItem.layoutItemType]
              : layoutItem.text
          }
        />
      ))}
    </div>
  );
};
