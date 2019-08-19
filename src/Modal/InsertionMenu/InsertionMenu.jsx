import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import classnames from "classnames";
import insertables from "../../pages/insertablesList";

import "./global.overrides.css";
import s from "./InsertionMenu.module.css";
import MiniCard from "../../MiniCard/MiniCard";

export default ({ onInsertText, onInsertObject, onInsertImage }) => {
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
  };
  return (
    <div>
      <Menu className={"add-menu"} icon="labeled">
        <Menu.Item
          className={"add-menu-item"}
          onClick={() => {
            onInsertText();
          }}
        >
          <div className={s["add-text-icon"]}>T</div>
          <div>Text</div>
        </Menu.Item>
        <Menu.Item className={"add-menu-item"}>
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
        <Menu.Item active className={"add-menu-item"} onClick={() => {}}>
          <Icon name="object group outline" />
          <div>Object</div>
        </Menu.Item>
        {/* <Menu.Item className={s["add-menu-item"]} onClick={() => {}}>
          <Icon name="chess board" />
          <div>Background</div>
        </Menu.Item> */}
      </Menu>
      <label class={classnames("form-label", s["label"])}>
        Basic
        <span className={s["see-all"]}>
          see all <Icon size="small" name="angle right" />
        </span>
      </label>
      <div className={s["add-object-cards"]}>
        {insertables.map((adaptation, index) => (
          <MiniCard
            key={index}
            mode="thumb-only"
            className={s["object-card"]}
            {...adaptation}
            onClick={() => {
              onInsertObject(adaptation);
            }}
          />
        ))}
      </div>
    </div>
  );
};
