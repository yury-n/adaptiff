import { gradientPalettes } from "../palettes";

const palettes = [
  ["#ffebeb", "#fc6767", "#ec008c"],
  ["#ffdaf4", "#fa5a5a", "#ef6034"],
  ["#FDEE82", "#5BB2DD", "#E23C34"],
  ["#ff5401", "#ffffff", "#001e27"],
  ["#230852", "#8c4fb6", "#fa5a5a"],
  ...gradientPalettes.map(pattern => ["#fff", ...pattern])
];

export default {
  title: "Cells",
  fileName: "cells",
  author: "Ilya Borisov",
  authorLink: "https://codepen.io/Shvembldr",
  artLink: "https://codepen.io/Shvembldr/pen/moPXqW?editors=1010",
  thumb: "/thumbs/b32.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ["#230852", "#8c4fb6", "#fa5a5a"],
      options: palettes
    },
  ]
};
