export default {
  title: "Subtle Rib",
  fileName: "subtle_rib",
  author: "yury-n",
  thumbs: ["/thumbs/todo.png"],
  config: [
    {
      key: "mode",
      text: "Mode",
      type: "select",
      defaultValue: "vertical",
      options: [
        { key: "vertical", text: "Vertical", value: "vertical" },
        { key: "horizontal", text: "Horizontal", value: "horizontal" }
      ]
    },
    {
      key: "intensity",
      text: "Intensity",
      type: "range",
      defaultValue: 20,
      min: 0,
      max: 50
    },
    {
      key: "color",
      text: "Color",
      type: "single-color",
      defaultValue: "#fcd633"
    }
  ]
};
