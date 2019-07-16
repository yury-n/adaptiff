export default {
  title: "blank",
  fileName: "blank",
  thumb: "/thumbs/blank.png",
  config: [
    {
      type: "boolean",
      key: "transparent",
      text: "Transparent",
      defaultValue: false
    },
    {
      key: "color",
      text: "Color",
      type: "single-color",
      defaultValue: "#ffffff",
      condition: { key: "transparent", value: false }
    }
  ]
};
