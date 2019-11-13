export default {
  title: "png",
  fileName: "png",
  author: "test",
  authorLink: "https://test.com/",
  thumb: "/thumbs/todo.png",
  lockAspectRatio: true,
  isSvg: true, // TODO: change
  config: [
    {
      key: "hue",
      text: "Hue Rotate",
      type: "range",
      defaultValue: 0,
      min: 0,
      max: 360
    },
    {
      key: "saturate",
      text: "Saturate",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 500
    },
    {
      key: "brightness",
      text: "Brightness",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 500
    },
    {
      key: "contrast",
      text: "Contrast",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 250
    }
  ]
};
