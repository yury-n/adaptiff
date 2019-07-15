import React, { useState, useRef, useEffect } from "react";
import throttle from "lodash.throttle";
import { Dropdown } from "semantic-ui-react";
import PrevNextButtons from "../../../PrevNextButtons/PrevNextButtons";
import WebFont from "webfontloader";

import s from "./FontFamilyDropdown.module.css";

const MENU_ITEM_HEIGHT = 30;

// const defaultGoogleFonts = [
//   "Merriweather",
//   "Neucha",
//   "Comfortaa",
//   "Poiret One",
//   "El Messiri",
//   "Montserrat Alternates",
//   "Bad Script",
//   "Oranienbaum",
//   "Yeseva One",
//   "Rubik Mono One",
//   "Poppins"
// ];

// let loadedFonts = [];
let cyrillicFonts = [];

const getFontImage = font =>
  `/font_thumbs/compressed/${font.family.replace(/\s/g, "")}-400.${
    font.version
  }.png`;

export const FontFamilyDropdown = ({
  value = "Roboto",
  cyrillicOnly,
  onChange
}) => {
  const rootRef = useRef();
  const [visibleRange, setVisibleRange] = useState({
    visibleMenuItemOffset: 0,
    visibleMenuItemLimit: 15
  });
  const [fonts, setFonts] = useState([]);

  if (!fonts.length) {
    import("./googleFonts").then(module => {
      setFonts(module.default.items);
    });
  }

  if (cyrillicOnly && !cyrillicFonts.length) {
    cyrillicFonts = fonts.filter(font => font.subsets.includes("cyrillic"));
  }

  const currentIndex = fonts.findIndex(font => font.family === value);

  const onMenuScroll = throttle(e => {
    const visibleMenuItemOffset = Math.floor(
      e.target.scrollTop / MENU_ITEM_HEIGHT
    );
    const visibleMenuItemLimit = Math.ceil(
      e.target.getBoundingClientRect().height / MENU_ITEM_HEIGHT
    );
    setVisibleRange({ visibleMenuItemOffset, visibleMenuItemLimit });
  }, 100);

  useEffect(() => {
    const menu = rootRef.current.querySelector(".menu");
    menu.addEventListener("scroll", onMenuScroll);
    return () => {
      menu.removeEventListener("scroll", onMenuScroll);
    };
  }, []);

  const goToPrev = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = fonts.length - 1;
    }
    onChange(fonts[newIndex].family);
  };
  const goToNext = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > fonts.length - 1) {
      newIndex = 0;
    }
    // preload
    if (fonts[newIndex + 1]) {
      WebFont.load({
        google: {
          families: [`${fonts[newIndex + 1]}:latin,cyrillic`]
        }
      });
    }
    onChange(fonts[newIndex].family);
  };
  return (
    <>
      <div className={s["root"]} ref={rootRef}>
        <label className="form-label">Font Family</label>
        <Dropdown
          options={(cyrillicOnly ? cyrillicFonts : fonts).map((font, index) => {
            const isVisible =
              index >= visibleRange.visibleMenuItemOffset &&
              index <=
                visibleRange.visibleMenuItemOffset +
                  visibleRange.visibleMenuItemLimit;
            return {
              key: `${font.family}-${isVisible}`,
              value: font.family,
              text: font.family,
              image: {
                src: isVisible ? getFontImage(font) : undefined
              },
              className: s["menu-item"]
            };
          })}
          onChange={(target, { value }) => onChange(value)}
          value={value}
          selection
        />
        <PrevNextButtons goToPrev={goToPrev} goToNext={goToNext} />
      </div>
    </>
  );
};
FontFamilyDropdown.displayName = "FontFamilyDropdown";

export default FontFamilyDropdown;
