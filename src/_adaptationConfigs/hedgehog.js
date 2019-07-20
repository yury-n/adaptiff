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
      defaultValue: true
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
      defaultValue: { r: 255, g: 255, b: 255, a: 0.3 },
      allowAlpha: true
    }
  ]
};
