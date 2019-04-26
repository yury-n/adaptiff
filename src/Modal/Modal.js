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
    this.iframeWrapperRef = React.createRef();
    this.textBlocksRefs = {};
    this.captureFrameRef = React.createRef();
    const initState = props.initState || { config: {} };

    const customConfig = this.props.customConfig ? {
      size: this.props.customConfig.size,
      config: this.props.customConfig.config,
      textBlocks: this.props.customConfig.textBlocks,
      captureConfig: this.props.customConfig.captureConfig,
    } : {size: {width: null, height: null}, config: {}, textBlocks: null, captureConfig: []};
    
    const state = {
      isPaused: false,
      config: {},
      iframeVersion: 0, // for props.config.refreshIframe = true
      // Check for custom properties first
      iframeWidth: customConfig.size.width || initState.width,
      iframeHeight: customConfig.size.height || initState.height,
      textBlocks: customConfig.textBlocks || initState.textBlocks || [],
      activeTextBlockIndex: null,
      isAddMenuOpen: false,
      isSelectingColor: false
    };
    this.props.config.forEach(config => {
      state.config[config.key] =
        customConfig.config[config.key] || initState.config[config.key] || config.defaultValue;
    });
    this.state = state;

    this.textBlockId = 0;
  }
  componentDidMount() {
    const newState = {
      iframeMaxWidth: this.iframeRef.current.offsetWidth,
      iframeMaxHeight: this.iframeRef.current.offsetHeight
    };
    if (!this.state.iframeWidth || !this.state.iframeHeight) {
      newState.iframeWidth = newState.iframeMaxWidth;
      newState.iframeHeight = newState.iframeMaxHeight;
    }
    this.setState(newState);
    window.addEventListener("message", this.onWindowMessage);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.onWindowMessage);
  }
  componentDidUpdate(nextProps, nextState) {
    if (!this.props.refreshIframe && nextState.config !== this.state.config) {
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
    const {
      title,
      fileName,
      refreshIframe,
      author,
      authorLink,
      isPausable
    } = this.props;
    const {
      iframeWidth,
      iframeHeight,
      textBlocks,
      activeTextBlockIndex,
      captureConfig,
      captureImage,
      iframeVersion,
      isPaused
    } = this.state;
    const scaleToFullyFit = this.getScaleToFullyFit();
    return (
      <Modal
        open
        closeIcon
        onClose={this.props.onClose}
        className={s["the-modal"]}
      >
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
              <div className={s["config-over-right-buttons"]}>
                {isPausable && (
                  <Button
                    title={isPaused ? "Unpause" : "Pause"}
                    circular
                    icon={isPaused ? "play" : "pause"}
                    onClick={isPaused ? this.unpause : this.pause}
                    className={s["pause-button"]}
                  />
                )}
                <Button
                  title="Download"
                  circular
                  icon="download"
                  onClick={this.download}
                />
              </div>
            </div>
            <div ref={this.iframeWrapperRef} className={s["iframe-wrapper"]}>
              <IframePreview
                version={refreshIframe ? iframeVersion : 1}
                fileName={fileName}
                ref={this.iframeRef}
                onLoad={this.postConfigToIframe}
                className={s["iframe"]}
                width={iframeWidth}
                height={iframeHeight}
                scale={scaleToFullyFit}
              />
              <div
                className={s["opaque-overlay"]}
                onClick={this.onOpaqueOverlayClick}
              />
              {textBlocks.map((textBlock, index) => (
                <InsertedText
                  key={textBlock.id}
                  isActive={index === activeTextBlockIndex}
                  config={textBlock.config}
                  onClick={() => this.setActiveTextBlockIndex(index)}
                  ref={ref => {
                    this.textBlocksRefs[index] = ref;
                  }}
                  initialValue={textBlock.text || "Some sample text"}
                  initialPosition={
                    textBlock.position &&
                    this.makePositionRelativeToEditContainer(textBlock.position)
                  }
                  scale={scaleToFullyFit}
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
                      initialValue={captureConfig[index].text}
                      initialPosition={captureConfig[index].position}
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

  getScaleToFullyFit = () => {
    const {
      iframeWidth,
      iframeHeight,
      iframeMaxWidth,
      iframeMaxHeight
    } = this.state;
    let scaleToFitWidth = 1;
    let scaleToFitHeight = 1;
    if (iframeWidth && iframeWidth > iframeMaxWidth) {
      scaleToFitWidth = iframeMaxWidth / iframeWidth;
    }
    if (iframeHeight && iframeHeight > iframeMaxHeight) {
      scaleToFitHeight = iframeMaxHeight / iframeHeight;
    }
    const scaleToFullyFit = Math.min(scaleToFitWidth, scaleToFitHeight);
    return scaleToFullyFit;
  };

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
    const { textBlocks } = this.state;
    const lastTextBlock = textBlocks[textBlocks.length - 1] || {};
    const defaultConfig = {
      fontFamily: "helvetica",
      fontSize: 28,
      padding: 10,
      color: "#000",
      backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 }
    };
    this.setState({
      textBlocks: [
        ...textBlocks,
        {
          id: this.textBlockId++,
          config: lastTextBlock.config || defaultConfig
        }
      ],
      activeTextBlockIndex: textBlocks.length
    });
  };

  setActiveTextBlockIndex = index => {
    this.setState({ activeTextBlockIndex: index });
  };

  unsetActiveTextBlockIndex = () => {
    this.setState({ activeTextBlockIndex: null });
  };

  makePositionRelativeToEditContainer = position => {
    if (!this.iframeRef.current) {
      return null;
    }
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const iframeWrapperRect = this.iframeWrapperRef.current.getBoundingClientRect();
    if (position.left && position.top) {
      return {
        left: iframeRect.left - iframeWrapperRect.left + position.left,
        top: iframeRect.top - iframeWrapperRect.top + position.top
      };
    }
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
    const { refreshIframe } = this.props;
    const { config, iframeVersion, isPaused } = this.state;
    this.setState({
      config: { ...config, [configKey]: configValue },
      iframeVersion: iframeVersion + 1,
      isPaused: refreshIframe ? false : isPaused
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

  pause = () => {
    this.iframeRef.current.contentWindow.postMessage({
      type: "pause"
    });
    this.setState({ isPaused: true });
  };

  unpause = () => {
    const { iframeVersion } = this.state;
    if (!this.props.refreshIframe) {
      this.iframeRef.current.contentWindow.postMessage({
        type: "unpause"
      });
    }
    this.setState({ isPaused: false, iframeVersion: iframeVersion + 1 });
  };

  saveConfigToDB = (config) => fetch('http://localhost:9000/config',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        method: "POST",
        body: JSON.stringify(config)
    })

  download = () => {
    const scale = this.getScaleToFullyFit();
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const captureConfig = this.state.textBlocks.map((textBlock, index) => {
      const textBlockRect = this.textBlocksRefs[index].getBoundingClientRect();
      const text = this.textBlocksRefs[index].children[0].innerText;
      return {
        text,
        position: {
          left: (textBlockRect.left - iframeRect.left) / (scale || 1),
          top: (textBlockRect.top - iframeRect.top) / (scale || 1)
        }
      };
    });
    this.setState({ captureConfig });
    // console.log("config", JSON.stringify(this.state.config));
    console.log("config", this.state.config);
    console.log("captureConfig", captureConfig);
    console.log("textBlocks", this.state.textBlocks);

    this.saveConfigToDB({
      title: this.props.fileName,
      size: {
        width: this.state.iframeWidth,
        height: this.state.iframeHeight,
      },
      config: this.state.config,
      captureConfig,
      textBlocks: this.state.textBlocks.map((textBlock, idx) => ({
        ...textBlock,
        text: captureConfig[idx].text,
        position: captureConfig[idx].position,
      })),
    });
  };
}

export default TheModal;
