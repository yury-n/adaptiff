import React, { Component } from "react";

import "./MiniCard.css";

class MiniCard extends Component {
  state = {
    showColorPicker: false
  };
  render() {
    return (
      <div
        className={classnames(
          "color-input-wrapper",
          showColorPicker && "with-picker"
        )}
      />
    );
  }
}

export default MiniCard;
