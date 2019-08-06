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
  title: "Trunk",
  fileName: "trunk",
  author: "tengbao",
  authorLink: "https://www.vantajs.com/",
  artLink: "https://www.vantajs.com/?effect=trunk",
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
      key: "spacing",
      text: "Spacing",
      type: "range",
      defaultValue: 25,
      min: 10,
      max: 100,
    }
  ]
};
