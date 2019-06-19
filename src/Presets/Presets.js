import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import gradientWaves from "../_adaptationConfigs/gradientWaves";

import s from "./Presets.module.css";

const cards = [
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/1.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 500, height: 500 },
      config: {
        amplituteX: 60,
        amplituteY: 60,
        crazyness: true,
        fill: true,
        lines: 24,
        palette: ["#ad42a5", "#fad18f"],
        smoothness: 1
      }
    }
  }
];

export default () => {
  return (
    <div className={s["root"]}>
      {cards.map((card, index) => (
        <MiniCard key={index} mode="preset" {...card} />
      ))}
    </div>
  );
};
