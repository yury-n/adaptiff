import React, { useState } from "react";
import classnames from "classnames";
import MiniCard from "../MiniCard/MiniCard";
import strings25 from "../_adaptationConfigs/strings25";
import { Button, Icon } from "semantic-ui-react";

import s from "./Hero.module.css";

const cards = [
  {
    ...strings25,
    thumbs: ["/thumbs/hero/strings25.png"],
    thumbBackgroundSize: "cover",
    initState: {
      width: 742,
      height: 361,
      config: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [19, 29]
      },
      textBlocks: [
        {
          id: 0,
          config: {
            fontFamily: "helvetica",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 35,
            padding: 3
          },
          position: { left: 280, top: 108 },
          text: `create
something`
        },
        {
          id: 1,
          config: {
            fontFamily: "helvetica",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            isBold: true,
            fontSize: 43,
            padding: 3
          },
          position: { left: 281, top: 196.5 },
          text: "unique"
        }
      ]
    }
  },
  {
    ...strings25,
    thumbs: ["/thumbs/hero/todo.png"],
    thumbBackgroundSize: "20px"
  },
  {
    ...strings25,
    thumbs: ["/thumbs/hero/todo.png"],
    thumbBackgroundSize: "20px"
  }
];

export default () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const changeToPrev = () => {
    setActiveCardIndex(
      activeCardIndex <= 0 ? cards.length - 1 : activeCardIndex - 1
    );
  };
  const changeToNext = () => {
    setActiveCardIndex(
      activeCardIndex >= cards.length - 1 ? 0 : activeCardIndex + 1
    );
  };
  return (
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
            {...cards[activeCardIndex]}
          />
          <Button icon className={s["edit-button"]} title="edit">
            <Icon name="pencil" />
          </Button>
        </div>
        <div className={s["hero-slider-dots"]}>
          <div
            className={classnames(s["paddle-button"], s["left"])}
            onClick={changeToPrev}
          >
            &larr; Prev
          </div>
          {cards.map((card, index) => (
            <div
              className={classnames(
                s["slider-dot"],
                index === activeCardIndex && s["active-slider-dot"]
              )}
              onClick={() => setActiveCardIndex(index)}
            />
          ))}
          <div
            className={classnames(s["paddle-button"], s["right"])}
            onClick={changeToNext}
          >
            Next &rarr;
          </div>
        </div>
      </div>
    </div>
  );
};
