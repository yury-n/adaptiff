import React from "react";
import classnames from "classnames";
import MiniCard from "../MiniCard/MiniCard";
import wallPattern from "../_adaptationConfigs/wallPattern";
import { Button, Icon } from "semantic-ui-react";

import s from "./Hero.module.css";

export default () => (
  <div className={s["hero"]}>
    <div className={s["hero-text-wrapper"]}>
      <div className={s["hero-text"]}>
        adapt
        <br /> generative arts & designs
        <br /> to <span>your</span> needs
      </div>
    </div>
    <div className={s["hero-preview-and-dots"]}>
      <div className={s["hero-preview"]}>
        <MiniCard
          mode="hero"
          className={s["hero-preview-card"]}
          {...wallPattern}
        />
        <Button icon className={s["edit-button"]} title="edit">
          <Icon name="pencil" />
        </Button>
        <div className={s["create-something"]}>
          <span className={s["and"]}>and</span>
          <br />
          <span>create something</span>
          <br />
          <span className={s["unique"]}>unique</span>
        </div>
      </div>
      <div className={s["hero-slider-dots"]}>
        <div className={classnames(s["slider-dot"], s["active-slider-dot"])} />
        <div className={s["slider-dot"]} />
        <div className={s["slider-dot"]} />
      </div>
    </div>
  </div>
);
