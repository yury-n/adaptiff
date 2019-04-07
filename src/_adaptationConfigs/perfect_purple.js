import {gradientPalettes} from "../palettes";

export default {
  title: "Perfect Purples",
  fileName: "perfect_purple",
  author: "Levi Boenish",
  authorLink: "https://codepen.io/leviboenish/",
  thumbs: ["/thumbs/perfect_purple/1.png"],
  refreshIframe: true,

  config: [
    {
      key: "metalness",
      text: "Metalness",
      type: "select",
      defaultValue: 0,

      options: [
        {key: 0, text: "Off", value: 0},
        {key: 1, text: "On", value: 1},
      ],
    },

    {
      key: "distortion",
      text: "Distortion",
      type: "range",
      defaultValue: 100,
      min: 2,
      max: 100,
    },

    {
      key: "size",
      text: "Size",
      type: "range",
      defaultValue: 60,
      min: 20,
      max: 150,
    },

    {
      key: "weight",
      text: "Weight",
      type: "range",
      defaultValue: 8,
      min: 2,
      max: 20,
    },
  ],

  palettes: [...gradientPalettes],
  externalScripts: ["https://unpkg.com/three@0.100.0/build/three.js"],
};
