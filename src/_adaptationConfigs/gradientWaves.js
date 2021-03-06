import { gradientPalettes } from "../palettes";

const ownPallete = [
  ["#e9db6d", "#275d69"],
  ["#f3bae3", "#4a6289"],
  ["#00c9ff", "#367e3c"],
  ["#8e2de2", "#21045b"],
  ...gradientPalettes
];

export default {
  title: "Gradient Waves",
  fileName: "gradient_waves",
  author: "Fabio Ottaviani",
  authorLink: "https://codepen.io/supah/",
  thumb: "/thumbs/b27.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: ownPallete[0],
      options: ownPallete
    },
    {
      key: "lines",
      text: "Lines",
      type: "range",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    {
      key: "amplituteX",
      text: "Amplitude X",
      type: "range",
      defaultValue: 60,
      min: 30,
      max: 150
    },
    {
      key: "amplituteY",
      text: "Amplitude Y",
      type: "range",
      defaultValue: 60,
      min: 30,
      max: 150
    },
    {
      key: "smoothness",
      text: "Smoothness",
      type: "range",
      defaultValue: 10,
      min: 1,
      max: 100
    },
    {
      type: "boolean",
      key: "fill",
      text: "Fill",
      defaultValue: true
    },
    {
      key: "randomValues",
      type: "randomValues",
      text: "Randomness",
      isEnabledByDefault: true,
      defaultValue: Array(2)
        .fill()
        .map(() => Math.random())
    }
  ]
};
