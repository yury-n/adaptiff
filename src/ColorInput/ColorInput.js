import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Input } from "semantic-ui-react";

import "./ColorInput.css";

class ColorInput extends Component {
  state = {
    showColorPicker: false
  };
  inputRef = React.createRef();
  showColorPicker = () => {
    this.setState({ showColorPicker: true });
  };
  hideColorPicker = () => {
    this.setState({ showColorPicker: false });
  };
  setInputFocus = () => {
    this.inputRef.current.focus();
  };
  render() {
    const { color, onChange } = this.props;
    const { showColorPicker } = this.state;
    return (
      <div className="color-input-wrapper">
        <Input
          ref={this.inputRef}
          onFocus={this.showColorPicker}
          onBlur={this.hideColorPicker}
          labelPosition="right"
          defaultValue={color}
        />
        <div
          class="ui label"
          style={{ background: color }}
          onClick={this.setInputFocus}
        />
        {showColorPicker && (
          <ChromePicker className="color-picker" onChange={onChange} />
        )}
      </div>
    );
  }
}

export default ColorInput;
