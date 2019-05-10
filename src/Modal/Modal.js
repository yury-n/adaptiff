import React, { Component } from "react";
import classnames from "classnames";
import html2canvas from "html2canvas";
import { Modal, Input, Button, Icon, Checkbox } from "semantic-ui-react";
import TextConfig from "./TextConfig/TextConfig";
import ImageConfig from "./ImageConfig/ImageConfig";
import InsertButton from "./InsertButton/InsertButton";
import InsertedText from "./InsertedText/InsertedText";
import DraggableItem from "./DraggableItem/DraggableItem";
import InsertedImage from "./InsertedImage/InsertedImage";
import IframePreview from "./IframePreview/IframePreview";
import ArtConfig from "./ArtConfig/ArtConfig";
import settings from "../settings";

import "rc-slider/assets/index.css";
import "./global.overrides.css";
import s from "./Modal.module.css";

const IFRAME_MARGIN = 100; //px

class TheModal extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    this.iframeWrapperRef = React.createRef();
    this.insertedItemsRefs = {};
    this.captureFrameRef = React.createRef();
    const initState = props.initState || { size: {}, config: {} };

    const state = {
      isPaused: false,
      isPreparingDownload: false,
      isPublic:
        localStorage.getItem("modal.isPublic") === "false" ? false : true,
      config: {},
      iframeVersion: 0, // for props.config.refreshIframe = true
      // Check for custom properties first
      iframeWidth:
        initState.size.width ||
        +localStorage.getItem("modal.iframeWidth") ||
        undefined,
      iframeHeight:
        initState.size.height ||
        +localStorage.getItem("modal.iframeHeight") ||
        undefined,
      insertedItems:
        initState.insertedItems ||
        [
          // {
          //   id: 1,
          //   type: "image",
          //   width: 30,
          //   height: 29,
          //   imageUrl:
          //     "data:image/png;base64,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"
          // }
        ],
      activeInsertedItemIndex: null,
      isAddMenuOpen: false,
      isSelectingColor: false
    };
    this.props.config.forEach(config => {
      state.config[config.key] =
        initState.config[config.key] || config.defaultValue;
    });
    this.state = state;

    this.insertedBlockId = 0;
  }
  componentDidMount() {
    const newState = {
      iframeMaxWidth: this.iframeWrapperRef.current.offsetWidth - IFRAME_MARGIN,
      iframeMaxHeight:
        this.iframeWrapperRef.current.offsetHeight - IFRAME_MARGIN
    };
    if (!this.state.iframeWidth || !this.state.iframeHeight) {
      newState.iframeWidth = newState.iframeMaxWidth;
      newState.iframeHeight = newState.iframeMaxHeight;
    }
    this.setState(newState);
    window.addEventListener("message", this.onWindowMessage);
    window.addEventListener("keyup", this.onKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.onWindowMessage);
    window.removeEventListener("keyup", this.onKeyUp);
  }
  componentDidUpdate(nextProps, prevState) {
    if (!this.props.refreshIframe && prevState.config !== this.state.config) {
      this.postConfigToIframe();
    }
    if (this.state.captureConfig) {
      if (!this.state.capturedIframe) {
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
            capturedIframe: null,
            isPreparingDownload: false
          });
        });
      }
    }
    if (this.state.iframeWidth !== prevState.iframeWidth) {
      localStorage.setItem("modal.iframeWidth", this.state.iframeWidth);
    }
    if (this.state.iframeHeight !== prevState.iframeHeight) {
      localStorage.setItem("modal.iframeHeight", this.state.iframeHeight);
    }
  }
  render() {
    const {
      title,
      fileName,
      refreshIframe,
      author,
      authorLink,
      isPausable,
      withCloseButton = true
    } = this.props;
    const {
      iframeWidth,
      iframeHeight,
      insertedItems,
      activeInsertedItemIndex,
      captureConfig,
      capturedIframe,
      iframeVersion,
      isPaused,
      isPreparingDownload,
      isPublic
    } = this.state;
    const scaleToFullyFit = this.getScaleToFullyFit();
    return (
      <Modal
        open
        closeIcon={withCloseButton}
        onClose={this.props.onClose}
        className={s["the-modal"]}
      >
        <Modal.Content className="modal-content">
          <div className={s["modal-sidebar"]}>
            <div
              className={classnames(
                s["title-container"],
                activeInsertedItemIndex !== null && s["blurred"]
              )}
              onClick={this.unsetActiveInsertedItemIndex}
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
            <div className={s["config-container"]}>{this.renderConfig()}</div>
          </div>
          <div className={s["modal-right-side"]}>
            <div className={s["config-over-preview"]}>
              <InsertButton
                onInsertText={this.insertText}
                onInsertImage={this.insertImage}
              />
              <div className={s["dimensions"]}>
                <Input
                  defaultValue={iframeWidth}
                  className={s["dimension-input"]}
                  onKeyUp={this.setStateOnEnter("iframeWidth")}
                  onBlur={this.setStateOnBlur("iframeWidth")}
                />
                <span className={s["dimension-times"]}>&times;</span>
                <Input
                  defaultValue={iframeHeight}
                  className={s["dimension-input"]}
                  onKeyUp={this.setStateOnEnter("iframeHeight")}
                  onBlur={this.setStateOnBlur("iframeHeight")}
                />
              </div>
              <div className={s["config-over-right-buttons"]}>
                <Checkbox
                  checked={isPublic}
                  onChange={this.toggleIsPublic}
                  label="public"
                />
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
                  icon={!isPreparingDownload ? "download" : undefined}
                  loading={isPreparingDownload}
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
              {insertedItems.map((insertedItem, index) => (
                <DraggableItem
                  key={insertedItem.id}
                  isActive={index === activeInsertedItemIndex}
                  initialPosition={
                    insertedItem.position &&
                    this.makePositionRelativeToEditContainer(
                      insertedItem.position
                    )
                  }
                  onClick={() => this.setactiveInsertedItemIndex(index)}
                >
                  {this.renderInsertedItem(insertedItem, index)}
                </DraggableItem>
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
                  {capturedIframe && (
                    <img
                      className={s["captured-iframe"]}
                      alt=""
                      src={capturedIframe}
                    />
                  )}
                  {insertedItems.map((insertedItem, index) => (
                    <div
                      style={{
                        position: "absolute",
                        left: captureConfig[index].position.left,
                        top: captureConfig[index].position.top
                      }}
                    >
                      {this.renderInsertedItem(
                        insertedItem.type === "image"
                          ? {
                              ...insertedItem,
                              width: captureConfig[index].width,
                              height: captureConfig[index].height
                            }
                          : {
                              ...insertedItem,
                              text: captureConfig[index].text
                            },
                        index
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Modal.Content>
      </Modal>
    );
  }

  renderInsertedItem = (insertedItem, index) => {
    const refCallback = ref => {
      this.insertedItemsRefs[index] = ref;
    };
    switch (insertedItem.type) {
      case "text":
        return (
          <InsertedText
            key={insertedItem.id}
            config={insertedItem.config}
            ref={refCallback}
            initialValue={insertedItem.text || "Some sample text"}
            scale={this.getScaleToFullyFit()}
          />
        );
      case "image":
        return (
          <InsertedImage
            width={insertedItem.width}
            height={insertedItem.height}
            ref={refCallback}
            imageUrl={insertedItem.imageUrl}
          />
        );
      default:
        return null;
    }
  };

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
      this.setState({ capturedIframe: event.data.image });
    }
  };

  onKeyUp = event => {
    if (
      (event.key === "Backspace" || event.key === "Delete") &&
      event.target.contentEditable !== "true"
    ) {
      this.deleteCurrentInsertedItem();
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
      this.unsetActiveInsertedItemIndex();
    }
  };

  toggleIsPublic = () => {
    const { isPublic } = this.state;
    const newIsPublic = !isPublic;
    this.setState({ isPublic: newIsPublic });
    localStorage.setItem("modal.isPublic", newIsPublic);
  };

  insertText = () => {
    const { insertedItems } = this.state;
    const lastinsertedItem = insertedItems[insertedItems.length - 1] || {};
    const defaultConfig = {
      fontFamily: "helvetica",
      fontSize: 28,
      padding: 10,
      color: "#000",
      backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 }
    };
    this.insertItem({
      id: this.insertedBlockId++,
      type: "text",
      config: lastinsertedItem.config || defaultConfig
    });
  };

  insertImage = ({ imageUrl, width, height }) => {
    const aspectRatio = width / height;
    const { iframeWidth } = this.state;
    if (!imageUrl) {
      return;
    }
    this.insertItem({
      id: this.insertedBlockId++,
      type: "image",
      width: Math.round(iframeWidth * 0.2),
      height: Math.round((iframeWidth * 0.2) / aspectRatio),
      imageUrl
    });
  };

  insertItem = item => {
    const { insertedItems } = this.state;
    this.setState({
      insertedItems: [...insertedItems, item],
      activeInsertedItemIndex: insertedItems.length
    });
  };

  setactiveInsertedItemIndex = index => {
    this.setState({ activeInsertedItemIndex: index });
  };

  unsetActiveInsertedItemIndex = () => {
    this.setState({ activeInsertedItemIndex: null });
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

  deleteCurrentInsertedItem = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    const updatedinsertedItems = [...insertedItems];
    updatedinsertedItems.splice(activeInsertedItemIndex, 1);
    this.setState({
      insertedItems: updatedinsertedItems,
      activeInsertedItemIndex: null
    });
  };

  renderConfig = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    if (activeInsertedItemIndex === null) {
      return this.renderArtConfig();
    }
    return insertedItems[activeInsertedItemIndex].type === "image"
      ? this.renderImageConfig()
      : this.renderTextConfig();
  };

  renderTextConfig = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    return (
      <TextConfig
        config={insertedItems[activeInsertedItemIndex].config}
        setConfigValue={this.setTextConfigValue}
        onDelete={this.deleteCurrentInsertedItem}
        onStartSelectingColor={this.onStartSelectingColor}
        onStopSelectingColor={this.onStopSelectingColor}
      />
    );
  };

  renderImageConfig = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    return (
      <ImageConfig
        config={insertedItems[activeInsertedItemIndex].config}
        setConfigValue={this.setTextConfigValue}
        onDelete={this.deleteCurrentInsertedItem}
      />
    );
  };

  renderArtConfig = () => {
    return (
      <ArtConfig
        config={this.props.config}
        configValues={this.state.config}
        setConfigValue={this.setArtConfigValue}
        onStartSelectingColor={this.onStartSelectingColor}
        onStopSelectingColor={this.onStopSelectingColor}
      />
    );
  };

  setTextConfigValue = (configKey, configValue) => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    const activeinsertedItem = insertedItems[activeInsertedItemIndex];
    const newinsertedItems = [...insertedItems];
    newinsertedItems[activeInsertedItemIndex] = {
      ...activeinsertedItem,
      config: {
        ...activeinsertedItem.config,
        [configKey]: configValue
      }
    };
    this.setState({
      insertedItems: newinsertedItems
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

  saveConfigToDB = config => {
    return fetch(`${settings.API_PATH_PROD}/configs/add`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      method: "POST",
      body: JSON.stringify(config)
    });
  };

  download = () => {
    const scale = this.getScaleToFullyFit();
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const captureConfig = this.state.insertedItems.map(
      (insertedItem, index) => {
        const insertedItemRect = this.insertedItemsRefs[
          index
        ].getBoundingClientRect();

        const text = this.insertedItemsRefs[index].innerText;
        return {
          text,
          width: insertedItemRect.width,
          height: insertedItemRect.height,
          position: {
            left: (insertedItemRect.left - iframeRect.left) / (scale || 1),
            top: (insertedItemRect.top - iframeRect.top) / (scale || 1)
          }
        };
      }
    );
    this.setState({ captureConfig, isPreparingDownload: true });
    // console.log("config", JSON.stringify(this.state.config));
    console.log("config", this.state.config);
    console.log("captureConfig", captureConfig);
    console.log("insertedItems", this.state.insertedItems);

    if (this.state.isPublic) {
      this.saveConfigToDB({
        title: this.props.fileName,
        size: {
          width: this.state.iframeWidth,
          height: this.state.iframeHeight
        },
        config: this.state.config,
        insertedItems: this.state.insertedItems.map((insertedItem, idx) => ({
          ...insertedItem,
          width: captureConfig[idx].width,
          height: captureConfig[idx].height,
          text: captureConfig[idx].text,
          position: captureConfig[idx].position
        }))
      });
    }
  };
}

export default TheModal;
