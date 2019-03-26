import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import classnames from "classnames";

import s from "./PaletteDropdown.module.css";

class PaletteDropdown extends Component {
  state = {
    isActive: false
  };
  render() {
    const { isActive } = this.state;
    const { selectedPalette, palettes } = this.props;

    return (
      <div className={s["root"]}>
        <div
          className={classnames(
            s["palette-dropdown-wrapper"],
            isActive && s["active"]
          )}
        >
          <div
            className={classnames(
              s["mini-color-container"],
              s["selected-value"]
            )}
          >
            {selectedPalette.map(color => (
              <div className={s["mini-color"]} style={{ background: color }} />
            ))}
          </div>
          <Dropdown
            id="type"
            defaultValue={undefined}
            value={undefined}
            selectedLabel={undefined}
            selectOnBlur={false}
            options={palettes.map((palette, index) => ({
              key: index,
              value: index,
              label: (
                <div className={s["mini-color-container"]}>
                  {palette.map(color => (
                    <div
                      className={s["mini-color"]}
                      style={{ background: color }}
                    />
                  ))}
                </div>
              )
            }))}
            onChange={(target, { value }) =>
              this.props.onChange(palettes[value])
            }
            onOpen={() => this.setState({ isActive: true })}
            onClose={() => this.setState({ isActive: false })}
            selection
          />
        </div>
        <div className={s["palette-paddles"]}>
          <div className={s["paddle-button"]} onClick={this.changeToPrev}>
            &larr; Prev
          </div>
          <div className={s["paddle-button"]} onClick={this.changeToNext}>
            Next &rarr;
          </div>
        </div>
      </div>
    );
  }

  changeToPrev = () => {
    const { palettes } = this.props;
    const selectedPaletteIndex = this.getSelectedPalette();
    const changeToIndex = selectedPaletteIndex - 1;
    this.props.onChange(
      palettes[changeToIndex > 0 ? changeToIndex : palettes.length - 1]
    );
  };

  changeToNext = () => {
    const { palettes } = this.props;
    const selectedPaletteIndex = this.getSelectedPalette();
    const changeToIndex = selectedPaletteIndex + 1;
    this.props.onChange(
      palettes[changeToIndex < palettes.length ? changeToIndex : 0]
    );
  };

  getSelectedPalette = () => {
    const { palettes, selectedPalette } = this.props;
    const selectedPaletteIndex = palettes.findIndex(palette => {
      let allColorsMatch = true;
      palette.forEach((color, index) => {
        if (color !== selectedPalette[index]) {
          allColorsMatch = false;
          return;
        }
      });
      return allColorsMatch;
    });
    return selectedPaletteIndex >= 0 ? selectedPaletteIndex : 0;
  };
}

export default PaletteDropdown;
