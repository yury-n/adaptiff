import { gradientPalettes } from "../palettes";

export default {
  title: "Simple Ripple",
  fileName: "simple_ripple",
  author: "Bogdan Konovchenko",
  thumb: "/thumbs/todo.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ["#7f1d4f", "#7f1d4f"],
      options: gradientPalettes
    },
    {
      key: "itemsNum",
      text: "Items Number",
      type: "range",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    {
      key: "strokeWidth",
      text: "Stroke Width",
      type: "range",
      defaultValue: 3,
      min: 0,
      max: 100
    },
    {
      key: "radius",
      text: "Radius",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 100
    },
  ]
};
