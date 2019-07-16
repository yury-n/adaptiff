import { gradientPalettes } from "../palettes";

const palettes = [
  ["#fff", ...gradientPalettes[0]],
  ["#ffebeb", "#fc6767", "#ec008c"],
  ["#ffdaf4", "#fa5a5a", "#ef6034"],
  ["#FDEE82", "#5BB2DD", "#E23C34"],
  ["#ff5401", "#ffffff", "#001e27"],
  ["#230852", "#8c4fb6", "#fa5a5a"],
  ...gradientPalettes.map(pattern => ["#fff", ...pattern])
];

export default {
  title: "Circle Packing",
  fileName: "voronoi",
  author: "tim holman",
  authorLink: "https://generativeartistry.com/tutorials/circle-packing/",
  artLink: "https://generativeartistry.com/tutorials/circle-packing/",
  thumb: "/background_thumbs/31.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "filled",
      text: "Filled",
      type: "boolean",
      defaultValue: false
    },
    {
      key: "lineWidth",
      text: "Line Widgth",
      type: "range",
      defaultValue: 5,
      min: 1,
      max: 20
    },
    {
      key: "minRadius",
      text: "Min Radius",
      type: "range",
      defaultValue: 2,
      min: 1,
      max: 150
    },
    {
      key: "maxRadius",
      text: "Max Radius",
      type: "range",
      defaultValue: 100,
      min: 1,
      max: 150
    },
  ]
};
