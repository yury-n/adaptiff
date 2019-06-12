const palettes = [
  ["#dba430", "#d1fcff"],
  ["#bee3f6", "#857a95"],
  ["#95d8f7", "#4491ff"],
  ["#fcdb33", "#5aa144"],
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
  thumbs: ["/thumbs/gradient_bubbles/1.png"],
  hasRandomness: true,
  config: [
    {
      key: "itemSize",
      text: "Item Size",
      type: "range",
      defaultValue: 10,
      min: 0,
      max: 100
    },
    {
      key: "itemsNumInRow",
      text: "Items Per Row",
      type: "range",
      defaultValue: 16,
      min: 0,
      max: 25
    },
    {
      key: "padding",
      text: "Canvas Padding",
      type: "range",
      defaultValue: 50,
      min: 0,
      max: 100
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
      text: "Gradient Angle",
      type: "range",
      defaultValue: 200,
      min: 0,
      max: 360
    },
    {
      type: "boolean",
      key: "withRandomness",
      text: "With Randomness",
      defaultValue: false
    }
  ]
};
