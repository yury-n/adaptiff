import React, { Component, useState, useEffect } from "react";
import classnames from "classnames";
import ReactDOM from "react-dom";
import throttle from "lodash.throttle";
import set from "lodash.set";
import get from "lodash.get";
import uniq from "lodash.uniq";
import { Modal, Button, Icon, Menu } from "semantic-ui-react";
import TextConfig from "./TextConfig/TextConfig";
import ImageConfig from "./ImageConfig/ImageConfig";
import InsertedText from "./InsertedText/InsertedText";
import InsertedTextDraggable from "./InsertedText/InsertedTextDraggable";
import InsertedImage from "./InsertedImage/InsertedImage";
import InsertedImageRnD from "./InsertedImage/InsertedImageRnD";
import IframePreview from "./IframePreview/IframePreview";
import IframePreviewRnD from "./IframePreview/IframePreviewRnD";
import ArtConfig from "./ArtConfig/ArtConfig";
import Layers from "./Layers/Layers";
import settings from "../settings";
import {
  downloadFromDataURL,
  logStat,
  macify,
  colorObjToString,
  copyToClipboard
} from "../_utils";

import "rc-slider/assets/index.css";
import "./global.overrides.css";
import s from "./Modal.module.css";
import InsertionMenu from "./InsertionMenu/InsertionMenu";
import GlobalConfig from "./GlobalConfig/GlobalConfig";
import { allSvgPacks } from "../pages/svgsList";
import Dimensions from "./Dimensions/Dimensions";

const CANVAS_MARGIN = 50; //px

class TheModal extends Component {
  isSelectingColor = false;
  isDraggingInsertedItem = false;
  isResizingInsertedItem = false;
  isRotatingInsertedItem = false;
  isWheelingInsertedItem = false;
  hasWheelingClassAttached = false;
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
    this.iframeTop = 0;
    this.canvasWrapperRef = React.createRef();
    this.insertedItemsRefs = {};
    this.captureFrameRef = React.createRef();
    this.ctrlDown = false;
    this.bufferedInsertedItem = null;
    const initState = props.initState || { size: {}, configValues: {} };
    // used in DB
    if (initState.config) {
      initState.configValues = initState.config;
    }

    const state = {
      isPaused: false,
      isPreparingDownload: false,
      isLoadingIframe: false,
      isPublic: +localStorage.getItem("modal.isPublic") || 0,
      configValues: {},
      iframeVersion: 0, // for props.config.refreshIframe = true
      // Check for custom properties first
      canvasWidth: initState.size
        ? initState.size.width
        : // do not persist until we have a flush button
          // +localStorage.getItem("modal.canvasWidth") ||
          undefined,
      canvasHeight: initState.size
        ? initState.size.height
        : // do not persist until we have a flush button
          // +localStorage.getItem("modal.canvasHeight") ||
          undefined,
      insertedItems:
        initState.insertedItems ||
        [
          // {
          //   id: 1001,
          //   type: "text",
          //   text: "Sample text",
          //   hasCyrillic: false,
          //   config: {
          //     fontFamily: "Roboto",
          //     fontSize: 28,
          //     padding: 10,
          //     letterSpacing: 0,
          //     color: "#000",
          //     backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
          //     borderWidth: 0
          //   }
          // }
          // {
          //   id: 1002,
          //   type: "image",
          //   width: 30,
          //   height: 29,
          //   imageUrl:
          //     "data:image/png;base64,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"
          // }
        ],
      activeInsertedItemIndex: null,
      highlightInsertedItemIndex: null,
      configMode: props.palettes ? "global" : "element"
    };
    this.props.config.forEach(config => {
      state.configValues[config.key] =
        initState.configValues[config.key] !== undefined
          ? initState.configValues[config.key]
          : config.defaultValue;
      if (
        config.type === "randomValues" &&
        !initState.configValues[config.key] &&
        !config.isEnabledByDefault
      ) {
        state.configValues[config.key] = [];
      }
    });
    this.state = state;

