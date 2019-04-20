import { gradientPalettes } from "../palettes";

export default {
  title: "Perfect Purples",
  fileName: "perfect_purple",
  author: "Levi Boenish",
  authorLink: "https://codepen.io/leviboenish/",
  thumbs: ["/thumbs/perfect_purple/1.png"],
  refreshIframe: true,
  isPausable: true,
  config: [
    {
      key: "distortion",
      text: "Distortion",
      type: "range",
      defaultValue: 100,
      min: 2,
      max: 100
    },

    {
      key: "size",
      text: "Size",
      type: "range",
      defaultValue: 60,
      min: 20,
      max: 150
    },

    {
      key: "weight",
      text: "Weight",
      type: "range",
      defaultValue: 8,
      min: 2,
      max: 20
    },
    {
      key: "palette",
      text: "Palettes",
      type: "palette",
      defaultValue: gradientPalettes[0],
      options: gradientPalettes
    }
  ]
};
