import React, { useState } from "react";
import { Modal, Dropdown, Button, Input, Icon } from "semantic-ui-react";
import defaultFonts from "./defaultFonts";
import PrevNextButtons from "../../../PrevNextButtons/PrevNextButtons";

import s from "./FontFamilyDropdown.module.css";

export const FontFamilyDropdown = ({ value, onChange }) => {
  const currentIndex = defaultFonts.findIndex(font => font.value === value);
  const [isAddFontPopupVisible, setAddFontPopupVisible] = useState(false);
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
          options={defaultFonts}
          onChange={(target, { value }) => onChange(value)}
          value={value}
          selection
        />
        <PrevNextButtons goToPrev={goToPrev} goToNext={goToNext} />
      </div>
      {isAddFontPopupVisible && (
        <Modal open closeIcon onClose={() => setAddFontPopupVisible(false)}>
          <Modal.Content className={s["add-font-modal-content"]}>
            <label className="form-label">Add Google Font</label>
            <Input
              autoFocus
              action={{
                content: "Search"
              }}
              placeholder="Font name"
              className={s["input-wrapper"]}
            />
            {
              <div className={s["search-result"]}>
                Ranga
                <Button basic>
                  <Icon name="plus" /> Add
                </Button>
              </div>
            }
            {false && (
              <div className={s["search-placeholder"]}>
                <Icon className={s["search-icon"]} name="search" size="big" />
                <p>
                  Search for and add a font <br />
                  from the{" "}
                  <a
                    href="https://fonts.google.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google Fonts
                  </a>{" "}
                  directory
                </p>
              </div>
            )}
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};
FontFamilyDropdown.displayName = "FontFamilyDropdown";

export default FontFamilyDropdown;
