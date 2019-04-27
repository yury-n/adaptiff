import React, { useState, useRef } from "react";
import useOnClickOutside from "../../_hooks/useOnClickOutside";
import { Menu, Button, Icon } from "semantic-ui-react";

import s from "./InsertButton.module.css";

export default ({ onInsertText, onInsertImage }) => {
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  const onFileChange = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = onFileReaderLoad;
    fileReader.readAsDataURL(file);
  };

  const onFileReaderLoad = e => {
    onInsertImage({ imageUrl: e.target.result });
    setIsMenuOpen(false);
  };

  return (
    <div ref={ref}>
      <Button circular icon="plus" onClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && (
        <Menu className={s["add-menu"]} icon="labeled" vertical>
          <Menu.Item
            className={s["add-menu-item"]}
            onClick={() => {
              setIsMenuOpen(false);
              onInsertText();
            }}
          >
            <div className={s["add-text-icon"]}>T</div>
            <div>Text</div>
          </Menu.Item>
          <Menu.Item className={s["add-menu-item"]}>
            <input
              type="file"
              name="file"
              id="file"
              className={s["file-input"]}
              onChange={onFileChange}
            />
            <label className={s["file-input-label"]} htmlFor="file" />
            <Icon name="image outline" />
            <div>Image</div>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};
