import React from "react";
import ColorInput from "../../ColorInput/ColorInput";

export default React.memo(
  ({ colors, onStartSelectingColor, onStopSelectingColor, onChange }) => (
    <>
      {colors.map((color, index) => (
        <ColorInput
          key={`color-${colors.length}-${index}`}
          color={color}
          onChange={newColor => onChange(color)(newColor)}
          disableAlpha={false}
          onOpen={onStartSelectingColor}
          onClose={onStopSelectingColor}
        />
      ))}
    </>
  )
);
