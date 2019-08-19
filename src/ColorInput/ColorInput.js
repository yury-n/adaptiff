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
          style={{ background: colorObjToString(color) }}
          onClick={this.setInputFocus}
        />
        <Input
          ref={this.inputRef}
          onFocus={this.showColorPicker}
          onChange={this.onChange}
          labelPosition="left"
          value={colorObjToString(color)}
        />
        {showColorPicker && (
          <div className={s["color-picker"]}>
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
