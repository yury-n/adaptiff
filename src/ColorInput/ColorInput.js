import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Input } from "semantic-ui-react";
import classnames from "classnames";
import { colorObjToString, stringToColorObj } from "../_utils";

import "./global.overrides.css";
import s from "./ColorInput.module.css";

class ColorInput extends Component {
  static defaultProps = {
    disableAlpha: true
  };
  state = {
    showColorPicker: false
  };
  inputRef = React.createRef();
  wrapperDivRef = React.createRef();
  componentDidMount() {
    window.addEventListener("click", this.onWindowClick);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
  }
  showColorPicker = () => {
    this.setState({ showColorPicker: true });
    this.props.onOpen && this.props.onOpen();
  };
  hideColorPicker = () => {
    this.setState({ showColorPicker: false });
    this.props.onClose && this.props.onClose();
  };
  setInputFocus = () => {
    this.inputRef.current.focus();
  };

  onChange = event => {
    const { onChange } = this.props;
    const { value } = event.target;
    onChange(!value.includes("rgb") ? value : stringToColorObj(value));
  };

  onWindowClick = e => {
    if (
      !this.state.showColorPicker ||
      e.target === this.wrapperDivRef.current ||
      this.wrapperDivRef.current.contains(e.target)
    ) {
      return;
    }
    this.hideColorPicker();
  };

  render() {
    const { color, onChange, disableAlpha } = this.props;
    const { showColorPicker } = this.state;
    let noSpaceAboveForPicker = false;
    if (this.wrapperDivRef.current) {
      const reactTop = this.wrapperDivRef.current.getBoundingClientRect().top;
      if (reactTop < 215) {
        noSpaceAboveForPicker = true;
      }
    }
    const colorString = color ? colorObjToString(color) : "rgba(0, 0, 0, 0)";
    return (
      <div
        className={classnames(
          s["color-input-wrapper"],
          showColorPicker && s["with-picker"]
        )}
        ref={this.wrapperDivRef}
      >
        <div
          className={classnames("ui", "label", s["color-swatch"])}
          style={{
            background: colorString
          }}
          onClick={this.setInputFocus}
        />
        <Input
          ref={this.inputRef}
          onFocus={this.showColorPicker}
          onChange={this.onChange}
          labelPosition="left"
          value={colorString}
          spellCheck={false}
        />
        {showColorPicker && (
          <div
            className={classnames(
              s["color-picker"],
              noSpaceAboveForPicker && s["show-below"]
            )}
          >
            <ChromePicker
              color={color}
              onChangeComplete={({ hex, rgb }) => {
                onChange(rgb.a !== 1 ? rgb : hex);
              }}
              disableAlpha={disableAlpha}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ColorInput;
