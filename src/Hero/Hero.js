import React from "react";
import classnames from "classnames";
import MiniCard from "../MiniCard/MiniCard";
import strings25 from "../_adaptationConfigs/strings25";
import { Button, Icon } from "semantic-ui-react";

import s from "./Hero.module.css";

const initState = {
  width: 400,
  height: 300,
  config: {
    palette: ["#d8fff8", "#000"],
    sizePercent: [10, 20]
  },
  textBlocks: [
    {
      id: 0,
      config: {
        backgroundColor: { r: 255, g: 255, b: 255, a: 0.9 },
        color: "#000",
        fontSize: 22,
        padding: 3
      },
      position: { left: 2, top: 6 },
      text: "Just text..."
    }
  ]
};

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
          {...strings25}
          thumbs={["/thumbs/hero/2.png"]}
          thumbBackgroundSize="cover"
          initState={initState}
        />
        <Button icon className={s["edit-button"]} title="edit">
          <Icon name="pencil" />
        </Button>
      </div>
      <div className={s["hero-slider-dots"]}>
        <div className={classnames(s["slider-dot"], s["active-slider-dot"])} />
        <div className={s["slider-dot"]} />
        <div className={s["slider-dot"]} />
      </div>
    </div>
  </div>
);