    this.insertedBlockId = 2;
  }
  componentDidMount() {
    this.updateIframeTop();
    const newState = {
      canvasMaxWidth: this.canvasWrapperRef.current.offsetWidth - CANVAS_MARGIN,
      canvasMaxHeight:
        this.canvasWrapperRef.current.offsetHeight - CANVAS_MARGIN
    };
    if (!this.state.canvasWidth || !this.state.canvasHeight) {
      newState.canvasWidth = newState.canvasMaxWidth;
      newState.canvasHeight = newState.canvasMaxHeight;
    }
    this.setState(newState);
    window.addEventListener("message", this.onWindowMessage);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("keydown", this.onKeyDown);
    this.throttledMouseMove = throttle(this.onMouseMove, 250);
    window.addEventListener("mousemove", this.onMouseMove);
    this.setPaddingOverlayDims();
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.onWindowMessage);
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("mousemove", this.throttledMouseMove);
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateIframeTop();
    this.captureInsertedObjectIfNeeded(prevProps, prevState);
    const activeInsertedItem = this.getActiveInsertedItem();
    if (
      !this.props.refreshIframe &&
      (prevState.configValues !== this.state.configValues ||
        this.state.canvasWidth !== prevState.canvasWidth ||
        this.state.canvasHeight !== prevState.canvasHeight ||
        (this.state.insertedItems !== prevState.insertedItems &&
          activeInsertedItem &&
          activeInsertedItem.type === "object"))
    ) {
      this.postConfigToIframe();
    }
    if (this.state.captureConfig) {
      let hasNotDownloadedInsertedObjects = false;
      this.state.insertedItems.forEach(insertedItem => {
        if (insertedItem.type === "object" && !insertedItem.capturedIframe) {
          hasNotDownloadedInsertedObjects = true;
          if (!this.state.hasSentDownloadRequests) {
            this.sendDownloadRequest(this.insertedItemsRefs[insertedItem.id]);
          }
        }
      });
      if (!this.state.capturedIframe) {
        if (!this.state.hasSentDownloadRequests) {
          this.sendDownloadRequest(this.iframeRef.current);
        }
      }
      if (!this.state.capturedIframe || hasNotDownloadedInsertedObjects) {
        if (!this.state.hasSentDownloadRequests) {
          this.setState({
            hasSentDownloadRequests: true
          });
        }
        return;
      }
      window
        .html2canvas(this.captureFrameRef.current, { scale: 2 })
        .then(canvas => {
          var imageDataURL = canvas.toDataURL("image/png");
          downloadFromDataURL("download.png", imageDataURL);
          this.setState({
            captureConfig: null,
            capturedIframe: null,
            hasSentDownloadRequests: false,
            isPreparingDownload: false
          });
        });
    }
    if (this.state.canvasWidth !== prevState.canvasWidth) {
      localStorage.setItem("modal.canvasWidth", this.state.canvasWidth);
    }
    if (this.state.canvasHeight !== prevState.canvasHeight) {
      localStorage.setItem("modal.canvasHeight", this.state.canvasHeight);
    }
    if (
      this.state.canvasWidth !== prevState.canvasWidth ||
      this.state.canvasHeight !== prevState.canvasHeight ||
      !prevState.canvasMaxWidth
    ) {
      this.setPaddingOverlayDims();
    }
    if (
      prevState.canvasWidth &&
      (this.state.canvasWidth !== prevState.canvasWidth ||
        this.state.canvasHeight !== prevState.canvasHeight)
    ) {
      const widthDelta = Math.abs(
        this.state.canvasWidth - prevState.canvasWidth
      );
      const heightDelta = Math.abs(
        this.state.canvasHeight - prevState.canvasHeight
      );
      let ratio;
      if (widthDelta > heightDelta) {
        ratio = this.state.canvasWidth / prevState.canvasWidth;
      } else {
        ratio = this.state.canvasHeight / prevState.canvasHeight;
      }
      const newCanvasWidthIfProportiallyScaled = prevState.canvasWidth * ratio;
      const newCanvasHeightIfProportiallyScaled =
        prevState.canvasHeight * ratio;

      const extraWidth =
        this.state.canvasWidth - newCanvasWidthIfProportiallyScaled;
      const extraHeight =
        this.state.canvasHeight - newCanvasHeightIfProportiallyScaled;

      const updatedInsertedItems = [...this.state.insertedItems].map(
        insertedItem => ({
          ...insertedItem,
          width: insertedItem.width ? insertedItem.width * ratio : undefined,
          height: insertedItem.width ? insertedItem.height * ratio : undefined,
          position: {
            left: insertedItem.position.left * ratio + extraWidth / 2,
            top: insertedItem.position.top * ratio + extraHeight / 2
          },
          configValues: {
            ...insertedItem.configValues,
            fontSize: Math.round(insertedItem.configValues.fontSize * ratio)
          }
        })
      );
      this.setState({ insertedItems: updatedInsertedItems });
    }
  }
  getAllColorsFromState = () => {
    const possibleColorAttrs = ["color", "backgroundColor", "palette"];

    const colorsFromState = []; // { color: '#ccc', key: 'config.color' }

    // background
    possibleColorAttrs.forEach(possibleColorAttr => {
      const attrValue = this.state.configValues[possibleColorAttr];
      if (Array.isArray(attrValue)) {
        attrValue.forEach((color, colorIndex) => {
          colorsFromState.push({
            color,
            key: `configValues[${possibleColorAttr}][${colorIndex}]`
          });
        });
      } else if (attrValue) {
        colorsFromState.push({
          color: attrValue,
          key: `configValues[${possibleColorAttr}]`
        });
      }
    });

    // inserted items
    if (this.state.insertedItems && this.state.insertedItems.length) {
      this.state.insertedItems.forEach((insertedItem, insertedItemIndex) => {
        possibleColorAttrs.forEach(possibleColorAttr => {
          const config = insertedItem.configValues;
          const attrValue = config[possibleColorAttr];
          if (Array.isArray(attrValue)) {
            attrValue.forEach((color, colorIndex) => {
              if (typeof color === "object" && color.a === 0) {
                return; // omit transparent colors
              }
              colorsFromState.push({
                color:
                  typeof color === "string" ? color : colorObjToString(color),
                key: `insertedItems[${insertedItemIndex}].configValues[${possibleColorAttr}][${colorIndex}]`
              });
            });
          } else if (attrValue) {
            if (typeof attrValue === "object" && attrValue.a === 0) {
              return; // omit transparent colors
            }
            colorsFromState.push({
              color:
                typeof attrValue === "string"
                  ? attrValue
                  : colorObjToString(attrValue),
              key: `insertedItems[${insertedItemIndex}].configValues[${possibleColorAttr}]`
            });
          }
        });
      });
    }

    return colorsFromState;
  };
  render() {
    const { withCloseButton = true } = this.props;
    const { iframeVersion } = this.state;
    const scaleToFullyFit = this.getScaleToFullyFit();
    if (
      scaleToFullyFit !== 1 &&
      iframeVersion === 0 &&
      this.props.initState &&
      this.props.initState.insertedItems &&
      this.props.initState.insertedItems.length
    ) {
      setTimeout(() => {
        this.setState({ iframeVersion: iframeVersion + 1 });
      }, 1);
    }
    return (
      <Modal
        open
        closeIcon={withCloseButton}
        closeOnDimmerClick={false}
        onClose={this.onClose}
        className={s["the-modal"]}
      >
        <Modal.Content className="modal-content">
          {this.props.onGoToPrevAdaptation && (
            <Button
              basic
              className={classnames(
                s["navigation-button"],
                s["navigation-button-prev"]
              )}
              onClick={this.props.onGoToPrevAdaptation}
            >
              <span>←</span> prev
            </Button>
          )}
          {this.props.onGoToNextAdaptation && (
            <Button
              basic
              className={classnames(
                s["navigation-button"],
                s["navigation-button-next"]
              )}
              onClick={this.props.onGoToNextAdaptation}
            >
              next <span>→</span>
            </Button>
          )}
          <div className={s["close-area"]} onClick={this.props.onClose}></div>
          {this.renderLeftSideBar()}
          {this.renderCentralArea()}
          {this.renderRightSideBar()}
        </Modal.Content>
      </Modal>
    );
  }

  renderRightSideBar = () => {
    return (
      <CollapsibleSiderBar
        insertImage={this.insertImage}
        insertText={this.insertText}
        insertObject={this.insertObject}
        priorityObjectPack={this.props.objectPack}
        onClick={this.onModalRightSideClick}
      />
    );
  };

  renderCentralArea = () => {
    const { fileName, refreshIframe, isPausable, hasRandomness } = this.props;
    const {
      canvasWidth,
      canvasHeight,
      insertedItems,
      captureConfig,
      iframeVersion,
      isPaused,
      isPreparingDownload,
      isLoadingIframe,
      activeInsertedItemIndex
    } = this.state;
    const scaleToFullyFit = this.getScaleToFullyFit();
    return (
      <div
        className={s["modal-central-area"]}
        onClick={this.onModalRightSideClick}
      >
        <div className={s["config-over-preview"]}>
          <div className={s["config-over-left-buttons"]}>
            <Button.Group className={s["copy-paste-buttons"]}>
              <Button
                icon
                aria-label={macify("Copy (Ctrl + C)")}
                data-balloon-pos="down"
                onClick={this.copyActiveInsertedItem}
                disabled={activeInsertedItemIndex === null}
              >
                <Icon name="copy outline" />
              </Button>
              <Button
                icon
                aria-label={macify("Paste (Ctrl + P)")}
                data-balloon-pos="down"
                disabled={!this.bufferedInsertedItem}
                onClick={this.pasteActiveInsertedItem}
              >
                <Icon name="paste" />
              </Button>
            </Button.Group>
            {activeInsertedItemIndex !== null && (
              <>
                <Button.Group>
                  <Button
                    icon
                    aria-label={macify("Bring to Front (Shift + ])")}
                    data-balloon-pos="down"
                    onClick={e => {
                      this.bringActiveInsertedItemToFront();
                      e.stopPropagation();
                    }}
                  >
                    <Icon name="long arrow alternate up" />
                  </Button>
                  <Button
                    icon
                    aria-label={macify("Bring to Back (Shift + [)")}
                    data-balloon-pos="down"
                    onClick={e => {
                      this.bringActiveInsertedItemToBack();
                      e.stopPropagation();
                    }}
                  >
                    <Icon name="long arrow alternate down" />
                  </Button>
                </Button.Group>
                <Button
                  icon
                  aria-label="Remove (Backspace)"
                  data-balloon-pos="down"
                  onClick={this.removeActiveInsertedItem}
                  className={s["remove-active-item-button"]}
                >
                  <Icon name="remove" />
                </Button>
              </>
            )}
            {hasRandomness && (
              <Button
                title="Refresh"
                circular
                icon="refresh"
                onClick={this.refresh}
                className={s["refresh-button"]}
              />
            )}
          </div>
          <Dimensions
            width={canvasWidth}
            height={canvasHeight}
            onChange={this.onDimensionsChange}
          />
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
              loading={isPreparingDownload}
              onClick={this.download}
              className={s["download-button"]}
            >
              <Icon name="download" />
              Download
            </Button>
          </div>
        </div>
        <div
          ref={this.canvasWrapperRef}
          className={classnames(
            s["canvas-wrapper"],
            "canvas-wrapper" /* global */,
            this.state.highlightInsertedItemIndex !== null &&
              "has-highlighted-item" /* global */
          )}
        >
          {isLoadingIframe && (
            <div className={s["spinner-box"]}>
              <div className={s["circle-border"]}>
                <div className={s["circle-core"]} />
              </div>
            </div>
          )}
          <div
            className={s["canvas"]}
            style={{
              width: canvasWidth && canvasWidth * scaleToFullyFit,
              height: canvasHeight && canvasHeight * scaleToFullyFit
            }}
          >
            <IframePreview
              showIframe
              version={refreshIframe ? iframeVersion : 1}
              fileName={fileName}
              ref={this.iframeRef}
              onLoad={this.onIframeLoad}
              className={s["iframe"]}
              width={canvasWidth}
              height={canvasHeight}
              scale={scaleToFullyFit}
            />
          </div>
          <div
            id="padding-overlay-left"
            className={classnames(
              s["padding-overlay"],
              s["padding-overlay-left"]
            )}
          />
          <div
            id="padding-overlay-right"
            className={classnames(
              s["padding-overlay"],
              s["padding-overlay-right"]
            )}
          />
          <div
            id="padding-overlay-top"
            className={classnames(
              s["padding-overlay"],
              s["padding-overlay-top"]
            )}
          />
          <div
            id="padding-overlay-bottom"
            className={classnames(
              s["padding-overlay"],
              s["padding-overlay-bottom"]
            )}
          />
          {!isLoadingIframe && insertedItems.map(this.renderInsertedRnDItem)}
          {captureConfig && this.renderCaptureFrame()}
        </div>
      </div>
    );
  };

  renderLeftSideBar = () => {
    return (
      <div className={classnames(s["modal-sidebar"], s["modal-left-sidebar"])}>
        <Menu className={"tab-menu tabs-zone art-tabs-zone"} icon="labeled">
          <Menu.Item
            active={this.state.configMode === "element"}
            onClick={() => this.setState({ configMode: "element" })}
            className={"tab-menu-item"}
          >
            <Icon name="expand" />
            <div>Element</div>
          </Menu.Item>
          <Menu.Item
            className={"tab-menu-item"}
            active={this.state.configMode === "global"}
            onClick={() =>
              this.setState({
                configMode: "global",
                activeInsertedItemIndex: null
              })
            }
          >
            <Icon name="globe" />
            <div>Global</div>
          </Menu.Item>
        </Menu>
        {/* {insertedItems.length > 0
              ? this.renderLayers()
              : this.renderTitleAndAuthor()} */}
        <div className={classnames(s["config-container"], "below-tabs-zone")}>
          {this.state.configMode === "element"
            ? this.renderElementConfig()
            : this.renderGlobalConfig()}
        </div>
      </div>
    );
  };

  renderCaptureFrame = () => {
    const {
      insertedItems,
      canvasWidth,
      canvasHeight,
      configValues,
      capturedIframe,
      captureConfig
    } = this.state;
    return ReactDOM.createPortal(
      <div
        className={s["capture-frame"]}
        style={{
          width: canvasWidth,
          height: canvasHeight
        }}
        ref={this.captureFrameRef}
      >
        {configValues.backgroundColor &&
          (configValues.withBackground === undefined ||
            configValues.withBackground) && (
            <div
              style={{
                backgroundColor: configValues.backgroundColor
              }}
              className={s["captured-background"]}
            />
          )}
        {capturedIframe && (
          <img className={s["captured-iframe"]} alt="" src={capturedIframe} />
        )}
        {insertedItems.map((insertedItem, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: captureConfig[index].position.left,
              top: captureConfig[index].position.top,
              transform: `rotate(${captureConfig[index].rotation}deg)`
            }}
          >
            {this.renderInsertedItem(
              ["image", "object"].includes(insertedItem.type)
                ? {
                    ...insertedItem,
                    width: captureConfig[index].width,
                    height: captureConfig[index].height,
                    rotation: captureConfig[index].rotation,
                    scale: 1
                  }
                : {
                    ...insertedItem,
                    text: captureConfig[index].text,
                    scale: 1
                  },
              index
            )}
          </div>
        ))}
      </div>,
      document.body
    );
  };

  renderInsertedRnDItem = (insertedItem, index) => {
    const { activeInsertedItemIndex, highlightInsertedItemIndex } = this.state;
    const refCallback = ref => {
      this.insertedItemsRefs[insertedItem.id] = ref;
    };
    const scaleToFit = insertedItem.scale || this.getScaleToFullyFit();
    const commonProps = {
      id: insertedItem.id,
      key: insertedItem.id,
      className: s["inserted-item"],
      scale: scaleToFit,
      isActive: index === activeInsertedItemIndex,
      isSvg: insertedItem.type === "object" && insertedItem.adaptation.isSvg,
      isHighlighted: index === highlightInsertedItemIndex,
      onClick: this.setActiveInsertedItemIndexBasedOnId,
      onBecomeInactive: this.unsetActiveInsertedItemIndex,
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      onResizeStart: this.onResizeStart,
      onResizeEnd: this.onResizeEnd,
      onRotateStart: this.onRotateStart,
      onRotateEnd: this.onRotateEnd,
      onWheelInteractionStart: this.onWheelInteractionStart,
      onWheelInteractionEnd: this.onWheelInteractionEnd,
      ref: refCallback,
      rotation: insertedItem.rotation,
      initialPosition:
        insertedItem.position &&
        this.makePositionRelativeToEditContainer(insertedItem.position)
    };
    switch (insertedItem.type) {
      case "text":
        const InsertedTextComponent =
          insertedItem.isDraggable === false
            ? InsertedText
            : InsertedTextDraggable;
        return (
          <InsertedTextComponent
            config={insertedItem.configValues}
            initialValue={insertedItem.text || ""}
            setHasCyrillic={value =>
              this.setTextConfigValue("hasCyrillic", value)
            }
            {...commonProps}
          />
        );
      case "image":
        return (
          <InsertedImageRnD
            width={insertedItem.width}
            height={insertedItem.height}
            imageUrl={insertedItem.imageUrl}
            {...commonProps}
          />
        );
      case "object":
        return (
          <IframePreviewRnD
            version={1}
            insertedObjectId={insertedItem.id}
            showIframe={insertedItem.showIframe}
            placeholder={insertedItem.capturedIframe}
            fileName={insertedItem.adaptation.fileName}
            pack={insertedItem.adaptation.pack}
            onGoToNextElementInPack={this.onGoToNextElementInPack}
            onGoToPrevElementInPack={this.onGoToPrevElementInPack}
            onLoad={this.onIframeLoad}
            width={insertedItem.width}
            height={insertedItem.height}
            lockAspectRatio={insertedItem.adaptation.lockAspectRatio}
            {...commonProps}
          />
        );
      default:
        return null;
    }
  };

  onGoToNextElementInPack = () => {
    this.onGoToElementInPack(+1);
  };

  onGoToPrevElementInPack = () => {
    this.onGoToElementInPack(-1);
  };

  onGoToElementInPack = change => {
    const insertedItem = this.getActiveInsertedItem();
    if (insertedItem.adaptation && insertedItem.adaptation.pack) {
      const pack = allSvgPacks[insertedItem.adaptation.pack];
      if (!pack) {
        return;
      }
      const insertedItemIndexInPack = pack.indexOf(insertedItem.adaptation);
      let updatedIndex = insertedItemIndexInPack + change;
      if (updatedIndex > pack.length - 1) {
        updatedIndex = 0;
      } else if (updatedIndex < 0) {
        updatedIndex = pack.length - 1;
      }
      insertedItem.adaptation = pack[updatedIndex];
      this.setState({ insertedItems: [...this.state.insertedItems] });
    }
  };

  renderInsertedItem = insertedItem => {
    const scaleToFit = insertedItem.scale || this.getScaleToFullyFit();
    switch (insertedItem.type) {
      case "text":
        return (
          <InsertedText
            key={insertedItem.id}
            config={insertedItem.configValues}
            initialValue={insertedItem.text || ""}
            scale={scaleToFit}
          />
        );
      case "image":
        return (
          <InsertedImage
            key={insertedItem.id}
            width={insertedItem.width * scaleToFit}
            height={insertedItem.height * scaleToFit}
            imageUrl={insertedItem.imageUrl}
          />
        );
      case "object":
        return (
          <InsertedImage
            key={insertedItem.id}
            width={insertedItem.width * scaleToFit}
            height={insertedItem.height * scaleToFit}
            imageUrl={insertedItem.capturedIframe}
          />
        );
      default:
        return null;
    }
  };

  getScaleToFullyFit = () => {
    const {
      canvasWidth,
      canvasHeight,
      canvasMaxWidth,
      canvasMaxHeight
    } = this.state;
    let scaleToFitWidth = 1;
    let scaleToFitHeight = 1;
    if (canvasWidth && canvasWidth > canvasMaxWidth) {
      scaleToFitWidth = canvasMaxWidth / canvasWidth;
    }
    if (canvasHeight && canvasHeight > canvasMaxHeight) {
      scaleToFitHeight = canvasMaxHeight / canvasHeight;
    }
    const scaleToFullyFit = Math.min(scaleToFitWidth, scaleToFitHeight);
    return scaleToFullyFit;
  };

  onWindowMessage = event => {
    const { insertedItems, configValues } = this.state;
    if (event.data.type === "download") {
      if (insertedItems.length || configValues.backgroundColor) {
        if (event.data.objectId) {
          const objectIndex = insertedItems.findIndex(
            insertedItem => +event.data.objectId === +insertedItem.id
          );
          const updatedInsertedItems = [...insertedItems];
          updatedInsertedItems[objectIndex] = {
            ...updatedInsertedItems[objectIndex],
            ...this.getCaptureConfig(insertedItems[objectIndex]),
            capturedIframe: event.data.image,
            showIframe: false
          };
          this.setState({
            insertedItems: updatedInsertedItems
          });
        } else {
          this.setState({ capturedIframe: event.data.image });
        }
      } else {
        const imageType = event.data.imageType || "png";
        const link = document.createElement("a");
        downloadFromDataURL(`download.${imageType}`, event.data.image);
        link.click();
        this.setState({
          captureConfig: null,
          capturedIframe: null,
          isPreparingDownload: false
        });
      }
    }
  };

  onKeyUp = event => {
    if (
      event.target.contentEditable === "true" ||
      event.target.tagName === "INPUT"
    ) {
      return;
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      this.removeActiveInsertedItem();
    } else if (event.key === "ArrowRight") {
      this.onGoToNextElementInPack();
    } else if (event.key === "ArrowLeft") {
      this.onGoToPrevElementInPack();
    }
  };

  onStartSelectingColor = () => {
    this.isSelectingColor = true;
    const { onStartSelectingColor } = this.props;
    onStartSelectingColor && onStartSelectingColor();
  };

  onStopSelectingColor = () => {
    setTimeout(() => {
      this.isSelectingColor = false;
      const { onStopSelectingColor } = this.props;
      onStopSelectingColor && onStopSelectingColor();
    }, 100); // prevent onModalRightSideClick
  };

  onGlobalColorChange = oldColor => newColor => {
    const allColors = this.getAllColorsFromState();
    const newState = {
      ...this.state,
      configValues: { ...this.state.configValues },
      insertedItems: [...this.state.insertedItems]
    };
    allColors.forEach(({ color, key }) => {
      if (colorObjToString(color) === colorObjToString(oldColor)) {
        set(newState, key, newColor);
        // if (key.slice(-1) === "]") {
        //   // key points to an element in array
        //   // need to create a new ref for that array
        //   const keyParts = key.split("[");
        //   keyParts.pop();
        //   const keyToArray = keyParts.join("[");
        //   console.log({ keyToArray });
        //   set(newState, keyToArray, [...get(newState, keyToArray)]);
        // }
        if (key.includes("insertedItems")) {
          const insertedItemIndex = key
            .split("insertedItems[")
            .pop()
            .split("]")
            .shift();
          const insertedItemId = this.state.insertedItems[insertedItemIndex].id;
          this.postConfigToIframe(insertedItemId);
          const keyToMutate = `insertedItems[${insertedItemIndex}]`;
          // set(newState, keyToMutate, { ...get(newState, keyToMutate) });
          set(newState, `${keyToMutate}.configValues`, {
            ...get(newState, `${keyToMutate}.configValues`)
          });
        }
      }
    });
    this.setState(newState);
  };

  onDragStart = () => {
    this.isDraggingInsertedItem = true;
    this.canvasWrapperRef.current.classList.add("is-dragging-inserted-item");
  };

  onDragEnd = () => {
    setTimeout(() => {
      this.isDraggingInsertedItem = false;
      this.canvasWrapperRef.current.classList.remove(
        "is-dragging-inserted-item"
      );
    }, 100); // prevent onModalRightSideClick
  };

  onResizeStart = () => {
    this.isResizingInsertedItem = true;
  };

  onResizeEnd = () => {
    setTimeout(() => {
      this.isResizingInsertedItem = false;
    }, 100); // prevent onModalRightSideClick
    this.postConfigToIframe();
  };

  onRotateStart = () => {
    this.isRotatingInsertedItem = true;
  };

  onRotateEnd = () => {
    setTimeout(() => {
      this.isRotatingInsertedItem = false;
    }, 100); // prevent onModalRightSideClick
  };

  onWheelInteractionStart = () => {
    this.isWheelingInsertedItem = true;
    this.hasWheelingClassAttached = true;
    this.canvasWrapperRef.current.classList.add("is-wheeling-inserted-item");
  };

  onWheelInteractionEnd = id => {
    this.isWheelingInsertedItem = false;
    this.sendDownloadRequest(this.insertedItemsRefs[id]);
    this.captureConfig(
      this.state.insertedItems.findIndex(item => item.id === id)
    );
  };

  captureConfig = objectIndex => {
    const { insertedItems } = this.state;
    const updatedInsertedItems = [...insertedItems];
    updatedInsertedItems[objectIndex] = {
      ...updatedInsertedItems[objectIndex],
      ...this.getCaptureConfig(insertedItems[objectIndex])
    };
    this.setState({
      insertedItems: updatedInsertedItems
    });
  };

  onModalRightSideClick = event => {
    const { activeInsertedItemIndex } = this.state;
    if (activeInsertedItemIndex === null) {
      return;
    }
    if (
      !this.isSelectingColor &&
      !this.isDraggingInsertedItem &&
      !this.isResizingInsertedItem &&
      !this.isRotatingInsertedItem &&
      !event.target.classList.contains(s["inserted-item"]) &&
      !event.target.closest(`.${s["inserted-item"]}`)
    ) {
      this.unsetActiveInsertedItemIndex();
    }
  };

  insertText = () => {
    const { insertedItems } = this.state;
    const scale = this.getScaleToFullyFit();
    const lastinsertedItem = insertedItems[insertedItems.length - 1];
    const defaultConfig = {
      fontFamily: "Roboto",
      fontSize: 24 / scale,
      padding: 10,
      letterSpacing: 0,
      color: "#000",
      backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
      borderWidth: 0,
      isInline: false,
      lineHeight: 12
    };
    this.insertItem({
      type: "text",
      hasCyrillic: false,
      text: "Sample text sample",
      isDraggable: true,
      configValues:
        lastinsertedItem && lastinsertedItem.type === "text"
          ? lastinsertedItem.configValues
          : defaultConfig
    });
  };

  insertImage = ({ imageUrl, width, height }) => {
    const aspectRatio = width / height;
    const { canvasWidth } = this.state;
    if (!imageUrl) {
      return;
    }
    this.insertItem({
      type: "image",
      width: Math.round(canvasWidth * 0.5),
      height: Math.round((canvasWidth * 0.5) / aspectRatio),
      imageUrl
    });
  };

  insertObject = adaptation => {
    logStat("insert_object");
    const configValues = {};
    const { canvasWidth, canvasHeight } = this.state;
    const initState = adaptation.initState || { configValues: {} };
    adaptation.config.forEach(config => {
      configValues[config.key] =
        initState.configValues[config.key] !== undefined
          ? initState.configValues[config.key]
          : config.defaultValue;
    });
    let width = Math.round(canvasWidth * 0.5);
    let height = Math.round(canvasHeight * 0.5);

    if (adaptation.aspectRatio) {
      if (adaptation.aspectRatio > 1) {
        height = Math.round(width / adaptation.aspectRatio);
      } else {
        width = Math.round(height * adaptation.aspectRatio);
      }
    }
    this.insertItem({
      type: "object",
      width,
      height,
      showIframe: true,
      adaptation,
      configValues,
      position: { left: canvasWidth / 2, top: canvasHeight / 2 }
    });
  };

  insertItem = item => {
    const { insertedItems } = this.state;
    this.setState({
      insertedItems: [
        ...insertedItems,
        { ...item, id: this.insertedBlockId++ }
      ],
      activeInsertedItemIndex: insertedItems.length,
      configMode: "element"
    });
    if (!window.location.href.includes("localhost")) {
      window.onbeforeunload = function() {
        return true;
      };
    }
  };

  setActiveInsertedItemIndexBasedOnId = id => {
    this.setActiveInsertedItemIndex(
      this.state.insertedItems.findIndex(item => item.id === id)
    );
  };

  setActiveInsertedItemIndex = index => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    const itemToActivate = insertedItems[index];

    if (activeInsertedItemIndex === index) {
      return;
    }

    const newState = { activeInsertedItemIndex: index };
    if (itemToActivate && itemToActivate.type === "object") {
      newState["insertedItems"] = [...insertedItems];
      newState["insertedItems"][index] = {
        ...itemToActivate,
        showIframe: true
      };
    }
    newState.configMode = "element";
    this.setState(newState);

    if (insertedItems.length - 1 !== index) {
      this.moveInsertedItemToIndex(index, insertedItems.length - 1);
    }
  };

  unsetActiveInsertedItemIndex = () => {
    this.setState({ activeInsertedItemIndex: null });
  };

  makePositionRelativeToEditContainer = position => {
    const scale = this.getScaleToFullyFit();
    if (!this.iframeRef.current) {
      return null;
    }
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const iframeWrapperRect = this.canvasWrapperRef.current.getBoundingClientRect();
    return {
      left:
        (position.left || 0) * scale +
        (iframeRect.left - iframeWrapperRect.left),
      top:
        (position.top || 0) * scale + (iframeRect.top - iframeWrapperRect.top)
    };
  };

  removeActiveInsertedItem = () => {
    const { activeInsertedItemIndex } = this.state;
    if (activeInsertedItemIndex !== null) {
      this.removeInsertedItem(activeInsertedItemIndex);
    }
  };

  removeInsertedItem = insertedItemIndex => {
    const { insertedItems } = this.state;
    const insertedItem = insertedItems[insertedItemIndex];
    const updatedInsertedItems = [...insertedItems];
    updatedInsertedItems.splice(insertedItemIndex, 1);
    this.setState({
      insertedItems: updatedInsertedItems,
      activeInsertedItemIndex: null
    });
    delete this.insertedItemsRefs[insertedItem.id];
  };

  bringActiveInsertedItemToFront = () => {
    const { activeInsertedItemIndex, insertedItems } = this.state;
    this.moveInsertedItemToIndex(
      activeInsertedItemIndex,
      insertedItems.length - 1
    );
  };

  bringActiveInsertedItemToBack = () => {
    const { activeInsertedItemIndex } = this.state;
    this.moveInsertedItemToIndex(activeInsertedItemIndex, 0);
  };

  moveInsertedItemToIndex = (insertedItemIndex, toIndex) => {
    const { insertedItems } = this.state;
    const insertedItem = insertedItems[insertedItemIndex];
    const updatedInsertedItems = [...insertedItems];
    updatedInsertedItems.splice(insertedItemIndex, 1);
    updatedInsertedItems.splice(toIndex, 0, insertedItem);
    this.setState({
      insertedItems: updatedInsertedItems,
      activeInsertedItemIndex: toIndex
    });
  };

  renderLayers = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    const layers = [
      {
        id: "background",
        label: "background",
        isMoveable: false,
        isActive: activeInsertedItemIndex === null,
        insertedItemIndex: null
      },
      ...insertedItems.map((insertedItem, index) => ({
        id: insertedItem.id,
        label: insertedItem.type,
        isMoveable: true,
        isActive: activeInsertedItemIndex === index,
        insertedItemIndex: index
      }))
    ];
    return (
      <Layers
        className={s["layers"]}
        items={layers}
        onSelect={insertedItemIndex =>
          this.setActiveInsertedItemIndex(insertedItemIndex)
        }
        onRemove={insertedItemIndex =>
          this.removeInsertedItem(insertedItemIndex)
        }
        onMove={(insertedItemIndex, toIndex) =>
          this.moveInsertedItemToIndex(insertedItemIndex, toIndex)
        }
        onSetHighlightedInsertedItem={insertedItemIndex =>
          this.setState({ highlightInsertedItemIndex: insertedItemIndex })
        }
      />
    );
  };

  renderTitleAndAuthor = () => {
    const { title, author, authorLink } = this.props;
    return (
      <div
        className={s["title-container"]}
        onClick={this.unsetActiveInsertedItemIndex}
      >
        <div className={s["title"]}>{title}</div>
        {author && (
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
        )}
      </div>
    );
  };

  getActiveInsertedItem = () => {
    const { activeInsertedItemIndex, insertedItems } = this.state;
    return (
      activeInsertedItemIndex !== null && insertedItems[activeInsertedItemIndex]
    );
  };

  renderElementConfig = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    if (activeInsertedItemIndex === null) {
      return this.renderArtConfig();
    }
    if (insertedItems[activeInsertedItemIndex].type === "object") {
      return this.renderArtConfig();
    }
    return insertedItems[activeInsertedItemIndex].type === "image"
      ? this.renderImageConfig()
      : this.renderTextConfig();
  };

  renderGlobalConfig = () => {
    const { palettes } = this.props;
    const allColors = this.getAllColorsFromState().map(color => color.color);
    return (
      <GlobalConfig
        colors={uniq(allColors)}
        otherPalettes={palettes}
        onStartSelectingColor={this.onStartSelectingColor}
        onStopSelectingColor={this.onStopSelectingColor}
        onChange={this.onGlobalColorChange}
      />
    );
  };

  renderTextConfig = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    return (
      <TextConfig
        text={insertedItems[activeInsertedItemIndex]}
        config={insertedItems[activeInsertedItemIndex].configValues}
        setConfigValue={this.setTextConfigValue}
        onStartSelectingColor={this.onStartSelectingColor}
        onStopSelectingColor={this.onStopSelectingColor}
      />
    );
  };

  renderImageConfig = () => {
    const { insertedItems, activeInsertedItemIndex } = this.state;
    return (
      <ImageConfig
        config={insertedItems[activeInsertedItemIndex].configValues}
      />
    );
  };

  renderArtConfig = () => {
    const activeInsertedItem = this.getActiveInsertedItem();
    const activeInsertedObject =
      activeInsertedItem &&
      activeInsertedItem.type === "object" &&
      activeInsertedItem;
    return (
      <ArtConfig
        config={
          activeInsertedObject
            ? activeInsertedObject.adaptation.config
            : this.props.config
        }
        configValues={
          activeInsertedObject
            ? activeInsertedObject.configValues
            : this.state.configValues
        }
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
      configValues: {
        ...activeinsertedItem.configValues,
        [configKey]: configValue
      }
    };
    this.setState({
      insertedItems: newinsertedItems
    });
  };

  getArtConfigValue = configKey => {
    const activeInsertedItem = this.getActiveInsertedItem();
    if (activeInsertedItem.type === "object") {
      return activeInsertedItem.configValues[configKey];
    }
    return this.state.configValues[configKey];
  };

  getArtConfigOption = configKey => {
    const activeInsertedItem = this.getActiveInsertedItem();
    let config = this.props.config;
    if (activeInsertedItem.type === "object") {
      config = activeInsertedItem.adaptation.config;
    }
    return config.find(c => c.key === configKey);
  };

  setArtConfigValue = (configKey, configValue) => {
    const { refreshIframe } = this.props;
    const {
      configValues,
      iframeVersion,
      isPaused,
      insertedItems,
      activeInsertedItemIndex
    } = this.state;
    const configUpdates = { [configKey]: configValue };

    // if this value updates random values count
    const configOption = this.getArtConfigOption(configKey);
    if (configOption.updatesRandomValuesCount) {
      configUpdates.randomValues = Array(+configValue)
        .fill()
        .map(() => Math.random());
    }

    const activeInsertedItem = this.getActiveInsertedItem();
    if (activeInsertedItem.type === "object") {
      const updatedInsertedItems = [...insertedItems];
      updatedInsertedItems[activeInsertedItemIndex] = {
        ...activeInsertedItem,
        configValues: {
          ...activeInsertedItem.configValues,
          ...configUpdates
        }
      };
      this.setState({
        insertedItems: updatedInsertedItems
      });
    } else {
      this.setState({
        configValues: { ...configValues, ...configUpdates },
        iframeVersion: iframeVersion + 1,
        isPaused: refreshIframe ? false : isPaused
      });
    }
  };

  onDimensionsChange = ({ width, height }) => {
    this.setState({
      canvasWidth: width,
      canvasHeight: height,
      iframeVersion: this.state.iframeVersion + 1
    });
  };

  postConfigToIframe = insertedItemId => {
    const activeInsertedItem = this.getActiveInsertedItem();
    let iframeNode = this.iframeRef.current;
    if (!iframeNode) {
      return;
    }
    let config = this.state.configValues;
    if (insertedItemId !== undefined && insertedItemId !== null) {
      iframeNode = this.insertedItemsRefs[insertedItemId];
      const insertedItem = this.state.insertedItems.find(
        i => i.id === insertedItemId
      );
      config = insertedItem && insertedItem.configValues;
    } else if (activeInsertedItem && activeInsertedItem.type === "object") {
      iframeNode = this.insertedItemsRefs[activeInsertedItem.id];
      config = activeInsertedItem.configValues;
    }
    iframeNode &&
      iframeNode.contentWindow &&
      iframeNode.contentWindow.postMessage(
        {
          type: "render",
          payload: config
        },
        "*"
      );
  };

  pause = () => {
    this.iframeRef.current.contentWindow.postMessage(
      {
        type: "pause"
      },
      "*"
    );
    this.setState({ isPaused: true });
  };

  unpause = () => {
    const { iframeVersion } = this.state;
    if (!this.props.refreshIframe) {
      this.iframeRef.current.contentWindow.postMessage(
        {
          type: "unpause"
        },
        "*"
      );
    }
    this.setState({ isPaused: false, iframeVersion: iframeVersion + 1 });
  };

  refresh = () => {
    const randomValues = this.getArtConfigValue("randomValues");
    this.setArtConfigValue(
      "randomValues",
      Array(randomValues.length)
        .fill()
        .map(() => Math.random())
    );
    this.postConfigToIframe();
    // TODO: replace with new randomness
    this.iframeRef.current.contentWindow.postMessage(
      {
        type: "randomize"
      },
      "*"
    );
  };

  setPaddingOverlayDims = () => {
    const scaleToFullyFit = this.getScaleToFullyFit();
    const canvasWidth =
      this.state.canvasWidth && this.state.canvasWidth * scaleToFullyFit;
    const canvasHeight =
      this.state.canvasHeight && this.state.canvasHeight * scaleToFullyFit;

    const canvasWrapperWidth = this.canvasWrapperRef.current.offsetWidth;
    const canvasWrapperHeight = this.canvasWrapperRef.current.offsetHeight;

    const horizontalPadding = (canvasWrapperWidth - canvasWidth) / 2;
    const verticalPadding = (canvasWrapperHeight - canvasHeight) / 2;

    document.getElementById(
      "padding-overlay-left"
    ).style.width = `${horizontalPadding}px`;
    document.getElementById(
      "padding-overlay-left"
    ).style.top = `${verticalPadding}px`;
    document.getElementById(
      "padding-overlay-left"
    ).style.bottom = `${verticalPadding}px`;
    document.getElementById(
      "padding-overlay-right"
    ).style.width = `${horizontalPadding}px`;
    document.getElementById(
      "padding-overlay-right"
    ).style.top = `${verticalPadding}px`;
    document.getElementById(
      "padding-overlay-right"
    ).style.bottom = `${verticalPadding}px`;
    document.getElementById(
      "padding-overlay-top"
    ).style.height = `${verticalPadding}px`;
    document.getElementById(
      "padding-overlay-bottom"
    ).style.height = `${verticalPadding}px`;
  };

  onIframeLoad = insertedItemId => {
    this.setState({ isLoadingIframe: false });
    setTimeout(() => {
      this.postConfigToIframe(insertedItemId);
      // this to give react time to mount and attach listeners
      // not really sure if still needed, react should call load on mount?
    }, 100);
  };

  sendDownloadRequest = iframeNode => {
    iframeNode &&
      iframeNode.contentWindow &&
      iframeNode.contentWindow.postMessage(
        {
          type: "download"
        },
        "*"
      );
  };

  updateIframeTop = () => {
    if (!this.iframeRef.current) {
      return;
    }
    this.iframeTop = this.iframeRef.current.getBoundingClientRect().top;
  };

  captureInsertedObjectIfNeeded = (prevProps, prevState) => {
    if (
      prevState.activeInsertedItemIndex !== null &&
      prevState.activeInsertedItemIndex !== this.state.activeInsertedItemIndex
    ) {
      const prevActiveInsertedItem = this.state.insertedItems[
        prevState.activeInsertedItemIndex
      ];
      if (prevActiveInsertedItem && prevActiveInsertedItem.type === "object") {
        this.sendDownloadRequest(
          this.insertedItemsRefs[prevActiveInsertedItem.id]
        );
      }
    }
  };

  onKeyDown = e => {
    const ctrlKey = 17;
    const cmdKey = 91;
    const shiftKey = 16;
    const vKey = 86;
    const cKey = 67;
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (e.keyCode === ctrlKey || e.keyCode === cmdKey) {
      this.ctrlDown = true;
    }
    if (e.keyCode === shiftKey) {
      this.shiftDown = true;
    }
    if (this.ctrlDown && e.keyCode === cKey) {
      this.copyActiveInsertedItem();
    }
    if (this.ctrlDown && e.keyCode === vKey) {
      this.pasteActiveInsertedItem();
    }
  };

  onMouseMove = () => {
    if (!this.isWheelingInsertedItem && this.hasWheelingClassAttached) {
      this.canvasWrapperRef.current.classList.remove(
        "is-wheeling-inserted-item"
      );
      this.hasWheelingClassAttached = false;
    }
  };

  onClose = () => {
    window.onbeforeunload = null;
    this.props.onClose();
  };

  copyActiveInsertedItem = () => {
    const { activeInsertedItemIndex, insertedItems } = this.state;
    if (activeInsertedItemIndex === null) {
      return;
    }
    this.bufferedInsertedItem = insertedItems[activeInsertedItemIndex];
  };

  pasteActiveInsertedItem = () => {
    if (!this.bufferedInsertedItem) {
      return null;
    }
    this.insertItem(this.bufferedInsertedItem);
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

  getCaptureConfig = insertedItem => {
    const scale = this.getScaleToFullyFit();
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const canvasWrapperRect = this.canvasWrapperRef.current.getBoundingClientRect();

    const id = insertedItem.id;
    const insertedItemRef = this.insertedItemsRefs[id];
    const moveable = insertedItemRef.closest(".moveable");
    const transformValue = moveable.style.transform;
    const begIndex = transformValue.indexOf("rotate(") + 7;
    const endIndex = transformValue.indexOf(")", begIndex);
    const rotateValue = parseInt(transformValue.slice(begIndex, endIndex));
    const width = parseInt(moveable.style.width);
    const height = parseInt(moveable.style.height);
    const left = parseInt(moveable.style.left);
    const top = parseInt(moveable.style.top);
    const captureConfig = {
      width: width / (scale || 1),
      height: height / (scale || 1),
      position: {
        left:
          (left - (iframeRect.left - canvasWrapperRect.left)) / (scale || 1),
        top: (top - (iframeRect.top - canvasWrapperRect.top)) / (scale || 1)
      },
      rotation: rotateValue
    };
    return captureConfig;
  };

  download = () => {
    const scale = this.getScaleToFullyFit();
    const iframeRect = this.iframeRef.current.getBoundingClientRect();
    const captureConfig = this.state.insertedItems.map(
      (insertedItem, index) => {
        const id = insertedItem.id;
        const insertedItemRef = this.insertedItemsRefs[id];

        if (insertedItem.type === "text") {
          const insertedItemRect = insertedItemRef.getBoundingClientRect();
          const text = this.insertedItemsRefs[id].innerText;
          return {
            text,
            width: insertedItemRect.width / (scale || 1),
            height: insertedItemRect.height / (scale || 1),
            position: {
              left: (insertedItemRect.left - iframeRect.left) / (scale || 1),
              top: (insertedItemRect.top - iframeRect.top) / (scale || 1)
            }
          };
        } else {
          return this.getCaptureConfig(insertedItem);
        }
      }
    );
    const capturedInsertedItems = this.state.insertedItems.map(
      (insertedItem, index) => ({
        ...insertedItem,
        ...(insertedItem.type === "object"
          ? { adaptation: insertedItem.adaptation.fileName, showIframe: true }
          : {}),
        width: captureConfig[index].width,
        height: captureConfig[index].height,
        position: captureConfig[index].position,
        ...(insertedItem.type === "text"
          ? { text: captureConfig[index].text }
          : {}),
        capturedIframe: undefined,
        id: insertedItem.id + 100
      })
    );
    if (window.location.href.includes("localhost")) {
      copyToClipboard(
        JSON.stringify({
          initState: {
            size: {
              width: this.state.canvasWidth,
              height: this.state.canvasHeight
            },
            configValues: this.state.configValues,
            insertedItems: capturedInsertedItems
          }
        })
          .slice(1)
          .slice(0, -1)
          .replace(/"svgs\/(\w+)"/g, "svgs[$1]")
          .replace(/"png_htmls\/(\w+)"/g, "pngs[$1]")
      );
      // return;
    }

    this.setState({ captureConfig, isPreparingDownload: true });

    this.saveConfigToDB({
      title: this.props.fileName,
      size: {
        width: this.state.canvasWidth,
        height: this.state.canvasHeight
      },
      config: this.state.configValues, // TODO: save as configValue
      insertedItems: [
        ...this.state.insertedItems.map((insertedItem, idx) => ({
          ...insertedItem,
          width: captureConfig[idx].width,
          height: captureConfig[idx].height,
          text: captureConfig[idx].text,
          position: captureConfig[idx].position
        })),
        { isPublic: this.state.isPublic }
      ]
    });
  };

  toggleIsPublic = () => {
    const newIsPublic = this.state.isPublic ? 0 : 1;
    this.setState({ isPublic: newIsPublic });
    localStorage.setItem("modal.isPublic", newIsPublic);
  };
}

