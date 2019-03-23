import React, { Component } from "react";
import classnames from "classnames";
import {
  Modal,
  Input,
  Menu,
  Button,
  Dropdown,
  Icon,
  Checkbox
} from "semantic-ui-react";
import html2canvas from "html2canvas";
import ColorInput from "../ColorInput/ColorInput";
import PaletteDropdown from "../PaletteDropdown/PaletteDropdown";
import Range from "../Range/Range";
import TextConfig from "./TextConfig/TextConfig";
import InsertedText from "./InsertedText/InsertedText";

import "rc-slider/assets/index.css";
import "./global.overrides.css";
import s from "./Modal.module.css";

class TheModal extends Component {
  constructor(props) {
    super(props);
    const state = {
      loading: false,
      paused: false,
      palette: this.props.palettes && this.props.palettes[0]
    };
    this.props.config.forEach(config => {
      state[config.key] = config.defaultValue;
    });
    if (this.props.externalScripts) {
      state.loading = true;
    }
    this.state = state;
  }
  componentDidMount() {
    this.loadExternalScripts();
  }
  loadExternalScripts = () => {
    if (this.props.externalScripts) {
      const promises = this.props.externalScripts.map(externalScript =>
        this.loadScript(externalScript)
      );
      Promise.all(promises).then(() => {
        this.setState({ loading: false });
      });
    }
  };
  async loadScript(externalScript) {
    return new Promise(resolve => {
      const aScript = document.createElement("script");
      aScript.type = "text/javascript";
      aScript.src = externalScript;
      document.head.appendChild(aScript);
      aScript.onload = () => {
        resolve();
      };
    });
  }
  componentWillUnmount() {
    this.props.degenerate && this.props.degenerate();
  }
  render() {
    const { title, author, authorLink } = this.props;
    const { palette, loading } = this.state;
    return (
      <Modal
        className={classnames(loading && s["modal-loading"])}
        open
        closeIcon
        onClose={this.props.onClose}
      >
        <Modal.Content className="modal-content">
          <div className={s["modal-sidebar"]}>
            <div className={s["title-container"]}>
              <div className={s["title"]}>{title}</div>
              <div>
                <span className={s["by-author"]}>by</span>
                {authorLink ? (
                  <a
                    href={authorLink}
                    className={s["author"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {author}
                    <Icon
                      title="codepen"
                      className={s["codepen-icon"]}
                      name="codepen"
                    />
                  </a>
                ) : (
                  <span className={s["author"]}>{author}</span>
                )}
              </div>
            </div>
            {false && <TextConfig />}
            <div className={s["config-container"]}>
              {this.props.config.map(config => {
                if (config.condition) {
                  if (
                    this.state[config.condition.key] !== config.condition.value
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
                  case "boolean":
                    control = (
                      <Checkbox
                        checked={this.state[config.key]}
                        onChange={() => {
                          setTimeout(() => {
                            this.setState({
                              [config.key]: !this.state[config.key]
                            });
                          }, 500);
                        }}
                        toggle
                      />
                    );
                    break;
                  case "range":
                    control = (
                      <Range
                        min={config.min}
                        max={config.max}
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
              {this.props.palettes && (
                <label className="form-label">Palette</label>
              )}
              {this.props.palettes && (
                <PaletteDropdown
                  selectedPalette={palette}
                  palettes={this.props.palettes}
                  onChange={palette => this.setState({ palette })}
                />
              )}
              {palette &&
                palette.map((color, index) => (
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
                ))}
            </div>
          </div>
          <div className={s["modal-right-side"]}>
            {false && (
              <Menu className={s["add-menu"]} icon="labeled" vertical>
                <Menu.Item
                  className={s["add-menu-item"]}
                  onClick={this.handleItemClick}
                >
                  <div className={s["add-text-icon"]}>T</div>
                  <div>Text</div>
                </Menu.Item>
              </Menu>
            )}
            {false && <InsertedText />}
            <div className={s["config-over-preview"]}>
              <Button circular icon="plus" />
              <div className={s["dimensions"]}>
                <Input value="2000" className={s["dimension-input"]} />
                <span className={s["dimension-times"]}>&times;</span>
                <Input value="2000" className={s["dimension-input"]} />
              </div>
              <Button circular icon="download" onClick={this.download} />
            </div>
            <div id="preview-wrapper" className={s["preview-wrapper"]}>
              {loading
                ? this.renderLoadingIndicator()
                : this.props.generate(this.state)}
            </div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }

  renderLoadingIndicator() {
    return (
      <div className="modal-loading-indicator">
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1" />
          <div class="sk-cube sk-cube2" />
          <div class="sk-cube sk-cube3" />
          <div class="sk-cube sk-cube4" />
          <div class="sk-cube sk-cube5" />
          <div class="sk-cube sk-cube6" />
          <div class="sk-cube sk-cube7" />
          <div class="sk-cube sk-cube8" />
          <div class="sk-cube sk-cube9" />
        </div>
      </div>
    );
  }

  togglePause = () => {
    const { paused } = this.state;
    if (!paused) {
      this.props.pause();
    } else {
      this.props.unpause();
    }
  };

  download = () => {
    html2canvas(document.getElementById("preview")).then(function(canvas) {
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
