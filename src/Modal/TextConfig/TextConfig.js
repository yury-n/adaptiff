import React from "react";
import { Dropdown, Button } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import Range from "../../Range/Range";

import "./global.overrides.css";
import s from "./TextConfig.module.css";

//let areBaseFontsLoaded = false;

export default ({
  config,
  setConfigValue,
  onStartSelectingColor,
  onStopSelectingColor,
  onDelete
}) => {
  //if (areBaseFontsLoaded) {
  // <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
  //}
  return (
    <div className={s["root"]}>
      <label className="form-label">Font Family</label>
      <Dropdown
        options={[
          {
            key: 0,
            text: "Arial",
            value: "arial",
            className: s["font-arial"]
          },
          {
            key: 1,
            text: "Helvetica",
            value: "helvetica",
            className: s["font-helvetica"]
          },
          {
            key: 2,
            text: "Times New Roman",
            value: "Times New Roman",
            className: s["font-times-new-roman"]
          },
          {
            key: 3,
            text: "Merriweather",
            value: "Merriweather",
            className: s["font-merriweather"]
          },
          {
            key: 4,
            text: "Cute Font",
            value: "Cute Font",
            className: s["font-cute-font"]
          },
          {
            key: 5,
            text: "Montserrat",
            value: "Montserrat",
            className: s["font-montserrat"]
          },
          {
            key: 6,
            text: "Poppins",
            value: "poppins",
            className: s["font-poppins"]
          },
          {
            key: 7,
            text: "Stylish",
            value: "stylish",
            className: s["font-stylish"]
          },
          {
            key: 8,
            text: "Gugi",
            value: "gugi",
            className: s["font-gugi"]
          }
        ]}
        onChange={(target, { value }) => setConfigValue("fontFamily", value)}
        value={config.fontFamily}
        selection
      />
      <label className="form-label">Font Style</label>
      <Button.Group basic>
        <Button
          className={s["button-bold"]}
          active={config.isBold}
          onClick={() => setConfigValue("isBold", !config.isBold)}
        >
          B
        </Button>
        <Button
          className={s["button-italic"]}
          active={config.isItalic}
          onClick={() => setConfigValue("isItalic", !config.isItalic)}
        >
          I
        </Button>
        <Button
          className={s["button-underline"]}
          active={config.isUnderlined}
          onClick={() => setConfigValue("isUnderlined", !config.isUnderlined)}
        >
          U
        </Button>
      </Button.Group>
      <label className="form-label">Font Size</label>
      <Range
        withRangeInputs={false}
        min={6}
        max={50}
        value={config.fontSize}
        onChange={value => setConfigValue("fontSize", value)}
      />
      <label className="form-label">Padding</label>
      <Range
        withRangeInputs={false}
        min={0}
        max={50}
        value={config.padding}
        onChange={value => setConfigValue("padding", value)}
      />
      <label className="form-label">Latter Spacing</label>
      <Range
        withRangeInputs={false}
        min={0}
        max={20}
        value={config.letterSpacing}
        onChange={value => setConfigValue("letterSpacing", value)}
      />
      <label className="form-label">Font Color</label>
      <ColorInput
        color={config.color}
        onChange={value => setConfigValue("color", value)}
        onOpen={onStartSelectingColor}
        onClose={onStopSelectingColor}
      />
      <label className="form-label">Background Color</label>
      <ColorInput
        disableAlpha={false}
        color={config.backgroundColor}
        onChange={value => setConfigValue("backgroundColor", value)}
        onOpen={onStartSelectingColor}
        onClose={onStopSelectingColor}
      />
      <Button className={s["delete-button"]} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};
