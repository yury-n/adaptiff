import React from "react";
import { Dropdown, Checkbox } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import PaletteDropdown from "../../PaletteDropdown/PaletteDropdown";
import Range from "../../Range/Range";

export default ({
  config,
  configValues,
  setConfigValue,
  onStartSelectingColor,
  onStopSelectingColor
}) => (
  <>
    {config.map(config => {
      if (
        config.condition &&
        configValues[config.condition.key] !== config.condition.value
      ) {
        return null;
      }
      const label = <label className="form-label">{config.text}</label>;
      let control;
      switch (config.type) {
        case "select":
          control = (
            <Dropdown
              options={config.options}
              onChange={(target, { value }) =>
                setConfigValue(config.key, value)
              }
              value={configValues[config.key]}
              selection
            />
          );
          break;
        case "boolean":
          control = (
            <Checkbox
              toggle
              checked={configValues[config.key]}
              onChange={() =>
                setConfigValue(config.key, !configValues[config.key])
              }
            />
          );
          break;
        case "range":
          control = (
            <Range
              min={config.min}
              max={config.max}
              value={configValues[config.key]}
              onChange={value => setConfigValue(config.key, value)}
            />
          );
          break;
        case "palette":
          control = (
            <>
              <PaletteDropdown
                selectedPalette={configValues.palette}
                palettes={config.options}
                onChange={palette => setConfigValue(config.key, palette)}
              />
              {configValues.palette.map((color, index) => (
                <ColorInput
                  key={`color-${index}`}
                  color={color}
                  onChange={value =>
                    setConfigValue(config.key, [
                      ...configValues.palette.slice(0, index),
                      value,
                      ...configValues.palette.slice(
                        index + 1,
                        configValues.palette.length
                      )
                    ])
                  }
                  onOpen={onStartSelectingColor}
                  onClose={onStopSelectingColor}
                />
              ))}
            </>
          );
          break;
        default:
          control = null;
      }

      return (
        <React.Fragment key={config.key}>
          {label}
          {control}
        </React.Fragment>
      );
    })}
  </>
);
