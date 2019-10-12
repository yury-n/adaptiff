import { gradientPalettes } from "../palettes";

export default {
  title: "Radial gradient",
  fileName: "radial_gradient",
  thumb: "/thumbs/b10.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: gradientPalettes[0],
      options: gradientPalettes
    }
  ]
};
