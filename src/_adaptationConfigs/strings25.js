import { gradientPalettes } from "../palettes";

const palettes = [
  ["#ffefd8", "#000"],
  ["#d8e3ff", "#000"],
  ["#d8fff8", "#000"],
  ["#d8ffea", "#000"],
  ["#ffd8e0", "#000"],
  ["#d8f1ff", "#000"],
  ['#593c2e', '#ffcf2c'],
  ...gradientPalettes
];

export default {
  title: "Strings 2.5",
  fileName: "strings25",
  author: "Derek Morash",
  authorLink: "https://codepen.io/derekmorash",
  thumbs: ["/thumbs/strings25/1.png"],
  thumbBackgroundSize: 280,
  config: [
    {
      key: "sizePercent",
      text: "Lines start/end at % width",
      type: "range",
      defaultValue: [10, 20],
      min: 0,
      max: 50
    },
    {
      key: "palette",
      text: "Palettes",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
