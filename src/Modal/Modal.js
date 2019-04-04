import React, { Component } from "react";
import {
  Modal,
  Input,
  Menu,
  Button,
  Dropdown,
  Icon,
  Checkbox
} from "semantic-ui-react";
import ColorInput from "../ColorInput/ColorInput";
import PaletteDropdown from "../PaletteDropdown/PaletteDropdown";
import Range from "../Range/Range";
import TextConfig from "./TextConfig/TextConfig";
import InsertedText from "./InsertedText/InsertedText";
import IframePreview from "./IframePreview/IframePreview";

import "rc-slider/assets/index.css";
import "./global.overrides.css";
import s from "./Modal.module.css";

class TheModal extends Component {
  constructor(props) {
    super(props);
    this.previewIframeRef = React.createRef();
    // for config.refreshIframe = true
    this.iframeStateVersion = 0;
    const state = {
      config: {
        palette: this.props.palettes && this.props.palettes[0]
      }
    };
    this.props.config.forEach(config => {
      state.config[config.key] = config.defaultValue;
    });
    this.state = state;
  }
  componentDidUpdate() {
    if (!this.props.refreshIframe) {
      this.postConfigToIframe();
    }
  }
  render() {
    const { title, fileName, refreshIframe, author, authorLink } = this.props;
    return (
      <Modal open closeIcon onClose={this.props.onClose}>
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
            {this.renderConfig()}
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
              <IframePreview
                version={refreshIframe ? this.iframeStateVersion++ : 1}
                fileName={fileName}
                ref={this.previewIframeRef}
                onLoad={this.postConfigToIframe}
                className={s["preview"]}
              />
            </div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }

  renderConfig = () => {
    const props = this.props;
    const state = this.state;
    return (
      <div className={s["config-container"]}>
        {props.config.map(config => {
          if (config.condition) {
            if (state.config[config.condition.key] !== config.condition.value) {
              return null;
            }
          }
          const label = <label className="form-label">{config.text}</label>;
          let control;
          switch (config.type) {
            case "select":
              control = (
                <Dropdown
                  options={config.options}
                  onChange={(target, { value }) =>
                    this.setState({
                      config: { ...state.config, [config.key]: value }
                    })
                  }
                  value={state.config[config.key]}
                  selection
                />
              );
              break;
            case "boolean":
              control = (
                <Checkbox
                  checked={state.config[config.key]}
                  onChange={() => {
                    setTimeout(() => {
                      this.setState({
                        config: {
                          ...state.config,
                          [config.key]: !state.config[config.key]
                        }
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
                  value={state.config[config.key]}
                  onChange={value =>
                    this.setState({
                      config: { ...state.config, [config.key]: value }
                    })
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
        {props.palettes && <label className="form-label">Palette</label>}
        {props.palettes && (
          <PaletteDropdown
            selectedPalette={state.config.palette}
            palettes={props.palettes}
            onChange={palette =>
              this.setState({ config: { ...state.config, palette } })
            }
          />
        )}
        {state.config.palette &&
          state.config.palette.map((color, index) => (
            <ColorInput
              color={color}
              onChange={value =>
                this.setState({
                  config: {
                    ...state.config,
                    palette: [
                      ...state.config.palette.slice(0, index),
                      value,
                      ...state.config.palette.slice(
                        index + 1,
                        state.config.palette.length
                      )
                    ]
                  }
                })
              }
              onOpen={props.onStartSelectingColor}
              onClose={props.onStopSelectingColor}
            />
          ))}
      </div>
    );
  };

  postConfigToIframe = () => {
    console.log(">>>", JSON.stringify(this.state.config));
    this.previewIframeRef.current.contentWindow.postMessage({
      type: "render",
      payload: this.state.config
    });
  };

  download = () => {
    this.previewIframeRef.current.contentWindow.postMessage({
      type: "download"
    });
  };
}

export default TheModal;
