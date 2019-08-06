import React, { useState, useRef } from "react";
import useOnClickOutside from "../../_hooks/useOnClickOutside";
import { Menu, Button, Icon } from "semantic-ui-react";

import s from "./InsertButton.module.css";
import insertables from "../../pages/insertablesList";
import MiniCard from "../../MiniCard/MiniCard";

export default ({ onInsertText, onInsertImage, onInsertObject }) => {
  const menuRef = useRef();
  const objectSelectorRef = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isObjectSelectorOpen, setIsObjectSelectorOpen] = useState(false);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));
  useOnClickOutside(objectSelectorRef, () => setIsObjectSelectorOpen(false));

  const onFileChange = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = onFileReaderLoad;
    fileReader.readAsDataURL(file);
  };

  const onFileReaderLoad = e => {
    const img = document.createElement("img");
    img.src = e.target.result;
    img.onload = () => {
      onInsertImage({
        imageUrl: e.target.result,
        width: img.clientWidth,
        height: img.clientHeight
      });
      document.body.removeChild(img);
    };
    document.body.appendChild(img);

    setIsMenuOpen(false);
  };

  return (
    <div ref={menuRef}>
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
          <Menu.Item
            className={s["add-menu-item"]}
            onClick={() => {
              setIsMenuOpen(false);
              setIsObjectSelectorOpen(true);
            }}
          >
            <Icon name="object group outline" />
            <div>Object</div>
          </Menu.Item>
        </Menu>
      )}
      {isObjectSelectorOpen && (
        <div ref={objectSelectorRef} className={s["add-object-menu"]}>
          <div className={s["add-object-cards"]}>
            {insertables.map((adaptation, index) => (
              <MiniCard
                key={index}
                className={s["object-card"]}
                {...adaptation}
                onClick={() => {
                  setIsObjectSelectorOpen(false);
                  onInsertObject(adaptation);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
