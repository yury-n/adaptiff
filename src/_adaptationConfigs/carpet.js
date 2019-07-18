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
  title: "Carpet",
  fileName: "carpet",
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
    {
      key: "rotate",
      text: "Rotate",
      type: "range",
      defaultValue: 45,
      min: 0,
      max: 360
    },
    {
      key: "cellCount",
      text: "Cell Count",
      type: "range",
      defaultValue: 6,
      min: 0,
      max: 16
    },
    {
      key: "innerRectSide",
      text: "Inner Rect Side",
      type: "range",
      defaultValue: 520,
      min: 1,
      max: 1600
    },
  ]
};
