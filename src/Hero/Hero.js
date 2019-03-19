import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import wallPattern from "../_generations/wall_pattern";

import "./Hero.css";

export default () => (
  <div className="hero">
    <div className="hero-text-wrapper">
      <div className="hero-text">
        adapt
        <br /> generative arts & designs
        <br /> to <span>your</span> needs.
      </div>
    </div>
    <div className="hero-preview">
      <MiniCard className="hero-preview-card" {...wallPattern} />
      <button class="ui icon basic button">
        <i aria-hidden="true" class="pencil icon" />
      </button>
      <div className="create-something">
        <span className="and">and</span>
        <br />
        <span>create something</span>
        <br />
        <span className="unique">unique</span>
      </div>
    </div>
  </div>
);
