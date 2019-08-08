import { gradientPalettes } from "../palettes";

const basePalette = [
  ["#ffebeb", "#fc6767"],
  ["#ffdaf4", "#fa5a5a"],
  ["#FDEE82", "#5BB2DD"],
  ["#ff5401", "#ffffff"],
  ["#230852", "#8c4fb6"],
];

const randomize = volume => Math.floor(Math.random() * volume);

const palettes = [
  ...basePalette.map(palette => ([basePalette[randomize(4)][randomize(2)], ...palette])),
  ...gradientPalettes.map(palette => ([basePalette[randomize(4)][randomize(2)], ...palette])),
];

export default {
  title: "Fog",
  fileName: "fog",
  author: "tengbao",
  authorLink: "https://www.vantajs.com/",
  artLink: "https://www.vantajs.com/?effect=fog",
  thumb: "/thumbs/61.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ["#5BB2DD", "#1fa5ff", "#1053ff"],
      options: palettes
    },
    {
      key: "baseColor",
      text: "Background Color",
      type: "single-color",
      defaultValue: "#ededf7"
    },
    {
      key: "zoom",
      text: "Zoom",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 8,
    },
    {
      key: "blur",
      text: "Blur",
      type: "range",
      defaultValue: 3,
      min: 1,
      max: 9,
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
