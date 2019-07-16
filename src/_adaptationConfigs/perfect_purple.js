import { gradientPalettes } from "../palettes";

const palettes = [
  ["#35003e", "#7600f0"],
  ["#f96e99", "#ffe239"],
  ["#6d107e", "#f03358"],
  ["#0fd850", "#fff31c"],
  ["#fff9f6", "#ff5e62"],
  ...gradientPalettes
];

export default {
  title: "Perfect Purples",
  fileName: "perfect_purple",
  author: "Levi Boenish",
  authorLink: "https://codepen.io/leviboenish/",
  thumb: "/thumbs/b5.png",
  refreshIframe: true,
  isPausable: true,
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "distortion",
      text: "Distortion",
      type: "range",
      defaultValue: 72,
      min: 2,
      max: 200
    },

    {
      key: "size",
      text: "Size",
      type: "range",
      defaultValue: 130,
      min: 20,
      max: 150
    },

    {
      key: "weight",
      text: "Weight",
      type: "range",
      defaultValue: 9,
      min: 2,
      max: 20
    }
  ]
};
