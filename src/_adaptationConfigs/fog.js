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
      defaultValue: ["#b8adfe", "#676bc2"],
      options: palettes
    },
    {
      key: "baseColor",
      text: "Background Color",
      type: "single-color",
      defaultValue: "#3a3940"
    },
    {
      key: "zoom",
      text: "Zoom",
      type: "range",
      defaultValue: 8,
      min: 1,
      max: 20,
    },
    {
      key: "blur",
      text: "Blur",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 9,
    }
  ]
};
