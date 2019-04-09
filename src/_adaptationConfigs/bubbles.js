import { gradientPalettes } from "../palettes";

export default {
  title: "Bubbles",
  fileName: "bubbles",
  author: "Colin van Eenige",
  authorLink: "https://codepen.io/cvaneenige/",
  thumbs: ["/thumbs/bubbles/1.png"],
  refreshIframe: true,
  config: [
    {
      type: "boolean",
      key: "castShadow",
      text: "Cast Shadow",
      defaultValue: false
    }
  ],
  palettes: [["#09203f", "#537895"], ...gradientPalettes]
};
