import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import PrevNextButtons from "../../../PrevNextButtons/PrevNextButtons";
import { GoogleFontModal } from "./GoogleFontModal/GoogleFontModal";
import WebFont from "webfontloader";

import s from "./FontFamilyDropdown.module.css";

const defaultSystemFonts = ["Helvetica", "Times New Roman"];
const defaultGoogleFonts = [
  "Merriweather",
  "Cute Font",
  "Montserrat",
  "Poppins",
  "Stylish",
  "Gugi",
  "Limelight"
];
const defaultFonts = [...defaultSystemFonts, ...defaultGoogleFonts];

let customGoogleFontsPersisted = [];

export const FontFamilyDropdown = ({ value, onChange }) => {
  const currentIndex = defaultFonts.findIndex(font => font === value);
  const [isAddFontPopupVisible, setAddFontPopupVisible] = useState(false);
  const [customGoogleFonts, setCustomGoogleFonts] = useState(
    customGoogleFontsPersisted
  );
  const fonts = [...customGoogleFonts, ...defaultFonts];
  const goToPrev = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = fonts.length - 1;
    }
    onChange(fonts[newIndex]);
  };
  const goToNext = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > fonts.length - 1) {
      newIndex = 0;
    }
    onChange(fonts[newIndex]);
  };
  const googleFonts = [...defaultGoogleFonts, ...customGoogleFonts];
  WebFont.load({
    google: {
      families: googleFonts
    }
  });
  return (
    <>
      <div className={s["root"]}>
        <label className="form-label">
          Font Family{" "}
          <span
            className={s["add-button"]}
            onClick={() => setAddFontPopupVisible(true)}
          >
            + Add
          </span>
        </label>
        <Dropdown
          options={fonts.map(font => ({
            key: font,
            text: font,
            value: font,
            style: { fontFamily: font }
          }))}
          onChange={(target, { value }) => onChange(value)}
          value={value}
          selection
        />
        <PrevNextButtons goToPrev={goToPrev} goToNext={goToNext} />
      </div>
      {isAddFontPopupVisible && (
        <GoogleFontModal
          onSelect={font => {
            customGoogleFontsPersisted = [font, ...customGoogleFontsPersisted];
            setCustomGoogleFonts([
              ...customGoogleFontsPersisted,
              ...customGoogleFonts
            ]);
            onChange(font);
          }}
          onClose={() => setAddFontPopupVisible(false)}
        />
      )}
    </>
  );
};
FontFamilyDropdown.displayName = "FontFamilyDropdown";

export default FontFamilyDropdown;
