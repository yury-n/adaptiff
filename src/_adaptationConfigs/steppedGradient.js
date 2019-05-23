import { gradientPalettes } from "../palettes";

export default {
  title: "Stepped Gradient",
  fileName: "stepped_gradient",
  author: "Jase",
  authorLink: "https://codepen.io/jasesmith/pen/rZmKQG",
  thumbs: ["/thumbs/todo.png"],
  config: [
    {
      key: "steps",
      text: "Steps",
      type: "range",
      defaultValue: 10,
      min: 3,
      max: 15
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
