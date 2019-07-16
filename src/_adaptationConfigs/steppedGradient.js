import { gradientPalettes } from "../palettes";

const palettes = [
  ["#330040", "#ff9d29"],
  ["#ffffff", "#398bff"],
  ["#74ff27", "#002017"],
  ["#0bffe5", "#004972"],
  ["#ff3800", "#f9d423"],
  ["#780206", "#061161"],
  ["#f94b80", "#ffe031"],
  ["#fbfa00", "#0ea991"],
  ...gradientPalettes
];

export default {
  title: "Stepped Gradient",
  fileName: "stepped_gradient",
  author: "Jase",
  authorLink: "https://codepen.io/jasesmith/pen/rZmKQG",
  thumb: "/thumbs/b4.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "steps",
      text: "Steps",
      type: "range",
      defaultValue: 15,
      min: 3,
      max: 30
    }
  ]
};
