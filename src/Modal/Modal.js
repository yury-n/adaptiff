import React, { Component } from "react";
import classnames from "classnames";
import html2canvas from "html2canvas";
import { Modal, Input, Menu, Button, Icon } from "semantic-ui-react";
import TextConfig from "./TextConfig/TextConfig";
import InsertedText from "./InsertedText/InsertedText";
import IframePreview from "./IframePreview/IframePreview";
import ArtConfig from "./ArtConfig/ArtConfig";

import "rc-slider/assets/index.css";
import "./global.overrides.css";
import s from "./Modal.module.css";

class TheModal extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    this.textBlocksRefs = {};
    this.captureFrameRef = React.createRef();
    // for config.refreshIframe = true
    this.iframeStateVersion = 0;
    const state = {
      config: {},
      textBlocks: [],
      activeTextBlockIndex: null,
      isAddMenuOpen: false,
      isSelectingColor: false
    };
    this.props.config.forEach(config => {
      state.config[config.key] = config.defaultValue;
    });
    this.state = state;

    this.iframeMaxWidth = null;
    this.iframeMaxHeight = null;

    this.textBlockId = 0;
  }
  componentDidMount() {
    this.iframeMaxWidth = this.iframeRef.current.offsetWidth;
    this.iframeMaxHeight = this.iframeRef.current.offsetHeight;
    this.setState({
      iframeWidth: this.iframeMaxWidth,
      iframeHeight: this.iframeMaxHeight
    });
    window.addEventListener("message", this.onWindowMessage);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.onWindowMessage);
  }
  componentDidUpdate() {
    if (!this.props.refreshIframe) {
      this.postConfigToIframe();
    }
    if (this.state.captureConfig) {
      if (!this.state.captureImage) {
        this.iframeRef.current.contentWindow.postMessage({
          type: "download"
        });
      } else {
        html2canvas(this.captureFrameRef.current).then(canvas => {
          const link = document.createElement("a");
          var image = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.download = "download.png";
          link.setAttribute("href", image);
          link.click();
          this.setState({
            captureConfig: null,
            captureImage: null
          });
        });
      }
    }
  }
  render() {
    const { title, fileName, refreshIframe, author, authorLink } = this.props;
    const {
      iframeWidth,
      iframeHeight,
      textBlocks,
      activeTextBlockIndex,
      captureConfig,
      captureImage
    } = this.state;
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
            <div
              className={classnames(
                s["title-container"],
                activeTextBlockIndex !== null && s["blurred"]
              )}
              onClick={this.unsetActiveTextBlockIndex}
            >
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
            {activeTextBlockIndex !== null
              ? this.renderTextConfig()
              : this.renderArtConfig()}
          </div>
          <div className={s["modal-right-side"]}>
            {this.state.isAddMenuOpen && (
              <Menu className={s["add-menu"]} icon="labeled" vertical>
                <Menu.Item
                  className={s["add-menu-item"]}
                  onMouseDown={this.addTextBlock}
                >
                  <div className={s["add-text-icon"]}>T</div>
                  <div>Text</div>
                </Menu.Item>
              </Menu>
            )}
            <div className={s["config-over-preview"]}>
              <Button
                circular
                icon="plus"
                onBlur={this.closeAddMenu}
                onClick={this.openAddMenu}
              />
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
              <div
                className={s["opaque-overlay"]}
                onClick={this.onOpaqueOverlayClick}
              />
              {textBlocks.map((textBlock, index) => (
                <InsertedText
                  key={textBlock.id}
                  isActive={index === activeTextBlockIndex}
                  setValue={evt => {
                    evt.persist();
                    this.setInsertedTextValue({
                      value: evt.target.innerText,
                      id: textBlock.id,
                    });
                  }}
                  config={textBlock.config}
                  onClick={() => this.setActiveTextBlockIndex(index)}
                  ref={ref => {
                    this.textBlocksRefs[index] = ref;
                  }}
                />
              ))}
              {captureConfig && (
                <div
                  className={s["capture-frame"]}
                  style={{
                    width: iframeWidth,
                    height: iframeHeight
                  }}
                  ref={this.captureFrameRef}
                >
                  {captureImage && <img alt="" src={captureImage} />}
                  {textBlocks.map((textBlock, index) => (
                    <InsertedText
                      key={textBlock.id}
                      isDraggable={false}
                      config={textBlock.config}
                      initialPosition={captureConfig[index]}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }

  onWindowMessage = event => {
    if (event.data.type === "download") {
      this.setState({ captureImage: event.data.image });
    }
  };

  onStartSelectingColor = () => {
    this.setState({ isSelectingColor: true });
    this.props.onStartSelectingColor();
  };

  onStopSelectingColor = () => {
    setTimeout(() => {
      this.setState({ isSelectingColor: false });
      this.props.onStopSelectingColor();
    }, 100); // prevent onOpaqueOverlayClick closing TextConfig
  };

  onOpaqueOverlayClick = () => {
    if (!this.state.isSelectingColor) {
      this.unsetActiveTextBlockIndex();
    }
  };

  addTextBlock = () => {
    this.setState({
      textBlocks: [
        ...this.state.textBlocks,
        {
          id: this.textBlockId++,
          config: {
            fontSize: 28,
            padding: 10,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            typedText: 'Enter a some text',
          }
        }
      ],
      activeTextBlockIndex: this.state.textBlocks.length
    });
  };

  setActiveTextBlockIndex = index => {
    this.setState({ activeTextBlockIndex: index });
  };

  setInsertedTextValue = params => {
    const compact = arr => arr.filter(Boolean);

    let editableBlock = this.state.textBlocks.find(
      textBlock => textBlock.id === params.id,
    );

    editableBlock.config.typedText = params.value;

    this.setState({
      textBlocks: [
        ...compact(this.state.textBlocks.map(
          textBlock => editableBlock.id === textBlock.id ? null : textBlock
        )),

        editableBlock,
      ]
    });
  };

  unsetActiveTextBlockIndex = () => {
    this.setState({ activeTextBlockIndex: null });
  };

  deleteCurrentTextBlock = () => {
    const { textBlocks, activeTextBlockIndex } = this.state;
    const updatedTextBlocks = [...textBlocks];
    updatedTextBlocks.splice(activeTextBlockIndex, 1);
    this.setState({
      textBlocks: updatedTextBlocks,
      activeTextBlockIndex: null
    });
  };

  renderTextConfig = () => {
    const { textBlocks, activeTextBlockIndex } = this.state;
    return (
      <TextConfig
        config={textBlocks[activeTextBlockIndex].config}
        setConfigValue={this.setTextConfigValue}
        onDelete={this.deleteCurrentTextBlock}
        onStartSelectingColor={this.onStartSelectingColor}
        onStopSelectingColor={this.onStopSelectingColor}
      />
    );
  };

  renderArtConfig = () => {
    return (
      <div className={s["config-container"]}>
        <ArtConfig
          config={this.props.config}
          configValues={this.state.config}
          setConfigValue={this.setArtConfigValue}
          onStartSelectingColor={this.onStartSelectingColor}
          onStopSelectingColor={this.onStopSelectingColor}
        />
      </div>
    );
  };

  setTextConfigValue = (configKey, configValue) => {
    const { textBlocks, activeTextBlockIndex } = this.state;
    const activeTextBlock = textBlocks[activeTextBlockIndex];
    const newTextBlocks = [...textBlocks];
    newTextBlocks[activeTextBlockIndex] = {
      ...activeTextBlock,
      config: {
        ...activeTextBlock.config,
        [configKey]: configValue
      }
    };
    this.setState({
      textBlocks: newTextBlocks
    });
  };

  setArtConfigValue = (configKey, configValue) => {
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

  openAddMenu = () => this.setState({ isAddMenuOpen: true });

  closeAddMenu = () => this.setState({ isAddMenuOpen: false });

  postConfigToIframe = () => {
    // console.log("config", this.state.config);
    this.iframeRef.current.contentWindow.postMessage({
      type: "render",
      payload: this.state.config
    });
  };

  download = () => {
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const captureConfig = this.state.textBlocks.map((textBlock, index) => {
      const textBlockRect = this.textBlocksRefs[index].getBoundingClientRect();
      return {
        left: textBlockRect.left - iframeRect.left,
        top: textBlockRect.top - iframeRect.top
      };
    });
    this.setState({ captureConfig });
    //console.log("captureConfig", captureConfig);
  };
}

export default TheModal;
