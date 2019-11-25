import { gradientPalettes } from "../palettes";

// const withBackgroundPalettes = [
//   ["#c9eaff", "#e9e9f1", "#f3a930", "#e76779"],
//   ["#ff0000", "#400000", "#400000", "#000000"]
// ];

export default {
  title: "waterpipe.js",
  fileName: "waterpipe",
  author: "dragdropsite",
  authorLink: "https://github.com/dragdropsite/waterpipe.js/",
  thumb: "/thumbs/90.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: gradientPalettes[0],
      options: gradientPalettes
    },
    {
      key: "opacity",
      text: "Opacity",
      type: "range",
      defaultValue: 10,
      min: 0,
      max: 50
    },
    {
      key: "smokeSize",
      text: "Smoke Size",
      type: "range",
      defaultValue: 100,
      min: 10,
      max: 200
    },
    {
      key: "lineWidth",
      text: "Line Width",
      type: "range",
      defaultValue: 20,
      min: 1,
      max: 100
    },
    {
      key: "numCircles",
      text: "Smokes #",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 5
    }
  ]
};
