const palettes = [
  ["#95d8f7", "#4491ff"],
  ["#fcdb33", "#5aa144"],
  ["#dba430", "#d1fcff"],
  ["#6367cc", "#2a0213"],
  ["#fbfa00", "#01a087"],
  ["#256eb0", "#eca5b3"],
  ["#6d107e", "#f03358"],
  ["#f3bae3", "#2f6dce"]
];

export default {
  title: "gradient bubbles",
  fileName: "gradient_bubbles",
  author: "yury-n",
  authorLink: "https://test.com/",
  thumbs: ["/thumbs/todo.png"],
  config: [
    {
      key: "itemSize",
      text: "Item Size",
      type: "range",
      defaultValue: 3,
      min: 0,
      max: 25
    },
    {
      key: "itemsNumInRow",
      text: "Items Per Row",
      type: "range",
      defaultValue: 10,
      min: 0,
      max: 25
    },
    {
      key: "padding",
      text: "Canvas Padding",
      type: "range",
      defaultValue: 3,
      min: 0,
      max: 25
    },
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "angle",
      text: "Angle",
      type: "range",
      defaultValue: 200,
      min: 0,
      max: 360
    }
  ]
};
