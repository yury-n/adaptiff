import { gradientPalettes } from "../palettes";

const palettes = [
  ["#ffffff", "#66ccf6"],
  ["#6d107e", "#f03358"],
  ["#707b93", "#3f4c6b"],
  ["#f83600", "#f9d423"],
  ...gradientPalettes
];

export default {
  title: "Wall Pattern",
  fileName: "wallPattern",
  author: "Tim Holman",
  authorLink: "https://codepen.io/tholman",
  thumbs: ["/thumbs/wallPattern/2.png"],
  thumbBackgroundSize: 330,
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
