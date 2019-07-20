import React from "react";
import { Dropdown, Checkbox, Button, Icon } from "semantic-ui-react";
import ColorInput from "../../ColorInput/ColorInput";
import PaletteDropdown from "../../PaletteDropdown/PaletteDropdown";
import Range from "../../Range/Range";

import s from "./ArtConfig.module.css";

export default React.memo(
  ({
    config,
    configValues,
    setConfigValue,
    onStartSelectingColor,
    onStopSelectingColor,
    activeInsertedItem,
    onRemove
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
          case "randomValues":
            const isEnabled = configValues[config.key].length > 0;
            control = (
              <div
                style={{
                  display: "flex"
                }}
              >
                {!config.isNotSwitchable && (
                  <Checkbox
                    toggle
                    checked={isEnabled}
                    onChange={() =>
                      setConfigValue(
                        config.key,
                        isEnabled ? [] : config.defaultValue
                      )
                    }
                  />
                )}
                {isEnabled && (
                  <Button
                    basic
                    style={{
                      width: "100%",
                      position: "relative",
                      top: "-2px",
                      left: config.isNotSwitchable ? 0 : "7px"
                    }}
                    onClick={() =>
                      setConfigValue(
                        config.key,
                        Array(config.defaultValue.length)
                          .fill()
                          .map(() => Math.random())
                      )
                    }
                  >
                    <Icon name="refresh" size="small" />
                    refresh
                  </Button>
                )}
              </div>
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
          case "single-color":
            control = (
              <div className={s["single-color-block"]}>
                <ColorInput
                  key="single-color"
                  disableAlpha={!config.allowAlpha}
                  color={configValues[config.key]}
                  onChange={value => setConfigValue(config.key, value)}
                  onOpen={onStartSelectingColor}
                  onClose={onStopSelectingColor}
                />
              </div>
            );
            break;
          case "palette":
            control = (
              <div className={s["palette-block"]}>
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
              </div>
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
      {activeInsertedItem && (
        <Button className={s["delete-button"]} onClick={onRemove}>
          <Icon name="remove" size="small" />
          Remove
        </Button>
      )}
    </>
  )
);