const CollapsibleSiderBar = React.memo(
  ({ insertText, insertImage, insertObject, priorityObjectPack, onClick }) => {
    const [activeItem, setActiveItem] = useState(() => {
      const activeItemFromStorage = localStorage.getItem(
        "modal.insertionTabsActiveItem"
      );
      if (typeof activeItemFromStorage === "string") {
        return activeItemFromStorage === "null" ? null : activeItemFromStorage;
      } else {
        return "object";
      }
    });
    useEffect(() => {
      localStorage.setItem("modal.insertionTabsActiveItem", activeItem);
    }, [activeItem]);
    const collapse = () => setActiveItem(null);
    return (
      <div
        className={classnames(
          s["modal-sidebar"],
          s["modal-right-sidebar"],
          activeItem === null && s["is-collapsed"]
        )}
        onClick={onClick}
      >
        <InsertionMenu
          onInsertText={(...args) => {
            collapse();
            insertText(...args);
          }}
          onInsertImage={(...args) => {
            collapse();
            insertImage(...args);
          }}
          onInsertObject={insertObject}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          priorityObjectPack={priorityObjectPack}
        />
        <div className={s["sidebar-collapse-button"]} onClick={collapse}>
          <Icon className={s["collapse-icon"]} size="small" name="angle left" />
          <svg viewBox="0 0 32 112" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.626 17.865l-1.94-1.131C17.684 14.981 16 12.608 16 10.133V0H0v112h16v-10.135c0-2.475 1.684-4.849 4.686-6.6l1.94-1.131C28.628 90.632 32 85.885 32 80.934v-49.87c0-4.95-3.372-9.698-9.374-13.199"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    );
  }
);

export default TheModal;
