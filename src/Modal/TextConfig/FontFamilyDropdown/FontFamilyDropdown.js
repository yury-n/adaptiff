import React from "react";
import { Dropdown } from "semantic-ui-react";
import defaultFonts from "./defaultFonts";
import PrevNextButtons from "../../../PrevNextButtons/PrevNextButtons";

import s from "./FontFamilyDropdown.module.css";

export const FontFamilyDropdown = ({ value, onChange }) => {
  const currentIndex = defaultFonts.findIndex(font => font.value === value);
  const goToPrev = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = defaultFonts.length - 1;
    }
    onChange(defaultFonts[newIndex].value);
  };
  const goToNext = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > defaultFonts.length - 1) {
      newIndex = 0;
    }
    onChange(defaultFonts[newIndex].value);
  };
  return (
    <div className={s["root"]}>
      <label className="form-label">
        Font Family <span className={s["add-button"]}>+ Add</span>
      </label>
      <Dropdown
        options={defaultFonts}
        onChange={(target, { value }) => onChange(value)}
        value={value}
        selection
      />
      <PrevNextButtons goToPrev={goToPrev} goToNext={goToNext} />
    </div>
  );
};
FontFamilyDropdown.displayName = "FontFamilyDropdown";

export default FontFamilyDropdown;
