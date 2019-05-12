import { gradientPalettes } from "../palettes";

const palettes = [
  ["#fff", ...gradientPalettes[0]],
  ["#ffebeb", "#fc6767", "#ec008c"],
  ["#ffdaf4", "#fa5a5a", "#ef6034"],
  ["#FDEE82", "#5BB2DD", "#E23C34"],
  ["#ff5401", "#ffffff", "#001e27"],
  ["#230852", "#8c4fb6", "#fa5a5a"],
  ...gradientPalettes.map(pattern => ["#fff", ...pattern])
];

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
      defaultValue: 100,
      min: 1,
      max: 300
    },

    {
      key: "lineWidth",
      text: "Line width",
      type: "range",
      defaultValue: 1,
      min: 1,
      max: 100
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
