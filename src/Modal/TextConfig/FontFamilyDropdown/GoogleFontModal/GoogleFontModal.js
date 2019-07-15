import React, { useState } from "react";
import { Modal, Button, Input, Icon } from "semantic-ui-react";

import s from "./GoogleFontModal.module.css";

let loadedFontList;

export const GoogleFontModal = ({ onClose, onSelect }) => {
  const [searchInput, setSearchInput] = useState("");
  let searchResults = [];
  if (!loadedFontList) {
    import("../googleFonts").then(module => {
      loadedFontList = module.default.items;
    });
  }
  if (searchInput.length >= 2) {
    searchResults = loadedFontList
      .filter(font =>
        font.family.toLowerCase().includes(searchInput.toLowerCase())
      )
      .slice(0, 5);
  }
  return (
    <Modal open closeIcon onClose={onClose}>
      <Modal.Content className={s["add-font-modal-content"]}>
        <label className="form-label">Add Google Font</label>
        <Input
          autoFocus
          action={{
            content: "Search"
          }}
          value={searchInput}
          onChange={({ target: { value } }) => setSearchInput(value)}
          placeholder="Font name"
          className={s["input-wrapper"]}
        />
        {searchResults.length > 0 &&
          searchResults.map(font => (
            <div
              key={font.family}
              className={s["search-result"]}
              onClick={() => {
                onSelect(font.family);
                onClose();
              }}
            >
              {font.family}
              <Button basic>
                <Icon name="plus" /> Add
              </Button>
            </div>
          ))}
        {!searchResults.length && searchInput !== "" && (
          <div className={s["search-placeholder"]}>
            <Icon className={s["search-icon"]} name="search" size="big" />
            <p>No results</p>
          </div>
        )}
        {searchInput === "" && (
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
  );
};
