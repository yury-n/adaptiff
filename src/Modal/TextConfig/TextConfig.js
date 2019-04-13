import React from "react";
import { Button } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import Range from "../../Range/Range";

import "./global.overrides.css";
import s from "./TextConfig.module.css";

export default ({
  config,
  setConfigValue,
  onStartSelectingColor,
  onStopSelectingColor,
  onDelete
}) => (
  <div className={s["text-config-container"]}>
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
    <Button className={s["delete-inserted-text"]} onClick={onDelete}>
      Delete
    </Button>
  </div>
);
