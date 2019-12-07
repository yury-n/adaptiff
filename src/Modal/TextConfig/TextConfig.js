import React from "react";
import { Button } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import Range from "../../Range/Range";
import FontFamilyDropdown from "./FontFamilyDropdown/FontFamilyDropdown";

import "./global.overrides.css";
import s from "./TextConfig.module.css";

export default React.memo(
  ({ config, setConfigValue, onStartSelectingColor, onStopSelectingColor }) => {
    return (
      <div className={s["root"]}>
        <FontFamilyDropdown
          value={config.fontFamily}
          cyrillicOnly={config.hasCyrillic}
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
        <label className="form-label">Text Alignment</label>
        <Button.Group basic>
          <Button
            icon="align left"
            active={!config.textAlign || config.textAlign === "left"}
            onClick={() => setConfigValue("textAlign", "left")}
          />
          <Button
            icon="align center"
            active={config.textAlign === "center"}
            onClick={() => setConfigValue("textAlign", "center")}
          />
          <Button
            icon="align left"
            active={config.textAlign === "right"}
            onClick={() => setConfigValue("textAlign", "right")}
          />
        </Button.Group>
        {/* <label className="form-label">As a Block</label>
        <Checkbox
          toggle
          checked={!config.isInline}
          onChange={() => setConfigValue("isInline", !config.isInline)}
        /> */}
        <label className="form-label">Vertical Padding</label>
        <Range
          withRangeInputs={false}
          min={0}
          max={100}
          value={config.verticalPadding || 10}
          onChange={value => setConfigValue("verticalPadding", value)}
        />
        <label className="form-label">Horizontal Padding</label>
        <Range
          withRangeInputs={false}
          min={0}
          max={100}
          value={config.horizontalPadding || 10}
          onChange={value => setConfigValue("horizontalPadding", value)}
        />
        <label className="form-label">Line Height</label>
        <Range
          withRangeInputs={false}
          min={0}
          max={50}
          value={config.lineHeight || 11}
          onChange={value => setConfigValue("lineHeight", value)}
        />
        <label className="form-label">Letter Spacing</label>
        <Range
          withRangeInputs={false}
          min={0}
          max={20}
          value={config.letterSpacing}
          onChange={value => setConfigValue("letterSpacing", value)}
        />
        <label className="form-label">Border Width</label>
        <Range
          withRangeInputs={false}
          min={0}
          max={20}
          value={config.borderWidth}
          onChange={value => setConfigValue("borderWidth", value)}
        />
        <label className="form-label">Border Radius</label>
        <Range
          withRangeInputs={false}
          min={0}
          max={100}
          value={config.borderRadius}
          onChange={value => setConfigValue("borderRadius", value)}
        />
      </div>
    );
  }
);
