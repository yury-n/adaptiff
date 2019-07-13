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
  title: "blobmaker",
  fileName: "blobmaker/build/index",
  author: "cristinapoiata",
  authorLink: "http://www.zcreativelabs.com/",
  thumb: "/background_thumbs/blobmaker.png",
  isTransparent: true,
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "contrast",
      text: "Contrast",
      type: "range",
      defaultValue: 5,
      min: 0,
      max: 10
    },
    {
      key: "complexity",
      text: "Complexity",
      type: "range",
      updatesRandomValuesCount: true,
      defaultValue: 10,
      min: 3,
      max: 30
    },
    {
      key: "angle",
      text: "Gradient Angle",
      type: "range",
      defaultValue: 0,
      min: 0,
      max: 360
    },
    {
      key: "randomValues",
      type: "randomValues",
      text: "Randomness",
      isEnabledByDefault: true,
      defaultValue: Array(10) // 10 -- is complexity
        .fill()
        .map(() => Math.random())
    }
  ]
};
