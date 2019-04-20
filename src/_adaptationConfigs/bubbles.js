import { gradientPalettes } from "../palettes";

const palettes = [["#09203f", "#537895"], ...gradientPalettes];

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
      text: "Palettes",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
