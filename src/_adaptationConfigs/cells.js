import { gradientPalettes } from "../palettes";

const palettes = [
  ["#ffebeb", "#fc6767"],
  ["#ffdaf4", "#fa5a5a"],
  ["#FDEE82", "#5BB2DD"],
  ["#ff5401", "#ffffff"],
  ["#230852", "#8c4fb6"],
  ...gradientPalettes,
];

export default {
  title: "Cells",
  fileName: "cells",
  author: "tengbao",
  authorLink: "https://www.vantajs.com/",
  artLink: "https://www.vantajs.com/?effect=cells",
  thumb: "/thumbs/60.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ["#b8adfe", "#676bc2"],
      options: palettes
    },
    {
      key: "size",
      text: "Cell Size",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 10,
    }
  ]
};
