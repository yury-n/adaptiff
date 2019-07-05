import React from "react";
import { Button, Icon } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import Range from "../../Range/Range";
import FontFamilyDropdown from "./FontFamilyDropdown/FontFamilyDropdown";

import "./global.overrides.css";
import s from "./TextConfig.module.css";

//let areBaseFontsLoaded = false;

export default ({
  config,
  setConfigValue,
  onStartSelectingColor,
  onStopSelectingColor,
  onRemove
}) => {
  //if (areBaseFontsLoaded) {
  // <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
  //}
  return (
    <div className={s["root"]}>
      <FontFamilyDropdown
        value={config.fontFamily}
        onChange={value => setConfigValue("fontFamily", value)}
      />
      <label className="form-label">Font Size</label>
      <Range
        withRangeInputs={false}
        min={10}
        max={100}
        value={config.fontSize}
        onChange={value => setConfigValue("fontSize", value)}
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
      <label className="form-label">Padding</label>
      <Range
        withRangeInputs={false}
        min={0}
        max={50}
        value={config.padding}
        onChange={value => setConfigValue("padding", value)}
      />
      <label className="form-label">Border Width</label>
      <Range
        withRangeInputs={false}
        min={0}
        max={20}
        value={config.borderWidth}
        onChange={value => setConfigValue("borderWidth", value)}
      />
      <label className="form-label">Letter Spacing</label>
      <Range
        withRangeInputs={false}
        min={0}
        max={20}
        value={config.letterSpacing}
        onChange={value => setConfigValue("letterSpacing", value)}
      />
      <Button className={s["delete-button"]} onClick={onRemove}>
        <Icon name="remove" size="small" />
        Remove
      </Button>
    </div>
  );
};
