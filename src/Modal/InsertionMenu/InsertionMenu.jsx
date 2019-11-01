import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import classnames from "classnames";

import "./global.overrides.css";
import s from "./InsertionMenu.module.css";
import MiniCard from "../../MiniCard/MiniCard";
import insertionPacks from "./insertionPacks";

export default React.memo(
  ({
    activeItem,
    onInsertText,
    onInsertObject,
    onInsertImage,
    priorityObjectPack,
    setActiveItem
  }) => {
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
    const renderObjectsTab = () =>
      insertionPacks
        .sort(a => (a.name === priorityObjectPack ? -1 : 1))
        .map(pack => (
          <ObjectPack
            name={pack.name}
            objects={pack.objects}
            onInsertObject={onInsertObject}
          />
        ));
    return (
      <div>
        <Menu className={"tab-menu"} icon="labeled">
          <Menu.Item
            className={"tab-menu-item"}
            onClick={() => {
              onInsertText();
            }}
          >
            <div className={s["add-text-icon"]}>T</div>
            <Icon className={s["plus-icon"]} name="plus" size="mini" />
            <div>Text</div>
          </Menu.Item>
          <Menu.Item className={"tab-menu-item"}>
            <input
              type="file"
              name="file"
              id="file"
              className={s["file-input"]}
              onChange={onFileChange}
            />
            <label className={s["file-input-label"]} htmlFor="file" />
            <Icon size="small" name="image outline" />
            <Icon className={s["plus-icon"]} name="plus" size="mini" />
            <div>Image</div>
          </Menu.Item>
          <Menu.Item
            active={activeItem === "object"}
            className={"tab-menu-item"}
            onClick={() => setActiveItem("object")}
          >
            <Icon name="object group outline" />
            <Icon className={s["plus-icon"]} name="plus" size="mini" />
            <div>Object</div>
          </Menu.Item>
          {/* <Menu.Item className={s["tab-menu-item"]} onClick={() => {}}>
          <Icon name="chess board" />
          <div>Background</div>
        </Menu.Item> */}
        </Menu>
        <div className={"below-tabs-zone"}>
          {activeItem === "object" && renderObjectsTab()}
        </div>
      </div>
    );
  }
);

const ObjectPack = ({ name, objects, onInsertObject }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const renderObjectListHeader = () => {
    return (
      <label className={classnames("form-label", s["label"])}>
        {name}
        {!isExpanded && objects.length > 6 && (
          <span className={s["see-all"]} onClick={() => setIsExpanded(true)}>
            see all <Icon size="small" name="angle right" />
          </span>
        )}
      </label>
    );
  };
  const renderObjectList = () => {
    return (
      <div className={s["add-object-cards"]}>
        {(isExpanded ? objects : objects.slice(0, 6)).map(
          (adaptation, index) => (
            <MiniCard
              key={index}
              mode="thumb-only"
              className={s["object-card"]}
              {...adaptation}
              onClick={() => {
                onInsertObject(adaptation);
              }}
            />
          )
        )}
      </div>
    );
  };
  return (
    <div
      className={classnames(
        isExpanded && s["is-expanded"],
        objects.length > 6 && s["has-more"]
      )}
    >
      {renderObjectListHeader()}
      {renderObjectList()}
    </div>
  );
};
