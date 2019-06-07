import { gradientPalettes } from "../palettes";

const palettes = [
  ["#09203f", "#537895"],
  ["#a915a7", "#ffd62b"],
  ["#41295a", "#2f0743"],
  ...gradientPalettes
];

export default {
  title: "Bubbles",
  fileName: "bubbles",
  author: "Colin van Eenige",
  authorLink: "https://codepen.io/cvaneenige/",
  thumbs: ["/thumbs/bubbles/1.png"],
  refreshIframe: true,
  isPausable: true,
  config: [
    {
      type: "boolean",
      key: "castShadow",
      text: "Cast Shadow",
      defaultValue: false
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
