import { gradientPalettes } from "../palettes";

const palettes = [
  ["#ffebeb", "#fc6767"],
  ["#ffdaf4", "#fa5a5a"],
  ["#FDEE82", "#5BB2DD"],
  ["#ff5401", "#ffffff"],
  ["#230852", "#8c4fb6"],
  ...gradientPalettes
];

export default {
  title: "Cells",
  fileName: "cells",
  author: "Ilya Borisov",
  authorLink: "https://codepen.io/Shvembldr",
  artLink: "https://codepen.io/Shvembldr/pen/moPXqW?editors=1010",
  thumb: "/thumbs/60.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ["#ffdaf4", "#e98484"],
      options: palettes
    },
    {
      key: "size",
      text: "Cell Size",
      type: "range",
      defaultValue: 2,
      min: 1,
      max: 8,
    },
    {
      key: "speed",
      text: "Speed",
      type: "range",
      defaultValue: 0,
      min: 0,
      max: 8,
    }
  ]
};
