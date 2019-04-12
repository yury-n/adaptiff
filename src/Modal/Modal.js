import React, { Component } from "react";
import { Modal, Input, Menu, Button, Icon } from "semantic-ui-react";
import TextConfig from "./TextConfig/TextConfig";
import InsertedText from "./InsertedText/InsertedText";
import IframePreview from "./IframePreview/IframePreview";
import ConfigControls from "./ConfigControls/ConfigControls";

import "rc-slider/assets/index.css";
import "./global.overrides.css";
import s from "./Modal.module.css";

class TheModal extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    // for config.refreshIframe = true
    this.iframeStateVersion = 0;
    const state = {
      config: {}
    };
    this.props.config.forEach(config => {
      state.config[config.key] = config.defaultValue;
    });
    this.state = state;

    this.iframeMaxWidth = null;
    this.iframeMaxHeight = null;
  }
  componentDidMount() {
    this.iframeMaxWidth = this.iframeRef.current.offsetWidth;
    this.iframeMaxHeight = this.iframeRef.current.offsetHeight;
    this.setState({
      iframeWidth: this.iframeMaxWidth,
      iframeHeight: this.iframeMaxHeight
    });
  }
  componentDidUpdate() {
    if (!this.props.refreshIframe) {
      this.postConfigToIframe();
    }
  }
  render() {
    const { title, fileName, refreshIframe, author, authorLink } = this.props;
    const { iframeWidth, iframeHeight } = this.state;
    let scaleToFitWidth = 1;
    let scaleToFitHeight = 1;
    if (iframeWidth && iframeWidth > this.iframeMaxWidth) {
      scaleToFitWidth = this.iframeMaxWidth / iframeWidth;
    }
    if (iframeHeight && iframeHeight > this.iframeMaxHeight) {
      scaleToFitHeight = this.iframeMaxHeight / iframeHeight;
    }
    const scaleToFullyFit = Math.min(scaleToFitWidth, scaleToFitHeight);
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
                <Input
                  defaultValue={iframeWidth}
                  className={s["dimension-input"]}
                  onKeyPress={this.setStateOnEnter("iframeWidth")}
                  onBlur={this.setStateOnBlur("iframeWidth")}
                />
                <span className={s["dimension-times"]}>&times;</span>
                <Input
                  defaultValue={iframeHeight}
                  className={s["dimension-input"]}
                  onKeyPress={this.setStateOnEnter("iframeHeight")}
                  onBlur={this.setStateOnBlur("iframeHeight")}
                />
              </div>
              <Button circular icon="download" onClick={this.download} />
            </div>
            <div className={s["iframe-wrapper"]}>
              <IframePreview
                version={refreshIframe ? this.iframeStateVersion++ : 1}
                fileName={fileName}
                ref={this.iframeRef}
                onLoad={this.postConfigToIframe}
                className={s["iframe"]}
                style={{
                  width: iframeWidth,
                  height: iframeHeight,
                  transform:
                    scaleToFullyFit < 1
                      ? `scale(${scaleToFullyFit})`
                      : undefined
                }}
              />
            </div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }

  renderConfig = () => {
    return (
      <div className={s["config-container"]}>
        <ConfigControls
          config={this.props.config}
          configValues={this.state.config}
          setConfigValue={this.setConfigValue}
          onStartSelectingColor={this.props.onStartSelectingColor}
          onStopSelectingColor={this.props.onStopSelectingColor}
        />
      </div>
    );
  };

  setConfigValue = (configKey, configValue) => {
    const { config } = this.state;
    this.setState({
      config: { ...config, [configKey]: configValue }
    });
  };

  setStateOnEnter = stateKey => event => {
    if (event.key === "Enter") {
      this.setState({ [stateKey]: +event.target.value });
    }
  };

  setStateOnBlur = stateKey => event => {
    this.setState({ [stateKey]: +event.target.value });
  };

  postConfigToIframe = () => {
    // console.log("config", this.state.config);
    this.iframeRef.current.contentWindow.postMessage({
      type: "render",
      payload: this.state.config
    });
  };

  download = () => {
    this.iframeRef.current.contentWindow.postMessage({
      type: "download"
    });
  };
}

export default TheModal;
