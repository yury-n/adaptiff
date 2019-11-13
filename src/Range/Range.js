import React, { Component } from "react";
// import classnames from "classnames";
import Slider, { createSliderWithTooltip } from "rc-slider";
import { Input } from "semantic-ui-react";

import "./global.overrides.css";
import s from "./Range.module.css";
import NumberInput from "../NumberInput/NumberInput";

const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeWithTooltip = createSliderWithTooltip(Slider.Range);

class Range extends Component {
  static defaultProps = {
    withRangeInputs: false
  };
  state = {
    isValueInputFocused: false,
    isMouseOverRange: false,
    isDragging: false,
    min: 0,
    max: 100
  };

  constructor(props) {
    super(props);
    this.sliderWrapperRef = React.createRef();
    this.valueInputWrapperRef = React.createRef();
    this.state = {
      min: props.min,
      max: props.max
    };
    this.beforeFocus = { min: props.min, max: props.max };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.value !== nextProps.value ||
      this.state.isMouseOverRange !== nextState.isMouseOverRange
    ) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    this.handle = this.sliderWrapperRef.current.querySelector(
      ".rc-slider-handle"
    );
    window.addEventListener("mouseup", this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp);
  }

  updateValueInputPosition() {
    window.requestAnimationFrame(() => {
      const sliderWrapper = this.sliderWrapperRef.current;
      const valueInput = this.valueInputWrapperRef.current;
      if (!sliderWrapper || !valueInput) {
        return;
      }
      const sliderWrapperLeft = sliderWrapper.getBoundingClientRect().left;
      const handleLeft = this.handle.getBoundingClientRect().left;
      valueInput.style.left = `${handleLeft - sliderWrapperLeft}px`;
    });
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
  hideValueInput = () => {
    this.setState({ isMouseOverRange: false });
  };
  isMouseOverRange = () => {
    if (!this.state.isDragging) {
      this.setState({ isMouseOverRange: true });
      this.updateValueInputPosition();
    }
  };
  onMouseDown = event => {
    if (!this.valueInputWrapperRef.current) {
      return;
    }
    if (!this.valueInputWrapperRef.current.contains(event.target)) {
      this.setState({ isDragging: true });
      this.hideValueInput();
    }
  };
  onMouseUp = () => {
    if (this.state.isDragging) {
      this.updateValueInputPosition();
      this.setState({ isDragging: false, isMouseOverRange: true });
    }
  };
  onNumberInputChange = value => {
    const { min, max } = this.state;
    this.props.onChange(value);
    this.setState({
      isMouseOverRange: false,
      min: Math.min(min, value),
      max: value > max ? value + Math.round((value - max) / 2) : max
    });
    this.updateValueInputPosition();
  };
  onNumberInputFocus = () => {
    this.setState({ isValueInputFocused: true });
  };
  onNumberInputBlur = () => {
    this.setState({ isValueInputFocused: false });
  };
  render() {
    const SliderComponent = Array.isArray(this.props.value)
      ? RangeWithTooltip
      : SliderWithTooltip;

    const showValueInput =
      !Array.isArray(this.props.value) &&
      !this.state.isDragging &&
      (this.state.isMouseOverRange || this.state.isValueInputFocused);
    return (
      <>
        <div
          data-key={this.props.configKey}
          ref={this.sliderWrapperRef}
          className={s["slider-wrapper"]}
          onMouseDown={this.onMouseDown}
          onMouseEnter={this.isMouseOverRange}
          onMouseLeave={this.hideValueInput}
        >
          <SliderComponent
            value={this.props.value}
            min={this.state.min}
            max={this.state.max}
            className={s["slider"]}
            railStyle={{
              backgroundColor: "rgb(226, 226, 226)",
              height: 3
            }}
            trackStyle={[
              {
                backgroundColor: "#9dfae1",
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
              boxShadow: "rgba(190, 190, 190, 0.79) 0px 3px 4px 0px"
            }}
            onChange={this.props.onChange}
          />
          {showValueInput && (
            <div
              ref={this.valueInputWrapperRef}
              className={s["value-input-wrapper"]}
            >
              <NumberInput
                className={s["input"]}
                value={this.props.value}
                onChange={this.onNumberInputChange}
                onFocus={this.onNumberInputFocus}
                onBlur={this.onNumberInputBlur}
              />
            </div>
          )}
        </div>
        {this.props.withRangeInputs && (
          <div className={s["range-inputs"]}>
            <Input
              disabled={this.props.disabledRangeInputs}
              className={s["input"]}
              value={this.state.min}
              onChange={this.onMinChange}
              onKeyUp={this.onInputKeyUp("min")}
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur("min")}
            />
            <Input
              disabled={this.props.disabledRangeInputs}
              className={s["input"]}
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
