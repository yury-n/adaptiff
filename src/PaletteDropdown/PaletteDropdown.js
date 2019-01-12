import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import classnames from "classnames";

import "./PaletteDropdown.css";

class PaletteDropdown extends Component {
  state = {
    isActive: false
  };
  render() {
    const { isActive } = this.state;
    const { selectedPalette, palettes } = this.props;

    const palettesWithoutSelected = palettes.filter(palette => {
      let allColorsMatch = true;
      palette.forEach((color, index) => {
        if (color != selectedPalette[index]) {
          allColorsMatch = false;
          return;
        }
      });
      return !allColorsMatch;
    });

    return (
      <div
        className={classnames("palette-dropdown-wrapper", isActive && "active")}
      >
        <div class="mini-color-container selected-value">
          {selectedPalette.map(color => (
            <div class="mini-color" style={{ background: color }} />
          ))}
        </div>
        <Dropdown
          id="type"
          options={palettesWithoutSelected.map((palette, index) => ({
            key: index,
            value: index,
            label: (
              <div class="mini-color-container">
                {palette.map(color => (
                  <div class="mini-color" style={{ background: color }} />
                ))}
              </div>
            )
          }))}
          onChange={(target, { value }) =>
            this.props.onChange(palettesWithoutSelected[value])
          }
          onOpen={() => this.setState({ isActive: true })}
          onClose={() => this.setState({ isActive: false })}
          selection
        />
      </div>
    );
  }
}

export default PaletteDropdown;
