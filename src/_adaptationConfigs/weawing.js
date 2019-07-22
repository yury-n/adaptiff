import { gradientPalettes } from "../palettes";

const palettes = [
  ["#ffebeb", "#ec008c"],
  ["#ffdaf4", "#ef6034"],
  ["#FDEE82", "#E23C34"],
  ["#ff5401", "#001e27"],
  ["#230852", "#fa5a5a"],
  ...gradientPalettes.map(pattern => ["#fff", ...pattern])
];


// TODO может сделать shape, типо Земля, Куб и тд
// Background
export default {
  title: "Weawing",
  fileName: "weawing",
  author: "nicolas barradeau",
  authorLink: "https://codepen.io/nicoptere/",
  artLink: "https://codepen.io/nicoptere/pen/eGJBgp",
  thumb: "/thumbs/37.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ["#000000", "#c8c8c8"],
      options: palettes
    },
    {
      key: "iterations",
      text: "Iterations",
      type: "range",
      defaultValue: 50,
      min: 20,
      max: 200,
    },
    {
      key: "curliness",
      text: "Curliness",
      type: "range",
      defaultValue: 50,
      min: 20,
      max: 500,
    },
  ]
};
