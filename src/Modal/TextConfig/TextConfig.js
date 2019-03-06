import React from "react";
import ColorInput from "../../ColorInput/ColorInput";
import Range from "../../Range/Range";
import "./TextConfig.css";

export default props => (
  <div className="text-config-container">
    <label className="form-label">Font Size</label>
    <Range min={6} max={50} value={18} onChange={f => f} />
    <label className="form-label">Font Color</label>
    <ColorInput color={"#000"} onChange={f => f} />
    <label className="form-label">Background Color</label>
    <ColorInput color={"#CCC"} disableAlpha={false} onChange={f => f} />
  </div>
);
