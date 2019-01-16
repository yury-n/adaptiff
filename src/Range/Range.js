import React, { Component } from "react";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { Input } from "semantic-ui-react";

import "./Range.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);

class Range extends Component {
  
  state = {
    min: 0,
    max: 100,
  };
  
  constructor(props) {
    super(props);
    this.state  = {
      min: props.min,
      max: props.max,
    };
  }

  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  }
  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  }
  render() {
    return (
      <>
        <SliderWithTooltip
          value={this.props.value}
          min={this.state.min}
          max={this.state.max}
          className="slider"
          maximumTrackStyle={{ backgroundColor: 'rgb(216, 215, 215)', height: 3 }}
          minimumTrackStyle={{ backgroundColor: 'rgb(216, 215, 215)', height: 3 }}
          handleStyle={{
            height: 20,
            width: 20,
            marginLeft: -10,
            marginTop: -10,
            backgroundColor: 'white',
            borderColor: 'rgb(196, 196, 196)',
            borderWidth: '1px',
            boxShadow: '0 3px 4px 0px #d4d4d5c9'
          }}
          onChange={this.props.onChange}
          tipProps={{ placement: 'bottom', overlayClassName: 'slider-tooltip' }}
        />
        <div className="range">
        <Input
        disabled={this.props.disabledInputs}
        className="range-input"
          value={this.state.min} onChange={this.onMinChange}
        />
        <Input
        disabled={this.props.disabledInputs}
        className="range-input"
        value={this.state.max} onChange={this.onMaxChange}
        />
        </div>
      </>
    );
  }
}

export default Range;
