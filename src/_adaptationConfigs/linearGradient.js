import { gradientPalettes } from "../palettes";

export default {
  title: "Linear gradient",
  fileName: "linear_gradient",
  thumb: "/thumbs/b10.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: gradientPalettes[0],
      options: gradientPalettes
    },
    {
      key: "direction",
      text: "Direction",
      type: "select",
      defaultValue: "custom_angle",
      options: [
        {
          key: 0,
          text: "Custom Angle",
          value: "custom_angle"
        },
        { key: 1, text: "Left to Right", value: "right" },
        { key: 2, text: "Right to Left", value: "left" },
        { key: 3, text: "Top to Bottom", value: "bottom" },
        { key: 4, text: "Bottom to Top", value: "top" }
      ]
    },
    {
      key: "angle",
      text: "Angle",
      type: "range",
      defaultValue: 200,
      condition: { key: "direction", value: "custom_angle" },
      min: 0,
      max: 360
    }
  ]
};
