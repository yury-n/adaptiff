import React, { Component } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import { Input } from "semantic-ui-react";

import s from "./Range.module.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeWithTooltip = createSliderWithTooltip(Slider.Range);

class Range extends Component {
  static defaultProps = {
    withRangeInputs: true
  };
  state = {
    min: 0,
    max: 100
  };

  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max
    };
    this.beforeFocus = { min: props.min, max: props.max };
  }

  onMinChange = e => {
    this.setState({
      min: +e.target.value || 0
    });
  };
  onMaxChange = e => {
    this.setState({
      max: +e.target.value || 100
    });
  };
  onInputFocus = () => {
    this.beforeFocus.min = this.state.min;
    this.beforeFocus.max = this.state.max;
  };
  onInputBlur = type => event => {
    if (this.beforeFocus[type] !== this.state[type]) {
      this.props.onChange(this.state[type]);
    }
  };
  onInputKeyUp = type => event => {
    if (event.key === "Enter") {
      this.props.onChange(this.state[type]);
    }
  };
  render() {
    const SliderComponent = Array.isArray(this.props.value)
      ? RangeWithTooltip
      : SliderWithTooltip;
    return (
      <>
        <SliderComponent
          value={this.props.value}
          min={this.state.min}
          max={this.state.max}
          className={s["slider"]}
          railStyle={{
            backgroundColor: "rgb(216, 215, 215)",
            height: 3
          }}
          trackStyle={[
            {
              backgroundColor: "rgb(216, 215, 215)",
              height: 3
            }
          ]}
          handleStyle={{
            height: 20,
            width: 20,
            marginLeft: -10,
            marginTop: -10,
            backgroundColor: "white",
            borderColor: "rgb(196, 196, 196)",
            borderWidth: "1px",
            boxShadow: "0 3px 4px 0px #d4d4d5c9"
          }}
          onChange={this.props.onChange}
          tipProps={{
            placement: "bottom",
            overlayClassName: s["slider-tooltip"]
          }}
        />
        {this.props.withRangeInputs && (
          <div className={s["range-inputs"]}>
            <Input
              disabled={this.props.disabledRangeInputs}
              className={s["range-input"]}
              value={this.state.min}
              onChange={this.onMinChange}
              onKeyUp={this.onInputKeyUp("min")}
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur("min")}
            />
            <Input
              disabled={this.props.disabledRangeInputs}
              className={s["range-input"]}
              value={this.state.max}
              onChange={this.onMaxChange}
              onKeyUp={this.onInputKeyUp("max")}
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur("max")}
            />
          </div>
        )}
      </>
    );
  }
}

export default Range;
