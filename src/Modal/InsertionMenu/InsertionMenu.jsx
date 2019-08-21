import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import classnames from "classnames";
import {
  basicSvgs,
  particlesSvgs,
  paintWorkSvgs,
  childishDreamsSvgs
} from "../../pages/svgsList";

import "./global.overrides.css";
import s from "./InsertionMenu.module.css";
import MiniCard from "../../MiniCard/MiniCard";
import linearGradient from "../../_adaptationConfigs/linearGradient";
import blobmaker from "../../_adaptationConfigs/blobmaker";
import { allAdaptations } from "../../pages/adaptations";
import { unfilledMesh } from "../../pages/insertablesList";

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
        <Menu.Item active className={"tab-menu-item"} onClick={() => {}}>
          <Icon name="object group outline" />
          <Icon className={s["plus-icon"]} name="plus" size="mini" />
          <div>Object</div>
        </Menu.Item>
        {/* <Menu.Item className={s["tab-menu-item"]} onClick={() => {}}>
          <Icon name="chess board" />
          <div>Background</div>
        </Menu.Item> */}
      </Menu>
      <ObjectPack
        name="Basic"
        objects={[
          ...basicSvgs,
          blobmaker,
          linearGradient,
          allAdaptations[37],
          allAdaptations[45]
        ]}
        onInsertObject={onInsertObject}
      />
      <ObjectPack
        name="Particles"
        objects={[...particlesSvgs, unfilledMesh]}
        onInsertObject={onInsertObject}
      />
      <ObjectPack
        name="Paint Work"
        objects={paintWorkSvgs}
        onInsertObject={onInsertObject}
      />
      <ObjectPack
        name="Childish Dreams"
        objects={childishDreamsSvgs}
        onInsertObject={onInsertObject}
      />
    </div>
  );
};

const ObjectPack = ({ name, objects, onInsertObject }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const renderObjectListHeader = () => {
    return (
      <label className={classnames("form-label", s["label"])}>
        {name}
        {!isExpanded && (
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
    <>
      {renderObjectListHeader()}
      {renderObjectList()}
    </>
  );
};
