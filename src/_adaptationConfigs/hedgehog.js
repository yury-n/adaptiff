export default {
  title: "Hedgehog",
  fileName: "hedgehog/index",
  author: "Kjetil Midtgarden Golid",
  authorLink: "https://github.com/kgolid",
  thumb: "/thumbs/todo.png",
  config: [
    {
      type: "boolean",
      key: "withBackground",
      text: "With Background",
      defaultValue: false
    },
    {
      key: "backgroundColor",
      text: "Background Color",
      type: "single-color",
      defaultValue: "#222222",
      condition: { key: "withBackground", value: true }
    },
    {
      key: "strokeColor",
      text: "Stroke Color",
      type: "single-color",
      defaultValue: "#8e2cf9",
      allowAlpha: true
    },
    {
      key: "randomValues",
      type: "randomValues",
      text: "Randomness",
      isEnabledByDefault: true,
      isNotSwitchable: true,
      defaultValue: Array(1)
        .fill()
        .map(() => Math.random())
    }
  ]
};
