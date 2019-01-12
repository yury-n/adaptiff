import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Input } from "semantic-ui-react";
import classnames from "classnames";

import "./ColorInput.css";

class ColorInput extends Component {
  state = {
    showColorPicker: false
  };
  inputRef = React.createRef();
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
  render() {
    const { color, onChange } = this.props;
    const { showColorPicker } = this.state;
    return (
      <div
        className={classnames(
          "color-input-wrapper",
          showColorPicker && "with-picker"
        )}
      >
        <Input
          ref={this.inputRef}
          onFocus={this.showColorPicker}
          onBlur={this.hideColorPicker}
          onChange={event => onChange(event.target.value)}
          labelPosition="right"
          value={color}
        />
        <div
          class="ui label"
          style={{ background: color }}
          onClick={this.setInputFocus}
        />
        {showColorPicker && (
          <ChromePicker
            color={color}
            className="color-picker"
            onChangeComplete={({ hex }) => onChange(hex)}
            disableAlpha={true}
          />
        )}
      </div>
    );
  }
}

export default ColorInput;
