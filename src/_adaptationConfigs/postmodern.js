import { gradientPalettes } from "../palettes";

export default {
  title: "Postmodern",
  fileName: "postmodern",
  author: "Kentskyo",
  authorLink: "https://codepen.io/kentskyo/",
  artLink: "https://codepen.io/kentskyo/pen/ojLyzg?editors=1010",
  thumbs: ["/thumbs/postmodern/1.png"],

  config: [
    {
      key: "count",
      text: "Count of Elements",
      type: "range",
      defaultValue: 30,
      min: 1,
      max: 100
    },

    {
      key: "lineWidth",
      text: "Line width",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 20
    },

    {
      key: "palette",
      text: "Palettes",
      type: "palette",
      defaultValue: gradientPalettes[0],
      options: gradientPalettes
    },

    {
      key: "backgroundColor",
      text: "Backgroud",
      type: "single-color",
      defaultValue: "#ffffff",
      options: gradientPalettes[0][0]
    }
  ]
};
