import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import insertables from "../../pages/insertablesList";

import "./global.overrides.css";
import s from "./InsertionMenu.module.css";
import MiniCard from "../../MiniCard/MiniCard";

export default ({ onInsertText, onInsertObject, onFileReaderLoad }) => {
  const onFileChange = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = onFileReaderLoad;
    fileReader.readAsDataURL(file);
  };
  return (
    <div>
      <Menu className={s["add-menu"]} icon="labeled">
        <Menu.Item
          className={s["add-menu-item"]}
          onClick={() => {
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
          <Icon size="small" name="image outline" />
          <div>Image</div>
        </Menu.Item>
        <Menu.Item active className={s["add-menu-item"]} onClick={() => {}}>
          <Icon size="normal" name="object group outline" />
          <div>Object</div>
        </Menu.Item>
        <Menu.Item className={s["add-menu-item"]} onClick={() => {}}>
          <Icon size="normal" name="chess board" />
          <div>Background</div>
        </Menu.Item>
      </Menu>
      <div className={s["add-object-cards"]}>
        {insertables.map((adaptation, index) => (
          <MiniCard
            key={index}
            mode="thumb-only"
            className={s["object-card"]}
            {...adaptation}
            onClick={() => {
              //   setIsObjectSelectorOpen(false);
              onInsertObject(adaptation);
            }}
          />
        ))}
      </div>
    </div>
  );
};
