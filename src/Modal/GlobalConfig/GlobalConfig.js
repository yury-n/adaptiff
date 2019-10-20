import React from "react";
import ColorInput from "../../ColorInput/ColorInput";
import PaletteDropdown from "../../PaletteDropdown/PaletteDropdown";

export default React.memo(
  ({
    colors,
    otherPalettes,
    onStartSelectingColor,
    onStopSelectingColor,
    onChange
  }) => (
    <>
      {otherPalettes && (
        <PaletteDropdown
          selectedPalette={colors}
          palettes={otherPalettes}
          onChange={palette => {
            palette.forEach((paletteColor, index) => {
              onChange(colors[index])(paletteColor);
            });
          }}
        />
      )}
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
