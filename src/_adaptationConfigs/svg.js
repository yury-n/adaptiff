import { gradientPalettes } from "../palettes";

export default {
  title: "svg",
  fileName: "svg",
  author: "test",
  authorLink: "https://test.com/",
  thumb: "/thumbs/todo.png",
  lockAspectRatio: true,
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: gradientPalettes[0],
      disableAlpha: false,
      options: gradientPalettes
    }
  ]
};
