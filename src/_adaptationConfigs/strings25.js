import { gradientPalettes } from "../palettes";

export default {
  title: "Strings 2.5",
  fileName: "strings25",
  author: "Derek Morash",
  authorLink: "https://codepen.io/derekmorash",
  thumbs: ["/thumbs/strings25/1.png"],
  thumbBackgroundSize: 280,
  config: [
    // TODO: this should be just one control
    {
      key: "startSizePercent",
      text: "Start at % width",
      type: "range",
      defaultValue: 10,
      min: 0,
      max: 50
    },
    {
      key: "endSizePercent",
      text: "End at % width",
      type: "range",
      defaultValue: 20,
      min: 0,
      max: 100
    }
  ],
  palettes: [
    ["#ffefd8", "#000"],
    ["#d8e3ff", "#000"],
    ["#d8fff8", "#000"],
    ["#d8ffea", "#000"],
    ["#ffd8e0", "#000"],
    ["#d8f1ff", "#000"],
    ...gradientPalettes
  ]
};
