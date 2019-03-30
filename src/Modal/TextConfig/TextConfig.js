import React from "react";
import { Button } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import Range from "../../Range/Range";

import "./global.overrides.css";
import s from "./TextConfig.module.css";

export default props => (
  <div className={s["text-config-container"]}>
    <label className="form-label">Font Style</label>
    <Button.Group basic>
      <Button className="button-bold">B</Button>
      <Button className="button-italic active">I</Button>
      <Button className="button-underline">U</Button>
    </Button.Group>
    <label className="form-label">Font Size</label>
    <Range
      withRangeInputs={false}
      min={6}
      max={50}
      value={18}
      onChange={f => f}
    />
    <label className="form-label">Padding</label>
    <Range
      withRangeInputs={false}
      min={6}
      max={50}
      value={18}
      onChange={f => f}
    />
    <label className="form-label">Font Color</label>
    <ColorInput color={"#000"} onChange={f => f} />
    <label className="form-label">Background Color</label>
    <ColorInput color={"#CCC"} disableAlpha={false} onChange={f => f} />
    <Button className={s["delete-inserted-text"]}>Delete</Button>
  </div>
);
