import React, { Component } from "react";
import { Modal, Button, Dropdown } from "semantic-ui-react";
import { ResizableBox } from "react-resizable";
import html2canvas from "html2canvas";
import ColorInput from "../ColorInput/ColorInput";
import PaletteDropdown from "../PaletteDropdown/PaletteDropdown";
import Range from "../Range/Range";
import { numbers } from "../translations";

import "rc-slider/assets/index.css";
import "./Modal.css";

class TheModal extends Component {
  constructor(props) {
    super(props);
    const state = {
      palette: this.props.palettes[0]
    };
    this.props.config.forEach(config => {
      state[config.key] = config.defaultValue;
    });
    this.state = state;
  }
  render() {
    const { title, author, authorLink } = this.props;
    const { palette } = this.state;
    return (
      <Modal open closeIcon onClose={this.props.onClose}>
        <ResizableBox
          width={Math.round(window.innerWidth * 0.8)}
          height={Math.round(window.innerHeight * 0.7)}
        >
          <Modal.Content className="modal-content">
            <div className="modal-sidebar">
              <div className="title-container">
                <div className="title">{title}</div>
                <div>
                  <span className="by-author">by</span>
                  {authorLink ? (
                    <a href={authorLink} className="author">
                      {author}
                    </a>
                  ) : (
                    <span className="author">{author}</span>
                  )}
                </div>
              </div>
              <div className="config-container">
                {this.props.config.map(config => {
                  if (config.condition) {
                    if (
                      this.state[config.condition.key] !==
                      config.condition.value
                    ) {
                      return null;
                    }
                  }
                  const label = (
                    <label className="form-label">{config.text}</label>
                  );
                  let control;
                  switch (config.type) {
                    case "select":
                      control = (
                        <Dropdown
                          options={config.options}
                          onChange={(target, { value }) =>
                            this.setState({ [config.key]: value })
                          }
                          value={this.state[config.key]}
                          selection
                        />
                      );
                      break;
                    case "range":
                      control = (
                        <Range
                          min={0}
                          max={360}
                          value={this.state[config.key]}
                          onChange={value =>
                            this.setState({ [config.key]: value })
                          }
                        />
                      );
                      break;
                    default:
                      control = null;
                  }
                  return (
                    <>
                      {label}
                      {control}
                    </>
                  );
                })}
                <label className="form-label">Palette</label>
                <PaletteDropdown
                  selectedPalette={palette}
                  palettes={this.props.palettes}
                  onChange={palette => this.setState({ palette })}
                />
                {palette.map((color, index) => (
                  <>
                    <label className="form-label">{numbers[index]} color</label>
                    <ColorInput
                      color={color}
                      onChange={value =>
                        this.setState({
                          palette: [
                            ...palette.slice(0, index),
                            value,
                            ...palette.slice(index + 1, palette.length)
                          ]
                        })
                      }
                      onOpen={this.props.onStartSelectingColor}
                      onClose={this.props.onStopSelectingColor}
                    />
                  </>
                ))}
              </div>
            </div>
            <div className="modal-preview">
              {this.props.generate(this.state)}
              <Button
                icon="download"
                basic
                className="download-button"
                content="Download"
                onClick={this.download}
              />
            </div>
          </Modal.Content>
        </ResizableBox>
      </Modal>
    );
  }

  download = () => {
    html2canvas(document.getElementById("capture")).then(function(canvas) {
      const link = document.createElement("a");
      var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      link.download = "download.png";
      link.setAttribute("href", image);
      link.click();
    });
  };
}

export default TheModal;
