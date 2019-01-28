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

    // const palettesWithoutSelected = palettes.filter(palette => {
    //   let allColorsMatch = true;
    //   palette.forEach((color, index) => {
    //     if (color !== selectedPalette[index]) {
    //       allColorsMatch = false;
    //       return;
    //     }
    //   });
    //   return !allColorsMatch;
    // });

    return (
      <div className="root">
        <div
          className={classnames(
            "palette-dropdown-wrapper",
            isActive && "active"
          )}
        >
          <div className="mini-color-container selected-value">
            {selectedPalette.map(color => (
              <div className="mini-color" style={{ background: color }} />
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
                <div className="mini-color-container">
                  {palette.map(color => (
                    <div className="mini-color" style={{ background: color }} />
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
        <div className="palette-paddles">
          <div className="paddle-button" onClick={this.changeToPrev}>
            &uarr; Prev
          </div>
          <div className="paddle-button" onClick={this.changeToNext}>
            Next &darr;
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
