export default {
  title: "Tatters",
  fileName: "tatters/index",
  author: "Kjetil Midtgarden Golid",
  authorLink: "https://github.com/kgolid",
  thumb: "/thumbs/todo.png",
  config: [
    {
      type: "boolean",
      key: "withBackground",
      text: "With Background",
      defaultValue: true
    },
    {
      key: "backgroundColor",
      text: "Background Color",
      type: "single-color",
      defaultValue: "#664c75",
      condition: { key: "withBackground", value: true }
    },
    {
      key: "strokeColor",
      text: "Stroke Color",
      type: "single-color",
      defaultValue: { r: 226, g: 157, b: 150, a: 0.2 },
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
