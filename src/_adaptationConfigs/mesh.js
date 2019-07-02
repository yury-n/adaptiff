import { gradientPalettes } from "../palettes";

const palettes = [
  ["#593c2e", "#ffcf2c"],
  ["#d8fff8", "#000"],
  ["#60f7dd", "#000"],
  ["#ffffff", "#000"],
  ["#ffefd8", "#000"],
  ["#d8e3ff", "#000"],
  ["#d8ffea", "#000"],
  ["#ffd8e0", "#000"],
  ["#d8f1ff", "#000"],
  ["#a7388a", "#ffffff"],
  ...gradientPalettes
];

export default {
  title: "mesh noise",
  fileName: "mesh",
  author: "Derek Morash",
  authorLink: "https://codepen.io/derekmorash/pen/VdgGXZ",
  thumbs: ["/thumbs/mesh/1.png"],
  hasRandomness: true, // TODO: replace with config.randomValues
  config: [
    {
      key: "distanceBetween",
      text: "Distance between dots",
      type: "range",
      defaultValue: 10,
      min: 5,
      max: 20
    },
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
